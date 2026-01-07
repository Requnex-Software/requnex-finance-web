import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Screenshots from "@/components/landing/Screenshots";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import DownloadSection from "@/components/landing/Download";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Testimonials />
        <DownloadSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
