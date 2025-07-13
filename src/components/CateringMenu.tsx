import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface CateringItem {
  id: string;
  name: string;
  description: string;
  pricePerPiece: number;
  image: string;
  category: string;
  minOrder?: number;
}

const cateringItems: CateringItem[] = [
  {
    id: "c1",
    name: "Gourmet Sandwich Platter",
    description: "Assorted premium sandwiches perfect for business meetings",
    pricePerPiece: 12,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=500&q=80",
    category: "platters",
    minOrder: 10
  },
  {
    id: "c2",
    name: "Mini Burger Sliders",
    description: "Bite-sized burgers with premium toppings",
    pricePerPiece: 8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
    category: "appetizers",
    minOrder: 20
  },
  {
    id: "c3",
    name: "Artisan Pizza Slices",
    description: "Freshly baked pizza slices with gourmet toppings",
    pricePerPiece: 6,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=500&q=80",
    category: "mains",
    minOrder: 15
  },
  {
    id: "c4",
    name: "Gourmet Salad Bowls",
    description: "Fresh salad bowls with premium ingredients",
    pricePerPiece: 10,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=500&q=80",
    category: "healthy",
    minOrder: 10
  },
  {
    id: "c5",
    name: "Stuffed Mushroom Caps",
    description: "Elegant appetizers filled with herbs and cheese",
    pricePerPiece: 5,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=500&q=80",
    category: "appetizers",
    minOrder: 25
  },
  {
    id: "c6",
    name: "Chocolate Dessert Cups",
    description: "Individual chocolate desserts for sweet endings",
    pricePerPiece: 7,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
    category: "desserts",
    minOrder: 12
  }
];

export const CateringMenu = () => {
  const { addCateringItem } = useCart();
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (itemId: string, change: number) => {
    const item = cateringItems.find(item => item.id === itemId);
    const currentQty = quantities[itemId] || item?.minOrder || 1;
    const newQty = Math.max((item?.minOrder || 1), currentQty + change);
    
    setQuantities(prev => ({
      ...prev,
      [itemId]: newQty
    }));
  };

  const handleAddToCart = (item: CateringItem) => {
    const quantity = quantities[item.id] || item.minOrder || 1;
    addCateringItem({
      id: item.id,
      name: item.name,
      pricePerPiece: item.pricePerPiece,
      image: item.image,
      quantity,
      totalPrice: item.pricePerPiece * quantity
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity} pieces of ${item.name} added to your cart.`,
    });
  };

  return (
    <section id="catering-menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Catering Menu
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium catering items priced per piece for your events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cateringItems.map((item) => {
            const quantity = quantities[item.id] || item.minOrder || 1;
            const totalPrice = item.pricePerPiece * quantity;
            
            return (
              <Card key={item.id} className="bg-card border-2 border-secondary hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">{item.name}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">{item.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-card-foreground">
                        ${item.pricePerPiece}/piece
                      </span>
                      {item.minOrder && (
                        <span className="text-xs text-muted-foreground">
                          Min: {item.minOrder} pieces
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">Quantity:</span>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="h-8 w-8 p-0 border-secondary"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-lg font-semibold text-card-foreground min-w-[3rem] text-center">
                          {quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="h-8 w-8 p-0 border-secondary"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">
                        Total: ${totalPrice}
                      </span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary border border-secondary transition-colors duration-200"
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};