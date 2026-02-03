import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#services" },
    { label: "About", href: "#about" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="container-tight flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img 
            src="/voygen-logo-2.png" 
            alt="Voygen - Fueling the Digital Voyage" 
            className="h-14 md:h-16 lg:h-18 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="group relative overflow-hidden px-4 py-2 text-xs tracking-[0.15em] uppercase text-gold border border-gold/50 rounded-sm transition-all duration-500"
          >
            <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">
              Get Started
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-border"
      >
        <div className="container-tight py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg text-foreground hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg text-gold hover:text-gold-glow transition-colors"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
