
import { Link } from "react-router-dom";

// In a real app, this would come from an API
const CATEGORIES = [
  {
    id: "bouquets",
    name: "Bouquets",
    image: "https://images.unsplash.com/photo-1593016605825-8adaa0d71811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    count: 24
  },
  {
    id: "roses",
    name: "Roses",
    image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    count: 18
  },
  {
    id: "arrangements",
    name: "Arrangements",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    count: 15
  },
  {
    id: "plants",
    name: "Plants",
    image: "https://images.unsplash.com/photo-1620127252536-03bcc18261a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    count: 12
  }
];

const Categories = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map(category => (
          <Link 
            key={category.id}
            to={`/products?category=${category.id}`}
            className="group relative overflow-hidden rounded-xl aspect-[4/5] card-hover"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
              <p className="text-sm opacity-80">{category.count} products</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
