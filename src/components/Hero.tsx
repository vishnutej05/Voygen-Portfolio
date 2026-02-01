import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroEcommerce from "@/assets/hero-ecommerce.jpg";
import heroSocial from "@/assets/hero-social.jpg";
import heroAi from "@/assets/hero-ai.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal" />

      {/* Floating work showcase cards - left side */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -8 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-[3%] top-[18%] w-52 md:w-64 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-xl" />
          <img 
            src={heroEcommerce} 
            alt="E-commerce Dashboard" 
            className="rounded-lg border border-border shadow-2xl"
          />
          <div className="absolute -bottom-3 -right-3 bg-card border border-gold/30 rounded-lg px-3 py-1.5 text-xs font-medium text-gold">
            E-Commerce
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -80, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute left-[6%] bottom-[18%] w-44 md:w-56 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent rounded-lg blur-xl" />
          <img 
            src={heroAi} 
            alt="AI Content Generation" 
            className="rounded-lg border border-border shadow-2xl"
          />
          <div className="absolute -bottom-3 -left-3 bg-card border border-gold/30 rounded-lg px-3 py-1.5 text-xs font-medium text-gold">
            AI Content
          </div>
        </motion.div>
      </motion.div>

      {/* Floating work showcase cards - right side */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute right-[3%] top-[22%] w-48 md:w-60 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-xl" />
          <img 
            src={heroSocial} 
            alt="Social Media Management" 
            className="rounded-lg border border-border shadow-2xl"
          />
          <div className="absolute -top-3 -right-3 bg-card border border-gold/30 rounded-lg px-3 py-1.5 text-xs font-medium text-gold">
            Social Media
          </div>
        </motion.div>
      </motion.div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 mb-8 text-xs tracking-[0.2em] uppercase text-gold border border-gold/20 rounded-full backdrop-blur-sm bg-gold/5">
            Strategic Digital Growth Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] tracking-tight mb-8 text-white"
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
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed mb-12"
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
          <a 
            href="#contact"
            className="group relative overflow-hidden border border-gold text-gold font-medium px-8 py-4 text-sm tracking-wider uppercase transition-all duration-500 rounded-sm"
          >
            <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-background transition-colors duration-300">
              Get Started
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
          
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

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "8+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-3xl md:text-4xl font-medium text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
          onClick={scrollToServices}
        >
          {/* <span className="text-xs uppercase tracking-[0.2em]">Scroll</span> */}
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
