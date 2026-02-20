import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzn80LNeYuWIaH1iqiohlbsefjnSZWt-YAKA-s4PAgQo5iHNuGL2fBV8lK4ezdHDsQ5ig/exec";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          source: "Contact Page",
        }),
      });

      setSubmitStatus("success");
      setFormState({ name: "", email: "", company: "", service: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Contact Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="voygen-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-mono mb-6 block">Get In Touch</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6">
                Let's discuss your
                <br />
                <span className="gold-gradient-text italic">growth potential</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
                Ready to transform your digital presence? Share your vision 
                with us, and we'll craft a strategy tailored to your unique 
                challenges and goals.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                <motion.a 
                  href="mailto:voygen.in@gmail.com"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-border rounded-sm group-hover:border-gold transition-colors">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email Us</p>
                    <p className="text-foreground group-hover:text-gold transition-colors">voygen.in@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="tel:+919963311457"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-border rounded-sm group-hover:border-gold transition-colors">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Call Us</p>
                    <p className="text-foreground group-hover:text-gold transition-colors">+91 99633 11457</p>
                  </div>
                </motion.a>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-border rounded-sm">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Visit Us</p>
                    <p className="text-foreground">T-Hub, Hyderabad</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="label-mono text-[10px] mb-2 block">Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="label-mono text-[10px] mb-2 block">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="label-mono text-[10px] mb-2 block">Company</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="label-mono text-[10px] mb-2 block">Service Interest *</label>
                      <select 
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground focus:border-gold focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="" className="bg-background">Select a service</option>
                        <option value="Brand Foundation" className="bg-background">Brand Foundation</option>
                        <option value="Web Services" className="bg-background">Web Services</option>
                        <option value="Digital Marketing" className="bg-background">Digital Marketing</option>
                        <option value="Social Mastery" className="bg-background">Social Mastery</option>
                        <option value="AI-Powered Growth" className="bg-background">AI-Powered Growth</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="label-mono text-[10px] mb-2 block">Message *</label>
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="px-8 py-3 border border-gold text-gold font-medium text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
