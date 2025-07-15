import { ShoppingCart, Instagram, ArrowLeft, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  onCartClick: () => void;
  onBackClick?: () => void;
}

export const Header = ({ onCartClick, onBackClick }: HeaderProps) => {
  const { itemCount } = useCart();

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/thenosh.lb/", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96176054688?text=Hello!%20I%20have%20a%20question%20about%20your%20menu.", "_blank");
  };

  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.1800168789685!2d35.56707000650243!3d33.762941322606316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f23e64f331a57%3A0x6f293508ece6c734!2sAbajour%20antique%20shop!5e1!3m2!1sen!2slb!4v1752439806725!5m2!1sen!2slb", "_blank"); // replace with your exact location link
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {onBackClick && (
            <Button
              onClick={onBackClick}
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}

          <div className="flex items-center space-x-2">
            <img
              src="/photos/logo.png"
              alt="The Nosh Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <h1 className="text-sm font-bold italic text-primary">
              Eat real, be real!
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Instagram */}
          <Instagram
            className="h-5 w-5 text-[#1E1A4B] hover:text-accent cursor-pointer transition-transform hover:scale-110"
            onClick={handleInstagramClick}
          />

          {/* WhatsApp */}
          <MessageCircle
            className="h-5 w-5 text-green-600 hover:text-green-500 cursor-pointer transition-transform hover:scale-110"
            onClick={handleWhatsAppClick}
          />

          {/* Location */}
          <MapPin
            className="h-5 w-5 text-red-600 hover:text-red-500 cursor-pointer transition-transform hover:scale-110"
            onClick={handleLocationClick}
          />

          {/* Cart */}
          <Button
            onClick={onCartClick}
            variant="outline"
            size="sm"
            className="relative border-accent text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
