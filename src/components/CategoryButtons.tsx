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
    { name: "Fries", emoji: "🍟", id: "fries" },
    { name: "Drinks", emoji: "🥤", id: "drinks" },
    { name: "Catering Services", emoji: "🍽️", id: "catering", isSpecial: true },
  ];

  const handleCategoryClick = (category: { id: string; isSpecial?: boolean }) => {
    if (category.id === "catering") {
      window.location.href = "/catering";
    } else {
      onCategoryClick(category.id);
    }
  };

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 10px 2px rgba(30, 26, 75, 0.7); /* #1E1A4B at 70% opacity */
          }
          50% {
            box-shadow: 0 0 20px 6px rgba(30, 26, 75, 1); /* #1E1A4B full opacity */
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite ease-in-out;
        }
      `}</style>

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
                className={`transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in ${
                  category.isSpecial
                    ? "h-32 rounded-xl bg-gradient-to-r from-[#1E1A4B] via-[#2C2768] to-[#3B327D] text-white shadow-lg animate-pulse-glow border-0"
                    : "h-28 rounded-md bg-background hover:bg-secondary border-2 border-secondary text-primary hover:text-primary"
                }`}
                variant={category.isSpecial ? "default" : "outline"}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-3xl transition-transform duration-200 hover:scale-110">
                  {category.emoji}
                </span>
                <span className="text-sm font-semibold text-center leading-tight">
                  {category.name}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
