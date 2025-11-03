import React from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="relative py-20 bg-secondary/10 z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Solve Sphere
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate developers and engineers who believe that great software
              should solve real business problems efficiently. Our mission is to help businesses
              succeed with custom software solutions and automation tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Us?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Solve Sphere, we don't just build websites – we create digital experiences
                that drive business growth. Our approach combines technical expertise with
                strategic thinking to deliver solutions that exceed expectations.
              </p>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    </motion.div>
                    <span className="text-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className="bg-primary/10 p-3 rounded-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <value.icon className="text-primary" size={24} />
                        </motion.div>
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;