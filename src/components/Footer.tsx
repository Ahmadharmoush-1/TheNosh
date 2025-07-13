import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { GoogleMap } from "./GoogleMaps";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/thenosh.lb/', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/thenosh', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/thenosh', '_blank');
  };

  return (
    <footer ref={ref} className="bg-primary border-t border-accent py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">The Nosh</h3>
            <p className="text-primary-foreground/80 mb-4">
              Experience culinary excellence with our carefully crafted dishes, 
              made from the finest ingredients and delivered with passion.
            </p>
            <div className="flex space-x-4">
              <Instagram 
               className="h-5 w-5 text-white hover:text-primary-foreground cursor-pointer transition-colors hover:scale-110" 
              onClick={handleInstagramClick}
              />
              <Facebook 
                className="h-5 w-5 text-white hover:text-primary-foreground cursor-pointer transition-colors hover:scale-110" 
                onClick={handleFacebookClick}
              />
              <Twitter 
                className="h-5 w-5 text-white hover:text-primary-foreground cursor-pointer transition-colors hover:scale-110" 
                onClick={handleTwitterClick}
              />
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-[#1E1A4B]" />
                <span>Center ville , street 1, Baïssoûr, Mont-Liban, Lebanon</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-[#1E1A4B]" />
                <span>+961 76 054 688</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Clock className="h-4 w-4 text-[#1E1A4B]" />
                <span>Daily: 2:00 PM - 11:30 PM</span>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Find Us</h4>
            <GoogleMap />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#menu" className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1">
                Our Menu
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1">
                Reservations
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1">
                About Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 The Nosh Restaurant. All rights reserved. | Crafted with passion for exceptional dining.
          </p>
        </div>
      </div>
    </footer>
  );
};
