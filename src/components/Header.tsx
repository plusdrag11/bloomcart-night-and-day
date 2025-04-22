
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Heart, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For demo purposes - simulate cart count
  useEffect(() => {
    // In a real app, this would come from a cart context or store
    const savedCart = localStorage.getItem("bloomcart");
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        setCartCount(cartItems.length);
      } catch (e) {
        console.error("Error parsing cart data", e);
      }
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold text-bloom-500"
          >
            <span className="text-3xl">🌸</span>
            <span>BloomCart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-bloom-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-foreground hover:text-bloom-500 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-bloom-500 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-bloom-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side - Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link
              to="/wishlist"
              className="relative p-2 text-foreground hover:text-bloom-500 transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={24} />
            </Link>
            
            <Link
              to="/cart"
              className="relative p-2 text-foreground hover:text-bloom-500 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-bloom-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <Link
              to="/login"
              className="relative p-2 text-foreground hover:text-bloom-500 transition-colors"
              aria-label="User Account"
            >
              <User size={24} />
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-bloom-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-foreground hover:text-bloom-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-bloom-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-bloom-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
