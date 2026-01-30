import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Sparkles, Zap, Layers } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  items: { title: string; details: string[] }[];
  delay: number;
}

const ServiceCard = ({ title, subtitle, description, icon, items, delay }: ServiceCardProps) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className="group relative"
    >
      <div className="relative h-full p-8 md:p-10 bg-card border border-border rounded-lg hover:border-gold/30 transition-all duration-500">
        {/* Icon */}
        <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors duration-300">
          {icon}
        </div>

        {/* Header */}
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-gold mb-3">
          {title}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 leading-tight">
          {subtitle}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {description}
        </p>

        {/* Expandable Items */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="border-t border-border pt-3">
              <button
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                className="w-full flex items-center justify-between text-left group/item"
              >
                <span className="font-medium text-foreground group-hover/item:text-gold transition-colors">
                  {item.title}
                </span>
                <ChevronDown 
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                    expandedItem === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedItem === index ? "auto" : 0,
                  opacity: expandedItem === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="pt-3 pl-4 space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "CREATE",
      subtitle: "Design & Development",
      description: "Scalable design and development teams working in structured monthly cycles to bring your vision to life.",
      icon: <Layers className="h-6 w-6" />,
      items: [
        {
          title: "Strategy & Content",
          details: ["Brand Positioning", "Messaging Architecture", "Digital Strategy", "Content Systems"]
        },
        {
          title: "Identity & Branding",
          details: ["Visual Identity", "Brand Guidelines", "Logo Systems", "Typography & Color"]
        },
        {
          title: "Websites & Apps",
          details: ["UX/UI Design", "Web & App Development", "Framer & Webflow", "Custom Solutions"]
        },
        {
          title: "Ongoing Support",
          details: ["QA & Testing", "Maintenance", "SEO Optimization", "Performance Monitoring"]
        }
      ]
    },
    {
      title: "PULSE",
      subtitle: "AI-Enhanced Digital Growth",
      description: "Data-driven digital marketing powered by AI. Analytics, social performance, and decision-ready insights.",
      icon: <Zap className="h-6 w-6" />,
      items: [
        {
          title: "Performance Analytics",
          details: ["Real-time Dashboards", "Attribution Modeling", "Conversion Tracking", "ROI Analysis"]
        },
        {
          title: "Social Intelligence",
          details: ["Audience Insights", "Engagement Optimization", "Content Performance", "Competitive Analysis"]
        },
        {
          title: "Lead Engagement",
          details: ["Automated Nurturing", "Scoring Systems", "Pipeline Optimization", "CRM Integration"]
        },
        {
          title: "AI Insights",
          details: ["Predictive Analytics", "Trend Forecasting", "Opportunity Detection", "Smart Recommendations"]
        }
      ]
    },
    {
      title: "CUSTOM",
      subtitle: "Signature Programs",
      description: "Tailored hybrid programs combining design, growth, AI, and analytics for enterprise needs.",
      icon: <Sparkles className="h-6 w-6" />,
      items: [
        {
          title: "Hybrid Solutions",
          details: ["Custom Team Assembly", "Flexible Engagement", "Cross-functional Expertise", "Dedicated Resources"]
        },
        {
          title: "Enterprise Scale",
          details: ["Multi-brand Programs", "Global Rollouts", "Compliance & Security", "Enterprise Integrations"]
        },
        {
          title: "Innovation Labs",
          details: ["Emerging Tech Pilots", "AI Experimentation", "Prototype Development", "Market Testing"]
        },
        {
          title: "Strategic Partnership",
          details: ["C-Suite Advisory", "Quarterly Reviews", "Roadmap Planning", "Growth Workshops"]
        }
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-charcoal relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-gold mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            How We Drive Growth
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Three pillars of excellence, each designed to deliver measurable 
            impact at every stage of your digital journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              {...service}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;