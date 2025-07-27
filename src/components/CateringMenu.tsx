import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MessageCircle } from "lucide-react";

export const CateringMenu = () => {
  const specialItems = [
    { name: "Smocked Halloumi", price: 0.6, unit: "piece" },
    { name: "Feta + Mango", price: 0.55, unit: "piece" },
    { name: "Prociouto", price: 0.8, unit: "piece" },
    { name: "Bresaula + Brie", price: 0.8, unit: "piece" },
    { name: "Brie - walnuts", price: 0.6, unit: "piece" },
    { name: "Vegie Asain Mix", price: 0.6, unit: "piece" },
    { name: "Mushroom Mix", price: 0.7, unit: "piece" },
  ];

  const sandwichItems = [
    { name: "Cheese-Sandwich", price: 1.5, unit: "piece" },
    { name: "Smocked Salmon Sandwich", price: 2, unit: "piece" },
    { name: "Smocked Crab Sandwich", price: 2, unit: "piece" },
    { name: "Turkey And Cheese", price: 0.75, unit: "piece" },
  ];

  const sushiItems = [
    { name: "Salmon", price: 1.2, unit: "piece" },
    { name: "Caviar", price: 1, unit: "piece" },
    { name: "Shrimps", price: 1.2, unit: "piece" },
    { name: "Crab", price: 0.8, unit: "piece" },
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi! I'm interested in your catering services. Could you please provide more information?");
    const phoneNumber = "96176054688";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleDownloadMenu = () => {
    const link = document.createElement("a");
    link.href = "/catering-menu.pdf"; // Make sure this file is in the public/ folder
    link.download = "catering-menu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  type MenuItem = { name: string; price: number; unit: string };
  const MenuSection = ({ title, items, icon }: { title: string; items: MenuItem[]; icon?: string }) => (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        {icon && <img src={icon} alt={`${title} icon`} className="w-6 h-6" />}
        <h5 className="text-lg font-semibold text-card-foreground">{title}</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 px-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <span className="text-card-foreground font-medium">{item.name}</span>
            <span className="text-primary font-semibold">
              ${item.price} / {item.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="catering-menu" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Catering Services</h2>
          <p className="text-muted-foreground text-lg">
            Professional catering for your events and gatherings
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-2 border-secondary hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative w-full h-64 md:h-80">
              <img
                src="/photos/catering.png"
                alt="Catering Services"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <CardContent className="p-6 md:p-8">
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

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-6 text-card-foreground">Menu & Pricing</h4>

                <MenuSection
                  title="Special Bites"
                  items={specialItems}
                  icon="/photos/chefhaticon.png"
                />
                <MenuSection
                  title="Sandwiches"
                  items={sandwichItems}
                  icon="/photos/Sandwichicon.png"
                />
                <MenuSection
                  title="Sushi & Gourmet Bites"
                  items={sushiItems}
                  icon="/photos/sushiicon.webp"
                />
              </div>

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

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Contact us for custom catering options.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
