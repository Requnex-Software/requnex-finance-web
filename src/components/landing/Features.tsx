import { Globe, BarChart3, Target, RefreshCw, Shield, Bell } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "40+ world currencies and 10 cryptocurrencies with live exchange rates from NBU.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Monthly and yearly comparisons with beautiful category breakdown charts.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Target,
      title: "Savings Goals",
      description: "Set custom targets, track progress visually, and get deadline reminders.",
      color: "bg-success/10 text-success",
    },
    {
      icon: RefreshCw,
      title: "Recurring Payments",
      description: "Track subscriptions and get bill reminders before due dates.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "4-digit PIN, biometric authentication, and Firestore data encryption.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Exchange rate alerts, payment reminders, and goal progress updates.",
      color: "bg-success/10 text-success",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/50 relative overflow-hidden">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to{" "}
              <span className="gradient-text">Manage Your Money</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed to give you complete control over your finances, 
              whether you're tracking daily expenses or saving for your dreams.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="group bg-card p-8 rounded-2xl shadow-sm hover-lift border border-border/50 hover:border-primary/20 h-full">
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
