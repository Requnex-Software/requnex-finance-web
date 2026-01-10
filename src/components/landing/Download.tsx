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
  <a
    href="/requnex-finance-v1.0.0.apk"
    download
    target="_blank"
    rel="noopener noreferrer"
  >
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
                    {/*<div className="text-center mb-6">
                      <QrCode className="w-12 h-12 mx-auto text-primary mb-2" />
                      <p className="font-semibold">Scan to Download</p>
                      <p className="text-sm text-muted-foreground">Point your camera at the QR code</p>
                    </div>*/}
                    <div className="text-center mb-6">
  <img
    src="/qr.png" // <- твій файл у public папці
    alt="QR Code"
    className="w-48 h-full mx-auto rounded-xl"
  />
  <p className="font-semibold mt-2">Scan to Download</p>
  <p className="text-sm text-muted-foreground">Point your camera at the QR code</p>
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
