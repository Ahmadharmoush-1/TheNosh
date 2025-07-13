import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/LazyImage";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: number;
  pricePerPiece?: number;
  minOrder?: number;
  image: string;
  category: string;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
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
  },

  // New categories
  {
    id: "h1",
    name: "Classic Hotdog",
    description: "All-beef hotdog with traditional toppings",
    price: 12,
    image: "https://images.unsplash.com/photo-1612392061787-2d078b3e573e?auto=format&fit=crop&w=500&q=80",
    category: "Hotdogs"
  },
  {
    id: "h2",
    name: "Chili Cheese Dog",
    description: "Hotdog topped with chili and melted cheese",
    price: 15,
    image: "https://images.unsplash.com/photo-1612392062422-ef19b42f3c24?auto=format&fit=crop&w=500&q=80",
    category: "Hotdogs",
    popular: true
  },
  {
    id: "w1",
    name: "Chicken Caesar Wrap",
    description: "Grilled chicken with Caesar dressing in a tortilla",
    price: 14,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=500&q=80",
    category: "Wraps"
  },
  {
    id: "w2",
    name: "Buffalo Chicken Wrap",
    description: "Spicy buffalo chicken with ranch and vegetables",
    price: 15,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
    category: "Wraps"
  },
  {
    id: "bp1",
    name: "Loaded Baked Potato",
    description: "Fluffy baked potato with all the fixings",
    price: 11,
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=500&q=80",
    category: "Baked Potato"
  },
  {
    id: "bp2",
    name: "Chili Cheese Potato",
    description: "Baked potato topped with chili and cheese",
    price: 13,
    image: "https://images.unsplash.com/photo-1553978297-833d09932d89?auto=format&fit=crop&w=500&q=80",
    category: "Baked Potato"
  },
  {
    id: "s1",
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with classic Caesar dressing",
    price: 12,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=500&q=80",
    category: "Salads"
  },
  {
    id: "s2",
    name: "Greek Salad",
    description: "Fresh vegetables with feta cheese and olives",
    price: 13,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
    category: "Salads"
  },
  {
    id: "a1",
    name: "Mozzarella Sticks",
    description: "Crispy breaded mozzarella with marinara sauce",
    price: 9,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=500&q=80",
    category: "Appetizers"
  },
  {
    id: "a2",
    name: "Buffalo Wings",
    description: "Spicy chicken wings with blue cheese dip",
    price: 11,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80",
    category: "Appetizers",
    popular: true
  },
  {
    id: "sw1",
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie with vanilla ice cream",
    price: 8,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
    category: "Sweets"
  },
  {
    id: "sw2",
    name: "Cheesecake Slice",
    description: "Creamy New York style cheesecake",
    price: 9,
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=500&q=80",
    category: "Sweets"
  },
  {
    id: "sd1",
    name: "Classic Coca Cola",
    description: "Ice-cold Coca Cola served in a glass",
    price: 4,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=500&q=80",
    category: "Soft Drinks"
  },
  {
    id: "sd2",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 5,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",
    category: "Soft Drinks"
  },
  {
    id: "al1",
    name: "Craft Beer",
    description: "Local craft beer selection",
    price: 8,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=500&q=80",
    category: "Alcohol"
  },
  {
    id: "al2",
    name: "House Wine",
    description: "Selected red or white wine",
    price: 12,
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=500&q=80",
    category: "Alcohol"
  },
  {
    id: "hk1",
    name: "Apple Mint Hookah",
    description: "Refreshing apple mint flavor hookah session",
    price: 25,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80",
    category: "Hookah"
  },
  {
    id: "hk2",
    name: "Mixed Berry Hookah",
    description: "Sweet mixed berry flavor for relaxation",
    price: 28,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80",
    category: "Hookah",
    popular: true
  },
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

const categories = ["All", "Burgers", "Pizza", "Fries", "Drinks", "Hotdogs", "Wraps", "Baked Potato", "Salads", "Appetizers", "Sweets", "Soft Drinks", "Alcohol", "Hookah"];

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
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="border-accent text-primary hover:bg-accent hover:text-accent-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-primary">
            The Nosh Store
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
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "border-accent text-primary hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-card border-2 border-accent hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <div className="relative overflow-hidden rounded-t-lg">
                <LazyImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                {item.popular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{item.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-card-foreground">
                    ${item.price}
                  </span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
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