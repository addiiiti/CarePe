import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Star, HeadphonesIcon } from "lucide-react";

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description: "Every service provider undergoes thorough background checks and skill verification.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Your transactions are protected with bank-level encryption and fraud prevention.",
  },
  {
    icon: Star,
    title: "Real Reviews",
    description: "Authentic feedback from real customers helps you make informed decisions.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support When Needed",
    description: "Our dedicated team is here to help, every step of the way.",
  },
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Trust & Safety
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Your peace of mind is our priority
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe great service starts with trust. That's why we've built CarePe with your safety and satisfaction at the core of everything we do.
            </p>
            
            {/* Quote / Testimonial */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground italic mb-4">
                "CarePe made finding a trustworthy electrician so easy. The whole process was seamless, and I felt safe knowing the professional was fully verified."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Priya Sharma</p>
                  <p className="text-xs text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4 lg:gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-secondary/50 rounded-2xl p-6 border border-border/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="w-10 h-10 rounded-xl bg-card shadow-soft flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-foreground/80" strokeWidth={1.5} />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
