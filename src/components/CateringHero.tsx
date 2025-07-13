import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const CateringHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const scrollToCateringMenu = () => {
    document.getElementById('catering-menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fallback background image while video loads */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1920&q=80')",
        // }}
      ></div>

      {/* Autoplay video on all devices */}
      <video
        autoPlay
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
        <source src="/videos/catering.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 !text-white animate-slide-up">
  ✨ Catering Service
</h1>


        <p
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Perfect for parties, gatherings, corporate events, and special occasions!
          Experience our exceptional catering with per-piece pricing for your convenience.
        </p>
        <Button
          onClick={scrollToCateringMenu}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-slide-up hover-lift"
          style={{ animationDelay: '0.4s' }}
        >
          Explore Catering
        </Button>
      </div>
    </section>
  );
};
