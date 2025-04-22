
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-bloom-500/80 to-bloom-700/80 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Flower arrangement" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative py-16 px-8 md:py-24 md:px-16 text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Get exclusive deals, flower care tips, and be the first to know about new seasonal collections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 flex-grow focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-bloom-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
