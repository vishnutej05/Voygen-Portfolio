import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Thank you for your inquiry. We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-spacing bg-background relative z-30" data-testid="contact-section">
      <div className="voygen-container">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Left Column - Info */}
          <motion.div variants={fadeUpVariants}>
            <p className="label-mono mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8 font-serif">
              Let's discuss your
              <br />
              <span className="gold-gradient-text italic">growth potential</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Ready to transform your digital presence? Share your vision with us, and we'll 
              craft a strategy tailored to your unique challenges and goals.
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 interactive"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="text-foreground">voygen.in@gmail.com</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 interactive"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="text-foreground">+91 99633 11457</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 interactive"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="text-foreground">T-Hub, Hyderabad</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={fadeUpVariants}>
            <form onSubmit={handleSubmit} className="space-y-8" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="label-mono text-[10px] mb-2 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input-voygen"
                    required
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label className="label-mono text-[10px] mb-2 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="input-voygen"
                    required
                    data-testid="contact-email-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="label-mono text-[10px] mb-2 block">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="input-voygen"
                    data-testid="contact-company-input"
                  />
                </div>
                <div>
                  <label className="label-mono text-[10px] mb-2 block">Service Interest *</label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger 
                      className="w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-4 h-auto focus:ring-0 focus:border-gold text-foreground"
                      data-testid="contact-service-select"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-charcoal border-border/50 shadow-xl">
                      <SelectItem value="create" className="text-foreground hover:bg-gold/10 focus:bg-gold/20 focus:text-gold cursor-pointer">CREATE - Design & Development</SelectItem>
                      <SelectItem value="pulse" className="text-foreground hover:bg-gold/10 focus:bg-gold/20 focus:text-gold cursor-pointer">PULSE - AI-Powered Marketing</SelectItem>
                      <SelectItem value="custom" className="text-foreground hover:bg-gold/10 focus:bg-gold/20 focus:text-gold cursor-pointer">CUSTOM - Tailored Programs</SelectItem>
                      <SelectItem value="all" className="text-foreground hover:bg-gold/10 focus:bg-gold/20 focus:text-gold cursor-pointer">Full Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="label-mono text-[10px] mb-2 block">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and goals..."
                  rows={4}
                  className="input-voygen resize-none"
                  required
                  data-testid="contact-message-input"
                />
              </div>

              <motion.button 
                type="submit" 
                className="btn-primary w-full md:w-auto"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="contact-submit-btn"
              >
                <span>{isSubmitting ? "Submitting..." : "Send Inquiry"}</span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
