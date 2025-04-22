
import { useState } from "react";

// In a real app, this would come from an API
const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    role: "Regular Customer",
    content: "The flower arrangements from BloomCart are simply stunning. I ordered a bouquet for my mom's birthday and she couldn't stop raving about how beautiful they were. The flowers stayed fresh for almost two weeks!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://i.pravatar.cc/150?img=3",
    role: "Event Planner",
    content: "As an event planner, I need reliable vendors. BloomCart has never let me down. Their timely delivery and gorgeous arrangements make them my go-to florist for all client events.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=5",
    role: "Bride",
    content: "BloomCart created the most breathtaking wedding flowers I could have imagined. From my bridal bouquet to the table centerpieces, everything was perfect and exactly what I envisioned.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "https://i.pravatar.cc/150?img=8",
    role: "Corporate Client",
    content: "We use BloomCart for all our office arrangements and client gifts. Their service is exceptional, and the quality of their flowers consistently impresses everyone who visits our headquarters.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-16 bg-bloom-50 dark:bg-background">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        {/* Desktop Testimonials */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-card rounded-xl p-6 shadow-sm border border-border flex flex-col h-full">
              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-bloom-500 fill-bloom-500" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <p className="italic mb-6">"{testimonial.content}"</p>
              </div>
              
              {/* Customer */}
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-bloom-200 dark:border-bloom-800"
                />
                <div className="ml-3">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Testimonial Carousel */}
        <div className="md:hidden">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            {/* Rating */}
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < TESTIMONIALS[activeIndex].rating ? "text-bloom-500 fill-bloom-500" : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              ))}
            </div>
            
            {/* Content */}
            <p className="italic mb-6">"{TESTIMONIALS[activeIndex].content}"</p>
            
            {/* Customer */}
            <div className="flex items-center mt-4">
              <img
                src={TESTIMONIALS[activeIndex].avatar}
                alt={TESTIMONIALS[activeIndex].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-bloom-200 dark:border-bloom-800"
              />
              <div className="ml-3">
                <p className="font-semibold">{TESTIMONIALS[activeIndex].name}</p>
                <p className="text-sm text-muted-foreground">{TESTIMONIALS[activeIndex].role}</p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === activeIndex ? "bg-bloom-500" : "bg-secondary-foreground/30"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
