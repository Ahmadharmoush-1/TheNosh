import { Button } from "@/components/ui/button";

export const VideoHero = () => {
  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="\videos\dogfathering.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/2620043/2620043-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      
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