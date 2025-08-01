import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, User, Phone, MapPin, CheckCircle, ArrowLeft, Sparkles, Lock, Shield, Clock, Edit3, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CheckoutFormProps {
  total: number;
  isChefOnlyOrder?: boolean;
  onSubmit: (customerInfo: {
    name: string;
    phone: string;
    location: string;
  }) => void;
  onBack: () => void;
}

export const CheckoutForm = ({ total, isChefOnlyOrder = false, onSubmit, onBack }: CheckoutFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deliveryFee = 3;
  const totalWithDelivery = total + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && location) {
      setIsSubmitting(true);
      // Add a small delay for better UX
      setTimeout(() => {
        onSubmit({ name, phone, location });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-8 animate-fade-in">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-scale-in">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-primary mr-2 animate-pulse" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {isChefOnlyOrder ? 'Book Your Chef' : 'Complete Your Order'}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Order Form */}
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-2xl animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <User className="h-5 w-5 mr-2" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-card-foreground flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Enter your full name"
                      className="bg-background/50 border-border text-foreground mt-2 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-card-foreground flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+961 XX XXX XXX"
                      className="bg-background/50 border-border text-foreground mt-2 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-card-foreground flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {isChefOnlyOrder ? 'Event Location' : 'Delivery Address'}
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      placeholder={isChefOnlyOrder ? "Event venue address" : "Your delivery address"}
                      className="bg-background/50 border-border text-foreground mt-2 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!name || !phone || !location || isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      <>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {isChefOnlyOrder ? 'Book Chef' : 'Place Order'}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Security Badges */}
            <Card className="bg-card/60 backdrop-blur-sm border-border animate-scale-in">
              <CardContent className="p-4">
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Lock className="h-4 w-4 mr-1 text-green-500" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1 text-blue-500" />
                    <span>Safe Checkout</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Order Summary & Details */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-2xl animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center text-card-foreground">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Order Summary
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Here's what you're craving! You can tweak anything before we get cooking. 🧑‍🍳
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isChefOnlyOrder && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal:</span>
                      <span className="font-medium">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Delivery Fee:</span>
                      <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-2">
                      <div className="flex items-center justify-between text-lg font-bold text-primary">
                        <span>Total:</span>
                        <span>${totalWithDelivery.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
                <Button
                  onClick={onBack}
                  variant="outline"
                  size="sm"
                  className="w-full border-border text-card-foreground hover:bg-accent"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Order
                </Button>
              </CardContent>
            </Card>

            {/* Delivery Time */}
            {!isChefOnlyOrder && (
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 animate-scale-in">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Delivery Time Estimate</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your delicious meal will be at your door in around 30–40 minutes! 🛵💨
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Chef Service Info */}
            {isChefOnlyOrder && (
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 animate-scale-in">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Chef Service</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our professional chef will arrive at your location and prepare an amazing meal experience! 👨‍🍳✨
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Back to Cart Button */}
        <div className="text-center mt-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            ← Back to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
