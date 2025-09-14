"use client";

import { useState, useEffect } from 'react';
import { Play, ArrowRight, Sparkles, Camera, Mic, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Particles from './ui/particles';
const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "Memories That Last",
    "Cinematic Experiences", 
    "Digital Masterpieces",
    "Brand Narratives"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <div 
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        />
        
        {/* Floating Particles */}
        <Particles/>
        

        {/* Morphing Blobs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-pink/20 morphing-blob floating opacity-60" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-yellow/20 morphing-blob floating opacity-60" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-brand-purple/20 morphing-blob floating opacity-60" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
          {/* Logo Animation */}
          {/* <div className="mb-8 animate-rotate-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center space-x-4 bg-white/10 glass-effect rounded-full px-8 py-4">
              <Camera className="w-8 h-8 text-brand-yellow animate-pulse-slow" />
              <span className="text-2xl font-bold text-white">Lets Capture</span>
              <Sparkles className="w-6 h-6 text-brand-pink animate-pulse-slow" />
            </div>
          </div>
           */}
          

          {/* Main Heading with Typewriter Effect */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="block text-shadow-glow">Let's Capture –</span>
            <span className="block text-brand-yellow text-shadow-glow typewriter min-h-[1.2em]">
              {heroTexts[currentText]}
            </span>
          </h1>
          
          {/* Subtitle with Stagger Animation */}
          <div className="text-xl sm:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            <div className="text-reveal">
              {["Creative", "solutions", "for", "podcasts,", "shoots,", "edits,", "and", "digital", "branding", "that", "elevate", "your", "story"].map((word, index) => (
                <span 
                  key={index}
                  className="inline-block mr-2"
                  style={{ animationDelay: `${2 + index * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons with Advanced Animations */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a href="#services">
            <Button 
              size="lg"
              className="btn-magnetic bg-brand-yellow hover:bg-yellow-400 text-black font-bold px-12 py-6 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: '3s' }}
            >
              <Video className="mr-3 w-6 h-6" />
              Explore Services
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            </a>
            <a href="#portfolio">
            <Button 
              variant="outline" 
              size="lg"
              className="btn-magnetic glass-effect border-2 border-white/30 text-white hover:bg-white/20 font-bold px-12 py-6 rounded-full text-xl backdrop-blur-md"
              style={{ animationDelay: '3.2s' }}
            >
              <Play className="mr-3 w-6 h-6" />
              Watch Showreel
            </Button>
            </a>
          </div>

          {/* Service Icons with Floating Animation */}
          <div className="flex justify-center items-center space-x-8 opacity-80">
            {[
              { icon: Mic, label: "Podcasts", delay: '4s' },
              { icon: Camera, label: "Photography", delay: '4.2s' },
              { icon: Video, label: "Videography", delay: '4.4s' },
              { icon: Sparkles, label: "Editing", delay: '4.6s' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center space-y-2 animate-slide-in-bottom"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="bg-white/10 glass-effect rounded-full p-4 floating">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Enhanced Animation */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center glass-effect">
            <div className="w-1 h-3 bg-brand-yellow rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-white/60 text-xs font-medium">Scroll to explore</span>
        </div>
      </div> */}

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-4 border-t-4 border-brand-pink/50 animate-pulse" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-4 border-t-4 border-brand-yellow/50 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-4 border-b-4 border-brand-purple/50 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-4 border-b-4 border-brand-pink/50 animate-pulse" />
    </section>
  );
};

export default HeroSection;