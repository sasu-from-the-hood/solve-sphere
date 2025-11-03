import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long')
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "solvesphere999@gmail.com",
      description: "Send us an email and we'll respond immediately"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+251975824359 || +251928650433 || +251925319177 || +251915677200 ",
      description: "Available Monday to Sunday"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Sidama, Hawassa",
      description: "We work with clients worldwide, remotely and on-site"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-slate-50 dark:bg-slate-900 z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Get in touch with us today and
              let's discuss how we can help your business grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We'd love to hear about your project. Whether you have a detailed plan 
                  or just an idea, we're here to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <info.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-primary font-medium mb-2">
                            {info.content}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Why Choose Solve Sphere?
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    Free initial consultation and project assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    Transparent pricing with no hidden costs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    Ongoing support and maintenance included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    100% satisfaction guarantee
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      >
                        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            {...register('name')}
                            placeholder="Your full name"
                            className={errors.name ? 'border-red-500' : ''}
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            >
                              <AlertCircle size={14} />
                              {errors.name.message}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            {...register('email')}
                            placeholder="your@email.com"
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            >
                              <AlertCircle size={14} />
                              {errors.email.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          {...register('company')}
                          placeholder="Your company name (optional)"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          {...register('message')}
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          >
                            <AlertCircle size={14} />
                            {errors.message.message}
                          </motion.p>
                        )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="mr-2"
                              >
                                ⏳
                              </motion.div>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2" size={18} />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;