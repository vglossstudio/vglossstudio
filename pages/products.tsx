import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Classic Lipan Mirror Art",
    category: "Lipan Art",
    price: "₹3,499",
    description: "Traditional Gujarati mud and mirror work on a premium circular wooden base. Perfect for entryways.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Hand-Painted Terracotta Vase",
    category: "Hand Made Decor Item",
    price: "₹1,899",
    description: "Exquisite hand-painted details on an authentic terracotta clay base. Ideal for dried flowers.",
    image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Abstract Gold Motif Canvas",
    category: "Painting",
    price: "₹5,999",
    description: "Modern abstract painting featuring textured gold leaf accents on premium pure cotton canvas.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Contemporary Lipan Panel",
    category: "Lipan Art",
    price: "₹4,299",
    description: "A modern rectangular take on traditional mud work, designed for minimalist modern apartments.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Artisan Ceramic Bowls Set",
    category: "Hand Made Decor Item",
    price: "₹1,499",
    description: "Set of three aesthetically pleasing ceramic decorative bowls with organic, irregular edges.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Botanical Watercolor Series",
    category: "Painting",
    price: "₹2,799",
    description: "A pair of soothing botanical watercolor paintings, elegantly framed in natural oak wood.",
    image: "https://images.unsplash.com/photo-1580136608079-72029d0de130?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Lipan Art", "Hand Made Decor Item", "Painting"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleWhatsAppOrder = (productName: string) => {
    const text = encodeURIComponent(`Hello V Gloss Studio! I would like to order the "${productName}". Please share details.`);
    window.open(`https://wa.me/919993615755?text=${text}`, "_blank");
  };

  return (
    <div className="bg-ivory min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[4px] text-xs font-medium mb-4 block">Our Collection</span>
          <h1 className="text-5xl font-serif text-ink mb-6">Items We Sell</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-10"></div>
          
          <div className="flex flex-wrap justify-center gap-6 border-b border-gray-200 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-4 px-2 text-sm uppercase tracking-widest font-medium transition-all relative ${
                  activeCategory === cat ? "text-gold" : "text-ink-light hover:text-ink"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCategory" 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-beige border border-line overflow-hidden group flex flex-col h-full"
              >
                {/* Image Handle */}
                <div className="overflow-hidden relative h-72">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-4 left-4 bg-beige/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-ink font-medium">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl text-ink mb-3 group-hover:text-gold transition-colors">{product.title}</h3>
                  <p className="text-gold text-lg font-medium mb-4">{product.price}</p>
                  <p className="text-ink-light font-light text-sm mb-8 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* CTA */}
                  <button 
                    onClick={() => handleWhatsAppOrder(product.title)}
                    className="w-full flex items-center justify-center gap-2 bg-ink text-white py-4 text-sm uppercase tracking-widest hover:bg-gold transition-colors group/btn"
                  >
                    <MessageCircle size={18} className="group-hover/btn:animate-pulse" />
                    Order on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
