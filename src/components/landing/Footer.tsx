import { Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Download", href: "#download" },
      { label: "FAQ", href: "#faq" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    social: [
      { icon: Mail, href: "mailto:hello@requnex.com", label: "Email" },
      { icon: Github, href: "https://github.com/requnex", label: "GitHub" },
      { icon: Twitter, href: "https://twitter.com/requnex", label: "Twitter" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center overflow-hidden border border-background/20">
                {/* Logo placeholder - replace src with your logo */}
                <img 
                  src="/logo.png" 
                  alt="Requnex Finance Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-background font-bold text-xl">R</span>';
                  }}
                />
              </div>
              <span className="font-bold text-xl">Requnex Finance</span>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              Your personal finance companion. Track expenses, save smarter, and achieve your financial goals.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {footerLinks.social.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-background/70 mb-4">
              Get notified when iOS version is ready and receive updates about new features.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg gradient-hero text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© {currentYear} Requnex Software. All rights reserved.</p>
          <p>Made with ❤️ for people who want better finances</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
