import { motion } from "framer-motion";
import { Layers, Zap, Settings, ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const ServiceCard = ({ 
  number, 
  title, 
  subtitle, 
  description, 
  icon, 
  delay 
}: { 
  number: string;
  title: string; 
  subtitle: string; 
  description: string; 
  icon: React.ReactNode; 
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className="group relative h-full"
    >
      <div className="relative h-full p-8 md:p-10 bg-card border border-border rounded-sm hover:border-gold/30 transition-all duration-500">
        {/* Header with icon and number */}
        <div className="flex items-start justify-between mb-8">
          <div className="w-12 h-12 flex items-center justify-center text-gold">
            {icon}
          </div>
          <span className="text-sm text-muted-foreground">{number}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-3xl md:text-4xl font-medium mb-3 tracking-tight">
          {title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-sm text-gold mb-6 tracking-wide">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const WorkShowcase = () => {
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
    <div className="py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container-tight text-left mb-16"
      >
        <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold mb-4">
          Featured Work
        </span>
        <h3 className="font-serif text-4xl md:text-5xl font-medium mb-4">
          Crafted with <span className="italic">Precision</span>
        </h3>
        <p className="max-w-xl text-muted-foreground">
          A selection of projects where strategy, design, and technology converge.
        </p>
      </motion.div>

      {/* Infinite scrolling row 1 - moves left */}
      <div className="relative mb-6">
        <motion.div 
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: { 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
        >
          {row1Projects.map((project, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 w-80 md:w-96"
            >
              <div className="relative overflow-hidden rounded-sm">
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
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite scrolling row 2 - moves right */}
      <div className="relative">
        <motion.div 
          className="flex gap-6"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ 
            x: { 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
        >
          {row2Projects.map((project, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 w-80 md:w-96"
            >
              <div className="relative overflow-hidden rounded-sm">
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
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    { 
      number: "01", 
      title: "Discover", 
      description: "Deep dive into your business landscape, audience behavior, and competitive positioning to uncover opportunities."
    },
    { 
      number: "02", 
      title: "Strategy", 
      description: "Define clear objectives, measurable KPIs, and a comprehensive roadmap aligned with your growth goals."
    },
    { 
      number: "03", 
      title: "Create", 
      description: "Design and develop solutions with precision craftsmanship that exceed expectations and deliver results."
    },
    { 
      number: "04", 
      title: "Optimize", 
      description: "Continuous improvement through data-driven insights, A/B testing, and performance optimization."
    },
  ];

  return (
    <div className="container-tight py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold mb-4">
          Our Process
        </span>
        <h3 className="font-serif text-4xl md:text-5xl font-medium mb-4">
          From Vision to <span className="italic">Reality</span>
        </h3>
        <p className="max-w-xl text-muted-foreground">
          A proven methodology that transforms ambitious ideas into market-leading digital experiences.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group bg-background p-8 md:p-10"
          >
            <div className="font-serif text-6xl md:text-7xl font-medium text-gold/10 group-hover:text-gold/25 transition-colors duration-500 mb-6">
              {step.number}
            </div>
            <h4 className="font-serif text-2xl font-medium mb-3">{step.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      number: "01",
      title: "CREATE",
      subtitle: "Design & Development",
      description: "Crafting digital experiences that convert. From brand identity to fully functional websites and apps, we bring your vision to life with precision and purpose.",
      icon: <Layers className="h-7 w-7" strokeWidth={1.5} />,
    },
    {
      number: "02",
      title: "PULSE",
      subtitle: "AI-Powered Marketing",
      description: "Data-driven growth intelligence. We leverage AI analytics, social performance tracking, and predictive insights to fuel your digital marketing strategy.",
      icon: <Zap className="h-7 w-7" strokeWidth={1.5} />,
    },
    {
      number: "03",
      title: "CUSTOM",
      subtitle: "Tailored Programs",
      description: "Bespoke digital solutions for complex challenges. We combine design, growth, AI, and analytics into custom programs tailored to your enterprise needs.",
      icon: <Settings className="h-7 w-7" strokeWidth={1.5} />,
    },
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
          className="mb-16 md:mb-20"
        >
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold mb-4">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Services built for
            <br />
            <span className="italic text-gold">measurable impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <div key={service.title} className="bg-charcoal">
              <ServiceCard 
                {...service}
                delay={index * 0.15}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Work Showcase */}
      <WorkShowcase />

      {/* Process section */}
      <ProcessSection />
    </section>
  );
};

export default Services;
