import Link from "next/link";

const contact = {
  name: "OluKayode (Peters) Soliu",
  title: "Full Stack Software Developer · Blockchain Engineer · DevOps",
  location: "Lagos, Nigeria",
  email: "Soliupeter@gmail.com",
  phone: "+234",
  github: "https://github.com/devdanny2024",
  linkedin: "https://www.linkedin.com/in/olukayode-soliu-70610824b/",
};

const summary = [
  "Full-stack engineer with a focus on building scalable systems, blockchain products, and cloud-native apps.",
  "Co-Founder & Lead Engineer at BLVCK CODE LLC, delivering smart home automation solutions end-to-end.",
  "Experience leading engineering teams, implementing CI/CD, and shipping production-grade web and mobile apps.",
];

const skills = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Solidity", "Swift", "Dart", "SQL", "Python"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "React Native", "Flutter", "Node.js", "Express"],
  },
  {
    label: "Blockchain & Web3",
    items: ["Solidity", "Web3.js", "Ethers.js", "Smart Contracts", "NFTs", "DeFi"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Kubernetes", "Terraform"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "SwiftUI", "React Native", "iOS", "Android"],
  },
  {
    label: "Tools",
    items: ["Git", "Figma", "Postman", "VS Code", "Linux", "Agile/Scrum"],
  },
];

const experiences = [
  {
    company: "Wanzami",
    role: "Software Engineer / DevOps",
    timeline: "2022 - Present",
    bullets: [
      "Built and maintained CI/CD pipelines that cut deployment time by 60%.",
      "Architected microservices infrastructure on AWS with Docker and Kubernetes.",
      "Implemented stress testing and monitoring to achieve 99.9% uptime.",
    ],
  },
  {
    company: "BLVCK CODE LLC",
    role: "Co-Founder & Lead Engineer",
    timeline: "2021 - Present",
    bullets: [
      "Delivered 30+ smart home automation installations end-to-end.",
      "Led a team of 5 engineers across mobile, web, and IoT efforts.",
      "Shipped iOS/Android apps and cloud services for device orchestration.",
    ],
  },
  {
    company: "Forditva",
    role: "Full Stack Engineer",
    timeline: "2021 - 2022",
    bullets: [
      "Built AI-powered translation features with multimodal inputs (text/voice/image).",
      "Optimized API response times to under 200ms and achieved 95% accuracy targets.",
    ],
  },
  {
    company: "Talk2memo",
    role: "Full-stack Developer",
    timeline: "2020 - 2021",
    bullets: [
      "Developed voice recording, playback, and secure cloud storage for 10K+ users.",
      "Implemented WebRTC messaging and AWS S3-backed storage pipelines.",
    ],
  },
  {
    company: "Brossard App Design",
    role: "Technical Team Lead",
    timeline: "2020 - 2021",
    bullets: [
      "Led 4 developers across 10+ client projects with on-time delivery.",
      "Established coding standards and CI practices for mobile/web teams.",
    ],
  },
  {
    company: "Ariosh",
    role: "IT Technician",
    timeline: "2019 - 2020",
    bullets: [
      "Maintained 99.5% uptime for critical systems and automated backups.",
      "Resolved 500+ support tickets while improving resolution times by 40%.",
    ],
  },
];

const projects = [
  {
    name: "Hashiro (NFT Marketplace)",
    impact: "Decentralized marketplace with smart contracts and IPFS storage.",
    stack: "Solidity · Web3.js · Next.js · Ethers.js",
  },
  {
    name: "Forditva (AI Translator)",
    impact: "Multimodal translation with real-time text, voice, and image processing.",
    stack: "React · Python · TensorFlow · REST",
  },
  {
    name: "Talk2memo (Voice Mail)",
    impact: "Voice memo system with cloud storage and instant delivery.",
    stack: "Node.js · WebRTC · AWS S3 · MongoDB",
  },
  {
    name: "BLVCK CODE Home Automation",
    impact: "Smart home ecosystem for lighting, climate, and security control.",
    stack: "IoT · React Native · Node.js · AWS IoT",
  },
  {
    name: "Wanzami DevOps Suite",
    impact: "CI/CD automation and stress testing for enterprise workloads.",
    stack: "Docker · Kubernetes · Jenkins · AWS · Grafana",
  },
];

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col gap-2 pb-4 border-b border-border/50">
          <h1 className="text-4xl font-bold">{contact.name}</h1>
          <p className="text-lg text-muted-foreground">{contact.title}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{contact.location}</span>
            <Link href={`mailto:${contact.email}`} className="text-primary hover:underline">
              {contact.email}
            </Link>
            <Link href={contact.github} className="text-primary hover:underline" target="_blank">
              GitHub
            </Link>
            <Link href={contact.linkedin} className="text-primary hover:underline" target="_blank">
              LinkedIn
            </Link>
          </div>
        </header>

        {/* Summary */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Summary</h2>
          <ul className="space-y-2 text-muted-foreground">
            {summary.map((line) => (
              <li key={line} className="leading-relaxed">
                • {line}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((group) => (
              <div key={group.label}>
                <p className="font-medium">{group.label}</p>
                <p className="text-sm text-muted-foreground">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          {experiences.map((exp) => (
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
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {projects.map((proj) => (
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
