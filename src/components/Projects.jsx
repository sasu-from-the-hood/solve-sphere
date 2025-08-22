import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Latest Fitness Ethiopia",
      description: "A comprehensive gym management system that allows customers to register and receive personal QR codes for seamless check-in tracking and membership management.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "QR Code API", "MySQL"],
      results: ["Automated check-in process", "Reduced wait times by 70%", "Digital membership management"],
      category: "Fitness Management",
      liveUrl: "https://latestfitnessethiopia.com/"
    },
    {
      title: "NAF Digital Hotel Booking",
      description: "Multi-hotel reservation platform for Hawassa city, enabling customers to browse and book rooms across multiple hotels from a single unified platform.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Express.js", "Payment Gateway", "MySQL"],
      results: ["Unified booking system", "Increased hotel occupancy", "Streamlined reservation process"],
      category: "Hospitality",
      liveUrl: "http://nafdigital.et"
    },
    {
      title: "Fayasera Coffee Export",
      description: "Professional portfolio website for a coffee export company showcasing their premium Ethiopian coffee products, export capabilities, and company heritage.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Tailwind CSS"],
      results: ["Enhanced brand presence", "International client inquiries", "Professional showcase"],
      category: "Corporate Portfolio",
      liveUrl: "https://fayasera.com/"
    },
    {
      title: "SolveSphere Student Management",
      description: "Comprehensive student management system connecting parents, teachers, students, and directors with real-time communication, grade tracking, and administrative tools.",
      image: "https://apanews.net/wp-content/uploads/2025/03/Ethiopian-School-Leaving-Exam.jpg",
      technologies: ["React", "Next.js", "SMS Integration", "PostgreSQL"],
      results: ["Improved parent-student communication", "Real-time grade tracking", "Streamlined administration"],
      category: "Education Management",
      liveUrl: "https://solvesphr.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful software solutions. Each project is crafted with attention 
              to detail and designed to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="text-primary mr-2 flex-shrink-0" size={14} />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;