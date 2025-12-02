import { motion } from "motion/react";
import { Brain, Blocks, Cloud, Zap, Smartphone, Cog } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const techIcons = [
  { icon: Brain, label: "AI", color: "text-primary" },
  { icon: Blocks, label: "Blockchain", color: "text-secondary" },
  { icon: Cloud, label: "Cloud", color: "text-chart-3" },
  { icon: Zap, label: "Automation", color: "text-chart-2" },
  { icon: Smartphone, label: "Mobile", color: "text-chart-4" },
  { icon: Cog, label: "DevOps", color: "text-chart-5" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

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
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building the future of technology
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1754738381739-5efb94a4525b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjAzRHxlbnwxfHx8fDE3NjQ2NzAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tech Background"
                className="w-full h-full object-cover"
              />

              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-8 right-8 glass rounded-xl p-4 border border-primary/30"
              >
                <div className="text-3xl mb-1 text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-8 glass rounded-xl p-4 border border-secondary/30"
              >
                <div className="text-3xl mb-1 text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a <span className="text-primary">Full Stack Software Developer</span> and{" "}
                <span className="text-secondary">Blockchain Engineer</span> with a passion for creating
                innovative solutions that scale. My expertise spans modern web technologies, blockchain
                development, and DevOps practices.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As <span className="text-foreground">Co-Founder and Lead Engineer at BLVCK CODE LLC</span>,
                I've led the development of cutting-edge home automation systems, bringing smart living
                experiences to life. My work combines technical excellence with user-centric design.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on solving complex problems and building systems that make a difference. From
                AI-powered translation apps to NFT marketplaces, I bring ideas to reality with clean code,
                scalable architecture, and a focus on emerging technologies.
              </p>
            </div>

            {/* Core values */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h3 className="text-xl mb-4 text-foreground">Philosophy</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                  <p className="text-muted-foreground">
                    Build for scale, design for humans, innovate for the future
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5" />
                  <p className="text-muted-foreground">
                    Embrace emerging technologies while maintaining production reliability
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-chart-3 mt-2.5" />
                  <p className="text-muted-foreground">
                    Continuous learning, continuous improvement, continuous delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Tech expertise icons */}
            <div>
              <h3 className="text-lg mb-4 text-foreground">Core Expertise</h3>
              <div className="grid grid-cols-3 gap-4">
                {techIcons.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-xl p-4 border border-border/50 flex flex-col items-center gap-2 cursor-pointer hover:border-primary/50 transition-all"
                  >
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
