import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud,
  Zap,
  Palette,
  Cpu,
  Globe
} from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Code className="w-8 h-8" />,
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "📱" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🎨" },
    ]
  },
 
  {
    title: "Backend Development",
    icon: <Database className="w-8 h-8" />,
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Express", icon: "🔄" },
      { name: "MongoDB", icon: "🍃" },
      { name: "GraphQL", icon: "🔗" }
    ]
  },
   {
    title: "Programming Languages",
    icon: "🖥️",
    technologies: [
      { name: "C", icon: "🟢" },
      { name:"C++", icon: "🐍" },
      { name: "Java", icon: "🔄" },
      { name: "JavaScript", icon: "🍃" },
      { name: "Python", icon: "🔗" }
    ]
  },
  {
    title: "Core Computer Science",
    icon: "🖥️",
    technologies: [
      { name: "Data Structures", icon: "🟢" },
      { name:"Operating Systems (OS)", icon: "🐍" },
      { name: "Database Management System (DBMS)", icon: "🔄" },
      { name: "Object-Oriented Programming (OOP)", icon: "🍃" },
      { name: "Computer Network", icon: "🔗" }
    ]
  },
  // {
  //   title: "Mobile Development",
  //   icon: <Smartphone className="w-8 h-8" />,
  //   technologies: [
  //     { name: "React Native", icon: "📱" },
  //     { name: "Flutter", icon: "🦋" },
  //     { name: "iOS", icon: "🍎" },
  //     { name: "Android", icon: "🤖" }
  //   ]
  // },
  // {
  //   title: "Cloud & DevOps",
  //   icon: <Cloud className="w-8 h-8" />,
  //   technologies: [
  //     { name: "AWS", icon: "☁️" },
  //     { name: "Docker", icon: "🐳" },
  //     { name: "Kubernetes", icon: "⚓" },
  //     { name: "CI/CD", icon: "🔄" },
  //     { name: "Terraform", icon: "🏗️" }
  //   ]
  // }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-20 px-4 md:px-8 bg-portfolio-darkest">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-portfolio-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
            Expertise across the full technology stack, from frontend frameworks 
            to cloud infrastructure and everything in between.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-portfolio-darker border border-portfolio-primary/20 rounded-2xl p-6 shadow-portfolio hover:shadow-portfolio-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Skill Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-portfolio-primary">
                  {skill.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-portfolio-text-secondary">
                  {skill.title}
                </h3>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                {skill.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex items-center gap-3 p-2 rounded-lg border border-portfolio-text-muted/20 hover:border-portfolio-primary/50 hover:shadow-portfolio transition-all duration-200 cursor-pointer group"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-portfolio-text-muted group-hover:text-portfolio-text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;