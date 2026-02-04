import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Globe, 
  TrendingUp, 
  Users, 
  Cpu,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allServices = [
  {
    id: "brand-foundation",
    icon: Palette,
    title: "Brand Foundation",
    subtitle: "Identity & Strategy",
    tagline: "Build a brand that lasts",
    heroDescription: "We craft compelling brand identities that resonate with your audience and stand the test of time. From strategy to execution, we build brands that matter.",
    description: "Your brand is more than a logo—it's the emotional connection between you and your audience. We dive deep into understanding your vision, values, and goals to create a cohesive identity that speaks volumes.",
    features: [
      {
        title: "Logo Design & Variations",
        description: "Custom logo design with multiple variations for different use cases and platforms."
      },
      {
        title: "Brand Strategy & Positioning",
        description: "Strategic positioning that differentiates you from competitors and resonates with your target audience."
      },
      {
        title: "Typography System",
        description: "Carefully selected typefaces that reflect your brand personality across all touchpoints."
      },
      {
        title: "Color Palette & Guidelines",
        description: "A comprehensive color system that ensures consistency and recognition."
      },
      {
        title: "Brand Voice & Messaging",
        description: "Tone, voice, and messaging guidelines that keep your communication consistent."
      },
      {
        title: "Brand Asset Library",
        description: "Complete library of brand assets ready for use across all channels."
      }
    ],
    process: ["Discovery & Research", "Strategy Development", "Visual Identity", "Guidelines & Delivery"],
    gradient: "from-amber-500/20 to-orange-600/20",
  },
  {
    id: "digital-presence",
    icon: Globe,
    title: "Digital Presence",
    subtitle: "Web & Experience",
    tagline: "Your digital storefront, reimagined",
    heroDescription: "We create stunning digital experiences that captivate visitors and convert them into loyal customers. Every pixel is designed with purpose.",
    description: "In today's digital-first world, your website is often the first impression. We design and develop websites that not only look stunning but perform exceptionally, driving engagement and conversions.",
    features: [
      {
        title: "Custom Website Design",
        description: "Bespoke designs tailored to your brand, not templates."
      },
      {
        title: "Responsive Development",
        description: "Flawless experience across all devices—desktop, tablet, and mobile."
      },
      {
        title: "UI/UX Optimization",
        description: "User-centered design that guides visitors toward your goals."
      },
      {
        title: "CMS Integration",
        description: "Easy content management with WordPress, Webflow, or custom solutions."
      },
      {
        title: "E-commerce Solutions",
        description: "Powerful online stores that drive sales and delight customers."
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast load times that keep visitors engaged."
      }
    ],
    process: ["Discovery & Planning", "Design & Prototyping", "Development", "Launch & Support"],
    gradient: "from-gold/20 to-amber-500/20",
  },
  {
    id: "growth-marketing",
    icon: TrendingUp,
    title: "Growth Marketing",
    subtitle: "Reach & Convert",
    tagline: "Data-driven growth, measurable results",
    heroDescription: "We leverage data and creativity to drive sustainable growth. Every campaign is optimized for maximum impact and ROI.",
    description: "Growth isn't accidental—it's engineered. We combine analytical rigor with creative excellence to build marketing strategies that deliver measurable, sustainable results for your business.",
    features: [
      {
        title: "SEO Strategy & Implementation",
        description: "Dominate search rankings with technical and content SEO excellence."
      },
      {
        title: "Paid Advertising",
        description: "Strategic Google Ads and Meta campaigns that maximize ROAS."
      },
      {
        title: "Content Marketing",
        description: "Compelling content that attracts, engages, and converts your ideal audience."
      },
      {
        title: "Email Marketing Automation",
        description: "Automated sequences that nurture leads and drive conversions."
      },
      {
        title: "Conversion Rate Optimization",
        description: "Data-driven testing to maximize every visitor's potential."
      },
      {
        title: "Analytics & Reporting",
        description: "Clear, actionable insights that inform strategic decisions."
      }
    ],
    process: ["Audit & Analysis", "Strategy Development", "Campaign Execution", "Optimize & Scale"],
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    id: "social-mastery",
    icon: Users,
    title: "Social Mastery",
    subtitle: "Engage & Influence",
    tagline: "Build communities, not just followers",
    heroDescription: "We help you build a powerful social presence that amplifies your brand voice and creates genuine connections with your audience.",
    description: "Social media is where brands become human. We create content strategies and community experiences that transform followers into advocates and casual scrollers into loyal customers.",
    features: [
      {
        title: "Social Media Strategy",
        description: "Comprehensive strategy aligned with your business objectives."
      },
      {
        title: "Content Creation & Curation",
        description: "Scroll-stopping content that engages and converts."
      },
      {
        title: "Community Management",
        description: "Active engagement that builds relationships and loyalty."
      },
      {
        title: "Influencer Partnerships",
        description: "Strategic collaborations that expand your reach authentically."
      },
      {
        title: "Viral Campaign Planning",
        description: "Creative campaigns designed to maximize shareability."
      },
      {
        title: "Social Analytics",
        description: "Deep insights into what works and why."
      }
    ],
    process: ["Audit & Research", "Strategy & Planning", "Content Production", "Engage & Analyze"],
    gradient: "from-blue-500/20 to-indigo-600/20",
  },
  {
    id: "ai-powered-growth",
    icon: Cpu,
    title: "AI-Powered Growth",
    subtitle: "Automate & Scale",
    tagline: "The future of growth is intelligent",
    heroDescription: "We leverage cutting-edge AI technology to automate processes, personalize experiences, and unlock unprecedented growth opportunities.",
    description: "Artificial intelligence isn't the future—it's now. We implement AI solutions that automate the mundane, personalize at scale, and provide insights that were previously impossible to obtain.",
    features: [
      {
        title: "AI Chatbot Development",
        description: "Intelligent conversational agents that enhance customer experience 24/7."
      },
      {
        title: "Marketing Automation",
        description: "Smart automation that scales your marketing without scaling your team."
      },
      {
        title: "Predictive Analytics",
        description: "Machine learning models that forecast trends and opportunities."
      },
      {
        title: "Personalization Engines",
        description: "Dynamic content and experiences tailored to each user."
      },
      {
        title: "AI Content Generation",
        description: "AI-assisted content creation that maintains your brand voice."
      },
      {
        title: "Process Automation",
        description: "Streamlined workflows that eliminate repetitive tasks."
      }
    ],
    process: ["Assessment & Planning", "Solution Design", "Implementation", "Training & Optimization"],
    gradient: "from-purple-500/20 to-pink-600/20",
  },
];

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = allServices.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-gold hover:underline">View All Services</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30`} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="container-tight relative z-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-gold" />
              </div>
              
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
                {service.subtitle}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light italic mb-6">
                {service.tagline}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {service.heroDescription}
              </p>
              
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-background font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-gold-glow transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className={`p-8 rounded-2xl border border-gold/20 bg-gradient-to-br ${service.gradient} backdrop-blur-sm`}>
                <h3 className="text-sm tracking-[0.15em] uppercase text-gold/80 mb-6">Our Process</h3>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-medium">
                        {i + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              What's Included
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {service.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl border border-border/50 bg-gradient-to-br from-background to-gold/5 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-10 h-10 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss how {service.title} can transform your business. 
              Our team is ready to bring your vision to life.
            </p>
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-background font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-gold-glow transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
