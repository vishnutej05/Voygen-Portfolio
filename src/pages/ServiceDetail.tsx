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

interface ServiceFeature {
  title: string;
  description: string;
  bullets?: string[];
}

interface ExtraBlock {
  title: string;
  description: string;
  bullets: string[];
}

interface ServiceData {
  id: string;
  icon: typeof Palette;
  title: string;
  subtitle: string;
  tagline: string;
  heroDescription: string;
  /** Supports <span class="text-gold"> for highlights */
  descriptionHtml: string;
  features: ServiceFeature[];
  process: string[];
  gradient: string;
  ctaText?: string;
  extras?: ExtraBlock[];
}

const allServices: ServiceData[] = [
  {
    id: "brand-foundation",
    icon: Palette,
    title: "Brand Foundation",
    subtitle: "Identity & Strategy",
    tagline: "Build a brand that lasts",
    heroDescription: "Your brand is the first impression your audience gets — and the lasting memory they carry. We don't just design logos. We build complete brand identities that connect emotionally with your audience and create trust from the very first touchpoint.",
    descriptionHtml: `A strong brand is the foundation of every successful business. It's what makes people <span class="text-gold font-medium">choose you over competitors</span>, come back for more, and recommend you to others. We craft brands that are <span class="text-gold font-medium">consistent, recognizable, and meaningful</span> — whether it's your website, social media, packaging, or storefront. Every element is designed to work together and tell your unique story.`,
    features: [
      {
        title: "Logo Design & Variations",
        description: "Custom logo design tailored to your business personality.",
        bullets: ["Primary logo", "Icon/favicon variations", "Monochrome versions", "Social media-ready formats"]
      },
      {
        title: "Brand Strategy & Positioning",
        description: "Strategic positioning that sets you apart in your market.",
        bullets: ["Competitor analysis", "Target audience profiling", "Unique value proposition", "Brand story development"]
      },
      {
        title: "Typography System",
        description: "Carefully curated fonts that reflect your brand's personality.",
        bullets: ["Primary & secondary typefaces", "Font hierarchy guidelines", "Web & print font pairings", "Usage rules & examples"]
      },
      {
        title: "Color Palette & Guidelines",
        description: "A comprehensive color system for consistency across all platforms.",
        bullets: ["Primary & secondary colors", "Accent & neutral tones", "Color codes (HEX, RGB, CMYK)", "Do's and don'ts for usage"]
      },
      {
        title: "Brand Voice & Messaging",
        description: "Define how your brand sounds across all communication.",
        bullets: ["Tone of voice guidelines", "Key messaging pillars", "Tagline & slogan creation", "Content style guide"]
      },
      {
        title: "Brand Asset Library",
        description: "Everything your team needs to represent the brand perfectly.",
        bullets: ["Social media templates", "Stationery design", "Presentation templates", "Brand guidelines document"]
      }
    ],
    process: ["Discovery & Research", "Strategy Development", "Visual Identity Design", "Guidelines & Handoff"],
    gradient: "from-amber-500/20 to-orange-600/20",
    ctaText: "Your brand is not just a logo — it's the feeling people get when they interact with your business. Let us help you build a brand that people remember and trust.",
  },
  {
    id: "digital-presence",
    icon: Globe,
    title: "Web Services",
    subtitle: "Build & Scale",
    tagline: "Your business's digital home",
    heroDescription: "Your website is your business's digital home. It's the place where customers learn about you, explore your products or services, and decide whether to trust you. Even when you're offline, your website is working — speaking for your brand 24/7.",
    descriptionHtml: `A well-built website doesn't just "look good." It builds <span class="text-gold font-medium">credibility</span>, answers questions, <span class="text-gold font-medium">captures leads</span>, and converts visitors into customers. We use smart tools, AI, and automation to reduce development time and make professional websites affordable — without compromising quality. We start from <span class="text-gold font-semibold">₹2999*</span> because we believe every business — even a small local shop — deserves a strong digital presence. And as your business grows, your website can <span class="text-gold font-medium">scale with you</span>.`,
    features: [
      {
        title: "Requirement Gathering",
        description: "We begin by understanding your business inside-out.",
        bullets: ["Your business goals", "Your target audience", "Features you need", "Your budget and timeline"]
      },
      {
        title: "Architecture Planning",
        description: "We plan the technical foundation for a rock-solid website.",
        bullets: ["Technology stack", "Website structure", "Page hierarchy", "Performance and security considerations"]
      },
      {
        title: "Design (UI/UX & Content)",
        description: "We focus on visual excellence and clear messaging.",
        bullets: ["Clean and modern design", "Easy navigation", "Clear messaging", "Proper placement of images, media, and call-to-actions"]
      },
      {
        title: "Front-End Development & Testing",
        description: "This is where your website comes to life visually. We build the user-facing part and continuously test it.",
        bullets: ["Speed", "Mobile responsiveness", "User experience", "Each stage improves based on your inputs"]
      },
      {
        title: "Back-End Development & Testing",
        description: "We develop the technical engine behind your website.",
        bullets: ["Databases", "Forms and data collection", "Secure login systems", "API integrations"]
      },
      {
        title: "User Acceptance Testing (UAT)",
        description: "You test the website as a real user. We fix any issues, fine-tune performance, and ensure everything works perfectly before launch."
      },
      {
        title: "Delivery & Launch",
        description: "We deploy your website and make it live — ready for the world to see."
      }
    ],
    extras: [
      {
        title: "End-to-End Support",
        description: "We handle everything so you don't have to worry about technical complexities.",
        bullets: ["Domain registration", "Hosting setup", "Website maintenance", "Security updates", "Performance monitoring", "SEO Services"]
      },
      {
        title: "Beyond Websites",
        description: "We don't stop at websites. We also build:",
        bullets: ["Custom web applications", "Business software", "Mobile apps", "Automation tools", "Content management systems"]
      }
    ],
    process: ["Requirement Gathering", "Architecture Planning", "Design & Content", "Development & Testing", "UAT", "Delivery & Launch"],
    gradient: "from-gold/20 to-amber-500/20",
    ctaText: "Your website is not an expense — it's an investment in your business growth. Get in touch with us to discover how the right web solution can take your business to the next level.",
  },
  {
    id: "growth-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    subtitle: "Reach & Grow",
    tagline: "Be noticed, remembered, and trusted",
    heroDescription: "In today's world, your customers are online — scrolling, searching, comparing, and deciding. If your business isn't visible there, you're losing valuable opportunities every day. Digital marketing is not just about being present online — it's about being noticed, remembered, and trusted.",
    descriptionHtml: `We believe successful digital marketing depends on two things: <span class="text-gold font-medium">Quality that builds credibility</span> and <span class="text-gold font-medium">consistency that builds recognition</span>. When both work together, your brand doesn't just appear — it stands out. With technology and AI transforming the way businesses operate, we use automation and intelligent tools to make marketing <span class="text-gold font-medium">faster to launch</span>, <span class="text-gold font-medium">more affordable</span>, <span class="text-gold font-medium">more precise in targeting</span>, and <span class="text-gold font-medium">more efficient in generating results</span>. You focus on running your business. We focus on growing it.`,
    features: [
      {
        title: "Social Media Post Creation",
        description: "We design eye-catching and professional posts that reflect your brand identity.",
        bullets: ["Informative posts", "Promotional creatives", "Festival & seasonal posts", "Product highlights", "Educational content"]
      },
      {
        title: "Reels & Short Videos",
        description: "Short videos are one of the fastest ways to grow online. We create engaging reels that:",
        bullets: ["Showcase your products or services", "Tell your brand story", "Capture trends in a meaningful way", "Increase reach organically"]
      },
      {
        title: "Social Media Management",
        description: "Consistency builds trust. We handle your complete social media presence, including:",
        bullets: ["Content planning", "Posting schedule", "Caption writing", "Hashtag research", "Profile optimization"]
      },
      {
        title: "Paid Ads & Boosting",
        description: "We help your business reach the right audience — not just more people, but the right people.",
        bullets: ["Instagram & Facebook ad campaigns", "Post boosting for better visibility", "Targeted audience selection", "Budget-friendly ad planning", "Performance tracking"]
      },
      {
        title: "Lead Generation Campaigns",
        description: "We create focused campaigns that help you collect real business leads.",
        bullets: ["Customer inquiries", "WhatsApp leads", "Website visits", "Contact details of interested buyers"]
      },
      {
        title: "Performance Tracking & Reporting",
        description: "We don't just post and disappear. You receive clear reports showing:",
        bullets: ["Reach and engagement", "Growth in followers", "Leads generated", "Ad performance"]
      }
    ],
    process: ["Strategy & Planning", "Content Creation", "Campaign Execution", "Track & Optimize"],
    gradient: "from-emerald-500/20 to-teal-600/20",
    ctaText: "Let's turn your social media into a powerful business tool. Get in touch and let's grow your brand the smart way.",
  },
  {
    id: "social-mastery",
    icon: Users,
    title: "Social Mastery",
    subtitle: "Engage & Influence",
    tagline: "Build communities, not just followers",
    heroDescription: "Social media is where brands become human. We don't just post content — we build meaningful communities around your brand that drive loyalty, word-of-mouth, and organic growth.",
    descriptionHtml: `Anyone can post on social media. But building a <span class="text-gold font-medium">loyal, engaged community</span> that actively advocates for your brand? That takes strategy, creativity, and consistency. We help you go beyond vanity metrics like likes and followers. Our focus is on <span class="text-gold font-medium">real engagement</span>, <span class="text-gold font-medium">genuine connections</span>, and <span class="text-gold font-medium">measurable conversions</span> — turning casual scrollers into paying customers who keep coming back.`,
    features: [
      {
        title: "Social Media Strategy",
        description: "A comprehensive roadmap aligned with your business goals.",
        bullets: ["Platform selection & prioritization", "Audience persona development", "Content pillar framework", "Posting cadence & calendar"]
      },
      {
        title: "Content Creation & Curation",
        description: "Scroll-stopping content that engages and converts.",
        bullets: ["Original branded graphics", "Carousel posts & infographics", "User-generated content curation", "Trend-jacking with brand relevance"]
      },
      {
        title: "Community Management",
        description: "Active engagement that builds real relationships.",
        bullets: ["Comment & DM management", "Conversation starters", "Community guidelines & moderation", "Crisis response planning"]
      },
      {
        title: "Influencer Partnerships",
        description: "Strategic collaborations that expand your reach authentically.",
        bullets: ["Influencer identification & vetting", "Campaign brief creation", "Partnership negotiation", "Performance measurement"]
      },
      {
        title: "Viral Campaign Planning",
        description: "Creative campaigns designed to maximize shareability.",
        bullets: ["Trend analysis & timing", "Challenge & contest creation", "Cross-platform amplification", "Real-time campaign optimization"]
      },
      {
        title: "Social Analytics & Insights",
        description: "Deep insights into what works and why, so we can double down.",
        bullets: ["Monthly performance reports", "Audience growth tracking", "Engagement rate analysis", "Competitor benchmarking"]
      }
    ],
    process: ["Audit & Research", "Strategy & Planning", "Content Production", "Engage & Analyze"],
    gradient: "from-blue-500/20 to-indigo-600/20",
    ctaText: "Your audience is already on social media. The question is — are they talking about you? Let's make sure they are.",
  },
  {
    id: "ai-powered-growth",
    icon: Cpu,
    title: "AI-Powered Growth",
    subtitle: "Automate & Scale",
    tagline: "The future of growth is intelligent",
    heroDescription: "AI isn't a buzzword — it's the most powerful lever for growth available today. We help businesses implement practical, real-world AI solutions that save time, reduce costs, and unlock new revenue streams.",
    descriptionHtml: `Most businesses know AI is important, but few know where to start. That's where we come in. We implement <span class="text-gold font-medium">practical AI solutions</span> that deliver real results — not just hype. From <span class="text-gold font-medium">intelligent chatbots</span> that handle customer queries 24/7 to <span class="text-gold font-medium">marketing automation</span> that runs while you sleep, we build AI-powered systems that <span class="text-gold font-medium">scale your business without scaling your team</span>. The result? Lower costs, faster execution, and smarter decisions backed by data.`,
    features: [
      {
        title: "AI Chatbot Development",
        description: "Intelligent conversational agents that enhance customer experience around the clock.",
        bullets: ["WhatsApp & website chatbots", "Lead qualification automation", "FAQ & support automation", "Multi-language support"]
      },
      {
        title: "Marketing Automation",
        description: "Smart automation that runs your marketing engine while you focus on business.",
        bullets: ["Email drip campaigns", "Social media scheduling", "Lead nurturing sequences", "Triggered notifications & follow-ups"]
      },
      {
        title: "Predictive Analytics",
        description: "Machine learning models that forecast trends before they happen.",
        bullets: ["Customer behavior prediction", "Sales forecasting", "Churn risk analysis", "Market trend identification"]
      },
      {
        title: "Personalization Engines",
        description: "Dynamic content and experiences tailored to each individual user.",
        bullets: ["Website content personalization", "Product recommendations", "Dynamic pricing models", "Personalized email content"]
      },
      {
        title: "AI Content Generation",
        description: "AI-assisted content creation that maintains your brand voice at scale.",
        bullets: ["Blog & article drafts", "Social media copy", "Ad copy variations", "SEO-optimized content"]
      },
      {
        title: "Process Automation",
        description: "Streamlined workflows that eliminate repetitive tasks and human error.",
        bullets: ["Data entry automation", "Invoice & report generation", "CRM workflow automation", "Custom business process bots"]
      }
    ],
    process: ["Assessment & Planning", "Solution Design", "Implementation & Integration", "Training & Optimization"],
    gradient: "from-purple-500/20 to-pink-600/20",
    ctaText: "AI is no longer optional — it's essential. Let us help you implement the right AI solutions to stay ahead of your competition and grow smarter.",
  },
];

// Export for reuse in other components
export { allServices };

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

      {/* Why Choose Us — larger font + highlighted text */}
      <section className="py-20 md:py-28 border-b border-border/30">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">
              What Sets Us <span className="italic text-gold">Apart</span>
            </h2>
            <p 
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: service.descriptionHtml }}
            />
          </motion.div>
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
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-6 md:p-8 rounded-xl border border-border/50 bg-gradient-to-br from-background to-gold/5 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
                
                {feature.bullets && feature.bullets.length > 0 && (
                  <ul className="space-y-2 mt-4 pt-4 border-t border-border/30">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-1.5 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section (for services with additional content blocks) */}
      {service.extras && service.extras.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/10 border-y border-border/30">
          <div className="container-tight">
            <div className="grid md:grid-cols-2 gap-8">
              {service.extras.map((extra, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="p-8 md:p-10 rounded-2xl border border-gold/20 bg-gradient-to-br from-background to-gold/5"
                >
                  <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">{extra.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{extra.description}</p>
                  <ul className="space-y-3">
                    {extra.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-gold" />
                        </div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              {service.ctaText 
                ? service.ctaText 
                : `Let's discuss how ${service.title} can transform your business. Our team is ready to bring your vision to life.`
              }
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
