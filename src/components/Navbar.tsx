import { useState, useEffect } from "react";
import { Menu, Star, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="font-display text-3xl text-primary font-bold tracking-tight">
          Wildroot<span className="text-accent-foreground">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {["Habitats", "Experiences", "Conservation", "Visit"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-6 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow-md hover:shadow-lg transition-all"
          >
            <Star className="w-4 h-4 mr-2" />
            Get Tickets
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col space-y-4 shadow-xl">
          {["Habitats", "Experiences", "Conservation", "Visit"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full bg-accent text-accent-foreground font-bold rounded-xl mt-4">
            Get Tickets
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
