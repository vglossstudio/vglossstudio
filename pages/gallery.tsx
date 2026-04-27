import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

// Mock Gallery Data
const galleryItems = [
  { id: 1, category: "Lipan Art", src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=80", title: "Mud & Mirror Work" },
  { id: 2, category: "Decorative Items", src: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1000&q=80", title: "Ceramic Base Decor" },
  { id: 3, category: "Home Decoration", src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80", title: "Premium Shelf Setup" },
  { id: 4, category: "Painting", src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1000&q=80", title: "Abstract Canvas" },
  { id: 5, category: "Lipan Art", src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80", title: "Traditional Motifs" },
  { id: 6, category: "Handicraft Items", src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80", title: "Artisan Wood Carving" },
  { id: 7, category: "Home Decoration", src: "https://images.unsplash.com/photo-1580136608079-72029d0de130?auto=format&fit=crop&w=1000&q=80", title: "Aesthetic Corner" },
  { id: 8, category: "Decorative Items", src: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80", title: "Luminouse Vase" },
];

const categories = ["All", "Lipan Art", "Handicraft Items", "Decorative Items", "Home Decoration", "Painting"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredItems = filter === "All" ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-beige min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-ink mb-6">Our Gallery</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-10"></div>
          
          {/* Filters */}
          <div className="flex flex-wrapjustify-center gap-4 max-w-3xl mx-auto justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 border rounded-full text-sm tracking-wide uppercase transition-all duration-300 ${
                  filter === cat 
                  ? "bg-ink border-ink text-white" 
                  : "bg-transparent border-gray-300 text-ink hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry/Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden bg-ivory hover-lift aspect-square"
                onClick={() => setSelectedImg(item.src)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white font-serif text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  <p className="text-gold text-sm tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fullscreen Image Preview */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg} 
              alt="Fullscreen view" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
