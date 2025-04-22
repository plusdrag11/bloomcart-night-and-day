
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative h-[80vh] bg-gradient-to-r from-bloom-50 to-secondary dark:from-bloom-950 dark:to-black overflow-hidden">
      {/* Background decoration - flower petals */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-bloom-200 dark:bg-bloom-800 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-bloom-100 dark:bg-bloom-900 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 rounded-full bg-bloom-300 dark:bg-bloom-700 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="relative z-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Beautiful <span className="text-bloom-500">Blooms</span> for Every Occasion
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Discover our handcrafted flower arrangements, perfect for celebrating life's special moments or brightening someone's day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-bloom">
                Shop Now
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10 hidden md:block animate-slide-in">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" 
                alt="Beautiful flower bouquet" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-bloom-500 text-white p-6 rounded-xl shadow-xl animate-scale-in">
              <p className="font-semibold text-lg">Fresh Daily</p>
              <p className="text-sm opacity-80">Hand-picked bouquets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
