import { motion } from "motion/react";

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function About() {
  return (
    <div className="bg-ivory min-h-screen pt-10 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[4px] text-xs font-medium mb-4 block">Our Story</span>
          <h1 className="text-5xl font-serif text-ink mb-6">About V Gloss Studio</h1>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </motion.div>

        {/* Story Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="rounded-t-full overflow-hidden border-4 border-white smooth-shadow relative group">
              <img 
                src="/owner.jpg" 
                alt="Vaishali Chauhan - Owner" 
                className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-serif text-ink mb-6">Meet The Creator</h2>
            <p className="text-xl text-ink font-medium mb-2 uppercase tracking-widest">Vaishali Chauhan</p>
            <p className="text-gold text-sm uppercase tracking-widest mb-8">Founder & Lead Artist</p>
            
            <div className="space-y-6 text-ink-light font-light leading-relaxed">
              <p>
                Founded from a deep passion for traditional Indian artistry and modern aesthetics, V Gloss Studio represents a bridge between heritage and contemporary home décor. Based in the vibrant city of Raipur, Chhattisgarh, we pour our heart into every piece.
              </p>
              <p>
                My journey began with a simple love for handcrafted textures and meticulous detailing. What started as a personal artistic endeavor has blossomed into a premium studio dedicated to enhancing your living spaces with pieces that tell a story.
              </p>
              <p>
                We specialize in Lipan Art, premium paintings, and unique handicraft items that carry the soul of the maker. Every mirror placed, every brush stroke, and every molded detail is executed with absolute precision and care.
              </p>
            </div>
            
            <blockquote className="mt-10 border-l-2 border-gold pl-6 py-2">
              <p className="font-serif italic text-xl text-ink">"Our mission is to bring soul into spaces. True luxury isn't machine-made—it's crafted by hands, hearts, and history."</p>
            </blockquote>
          </motion.div>
        </div>

        {/* Why Trust Us / Quality Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-beige border border-line p-12 md:p-20 text-center"
        >
          <h2 className="text-3xl font-serif text-ink mb-12">The Standard of Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-gold text-4xl font-serif font-light mb-4">01</div>
              <h4 className="uppercase tracking-widest text-ink text-sm font-medium mb-3">Authentic Materials</h4>
              <p className="text-ink-light font-light text-sm">We source premium, authentic materials to ensure that each art piece not only looks luxurious but stands the test of time.</p>
            </div>
            <div>
              <div className="text-gold text-4xl font-serif font-light mb-4">02</div>
              <h4 className="uppercase tracking-widest text-ink text-sm font-medium mb-3">Master Craftsmanship</h4>
              <p className="text-ink-light font-light text-sm">Hours of meticulous detailing go into our Lipan art and paintings, bringing traditional techniques to modern standards.</p>
            </div>
            <div>
              <div className="text-gold text-4xl font-serif font-light mb-4">03</div>
              <h4 className="uppercase tracking-widest text-ink text-sm font-medium mb-3">Bespoke Dedication</h4>
              <p className="text-ink-light font-light text-sm">We treat every customer order as a special commission, wrapping and shipping with the utmost care and personalization.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <a 
              href="https://wa.me/919993615755?text=Hello! I want to order a custom piece." 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-ink text-gold px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold hover:text-ink transition-colors"
            >
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
