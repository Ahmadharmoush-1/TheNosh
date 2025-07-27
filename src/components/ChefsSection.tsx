import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Calendar, Users } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface Chef {
  id: string;
  name: string;
  experience: string;
  description: string;
  priceRange: [number, number];
  image: string;
  rating: number;
  eventsServed: number;
  specialties: string[];
  minGuests: number;
  pricePerPersonRange: [number, number]; 

}

const chefs: Chef[] = [
  {
    id: "chef1",
    name: "Lama Malaeb",
    experience: "4 Years Experience",
    description: "Expert in Japanese cuisine with a focus on sushi artistry and fresh ingredients. Also skilled in modern gourmet presentations.",
    priceRange:  [250, 300],
    image: "",
    rating: 4.6,
    eventsServed: 60,
    specialties: ["Sushi", "Gourmet Dining", "Tapauese", "Salads"],
    minGuests: 10,
    pricePerPersonRange: [25, 30]
  },{
  id: "chef2",
  name: "Karim Malaeb",
  experience: "6 Years Experience",
  description: "Specializes in authentic Lebanese dishes and creative fast food with local flavors. Combines tradition with modern convenience.",
  priceRange:  [250, 300],
  image: "",
  rating: 4.8,
  eventsServed: 75,
  specialties: ["Lebanese Cuisine", "Fast Food"],
  minGuests: 10,
  pricePerPersonRange: [25, 30]
},{
  id: "chef3",
  name: "Rawad Malaeb",
  experience: "6 Years Experience",
  description: "Expert in international cuisine and gourmet casual concepts. Delivers refined flavors through creative fine dining experiences.",
  priceRange:  [350, 400],
  image: "",
  rating: 4.9,
  eventsServed: 90,
  specialties: ["Fine Dining", "International Cuisine", "Gourmet Casual Food"],
  minGuests: 10,
  pricePerPersonRange: [35, 40]  
}

  // {
  //   id: "chef4",
  //   name: "Name",
  //   experience: "10 Years Experience",
  //   description: "Creative fusion chef combining Asian and Western flavors for unique culinary experiences.",
  //   price: 180,
  //   image: "",
  //   rating: 4.6,
  //   eventsServed: 90,
  //   specialties: ["Asian Fusion", "Creative Cooking", "Presentation"]
  // }
];

export const ChefsSection = () => {
  const { addChef } = useCart();
  const { toast } = useToast();

  const handleBookChef = (chef: Chef) => {
    addChef({
      id: chef.id,
      name: chef.name,
      price: chef.priceRange[0],
      image: chef.image,
      experience: chef.experience,
      description: chef.description
    });
    
    toast({
      title: "Chef booked!",
      description: `${chef.name} has been added to your cart for a private session.`,
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            👨‍🍳 Meet The Chefs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Book your favorite chef for a private catering experience or one-on-one cooking session.
            Our chefs aren't just cooks – they're artists ready to make your event unforgettable.
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {chefs.map((chef) => (
            <Card key={chef.id} className="bg-card border-2 border-secondary hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold">{chef.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 text-card-foreground">{chef.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{chef.experience}</p>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {chef.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-card-foreground mb-2 text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {chef.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-muted text-primary text-xs px-2 py-1 rounded-full border border-secondary"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
  <div className="flex items-center space-x-1">
    <Calendar className="h-3 w-3" />
    <span>{chef.eventsServed} events</span>
  </div>
  <div className="flex items-center space-x-1">
    <Users className="h-3 w-3" />
    <span>Private sessions</span>
  </div>
  {chef.minGuests > 0 && (
    <div className="flex items-center space-x-1">
      <Users className="h-3 w-3" />
      <span>Min {chef.minGuests} guests</span>
    </div>
  )}
  {chef.pricePerPersonRange && (
    <div className="flex items-center space-x-1">
      <span>💲</span>
      <span>
        ${chef.pricePerPersonRange[0]} - ${chef.pricePerPersonRange[1]}/person
      </span>
    </div>
  )}
</div>

                
                <div className="flex items-center justify-between">
                  <span>
        ${chef.priceRange[0]} - ${chef.priceRange[1]}/session
      </span>
                  <Button
                    onClick={() => handleBookChef(chef)}
                    size="sm"
                    className="bg-secondary hover:bg-secondary/90 text-primary border border-secondary transition-colors duration-200"
                  >
                    Book Now
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