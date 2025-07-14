import { Button } from "@/components/ui/button";

interface CategoryButtonsProps {
  onCategoryClick: (category: string) => void;
}

export const CategoryButtons = ({ onCategoryClick }: CategoryButtonsProps) => {
  const categories = [
    { name: "Plates", emoji: "🍽️", id: "plates" },
    { name: "Sandwiches", emoji: "🌯", id: "wraps" },
    { name: "Breakfast", emoji: "🍳", id: "breakfast" },
    { name: "Salads", emoji: "🥗", id: "salads" },
    { name: "Appetizers", emoji: "🥨", id: "appetizers" },
    { name: "Burgers", emoji: "🍔", id: "burgers" },
    // { name: "Pizza", emoji: "🍕", id: "pizza" },
    
    
    { name: "Fries", emoji: "🍟", id: "fries" },
    // { name: "Hotdogs", emoji: "🌭", id: "hotdogs" },
    
    // { name: "Baked Potato", emoji: "🥔", id: "baked-potato" },
   
  
    { name: "Drinks", emoji: "🥤", id: "drinks" },
    // { name: "Sweets", emoji: "🍰", id: "sweets" },
    

   { name: "Catering Services", emoji: "🍽️", id: "catering", isSpecial: true }
     
  ];

  const handleCategoryClick = (category: { id: string; isSpecial?: boolean }) => {
    if (category.id === "catering") {
      window.location.href = '/catering';
    } else {
      onCategoryClick(category.id);
    }
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary animate-fade-in">
            The Nosh
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Choose your favorite category and start ordering
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`h-28 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in ${
                category.isSpecial 
                  ? "bg-secondary text-primary hover:bg-secondary/90 border-2 border-secondary" 
                  : "bg-background hover:bg-secondary border-2 border-secondary text-primary hover:text-primary"
              }`}
              variant="outline"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-3xl transition-transform duration-200 hover:scale-110">{category.emoji}</span>
              <span className="text-sm font-semibold text-center leading-tight">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
