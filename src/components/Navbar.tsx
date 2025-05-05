
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, Search, User, Cube } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "blur-backdrop py-3" : "py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <Cube className="h-7 w-7 text-accent-gold mr-2 animate-subtle-rotate" />
            <span className="font-playfair text-xl font-bold">Luxe Spaces</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", href: "#" },
            { name: "Collections", href: "#collections" },
            { name: "3D Visualizer", href: "#visualizer" },
            { name: "Custom Design", href: "#custom-design" },
            { name: "Inspiration", href: "#inspiration" },
            { name: "About Us", href: "#about" }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="font-montserrat text-sm font-medium relative animated-underline pb-1"
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-5">
          <button>
            <Search className="h-5 w-5" />
          </button>
          <button>
            <User className="h-5 w-5" />
          </button>
          <div className="flex items-center bg-deep-indigo bg-opacity-10 rounded-full px-3 py-1">
            <Cube className="h-4 w-4 mr-1 text-accent-gold" />
            <span className="text-sm font-medium">3</span>
          </div>
        </div>
        
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden blur-backdrop">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {[
              { name: "Home", href: "#" },
              { name: "Collections", href: "#collections" },
              { name: "3D Visualizer", href: "#visualizer" },
              { name: "Custom Design", href: "#custom-design" },
              { name: "Inspiration", href: "#inspiration" },
              { name: "About Us", href: "#about" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 font-montserrat text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <button>
                <Search className="h-5 w-5" />
              </button>
              <button>
                <User className="h-5 w-5" />
              </button>
              <div className="flex items-center bg-deep-indigo bg-opacity-10 rounded-full px-3 py-1">
                <Cube className="h-4 w-4 mr-1 text-accent-gold" />
                <span className="text-sm font-medium">3</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
