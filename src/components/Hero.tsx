import { motion } from "motion/react";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #00d9ff 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-primary mb-2">👋 Hello, I'm</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl mb-3 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                  OluKayode (Peters) Soliu
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xl md:text-2xl text-muted-foreground">Full Stack Software Developer</span>
                  <span className="text-xl md:text-2xl text-muted-foreground">·</span>
                  <span className="text-xl md:text-2xl text-muted-foreground">Blockchain Engineer</span>
                  <span className="text-xl md:text-2xl text-muted-foreground">·</span>
                  <span className="text-xl md:text-2xl text-muted-foreground">DevOps</span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              >
                Building scalable systems, intuitive software, and smart automation experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50 transition-all hover:shadow-xl hover:shadow-primary/60 group"
                  asChild
                >
                  <a href="/cv" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download CV
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 group"
                  asChild
                >
                  <a href="https://github.com/devdanny2024" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary/50 hover:bg-secondary/10 group"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/olukayode-soliu-70610824b/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>

              {/* Floating code snippet */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="hidden lg:block glass rounded-xl p-4 mt-8 border border-primary/20"
              >
                <pre className="text-xs md:text-sm text-muted-foreground font-mono">
                  <code>
                    <span className="text-secondary">const</span> <span className="text-primary">developer</span> = {`{`}
                    {'\n'}  name: <span className="text-chart-3">"OluKayode Soliu"</span>,
                    {'\n'}  passion: <span className="text-chart-3">"Innovation & Scale"</span>,
                    {'\n'}  stack: [<span className="text-chart-3">"Next.js"</span>, <span className="text-chart-3">"Solidity"</span>, <span className="text-chart-3">"AWS"</span>]
                    {'\n'}{`}`};
                  </code>
                </pre>
              </motion.div>
            </motion.div>

            {/* Right: Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glowing ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-2xl opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #00d9ff 0%, #8b5cf6 100%)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Portrait container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 glass rounded-full overflow-hidden border-2 border-primary/30">
                    <ImageWithFallback
                      src="/174811247.jpeg"
                      alt="OluKayode Soliu"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating tech icons */}
                  <motion.div
                    className="absolute -top-4 -right-4 glass rounded-xl p-3 border border-primary/30"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-2xl">⚡</span>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 glass rounded-xl p-3 border border-secondary/30"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 -right-8 glass rounded-xl p-3 border border-chart-3/30"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: 1, repeat: Infinity }}
                  >
                    <span className="text-2xl">💎</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowRight className="h-5 w-5 rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
