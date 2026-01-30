import { motion } from "framer-motion";

const Trust = () => {
  const clients = [
    { name: "Meridian Group", initials: "MG" },
    { name: "Apex Ventures", initials: "AV" },
    { name: "Sterling Partners", initials: "SP" },
    { name: "Horizon Capital", initials: "HC" },
    { name: "Zenith Corp", initials: "ZC" },
    { name: "Atlas Holdings", initials: "AH" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Trusted Partners
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium">
            Trusted by Leaders Across Industries
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/50 border border-border flex items-center justify-center group-hover:border-gold/30 group-hover:bg-muted transition-all duration-300">
                <span className="text-lg md:text-xl font-serif text-muted-foreground group-hover:text-gold transition-colors duration-300">
                  {client.initials}
                </span>
              </div>
              <span className="text-xs text-muted-foreground tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    </section>
  );
};

export default Trust;