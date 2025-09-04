import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Github } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              Vikas Singh
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a 
            href="#about" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Projects
          </a>
          {/* <Button variant="outline" size="sm" asChild>
            <a href="#contact">Contact Me</a>
          </Button> */}
        </nav>

        {/* GitHub Button - Desktop */}
        <div className="hidden md:block">
          <Button variant="default" size="sm">
            <a href="https://github.com/imvikas31" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium">Github
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 z-50 relative"
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <Menu className="w-6 h-6 text-gray-700" />
          ) : (
            <X className="w-6 h-6 text-gray-700" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 py-4 px-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>

            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ContactUs
            </a>
            

            <Button className="w-16 h-8">
            <a href="https://github.com/imvikas31" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium">Github
            </a>
          </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;