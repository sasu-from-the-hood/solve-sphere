import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const CaseStudy = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <Link to="/#projects">
            <Button variant="ghost" className="mb-8 text-white hover:text-white/80">
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-6">
              {project.tagline}
            </p>
            
            <div className="flex flex-wrap gap-6 text-white/80">
              <div>
                <span className="text-sm uppercase tracking-wide">Client</span>
                <p className="font-semibold">{project.client}</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide">Duration</span>
                <p className="font-semibold">{project.duration}</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide">Year</span>
                <p className="font-semibold">{project.year}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {project.results.metrics.map((metric, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm md:text-base font-medium opacity-90">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Problem Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-4xl font-bold mb-6 text-foreground">{project.problem.title}</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {project.problem.description}
            </p>
            
            <Card className="bg-secondary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Key Pain Points</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.problem.painPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 text-destructive">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Solution Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-4xl font-bold mb-6 text-foreground">{project.solution.title}</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {project.solution.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {project.solution.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.solution.technicalHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Technologies */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Results Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-4xl font-bold mb-6 text-foreground">{project.results.title}</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {project.results.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {project.results.metrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-xl font-semibold mb-2 text-foreground">{metric.label}</div>
                    <p className="text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial */}
            {project.results.testimonial && (
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <Award className="text-primary flex-shrink-0" size={32} />
                    <blockquote className="text-xl md:text-2xl font-medium text-foreground italic">
                      "{project.results.testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="ml-12">
                    <p className="font-semibold text-foreground">{project.results.testimonial.author}</p>
                    <p className="text-muted-foreground">{project.results.testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.section variants={itemVariants} className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="overflow-hidden rounded-lg shadow-lg"
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA Section */}
          <motion.section variants={itemVariants} className="text-center">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Let's build something amazing together
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/#contact">
                    <Button size="lg" variant="secondary">
                      Get in Touch
                    </Button>
                  </Link>
                  {project.liveUrl && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2" size={20} />
                      View Live Project
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;

