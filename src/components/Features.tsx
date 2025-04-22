
import { Truck, Clock, RefreshCcw, ThumbsUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-10 h-10 text-bloom-500" />,
      title: "Fast Delivery",
      description: "Same-day delivery for orders placed before 2 PM."
    },
    {
      icon: <Clock className="w-10 h-10 text-bloom-500" />,
      title: "Fresh Flowers",
      description: "Hand-picked daily for maximum freshness and longevity."
    },
    {
      icon: <RefreshCcw className="w-10 h-10 text-bloom-500" />,
      title: "7-Day Freshness",
      description: "Our flowers stay fresh longer or we'll replace them for free."
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-bloom-500" />,
      title: "Satisfaction Guaranteed",
      description: "Love your bouquet or receive a full refund."
    }
  ];

  return (
    <section className="py-16 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose BloomCart?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-secondary/50 dark:bg-secondary/30 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
