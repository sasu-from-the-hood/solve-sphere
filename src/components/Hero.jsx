import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative  bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 pt-20 md:pt-4">
      <div className="container mx-auto px-4 py-10 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Modern Web Solutions
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            We Build
            <span className="text-primary block">Digital Excellence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with modern, scalable web applications. 
            We create digital solutions that drive growth and deliver results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
            <Button 
              size="lg" 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-border text-foreground hover:bg-accent px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;