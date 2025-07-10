import { Button } from "@/components/ui/button";

interface CategoryButtonsProps {
  onCategoryClick: (category: string) => void;
}

export const CategoryButtons = ({ onCategoryClick }: CategoryButtonsProps) => {
  const categories = [
    { name: "Burgers", emoji: "🍔", id: "burgers" },
    { name: "Pizza", emoji: "🍕", id: "pizza" },
    { name: "Fries", emoji: "🍟", id: "fries" },
    { name: "Drinks", emoji: "🥤", id: "drinks" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground animate-fade-in">
            O_bites
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Choose your favorite category and start ordering
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className="h-32 flex flex-col items-center justify-center gap-3 bg-card hover:bg-accent border border-border text-card-foreground hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in"
              variant="outline"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl transition-transform duration-200 hover:scale-110">{category.emoji}</span>
              <span className="text-lg font-semibold">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
