export type SkillGroup = {
  label: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  timeline: string;
  bullets: string[];
  focus?: string[];
};

export type ProjectItem = {
  name: string;
  impact: string;
  stack: string;
};

export const contactInfo = {
  name: "OluKayode (Peters) Soliu",
  title: "Full Stack Software Developer | Blockchain Engineer | DevOps",
  location: "Lagos, Nigeria",
  email: "Soliupeter@gmail.com",
  phone: "+234",
  github: "https://github.com/devdanny2024",
  linkedin: "https://www.linkedin.com/in/olukayode-soliu-70610824b/",
};

export const summaryPoints = [
  "Full-stack engineer building scalable systems, blockchain products, and cloud-native apps.",
  "Co-Founder and Lead Engineer at BLVCK CODE LLC delivering smart home automation solutions end-to-end.",
  "Experienced leading engineering teams, implementing CI/CD, and shipping production-grade web and mobile apps.",
];

export const skillGroups: SkillGroup[] = [
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

export const experienceHistory: ExperienceItem[] = [
  {
    company: "Wanzami",
    role: "Software Engineer / DevOps",
    timeline: "2022 - Present",
    bullets: [
      "Built and maintained CI/CD pipelines that cut deployment time by 60%.",
      "Architected microservices infrastructure on AWS with Docker and Kubernetes.",
      "Implemented stress testing and monitoring to achieve 99.9% uptime.",
    ],
    focus: ["aws", "kubernetes", "ci/cd", "microservices", "monitoring", "cloud"],
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
    focus: ["leadership", "iot", "mobile", "cloud", "product delivery"],
  },
  {
    company: "Forditva",
    role: "Full Stack Engineer",
    timeline: "2021 - 2022",
    bullets: [
      "Built AI-powered translation features with multimodal inputs (text/voice/image).",
      "Optimized API response times to under 200ms and achieved 95% accuracy targets.",
    ],
    focus: ["ai", "translation", "api", "performance", "next.js", "react"],
  },
  {
    company: "Talk2memo",
    role: "Full-stack Developer",
    timeline: "2020 - 2021",
    bullets: [
      "Developed voice recording, playback, and secure cloud storage for 10K+ users.",
      "Implemented WebRTC messaging and AWS S3-backed storage pipelines.",
    ],
    focus: ["webrtc", "aws", "storage", "messaging", "backend"],
  },
  {
    company: "Brossard App Design",
    role: "Technical Team Lead",
    timeline: "2020 - 2021",
    bullets: [
      "Led 4 developers across 10+ client projects with on-time delivery.",
      "Established coding standards and CI practices for mobile/web teams.",
    ],
    focus: ["leadership", "team lead", "mobile", "web", "process"],
  },
  {
    company: "Ariosh",
    role: "IT Technician",
    timeline: "2019 - 2020",
    bullets: [
      "Maintained 99.5% uptime for critical systems and automated backups.",
      "Resolved 500+ support tickets while improving resolution times by 40%.",
    ],
    focus: ["support", "infrastructure", "uptime", "automation"],
  },
];

export const projectShowcase: ProjectItem[] = [
  {
    name: "Hashiro (NFT Marketplace)",
    impact: "Decentralized marketplace with smart contracts and IPFS storage.",
    stack: "Solidity | Web3.js | Next.js | Ethers.js",
  },
  {
    name: "Forditva (AI Translator)",
    impact: "Multimodal translation with real-time text, voice, and image processing.",
    stack: "React | Python | TensorFlow | REST",
  },
  {
    name: "Talk2memo (Voice Mail)",
    impact: "Voice memo system with cloud storage and instant delivery.",
    stack: "Node.js | WebRTC | AWS S3 | MongoDB",
  },
  {
    name: "BLVCK CODE Home Automation",
    impact: "Smart home ecosystem for lighting, climate, and security control.",
    stack: "IoT | React Native | Node.js | AWS IoT",
  },
  {
    name: "Wanzami DevOps Suite",
    impact: "CI/CD automation and stress testing for enterprise workloads.",
    stack: "Docker | Kubernetes | Jenkins | AWS | Grafana",
  },
];

export const differentiators = [
  "End-to-end delivery across frontend, backend, blockchain, and cloud.",
  "Strong DevOps mindset with CI/CD, observability, and reliability baked in.",
  "Product thinking from leading teams and co-founding a smart home startup.",
];
