import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PenTool, Activity, Cpu, ArrowRight, ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

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

// Services Section
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const services = [
    {
      title: "Webpage for your business",
      subtitle: "Design & Development",
      description: "Crafting digital experiences that convert. From brand identity to full-stack web development, we build what matters.",
      features: ["Brand Strategy", "UI/UX Design", "Web Development", "Ongoing Support"],
      icon: PenTool
    },
    {
      title: "Social Media Management",
      subtitle: "AI-Powered Marketing",
      description: "Data-driven growth intelligence. We leverage AI analytics to optimize every touchpoint of your customer journey.",
      features: ["AI Analytics", "Growth Marketing", "Performance Optimization", "Real-time Insights"],
      icon: Activity
    },
    {
      title: "Customized Solutions",
      subtitle: "Tailored Programs",
      description: "Bespoke digital solutions for complex challenges. Enterprise-grade programs built for scale and longevity.",
      features: ["Custom Development", "System Integration", "Digital Transformation", "Dedicated Teams"],
      icon: Cpu
    }
  ];

  return (
    <section id="services" className="section-spacing bg-background relative z-30" data-testid="services-section">
      <div className="voygen-container">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUpVariants}
              className="service-card group interactive"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              data-testid={`service-card-${service.title.toLowerCase()}`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-8 h-8 text-gold opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                  <span className="label-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-foreground font-serif">{service.title}</h3>
                <p className="text-sm text-gold mb-6">{service.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
              </div>
              <div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-secondary inline-flex items-center gap-2 group/btn">
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WorkShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const projects = [
    { image: work1, title: "Noxt Brand", category: "E-Commerce", year: "2024" },
    { image: work2, title: "Finstack", category: "Fintech App", year: "2024" },
    { image: work3, title: "Crown Jewelers", category: "Brand Identity", year: "2023" },
    { image: work4, title: "Limno Properties", category: "Real Estate", year: "2024" },
    { image: work5, title: "Sealia Analytics", category: "SaaS Dashboard", year: "2023" },
    { image: work6, title: "Lexuery Beauty", category: "Beauty Commerce", year: "2024" },
  ];

  const row1Projects = [...projects.slice(0, 3), ...projects.slice(0, 3), ...projects.slice(0, 3), ...projects.slice(0, 3)];
  const row2Projects = [...projects.slice(3, 6), ...projects.slice(3, 6), ...projects.slice(3, 6), ...projects.slice(3, 6)];

  return (
    <div className="py-16 md:py-24 overflow-hidden">
      {/* Header with container padding */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="voygen-container text-left mb-10 md:mb-16"
      >
        <p className="label-mono mb-4">
          Featured Work
        </p>
        <h2 className="text-4xl md:text-6xl font-normal tracking-tight font-serif">
          Results that speak for
          <br />
          <span className="gold-gradient-text italic">themselves</span>
        </h2>
      </motion.div>

      {/* Infinite scrolling row 1 - full width, no padding */}
      <div className="relative mb-6">
        <motion.div 
          className="flex gap-4 md:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: { 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
        >
          {row1Projects.map((project, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 w-72 sm:w-80 md:w-[420px] lg:w-[480px]"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-base md:text-lg font-medium text-foreground">{project.title}</h4>
                      <p className="text-xs md:text-sm text-gold">{project.category}</p>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs text-muted-foreground">
                {project.year}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite scrolling row 2 - full width, no padding */}
      <div className="relative">
        <motion.div 
          className="flex gap-4 md:gap-6"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ 
            x: { 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
        >
          {row2Projects.map((project, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 w-72 sm:w-80 md:w-[420px] lg:w-[480px]"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-base md:text-lg font-medium text-foreground">{project.title}</h4>
                      <p className="text-xs md:text-sm text-gold">{project.category}</p>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs text-muted-foreground">
                {project.year}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Improved Process Section with minimal line separators
const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const steps = [
    { 
      number: "01", 
      title: "Discover", 
      description: "Deep dive into your business landscape, audience behavior, and competitive positioning to uncover opportunities.",
    },
    { 
      number: "02", 
      title: "Strategy", 
      description: "Define clear objectives, measurable KPIs, and a comprehensive roadmap aligned with your growth goals.",
    },
    { 
      number: "03", 
      title: "Create", 
      description: "Design and develop solutions with precision craftsmanship that exceed expectations and deliver results.",
    },
    { 
      number: "04", 
      title: "Optimize", 
      description: "Continuous improvement through data-driven insights, A/B testing, and performance optimization.",
    },
  ];

  return (
    <div className="voygen-container py-24 md:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="label-mono mb-4 block">Our Process</span>
        <h3 className="font-serif text-4xl md:text-5xl font-medium mb-4">
          From Vision to <span className="italic text-gold">Reality</span>
        </h3>
        <p className="max-w-xl text-muted-foreground">
          A proven methodology that transforms ambitious ideas into market-leading digital experiences.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`py-6 md:py-0 md:px-8 ${index < steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-border/30 pb-6 md:pb-0' : ''} ${index > 0 ? 'pt-6 md:pt-0 md:pl-8' : 'md:pl-0'}`}
          >
            {/* Number */}
            <div className="display-number text-5xl md:text-6xl mb-6 text-gold/30">
              {step.number}
            </div>
            
            {/* Content */}
            <h4 className="font-serif text-xl md:text-2xl font-medium mb-3 text-foreground">
              {step.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// About Section - With Image and CTA
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const highlights = [
    "Strategic digital growth partner",
    "Data-driven decision making",
    "Performance-based results",
    "Industry-leading expertise",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal relative z-30" data-testid="about-section">
      <div className="voygen-container">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left - Content */}
          <div>
            <span className="label-mono mb-4 block">About Voygen</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight font-serif mb-8">
              We build digital
              <br />
              <span className="gold-gradient-text italic">that delivers ROI</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              A strategic partner for companies that take their growth seriously.
            </p>

            {/* Minimal bullet points */}
            <ul className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a 
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-gold text-gold font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-gold hover:text-background transition-all duration-300"
            >
              Learn Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Voygen Team"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
            </div>
            
            {/* Philosophy card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 p-8 bg-background border border-border"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="label-mono text-[10px] mb-2">Our Philosophy</p>
              <p className="text-xl font-serif font-medium text-foreground">
                "Strategy without execution is hallucination."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="bg-charcoal relative">
      {/* Work Showcase */}
      <WorkShowcase />

      {/* Process section */}
      <ProcessSection />

      {/* About section */}
      <AboutSection />
    </section>
  );
};

export default Services;