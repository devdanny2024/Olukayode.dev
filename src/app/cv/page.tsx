import Link from "next/link";
import {
  contactInfo,
  summaryPoints,
  skillGroups,
  experienceHistory,
  projectShowcase,
} from "@/data/profile";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex flex-col gap-2 pb-4 border-b border-border/50">
          <h1 className="text-4xl font-bold">{contactInfo.name}</h1>
          <p className="text-lg text-muted-foreground">{contactInfo.title}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{contactInfo.location}</span>
            <Link href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
              {contactInfo.email}
            </Link>
            <span>{contactInfo.phone}</span>
            <Link href={contactInfo.github} className="text-primary hover:underline" target="_blank">
              GitHub
            </Link>
            <Link href={contactInfo.linkedin} className="text-primary hover:underline" target="_blank">
              LinkedIn
            </Link>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Summary</h2>
          <ul className="space-y-2 text-muted-foreground">
            {summaryPoints.map((line) => (
              <li key={line} className="flex gap-2 leading-relaxed">
                <span className="text-primary">-</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="font-medium">{group.label}</p>
                <p className="text-sm text-muted-foreground">{group.items.join(" | ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          {experienceHistory.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="border-b border-border/30 pb-4 last:border-b-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-semibold text-foreground">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.timeline}</p>
              </div>
              <ul className="mt-2 space-y-1 text-muted-foreground text-sm">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-primary">-</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {projectShowcase.map((proj) => (
              <div key={proj.name} className="p-4 rounded-xl border border-border/40">
                <p className="font-semibold">{proj.name}</p>
                <p className="text-sm text-muted-foreground">{proj.impact}</p>
                <p className="text-xs text-muted-foreground mt-1">{proj.stack}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
