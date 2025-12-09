import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
type PDFDocInstance = InstanceType<typeof PDFDocument>;
import {
  contactInfo,
  summaryPoints,
  skillGroups,
  experienceHistory,
  projectShowcase,
} from "@/data/profile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

type Experience = {
  role: string;
  company: string;
  timeline: string;
  bullets: string[];
};

type Project = {
  name: string;
  impact: string;
  stack: string;
};

type Payload = {
  contact?: Partial<typeof contactInfo>;
  role?: string;
  company?: string;
  summary?: string[];
  skills?: string[];
  experiences?: Experience[];
  projects?: Project[];
};

const toBuffer = (doc: PDFDocInstance) =>
  new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", (err) => reject(err));
  });

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;

    const mergedContact = {
      ...contactInfo,
      ...(body.contact || {}),
    };

    const summary = body.summary && body.summary.length ? body.summary : summaryPoints;
    const skills =
      body.skills && body.skills.length
        ? body.skills
        : skillGroups.flatMap((g) => g.items).slice(0, 10);
    const experiences =
      body.experiences && body.experiences.length ? body.experiences : experienceHistory.slice(0, 3);
    const projects =
      body.projects && body.projects.length ? body.projects : projectShowcase.slice(0, 2);

    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const bufferPromise = toBuffer(doc);

    // Header
    doc.fontSize(18).font("Helvetica-Bold").text(mergedContact.name, { continued: false });
    doc.moveDown(0.2);
    doc.fontSize(11).font("Helvetica").fillColor("#444").text(mergedContact.title);
    doc.fillColor("#000");
    doc.moveDown(0.3);
    doc
      .fontSize(10)
      .text(
        `${mergedContact.location || ""}  |  ${mergedContact.email}  |  ${mergedContact.phone || ""}`,
      );
    doc.text(`${mergedContact.github}  |  ${mergedContact.linkedin}`);
    if (body.role || body.company) {
      doc.moveDown(0.3);
      doc.fontSize(10).fillColor("#0f766e");
      doc.text(
        `Target: ${body.role || "Role"}${body.company ? ` @ ${body.company}` : ""}`,
      );
      doc.fillColor("#000");
    }

    // Summary
    doc.moveDown(0.6);
    doc.fontSize(12).font("Helvetica-Bold").text("Summary");
    doc.moveDown(0.2);
    doc.font("Helvetica").fontSize(10);
    summary.forEach((line) => {
      doc.text(`• ${line}`, { lineGap: 2 });
    });

    // Skills
    doc.moveDown(0.6);
    doc.font("Helvetica-Bold").fontSize(12).text("Skills");
    doc.moveDown(0.2);
    doc.font("Helvetica").fontSize(10).text(skills.join(" • "), { lineGap: 2 });

    // Experience
    doc.moveDown(0.6);
    doc.font("Helvetica-Bold").fontSize(12).text("Experience");
    doc.moveDown(0.2);
    experiences.forEach((exp) => {
      doc.font("Helvetica-Bold").fontSize(11).text(`${exp.role}  |  ${exp.company}`);
      doc.font("Helvetica").fontSize(9).fillColor("#555").text(exp.timeline);
      doc.fillColor("#000");
      exp.bullets.slice(0, 4).forEach((b) => {
        doc.text(`• ${b}`, { lineGap: 1 });
      });
      doc.moveDown(0.3);
    });

    // Projects
    doc.moveDown(0.3);
    doc.font("Helvetica-Bold").fontSize(12).text("Projects");
    doc.moveDown(0.2);
    projects.forEach((proj) => {
      doc.font("Helvetica-Bold").fontSize(11).text(proj.name);
      doc.font("Helvetica").fontSize(9).fillColor("#555").text(proj.stack);
      doc.fillColor("#000").fontSize(10).text(proj.impact);
      doc.moveDown(0.3);
    });

    doc.end();
    const pdfBuffer = await bufferPromise;

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="tailored-cv.pdf"',
      },
    });
  } catch (error) {
    console.error("cv-pdf error", error);
    return NextResponse.json(
      { error: "Failed to create PDF", details: `${error}` },
      { status: 500 },
    );
  }
}
