import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-bridgeone.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      <div className="container-narrow relative py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="BridgeOneSA.Com" className="h-12 w-auto" />
              <span className="text-xl font-heading font-bold">
                Bridge<span className="text-accent">One</span>SA.Com
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Bridging global opportunities with local aspirations. Expert business services across Saudi Arabia, UAE, GCC &amp; India.
            </p>
            <div className="mt-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
              ✦ Trusted GCC Business Partner
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/40 transition-all duration-300 hover:bg-accent/20 hover:text-accent hover:scale-110"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-heading font-semibold text-accent text-sm uppercase tracking-widest">Quick Links</h4>
            <nav className="flex flex-col gap-3 text-sm text-white/40">
              {[
                { to: "/about", label: "Who We Are" },
                { to: "/services", label: "Services" },
                { to: "/process", label: "Process" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="group flex items-center gap-2 transition-colors hover:text-accent">
                  <ArrowRight size={12} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-heading font-semibold text-accent text-sm uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/40">
              {["Company Formation", "MISA Registration", "PRO Services", "Bank Account Opening", "Legal Translation", "Digital Business Services"].map((s) => (
                <li key={s} className="transition-colors hover:text-white/60 cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-heading font-semibold text-accent text-sm uppercase tracking-widest">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-white/40">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Building No: 6846, Al Malaz, Riyadh, Saudi Arabia – 12331</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>🇸🇦 +966 57 515 2994</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>🇮🇳 +91 8943 756 296</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>info@bridgeonedot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-narrow py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>© {new Date().getFullYear()} BridgeOneSA.Com — All rights reserved.</span>
          <span>Trusted Business Partner in Saudi Arabia, UAE & India</span>
        </div>
      </div>
    </footer>
  );
};
