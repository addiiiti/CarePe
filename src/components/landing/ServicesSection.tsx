import { motion } from "framer-motion";
import { Droplets, Zap, Sparkles, ChefHat, GraduationCap, Hammer } from "lucide-react";

const services = [
  {
    icon: Droplets,
    name: "Plumbing",
    description: "Leaks, repairs, and installations",
  },
  {
    icon: Zap,
    name: "Electrical",
    description: "Wiring, fixtures, and safety",
  },
  {
    icon: Sparkles,
    name: "Cleaning",
    description: "Deep clean and regular upkeep",
  },
  {
    icon: ChefHat,
    name: "Cooking",
    description: "Personal chefs and meal prep",
  },
  {
    icon: GraduationCap,
    name: "Tutoring",
    description: "Expert guidance for all ages",
  },
  {
    icon: Hammer,
    name: "Carpentry",
    description: "Custom builds and repairs",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Services you can trust
          </h2>
          <p className="text-lg text-muted-foreground">
            From everyday tasks to specialized skills, find the right professional for any job.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              className="group relative bg-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer border border-border/30 hover:border-border/60"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-foreground/80" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-2">
                {service.name}
              </h3>
              
              <p className="text-sm lg:text-base text-muted-foreground">
                {service.description}
              </p>
              
              {/* Hover arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
