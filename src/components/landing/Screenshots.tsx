import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dashboardScreen from "@/assets/screen-dashboard.png";
import analyticsScreen from "@/assets/screen-analytics.png";
import goalsScreen from "@/assets/screen-goals.png";
import transactionScreen from "@/assets/screen-transaction.png";
import settingsScreen from "@/assets/screen-settings.png";

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Beautiful Design,{" "}
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every screen is crafted to make managing your finances a delightful experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel */}
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            {/* Previous button */}
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-card border border-border shadow-md hover:bg-muted transition-colors"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Screenshots container */}
            <div className="relative flex items-center justify-center">
              {screenshots.map((screenshot, index) => {
                const offset = index - activeIndex;
                const isActive = index === activeIndex;
                
                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(${offset * 120}px) scale(${isActive ? 1 : 0.75})`,
                      opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.5,
                      zIndex: isActive ? 10 : 5 - Math.abs(offset),
                    }}
                  >
                    <div className={`bg-foreground rounded-[2rem] p-1.5 shadow-xl ${isActive ? 'shadow-glow' : ''}`}>
                      <div className="bg-background rounded-[1.75rem] overflow-hidden w-[200px] sm:w-[240px] h-[420px] sm:h-[500px]">
                        <img
                          src={screenshot.src}
                          alt={screenshot.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Static center phone for layout */}
              <div className="opacity-0 pointer-events-none">
                <div className="bg-foreground rounded-[2rem] p-1.5">
                  <div className="bg-background rounded-[1.75rem] w-[200px] sm:w-[240px] h-[420px] sm:h-[500px]" />
                </div>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-card border border-border shadow-md hover:bg-muted transition-colors"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption */}
          <div className="text-center mt-10">
            <h3 className="text-xl font-bold mb-2">{screenshots[activeIndex].title}</h3>
            <p className="text-muted-foreground">{screenshots[activeIndex].description}</p>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
