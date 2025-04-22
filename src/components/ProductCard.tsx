
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    // In a real app, we would update the user's wishlist in a context or database
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // In a real app, add product to cart via context/state management
    const cart = JSON.parse(localStorage.getItem("bloomcart") || "[]");
    const productInCart = cart.find((item: any) => item.id === id);
    
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.push({ id, name, price, image, quantity: 1 });
    }
    
    localStorage.setItem("bloomcart", JSON.stringify(cart));
    
    // Show notification (would be better with a toast component)
    alert(`${name} added to cart!`);
  };

  return (
    <div className="product-card group">
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button
              onClick={handleWishlist}
              className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                size={20}
                className={isWishlisted ? "fill-bloom-500 text-bloom-500" : ""}
              />
            </button>
          </div>
          
          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>

          {/* Add to Cart Button - Appears on Hover */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={handleAddToCart}
              className="btn-bloom flex items-center gap-2"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-bloom-500 font-semibold mt-1">{formattedPrice}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
