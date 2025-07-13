import { Clock, Heart, Star, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is crafted with passion and the finest ingredients",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Hot food delivered to your door in 20 minutes or less",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "We never compromise on quality and freshness",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free delivery on orders over $25 in our delivery area",
  },
];

export const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ color: "#1E1A4B" }}
          >
            Why Choose The Nosh?
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We're committed to delivering exceptional food experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="text-sm font-semibold text-center leading-tight mb-4">
                <feature.icon className="h-8 w-8 text-[#1E1A4B]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1E1A4B]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
