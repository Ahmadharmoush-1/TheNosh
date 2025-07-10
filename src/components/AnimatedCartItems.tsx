import { useState, useEffect } from "react";

interface AnimatedCartItemProps {
  isVisible: boolean;
  itemName: string;
  onAnimationComplete: () => void;
}

export const AnimatedCartItem = ({ isVisible, itemName, onAnimationComplete }: AnimatedCartItemProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
        onAnimationComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onAnimationComplete]);

  if (!showAnimation) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div className="animate-[fadeInScale_1s_ease-out] bg-white text-black px-4 py-2 rounded-lg shadow-lg border">
        <span className="text-sm font-semibold">✨ {itemName} added to cart!</span>
      </div>
    </div>
  );
};
