import { Button } from "@/components/ui/button";
import { Download, Smartphone, Apple, QrCode, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const DownloadSection = () => {
  const requirements = [
    "Android 8.0 or higher",
    "~136 MB storage space",
    "Internet connection for exchange rates",
  ];

  return (
    <section id="download" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container relative">
        <ScrollReveal>
          <div className="bg-card rounded-3xl p-8 lg:p-16 shadow-xl border border-border/50 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <ScrollReveal direction="left">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Ready to Take Control?{" "}
                    <span className="gradient-text">Download Now</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Start your journey to financial freedom today. Free, no ads, no hidden fees.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="hero" size="xl" asChild>
                        <a href="https://expo.dev/accounts/requnexsoftware/projects/requnex-finance/builds" target="_blank" rel="noopener noreferrer">
                          <Download className="w-5 h-5" />
                          Download APK
                        </a>
                      </Button>
                    </motion.div>
                    <Button variant="disabled" size="xl" disabled>
                      <Apple className="w-5 h-5" />
                      iOS Coming Q2 2026
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-8 text-center lg:text-left">
                    🎮 Google Play version coming soon! For now, download the APK directly.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-4 h-4" />
                      Version 1.0.0
                    </span>
                    <span>•</span>
                    <span>~136 MB</span>
                  </div>

                  <div className="space-y-2">
                    {requirements.map((req, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start"
                      >
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span>{req}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="flex justify-center lg:justify-end">
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    className="bg-background p-8 rounded-2xl shadow-lg border border-border"
                  >
                    <div className="text-center mb-6">
                      <QrCode className="w-12 h-12 mx-auto text-primary mb-2" />
                      <p className="font-semibold">Scan to Download</p>
                      <p className="text-sm text-muted-foreground">Point your camera at the QR code</p>
                    </div>
                    <div className="w-48 h-48 bg-foreground rounded-xl flex items-center justify-center mx-auto">
                      <svg viewBox="0 0 200 200" className="w-40 h-40">
                        <rect x="0" y="0" width="200" height="200" fill="white" />
                        <g fill="black">
                          <rect x="10" y="10" width="60" height="60" />
                          <rect x="20" y="20" width="40" height="40" fill="white" />
                          <rect x="30" y="30" width="20" height="20" />
                          
                          <rect x="130" y="10" width="60" height="60" />
                          <rect x="140" y="20" width="40" height="40" fill="white" />
                          <rect x="150" y="30" width="20" height="20" />
                          
                          <rect x="10" y="130" width="60" height="60" />
                          <rect x="20" y="140" width="40" height="40" fill="white" />
                          <rect x="30" y="150" width="20" height="20" />
                          
                          <rect x="80" y="10" width="10" height="10" />
                          <rect x="100" y="10" width="10" height="10" />
                          <rect x="80" y="30" width="10" height="10" />
                          <rect x="110" y="30" width="10" height="10" />
                          <rect x="80" y="50" width="10" height="10" />
                          <rect x="90" y="50" width="10" height="10" />
                          <rect x="110" y="50" width="10" height="10" />
                          
                          <rect x="80" y="80" width="40" height="40" />
                          
                          <rect x="10" y="80" width="10" height="10" />
                          <rect x="30" y="80" width="10" height="10" />
                          <rect x="50" y="80" width="10" height="10" />
                          <rect x="10" y="100" width="10" height="10" />
                          <rect x="40" y="100" width="10" height="10" />
                          <rect x="60" y="100" width="10" height="10" />
                          
                          <rect x="130" y="80" width="10" height="10" />
                          <rect x="150" y="80" width="10" height="10" />
                          <rect x="170" y="80" width="10" height="10" />
                          <rect x="140" y="100" width="10" height="10" />
                          <rect x="160" y="100" width="10" height="10" />
                          <rect x="180" y="100" width="10" height="10" />
                          
                          <rect x="80" y="130" width="10" height="10" />
                          <rect x="100" y="130" width="10" height="10" />
                          <rect x="110" y="150" width="10" height="10" />
                          <rect x="80" y="170" width="10" height="10" />
                          <rect x="100" y="170" width="10" height="10" />
                          
                          <rect x="130" y="130" width="10" height="10" />
                          <rect x="150" y="130" width="10" height="10" />
                          <rect x="170" y="130" width="10" height="10" />
                          <rect x="140" y="150" width="10" height="10" />
                          <rect x="160" y="150" width="10" height="10" />
                          <rect x="130" y="170" width="10" height="10" />
                          <rect x="150" y="170" width="10" height="10" />
                          <rect x="180" y="170" width="10" height="10" />
                        </g>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DownloadSection;
