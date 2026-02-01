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
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16 md:mb-24"
        >
          <motion.p variants={fadeUpVariants} className="label-mono mb-4">What We Do</motion.p>
          <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-6xl font-normal tracking-tight font-serif">
            Services built for
            <br />
            <span className="gold-gradient-text italic">measurable impact</span>
          </motion.h2>
        </motion.div>

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
              duration: 20, 
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

// Improved Process Section with more visual impact
const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const steps = [
    { 
      number: "01", 
      title: "Discover", 
      description: "Deep dive into your business landscape, audience behavior, and competitive positioning to uncover opportunities.",
      accent: "from-gold/20 to-gold/5"
    },
    { 
      number: "02", 
      title: "Strategy", 
      description: "Define clear objectives, measurable KPIs, and a comprehensive roadmap aligned with your growth goals.",
      accent: "from-gold/15 to-gold/5"
    },
    { 
      number: "03", 
      title: "Create", 
      description: "Design and develop solutions with precision craftsmanship that exceed expectations and deliver results.",
      accent: "from-gold/20 to-gold/5"
    },
    { 
      number: "04", 
      title: "Optimize", 
      description: "Continuous improvement through data-driven insights, A/B testing, and performance optimization.",
      accent: "from-gold/15 to-gold/5"
    },
  ];

  return (
    <div className="voygen-container py-24 md:py-32" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mb-16"
      >
        <motion.span variants={fadeUpVariants} className="label-mono mb-4 block">
          Our Process
        </motion.span>
        <motion.h3 variants={fadeUpVariants} className="font-serif text-4xl md:text-5xl font-medium mb-4">
          From Vision to <span className="italic text-gold">Reality</span>
        </motion.h3>
        <motion.p variants={fadeUpVariants} className="max-w-xl text-muted-foreground">
          A proven methodology that transforms ambitious ideas into market-leading digital experiences.
        </motion.p>
      </motion.div>

      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={fadeUpVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative group bg-card border border-border hover:border-gold/40 p-8 md:p-10 rounded-sm overflow-hidden interactive"
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Animated number */}
            <motion.div 
              className="relative font-serif text-6xl md:text-7xl font-medium mb-6"
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <span className="text-gold/20 group-hover:text-gold/50 transition-colors duration-500">
                {step.number}
              </span>
            </motion.div>
            
            {/* Content */}
            <div className="relative">
              <h4 className="font-serif text-2xl font-medium mb-3 text-foreground group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                {step.description}
              </p>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-gold/10 group-hover:bg-gold/30 transform rotate-45 translate-x-4 -translate-y-4 transition-colors duration-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Trust Section
const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const stats = [
    { value: "$2.4B+", label: "Client Revenue Generated" },
    { value: "150+", label: "Enterprise Clients" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "12", label: "Years of Excellence" }
  ];

  const industries = [
    "Financial Services", "Healthcare", "Technology", "E-Commerce", 
    "Real Estate", "Manufacturing", "Education", "Media"
  ];

  return (
    <section className="section-spacing bg-background relative z-30" data-testid="trust-section">
      <div className="voygen-container">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Stats */}
          {/* <motion.div 
            variants={fadeUpVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center md:text-left interactive"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif gold-gradient-text mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-muted-foreground tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div> */}

          {/* <div className="divider-gold mb-20" /> */}

          {/* Industries */}
          <motion.div variants={fadeUpVariants} className="text-center">
            <p className="label-mono mb-10">Trusted Across Industries</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              {industries.map((industry, index) => (
                <motion.span 
                  key={industry}
                  className="px-5 py-2.5 border border-border text-sm text-muted-foreground hover:border-gold hover:text-gold rounded-sm transition-all duration-300 interactive"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" className="section-spacing bg-charcoal relative z-30 overflow-hidden" data-testid="about-section">
      {/* Background accent */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gold/5 to-transparent pointer-events-none" /> */}
      
      <div className="voygen-container relative">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          <motion.div variants={fadeUpVariants}>
            <motion.p variants={fadeUpVariants} className="label-mono mb-4">About Voygen</motion.p>
            <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-6xl font-normal tracking-tight font-serif mb-8">
              We build digital
              <br />
              <span className="gold-gradient-text italic">that delivers ROI</span>
            </motion.h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Voygen is a strategic digital growth partner for companies that take their growth seriously. 
                We combine deep industry expertise with cutting-edge technology to deliver measurable outcomes.
              </p>
              <p>
                Founded by industry veterans from McKinsey, Google, and Stripe, we understand that digital 
                transformation isn't about trends—it's about results. Every decision we make is backed by 
                data, and every pixel we push is designed to convert.
              </p>
              <p>
                Our clients don't just get a vendor. They get a partner invested in their long-term success, 
                with skin in the game through performance-based engagements.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeUpVariants}
            className="relative"
          >
            <motion.div 
              className="aspect-square relative overflow-hidden rounded-sm interactive"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Voygen Team"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
            </motion.div>
            
            {/* Philosophy card - positioned outside image, overlapping */}
            <motion.div 
              className="absolute -bottom-6 -left-6 p-8 bg-background border border-border"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
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
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="relative z-10">
        <ServicesSection />
      </div>

      {/* Work Showcase */}
      <WorkShowcase />

      {/* Process section */}
      <ProcessSection />

      {/* Trust section */}
      <TrustSection />

      {/* About section */}
      <AboutSection />
    </section>
  );
};

export default Services;
