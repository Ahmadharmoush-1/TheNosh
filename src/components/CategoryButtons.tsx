import { Button } from "@/components/ui/button";

interface CategoryButtonsProps {
  onCategoryClick: (category: string) => void;
}

export const CategoryButtons = ({ onCategoryClick }: CategoryButtonsProps) => {
  const categories = [
    { name: "Burgers", emoji: "🍔", id: "burgers" },
    { name: "Pizza", emoji: "🍕", id: "pizza" },
    { name: "Fries", emoji: "🍟", id: "fries" },
    { name: "Drinks", emoji: "🥤", id: "drinks" },
    { name: "Hotdogs", emoji: "🌭", id: "hotdogs" },
    { name: "Wraps", emoji: "🌯", id: "wraps" },
    { name: "Baked Potato", emoji: "🥔", id: "baked-potato" },
    { name: "Salads", emoji: "🥗", id: "salads" },
    { name: "Appetizers", emoji: "🥨", id: "appetizers" },
    { name: "Sweets", emoji: "🍰", id: "sweets" },
    { name: "Soft Drinks", emoji: "🥤", id: "soft-drinks" },
    { name: "Alcohol", emoji: "🍺", id: "alcohol" },
    { name: "Hookah", emoji: "💨", id: "hookah" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground animate-fade-in">
            The Dogfather
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Choose your favorite category and start ordering
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className="h-28 flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-100 border-2 border-black text-black hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in"
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