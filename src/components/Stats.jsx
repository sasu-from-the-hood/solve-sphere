import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Briefcase, Award, Clock } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: Briefcase,
      value: 50,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered solutions'
    },
    {
      icon: Users,
      value: 35,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Across various industries'
    },
    {
      icon: Clock,
      value: 5,
      suffix: '+',
      label: 'Years Experience',
      description: 'In software development'
    },
    {
      icon: Award,
      value: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Based on project reviews'
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-20 bg-primary text-primary-foreground z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90">
              Delivering excellence through measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4"
                  >
                    <Icon size={32} className="text-primary-foreground" />
                  </motion.div>
                  
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm opacity-80">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

