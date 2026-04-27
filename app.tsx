/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative bg-beige">
        {/* Luxury Border & Grid Accents - Global */}
        <div className="fixed inset-0 border-[16px] border-ivory pointer-events-none z-50"></div>
        <div className="fixed top-0 right-[33%] w-px h-full bg-line opacity-50 pointer-events-none z-0 hidden lg:block"></div>

        <Navbar />
        <main className="flex-grow pt-24 relative z-10 px-4 md:px-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
