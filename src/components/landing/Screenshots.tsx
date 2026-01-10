import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import dashboardScreen from "@/assets/dashboard.jpg";
import analyticsScreen from "@/assets/analytic.jpg";
import goalsScreen from "@/assets/goals.jpg";
import transactionScreen from "@/assets/add.jpg";
import settingsScreen from "@/assets/settings.jpg";

const Screenshots = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = [
    {
      src: dashboardScreen,
      title: "Dashboard",
      description: "See your complete financial overview at a glance",
    },
    {
      src: transactionScreen,
      title: "Add Transaction",
      description: "Quick and easy income/expense tracking",
    },
    {
      src: goalsScreen,
      title: "Savings Goals",
      description: "Track progress toward your financial dreams",
    },
    {
      src: analyticsScreen,
      title: "Analytics",
      description: "Understand your spending patterns",
    },
    {
      src: settingsScreen,
      title: "Settings",
      description: "Customize your experience",
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getSlideStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + screenshots.length) % screenshots.length);
    
    let offset = normalizedDiff;
    if (normalizedDiff > screenshots.length / 2) {
      offset = normalizedDiff - screenshots.length;
    }
    
    const isActive = index === activeIndex;
    const isVisible = Math.abs(offset) <= 1;
    
    return {
      transform: `translateX(${offset * 140}px) scale(${isActive ? 1 : 0.8})`,
      opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
      zIndex: isActive ? 10 : 5 - Math.abs(offset),
      pointerEvents: isActive ? 'auto' as const : 'none' as const,
    };
  };

  return (
    <section className="py-20 lg:py-32 overflow-hidden relative">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Beautiful Design,{" "}
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every screen is crafted to make managing your finances a delightful experience.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 lg:gap-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="p-3 rounded-full bg-card border border-border shadow-md hover:bg-muted transition-colors z-20"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="relative flex items-center justify-center h-[450px] sm:h-[530px] w-[280px] sm:w-[320px]">
                {screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    animate={getSlideStyle(index)}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className={`bg-foreground rounded-[2rem] p-1.5 shadow-xl ${index === activeIndex ? 'shadow-glow' : ''}`}>
                      <div className="bg-background rounded-[1.75rem] overflow-hidden w-[200px] sm:w-[240px] h-[420px] sm:h-[500px]">
                        <img
                          src={screenshot.src}
                          alt={screenshot.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="p-3 rounded-full bg-card border border-border shadow-md hover:bg-muted transition-colors z-20"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            <motion.div
              className="text-center mt-10"
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">{screenshots[activeIndex].title}</h3>
              <p className="text-muted-foreground">{screenshots[activeIndex].description}</p>
            </motion.div>

            <div className="flex justify-center gap-2 mt-6">
              {screenshots.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Screenshots;
