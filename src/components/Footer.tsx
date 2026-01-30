import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-tight py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-serif text-2xl font-medium mb-4">Voygen</h3>
              <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
                Strategic digital growth partner for ambitious brands. 
                Clarity. Scale. Impact.
              </p>
              <a 
                href="mailto:hello@voygen.com"
                className="inline-flex items-center text-gold hover:text-gold-glow transition-colors group"
              >
                hello@voygen.com
                <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-foreground hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Legal */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                {legal.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-foreground hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 Voygen. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#linkedin" className="text-muted-foreground hover:text-gold transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#twitter" className="text-muted-foreground hover:text-gold transition-colors text-sm">
              X / Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;