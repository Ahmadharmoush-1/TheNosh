import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="absolute inset-0 bg-[url('/photos/ThatBurgerisFlat.jpg')] bg-cover bg-center opacity-20"></div>

      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
         The Nosh
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience culinary excellencee with our carefully crafted dishes, 
          made from the finest ingredients and delivered with passion.
        </p>
        <Button 
          onClick={scrollToMenu}
          size="lg" 
          className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold px-8 py-3 text-lg"
        >
          Explore Our Menu
        </Button>
      </div>
    </section>
  );
};
