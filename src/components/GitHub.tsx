import { motion } from "motion/react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const githubStats = [
  { label: "Public Repos", value: "35+", icon: Github },
];

const pinnedRepos = [
  {
    name: "hashiro-nft-marketplace",
    description: "Decentralized NFT marketplace built with Solidity and Next.js",
    language: "Solidity",
    stars: 24,
    forks: 8,
    color: "#AA6746",
  },
  {
    name: "forditva-translator",
    description: "AI-powered multimodal translation platform with ML integration",
    language: "Python",
    stars: 18,
    forks: 5,
    color: "#3572A5",
  },
  {
    name: "talk2memo-voice-app",
    description: "Voice memo application with cloud storage and real-time processing",
    language: "JavaScript",
    stars: 15,
    forks: 4,
    color: "#f1e05a",
  },
  {
    name: "blvck-code-automation",
    description: "IoT home automation system with mobile and web interfaces",
    language: "TypeScript",
    stars: 31,
    forks: 12,
    color: "#3178c6",
  },
  {
    name: "devops-automation-suite",
    description: "Comprehensive DevOps tooling for CI/CD and stress testing",
    language: "Shell",
    stars: 12,
    forks: 6,
    color: "#89e051",
  },
  {
    name: "flutter-mobile-starter",
    description: "Production-ready Flutter starter template with best practices",
    language: "Dart",
    stars: 27,
    forks: 9,
    color: "#00B4AB",
  },
];

const contributionData = [
  [0, 1, 2, 0, 1, 3, 2],
  [1, 2, 1, 0, 2, 1, 0],
  [2, 1, 3, 2, 1, 0, 1],
  [1, 0, 1, 2, 3, 2, 1],
  [0, 2, 1, 1, 2, 1, 0],
  [1, 3, 2, 0, 1, 2, 1],
  [2, 1, 0, 1, 2, 1, 3],
  [1, 2, 1, 2, 1, 0, 2],
  [0, 1, 3, 1, 2, 1, 0],
  [2, 0, 1, 2, 1, 3, 1],
  [1, 2, 0, 1, 2, 1, 2],
  [0, 1, 2, 3, 1, 0, 1],
  [2, 1, 1, 0, 2, 1, 0],
  [1, 0, 2, 1, 3, 2, 1],
  [0, 2, 1, 2, 1, 0, 2],
  [1, 1, 0, 1, 2, 1, 1],
  [2, 0, 1, 2, 1, 0, 3],
  [1, 2, 3, 1, 0, 2, 1],
  [0, 1, 2, 0, 1, 1, 2],
  [2, 1, 0, 2, 1, 3, 0],
  [1, 0, 1, 2, 0, 1, 2],
  [0, 2, 1, 1, 2, 0, 1],
  [1, 1, 2, 0, 1, 2, 0],
  [2, 0, 1, 1, 2, 1, 1],
  [1, 2, 0, 2, 1, 0, 2],
  [0, 1, 2, 1, 0, 1, 1],
];

const getContributionColor = (level: number) => {
  if (level === 0) return "rgba(100, 100, 140, 0.1)";
  if (level === 1) return "rgba(0, 217, 255, 0.3)";
  if (level === 2) return "rgba(0, 217, 255, 0.6)";
  if (level === 3) return "rgba(0, 217, 255, 0.9)";
  return "rgba(100, 100, 140, 0.1)";
};

export function GitHub() {
  return (
    <section id="github" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="h-12 w-12 text-primary" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GitHub Activity
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building in public, one commit at a time
          </p>
        </motion.div>

        {/* GitHub stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {githubStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all text-center"
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-4xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8 border border-border/50 mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl text-foreground">Contribution Activity</h3>
            <span className="text-sm text-muted-foreground">Last 6 months</span>
          </div>

          {/* Contribution grid */}
          <div className="overflow-x-auto">
            <div className="inline-flex gap-1 min-w-full">
              {contributionData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: weekIndex * 0.01 + dayIndex * 0.005,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.5 }}
                      className="w-3 h-3 rounded-sm cursor-pointer transition-all"
                      style={{
                        backgroundColor: getContributionColor(day),
                      }}
                      title={`${day} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
            <span>Less</span>
            {[0, 1, 2, 3].map((level) => (
              <div
                key={level}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: getContributionColor(level) }}
              />
            ))}
            <span>More</span>
          </div>
        </motion.div>

        {/* Pinned repositories */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <h3 className="text-3xl text-foreground">Pinned Repositories</h3>
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
                View All
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedRepos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <a
                  href={`https://github.com/devdanny2024/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all group h-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: repo.color }}
                      />
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
