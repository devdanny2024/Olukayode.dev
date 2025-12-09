'use client';

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Clipboard, FileText, Send, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  contactInfo,
  summaryPoints,
  skillGroups,
  experienceHistory,
  projectShowcase,
  differentiators,
} from "@/data/profile";

const stopWords = new Set([
  "and",
  "the",
  "for",
  "with",
  "you",
  "your",
  "that",
  "are",
  "our",
  "this",
  "will",
  "have",
  "has",
  "need",
  "looking",
  "work",
  "team",
  "role",
  "job",
  "experience",
  "years",
]);

const defaultRequirement =
  "We need a full-stack engineer comfortable with Next.js, cloud infrastructure, CI/CD, and blockchain/Web3 fundamentals. You will collaborate with product to ship secure, scalable features.";

const extractKeywords = (text: string) => {
  const matches = text.toLowerCase().match(/[a-z0-9+#.]{3,}/g) || [];
  return Array.from(new Set(matches.filter((word) => !stopWords.has(word))));
};

const dedupe = <T,>(items: T[]) => Array.from(new Set(items));

type TailorResponse = {
  summary: string[];
  skills: string[];
  experiences: {
    role: string;
    company: string;
    timeline: string;
    bullets: string[];
  }[];
  projects: {
    name: string;
    impact: string;
    stack: string;
  }[];
  coverLetter: string;
  coldEmail: string;
  offerLetter: string;
};

export default function ApplyPage() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [requirements, setRequirements] = useState(defaultRequirement);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  const keywords = useMemo(() => extractKeywords(requirements), [requirements]);

  const flatSkills = useMemo(
    () => skillGroups.flatMap((group) => group.items),
    []
  );

  const heuristicSkills = useMemo(() => {
    const matches = flatSkills.filter((skill) =>
      keywords.some((kw) => skill.toLowerCase().includes(kw))
    );
    const selected = matches.length ? matches : flatSkills;
    return dedupe(selected).slice(0, 10);
  }, [flatSkills, keywords]);

  const heuristicExperiences = useMemo(() => {
    return experienceHistory.map((exp) => {
      const keywordBullets = exp.bullets.filter((b) =>
        keywords.some((kw) => b.toLowerCase().includes(kw) || (exp.focus || []).includes(kw)),
      );
      const bullets = keywordBullets.length ? keywordBullets : exp.bullets;
      return { ...exp, bullets: bullets.slice(0, 3) };
    });
  }, [keywords]);

  const pickRelevant = <T,>(
    items: T[],
    extractText: (item: T) => string[],
    fallback = 3
  ) => {
    const filtered = items.filter((item) =>
      extractText(item).some((line) =>
        keywords.some((kw) => line.toLowerCase().includes(kw))
      )
    );
    return (filtered.length ? filtered : items).slice(0, fallback);
  };

  const heuristicProjects = useMemo(
    () =>
      pickRelevant(
        projectShowcase,
        (proj) => [proj.name, proj.impact, proj.stack],
        2
      ),
    [keywords]
  );

  const heuristicSummary = useMemo(() => {
    const roleLine = role
      ? `Targeting ${role}${company ? ` at ${company}` : ""}.`
      : differentiators[0];
    const keywordLine = keywords.length
      ? `Focus areas: ${keywords.slice(0, 6).join(", ")}.`
      : differentiators[1];

    return [summaryPoints[0], roleLine, keywordLine];
  }, [company, differentiators, keywords, role, summaryPoints]);

  const heuristicCoverLetter = useMemo(() => {
    const topExperience = heuristicExperiences[0];
    const addressedCompany = company ? `${company} team` : "Hiring Manager";
    const roleName = role || "the role";
    const problemLine = requirements
      ? `Your description highlights ${keywords.slice(0, 5).join(", ") || "product and delivery"}; I can help by pairing ${heuristicSkills
          .slice(0, 4)
          .join(", ")} with disciplined delivery.`
      : "I prioritize pairing clear outcomes with reliable engineering.";

    const recentImpact = topExperience
      ? `Recently at ${topExperience.company}, I ${topExperience.bullets[0]}`
      : "Recently, I have been leading teams to ship production systems end-to-end.";

    return [
      `Dear ${addressedCompany},`,
      `I am excited to apply for ${roleName}. I blend full-stack engineering, blockchain expertise, and DevOps discipline to ship secure, scalable products.`,
      `${recentImpact}`,
      problemLine,
      `Thank you for your time and consideration.`,
      `${contactInfo.name}`,
      `${contactInfo.email} | ${contactInfo.phone}`,
    ].join("\n\n");
  }, [company, contactInfo.email, contactInfo.name, contactInfo.phone, heuristicExperiences, heuristicSkills, keywords, requirements, role]);

  const [aiSummary, setAiSummary] = useState<string[] | null>(null);
  const [aiSkills, setAiSkills] = useState<string[] | null>(null);
  const [aiExperiences, setAiExperiences] = useState<TailorResponse["experiences"] | null>(null);
  const [aiProjects, setAiProjects] = useState<TailorResponse["projects"] | null>(null);
  const [aiCoverLetter, setAiCoverLetter] = useState<string | null>(null);
  const [aiColdEmail, setAiColdEmail] = useState<string | null>(null);
  const [aiOfferLetter, setAiOfferLetter] = useState<string | null>(null);

  const mergeExperiences = useMemo(() => {
    if (!aiExperiences) return heuristicExperiences;
    return experienceHistory.map((exp) => {
      const aiMatch = aiExperiences.find(
        (ai) =>
          ai.company.toLowerCase() === exp.company.toLowerCase() &&
          ai.role.toLowerCase() === exp.role.toLowerCase(),
      );
      return aiMatch ? { ...exp, ...aiMatch, bullets: aiMatch.bullets ?? exp.bullets } : exp;
    });
  }, [aiExperiences, heuristicExperiences]);

  const summaryToUse = aiSummary ?? heuristicSummary;
  const skillsToUse = aiSkills ?? heuristicSkills;
  const experiencesToUse = mergeExperiences;
  const projectsToUse = aiProjects ?? heuristicProjects;
  const coverLetterToUse = aiCoverLetter ?? heuristicCoverLetter;
  const coldEmailToUse = aiColdEmail ?? heuristicCoverLetter.replace("Dear", "Hi").split("\n\n").slice(0, 3).join("\n\n");
  const offerLetterToUse =
    aiOfferLetter ??
    [
      `To the ${company ? `${company} team` : "hiring team"},`,
      `I am excited to contribute as ${role || "this role"}. Below is a concise offer of value tailored to your needs.`,
      `Key strengths: ${skillsToUse.slice(0, 5).join(", ")}.`,
      `Recent impact: ${(experiencesToUse[0]?.bullets ?? []).slice(0, 1).join(" ")}`,
      `Let me know the best next step to move this forward.`,
      `${contactInfo.name}`,
    ].join("\n\n");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Application for ${role || "the role"}${company ? ` at ${company}` : ""}`
    );
    const experienceLine = experiencesToUse
      .map((exp) => `${exp.role} @ ${exp.company}`)
      .join(" | ");
    const highlights = `Top skills: ${skillsToUse.slice(0, 6).join(", ")}\nExperience: ${experienceLine}`;
    const body = encodeURIComponent(`${coverLetterToUse}\n\n---\nCV Snapshot\n${highlights}`);
    return `mailto:?subject=${subject}&body=${body}`;
  }, [company, coverLetterToUse, experiencesToUse, role, skillsToUse]);

  const handleCopy = async (label: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopyMessage(`${label} copied to clipboard`);
      setTimeout(() => setCopyMessage(""), 2000);
    } catch (error) {
      setCopyMessage("Clipboard is unavailable in this browser");
      setTimeout(() => setCopyMessage(""), 2000);
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const resp = await fetch("/api/tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, company, requirements }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        const detail = data?.details ? `: ${data.details}` : "";
        throw new Error(data?.error ? `${data.error}${detail}` : "Failed to generate with Gemini");
      }

      const data = (await resp.json()) as TailorResponse;
      setAiSummary(data.summary);
      setAiSkills(data.skills);
      setAiExperiences(data.experiences);
      setAiProjects(data.projects);
      setAiCoverLetter(data.coverLetter);
      setAiColdEmail(data.coldEmail);
      setAiOfferLetter(data.offerLetter);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setHasGenerated(true);
      setIsLoading(false);
      const preview = document.getElementById("tailored-preview");
      if (preview) {
        preview.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    setDownloadError("");
    try {
      const resp = await fetch("/api/cv-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: contactInfo,
          role,
          company,
          summary: summaryToUse,
          skills: skillsToUse,
          experiences: experiencesToUse,
          projects: projectsToUse,
        }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data?.details || data?.error || "Failed to generate PDF");
      }

      const blob = await resp.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "tailored-cv.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setDownloadError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden w-full isolate">
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute -left-20 top-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #00d9ff 0%, transparent 70%)" }} />
        <div className="absolute right-0 bottom-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 py-12 space-y-10 relative z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-8 border border-border/50 max-w-full"
        >
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                <Sparkles className="h-4 w-4" />
                <span>Application Studio</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Tailor your CV and cover letter from this portfolio
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Paste a job requirement and instantly build a role-specific CV snapshot and cover letter
                without touching the main navigation.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-sm text-muted-foreground text-right">
                Logged in as
              </div>
              <div className="px-4 py-2 rounded-xl border border-border/60 bg-muted/30">
                <p className="font-semibold">{contactInfo.name}</p>
                <p className="text-sm text-muted-foreground">{contactInfo.title}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-8 items-start">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6 border border-border/50 space-y-6 max-w-full"
          >
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Start with the job requirements, role, and company name. The preview updates as soon as you click tailor.
                </p>
              </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role Title</Label>
                <Input
                  id="role"
                  placeholder="Senior Full Stack Engineer"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Acme Labs"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Job requirements</Label>
              <Textarea
                id="requirements"
                rows={8}
                value={requirements}
                onChange={(event) => setRequirements(event.target.value)}
                placeholder="Paste the role description, required skills, and responsibilities."
              />
            </div>

              <div className="flex items-center justify-between flex-wrap gap-3 w-full">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>{keywords.length ? `${keywords.length} keywords detected` : "Add requirements to extract keywords"}</span>
                </div>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Generating..." : "Tailor CV & Cover Letter"}
                </Button>
              </div>
              {error && <div className="text-sm text-destructive">{error}</div>}
              {copyMessage && (
                <div className="text-sm text-primary">{copyMessage}</div>
              )}
            </motion.form>

          <motion.div
            id="tailored-preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-full"
          >
            <div className="glass rounded-2xl p-6 border border-border/50 space-y-4 max-w-full">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">
                    CV snapshot for {role || "your next role"}
                  </p>
                  <h2 className="text-2xl font-semibold">{contactInfo.name}</h2>
                  <p className="text-muted-foreground">{contactInfo.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{company || "Company TBD"}</Badge>
                  <Badge variant="outline">{role || "Role TBD"}</Badge>
                </div>
              </div>

              <div className="space-y-2">
                {summaryToUse.map((line) => (
                  <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-semibold">Relevant skills</p>
                <div className="flex flex-wrap gap-2">
                  {skillsToUse.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <p className="text-sm font-semibold">Experience focus</p>
                {experiencesToUse.map((exp) => (
                  <div key={`${exp.company}-${exp.role}`} className="p-3 rounded-xl border border-border/40 bg-muted/30">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold">{exp.role}</p>
                        <p className="text-xs text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{exp.timeline}</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                      {exp.bullets.slice(0, 2).map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-primary">-</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold">Projects to spotlight</p>
                <div className="grid gap-2">
                  {projectsToUse.map((proj) => (
                    <div key={proj.name} className="p-3 rounded-xl border border-border/40 bg-muted/20">
                      <p className="font-semibold text-sm">{proj.name}</p>
                      <p className="text-xs text-muted-foreground">{proj.impact}</p>
                      <p className="text-xs text-muted-foreground mt-1">{proj.stack}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleCopy("CV snapshot", summaryToUse.concat(skillsToUse).join("\n"))}
                >
                  <Clipboard className="h-4 w-4 mr-2" />
                  Copy CV snapshot
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleDownloadPdf}
                  disabled={isDownloading}
                >
                  {isDownloading ? "Building PDF..." : "Download PDF"}
                </Button>
                <Button asChild variant="secondary">
                  <a href={mailtoHref}>
                    <Send className="h-4 w-4 mr-2" />
                    Submit via email
                  </a>
                </Button>
              </div>
              {downloadError && (
                <p className="text-sm text-destructive">{downloadError}</p>
              )}
            </div>

            <div className="glass rounded-2xl p-6 border border-border/50 space-y-4 max-w-full">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Cover letter draft</p>
                  <h3 className="text-xl font-semibold">Ready to edit and send</h3>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleCopy("Cover letter", coverLetterToUse)}
                >
                  <Clipboard className="h-4 w-4 mr-2" />
                  Copy letter
                </Button>
              </div>
              <pre className="text-sm whitespace-pre-wrap break-words leading-relaxed text-muted-foreground font-sans bg-muted/30 p-4 rounded-xl border border-border/40">
                {coverLetterToUse}
              </pre>
            </div>

            <div className="glass rounded-2xl p-6 border border-border/50 space-y-4 max-w-full">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Cold outreach email</p>
                  <h3 className="text-xl font-semibold">Short intro you can paste</h3>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleCopy("Cold email", coldEmailToUse)}
                >
                  <Clipboard className="h-4 w-4 mr-2" />
                  Copy cold email
                </Button>
              </div>
              <pre className="text-sm whitespace-pre-wrap break-words leading-relaxed text-muted-foreground font-sans bg-muted/30 p-4 rounded-xl border border-border/40">
                {coldEmailToUse}
              </pre>
            </div>

            <div className="glass rounded-2xl p-6 border border-border/50 space-y-4 max-w-full">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Offer-style note</p>
                  <h3 className="text-xl font-semibold">Concise offer of value</h3>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleCopy("Offer letter", offerLetterToUse)}
                >
                  <Clipboard className="h-4 w-4 mr-2" />
                  Copy offer letter
                </Button>
              </div>
              <pre className="text-sm whitespace-pre-wrap break-words leading-relaxed text-muted-foreground font-sans bg-muted/30 p-4 rounded-xl border border-border/40">
                {offerLetterToUse}
              </pre>
            </div>
          </motion.div>
        </div>

        {hasGenerated && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6 border border-border/50 text-sm text-muted-foreground"
          >
            You can now review the tailored CV snapshot and cover letter above. Update the fields and click tailor again any time.
          </motion.div>
        )}
      </div>
    </div>
  );
}
