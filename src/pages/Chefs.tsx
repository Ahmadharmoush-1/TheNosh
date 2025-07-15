import { useState } from "react";
import { ChefsSection } from "@/components/ChefsSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";

const Chefs = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header 
        onCartClick={handleCartClick} 
        onBackClick={handleBackToHome} 
      />
      
      <div className="pt-20">
        <div className="text-center py-16 bg-muted/30">
          <h2 className="text-3xl md:text-8xl font-bold mb-6 text-primary animate-fade-in">
            👨‍🍳 The Real Chefs By TheNosh
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Book your favorite chef for a private catering experience or one-on-one cooking session.
            Our chefs aren't just cooks – they're artists ready to make your event unforgettable.
          </p>
          <h2 className="text-3xl md:text-8xl font-bold mb-6 text-primary animate-fade-in">
            👨 Meet The Chefs
          </h2>
        </div>
        <ChefsSection />
      </div>
      
      <Footer />
      <Cart isOpen={showCart} onClose={handleCloseCart} />
    </div>
  );
};

export default Chefs;
