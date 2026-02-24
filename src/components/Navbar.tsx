import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ConsultationDialog } from "./ConsultationDialog";
import logo from "@/assets/logo-bridgeone.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Who We Are" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-lg shadow-black/5 py-2"
            : "bg-white/95 backdrop-blur-sm py-3"
        }`}
      >
        <div className="container-narrow flex items-center justify-between">
          {/* Left: Logo + Company Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="BridgeOne.Com"
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-heading font-bold text-primary">
              Bridge<span className="text-accent">One</span>.Com
            </span>
          </Link>

          {/* Right: Navigation Links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-foreground/70 hover:text-accent"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle - right side */}
          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="container-narrow flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-accent bg-accent/5"
                      : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};
