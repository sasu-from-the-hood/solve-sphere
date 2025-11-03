import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  // Get first letter of name for avatar
  const getAvatarLetter = (name) => {
    return name.charAt(0).toUpperCase();
  };

  // Generate color based on first letter
  const getAvatarColor = (letter) => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-indigo-500',
      'bg-teal-500',
    ];
    const index = letter.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const testimonials = [
    {
      name: "Gym Manager",
      role: "Latest Fitness Ethiopia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The QR code system has completely transformed our operations. Members love the quick check-in, and we finally have accurate data on gym usage patterns.",
      rating: 5,
      project: "Gym Management System",
      projectId: "latest-fitness-ethiopia"
    },
    {
      name: "Operations Director",
      role: "BeOn Advert",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      quote: "This system has revolutionized how we manage our advertising campaigns. Everything is in one place, and our clients love the transparency.",
      rating: 5,
      project: "Advertising ERP",
      projectId: "beon-advert"
    },
    {
      name: "Chief Medical Officer",
      role: "Salem Medium Clinic",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The system has transformed our clinic operations. We can now focus more on patient care rather than paperwork.",
      rating: 5,
      project: "Healthcare Management",
      projectId: "salem-medium-clinic"
    },
    {
      name: "Hotel Manager",
      role: "NAF Digital Partner Hotel",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "This platform has opened up new revenue streams for our hotels. We're reaching customers we never could before.",
      rating: 5,
      project: "Hotel Booking Platform",
      projectId: "naf-digital-hotel"
    },
    {
      name: "Export Director",
      role: "Fayasera Coffee Export",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote: "The website perfectly captures our brand essence and has opened doors to international markets we couldn't reach before.",
      rating: 5,
      project: "Corporate Portfolio",
      projectId: "fayasera-coffee"
    },
    {
      name: "School Director",
      role: "Partner Educational Institution",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      quote: "This system has revolutionized how we communicate with parents and manage student data. It's an indispensable tool for our school.",
      rating: 5,
      project: "Student Management System",
      projectId: "student-management"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="testimonials" className="relative py-20 bg-white dark:bg-slate-950 z-10">
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => {
              const avatarLetter = getAvatarLetter(testimonial.name);
              const avatarColor = getAvatarColor(avatarLetter);

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <Quote className="text-primary opacity-20" size={40} />
                      </div>

                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`${avatarColor} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md`}
                        >
                          {avatarLetter}
                        </motion.div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-primary font-medium mt-1">
                            {testimonial.project}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

