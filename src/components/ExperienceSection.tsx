import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "TechCorp Solutions",
    logo: "🏢",
    position: "Senior Full Stack Developer",
    duration: "Jan 2022 - Present",
    location: "San Francisco, CA",
    description: "Led development of microservices architecture serving 100k+ daily users",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
  },
  {
    company: "StartupXYZ",
    logo: "🚀",
    position: "Frontend Developer",
    duration: "Jun 2020 - Dec 2021",
    location: "Remote",
    description: "Built responsive web applications and improved user engagement by 40%",
    technologies: ["Vue.js", "TypeScript", "Firebase", "Stripe", "GraphQL"]
  },
  {
    company: "Digital Agency Pro",
    logo: "💼",
    position: "Junior Developer",
    duration: "Aug 2019 - May 2020",
    location: "New York, NY",
    description: "Developed custom WordPress solutions and e-commerce platforms",
    technologies: ["PHP", "WordPress", "MySQL", "jQuery", "Sass"]
  }
];

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    logo: "☁️",
    date: "Dec 2023",
    credentialId: "AWS-SA-2023-001"
  },
  {
    name: "React Professional Certificate",
    issuer: "Meta",
    logo: "⚛️",
    date: "Sep 2023",
    credentialId: "META-REACT-2023"
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    logo: "🌤️",
    date: "Jun 2023",
    credentialId: "GCP-PRO-2023-001"
  }
];

const ExperienceSection = () => {
  return (
    <section 
      id="experience" 
      className="w-full py-20 px-4 md:px-8 bg-gradient-subtle relative overflow-hidden"
      style={{
        clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 30% 98%, 0px 100%)"
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Experience Section */}

        
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-portfolio-text-primary mb-4">
                Work Experience
              </h2>
              <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
                My professional journey building innovative solutions and leading development teams.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  {/* Timeline Connector */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-4 h-4 bg-portfolio-primary rounded-full shadow-portfolio-glow" />
                    {index < experiences.length - 1 && (
                      <div className="w-1 h-40 bg-portfolio-primary/30 mt-2" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 bg-portfolio-darker border border-portfolio-primary/20 rounded-2xl p-6 shadow-portfolio hover:shadow-portfolio-lg transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{exp.logo}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-portfolio-text-primary mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-2 text-portfolio-text-secondary">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-portfolio-text-muted mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-sm rounded-full border border-portfolio-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-portfolio-text-primary mb-4">
              Certifications
            </h2>
            <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
              Professional certifications that validate my expertise in modern technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-portfolio-darker border border-portfolio-primary/20 rounded-2xl p-6 shadow-portfolio hover:shadow-portfolio-lg transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{cert.logo}</div>
                <h3 className="text-lg font-semibold text-portfolio-text-primary mb-2">
                  {cert.name}
                </h3>
                <p className="text-portfolio-text-secondary mb-2">{cert.issuer}</p>
                <p className="text-portfolio-text-muted text-sm mb-1">{cert.date}</p>
                <p className="text-portfolio-text-muted text-xs">{cert.credentialId}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;