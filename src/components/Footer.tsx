import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-charcoal border-t border-border relative z-30" data-testid="footer">
      <div className="voygen-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#hero" className="flex items-center">
              <img 
                src="/voygen-logo-2.png" 
                alt="Voygen - Fueling the Digital Voyage" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Voygen. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6 md:gap-8">
            <motion.a href="#" className="footer-link text-sm" whileHover={{ y: -2 }}>Privacy</motion.a>
            <motion.a href="#" className="footer-link text-sm" whileHover={{ y: -2 }}>Terms</motion.a>
            <motion.a href="#" className="footer-link text-sm" whileHover={{ y: -2 }}>LinkedIn</motion.a>
            <motion.a href="#" className="footer-link text-sm" whileHover={{ y: -2 }}>Twitter</motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;