import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "40+", label: "Enterprise Clients" },
    { value: "98%", label: "Client Retention" },
    { value: "12x", label: "Average ROI" },
  ];

  const values = [
    {
      icon: <Target className="h-5 w-5" strokeWidth={1.5} />,
      title: "ROI-Focused",
      description: "Every strategy is designed around measurable outcomes, not vanity metrics."
    },
    {
      icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} />,
      title: "Data-Driven",
      description: "Decisions backed by analytics, not assumptions. Real insights, real growth."
    },
    {
      icon: <Users className="h-5 w-5" strokeWidth={1.5} />,
      title: "Partnership",
      description: "We embed with your team as strategic partners, not just another vendor."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gold/5 to-transparent pointer-events-none" />
      
      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold mb-4">
              About Voygen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 leading-tight">
              We Build Brands That <span className="italic text-gold">Outperform</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Voygen is a digital marketing agency for companies serious about growth. 
              We combine strategic thinking with world-class execution to create digital 
              experiences that convert, engage, and scale.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Founded on the belief that great marketing is measurable marketing, 
              we've helped companies across industries transform their digital presence 
              and achieve sustainable growth. No fluff. No vanity metrics. Just results.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center text-gold">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-8 md:p-10 bg-background text-center"
                >
                  <div className="font-serif text-4xl md:text-5xl font-medium text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-[0.1em] uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
