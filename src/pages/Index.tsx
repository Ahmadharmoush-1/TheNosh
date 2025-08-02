import { useState } from "react";
import { VideoHero } from "@/components/VideoHero";
import { Header } from "@/components/Header";
import { CategoryButtons } from "@/components/CategoryButtons";
import { FeaturesSection } from "@/components/FeatureSection";
import { Menu } from "@/components/Menu";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    // Scroll to categories section after state update
    setTimeout(() => {
      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header 
        onCartClick={handleCartClick} 
        onBackClick={selectedCategory ? handleBackToHome : undefined} 
      />
      
      {!selectedCategory && <VideoHero />}
      
      {selectedCategory ? (
        <Menu selectedCategory={selectedCategory} />
      ) : (
        <>
          <div id="categories">
            <CategoryButtons onCategoryClick={handleCategoryClick} />
          </div>
          <FeaturesSection />
        </>
      )}
      
      <Footer />
      <Cart isOpen={showCart} onClose={handleCloseCart} />
    </div>
  );
};

export default Index;