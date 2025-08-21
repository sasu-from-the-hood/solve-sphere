import React from 'react';
import { CheckCircle, Target, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every project is designed to achieve your business goals and deliver measurable results."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for your business."
    },
    {
      icon: Shield,
      title: "Reliable Partnership",
      description: "Count on us for consistent communication, timely delivery, and ongoing support."
    }
  ];

  const achievements = [
    "50+ successful projects delivered",
    "99.9% client satisfaction rate",
    "Average 40% improvement in site performance",
    "Expertise in modern frameworks and technologies"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Solve Sphere
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate developers and engineers who believe that great software 
              should solve real business problems efficiently. Our mission is to help businesses 
              succeed with custom software solutions and automation tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Us?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Solve Sphere, we don't just build websites – we create digital experiences 
                that drive business growth. Our approach combines technical expertise with 
                strategic thinking to deliver solutions that exceed expectations.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 animate-on-scroll">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <value.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* <div className="text-center animate-on-scroll">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help your business grow with a modern, 
                high-performance website that converts visitors into customers.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;