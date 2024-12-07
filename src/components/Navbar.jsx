import { Button } from "@material-tailwind/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Sticky Navbar */}
      <div
        className={`fixed z-50 top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="./logo.png" // Replace with your logo URL
              alt="Logo"
              className="w-16 h-10"
            />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className=" w-6 h-6"/> : <Menu className=" w-6 h-6"/>}
            </button>
          </div>

          {/* Links - Hidden on Mobile */}
          <div
            className={`flex flex-col md:flex-row md:items-center md:space-x-6 text-gray-700 ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <a href="#" className="hover:text-blue-500">
              Services
            </a>
            <a href="#" className="hover:text-blue-500">
              Industries
            </a>
            <a href="#" className="hover:text-blue-500">
              Solutions
            </a>
            <a href="#" className="hover:text-blue-500">
              Technologies
            </a>
            <a href="#" className="hover:text-blue-500">
              Insights
            </a>
            <a href="#" className="hover:text-blue-500">
              Careers
            </a>
            <a href="#" className="hover:text-blue-500">
              About
            </a>
          </div>

          {/* Buttons - Hidden on Mobile */}
          <div
            className={`flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <Button className="bg-pink-500 rounded-full text-white px-4 py-2  hover:bg-pink-600">
              Contact Us
            </Button>

            <Button className="bg-blue-500 rounded-full text-white px-4 py-2  hover:bg-blue-600">
              Search | 🔍
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
