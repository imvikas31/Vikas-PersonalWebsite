import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-background.jpg";
const developerPhoto = "/lovable-uploads/065ea292-f330-4185-8763-4238c7befcb8.png";

const HeroSection = () => {
  return (
    <section 
      id="about"
      className="relative w-full min-h-[800px] bg-portfolio-dark pt-20 pb-16 px-4 md:px-8 overflow-hidden"
      style={{
        clipPath: "polygon(0px 55px, 100% 55px, 100% 100%, 70% 95%, 0px 100%)",
        marginTop: "-55px"
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 min-h-[600px] m-28">
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left px-4 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-portfolio-text-primary mb-8 ">
              Hello, I'm Vikas Singh
            </h2>
            {/* <h1 className="text-3xl md:text-5xl font-bold text-portfolio-text-primary">
              Vikas Singh
            </h1> */}
          </div>
          
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-medium text-portfolio-pink">
              Full Stack Developer
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-lg md:text-xl text-portfolio-text-secondary max-w-2xl leading-relaxed">
              Passionate about creating innovative web solutions with modern technologies. 
              I specialize in React, Node.js, and DataBase to build scalable 
              applications that deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-start">
            <a href="/a"></a>
            <Button variant="resume" size="lg">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Developer Image */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* SVG Background */}
            <svg 
              className="absolute inset-0 w-full h-full animate-float"
              viewBox="0 0 200 200" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--portfolio-primary))" />
                  <stop offset="100%" stopColor="hsl(var(--portfolio-pink))" />
                </linearGradient>
              </defs>
              <path 
                fill="url(#gradient)" 
                d="M44.7,-76.4C58.8,-69.2,71.8,-58.1,79.6,-44.2C87.4,-30.3,90,-13.6,89.8,3C89.6,19.6,86.6,36.1,78.9,49.8C71.2,63.5,58.8,74.4,44.7,77.8C30.6,81.2,14.8,77.1,-2.1,80.4C-19,83.7,-37.9,94.4,-53.4,92.2C-68.9,90,-81,74.9,-87.8,58.4C-94.6,41.9,-96.1,23.9,-94.4,6.8C-92.7,-10.3,-87.8,-26.5,-79.9,-39.8C-72,-53.1,-61.1,-63.5,-48.5,-71.2C-35.9,-78.9,-21.6,-83.9,-6.8,-84.8C8,-85.7,23.6,-82.5,44.7,-76.4Z" 
                transform="translate(100 100)" 
              />
            </svg>
            
            {/* Profile Image */}
            <img 
              src={developerPhoto}
              alt="Alex Johnson - Full Stack Developer"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-portfolio-primary shadow-portfolio-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;