import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden" data-testid="contact-section">
      <div className="voygen-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center"
        >
          {/* Left - Image (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square relative overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Team meeting"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Quote card */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-background border border-gold/20 rounded-sm max-w-xs">
              <p className="text-sm text-muted-foreground mb-2">Average response time</p>
              <p className="text-2xl display-number text-gold">Under 24 hours</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <span className="label-mono mb-6 block">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6">
              Let's discuss your
              <br />
              <span className="gold-gradient-text italic">growth potential</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Ready to transform your digital presence? Share your vision 
              with us, and we'll craft a strategy tailored to your unique 
              challenges and goals.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              <a 
                href="mailto:voygen.in@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-border rounded-sm group-hover:border-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email Us</p>
                  <p className="text-foreground group-hover:text-gold transition-colors">voygen.in@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+919963311457"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-border rounded-sm group-hover:border-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Call Us</p>
                  <p className="text-foreground group-hover:text-gold transition-colors">+91 99633 11457</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border rounded-sm">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Visit Us</p>
                  <p className="text-foreground">T-Hub, Hyderabad</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-background font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-gold-glow transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
