import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const VideoHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fallback background image for mobile or while video loads */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
          isVideoLoaded && !isMobile ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: "url('/photos/freshandhot.jpg')"
        }}
      ></div>

      {/* Video only loads on desktop */}
      {!isMobile && (
        <video
          autoPlay={false}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
        >
          <source src="\videos\welcomingvideo.mp4" type="video/mp4" />
          <source src="\videos\welcomingvideo.mp4" type="video/mp4" />
        </video>
      )}
      
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white animate-slide-up">
          The Dogfather
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Experience culinary excellence with our carefully crafted dishes, 
          made from the finest ingredients and delivered with passion.
        </p>
        <Button 
          onClick={scrollToCategories}
          size="lg" 
          className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-slide-up hover-lift"
          style={{ animationDelay: '0.4s' }}
        >
          Explore Our Menu
        </Button>
      </div>
    </section>
  );
};