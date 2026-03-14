import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ConsultationDialog } from "./ConsultationDialog";
import logo from "@/assets/logo-bridgeone.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Who We Are" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact Us" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    if (location.pathname === "/contact") {
      navigate(-1); // go back
    } else {
      navigate("/contact"); // open contact page
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white py-3 shadow-sm">
        <div className="flex items-center justify-between px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="BridgeOne.Com"
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-xl font-bold text-primary">
              Bridge<span className="text-accent">One</span>.Com
            </span>
          </Link>

          {/* Right Buttons */}
          <div className="flex items-center">

            {/* Menu Button */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="ml-3 px-6 py-2 border border-black rounded-full text-black hover:bg-gray-100 transition-colors duration-300"
              >
                {menuOpen ? "Close" : "Menu"}
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white border rounded-xl shadow-lg">

                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      {link.label}
                    </Link>
                  ))}

                </div>
              )}
            </div>

            {/* Get Consultation Button */}
            <button
              onClick={handleConsultationClick}
              className="ml-3 px-6 py-2 border border-black rounded-full text-black hover:bg-gray-100 transition-colors duration-300"
            >
              {location.pathname === "/contact"
                ? "Close"
                : "Get Consultation"}
            </button>

          </div>
        </div>
      </header>
    </>
  );
};