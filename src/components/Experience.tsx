import { motion } from "motion/react";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Wanzami",
    role: "Software Engineer / DevOps",
    timeline: "2022 - Present",
    description:
      "Leading development of scalable systems and implementing DevOps practices to streamline deployment processes.",
    stack: ["Next.js", "AWS", "Docker", "CI/CD", "Kubernetes"],
    achievements: [
      "Reduced deployment time by 60% through automated CI/CD pipelines",
      "Implemented comprehensive stress testing framework",
      "Architected microservices infrastructure on AWS",
      "Improved system reliability and uptime to 99.9%",
    ],
    color: "primary",
  },
  {
    company: "BLVCK CODE LLC",
    role: "Co-Founder & Lead Engineer",
    timeline: "2021 - Present",
    description:
      "Founded and led a home automation company, developing cutting-edge smart home solutions from concept to production.",
    stack: ["IoT", "React", "Node.js", "AWS", "Mobile Apps"],
    achievements: [
      "Built complete home automation ecosystem from scratch",
      "Led team of 5 engineers across multiple projects",
      "Delivered 30+ custom automation installations",
      "Developed mobile apps for iOS and Android platforms",
    ],
    color: "secondary",
  },
  {
    company: "Forditva",
    role: "Full Stack Engineer",
    timeline: "2021 - 2022",
    description:
      "Developed an AI-powered multimodal translation application with real-time processing capabilities.",
    stack: ["React", "Python", "TensorFlow", "REST APIs", "PostgreSQL"],
    achievements: [
      "Built real-time translation engine with 95% accuracy",
      "Implemented multimodal input processing (text, voice, image)",
      "Optimized API response times to under 200ms",
      "Integrated advanced AI/ML models for language processing",
    ],
    color: "chart-3",
  },
  {
    company: "Talk2memo",
    role: "Full-stack Developer",
    timeline: "2020 - 2021",
    description:
      "Created an innovative voice mail system enabling seamless audio message management and delivery.",
    stack: ["JavaScript", "Node.js", "WebRTC", "MongoDB", "AWS S3"],
    achievements: [
      "Developed voice recording and playback functionality",
      "Implemented secure cloud storage for audio files",
      "Built intuitive user interface for message management",
      "Achieved 10K+ active users within first 6 months",
    ],
    color: "chart-2",
  },
  {
    company: "Brossard App Design",
    role: "Technical Team Lead",
    timeline: "2020 - 2021",
    description:
      "Led technical team in designing and developing mobile and web applications for various clients.",
    stack: ["Flutter", "React", "Firebase", "UI/UX", "Agile"],
    achievements: [
      "Managed team of 4 developers across 10+ client projects",
      "Delivered all projects on time and within budget",
      "Established coding standards and best practices",
      "Improved client satisfaction rate to 98%",
    ],
    color: "chart-4",
  },
  {
    company: "Ariosh",
    role: "IT Technician",
    timeline: "2019 - 2020",
    description:
      "Provided technical support and infrastructure maintenance, ensuring smooth operations of IT systems.",
    stack: ["Linux", "Windows Server", "Networking", "Hardware", "Support"],
    achievements: [
      "Maintained 99.5% uptime for critical systems",
      "Resolved 500+ technical issues efficiently",
      "Implemented automated backup solutions",
      "Reduced average ticket resolution time by 40%",
    ],
    color: "chart-5",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through innovation, leadership, and technical excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-chart-3" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline marker */}
                <motion.div
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
                  whileHover={{ scale: 1.2 }}
                >
                  <div
                    className="w-4 h-4 rounded-full border-4 border-background"
                    style={{
                      backgroundColor: `var(--${exp.color})`,
                      boxShadow: `0 0 20px var(--${exp.color})`,
                    }}
                  />
                </motion.div>

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all group"
                  >
                    {/* Company and role */}
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: `var(--${exp.color})`,
                          opacity: 0.1,
                        }}
                      >
                        <Building2
                          className="h-5 w-5"
                          style={{ color: `var(--${exp.color})` }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl text-foreground group-hover:text-primary transition-colors mb-1">
                          {exp.role}
                        </h3>
                        <p
                          className="mb-2"
                          style={{ color: `var(--${exp.color})` }}
                        >
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.timeline}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-muted/50 text-xs text-foreground/70 border border-border/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2
                            className="h-4 w-4 mt-0.5 flex-shrink-0"
                            style={{ color: `var(--${exp.color})` }}
                          />
                          <p className="text-sm text-muted-foreground">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
