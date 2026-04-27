import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Star, ShieldCheck, Truck, Package, HeartHandshake, ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row min-h-[85vh] mt-[-6rem] pt-[6rem]">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 lg:pr-16 flex flex-col justify-center self-stretch py-16 lg:py-0 px-4 md:px-12 relative z-10 bg-beige lg:bg-transparent">
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0px" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block px-4 py-1 border border-gold text-gold text-[10px] uppercase mb-6 w-max"
          >
            Special Offer: Get Upto 20% OFF
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-serif text-ink mb-6 leading-[1.1]"
          >
            Art That <span className="italic font-light">Elevates</span><br/>Every Space
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-ink-light text-lg font-light mb-8 max-w-md leading-relaxed"
          >
            Discover our collection of handcrafted premium décor. Each piece is a unique expression of elegance, designed to transform your home into a masterpiece.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link to="/products" className="bg-ink text-white px-10 py-4 hover:bg-gold transition-all text-xs tracking-widest uppercase text-center">
              Shop Collection
            </Link>
            <Link to="/gallery" className="border border-gray-300 text-ink px-10 py-4 hover:border-ink transition-all text-xs tracking-widest uppercase text-center">
              Explore Gallery
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-8 border-t border-line pt-8"
          >
            <div>
              <div className="text-xl font-serif text-ink">500+</div>
              <div className="text-[10px] uppercase tracking-tighter text-ink/60">Happy Customers</div>
            </div>
            <div>
              <div className="text-xl font-serif text-ink">4.9/5</div>
              <div className="text-[10px] uppercase tracking-tighter text-ink/60">Customer Rating</div>
            </div>
            <div>
              <div className="text-xl font-serif text-gold">Raipur</div>
              <div className="text-[10px] uppercase tracking-tighter text-ink/60">Authentic Origin</div>
            </div>
          </motion.div>
        </div>

        {/* Right Content / Image Area */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-4 self-stretch pb-12 px-4 lg:px-0">
          <div className="flex-1 bg-gold-light relative group overflow-hidden min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
              alt="Premium Interior Decor" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
               <div className="text-white relative z-10 w-full text-left">
                 <span className="block text-[10px] tracking-widest uppercase mb-1">Handcrafted Excellence</span>
                 <span className="text-xl font-serif">V Gloss Studio</span>
               </div>
            </div>
          </div>
          <div className="h-48 grid grid-cols-2 gap-4">
            <div className="bg-ink flex flex-col items-center justify-center text-center p-4 h-full">
              <span className="text-gold text-[10px] uppercase tracking-widest mb-2">Our Mission</span>
              <p className="text-[10px] text-white/70 leading-relaxed italic">"Quality craftsmanship that speaks for itself."</p>
            </div>
            <div className="bg-ivory border border-line flex flex-col items-center justify-center text-center p-4 h-full">
              <div className="text-gold mb-1 text-sm">★★★★★</div>
              <p className="text-[10px] text-ink/60 uppercase tracking-tighter">Verified Studio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-ink text-white py-4 border-b border-gold/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 justify-between items-center text-center">
          <p className="text-sm tracking-widest uppercase font-light">
            <span className="text-gold mr-2 font-medium">Special Offer</span> 
            Get Up To 20% OFF on selected pieces. Limited time only.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-beige">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-ink mb-4">Featured Collection</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
            <p className="text-ink-light font-light max-w-lg mx-auto">Explore our most sought-after handcrafted pieces, curated for discerning tastes.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Product 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative mb-6 rounded-sm">
                <img src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80" alt="Lipan Art" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="font-serif text-2xl text-ink mb-2 text-center group-hover:text-gold transition-colors">Lipan Art Wall Decor</h3>
              <p className="text-gold text-center font-medium">From ₹2,499</p>
            </motion.div>

            {/* Product 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative mb-6 rounded-sm">
                <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80" alt="Handmade Decorative Items" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="font-serif text-2xl text-ink mb-2 text-center group-hover:text-gold transition-colors">Handmade Decor</h3>
              <p className="text-gold text-center font-medium">From ₹1,299</p>
            </motion.div>

            {/* Product 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative mb-6 rounded-sm">
                <img src="https://images.unsplash.com/photo-1580136608079-72029d0de130?auto=format&fit=crop&w=800&q=80" alt="Premium Paintings" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="font-serif text-2xl text-ink mb-2 text-center group-hover:text-gold transition-colors">Premium Paintings</h3>
              <p className="text-gold text-center font-medium">From ₹3,999</p>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <Link to="/products" className="inline-flex items-center text-ink uppercase tracking-widest text-sm font-medium hover:text-gold transition-colors">
              View All Products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-ivory border-y border-line">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-ink mb-4">Why Choose Us</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center text-gold border border-line mb-6">
                <HeartHandshake size={28} />
              </div>
              <h4 className="font-serif text-xl text-ink mb-3">100% Handmade</h4>
              <p className="font-light text-sm text-ink-light">Crafted with precision and immense love by skilled artisans.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center text-gold border border-line mb-6">
                <Star size={28} />
              </div>
              <h4 className="font-serif text-xl text-ink mb-3">Premium Quality</h4>
              <p className="font-light text-sm text-ink-light">Using only the finest materials to ensure unmatched durability.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center text-gold border border-line mb-6">
                <ShieldCheck size={28} />
              </div>
              <h4 className="font-serif text-xl text-ink mb-3">Safe Packaging</h4>
              <p className="font-light text-sm text-ink-light">Secure, premium packaging to ensure your item arrives perfectly.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: 0.4 }} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center text-gold border border-line mb-6">
                <Truck size={28} />
              </div>
              <h4 className="font-serif text-xl text-ink mb-3">Fast Delivery</h4>
              <p className="font-light text-sm text-ink-light">Prompt and reliable shipping across India direct to your door.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats & Testimonials */}
      <section className="py-24 bg-beige relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-serif text-ink mb-6">Trusted by Art Lovers Everywhere</h2>
            <p className="text-ink-light font-light mb-10 text-lg">
              Our passion is delivering perfection. Join hundreds of satisfied customers who have elevated their living spaces with V Gloss Studio.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10 text-center md:text-left">
              <div>
                <h3 className="text-5xl font-serif text-ink mb-2">500+</h3>
                <p className="text-[10px] tracking-widest uppercase text-ink-light font-medium">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-5xl font-serif text-ink mb-2">4.9/5</h3>
                <p className="text-[10px] tracking-widest uppercase text-ink-light font-medium">Average Rating</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-4 text-ink-light border-t border-line pt-8 uppercase tracking-widest text-[10px] font-medium">
              <ShieldCheck className="text-gold" size={16} /> Secure WhatsApp Ordering
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full"
          >
            <div className="bg-ivory p-10 relative border border-line shadow-sm">
              <div className="text-gold mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="font-serif text-xl italic text-ink/80 leading-relaxed mb-8">
                "Absolutely stunning craftsmanship! The Lipan art I ordered transformed my living room. Vaishali was incredibly helpful throughout the process and the packaging was excellent."
              </p>
              <div>
                <p className="font-medium text-ink uppercase tracking-widest text-[10px]">Priya Sharma</p>
                <p className="text-[10px] text-ink/50 uppercase tracking-widest mt-1">Verified Buyer, Mumbai</p>
              </div>
              
              <div className="absolute top-0 right-0 p-8 text-gold opacity-10">
                 <Package size={80} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
