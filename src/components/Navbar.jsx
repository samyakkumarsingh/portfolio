import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? dark
              ? "glass shadow-lg"
              : "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm"
            : dark
            ? "bg-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:scale-110 transition-transform"
            >
              S
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    dark
                      ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Dark/Light Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                className={`p-2 rounded-full transition-all ${
                  dark
                    ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-md ${
                  dark ? "text-slate-300 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-200"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              dark ? "bg-slate-900 border-t border-slate-800" : "bg-white border-t border-slate-200"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    dark
                      ? "text-slate-300 hover:text-white hover:bg-slate-800"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
