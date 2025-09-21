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
  price: 15,
  image: "/photos/thechickenplate.jpg",
  category: "plates"
},
{
  id: "sw2",
  name: "The Duck Plate",
  description: "Tender Roasted Duck Sided with Golden Baby Potatoes, Drizzled in a Rich Smokey Cheese Sauce, Topped with Parmesan and Garlic, Savory finish.",
  ingredients: ["Roasted duck", "Baby potatoes","Smokey Cheese Sauce","Parmesan","Garlic"],
  price: 22,
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

{
  id: "w3",
  name: "Gambaretto",
  description: "Tiger Shrimps Resting on a  Hot Focaccia with Tartar ,  Mix Greens , Mushrooms  with our in House Pickles and Caramelized Onions.",
  ingredients: ["Tiger Shrimps", "Mixed Greens","Tartar", "Pane", "Onions", "Mushrooms", "Pickles"],
  price: 12,
  image: "/photos/gamberetto.jpg",
  category: "sandos"
},
{
  id: "w4",
  name: "Verdura Filling",
  description: "Asian Mix Resting on a  Hot Focaccia with Tartar ,  Mix Greens , Mushrooms  with our in House Pickles and Caramelized Onions.",
  ingredients: ["Asian Mix", "Mixed Greens","Tartar", "Pane", "Onions", "Mushrooms", "Pickles"],
  price: 6.50,
  image: "/photos/missingpicture.png",
  category: "sandos"
},
{
  id: "w5",
  name: "Smoked Pollo",
  description: "A Chicken Breast Resting on a  Hot Focaccia with Tartar ,  Mix Greens , Mushrooms  with our in House Pickles and Caramelized Onions.",
  ingredients: ["Chicken Breast", "Mixed Greens","Tartar", "Pane", "Onions", "Mushrooms", "Pickles"],
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
  image: "/photos/quackaupain.jpg",
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
    id: "s2",
    name: "Watermelon Halloumi Salad",
    description: "",
    ingredients: [],
    price: 13,
    image: "/photos/watermellonhalloumisalad.jpg",
    category: "salads"
  },
  {
    id: "s1",
    name: "TheNosh Salad",
    description: "",
    ingredients: [],
    price: 6.50,
    image: "/photos/missingpicture.png",
    category: "salads"
  },
 
   // Appetizers
  {
    id: "a1",
    name: "Shrimp on a Stick",
    description: "Pan Fried Shrimps , Sided with Avocados and Chefs Twist , Tapped with Smokey Cheese Sauce",
    ingredients: ["Shrimps", "Avocados", "Smokey Cheese"],
    price: 8,
    image: "/photos/shrimponastick.png",
    category: "appetizers"
  },
  {
    id: "a2",
    name: "The Mysterious Nosh",
    description: "An Appetizer for 2 or more , An Exclusive Chef Choice , You choose the mood , fish , heat or poultry",
    ingredients: [],
    price: 20,
    image: "/photos/questionmark.webp",
    category: "appetizers"
  }, {
    id: "a3",
    name: "Baby Potato",
    description: "Mini  Potatoes Sauted with Butter or Duck Fat , Topped with Parmesan and Butter",
    ingredients: ["Mini Potatoes", "Butter - Duck Fat", "Parmesan", "Butter"],
    price: 6.00,
    image: "/photos/babypotatoes.jpg",
    category: "appetizers"
  },
  
  {
    id: "a4",
    name: "Sashimi Plate",
    description: "The Freshest in Town a Perfectly Cut Salmon Steak with Sweet Savory Asian Sauce Sided With Wasabi and Tartar",
    ingredients: ["Salmon", "Asian Sauce", "Wasabi", "Tartar"],
    price: 15,
    image: "/photos/shashimiplate.jpg",
    category: "appetizers"
  },


  

  

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
