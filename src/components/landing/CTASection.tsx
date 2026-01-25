import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-section">
      <div className="container">
        <motion.div
          className="relative bg-card rounded-3xl lg:rounded-[2rem] p-10 lg:p-16 shadow-elevated overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-6 leading-tight">
              Let CarePe take care of it.
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
              Join thousands of happy homes who trust CarePe for their everyday service needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              No signup required to browse. Book in under 2 minutes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
