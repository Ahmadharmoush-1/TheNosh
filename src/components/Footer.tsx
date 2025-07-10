import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">O_bites</h3>
            <p className="text-gray-400 mb-4">
              Experience culinary excellence with our carefully crafted dishes, 
              made from the finest ingredients and delivered with passion.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>123 Culinary Street, Food District</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>+961 76 534 652</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="h-4 w-4 text-amber-400" />
                <span>Daily: 6:00 PM - 11:00 PM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#menu" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Our Menu
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Reservations
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2023 O_bites Restaurant. All rights reserved. | Crafted with passion for exceptional dining.
          </p>
        </div>
      </div>
    </footer>
  );
};
