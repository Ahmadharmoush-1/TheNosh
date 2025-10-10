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

  // ✅ FIXED EMOJI METHOD USING UNICODE ESCAPES
  const getItemEmoji = (itemName: string): string => {
    const lower = itemName.toLowerCase();
    if (lower.includes('burger')) return '\u{1F354}'; // 🍔
    if (lower.includes('pizza')) return '\u{1F355}'; // 🍕
    if (lower.includes('fries')) return '\u{1F35F}'; // 🍟
    if (lower.includes('drink') || lower.includes('cola')) return '\u{1F964}'; // 🥤
    return '\u{1F37D}'; // 🍽️
  };

  const formatOrderForWhatsApp = (customerInfo: {
    name: string;
    phone: string;
    location: string;
  }) => {
    const isChefOnlyOrder = chefBookings.length > 0 && items.length === 0 && cateringItems.length === 0;
    
    let message = " *New Order from The Nosh*\n\n";
    
    message += `*Customer Details:*\n`;
    message += ` Name: ${customerInfo.name}\n`;
    message += ` Phone: ${customerInfo.phone}\n`;
    message += ` Location: ${customerInfo.location}\n\n`;
    
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
        message += `${index + 1}.  *${item.name}*\n`;
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
        message += `${index + 1}.  *${chef.name}*\n`;
        message += `   Experience: ${chef.experience}\n`;
        if (!isChefOnlyOrder) {
          message += `   Price: $${chef.price.toFixed(2)}\n`;
        }
        if (chef.notes) {
          message += `   Notes: ${chef.notes}\n`;
        }
        message += "\n";
      });
    }
    
   if (!isChefOnlyOrder) {
      message += ` *Order Summary:*\n`;
      message += ` Subtotal: $${totalPrice.toFixed(2)}\n`;
      message += ` Delivery Fee: To be confirmed based on your location\n`;
      message += ` *Total (excluding delivery): $${totalPrice.toFixed(2)}*\n\n`;
    }

    if (globalNotes) {
      message += ` *Special Instructions:*\n${globalNotes}\n\n`;
    }
    
    message += "Thank you for your order! ";
    
    return encodeURIComponent(message);
  };

  const handleCheckoutSubmit = (customerInfo: {
    name: string;
    phone: string;
    location: string;
  }) => {
    const phoneNumber = "96176054688";
    const message = formatOrderForWhatsApp(customerInfo);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
    clearCart();
    onClose();
    setShowCheckout(false);
  };

  if (!isOpen) return null;

  const hasItems = items.length > 0 || cateringItems.length > 0 || chefBookings.length > 0;
  const isChefOnlyOrder = chefBookings.length > 0 && items.length === 0 && cateringItems.length === 0;

  if (showCheckout) {
    return (
      <div className="fixed inset-0 z-50 bg-background">
        <CheckoutForm
          total={totalPrice}
          isChefOnlyOrder={isChefOnlyOrder}
          onSubmit={handleCheckoutSubmit}
          onBack={() => setShowCheckout(false)}
        />
      </div>
    );
  }

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
                            {/* ✅ WRAPPED EMOJI */}
                            <h3 className="font-semibold text-card-foreground mb-1 flex items-center text-sm sm:text-base">
                              <span className="emoji mr-1">{getItemEmoji(item.name)}</span> {item.name}
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
                          <p className="text-foreground font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          
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

                {/* ... keep rest of your code unchanged ... */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
