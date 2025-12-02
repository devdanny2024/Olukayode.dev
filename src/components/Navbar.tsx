import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              OluKayode.dev
            </motion.a>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA button - desktop */}
            <div className="hidden lg:block">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
                asChild
              >
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                asChild
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Let's Talk
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}
