import { motion } from "motion/react";

export default function WhatsAppButton() {
  const whatsappNumber = "919993615755";
  const message = encodeURIComponent("Hello! I'm interested in V Gloss Studio's premium decor items.");
  
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-12 z-50 bg-[#25D366] hover:bg-[#1ebd5a] transition-colors text-white px-5 py-3 rounded-full text-[10px] font-bold tracking-widest flex items-center shadow-lg hover-lift"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      title="Contact us on WhatsApp"
    >
      <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
      WHATSAPP ORDER
    </motion.a>
  );
}
