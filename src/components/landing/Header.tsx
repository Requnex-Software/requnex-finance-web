import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#download", label: "Download" },
    { href: "#faq", label: "FAQ" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (hash: string) => {
    const id = hash.replace('#', '');
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    navigate('/' + hash);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center overflow-hidden border border-border">
            {/* Logo placeholder - replace src with your logo */}
            <img 
              src="/logo-png.png" 
              alt="Requnex Finance Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-primary font-bold text-xl">R</span>';
              }}
            />
          </div>
          <span className="font-bold text-xl text-foreground">Requnex Finance</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNav(link.href)}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="default" onClick={() => handleNav('#download')}>
            <Download className="w-4 h-4" />
            Download APK
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => {
                  handleNav(link.href);
                  setIsMobileMenuOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
              >
                {link.label}
              </button>
            ))}
            <Button variant="hero" size="lg" className="mt-4" onClick={() => { handleNav('#download'); setIsMobileMenuOpen(false); }}>
              <Download className="w-4 h-4" />
              Download APK
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
