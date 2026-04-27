import { motion } from "motion/react";
import { Phone, MapPin, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "919993615755";

  return (
    <div className="bg-beige min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[4px] text-xs font-medium mb-4 block">Get In Touch</span>
          <h1 className="text-5xl font-serif text-ink mb-6">Contact Us</h1>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 bg-ivory border border-line overflow-hidden">
          
          {/* Info Section (Dark Side) */}
          <div className="lg:w-2/5 bg-ink text-white p-12 md:p-16 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif font-light mb-2">V Gloss Studio</h2>
              <p className="text-gold uppercase tracking-widest text-xs mb-10">By Vaishali Chauhan</p>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="uppercase tracking-widest text-sm font-medium mb-1">Studio Address</h4>
                    <p className="font-light text-gray-300 text-sm leading-relaxed">
                      Raipur, Chhattisgarh<br />
                      India
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <Phone className="text-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="uppercase tracking-widest text-sm font-medium mb-1">Direct Contact</h4>
                    <p className="font-light text-gray-300 text-sm">
                      +91 99936 15755
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <Mail className="text-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="uppercase tracking-widest text-sm font-medium mb-1">Email Inquiry</h4>
                    <p className="font-light text-gray-300 text-sm">
                      hello@vglossstudio.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-16">
              <h4 className="uppercase tracking-widest text-sm font-medium mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-ink hover:border-gold transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-ink hover:border-gold transition-colors">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Form & Map Section (Light Side) */}
          <div className="lg:w-3/5 p-12 md:p-16 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-serif text-ink mb-8">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-ink-light font-medium">Your Name</label>
                    <input type="text" className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gold transition-colors bg-transparent text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-ink-light font-medium">Phone Number</label>
                    <input type="tel" className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gold transition-colors bg-transparent text-sm" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <label className="text-xs uppercase tracking-widest text-ink-light font-medium">Your Message</label>
                  <textarea rows={4} className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gold transition-colors bg-transparent text-sm resize-none" placeholder="I'm interested in customizing a piece..."></textarea>
                </div>
                
                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <button className="bg-ink text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold hover:text-ink transition-colors flex-grow text-center">
                    Send Inquiry
                  </button>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Hello! I want to inquire about V Gloss Studio items.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366] text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} /> WhatsApp Us
                  </a>
                </div>
              </form>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-16 bg-gray-100 h-48 rounded-lg overflow-hidden relative border border-gray-200 flex items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Raipur,Chhattisgarh&zoom=12&size=800x400&sensor=false')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="text-ink mb-2" size={32} />
                <p className="text-ink font-medium tracking-wide uppercase text-sm group-hover:text-gold transition-colors">Located in Raipur, CG</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
