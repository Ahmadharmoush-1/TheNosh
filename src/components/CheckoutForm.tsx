import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";

interface CheckoutFormProps {
  total: number;
  onSubmit: (customerInfo: {
    name: string;
    phone: string;
    location: string;
  }) => void;
  onBack: () => void;
}

export const CheckoutForm = ({ total, onSubmit, onBack }: CheckoutFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const deliveryFee = 3;
  const totalWithDelivery = total + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && location) {
      onSubmit({ name, phone, location });
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-card-foreground">
              Checkout
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-card-foreground">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your full name"
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-card-foreground">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+961 XX XXX XXX"
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-card-foreground">Delivery Location</Label>
                <Input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  placeholder="Your address"
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery Fee:</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-card-foreground">
                  <span>Total:</span>
                  <span>${totalWithDelivery.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  onClick={onBack}
                  variant="outline"
                  className="flex-1 border-border text-card-foreground hover:bg-accent"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Place Order
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
