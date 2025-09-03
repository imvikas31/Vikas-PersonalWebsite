import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-portfolio-darkest border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vikas Portfolio
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through code.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                vikas@example.com
              </p>
              <p className="text-muted-foreground text-sm">
                +91 98765 43210
              </p>
              <p className="text-muted-foreground text-sm">
                India
              </p>
            </div>
            <Button variant="outline" size="sm" className="mt-4" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Vikas Portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Vikas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;