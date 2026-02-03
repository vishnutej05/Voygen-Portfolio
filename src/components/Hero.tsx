import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.35) saturate(1.2)' }}
        >
          {/* Local background video */}
          <source 
            src="/bg-1.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Gold gradient overlay to match theme */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, hsl(43 74% 49% / 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, hsl(43 74% 49% / 0.05) 0%, transparent 50%),
              linear-gradient(to bottom, hsl(0 0% 8% / 0.6) 0%, hsl(0 0% 8% / 0.75) 50%, hsl(0 0% 10%) 100%)
            `
          }}
        />
      </div>

      {/* Animated gold particles overlay */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content - perfectly centered with slight offset down */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="text-center max-w-5xl mx-auto mt-8 md:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] tracking-tight mb-6 md:mb-8 text-white"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
          >
            Where Vision Meets
            <br />
            <span 
              className="italic text-gold" 
              style={{ textShadow: '0 0 40px hsl(43 74% 49% / 0.4)' }}
            >
              Measurable Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed mb-8 md:mb-12 px-2"
          >
            We partner with ambitious brands to design, build, and scale digital 
            experiences that drive real business outcomes. Clarity. Scale. Impact.
          </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {/* Primary CTA with slide-over effect */}
          {/* <a 
            href="#contact"
            className="group relative overflow-hidden border border-gold text-gold font-medium px-8 py-4 text-sm tracking-wider uppercase transition-all duration-500 rounded-sm"
          >
            <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-background transition-colors duration-300">
              Get Started
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a> */}
          
          {/* Secondary CTA with slide-over effect */}
          <button 
            onClick={scrollToServices}
            className="group relative overflow-hidden border border-muted-foreground/30 text-muted-foreground font-medium px-8 py-4 text-sm tracking-wider uppercase transition-all duration-500 rounded-sm hover:border-foreground"
          >
            <span className="absolute inset-0 bg-foreground/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-foreground transition-colors duration-300">
              Explore Services
            </span>
          </button>
        </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
          onClick={scrollToServices}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
