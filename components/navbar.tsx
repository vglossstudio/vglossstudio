import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Items We Sell", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-[16px] left-[16px] right-[16px] z-40 transition-all duration-300 ${
        isScrolled ? "bg-beige/95 backdrop-blur-md shadow-sm py-4 border-b border-line" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col text-ink hover:text-gold transition-colors">
          <span className="text-2xl font-serif tracking-[0.2em] uppercase font-light">V Gloss Studio</span>
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-60">Handcrafted Excellence</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-[11px] tracking-widest uppercase font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-gold ${
                location.pathname === link.path ? "border-b border-gold pb-1 text-ink" : "text-ink/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/products"
            className="px-8 py-3 bg-ink text-white text-[11px] uppercase tracking-widest hover:bg-gold hover:text-white transition-all ml-4"
          >
            Shop Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-beige shadow-xl flex flex-col p-6 md:hidden border-t border-line"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-4 border-b border-line/50 text-[11px] tracking-widest uppercase font-medium ${
                  location.pathname === link.path ? "text-gold" : "text-ink/80 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 px-6 py-4 text-center bg-ink text-white text-[11px] uppercase tracking-widest hover:bg-gold hover:text-white transition-all"
            >
              Shop Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
