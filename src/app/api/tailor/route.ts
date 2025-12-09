import { NextResponse } from "next/server";
import {
  contactInfo,
  summaryPoints,
  skillGroups,
  experienceHistory,
  projectShowcase,
} from "@/data/profile";

type TailorRequest = {
  role?: string;
  company?: string;
  requirements?: string;
};

const modelId = process.env.GEMINI_MODEL || "gemini-1.5-flash";
const apiBase = process.env.GEMINI_API_BASE || "https://generativelanguage.googleapis.com";
const modelEndpoint = `${apiBase}/v1/models/${modelId}:generateContent`;

const buildPrompt = (input: TailorRequest) => {
  const skills = skillGroups.map((g) => `${g.label}: ${g.items.join(", ")}`).join("\n");
  const experiences = experienceHistory
    .map(
      (exp) =>
        `${exp.role} at ${exp.company} (${exp.timeline}) -> ${exp.bullets.join("; ")}`
    )
    .join("\n");
  const projects = projectShowcase
    .map((proj) => `${proj.name}: ${proj.impact} | Stack: ${proj.stack}`)
    .join("\n");

  return `
You are tailoring a CV snapshot and cover letter for ${contactInfo.name}.
Role: ${input.role || "Not provided"}
Company: ${input.company || "Not provided"}
Job Requirements: ${input.requirements || "Not provided"}

Base profile:
- Title: ${contactInfo.title}
- Location: ${contactInfo.location}
- Email: ${contactInfo.email}
- Summary: ${summaryPoints.join(" ")}
- Skills:\n${skills}
- Experience:\n${experiences}
- Projects:\n${projects}

Return a strict JSON object with keys:
{
  "summary": string[] (2-4 concise bullets),
  "skills": string[] (up to 10 highly relevant skills),
  "experiences": { "role": string, "company": string, "timeline": string, "bullets": string[] }[] (top 3 relevant),
  "projects": { "name": string, "impact": string, "stack": string }[] (top 2),
  "coverLetter": string (3-5 short paragraphs separated by blank lines)
}
No prose, only JSON.`;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TailorRequest;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured on the server." },
        { status: 500 },
      );
    }

    const prompt = buildPrompt(body);
    const response = await fetch(`${modelEndpoint}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.6,
        },
        safetySettings: [
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: "Gemini request failed", details: text },
        { status: 502 },
      );
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.find((p: { text?: string }) => p.text)?.text;

    if (!text) {
      return NextResponse.json(
        { error: "Gemini returned an unexpected response" },
        { status: 502 },
      );
    }

    try {
      const parsed = JSON.parse(text);
      return NextResponse.json(parsed);
    } catch (error) {
      return NextResponse.json(
        { error: "Gemini returned non-JSON response", details: text },
        { status: 502 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate tailored content", details: `${error}` },
      { status: 500 },
    );
  }
}
