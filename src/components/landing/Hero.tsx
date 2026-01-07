import { Button } from "@/components/ui/button";
import { Download, Apple, Shield, Sparkles, BadgeCheck } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  const trustBadges = [
    { icon: Sparkles, label: "100% Free" },
    { icon: Shield, label: "No Ads" },
    { icon: BadgeCheck, label: "Secure" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Personal Finance Made Simple</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-up delay-100">
              Your Money,{" "}
              <span className="gradient-text">Your Rules</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200">
              Track expenses, save smarter, and manage multiple currencies – all in one beautiful app. Take control of your financial future today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <a href="https://expo.dev/accounts/requnexsoftware/projects/requnex-finance/builds" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download APK
                </a>
              </Button>
              <Button variant="disabled" size="xl" disabled>
                <Apple className="w-5 h-5" />
                Coming to iOS
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 justify-center lg:justify-start animate-fade-up delay-400">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <badge.icon className="w-5 h-5 text-success" />
                  <span className="font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up delay-200">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 gradient-hero rounded-[3rem] blur-3xl opacity-30 scale-90" />
              
              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[3rem] p-2 shadow-2xl">
                <div className="relative bg-background rounded-[2.5rem] overflow-hidden w-[280px] sm:w-[320px] h-[580px] sm:h-[660px]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-2xl z-10" />
                  
                  {/* Screen content */}
                  <img
                    src={heroPhone}
                    alt="Requnex Finance App Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-8 bg-card p-3 rounded-xl shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full gradient-success flex items-center justify-center">
                    <span className="text-success-foreground text-sm">+</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Income</p>
                    <p className="font-bold text-success">+$2,450</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-xl shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">💰</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Saved</p>
                    <p className="font-bold text-primary">€1,820</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
