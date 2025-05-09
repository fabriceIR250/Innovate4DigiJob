import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Counter component for animating numbers
const AnimatedCounter = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);
  
  // Set up intersection observer to trigger animation when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  
  // Animate the counter when in view
  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Apply easing function for a nicer animation
      const easeOutQuad = t => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, end, duration]);
  
  const displayValue = isInView ? count : 0;
  const suffix = end.toString().includes('+') ? '+' : '';
  
  return (
    <div className="flex flex-col" ref={counterRef}>
      <span className="text-3xl font-bold text-blue-600">
        {displayValue}{suffix}
      </span>
      <span className="text-blue-700">{label}</span>
    </div>
  );
};

export default function Hero() {
    const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 py-20 md:py-28 lg:py-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-200 opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-blue-300 opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-400 opacity-10 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content with Animations */}
          <div className={`lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full font-medium text-sm animate-pulse">
              Digital Skills Initiative
            </div>
            
            {/* Main Heading with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                Empowering Youth Through Digital Innovation
              </span>
            </h1>
            
            {/* Subheading with Animation Delay */}
            <p className={`text-lg md:text-xl text-blue-700 mb-8 max-w-lg transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Transforming education and job creation with technology and creativity in Rubavu, Rwanda.
            </p>
            
            {/* Stats with Animation Delay and Counter Animation */}
            <div className={`flex flex-wrap gap-8 mb-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <AnimatedCounter end={100} duration={2000} label="Students Trained" />
              <AnimatedCounter end={10} duration={1500} label="Digital Projects" />
              <AnimatedCounter end={3} duration={1800} label="Job Placement" />
            </div>
            
            {/* Buttons with Hover Animations */}
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="group flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg" onClick={() => navigate('/joinUs')}>
                Join Us
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group flex items-center bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg" onClick={() => navigate('/activities')}>
                Our Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group flex items-center bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border-2 border-blue-600 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg" onClick={() => navigate('/contact')}>
                <Users className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Image with Animation */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="hidden md:block absolute -top-4 -left-4 w-12 h-12 bg-blue-200 rounded-lg transform rotate-12"></div>
              <div className="hidden md:block absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-lg transform -rotate-12"></div>
              
              {/* Main image with hover effect */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-200 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/5e99665d59916e47fbab549e/1626372841603-WKB3UW6CCDZX40CMLXFR/WikiAfrica_Schools_training_African_School_for_Excellence_%283%29.jpg" 
                  alt="Students engaged in digital learning" 
                  className="w-full object-cover h-full rounded-lg transition-transform duration-7000 hover:scale-110"
                />
                
                {/* Caption */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-white text-lg font-medium">Digital skills workshop with students in Rubavu</p>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 md:top-auto md:-right-10 md:bottom-20 bg-white rounded-xl shadow-lg p-3 transform rotate-6 animate-bounce-slow">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                  Join Now!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}