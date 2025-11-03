import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [gridLines, setGridLines] = useState([]);
  const [glowingSquares, setGlowingSquares] = useState([]);

  // Generate random glowing grid lines
  useEffect(() => {
    const generateGlowingLines = () => {
      const lines = [];
      const numLines = 6;

      for (let i = 0; i < numLines; i++) {
        lines.push({
          id: `line-${Date.now()}-${i}`,
          isVertical: Math.random() > 0.5,
          position: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 4 + Math.random() * 3
        });
      }
      setGridLines(lines);
    };

    generateGlowingLines();
    const interval = setInterval(generateGlowingLines, 8000);
    return () => clearInterval(interval);
  }, []);

  // Animate glowing squares - one square per line that fades after line passes
  useEffect(() => {
    const gridSize = 80; // matches the CSS grid size
    const interval = setInterval(() => {
      const newSquares = [];
      const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
      const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);

      gridLines.forEach((line) => {
        const progress = (Date.now() % (line.duration * 1000)) / (line.duration * 1000);

        if (line.isVertical) {
          const x = (line.position / 100) * viewportWidth;
          const y = progress * viewportHeight;
          const gridX = Math.floor(x / gridSize);
          const gridY = Math.floor(y / gridSize);

          // Only add if within viewport bounds
          if (gridX * gridSize < viewportWidth && gridY * gridSize < viewportHeight) {
            newSquares.push({
              id: `${line.id}-current`,
              lineId: line.id,
              x: Math.min(gridX * gridSize, viewportWidth - gridSize),
              y: Math.min(gridY * gridSize, viewportHeight - gridSize),
              timestamp: Date.now()
            });
          }
        } else {
          const x = progress * viewportWidth;
          const y = (line.position / 100) * viewportHeight;
          const gridX = Math.floor(x / gridSize);
          const gridY = Math.floor(y / gridSize);

          // Only add if within viewport bounds
          if (gridX * gridSize < viewportWidth && gridY * gridSize < viewportHeight) {
            newSquares.push({
              id: `${line.id}-current`,
              lineId: line.id,
              x: Math.min(gridX * gridSize, viewportWidth - gridSize),
              y: Math.min(gridY * gridSize, viewportHeight - gridSize),
              timestamp: Date.now()
            });
          }
        }
      });

      // Keep old squares that are still fading (< 1.5s old) + new current squares
      setGlowingSquares(prev => {
        const fadingSquares = prev.filter(sq =>
          Date.now() - sq.timestamp < 1500 &&
          !newSquares.find(ns => ns.lineId === sq.lineId)
        );
        return [...fadingSquares, ...newSquares];
      });
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [gridLines]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Static Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Glowing Squares Trail Effect */}
        {glowingSquares.map((square) => {
          const age = Date.now() - square.timestamp;
          const opacity = Math.max(0, 1 - (age / 1500)); // Fade over 1.5 seconds

          return (
            <motion.div
              key={square.id}
              className="absolute w-[80px] h-[80px] pointer-events-none"
              style={{
                left: square.x,
                top: square.y,
                background: `radial-gradient(circle, rgba(59, 130, 246, ${opacity * 0.4}), rgba(147, 51, 234, ${opacity * 0.3}), transparent)`,
                boxShadow: `0 0 20px rgba(59, 130, 246, ${opacity * 0.6}), 0 0 40px rgba(147, 51, 234, ${opacity * 0.4})`,
                opacity: opacity
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: opacity, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl"
        />

        {/* Corner Glow Effects */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 dark:from-blue-500/20 to-transparent blur-2xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 dark:from-purple-500/20 to-transparent blur-2xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4" />
            </motion.div>
            Solve Sphere  - Modern  Solutions
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            We Build{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Digital Excellence
              <motion.span
                className="inline-block ml-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary inline" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Transform your business with modern, scalable web applications.
            We create digital solutions that drive growth and deliver results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border-2 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;