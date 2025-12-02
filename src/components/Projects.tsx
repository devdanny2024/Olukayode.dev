import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Forditva",
    subtitle: "AI Multimodal Translator",
    description:
      "An advanced translation platform powered by AI that supports text, voice, and image inputs with real-time processing capabilities.",
    image: "https://images.unsplash.com/photo-1673515335152-f2589ba8bb7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRyYW5zbGF0aW9uJTIwYXBwfGVufDF8fHx8MTc2NDY3MDM1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["React", "Python", "TensorFlow", "NLP", "REST API"],
    highlights: [
      "95% translation accuracy",
      "Support for 50+ languages",
      "Real-time voice translation",
      "Image text recognition",
    ],
    color: "primary",
    featured: true,
  },
  {
    title: "Talk2memo",
    subtitle: "Voice Memo Mail System",
    description:
      "An innovative communication platform that transforms voice messages into organized, shareable memos with cloud storage.",
    image: "https://images.unsplash.com/photo-1620302044584-cbaad2f20e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMG1lbW8lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0NjcwMzU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Node.js", "WebRTC", "AWS S3", "MongoDB", "React"],
    highlights: [
      "10K+ active users",
      "Secure cloud storage",
      "Cross-platform support",
      "Instant delivery",
    ],
    color: "secondary",
    featured: true,
  },
  {
    title: "Hashiro",
    subtitle: "NFT Marketplace",
    description:
      "A decentralized NFT marketplace built on Ethereum, enabling creators to mint, buy, and sell digital assets seamlessly.",
    image: "https://images.unsplash.com/photo-1704524853906-94753b3946cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxORlQlMjBtYXJrZXRwbGFjZXxlbnwxfHx8fDE3NjQ2NzAzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Solidity", "Web3.js", "IPFS", "Next.js", "Ethers.js"],
    highlights: [
      "Smart contract integration",
      "IPFS decentralized storage",
      "Low gas optimization",
      "Multi-wallet support",
    ],
    color: "chart-3",
    featured: true,
  },
  {
    title: "BLVCK CODE Home Automation",
    subtitle: "Smart Home Ecosystem",
    description:
      "A comprehensive home automation system providing intelligent control of lighting, climate, security, and entertainment.",
    image: "https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NDY0MjgzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["IoT", "React Native", "Node.js", "AWS IoT", "MQTT"],
    highlights: [
      "30+ installations completed",
      "Voice control integration",
      "Energy usage optimization",
      "Mobile & web interfaces",
    ],
    color: "chart-2",
    featured: false,
  },
  {
    title: "Wanzami DevOps Suite",
    subtitle: "Automation & Stress Testing",
    description:
      "Enterprise-grade DevOps tooling for automated deployment, monitoring, and comprehensive stress testing of applications.",
    image: "https://images.unsplash.com/photo-1653933686802-86d21b59b03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY0NjcwMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Docker", "Kubernetes", "Jenkins", "AWS", "Grafana"],
    highlights: [
      "60% faster deployments",
      "99.9% uptime achieved",
      "Automated CI/CD pipeline",
      "Real-time monitoring",
    ],
    color: "chart-4",
    featured: false,
  },
];

const contactEmail = "Soliupeter@gmail.com";
const hashihiroLink = "https://hashihiro.io";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into production-ready applications
          </p>
        </motion.div>

        {/* Featured projects - Desktop: Large cards, Mobile: Horizontal scroll */}
        <div className="mb-12">
          {/* Mobile horizontal scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {projects
                .filter((p) => p.featured)
                .map((project, index) => {
                  const inquiryLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
                    `Project Inquiry: ${project.title}`
                  )}`;
                  const showSecondaryCta = project.title === "Hashiro";
                  const secondaryHref = showSecondaryCta ? hashihiroLink : inquiryLink;
                  const secondaryLabel = showSecondaryCta ? "Hashihiro.io" : "View";

                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-[85vw] max-w-md"
                    >
                      <div className="glass rounded-3xl overflow-hidden border border-border/50 h-full">
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              background: `linear-gradient(135deg, var(--${project.color}) 0%, transparent 100%)`,
                            }}
                          />
                        </div>
                        <div className="p-6">
                          <div className="mb-3">
                            <span
                              className="text-xs px-3 py-1 rounded-full"
                              style={{
                                backgroundColor: `var(--${project.color})`,
                                color: "var(--background)",
                                opacity: 0.9,
                              }}
                            >
                              Featured
                            </span>
                          </div>
                          <h3 className="text-2xl mb-2 text-foreground">{project.title}</h3>
                          <p className="text-sm mb-3" style={{ color: `var(--${project.color})` }}>
                            {project.subtitle}
                          </p>
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 rounded-lg bg-muted/50 text-xs text-foreground/70 border border-border/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary/50 hover:bg-primary/10 flex-1"
                              asChild
                            >
                              <a
                                href="https://github.com/devdanny2024"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </a>
                            </Button>
                            {showSecondaryCta && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-secondary/50 hover:bg-secondary/10 flex-1"
                                asChild
                              >
                                <a href={secondaryHref} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                  {secondaryLabel}
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>

          {/* Desktop stacked cards */}
          <div className="hidden lg:block space-y-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => {
                const inquiryLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
                  `Project Inquiry: ${project.title}`
                )}`;
                const showSecondaryCta = project.title === "Hashiro";
                const secondaryHref = showSecondaryCta ? hashihiroLink : inquiryLink;
                const secondaryLabel = showSecondaryCta ? "Hashihiro.io" : "Case Study";

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all group ${
                        index % 2 === 0 ? "" : ""
                      }`}
                    >
                      <div
                        className={`grid lg:grid-cols-2 gap-0 ${
                          index % 2 === 0 ? "" : "lg:grid-flow-dense"
                        }`}
                      >
                        {/* Image */}
                        <div
                          className={`relative overflow-hidden ${
                            index % 2 === 0 ? "" : "lg:col-start-2"
                          }`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="relative h-64 lg:h-full"
                          >
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient */}
                            <div
                              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                              style={{
                                background: `linear-gradient(135deg, var(--${project.color}) 0%, transparent 100%)`,
                              }}
                            />
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div
                          className={`p-8 lg:p-12 flex flex-col justify-center ${
                            index % 2 === 0 ? "" : "lg:col-start-1 lg:row-start-1"
                          }`}
                        >
                          <div className="mb-3">
                            <span
                              className="text-sm px-3 py-1 rounded-full"
                              style={{
                                backgroundColor: `var(--${project.color})`,
                                color: "var(--background)",
                                opacity: 0.9,
                              }}
                            >
                              Featured
                            </span>
                          </div>

                          <h3 className="text-3xl lg:text-4xl mb-2 text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p
                            className="text-lg mb-4"
                            style={{ color: `var(--${project.color})` }}
                          >
                            {project.subtitle}
                          </p>

                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            {project.description}
                          </p>

                          {/* Tech stack */}
                          <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 rounded-lg bg-muted/50 text-sm text-foreground/70 border border-border/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {project.highlights.map((highlight, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: `var(--${project.color})` }}
                                />
                                {highlight}
                              </div>
                            ))}
                          </div>

                        {/* CTA buttons */}
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="border-primary/50 hover:bg-primary/10"
                            asChild
                          >
                            <a
                              href="https://github.com/devdanny2024"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                          {showSecondaryCta && (
                            <Button
                              variant="outline"
                              className="border-secondary/50 hover:bg-secondary/10"
                              asChild
                            >
                              <a href={secondaryHref} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                {secondaryLabel}
                              </a>
                            </Button>
                          )}
                        </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* Other projects - Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, var(--${project.color}) 100%)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-1 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-3"
                    style={{ color: `var(--${project.color})` }}
                  >
                    {project.subtitle}
                  </p>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-muted/50 text-xs text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href="https://github.com/devdanny2024"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
