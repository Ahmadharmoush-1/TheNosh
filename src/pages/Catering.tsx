import { useState } from "react";
import { CateringHero } from "@/components/CateringHero";
import { CateringMenu } from "@/components/CateringMenu";
import { ChefsSection } from "@/components/ChefsSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/context/CartContext";

const Catering = () => {
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
    <CartProvider>
      <div className="min-h-screen bg-white text-black">
        <Header 
          onCartClick={handleCartClick} 
          onBackClick={handleBackToHome} 
        />
        
        <CateringHero />
        <CateringMenu />
        
        
        <Footer />
        <Cart isOpen={showCart} onClose={handleCloseCart} />
      </div>
    </CartProvider>
  );
};

export default Catering;