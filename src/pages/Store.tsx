import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  // Burgers
  {
    id: "b1",
    name: "Classic Beef Burger",
    description: "Juicy beef patty with lettuce, tomato, onion, and special sauce",
    price: 18,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
    category: "Burgers",
    popular: true
  },
  {
    id: "b2",
    name: "Chicken Deluxe Burger",
    description: "Grilled chicken breast with avocado, bacon, and ranch",
    price: 16,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80",
    category: "Burgers"
  },
  {
    id: "b3",
    name: "Mushroom Swiss Burger",
    description: "Beef patty topped with sautéed mushrooms and Swiss cheese",
    price: 19,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=500&q=80",
    category: "Burgers"
  },

  // Pizza
  {
    id: "p1",
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, and basil on thin crust",
    price: 22,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=500&q=80",
    category: "Pizza",
    popular: true
  },
  {
    id: "p2",
    name: "Pepperoni Supreme",
    description: "Classic pepperoni with extra cheese and Italian herbs",
    price: 25,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
    category: "Pizza"
  },
  {
    id: "p3",
    name: "Quattro Stagioni",
    description: "Four seasons pizza with mushrooms, artichokes, ham, and olives",
    price: 28,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=500&q=80",
    category: "Pizza"
  },

  // Fries
  {
    id: "f1",
    name: "Classic French Fries",
    description: "Crispy golden fries seasoned with sea salt",
    price: 8,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80",
    category: "Fries"
  },
  {
    id: "f2",
    name: "Truffle Parmesan Fries",
    description: "Hand-cut fries with truffle oil and fresh parmesan",
    price: 14,
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=500&q=80",
    category: "Fries",
    popular: true
  },
  {
    id: "f3",
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with cinnamon sugar",
    price: 10,
    image: "https://images.unsplash.com/photo-1553787444-0d12624df50f?auto=format&fit=crop&w=500&q=80",
    category: "Fries"
  },

  // Drinks
  {
    id: "d1",
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh mint",
    price: 6,
    image: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=500&q=80",
    category: "Drinks"
  },
  {
    id: "d2",
    name: "Craft Cola",
    description: "Premium craft cola with natural ingredients",
    price: 7,
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=500&q=80",
    category: "Drinks"
  },
  {
    id: "d3",
    name: "Iced Coffee",
    description: "Cold brew coffee with vanilla cream",
    price: 8,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80",
    category: "Drinks",
    popular: true
  }
];

const categories = ["All", "Burgers", "Pizza", "Fries", "Drinks"];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addItem } = useCart();
  const { toast } = useToast();

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Our Store
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-amber-500 hover:bg-amber-600 text-black"
                  : "border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-gray-900 border-gray-800 hover:border-amber-400 transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {item.popular && (
                  <Badge className="absolute top-4 left-4 bg-amber-500 text-black">
                    Popular
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-400">
                    ${item.price}
                  </span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    size="sm"
                    className="bg-amber-500 hover:bg-amber-600 text-black"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;