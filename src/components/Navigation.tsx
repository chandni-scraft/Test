
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/workshops", label: "Workshops" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#2b2b2b] backdrop-blur-lg border-b border-gray-600 sticky top-0 z-50 shadow-sm animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-105">
            <img 
              src="https://res.cloudinary.com/dyiso4ohk/image/upload/v1751895702/IMG_7286_l6lr69.png" 
              alt="SurgeAhead Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-medium font-inter transition-all duration-300 hover:bg-gray-700 hover:scale-105 transform text-white",
                  location.pathname === item.path
                    ? "bg-gray-700 shadow-sm font-semibold scale-105"
                    : "hover:text-gray-200"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link to="/workshops#booking" className="ml-4">
              <Button className="bg-white hover:bg-gray-100 text-[#2b2b2b] font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform animate-fade-in">
                Reserve Your Spot
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform text-white"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-600 animate-slide-in-right">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium font-inter transition-all duration-300 transform hover:scale-105 text-white",
                    location.pathname === item.path
                      ? "bg-gray-700 shadow-sm font-semibold"
                      : "hover:text-gray-200 hover:bg-gray-700"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <Link 
                to="/workshops#booking" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4"
              >
                <Button className="w-full bg-white hover:bg-gray-100 text-[#2b2b2b] font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                  Reserve Your Spot
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
