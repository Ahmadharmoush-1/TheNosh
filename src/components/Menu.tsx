import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

interface MenuProps {
  selectedCategory: string;
}

export const Menu = ({ selectedCategory }: MenuProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });

    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  // TODO: Replace this with your actual menu items data or import from your data source
  const menuItems: MenuItem[] = [
  // Plates
 {
  id: "sw1",
  name: "The Chicken Plate",
  description: "Tender grilled chicken served with seasoned rice and veggies.",
  ingredients: ["Grilled chicken", "Seasoned rice", "Vegetables", "Herb sauce"],
  price: 8,
  image: "https://i.imgur.com/vM25MN0.jpeg",
  category: "plates"
},
{
  id: "sw2",
  name: "The Duck Plate",
  description: "Crispy roasted duck breast with a tangy orange glaze.",
  ingredients: ["Roasted duck", "Orange glaze", "Mashed potatoes", "Greens"],
  price: 9,
  image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=500&q=80",
  category: "plates"
},
{
  id: "sw3",
  name: "The Salmon Plate",
  description: "Pan-seared salmon fillet served with lemon butter and asparagus.",
  ingredients: ["Salmon fillet", "Lemon butter", "Asparagus", "Herbs"],
  price: 8,
  image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
  category: "plates"
},
{
  id: "sw4",
  name: "The Steak Plate",
  description: "Juicy grilled steak with garlic butter and roasted potatoes.",
  ingredients: ["Grilled steak", "Garlic butter", "Roasted potatoes", "Gravy"],
  price: 9,
  image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=500&q=80",
  category: "plates"
},
// Wraps
  {
  id: "w1",
  name: "Buro Beef",
  description: "Juicy beef wrap with smoked cheese sauce, tartar, and sautéed veggies in a soft tortilla.",
  ingredients: ["Mix Greens", "Tartar", "Panea", "Onions", "Mushrooms", "Pickles", "Smocked Cheese Sauce"],
  price: 14,
  image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=500&q=80",
  category: "wraps"
},
{
  id: "w2",
  name: "Special Burro Beef",
  description: "Loaded beef wrap with smoked pollo, pickles, mushrooms, and a tangy cheese sauce blend.",
  ingredients: ["Mix Greens", "Tartar", "Panea", "Onions", "Mushrooms", "Pickles", "Smocked Cheese Sauce", "Smocked Pollo"],
  price: 15,
  image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
  category: "wraps"
},
{
  id: "w3",
  name: "Gambaretto",
  description: "A gourmet seafood wrap featuring shrimp, avocado, and your choice of salmon or duck with an Asian twist.",
  ingredients: ["Shrimps", "Avocado", "Salmon or Duck", "Asian Mix"],
  price: 15,
  image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
  category: "wraps"
},
{
  id: "w4",
  name: "Verdura Filling",
  description: "A vegetarian delight with fresh greens, avocado, mushrooms, and creamy smoked cheese.",
  ingredients: ["Mix Greens", "Tartar", "Avocado", "Smocked Cheese", "Panea", "Mushrooms", "Onions"],
  price: 15,
  image: "https://i.imgur.com/mnVcVSO.jpeg",
  category: "wraps"
},

  // Breakfast
  {
  id: "b1",
  name: "Eggsotic Plate",
  description: "A savory combination of beef hotdog served on a brioche bun, topped with mustard, ketchup, onions, and relish — a hearty breakfast twist.",
  ingredients: ["Beef hotdog", "Mustard", "Ketchup", "Onions", "Relish", "Brioche bun"],
  price: 12,
  image: "https://i.imgur.com/AXV3CVB.jpeg",
  category: "breakfast"
},
{
  id: "b2",
  name: "Japanese Egg Sando",
  description: "A fluffy Japanese-style egg sandwich featuring Asian sauce, mixed greens, panea, and crispy bacon, all layered perfectly.",
  ingredients: ["Asain Sauce", "Mix Greens", "Panea", "Bacon"],
  price: 12,
  image: "https://images.unsplash.com/photo-1612392061787-2d078b3e573e?auto=format&fit=crop&w=500&q=80",
  category: "breakfast"
},
{
  id: "b3",
  name: "The Breakfast Board for Four",
  description: "A generous breakfast board designed for sharing — includes Asian sauce, fresh greens, panea, and strips of bacon.",
  ingredients: ["Asain Sauce", "Mix Greens", "Panea", "Bacon"],
  price: 12,
  image: "https://i.imgur.com/KcVprCT.jpeg",
  category: "breakfast"
},
{
  id: "b4",
  name: "Baguette Chef’s Choice",
  description: "Chef’s favorite: a French baguette filled with a beef hotdog, mustard, ketchup, onions, and relish for a gourmet breakfast bite.",
  ingredients: ["Beef hotdog", "Mustard", "Ketchup", "Onions", "Relish", "Brioche bun"],
  price: 12,
  image: "https://images.unsplash.com/photo-1612392061787-2d078b3e573e?auto=format&fit=crop&w=500&q=80",
  category: "breakfast"
}
,
  // Salads
  {
    id: "s1",
    name: "TheNosh Salad",
    description: "Fresh romaine lettuce with classic Caesar dressing",
    ingredients: ["Mix Greens", "BlueBerry", "Strawberry", "Mango , Mushrooms", "Berries , Avocado","Tapped Parmesan"],
    price: 12,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=500&q=80",
    category: "salads"
  },
  {
    id: "s2",
    name: "Watermellon Holloumi Salad",
    description: "Fresh vegetables with feta cheese and olives",
    ingredients: ["Avocado", "Berries", "Mix Greens", "Mushrooms", "Watermellon", "Halloumi Cheese"],
    price: 13,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
    category: "salads"
  },
   // Appetizers
  {
    id: "a1",
    name: "Shrimp on a Sricl",
    description: "Crispy breaded mozzarella with marinara sauce",
    ingredients: ["Mozzarella cheese", "Breadcrumbs", "Marinara sauce", "Italian herbs"],
    price: 8,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=500&q=80",
    category: "appetizers"
  },
  {
    id: "a2",
    name: "The Mysterious Nosh",
    description: "Spicy chicken wings with blue cheese dip",
    ingredients: ["Chicken wings", "Buffalo sauce", "Celery", "Blue cheese dressing"],
    price: 20,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80",
    category: "appetizers"
  }, {
    id: "a3",
    name: "Baby Potato",
    description: "Spicy chicken wings with blue cheese dip",
    ingredients: ["Chicken wings", "Buffalo sauce", "Celery", "Blue cheese dressing"],
    price: 6,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80",
    category: "appetizers"
  },
  
  {
    id: "a4",
    name: "Sashimi Plate",
    description: "Spicy chicken wings with blue cheese dip",
    ingredients: ["Chicken wings", "Buffalo sauce", "Celery", "Blue cheese dressing"],
    price: 15,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80",
    category: "appetizers"
  },


  

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

  // // Pizza
  // {
  //   id: "p1",
  //   name: "Margherita Pizza",
  //   description: "Classic Italian pizza with fresh ingredients",
  //   ingredients: ["Fresh mozzarella", "Tomato sauce", "Fresh basil", "Olive oil", "Thin crust"],
  //   price: 22,
  //   image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=500&q=80",
  //   category: "pizza"
  // },
  // {
  //   id: "p2",
  //   name: "Pepperoni Supreme",
  //   description: "Classic pepperoni with extra cheese",
  //   ingredients: ["Pepperoni", "Mozzarella", "Tomato sauce", "Italian herbs", "Parmesan"],
  //   price: 25,
  //   image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
  //   category: "pizza"
  // },
  // {
  //   id: "p3",
  //   name: "Quattro Stagioni",
  //   description: "Four seasons pizza with diverse toppings",
  //   ingredients: ["Mushrooms", "Artichokes", "Ham", "Olives", "Mozzarella", "Tomato base"],
  //   price: 28,
  //   image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=500&q=80",
  //   category: "pizza"
  // },

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
  },

  

  

  // // Baked Potato
  // {
  //   id: "bp1",
  //   name: "Loaded Baked Potato",
  //   description: "Fluffy baked potato with all the fixings",
  //   ingredients: ["Large potato", "Butter", "Sour cream", "Cheddar cheese", "Bacon bits", "Chives"],
  //   price: 11,
  //   image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=500&q=80",
  //   category: "baked-potato"
  // },
  // {
  //   id: "bp2",
  //   name: "Chili Cheese Potato",
  //   description: "Baked potato topped with chili and cheese",
  //   ingredients: ["Large potato", "Chili con carne", "Cheddar cheese", "Sour cream", "Green onions"],
  //   price: 13,
  //   image: "https://images.unsplash.com/photo-1553978297-833d09932d89?auto=format&fit=crop&w=500&q=80",
  //   category: "baked-potato"
  // },

  
 
 
 
  

  // // Soft Drinks
  // {
  //   id: "sd1",
  //   name: "Classic Coca Cola",
  //   description: "Ice-cold Coca Cola served in a glass",
  //   ingredients: ["Coca Cola", "Ice", "Lemon slice"],
  //   price: 4,
  //   image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=500&q=80",
  //   category: "soft-drinks"
  // },
  // {
  //   id: "sd2",
  //   name: "Fresh Orange Juice",
  //   description: "Freshly squeezed orange juice",
  //   ingredients: ["Fresh oranges", "Ice", "Mint garnish"],
  //   price: 5,
  //   image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",
  //   category: "soft-drinks"
  // },

  // // Alcohol
  // {
  //   id: "al1",
  //   name: "Craft Beer",
  //   description: "Local craft beer selection",
  //   ingredients: ["Premium hops", "Malt", "Yeast", "Served chilled"],
  //   price: 8,
  //   image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=500&q=80",
  //   category: "alcohol"
  // },
  // {
  //   id: "al2",
  //   name: "House Wine",
  //   description: "Selected red or white wine",
  //   ingredients: ["Premium grapes", "Aged to perfection", "Served in wine glass"],
  //   price: 12,
  //   image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=500&q=80",
  //   category: "alcohol"
  // },

  // // Hookah
  // {
  //   id: "hk1",
  //   name: "Apple Mint Hookah",
  //   description: "Refreshing apple mint flavor hookah session",
  //   ingredients: ["Apple mint tobacco", "Natural charcoal", "Fresh fruits", "Ice base"],
  //   price: 25,
  //   image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80",
  //   category: "hookah"
  // },
  // {
  //   id: "hk2",
  //   name: "Mixed Berry Hookah",
  //   description: "Sweet mixed berry flavor for relaxation",
  //   ingredients: ["Mixed berry tobacco", "Premium charcoal", "Berry garnish", "Filtered water"],
  //   price: 28,
  //   image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80",
  //   category: "hookah"
  // },
  
];
  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );
  const categoryTitle =
    selectedCategory.charAt(0).toUpperCase() +
    selectedCategory.slice(1).replace("-", " ");

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);

  return (
    <section id="menu" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#1E1A4B" }}>
            {categoryTitle}
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our delicious {categoryTitle.toLowerCase()} selection
          </p>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#1E1A4B" }}
            >
              Coming Soon!
            </h3>
            <p className="text-muted-foreground">
              We're working on adding {categoryTitle.toLowerCase()} to our menu.
              Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
             <Card key={item.id} className="bg-card border-2 border-secondary hover:shadow-lg transition-all duration-300 overflow-hidden">
     <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-full object-contain"
    loading="lazy"
  />
</div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#1E1A4B" }}>
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground mb-2 text-sm">
                    {item.description}
                  </p>

                  {item.ingredients && item.ingredients.length > 0 && (
  <div className="mb-4">
    <h4 className="font-semibold text-card-foreground mb-2 text-sm">
      Ingredients:
    </h4>
    <div className="flex flex-wrap gap-1">
      {item.ingredients.map((ingredient, index) => (
        <span
          key={index}
          className="bg-muted text-primary text-xs px-2 py-1 rounded-full border border-secondary"
        >
          {ingredient}
        </span>
      ))}
    </div>
  </div>
)}


                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: "#1E1A4B" }}>
                      ${item.price}
                    </span>
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="bg-[#1E1A4B] hover:bg-[#1E1A4B]/90 text-white border border-[#1E1A4B] transition-colors duration-200"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};