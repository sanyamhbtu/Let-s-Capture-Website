"use client";

import { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  Video, 
  Camera, 
  Scissors, 
  Palette, 
  Code, 
  Hash,
  ArrowRight,
  Star,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Mic,
      title: "Podcast Rooms",
      description: "Create your voice with clarity and confidence in our fully equipped, soundproof podcast spaces designed for seamless recording and professional-grade audio.",
      features: ["Soundproofed studios", "Top-tier microphones", "Multi-track recording", "Live monitoring and mixing"],
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      price: "Starting at ₹3000/hour",
      rating: 4.9
    },
    {
      icon: Video,
      title: "On-Site Podcast Setup",
      description: "Bring your podcast anywhere—our expert team delivers mobile recording setups for events, interviews, and remote shoots with flawless sound and video quality.",
      features: ["Portable equipment", "Fast and efficient setup", "Professional support", "Live streaming enabled"],
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      price: "Starting at ₹2000/day",
      rating: 4.8
    },
    {
      icon: Camera,
      title: "Video & Photography",
      description: "Capture unforgettable moments and elevate your brand with cinematic-quality videos and photography for weddings, events, products, lifestyle, and corporate stories.",
      features: ["Wedding shoots", "Event coverage", "Product showcases", "Corporate storytelling"],
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      price: "Starting at ₹1000/session",
      rating: 5.0
    },
    {
      icon: Scissors,
      title: "Cinematic Editing",
      description: "Transform your footage into a story that resonates—our expert editors enhance visuals with color grading, sound design, motion graphics, and narrative cuts.",
      features: ["Color correction", "Sound design", "Motion graphics", "Storytelling edits"],
      color: "from-pink-400 to-rose-600",
      bgColor: "bg-gradient-to-br from-rose-50 to-rose-100",
      price: "Starting at ₹250/project",
      rating: 4.9
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Craft your brand’s visual identity with designs that speak to your audience—social media creatives, brochures, logos, and more tailored to tell your story.",
      features: ["Brand identity", "Social media content", "Print designs", "Logo creation"],
      color: "from-purple-400 to-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      price: "Starting at ₹150/project",
      rating: 4.8
    },
    {
      icon: Code,
      title: "Web Design",
      description: "Build engaging and user-friendly websites that reflect your brand’s personality and turn visitors into loyal customers through intuitive designs and smooth experiences.",
      features: ["Custom websites", "UI/UX design", "Landing pages", "E-commerce platforms"],
      color: "from-yellow-400 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      price: "Starting at ₹7500/project",
      rating: 4.9
    },
    {
      icon: Hash,
      title: "Social Media Marketing",
      description: "Grow your online presence with strategies that connect, engage, and convert—content planning, community management, and analytics tailored to your audience.",
      features: ["Content strategy", "Creative posts", "Audience engagement", "Performance tracking"],
      color: "from-pink-400 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
      price: "Starting at ₹5000/month",
      rating: 4.7
    }
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleServices(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-pink/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-purple/10 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-brand-purple" />
            <span className="text-brand-purple font-semibold">Our Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow bg-clip-text text-transparent">
              Creative Solutions
            </span>
            <br />
            <span className="text-gray-900">That Inspire</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive creative solutions tailored to bring your vision to life with 
            professional quality and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleServices.includes(index);
            const isHovered = hoveredService === index;
            
            return (
              <div 
                key={index}
                data-index={index}
                className={`service-card perspective-card group cursor-pointer transition-all duration-700 ${
                  isVisible ? 'animate-slide-in-bottom' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`card-inner relative ${service.bgColor} rounded-3xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                  isHovered ? 'scale-105 -rotate-1' : ''
                }`}>
                  {/* Shimmer Effect */}
                  <div className={`shimmer-effect absolute inset-0 rounded-3xl ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
                  
                  {/* Service Icon */}
                  <div className="relative mb-6">
                    <div className={`bg-gradient-to-r ${service.color} rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                      isHovered ? 'scale-110 rotate-12' : ''
                    }`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-2 -right-2 bg-brand-yellow rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                      <Star className="w-4 h-4 text-gray-800" />
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                        <span className="text-sm font-semibold text-gray-700">{service.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 animate-pulse`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      </div>
                      
                      <button className={`btn-magnetic bg-gradient-to-r ${service.color} text-white font-semibold px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                        isHovered ? 'scale-105' : ''
                      }`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/50" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your vision and create something extraordinary together.
              </p>
              <a href="#contact">
              <button className="btn-magnetic bg-white text-brand-purple font-bold px-12 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;