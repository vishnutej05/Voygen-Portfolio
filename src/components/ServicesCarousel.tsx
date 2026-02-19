import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Globe, 
  TrendingUp, 
  Users, 
  Cpu,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const servicePackages = [
  {
    id: "brand-foundation",
    icon: Palette,
    title: "Brand Foundation",
    subtitle: "Identity & Strategy",
    description: "Complete brand identity that tells your story, connects with your audience, and positions you as a market leader.",
    features: ["Logo Design", "Brand Guidelines", "Typography System", "Color Palette"],
  },
  {
    id: "digital-presence",
    icon: Globe,
    title: "Web Services",
    subtitle: "Build & Scale",
    description: "Professional websites that build credibility, capture leads, and convert visitors into customers — starting from ₹2999.",
    features: ["Custom Website", "UI/UX Design", "SEO Services", "End-to-End Support"],
  },
  {
    id: "growth-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    subtitle: "Reach & Grow",
    description: "Be noticed, remembered, and trusted. We use AI-powered tools to make marketing faster, more affordable, and more effective.",
    features: ["Social Media", "Paid Ads", "Lead Generation", "Performance Tracking"],
  },
  {
    id: "social-mastery",
    icon: Users,
    title: "Social Mastery",
    subtitle: "Engage & Influence",
    description: "Build a powerful social presence that amplifies your brand voice and creates meaningful connections.",
    features: ["Content Strategy", "Community Building", "Influencer Outreach", "Paid Social"],
  },
  {
    id: "ai-powered-growth",
    icon: Cpu,
    title: "AI-Powered Growth",
    subtitle: "Automate & Scale",
    description: "Cutting-edge AI solutions that supercharge your business growth and streamline operations.",
    features: ["AI Chatbots", "Process Automation", "Predictive Analytics", "Smart Insights"],
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play with useCallback for optimization
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % servicePackages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Memoized card positions for performance
  const getCardStyle = useCallback((index: number) => {
    const diff = index - currentIndex;
    const len = servicePackages.length;
    const normalizedDiff = ((diff % len) + len) % len;
    const adjustedDiff = normalizedDiff > len / 2 ? normalizedDiff - len : normalizedDiff;

    // Responsive offsets
    const sideOffset = isMobile ? 200 : 380;

    if (adjustedDiff === 0) {
      return { x: 0, scale: 1, opacity: 1, zIndex: 10 };
    } else if (Math.abs(adjustedDiff) === 1 || Math.abs(adjustedDiff) === len - 1) {
      const isRight = adjustedDiff === 1 || adjustedDiff === -(len - 1);
      return {
        x: isRight ? sideOffset : -sideOffset,
        scale: isMobile ? 0.75 : 0.85,
        opacity: isMobile ? 0.3 : 0.4,
        zIndex: 5,
      };
    }
    return { x: adjustedDiff > 0 ? 600 : -600, scale: 0.7, opacity: 0, zIndex: 0 };
  }, [currentIndex, isMobile]);

  // Memoized spring config
  const springConfig = useMemo(() => ({
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
    mass: 0.8,
  }), []);

  return (
    <section id="services-carousel" className="py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Header */}
      <div className="container-tight mb-8 md:mb-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-3">
            What We <span className="italic text-gold">Offer</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-sm">
            Comprehensive digital solutions to elevate your brand.
          </p>
        </motion.div>
      </div>

      {/* Carousel - GPU accelerated */}
      <div 
        className="relative h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px]"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {servicePackages.map((service, index) => {
            const style = getCardStyle(index);
            const Icon = service.icon;
            const isActive = index === currentIndex;
            
            return (
              <motion.div
                key={service.id}
                animate={style}
                transition={springConfig}
                className="absolute w-[300px] sm:w-[360px] md:w-[480px] lg:w-[560px] cursor-pointer will-change-transform"
                onClick={() => setCurrentIndex(index)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link 
                  to={`/services/${service.id}`}
                  onClick={(e) => !isActive && e.preventDefault()}
                  className="block"
                >
                  <div className="relative p-6 sm:p-7 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border border-gold/20 bg-gradient-to-br from-background via-background to-gold/5 shadow-xl hover:border-gold/40 transition-colors duration-300">
                    {/* Service number */}
                    <div className="absolute top-3 right-4 md:top-4 md:right-5 text-4xl md:text-5xl font-serif text-gold/10 font-medium">
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-3 md:mb-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                    </div>

                    {/* Content */}
                    <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1 block">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {service.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="text-[9px] md:text-[10px] px-2 py-0.5 md:py-1 rounded-full bg-gold/5 border border-gold/10 text-foreground/60"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-gold text-xs md:text-sm font-medium">
                      Explore
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-5 right-5 md:left-7 md:right-7 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* View All */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-6 md:mt-8"
      >
        <Link 
          to="/services"
          className="group inline-flex items-center gap-2 text-gold text-xs md:text-sm font-medium tracking-wider uppercase hover:gap-3 transition-all duration-300"
        >
          <span className="h-px w-6 bg-gold/50 group-hover:w-10 transition-all duration-300" />
          View All Services
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </Link>
      </motion.div>
    </section>
  );
};

export { servicePackages };
export default ServicesCarousel;
