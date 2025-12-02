import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Languages",
    color: "primary",
    skills: ["JavaScript", "TypeScript", "Solidity", "Swift", "Dart", "SQL", "Python"],
  },
  {
    category: "Frameworks",
    color: "secondary",
    skills: ["Next.js", "React", "React Native", "Flutter", "Node.js", "Express"],
  },
  {
    category: "Blockchain & Web3",
    color: "chart-3",
    skills: ["Solidity", "Web3.js", "Ethers.js", "Smart Contracts", "NFTs", "DeFi"],
  },
  {
    category: "DevOps & Cloud",
    color: "chart-2",
    skills: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Kubernetes", "Terraform"],
  },
  {
    category: "Mobile Development",
    color: "chart-4",
    skills: ["Flutter", "SwiftUI", "React Native", "iOS", "Android", "Cross-platform"],
  },
  {
    category: "Tools & Others",
    color: "chart-5",
    skills: ["Git", "Figma", "Postman", "VS Code", "Linux", "Agile/Scrum"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary via-secondary to-chart-3 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-2 h-2 rounded-full bg-${category.color} shadow-lg shadow-${category.color}/50`}
                  style={{
                    backgroundColor: `var(--${category.color})`,
                    boxShadow: `0 0 20px var(--${category.color})`,
                  }}
                />
                <h3 className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border/30 text-sm text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional expertise highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8 border border-border/50"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div
                className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                15+
              </motion.div>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </div>

            <div className="text-center border-x border-border/30">
              <motion.div
                className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-secondary to-chart-4 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Full-Stack
              </motion.div>
              <p className="text-muted-foreground">Development Expertise</p>
            </div>

            <div className="text-center">
              <motion.div
                className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-chart-2 to-chart-5 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Web3
              </motion.div>
              <p className="text-muted-foreground">Blockchain Ready</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
