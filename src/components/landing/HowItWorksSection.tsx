import { motion } from "framer-motion";
import { Search, CalendarCheck, Coffee } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Choose a service",
    description: "Browse our curated list of services and find exactly what you need for your home or business.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Book a professional",
    description: "Select from verified experts, read reviews, and schedule at a time that works for you.",
  },
  {
    icon: Coffee,
    number: "03",
    title: "Relax and enjoy",
    description: "Sit back while our professionals take care of everything. It's that simple.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 gradient-section">
      <div className="container">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            How CarePe works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting help has never been easier. Three simple steps to a stress-free experience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Icon container */}
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-card shadow-card flex items-center justify-center">
                  <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-foreground/80" strokeWidth={1.5} />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
