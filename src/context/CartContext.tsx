import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  notes?: string;
  extras?: string[];
}

export interface CateringItem {
  id: string;
  name: string;
  pricePerPiece: number;
  image: string;
  quantity: number;
  totalPrice: number;
  notes?: string;
}

export interface ChefBooking {
  id: string;
  name: string;
  price: number;
  image: string;
  experience: string;
  description: string;
  notes?: string;
}

interface CartContextType {
  items: CartItem[];
  cateringItems: CateringItem[];
  chefBookings: ChefBooking[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  addCateringItem: (item: CateringItem) => void;
  addChef: (chef: Omit<ChefBooking, 'notes'>) => void;
  removeItem: (id: string) => void;
  removeCateringItem: (id: string) => void;
  removeChefBooking: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateCateringQuantity: (id: string, quantity: number) => void;
  updateNotes: (id: string, notes: string) => void;
  updateCateringNotes: (id: string, notes: string) => void;
  updateChefNotes: (id: string, notes: string) => void;
  clearCart: () => void;
  totalPrice: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cateringItems, setCateringItems] = useState<CateringItem[]>([]);
  const [chefBookings, setChefBookings] = useState<ChefBooking[]>([]);

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const addCateringItem = (newItem: CateringItem) => {
    setCateringItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + newItem.quantity;
        return prev.map(item =>
          item.id === newItem.id
            ? { 
                ...item, 
                quantity: newQuantity,
                totalPrice: item.pricePerPiece * newQuantity
              }
            : item
        );
      }
      return [...prev, newItem];
    });
  };

  const addChef = (newChef: Omit<ChefBooking, 'notes'>) => {
    setChefBookings(prev => {
      const existingChef = prev.find(chef => chef.id === newChef.id);
      if (existingChef) {
        return prev; // Don't add duplicate chef bookings
      }
      return [...prev, { ...newChef, notes: '' }];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const removeCateringItem = (id: string) => {
    setCateringItems(prev => prev.filter(item => item.id !== id));
  };

  const removeChefBooking = (id: string) => {
    setChefBookings(prev => prev.filter(chef => chef.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const updateCateringQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeCateringItem(id);
      return;
    }
    setCateringItems(prev =>
      prev.map(item =>
        item.id === id 
          ? { 
              ...item, 
              quantity,
              totalPrice: item.pricePerPiece * quantity
            } 
          : item
      )
    );
  };

  const updateNotes = (id: string, notes: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, notes } : item
      )
    );
  };

  const updateCateringNotes = (id: string, notes: string) => {
    setCateringItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, notes } : item
      )
    );
  };

  const updateChefNotes = (id: string, notes: string) => {
    setChefBookings(prev =>
      prev.map(chef =>
        chef.id === id ? { ...chef, notes } : chef
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setCateringItems([]);
    setChefBookings([]);
  };

  const totalPrice = 
    items.reduce((sum, item) => sum + (item.price * item.quantity), 0) +
    cateringItems.reduce((sum, item) => sum + item.totalPrice, 0) +
    chefBookings.reduce((sum, chef) => sum + chef.price, 0);
    
  const itemCount = 
    items.reduce((sum, item) => sum + item.quantity, 0) +
    cateringItems.reduce((sum, item) => sum + item.quantity, 0) +
    chefBookings.length;

  return (
    <CartContext.Provider value={{
      items,
      cateringItems,
      chefBookings,
      addItem,
      addCateringItem,
      addChef,
      removeItem,
      removeCateringItem,
      removeChefBooking,
      updateQuantity,
      updateCateringQuantity,
      updateNotes,
      updateCateringNotes,
      updateChefNotes,
      clearCart,
      totalPrice,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
