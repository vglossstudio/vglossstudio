import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ivory text-ink py-16 border-t border-line relative z-10 w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-serif font-light text-ink mb-6 inline-block">
            V Gloss Studio.
          </Link>
          <p className="text-ink-light font-light leading-relaxed max-w-sm mb-8 text-sm">
            Premium handcrafted decorative art and home décor items that elevate every space. Crafted with passion, shipped with care.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink-light hover:text-gold hover:border-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink-light hover:text-gold hover:border-gold transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-ink mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/about" className="text-ink/70 hover:text-gold transition-colors text-[10px] uppercase tracking-widest font-medium">About Us</Link></li>
            <li><Link to="/gallery" className="text-ink/70 hover:text-gold transition-colors text-[10px] uppercase tracking-widest font-medium">Gallery</Link></li>
            <li><Link to="/products" className="text-ink/70 hover:text-gold transition-colors text-[10px] uppercase tracking-widest font-medium">Items We Sell</Link></li>
            <li><Link to="/contact" className="text-ink/70 hover:text-gold transition-colors text-[10px] uppercase tracking-widest font-medium">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-ink mb-6">Contact</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-4">
              <MapPin className="text-gold shrink-0 mt-1" size={18} />
              <span className="text-ink-light font-light text-sm">Raipur, Chhattisgarh,<br />India</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-gold shrink-0" size={18} />
              <span className="text-ink-light font-light text-sm">+91 99936 15755</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-line text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-ink/50 text-[10px] uppercase tracking-widest font-medium text-center md:text-left">
          Founder: Vaishali Chauhan &nbsp; | &nbsp; Raipur, Chhattisgarh
        </p>
        <p className="text-ink/50 text-[10px] tracking-widest font-medium uppercase text-center md:text-right">
          Direct Order via WhatsApp: <span className="text-ink font-bold">+91 99936 15755</span>
        </p>
      </div>
    </footer>
  );
}
