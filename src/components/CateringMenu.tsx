import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MessageCircle } from "lucide-react";

export const CateringMenu = () => {
  const cateringItems = [
    { name: "Eggsotic Plate", price: 1, unit: "piece" },
    { name: "Japanese Egg Sando", price: 1, unit: "piece" },
    { name: "Breakfast Board for Four", price: 1, unit: "board" },
    { name: "Baguette Chef's Choice", price: 1, unit: "piece" },
    { name: "Gourmet Sandwich Platter", price: 1, unit: "piece" },
    { name: "Mini Burger Sliders", price: 1, unit: "piece" },
    { name: "Artisan Pizza Slices", price: 1, unit: "piece" },
    { name: "Gourmet Salad Bowls", price: 1, unit: "piece" },
    { name: "Stuffed Mushroom Caps", price: 1, unit: "piece" },
    { name: "Chocolate Dessert Cups", price: 1, unit: "piece" }
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi! I'm interested in your catering services. Could you please provide more information?");
    const phoneNumber = "96176054688"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleDownloadMenu = () => {
    // This would link to the actual PDF menu
    console.log("Download PDF menu");
    window.open('/catering-menu.pdf', '_blank');
  };

  return (
    <section id="catering-menu" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Catering Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional catering for your events and gatherings
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-2 border-secondary hover:shadow-lg transition-all duration-300 overflow-hidden">
            {/* Hero Image Section */}
            <div className="relative w-full h-64 md:h-80">
              <img
                src="\photos\catering.png"
                alt="Catering Services"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <CardContent className="p-6 md:p-8">
              {/* Description */}
              <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                    Catering Selections
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our catering menu is thoughtfully designed to serve groups of all sizes — ideal for corporate events,
                    private gatherings, and special occasions. From chef-crafted platters to gourmet sandwiches and signature creations, 
                    we deliver high-quality dishes with a focus on presentation, flavor, and convenience.
                  </p>
                </div>


              {/* Pricing List */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-card-foreground">
                  Menu & Pricing
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cateringItems.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-2 px-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-card-foreground font-medium">
                        {item.name}
                      </span>
                      <span className="text-primary font-semibold">
                        ${item.price} / {item.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 text-lg transition-colors duration-200"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact to Order
                </Button>
                
                <Button
                  onClick={handleDownloadMenu}
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-3 text-lg transition-colors duration-200"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Menu
                </Button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Minimum order quantities may apply. Contact us for custom catering options and group discounts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};