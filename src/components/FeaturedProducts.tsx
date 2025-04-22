
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

// In a real app, this would come from an API
const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Elegant Rose Bouquet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1561181286-d5c90c4f2382?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
    category: "Bouquets"
  },
  {
    id: "2",
    name: "Spring Sunshine Mix",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Arrangements"
  },
  {
    id: "3",
    name: "Peaceful Lily Plant",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80",
    category: "Plants"
  },
  {
    id: "4",
    name: "Romantic Red Roses",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1494336934272-f0426edf0a94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    category: "Roses"
  }
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState(FEATURED_PRODUCTS);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Bouquets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-card border border-border animate-pulse">
              <div className="aspect-square bg-muted"></div>
              <div className="p-4">
                <div className="h-5 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Featured Bouquets</h2>
        <a href="/products" className="btn-outline mt-4 md:mt-0">
          View All Products
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="animate-fade-in">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
