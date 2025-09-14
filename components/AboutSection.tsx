"use client";

import { useState, useEffect } from 'react';
import { Target, Eye, Heart, Users, Award, Zap, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    rooms: 0,
    satisfaction: 0
  });

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "We bring ideas to life through creative storytelling and captivating visuals that connect hearts and leave lasting impressions.",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the go-to creative partner for individuals and brands, helping them share their unique stories with authenticity and emotion.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      icon: Heart,
      title: "Values",
      description: "Passion, creativity, collaboration, and innovation guide us in turning moments into meaningful, beautiful experiences.",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100"
    }
];


  const stats = [
    { key: 'projects', target: 100, suffix: '+', label: 'Projects Completed', icon: Award },
    { key: 'clients', target: 50, suffix: '+', label: 'Happy Clients', icon: Users },
    { key: 'rooms', target: 5, suffix: '+', label: 'Podcast Rooms', icon: Zap },
    { key: 'satisfaction', target: 100, suffix: '%', label: 'Client Satisfaction', icon: TrendingUp }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleElements(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.about-element');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Animate counters when stats section becomes visible
    if (visibleElements.includes(99)) { // Special index for stats section
      const animateCounter = (key: keyof typeof counters, target: number) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 20);
      };

      stats.forEach(stat => {
        animateCounter(stat.key as keyof typeof counters, stat.target);
      });
    }
  }, [visibleElements]);

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-pink/20 rounded-full px-6 py-3 mb-6">
            <Heart className="w-5 h-5 text-brand-purple" />
            <span className="text-brand-purple font-semibold">About Us</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow bg-clip-text text-transparent">
              Crafting Stories
            </span>
            <br />
            <span className="text-gray-900">That Matter</span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
              At Let’s Capture, we believe every story deserves to be told creatively and with care. From podcast rooms and on-site setups to cinematic shoots and expert editing, we provide tailored solutions that bring your vision to life and help your brand stand out.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of passionate creators combines technical expertise with artistic vision to 
              deliver exceptional results that exceed expectations and drive meaningful engagement 
              across all platforms and mediums.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const isVisible = visibleElements.includes(index);
            
            return (
              <div 
                key={index}
                data-index={index}
                className={`about-element perspective-card group transition-all duration-700 ${
                  isVisible ? 'animate-slide-in-bottom' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`card-inner ${value.bgColor} rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100`}>
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className={`bg-gradient-to-r ${value.color} rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Floating Sparkle */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div 
          data-index={99}
          className="about-element bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow rounded-3xl p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-500/50" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h3>
              <p className="text-xl text-white/90">Trusted by businesses worldwide for exceptional creative solutions</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const isVisible = visibleElements.includes(99);
                
                return (
                  <div 
                    key={index} 
                    className={`text-center transition-all duration-700 ${
                      isVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-white/10 glass-effect rounded-2xl p-6 backdrop-blur-md">
                      <IconComponent className="w-8 h-8 mx-auto mb-4 text-white/80" />
                      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                        {counters[stat.key as keyof typeof counters]}{stat.suffix}
                      </div>
                      <div className="text-lg text-white/90 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Preview */}
        {/* <div className="mt-24 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Meet Our Creative Team</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Passionate professionals dedicated to bringing your vision to life with expertise, 
            creativity, and unwavering commitment to excellence.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Creative Director", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300" },
              { name: "Mike Chen", role: "Video Producer", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300" },
              { name: "Emma Davis", role: "Lead Designer", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300" },
              { name: "Alex Rivera", role: "Audio Engineer", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300" }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-brand-purple font-semibold">{member.role}</p>
              </div>
            ))}
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default AboutSection;