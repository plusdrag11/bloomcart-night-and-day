
import { useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

// In a real app, this would come from an API
const ALL_PRODUCTS = [
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
  },
  {
    id: "5",
    name: "Sunflower Delight",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1551123287-d25c93a08cf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Arrangements"
  },
  {
    id: "6",
    name: "Delicate Orchid",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1566207462754-97c89a5056a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Plants"
  },
  {
    id: "7",
    name: "Pink Perfection",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1561848355-890d054dc55a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Bouquets"
  },
  {
    id: "8",
    name: "White Elegance",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80",
    category: "Roses"
  }
];

const CATEGORIES = ["All", "Bouquets", "Roses", "Arrangements", "Plants"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("featured");

  // Filter products by category and price range
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0; // featured - no specific sort
  });

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-bloom-50 dark:bg-bloom-900/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Shop Flowers</h1>
          <p className="text-lg text-muted-foreground mt-2">Find the perfect bouquet for any occasion</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters (Simplified for this demo) */}
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Categories</h3>
              <ul className="space-y-2">
                {CATEGORIES.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left py-1.5 px-3 rounded-md transition-colors ${
                        activeCategory === category
                          ? "bg-bloom-100 text-bloom-600 dark:bg-bloom-900/30 dark:text-bloom-400"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-lg mb-3">Price Range</h3>
              <div className="px-3 space-y-4">
                <div className="flex justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer dark:bg-secondary/30"
                />
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-grow">
            {/* Sort Controls */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {sortedProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-1.5"
              >
                <option value="featured">Featured</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="animate-fade-in">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {/* No Products Found */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No products match your filters</p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setPriceRange([0, 100]);
                  }}
                  className="btn-outline mt-4"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
