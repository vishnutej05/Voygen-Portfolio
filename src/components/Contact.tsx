import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gold" />
        </div>
      </motion.div>

      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="pt-12"
          >
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 leading-tight">
              Let's discuss your
              <br />
              <span className="italic text-gold">growth potential</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Ready to transform your digital presence? Share your vision with us, 
              and we'll craft a strategy tailored to your unique challenges and goals.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                  <a href="mailto:hello@voygen.agency" className="text-foreground hover:text-gold transition-colors">
                    hello@voygen.agency
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                  <a href="tel:+15551234567" className="text-foreground hover:text-gold transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Visit Us</p>
                  <p className="text-foreground">
                    New York • London • Singapore
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-gold mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-gold mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs tracking-[0.15em] uppercase text-gold mb-3">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:border-gold focus:outline-none transition-colors cursor-pointer appearance-none"
                  >
                    <option value="" className="bg-charcoal">Select a service</option>
                    <option value="create" className="bg-charcoal">CREATE - Design & Development</option>
                    <option value="pulse" className="bg-charcoal">PULSE - AI-Powered Marketing</option>
                    <option value="custom" className="bg-charcoal">CUSTOM - Tailored Programs</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-gold mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and goals..."
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-8 py-4 bg-gold text-primary-foreground font-medium text-sm tracking-[0.15em] uppercase hover:bg-gold-glow transition-colors"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
