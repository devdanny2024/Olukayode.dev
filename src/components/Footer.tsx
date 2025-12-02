import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "GitHub", href: "https://github.com/devdanny2024" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/olukayode-soliu-70610824b/" },
      { name: "Email", href: "mailto:Soliupeter@gmail.com" },
      { name: "Contact Form", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Full Stack Development", href: "#contact" },
      { name: "Blockchain Engineering", href: "#contact" },
      { name: "DevOps & Cloud", href: "#contact" },
      { name: "Mobile Development", href: "#contact" },
    ],
  },
];

const socialIcons = [
  { icon: Github, href: "https://github.com/devdanny2024", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/olukayode-soliu-70610824b/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:Soliupeter@gmail.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              OluKayode.dev
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building the future of technology, one line of code at a time.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 glass rounded-lg border border-border/50 hover:border-primary/50 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
              viewport={{ once: true }}
            >
              <h4 className="text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * sectionIndex + 0.05 * linkIndex,
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span>© {currentYear} OluKayode Soliu. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Built with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="h-4 w-4 text-primary fill-primary" />
            </motion.div>
            <span>using Next.js & Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
