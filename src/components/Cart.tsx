import { useState } from "react";
import { X, Plus, Minus, MessageCircle, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { CheckoutForm } from "@/components/CheckoutForm";
import { EmptyCart } from "@/components/EmptyCart";
import { AnimatedCartItem } from "@/components/AnimatedCartItems";
import { LazyImage } from "@/components/LazyImage";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const { 
    items, 
    cateringItems, 
    chefBookings, 
    updateQuantity, 
    updateCateringQuantity,
    removeItem, 
    removeCateringItem,
    removeChefBooking,
    updateNotes, 
    updateCateringNotes,
    updateChefNotes,
    totalPrice, 
    clearCart 
  } = useCart();
  
  const [globalNotes, setGlobalNotes] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [animatedItem, setAnimatedItem] = useState<string | null>(null);

  const formatOrderForWhatsApp = (customerInfo: {
    name: string;
    phone: string;
    location: string;
  }) => {
    let message = "🍽️ *New Order from The Nosh*\n\n";
    
    message += `*Customer Details:*\n`;
    message += `👤 Name: ${customerInfo.name}\n`;
    message += `📞 Phone: ${customerInfo.phone}\n`;
    message += `📍 Location: ${customerInfo.location}\n\n`;
    
    if (items.length > 0) {
      message += `*Regular Items:*\n`;
      items.forEach((item, index) => {
        const emoji = getItemEmoji(item.name);
        message += `${index + 1}. ${emoji} *${item.name}*\n`;
        message += `   Quantity: ${item.quantity}x\n`;
        message += `   Price: $${(item.price * item.quantity).toFixed(2)}\n`;
        if (item.notes) {
          message += `   Notes: ${item.notes}\n`;
        }
        message += "\n";
      });
    }

    if (cateringItems.length > 0) {
      message += `*Catering Items:*\n`;
      cateringItems.forEach((item, index) => {
        message += `${index + 1}. 🍽️ *${item.name}*\n`;
        message += `   Quantity: ${item.quantity} pieces\n`;
        message += `   Price: $${item.totalPrice.toFixed(2)}\n`;
        if (item.notes) {
          message += `   Notes: ${item.notes}\n`;
        }
        message += "\n";
      });
    }

    if (chefBookings.length > 0) {
      message += `*Chef Bookings:*\n`;
      chefBookings.forEach((chef, index) => {
        message += `${index + 1}. 👨‍🍳 *${chef.name}*\n`;
        message += `   Experience: ${chef.experience}\n`;
        message += `   Price: $${chef.price.toFixed(2)}\n`;
        if (chef.notes) {
          message += `   Notes: ${chef.notes}\n`;
        }
        message += "\n";
      });
    }
    
    const deliveryFee = 3;
    const totalWithDelivery = totalPrice + deliveryFee;
    
    message += `📋 *Order Summary:*\n`;
    message += `💰 Subtotal: $${totalPrice.toFixed(2)}\n`;
    message += `🚚 Delivery Fee: $${deliveryFee.toFixed(2)}\n`;
    message += `💵 *Total: $${totalWithDelivery.toFixed(2)}*\n\n`;
    
    if (globalNotes) {
      message += `📝 *Special Instructions:*\n${globalNotes}\n\n`;
    }
    
    message += "Thank you for your order! 🙏";
    
    return encodeURIComponent(message);
  };

  const getItemEmoji = (itemName: string): string => {
    if (itemName.toLowerCase().includes('burger')) return '🍔';
    if (itemName.toLowerCase().includes('pizza')) return '🍕';
    if (itemName.toLowerCase().includes('fries')) return '🍟';
    if (itemName.toLowerCase().includes('drink') || itemName.toLowerCase().includes('cola')) return '🥤';
    return '🍽️';
  };

  const handleCheckoutSubmit = (customerInfo: {
    name: string;
    phone: string;
    location: string;
  }) => {
    const phoneNumber = "96176054688";
    const message = formatOrderForWhatsApp(customerInfo);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
    setShowCheckout(false);
  };

  if (!isOpen) return null;

  if (showCheckout) {
    return (
      <div className="fixed inset-0 z-50 bg-background">
        <CheckoutForm
          total={totalPrice}
          onSubmit={handleCheckoutSubmit}
          onBack={() => setShowCheckout(false)}
        />
      </div>
    );
  }

  const hasItems = items.length > 0 || cateringItems.length > 0 || chefBookings.length > 0;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl border-l border-border flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border bg-card flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Receipt className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Your Cart</h2>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {!hasItems ? (
              <EmptyCart />
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {/* Regular Items */}
                {items.map((item) => (
                  <Card key={item.id} className="bg-card border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="relative group flex-shrink-0">
                          <LazyImage
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h3 className="font-semibold text-card-foreground mb-1 flex items-center text-sm sm:text-base">
                              {getItemEmoji(item.name)} {item.name}
                            </h3>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeItem(item.id)}
                              className="text-destructive hover:text-destructive/80 hover:bg-destructive/10 -mt-1 p-1"
                            >
                              <X className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                          <p className="text-foreground font-bold mb-2 sm:mb-3 text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</p>
                          
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-6 w-6 sm:h-8 sm:w-8 p-0 border-border hover:bg-accent"
                            >
                              <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                            </Button>
                            <span className="mx-1 sm:mx-2 font-semibold min-w-[16px] sm:min-w-[20px] text-center text-sm sm:text-base">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 sm:h-8 sm:w-8 p-0 border-border hover:bg-accent"
                            >
                              <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                            </Button>
                          </div>

                          <Textarea
                            placeholder="Special notes"
                            value={item.notes || ""}
                            onChange={(e) => updateNotes(item.id, e.target.value)}
                            className="bg-background border-border text-xs sm:text-sm resize-none"
                            rows={2}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Catering Items */}
                {cateringItems.map((item) => (
                  <Card key={`catering-${item.id}`} className="bg-card border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="relative group flex-shrink-0">
                          <LazyImage
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h3 className="font-semibold text-card-foreground mb-1 flex items-center text-sm sm:text-base">
                              🍽️ {item.name} <span className="text-xs text-muted-foreground ml-2">(Catering)</span>
                            </h3>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeCateringItem(item.id)}
                              className="text-destructive hover:text-destructive/80 hover:bg-destructive/10 -mt-1 p-1"
                            >
                              <X className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                          <p className="text-foreground font-bold mb-2 sm:mb-3 text-sm sm:text-base">${item.totalPrice.toFixed(2)} ({item.quantity} pieces)</p>
                          
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateCateringQuantity(item.id, item.quantity - 1)}
                              className="h-6 w-6 sm:h-8 sm:w-8 p-0 border-border hover:bg-accent"
                            >
                              <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                            </Button>
                            <span className="mx-1 sm:mx-2 font-semibold min-w-[16px] sm:min-w-[20px] text-center text-sm sm:text-base">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateCateringQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 sm:h-8 sm:w-8 p-0 border-border hover:bg-accent"
                            >
                              <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                            </Button>
                          </div>

                          <Textarea
                            placeholder="Special notes"
                            value={item.notes || ""}
                            onChange={(e) => updateCateringNotes(item.id, e.target.value)}
                            className="bg-background border-border text-xs sm:text-sm resize-none"
                            rows={2}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Chef Bookings */}
                {chefBookings.map((chef) => (
                  <Card key={`chef-${chef.id}`} className="bg-card border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="relative group flex-shrink-0">
                          <LazyImage
                            src={chef.image}
                            alt={chef.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h3 className="font-semibold text-card-foreground mb-1 flex items-center text-sm sm:text-base">
                              👨‍🍳 {chef.name} <span className="text-xs text-muted-foreground ml-2">(Chef)</span>
                            </h3>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeChefBooking(chef.id)}
                              className="text-destructive hover:text-destructive/80 hover:bg-destructive/10 -mt-1 p-1"
                            >
                              <X className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                          <p className="text-muted-foreground text-xs mb-1">{chef.experience}</p>
                          <p className="text-foreground font-bold mb-2 sm:mb-3 text-sm sm:text-base">${chef.price.toFixed(2)}/session</p>

                          <Textarea
                            placeholder="Special requests for the chef"
                            value={chef.notes || ""}
                            onChange={(e) => updateChefNotes(chef.id, e.target.value)}
                            className="bg-background border-border text-xs sm:text-sm resize-none"
                            rows={2}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Global Notes */}
                <Card className="bg-card border-border">
                  <CardContent className="p-3 sm:p-4">
                    <label className="block text-xs sm:text-sm font-medium text-card-foreground mb-2 flex items-center">
                      📝 Order Notes
                    </label>
                    <Textarea
                      placeholder="Any special instructions for your entire order..."
                      value={globalNotes}
                      onChange={(e) => setGlobalNotes(e.target.value)}
                      className="bg-background border-border text-xs sm:text-sm"
                      rows={3}
                    />
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Footer - Fixed at bottom */}
          {hasItems && (
            <div className="border-t border-border p-4 sm:p-6 bg-card flex-shrink-0">
              <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center justify-between text-muted-foreground text-sm sm:text-base">
                  <span>💰 Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground text-sm sm:text-base">
                  <span>🚚 Delivery Fee:</span>
                  <span>$3.00</span>
                </div>
                <div className="flex items-center justify-between text-lg sm:text-xl font-bold text-foreground pt-2 border-t border-border">
                  <span>💵 Total:</span>
                  <span>${(totalPrice + 3).toFixed(2)}</span>
                </div>
              </div>
              <Button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Animation Component */}
      <AnimatedCartItem
        isVisible={!!animatedItem}
        itemName={animatedItem || ""}
        onAnimationComplete={() => setAnimatedItem(null)}
      />
    </>
  );
};
