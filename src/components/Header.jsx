import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, BarChart, Users, Mail, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Set initial active link based on current path when component mounts
  useEffect(() => {
    const handleRouteChange = () => {
      const currentPath = window.location.pathname;
      setActiveLink(currentPath === "" ? "/" : currentPath);
    };
    
    // Initial check
    handleRouteChange();
    
    // Listen for popstate events (browser back/forward buttons)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  // Handle scroll effect with threshold and easing
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu with animation
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdown if open
    if (isDropdownOpen) setIsDropdownOpen(false);
  };
  
  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // NavLink component with animations and active state
  const NavLink = ({ href, icon, text, hasDropdown = false }) => {
    const isActive = activeLink === href;
    
    return (
      <li className="relative">
        <a 
          href={href}
          className={`group flex items-center transition-all duration-300 ${
            isActive ? 'text-blue-600 font-medium' : 'text-blue-600 hover:text-blue-800'
          }`}
          onClick={(e) => {
            if (hasDropdown) {
              e.preventDefault();
              toggleDropdown();
            } else {
              // Update the active link state
              setActiveLink(href);
              
              // Close mobile menu if open
              if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
              }
            }
          }}
        >
          <span className="relative overflow-hidden flex items-center">
            <span className="text-blue-600">{icon}</span>
            <span className="ml-1">{text}</span>
            {hasDropdown && (
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            )}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 transform ${
              isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </span>
        </a>
      </li>
    );
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-md py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with animation */}
        <div className="flex items-center space-x-2">
          <h1 className="text-blue-600 text-xl font-bold relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-500">
              CBG II Innovate4DigiJob
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-500 group-hover:w-full transition-all duration-700"></span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <NavLink href="/" icon={<Home className="w-5 h-5 mr-1" />} text="Home" />
            <NavLink href="/About" icon={<Info className="w-5 h-5 mr-1" />} text="About" />
            <NavLink href="/activities" icon={<Briefcase className="w-5 h-5 mr-1" />} text="Activities" hasDropdown={true} />
            <NavLink href="/impact" icon={<BarChart className="w-5 h-5 mr-1" />} text="Impact" />
            <NavLink href="/team" icon={<Users className="w-5 h-5 mr-1" />} text="Team" />
            <NavLink href="/contact" icon={<Mail className="w-5 h-5 mr-1" />} text="Contact" />
          </ul>
          
          {/* Activities Dropdown Menu */}
          <div 
            className={`absolute mt-2 py-2 bg-white rounded-lg shadow-xl transition-all duration-300 transform origin-top min-w-[200px] ${
              isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <a href="/workshops" className="block px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors duration-200">
              Workshops
            </a>
            <a href="/trainings" className="block px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors duration-200">
              Trainings
            </a>
            <a href="/events" className="block px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors duration-200">
              Events
            </a>
            <a href="/programs" className="block px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors duration-200">
              Programs
            </a>
          </div>
        </nav>

        {/* Join Us Button */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a 
            href="/join" 
            className="flex items-center bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            <span>Join Us</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button with animation */}
        <button 
          className="lg:hidden text-blue-600 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-6">
            <span 
              className={`absolute h-0.5 w-full bg-blue-600 transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}
            ></span>
            <span 
              className={`absolute h-0.5 bg-blue-600 transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-full top-3'
              }`}
            ></span>
            <span 
              className={`absolute h-0.5 w-full bg-blue-600 transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation with slide and fade animation */}
      <div 
        className={`lg:hidden bg-white transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 shadow-xl border-t border-gray-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <NavLink href="/" icon={<Home className="w-5 h-5 mr-1" />} text="Home" />
            <NavLink href="/About" icon={<Info className="w-5 h-5 mr-1" />} text="About" />
            
            {/* Collapsible Activities Section */}
            <li className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center w-full text-blue-600 hover:text-blue-800 transition-all duration-300"
              >
                <Briefcase className="w-5 h-5 mr-1" />
                <span className="ml-1">Activities</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`mt-2 pl-6 border-l-2 border-blue-100 space-y-2 transition-all duration-300 ${
                isDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <a href="/workshops" className="block py-1 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  Workshops
                </a>
                <a href="/trainings" className="block py-1 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  Trainings
                </a>
                <a href="/events" className="block py-1 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  Events
                </a>
                <a href="/programs" className="block py-1 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  Programs
                </a>
              </div>
            </li>
            
            <NavLink href="/impact" icon={<BarChart className="w-5 h-5 mr-1" />} text="Impact" />
            <NavLink href="/team" icon={<Users className="w-5 h-5 mr-1" />} text="Team" />
            <NavLink href="#contact" icon={<Mail className="w-5 h-5 mr-1" />} text="Contact" />
            
            <li className="pt-4">
              <a 
                href="/join" 
                className="inline-flex items-center bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Join Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </li>
          </ul>
          
          {/* Contact Quick Links */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2">Get in touch</p>
            <div className="flex space-x-4">
              <a href="mailto:info@innovate4digijob.rw" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:+250780000000" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="https://twitter.com/innovate4digi" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Search Bar - animated appearance on scroll */}
      <div className={`hidden lg:block bg-white border-t border-gray-100 transition-all duration-500 ${
        isScrolled ? 'max-h-16 opacity-100 py-2' : 'max-h-0 opacity-0 py-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4">
          <div className="relative max-w-lg mx-auto">
            <input 
              type="text" 
              placeholder="Search for resources, trainings, or events..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}