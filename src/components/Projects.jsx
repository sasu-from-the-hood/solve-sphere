import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payments, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      results: ["300% increase in conversion rate", "50% faster page load times", "Seamless mobile experience"],
      category: "E-Commerce"
    },
    {
      title: "Healthcare Dashboard",
      description: "Comprehensive patient management system with real-time data visualization, appointment scheduling, and secure medical record storage.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "TypeScript", "PostgreSQL", "Chart.js"],
      results: ["40% reduction in admin time", "Improved patient satisfaction", "HIPAA compliant security"],
      category: "Healthcare"
    },
    {
      title: "Financial Analytics Tool",
      description: "Advanced financial dashboard providing real-time market data, portfolio tracking, and predictive analytics for investment firms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      technologies: ["Next.js", "Python", "Redis", "D3.js"],
      results: ["Real-time data processing", "Advanced visualization", "99.9% uptime achieved"],
      category: "Finance"
    },
    {
      title: "Learning Management System",
      description: "Interactive online learning platform with video streaming, progress tracking, and collaborative tools for educational institutions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Express.js", "AWS", "WebRTC"],
      results: ["10,000+ active users", "95% course completion rate", "Mobile-first design"],
      category: "Education"
    },
    {
      title: "Restaurant Management",
      description: "Complete restaurant management solution with online ordering, inventory tracking, and customer relationship management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps API"],
      results: ["200% increase in online orders", "Streamlined operations", "Enhanced customer experience"],
      category: "Restaurant"
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with content management system, multi-language support, and advanced SEO optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
      results: ["400% increase in organic traffic", "Improved brand presence", "Mobile-optimized design"],
      category: "Corporate"
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
              Explore our portfolio of successful projects. Each solution is crafted with attention 
              to detail and designed to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Button variant="outline" size="sm" className="flex-1">
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

          <div className="text-center mt-16 animate-on-scroll">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's bring your vision to life with a custom solution that drives results 
                and exceeds your expectations.
              </p>
              <Button 
                size="lg"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-6 h-auto"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;