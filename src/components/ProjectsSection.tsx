import { useState } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    title: "Smart PasteBin",
    category: "web-app",
    technologies: ["React", "Node.js", "Superbase"],
    duration: "2 weeks",
    description: "A web-based Pastebin application that allows users to create, save, and share text snippets securely. It features a clean interface with easy access to pastes and optional privacy settings.",
    image: "./src/assets/pastebin.png",
    bgColor: "from-blue-500 to-purple-600",
    demoLink: "https://vikas-pastebin.netlify.app",
    repoLink: "https://github.com/imvikas31/PasteBin"
  },
  {
    id: 2,
    title: "Quiz Master",
    category: "web-app",
    technologies: ["React.js", "Node.js", "javaScript"],
    duration: "2 week",
    description: "A responsive React-based Quiz App that lets users test their knowledge across multiple topics. Features include interactive questions, score tracking, and smooth navigation between quizzes.",
    image: "📋",
    bgColor: "from-green-500 to-teal-600",
    demoLink:"https://todaypay-quizapp.netlify.app/",
    repoLink:"https://github.com/imvikas31/TodayPay-QuizApp"
  },
  {
    id: 3,
    title: "A2Z BookSDekho",
    category: "web-app",
    technologies: ["React.js","JavaScript","Node.js"],
    duration: "6 weeks",
    description: "A2Z Bookshop is a user-friendly web app that allows users to browse, search, and purchase books seamlessly. It offers a streamlined interface with categories, book details, and a secure checkout process.",
    image: "🌤️",
    bgColor: "from-orange-500 to-red-600",
    demoLink:"https://a2zbookshop.netlify.app/",
    repoLink:"https://github.com/imvikas31/A2Z-BookDekho-website"
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    category: "web-app",
    technologies: ["Python", "OpenAI", "FastAPI"],
    duration: "4 months",
    description: "Intelligent chatbot powered by machine learning with natural language processing and context-aware conversations.",
    image: "🤖",
    bgColor: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    category: "android-app",
    technologies: ["Flutter", "SQLite", "Charts"],
    duration: "8 weeks",
    description: "Comprehensive fitness tracking application with workout plans, progress monitoring, and social sharing features.",
    image: "💪",
    bgColor: "from-cyan-500 to-blue-600"
  },
  {
    id: 6,
    title: "Modern Web Architecture",
    category: "articles",
    technologies: ["Microservices", "Docker", "AWS"],
    duration: "2 weeks",
    description: "In-depth article series about building scalable web applications using modern architecture patterns and cloud technologies.",
    image: "📚",
    bgColor: "from-indigo-500 to-purple-600"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web-app", label: "Web Apps" },
  { id: "android-app", label: "Mobile Apps" },
  { id: "articles", label: "Articles" }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="w-full py-20 px-4 md:px-8 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-portfolio-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto mb-8">
            A showcase of my recent work including web applications, mobile apps, and technical articles.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 border-2 border-portfolio-primary rounded-xl p-1 max-w-lg mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-portfolio-primary text-white shadow-portfolio'
                    : 'text-portfolio-primary hover:bg-portfolio-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-portfolio-darker rounded-2xl overflow-hidden shadow-portfolio hover:shadow-portfolio-lg transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.bgColor} flex items-center justify-center text-6xl`}>
                <img src={project.image} alt="" className="h-[200px] w-[700px]"/>
                
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-portfolio-primary/10 text-portfolio-primary text-xs rounded-full border border-portfolio-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-portfolio-text-secondary mb-2 group-hover:text-portfolio-text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Duration */}
                <div className="flex items-center gap-1 text-portfolio-text-muted text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>

                {/* Description */}
                <p className="text-portfolio-text-muted text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" 
                  onClick={() => window.open(project.demoLink, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm"
                  onClick={() => window.open(project.repoLink, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;