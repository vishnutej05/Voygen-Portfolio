import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Target, 
  Users, 
  Zap, 
  Heart,
  Award,
  TrendingUp,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every decision is backed by data. Every pixel is designed to convert.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We're not vendors. We're invested partners in your long-term success.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We genuinely care about your growth as much as you do.",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "3x", label: "Average ROI" },
    { value: "24/7", label: "Support" },
  ];

  const team = [
    {
      name: "Yash",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Marcus Johnson",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Growth Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container-tight relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-gold" />
            </motion.div>
            
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
              About Voygen
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
              We Don't Just Build Websites.
              <br />
              <span className="italic text-gold">We Build Growth Engines.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
              A strategic digital partner for companies that take their success seriously.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                Born from a <span className="italic text-gold">frustration</span>
              </h2>
              <div className="space-y-5 text-muted-foreground">
                <p className="text-lg">
                  We started Voygen because we were tired of seeing businesses waste money on 
                  digital solutions that looked pretty but didn't perform.
                </p>
                <p>
                  Every agency promised results, but few delivered. We decided to build something 
                  different—a partner that treats your growth like our own.
                </p>
                <p>
                  Today, we work with ambitious businesses who understand that digital isn't 
                  about trends. It's about transformation. It's about results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-8 -left-8 p-6 bg-background border border-gold/20 rounded-xl shadow-xl"
              >
                <p className="font-serif text-lg text-foreground italic">
                  "Strategy without execution is hallucination."
                </p>
                <p className="text-sm text-gold mt-2">— Our Philosophy</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 border-y border-border/30">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="display-number text-4xl md:text-5xl lg:text-6xl text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium">
              Our <span className="italic text-gold">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-background to-gold/5 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              The People Behind Voygen
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
              Meet Our <span className="italic text-gold">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A diverse group of strategists, designers, and technologists united by one goal: your growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <h3 className="font-serif text-xl font-medium">{member.name}</h3>
                <p className="text-sm text-gold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards/Recognition */}
      <section className="py-16 md:py-20 border-y border-border/30">
        <div className="container-tight">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Award className="w-6 h-6 text-gold" />
              <span className="text-sm uppercase tracking-wider">Top Agency 2024</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <TrendingUp className="w-6 h-6 text-gold" />
              <span className="text-sm uppercase tracking-wider">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Sparkles className="w-6 h-6 text-gold" />
              <span className="text-sm uppercase tracking-wider">Innovation Award</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              Ready to <span className="italic text-gold">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Let's discuss how we can help you achieve your growth goals. No pressure, just a conversation.
            </p>
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-background font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-gold-glow transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
