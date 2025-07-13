import { ShoppingCart, Menu as MenuIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

// Make sure the logo is imported or served correctly
import logo from "@/assets/logo.png"; // adjust path if needed

interface HeaderProps {
  onCartClick: () => void;
  onBackClick?: () => void;
}

export const Header = ({ onCartClick, onBackClick }: HeaderProps) => {
  const { itemCount } = useCart();

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
            <MenuIcon className="h-6 w-6 text-primary" />
            <img
              src="\photos\logo.png"
              alt="The Nosh Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <h1 className="text-sm font-bold text-primary">Eat real, be real!
</h1>
          </div>
        </div>

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
    </header>
  );
};
