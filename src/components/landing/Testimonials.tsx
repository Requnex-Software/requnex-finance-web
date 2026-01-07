import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria K.",
      role: "Freelance Designer",
      location: "Warsaw, Poland",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      quote: "Finally an app that handles multiple currencies properly! As a freelancer working with clients worldwide, this is exactly what I needed.",
      rating: 5,
    },
    {
      name: "Oleksandr M.",
      role: "Software Developer",
      location: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The savings goals feature helped me save €2,000 for my vacation. The visual progress tracking kept me motivated every day!",
      rating: 5,
    },
    {
      name: "Anna T.",
      role: "Product Manager",
      location: "Kyiv, Ukraine",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Simple, clean, does exactly what I need. No bloat, no annoying ads. Just pure focus on helping me manage my money.",
      rating: 5,
    },
    {
      name: "Dmytro S.",
      role: "Remote Worker",
      location: "Lisbon, Portugal",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote: "The crypto tracking feature is brilliant! I can see all my assets – traditional and digital – in one place.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Loved by{" "}
            <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our growing community of people taking control of their finances.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-sm hover-lift border border-border/50 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
