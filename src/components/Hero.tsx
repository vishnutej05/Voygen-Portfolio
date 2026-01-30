import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating work showcase cards - left side */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -12 }}
        animate={{ opacity: 1, x: 0, rotate: -12 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-[5%] top-[15%] w-48 md:w-64 lg:w-72 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-xl" />
          <img 
            src={work1} 
            alt="Premium website design" 
            className="rounded-lg border border-border shadow-2xl"
          />
          <div className="absolute -bottom-3 -right-3 bg-card border border-gold/30 rounded-lg px-3 py-1.5 text-xs font-medium text-gold">
            E-Commerce
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -80, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute left-[8%] bottom-[20%] w-40 md:w-52 lg:w-60 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent rounded-lg blur-xl" />
          <img 
            src={work3} 
            alt="Brand identity design" 
            className="rounded-lg border border-border shadow-2xl"
          />
          <div className="absolute -bottom-3 -left-3 bg-card border border-gold/30 rounded-lg px-3 py-1.5 text-xs font-medium text-gold">
            Branding
          </div>
        </motion.div>
      </motion.div>

      {/* Floating work showcase cards - right side */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 8 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute right-[5%] top-[20%] w-44 md:w-56 lg:w-64 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-xl" />
          <img 
            src={work2} 
            alt="Mobile app design" 
            className="rounded-lg border border-border shadow-2xl"
          />
          <div className="absolute -top-3 -right-3 bg-card border border-gold/30 rounded-lg px-3 py-1.5 text-xs font-medium text-gold">
            Fintech App
          </div>
        </motion.div>
      </motion.div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 mb-8 text-sm font-medium tracking-widest uppercase text-gold border border-gold/20 rounded-full backdrop-blur-sm bg-gold/5">
            Strategic Digital Growth Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] tracking-tight mb-8"
        >
          Where Vision Meets
          <br />
          <span className="text-gradient-gold">Measurable Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
        >
          We partner with ambitious brands to design, build, and scale digital 
          experiences that drive real business outcomes. Clarity. Scale. Impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base glow-gold transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToServices}
            className="border-border hover:border-gold/40 hover:bg-transparent text-foreground font-medium px-8 py-6 text-base transition-all duration-300"
          >
            Explore Services
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
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
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
          onClick={scrollToServices}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
