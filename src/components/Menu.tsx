import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";


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
  description: "Tender Grilled Chicken Sided with Baby Potatoes , Topped with Parmesan and Garlic ",
  ingredients: ["Grilled chicken", "Baby Potatoes", "Parmesan", "Garlic","Protein","Smokey Cheese Sauce"],
  price: 12,
  image: "/photos/thechickenplate.jpg",
  category: "plates"
},
{
  id: "sw2",
  name: "The Duck Plate",
  description: "Tender Roasted Duck Sided with Golden Baby Potatoes, Drizzled in a Rich Smokey Cheese Sauce, Topped with Parmesan and Garlic, Savory finish.",
  ingredients: ["Roasted duck", "Baby potatoes","Smokey Cheese Sauce","Parmesan","Garlic"],
  price: 20,
  image: "/photos/duckplate.jpg",
  category: "plates"
},
{
  id: "sw3",
  name: "The Salmon Plate",
  description: "Salmon Fillet Sided with Baby Potatoes, Topped with Parmesan and Garlic",
  ingredients: ["Salmon fillet", "Baby Potatoes", "Smokey Cheese", "Parmesan","Protein","Garlic Sauce"],
  price: 25,
  image: "/photos/thesalmonplate.jpg",
  category: "plates"
},
{
  id: "sw4",
  name: "The Steak Plate",
  description: "Juicy Grilled Steak Sided with Baby Potatoes, Topped with Smokey Cheese Sauce and Parmesan, Finished with a Rich Garlic Sauce — a bold, Protein-packed classic.",
  ingredients: ["Grilled steak", "Garlic Sauce" , "Smokey Cheese Sauce", "Protein","Parmesan"],
  price: 20,
  image: "/photos/thesteakplate.jpg",
  category: "plates"
},
// sandos
  {
  id: "w1",
  name: "Burro Beef",
  description: "Filet Mignon Beef Resting on a  Hot Focaccia with Tartar ,  Mix Greens , Mushrooms  with our in House Pickles and Caramelized Onions.",
  ingredients: ["Mignon Beef", "Mixed Greens","Tartar", "Pane", "Onions", "Mushrooms", "Pickles"],
  price: 10,
  image: "/photos/burrobeef.jpg",
  category: "sandos"
 },
// {
//   id: "w2",
//   name: "Special Burro Beef",
//   description: "Loaded beef wrap with smoked pollo, pickles, mushrooms, and a tangy cheese sauce blend.",
//   ingredients: ["Mix Greens", "Tartar", "Panea", "Onions", "Mushrooms", "Pickles", "Smocked Cheese Sauce", "Smocked Pollo"],
//   price: 15,
//   image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
//   category: "sandos"
// },
{
  id: "w3",
  name: "Gambaretto",
  description: "Tiger Shrimps Resting on a  Hot Focaccia with Tartar ,  Mix Greens , Mushrooms  with our in House Pickles and Caramelized Onions.",
  ingredients: ["Tiger Shrimps", "Mixed Greens","Tartar", "Pane", "Onions", "Mushrooms", "Pickles"],
  price: 15,
  image: "",
  category: "sandos"
},
{
  id: "w4",
  name: "Verdura Filling",
  description: "Asian Mix Resting on a  Hot Focaccia with Tartar ,  Mix Greens , Mushrooms  with our in House Pickles and Caramelized Onions.",
  ingredients: ["Asian Mix", "Mixed Greens","Tartar", "Pane", "Onions", "Mushrooms", "Pickles"],
  price: 6.5,
  image: "",
  category: "sandos"
},
{
  id: "w5",
  name: "Smoked Pollo",
  description: "Filet Mignon Beef Resting on a  Hot Focaccia with Tartar ,  Mix Greens , Mushrooms  with our in House Pickles and Caramelized Onions.",
  ingredients: ["Mignon Beef", "Mixed Greens","Tartar", "Pane", "Onions", "Mushrooms", "Pickles"],
  price: 8,
  image: "/photos/smockedpollo.jpg",
  category: "sandos"
},
{
  id: "w6",
  name: "Salmon Sumo",
  description: "A Fresh Salmon Steak Resting on a Hot Focaccia , with Asian Mix Salad , Tartar , Mix Greens , Mushrooms , CaramelizedOnions , Pickles and Tapped With Smokey Cheese.",
  ingredients: ["Salmon", "Asian Salad", "Tartar", "Mixed Greens", "Mushrooms", "Caramelized Onions", "Pickles", "Smokey Cheese"],
  price: 15,
  image: "/photos/salmonsumo.png",
  category: "sandos"
},
{
  id: "w7",
  name: "Quack au Pain",
  description: "A  Fresh Duck  Breast Resting on a Hot Focaccia , with Asian Mix Salad , Tartar , Mix Greens , Mushrooms , Caramelized Onions , Pickles and Tapped With Smokey Cheese.",
  ingredients: ["Duck", "Asian Salad", "Tartar", "Mixed Greens", "Mushrooms", "Caramelized Onions", "Pickles", "Smokey Cheese"],
  price: 15,
  image: "/photos/Gambaretto.jpg",
  category: "sandos"
},

  // Breakfast
  {
  id: "b1",
  name: "Eggsotic Plate",
  description: "A Vibrant Combo of Creamy Avocados, Soft Eggs, Crispy Bacon, Juicy Baby Tomatoes, and Toasted Bread — Simple, Fresh, and Full of Flavor.",
  ingredients: ["Eggs","Avocados", "Bacon", "Baby Tomatoes", "Bread"],
  price: 12,
  image: "/photos/eggsoticplate.jpg",
  category: "breakfast"
},
{
  id: "b2",
  name: "Japanese Egg Sando",
  description: "Fluffy, creamy egg salad made with jammy boiled eggs, Japanese mayo, and a touch of seasoning — all tucked between two slices of soft, and milk bread.",
  ingredients: ["Soft-boiled eggs", "Japanese mayonnaise", "Salt & pepper", "Bacon"],
  price: 12,
  image: "/photos/japaneseeggsando.jpg",
  category: "breakfast"
},
{
  id: "b3",
  name: "The Breakfast Board for Four",
  description: "A hearty morning spread featuring farm-fresh eggs, creamy cheese, savory pane, crispy bacon, flaky croissants, golden potatoes, and a medley of fresh veggies — perfect for a satisfying start to your day.",
  ingredients: ["Eggs", "Cheese", "Pane", "Bacon","Croissant","Potatoes","Veggies"],
  price: 12,
  image: "/photos/thebreakfastboard.jpg",
  category: "breakfast"
},
{
  id: "b4",
  name: "Bagel Chef’s Choice",
  description: "The Mysterious Nosh",
  ingredients: [ "?", "?", "?", "?", "?"],
  price: 12,
  image: "/photos/questionmark.webp",
  category: "breakfast"
}
,
  // Salads
  {
    id: "s1",
    name: "TheNosh Salad",
    description: "",
    ingredients: [],
    price: 12,
    image: "",
    category: "salads"
  },
  {
    id: "s2",
    name: "Watermelon Halloumi Salad",
    description: "",
    ingredients: [],
    price: 13,
    image: "",
    category: "salads"
  },
   // Appetizers
  {
    id: "a1",
    name: "Shrimp on a Stick",
    description: "Pan Fried Shrimps , Sided with Avocados and Chefs Twist , Tapped with Smokey Cheese Sauce",
    ingredients: ["Shrimps", "Avocados", "Smokey Cheese"],
    price: 8,
    image: "",
    category: "appetizers"
  },
  {
    id: "a2",
    name: "The Mysterious Nosh",
    description: "An Appetizer for 2 or more , An Exclusive Chef Choice , You choose the mood , fish , heat or poultry",
    ingredients: [],
    price: 20,
    image: "",
    category: "appetizers"
  }, {
    id: "a3",
    name: "Baby Potato",
    description: "Mini  Potatoes Sauted with Butter or Duck Fat , Topped with Parmesan and Butter",
    ingredients: ["Mini Potatoes", "Butter - Duck Fat", "Parmesan", "Butter"],
    price: 6,
    image: "/photos/babypotatoes.jpg",
    category: "appetizers"
  },
  
  {
    id: "a4",
    name: "Sashimi Plate",
    description: "The Freshest in Town a Perfectly Cut Salmon Steak with Sweet Savory Asian Sauce Sided With Wasabi and Tartar",
    ingredients: ["Salmon", "Asian Sauce", "Wasabi", "Tartar"],
    price: 15,
    image: "",
    category: "appetizers"
  },


  

  // Burgers
  // {
  //   id: "b1",
  //   name: "Classic Beef Burger",
  //   description: "Juicy beef patty with fresh vegetables",
  //   ingredients: ["Beef patty", "Lettuce", "Tomato", "Onion", "Special sauce", "Brioche bun"],
  //   price: 18,
  //   image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
  //   category: "burgers"
  // },
  // {
  //   id: "b2",
  //   name: "Chicken Deluxe Burger",
  //   description: "Grilled chicken breast with premium toppings",
  //   ingredients: ["Grilled chicken", "Avocado", "Bacon", "Ranch dressing", "Lettuce", "Tomato"],
  //   price: 16,
  //   image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80",
  //   category: "burgers"
  // },
  // {
  //   id: "b3",
  //   name: "Mushroom Swiss Burger",
  //   description: "Beef patty with sautéed mushrooms and Swiss cheese",
  //   ingredients: ["Beef patty", "Sautéed mushrooms", "Swiss cheese", "Caramelized onions", "Truffle mayo"],
  //   price: 19,
  //   image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=500&q=80",
  //   category: "burgers"
  // },

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

  // // Fries
  // {
  //   id: "f1",
  //   name: "Classic French Fries",
  //   description: "Crispy golden fries with sea salt",
  //   ingredients: ["Fresh potatoes", "Sea salt", "Vegetable oil"],
  //   price: 8,
  //   image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80",
  //   category: "fries"
  // },
  // {
  //   id: "f2",
  //   name: "Truffle Parmesan Fries",
  //   description: "Hand-cut fries with truffle oil and parmesan",
  //   ingredients: ["Hand-cut potatoes", "Truffle oil", "Fresh parmesan", "Fresh herbs"],
  //   price: 14,
  //   image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=500&q=80",
  //   category: "fries"
  // },
  // {
  //   id: "f3",
  //   name: "Sweet Potato Fries",
  //   description: "Crispy sweet potato fries with cinnamon sugar",
  //   ingredients: ["Sweet potatoes", "Cinnamon", "Brown sugar", "Sea salt"],
  //   price: 10,
  //   image: "https://images.unsplash.com/photo-1553787444-0d12624df50f?auto=format&fit=crop&w=500&q=80",
  //   category: "fries"
  // },

  // Drinks
  {
    id: "d1",
    name: "Cola",
    description: "",
    ingredients: [],
    price: 2,
    image: "/photos/cola.png",
    category: "drinks"
  },
  {
    id: "d2",
    name: "Pepsi",
    description: "",
    ingredients: [],
    price: 1,
    image: "/photos/pepsi.jpg",
    category: "drinks"
  },
  {
    id: "d3",
    name: "Pepsi-Diet",
    description: "",
    ingredients: [],
    price: 1,
    image: "/photos/pepsidiet.png",
    category: "drinks"
  },
  {
    id: "d4",
    name: "Seven Up",
    description: "",
    ingredients: [""],
    price: 1,
    image: "/photos/7Up.jpg",
    category: "drinks"
  },
  {
    id: "d5",
    name: "Seven Up-Diet",
    description: "",
    ingredients: [],
    price: 1,
    image: "/photos/sevenupdiet.webp",
    category: "drinks"
  },
  {
    id: "d6",
    name: "Ice Tea Peach",
    description: "",
    ingredients: [],
    price: 1.5,
    image: "/photos/icetea.webp",
    category: "drinks"
  }, {
    id: "d7",
    name: "StrawBerry Punch",
    description: "",
    ingredients: [],
    price: 2,
    image: "/photos/strawberry.webp",
    category: "drinks"
  }

  

  

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
  <h2 className="text-3xl font-bold mb-3 text-primary">
    {categoryTitle}
  </h2>
  <p className="text-muted-foreground text-base">
    Choose from our delicious {categoryTitle.toLowerCase()} selection
  </p>
</div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-primary mb-4">Coming Soon!</h3>
            <p className="text-muted-foreground">
              We're working on adding {categoryTitle.toLowerCase()} to our menu. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-card border-2 border-secondary hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="overflow-hidden rounded-t-lg">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.name}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Ingredients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ingredient, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ${item.price}
                    </span>
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="bg-secondary hover:bg-secondary/90 text-primary border border-secondary transition-colors duration-200"
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
