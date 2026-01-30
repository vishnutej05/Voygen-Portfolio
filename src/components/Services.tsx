import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown, Sparkles, Zap, Layers, ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

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

const WorkShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const projects = [
    { image: work1, title: "Noxt Brand", category: "E-Commerce", year: "2024" },
    { image: work2, title: "Finstack", category: "Fintech App", year: "2024" },
    { image: work3, title: "Crown Jewelers", category: "Brand Identity", year: "2023" },
    { image: work4, title: "Limno Properties", category: "Real Estate", year: "2024" },
    { image: work5, title: "Sealia Analytics", category: "SaaS Dashboard", year: "2023" },
    { image: work6, title: "Lexuery Beauty", category: "Beauty Commerce", year: "2024" },
  ];

  return (
    <div ref={containerRef} className="py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-gold mb-4">
          Featured Work
        </span>
        <h3 className="font-serif text-4xl md:text-5xl font-medium mb-4">
          Crafted with Precision
        </h3>
        <p className="max-w-xl mx-auto text-muted-foreground">
          A selection of projects where strategy, design, and technology converge to create exceptional results.
        </p>
      </motion.div>

      {/* Scrolling row 1 */}
      <motion.div style={{ x: x1 }} className="flex gap-6 mb-6">
        {[...projects.slice(0, 3), ...projects.slice(0, 3)].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group flex-shrink-0 w-80 md:w-96"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-medium text-foreground">{project.title}</h4>
                    <p className="text-sm text-gold">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs text-muted-foreground">
              {project.year}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scrolling row 2 - opposite direction */}
      <motion.div style={{ x: x2 }} className="flex gap-6 -ml-48">
        {[...projects.slice(3, 6), ...projects.slice(3, 6)].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group flex-shrink-0 w-80 md:w-96"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-medium text-foreground">{project.title}</h4>
                    <p className="text-sm text-gold">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs text-muted-foreground">
              {project.year}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
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
    <section id="services" className="bg-charcoal relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container-tight relative z-10 section-padding">
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

      {/* Work Showcase with parallax scrolling */}
      <WorkShowcase />

      {/* Process section */}
      <div className="container-tight relative z-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-gold mb-4">
            Our Process
          </span>
          <h3 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            From Vision to Reality
          </h3>
          <p className="max-w-xl mx-auto text-muted-foreground">
            A proven methodology that transforms ambitious ideas into market-leading digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discover", desc: "Deep dive into your business, audience, and competitive landscape." },
            { step: "02", title: "Strategy", desc: "Define clear objectives, KPIs, and a roadmap for success." },
            { step: "03", title: "Create", desc: "Design and develop solutions that exceed expectations." },
            { step: "04", title: "Optimize", desc: "Continuous improvement through data-driven insights." },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 bg-card border border-border rounded-lg hover:border-gold/30 transition-all duration-300">
                <div className="font-serif text-5xl font-medium text-gold/20 group-hover:text-gold/40 transition-colors mb-4">
                  {item.step}
                </div>
                <h4 className="font-serif text-xl font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
