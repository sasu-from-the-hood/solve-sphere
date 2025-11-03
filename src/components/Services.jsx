import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cog, Smartphone, Cloud, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software applications built to solve your specific business challenges. From desktop applications to enterprise systems.",
      features: ["Desktop applications", "Enterprise software", "API development", "System integration"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design and management systems that ensure your data is secure, accessible, and optimized for performance.",
      features: ["Database design", "Data migration", "Performance optimization", "Backup & recovery"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that provide seamless user experiences across iOS and Android devices.",
      features: ["iOS & Android apps", "Cross-platform development", "UI/UX design", "App store deployment"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your IT operations and reduce costs.",
      features: ["Cloud migration", "Infrastructure setup", "DevOps automation", "Security implementation"]
    },
    {
      icon: Cog,
      title: "Business Automation",
      description: "Streamline your business processes with custom automation tools and integrations that save time and reduce manual work.",
      features: ["Workflow automation", "Third-party integrations", "Custom tools", "Process optimization"]
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Comprehensive data analytics solutions and custom reporting dashboards to help you make informed business decisions.",
      features: ["Custom dashboards", "Data visualization", "Business intelligence", "Performance metrics"]
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="relative py-20 bg-white dark:bg-slate-950 z-10">
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
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive software development services to help your business succeed digitally.
              From concept to deployment and beyond, we've got you covered.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  />

                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="text-primary" size={32} />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0 relative z-10">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"
                            whileHover={{ scale: 2 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* <div className="text-center mt-16 animate-on-scroll">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Something Custom?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every business is unique. If you don't see exactly what you need, 
                let's discuss your specific requirements and create a tailored software solution.
              </p>
              <button 
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Discuss Your Project
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;