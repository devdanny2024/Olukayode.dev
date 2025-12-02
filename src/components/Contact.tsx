import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/devdanny2024",
    color: "primary",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/olukayode-soliu-70610824b/",
    color: "chart-3",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:Soliupeter@gmail.com",
    color: "secondary",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
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

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Info and social links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info card */}
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl mb-4 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Whether you need a full-stack developer, blockchain
                engineer, or DevOps specialist, let's connect!
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:Soliupeter@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Soliupeter@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 mt-1">
                    <MessageSquare className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                    <p className="text-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl mb-6 text-foreground">Connect With Me</h3>

              {/* Icon strip */}
              <div className="flex items-center gap-3 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border/40 bg-muted/30 hover:border-primary/60 hover:bg-primary/10 transition-all"
                    aria-label={social.name}
                  >
                    <social.icon
                      className="h-5 w-5"
                      style={{ color: `var(--${social.color})` }}
                    />
                  </a>
                ))}
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: `var(--${social.color})`,
                        opacity: 0.1,
                      }}
                    >
                      <social.icon
                        className="h-6 w-6"
                        style={{ color: `var(--${social.color})` }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border border-border/50 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-foreground">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to freelance and full-time opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>
    </section>
  );
}
