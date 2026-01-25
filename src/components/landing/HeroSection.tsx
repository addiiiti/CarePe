import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-20 overflow-hidden">
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-16 lg:py-24">
        {/* Text Content */}
        <motion.div 
          className="flex-1 max-w-xl lg:max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.1] mb-6 text-balance">
            Care for your space, made simple.
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Find trusted professionals for your home and work — effortlessly. From plumbers to tutors, we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Find a Service
            </Button>
            <Button variant="hero-secondary" size="lg">
              Become a Provider
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border/50">
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-foreground">10k+</p>
              <p className="text-sm text-muted-foreground">Professionals</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-foreground">50k+</p>
              <p className="text-sm text-muted-foreground">Happy Homes</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Avg. Rating</p>
            </div>
          </div>
        </motion.div>
        
        {/* Hero Illustration */}
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Floating cards behind illustration */}
            <motion.div 
              className="absolute -top-8 -left-8 bg-card rounded-2xl shadow-card p-4 hidden lg:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-soft-green flex items-center justify-center">
                  <svg className="w-5 h-5 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Verified Pro</p>
                  <p className="text-xs text-muted-foreground">Background checked</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-card p-4 hidden lg:block"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-card" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">+2.5k reviews</p>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Main illustration */}
            <img 
              src={heroIllustration} 
              alt="CarePe service professionals" 
              className="w-full max-w-lg mx-auto lg:max-w-none relative z-10"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
