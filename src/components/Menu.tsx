import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  // Burgers
  {
    id: "b1",
    name: "Classic Beef Burger",
    description: "Juicy beef patty with fresh vegetables",
    ingredients: ["Beef patty", "Lettuce", "Tomato", "Onion", "Special sauce", "Brioche bun"],
    price: 18,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
    category: "burgers"
  },
  {
    id: "b2",
    name: "Chicken Deluxe Burger",
    description: "Grilled chicken breast with premium toppings",
    ingredients: ["Grilled chicken", "Avocado", "Bacon", "Ranch dressing", "Lettuce", "Tomato"],
    price: 16,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80",
    category: "burgers"
  },
  {
    id: "b3",
    name: "Mushroom Swiss Burger",
    description: "Beef patty with sautéed mushrooms and Swiss cheese",
    ingredients: ["Beef patty", "Sautéed mushrooms", "Swiss cheese", "Caramelized onions", "Truffle mayo"],
    price: 19,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=500&q=80",
    category: "burgers"
  },

  // Pizza
  {
    id: "p1",
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh ingredients",
    ingredients: ["Fresh mozzarella", "Tomato sauce", "Fresh basil", "Olive oil", "Thin crust"],
    price: 22,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=500&q=80",
    category: "pizza"
  },
  {
    id: "p2",
    name: "Pepperoni Supreme",
    description: "Classic pepperoni with extra cheese",
    ingredients: ["Pepperoni", "Mozzarella", "Tomato sauce", "Italian herbs", "Parmesan"],
    price: 25,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
    category: "pizza"
  },
  {
    id: "p3",
    name: "Quattro Stagioni",
    description: "Four seasons pizza with diverse toppings",
    ingredients: ["Mushrooms", "Artichokes", "Ham", "Olives", "Mozzarella", "Tomato base"],
    price: 28,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=500&q=80",
    category: "pizza"
  },

  // Fries
  {
    id: "f1",
    name: "Classic French Fries",
    description: "Crispy golden fries with sea salt",
    ingredients: ["Fresh potatoes", "Sea salt", "Vegetable oil"],
    price: 8,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80",
    category: "fries"
  },
  {
    id: "f2",
    name: "Truffle Parmesan Fries",
    description: "Hand-cut fries with truffle oil and parmesan",
    ingredients: ["Hand-cut potatoes", "Truffle oil", "Fresh parmesan", "Fresh herbs"],
    price: 14,
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=500&q=80",
    category: "fries"
  },
  {
    id: "f3",
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with cinnamon sugar",
    ingredients: ["Sweet potatoes", "Cinnamon", "Brown sugar", "Sea salt"],
    price: 10,
    image: "https://images.unsplash.com/photo-1553787444-0d12624df50f?auto=format&fit=crop&w=500&q=80",
    category: "fries"
  },

  // Drinks
  {
    id: "d1",
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh mint",
    ingredients: ["Fresh lemons", "Mint leaves", "Sugar", "Sparkling water", "Ice"],
    price: 6,
    image: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=500&q=80",
    category: "drinks"
  },
  {
    id: "d2",
    name: "Craft Cola",
    description: "Premium craft cola with natural ingredients",
    ingredients: ["Natural cola syrup", "Sparkling water", "Vanilla extract", "Caramel", "Spices"],
    price: 7,
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=500&q=80",
    category: "drinks"
  },
  {
    id: "d3",
    name: "Iced Coffee",
    description: "Cold brew coffee with vanilla cream",
    ingredients: ["Cold brew coffee", "Vanilla cream", "Sugar syrup", "Ice", "Whipped cream"],
    price: 8,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80",
    category: "drinks"
  }
];

interface MenuProps {
  selectedCategory: string;
}

export const Menu = ({ selectedCategory }: MenuProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);
  const categoryName = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {categoryName}
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our delicious {selectedCategory}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-card border-border hover:shadow-lg transition-all duration-300">
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
                  <h4 className="font-semibold text-card-foreground mb-2 text-sm">Ingredients:</h4>
                  <div className="flex flex-wrap gap-1">
                    {item.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-card-foreground">
                    ${item.price}
                  </span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
