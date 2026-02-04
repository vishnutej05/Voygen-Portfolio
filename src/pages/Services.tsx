import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  Palette, 
  Globe, 
  TrendingUp, 
  Users, 
  Cpu,
  Check,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allServices = [
  {
    id: "brand-foundation",
    icon: Palette,
    title: "Brand Foundation",
    subtitle: "Identity & Strategy",
    description: "Build a memorable brand identity that resonates with your audience and stands the test of time. We craft visual identities that tell your unique story.",
    features: [
      "Custom Logo Design & Variations",
      "Brand Strategy & Positioning",
      "Typography System",
      "Color Palette & Guidelines",
      "Brand Voice & Messaging",
      "Brand Asset Library",
      "Stationery Design",
      "Social Media Templates"
    ],
    gradient: "from-amber-500/10 to-orange-600/10",
    borderColor: "hover:border-amber-500/50",
  },
  {
    id: "digital-presence",
    icon: Globe,
    title: "Digital Presence",
    subtitle: "Web & Experience",
    description: "Create stunning digital experiences that captivate visitors and convert them into loyal customers. From sleek landing pages to complex web applications.",
    features: [
      "Custom Website Design",
      "Responsive Development",
      "UI/UX Optimization",
      "CMS Integration (WordPress, Webflow)",
      "E-commerce Solutions",
      "Performance Optimization",
      "SEO-Ready Architecture",
      "Ongoing Maintenance"
    ],
    gradient: "from-gold/10 to-amber-500/10",
    borderColor: "hover:border-gold/50",
  },
  {
    id: "growth-marketing",
    icon: TrendingUp,
    title: "Growth Marketing",
    subtitle: "Reach & Convert",
    description: "Drive measurable growth with data-driven marketing strategies. We optimize every touchpoint to maximize your ROI and scale your business.",
    features: [
      "SEO Strategy & Implementation",
      "Google Ads Management",
      "Meta Ads (Facebook & Instagram)",
      "Content Marketing Strategy",
      "Email Marketing Automation",
      "Conversion Rate Optimization",
      "Analytics & Reporting",
      "Marketing Funnel Design"
    ],
    gradient: "from-emerald-500/10 to-teal-600/10",
    borderColor: "hover:border-emerald-500/50",
  },
  {
    id: "social-mastery",
    icon: Users,
    title: "Social Mastery",
    subtitle: "Engage & Influence",
    description: "Dominate social media with content that engages, entertains, and converts. Build a community around your brand that drives organic growth.",
    features: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Community Management",
      "Influencer Partnerships",
      "Viral Campaign Planning",
      "Social Listening & Analytics",
      "Reputation Management",
      "Platform-Specific Optimization"
    ],
    gradient: "from-blue-500/10 to-indigo-600/10",
    borderColor: "hover:border-blue-500/50",
  },
  {
    id: "ai-powered-growth",
    icon: Cpu,
    title: "AI-Powered Growth",
    subtitle: "Automate & Scale",
    description: "Leverage cutting-edge AI technology to automate processes, personalize experiences, and unlock unprecedented growth opportunities.",
    features: [
      "AI Chatbot Development",
      "Marketing Automation",
      "Predictive Analytics",
      "Personalization Engines",
      "AI Content Generation",
      "Customer Journey Optimization",
      "Intelligent Lead Scoring",
      "Process Automation"
    ],
    gradient: "from-purple-500/10 to-pink-600/10",
    borderColor: "hover:border-purple-500/50",
  },
];

const ServicesPage = () => {
  const location = useLocation();

  // Handle anchor scroll on page load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Services
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6">
              Solutions That <span className="italic text-gold">Scale</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
              From brand strategy to AI-powered automation, we offer comprehensive 
              digital solutions designed to elevate your brand and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container-tight">
          <div className="space-y-16 md:space-y-24">
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-8 md:p-12 rounded-xl border border-border/50 bg-gradient-to-br ${service.gradient} ${service.borderColor} transition-all duration-500`}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {/* Left Column */}
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-gold" />
                    </div>
                    
                    <span className="text-xs tracking-[0.2em] uppercase text-gold/70 mb-2 block">
                      {service.subtitle}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-gold hover:text-background transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right Column - Features */}
                  <div>
                    <h3 className="text-sm tracking-[0.15em] uppercase text-foreground/60 mb-6">
                      What's Included
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-gold" />
                          </div>
                          <span className="text-foreground/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-24 md:py-32 bg-muted/30">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Ready to Start?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Let's Build <span className="italic text-gold">Together</span>
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground">
              Tell us about your project and we'll craft a custom solution tailored to your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6">
                <div>
                  <label className="text-sm text-foreground/70 mb-2 block">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/70 mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/70 mb-2 block">Service Interest</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none transition-colors">
                    <option value="">Select a service</option>
                    {allServices.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-foreground/70 mb-2 block">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gold text-background font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-gold-glow transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-serif text-2xl font-medium mb-4">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're excited to learn about your project. Reach out and let's discuss how we can help you achieve your goals.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:voygen.in@gmail.com" className="flex items-center gap-4 p-4 border border-border rounded-sm hover:border-gold/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="text-foreground">voygen.in@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919963311457" className="flex items-center gap-4 p-4 border border-border rounded-sm hover:border-gold/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="text-foreground">+91 99633 11457</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border border-border rounded-sm">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-foreground">T-Hub, Hyderabad</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
