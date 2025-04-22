
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-bloom-500 mb-4">
              <span className="text-3xl">🌸</span>
              <span>BloomCart</span>
            </Link>
            <p className="text-muted-foreground">
              Beautiful flowers for every occasion, delivered with care and love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground hover:text-bloom-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-foreground hover:text-bloom-500 transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-foreground hover:text-bloom-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-foreground hover:text-bloom-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=bouquets" className="text-foreground hover:text-bloom-500 transition-colors">Bouquets</Link></li>
              <li><Link to="/products?category=roses" className="text-foreground hover:text-bloom-500 transition-colors">Roses</Link></li>
              <li><Link to="/products?category=arrangements" className="text-foreground hover:text-bloom-500 transition-colors">Arrangements</Link></li>
              <li><Link to="/products?category=plants" className="text-foreground hover:text-bloom-500 transition-colors">Plants</Link></li>
              <li><Link to="/products?category=gifts" className="text-foreground hover:text-bloom-500 transition-colors">Gifts</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: hello@bloomcart.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: 9am - 6pm, Mon - Fri</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} BloomCart. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-foreground hover:text-bloom-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-foreground hover:text-bloom-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-foreground hover:text-bloom-500 transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
