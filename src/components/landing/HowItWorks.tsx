import { Download, Settings, TrendingUp, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Download & Install",
      description: "Get the APK from our website and install it on your Android device. Create your secure account in seconds.",
    },
    {
      number: "02",
      icon: Settings,
      title: "Set Up Currencies",
      description: "Choose your primary currency from 40+ options. Add any additional currencies you use regularly.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Start Tracking",
      description: "Add your income and expenses, set savings goals, and watch your financial picture become crystal clear.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/50 relative overflow-hidden">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get Started in{" "}
              <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From download to financial clarity in just a few minutes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-accent to-success" />

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction="up">
              <div className="relative">
                <div className="bg-card rounded-2xl p-8 text-center hover-lift border border-border/50 relative z-10 h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground font-bold px-4 py-1 rounded-full text-sm shadow-glow">
                    Step {step.number}
                  </div>

                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mt-4 mb-6">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow between steps (mobile only) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
