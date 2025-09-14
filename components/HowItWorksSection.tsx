"use client";

import { useState, useEffect } from 'react';
import { UserPlus, Send, Palette, Eye, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Connect With Us",
      description: "Reach out to us easily—send a message on WhatsApp through the ‘Connect Now’ button or give us a call. We're here to understand your vision and guide you every step of the way.",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      features: ["Instant chat support", "Call assistance", "Friendly team", "24/7 availability"],
      duration: "2 minutes"
    },
    {
      icon: Send,
      number: "02",
      title: "Share Your Project",
      description: "Book an appointment and share your ideas, goals, and creative requirements with our experts. We listen carefully and offer the best solutions tailored to your needs.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      features: ["Detailed project briefing", "File upload support", "Consultation calls", "Customized suggestions"],
      duration: "5 minutes"
    },
    {
      icon: Palette,
      number: "03",
      title: "Plan & Collaborate",
      description: "Together, we brainstorm strategies to grow your business, explore creative possibilities, and craft a step-by-step plan. Our team brings ideas to life using the latest tools and creative expertise.",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      features: ["Growth planning", "Creative strategy", "Expert collaboration", "Progress tracking"],
      duration: "1–7 days"
    },
    {
      icon: Eye,
      number: "04",
      title: "See It Come Alive",
      description: "Watch your project take shape as we create, refine, and perfect every detail. We’ll share previews, gather feedback, and deliver the final result that aligns with your goals and vision.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      features: ["Real-time previews", "Unlimited revisions", "Feedback integration", "Final delivery"],
      duration: "24 hours"
    }
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSteps(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 glass-effect rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-brand-yellow" />
            <span className="text-white font-semibold">How It Works</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-purple bg-clip-text text-transparent">
              Simple Process,
            </span>
            <br />
            <span className="text-white">Amazing Results</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures your creative projects are delivered 
            with excellence, on time, and within budget.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-yellow transform -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isVisible = visibleSteps.includes(index);
              const isActive = activeStep === index;
              
              return (
                <div 
                  key={index}
                  data-index={index}
                  className={`step-card relative transition-all duration-700 ${
                    isVisible ? 'animate-slide-in-bottom' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-8 flex justify-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl transition-all duration-500 transform ${
                      isActive ? 'scale-125 bg-gradient-to-r from-brand-yellow to-brand-pink' : 'bg-gradient-to-r from-brand-purple to-brand-pink'
                    }`}>
                      {step.number}
                    </div>
                    
                    {/* Pulse Animation */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-yellow to-brand-pink animate-ping opacity-20" />
                    )}
                  </div>
                  
                  {/* Step Card */}
                  <div className={`glass-effect rounded-3xl p-8 text-center transition-all duration-500 transform ${
                    isActive ? 'scale-105 bg-white/20' : 'bg-white/10 hover:bg-white/15'
                  }`}>
                    {/* Icon */}
                    <div className={`bg-gradient-to-r ${step.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 ${
                      isActive ? 'scale-110 rotate-12' : ''
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">{step.description}</p>
                    
                    {/* Duration Badge */}
                    <div className="inline-flex items-center bg-brand-yellow/20 rounded-full px-4 py-2 mb-6">
                      <span className="text-brand-yellow font-semibold text-sm">{step.duration}</span>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-2 text-left">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-brand-yellow mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow rounded-3xl p-12 text-white relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">See It In Action</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Watch how our streamlined process transforms your ideas into stunning creative content 
              that drives results and exceeds expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-magnetic bg-white text-brand-purple font-bold px-12 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                Watch Demo Video
              </button>
              <a href="#contact" className='m-0 p-0'>
              <button className="btn-magnetic glass-effect border-2 border-white/30 text-white font-bold px-10 py-4 rounded-full text-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                <span>Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></span>
                
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { metric: "100%", label: "Client Satisfaction", description: "Our clients love the results we deliver" },
            { metric: "24h", label: "Average Turnaround", description: "Fast delivery without compromising quality" },
            { metric: "100+", label: "Projects Completed", description: "Proven track record of success" }
          ].map((item, index) => (
            <div key={index} className="glass-effect rounded-2xl p-8 text-center text-white">
              <div className="text-4xl sm:text-5xl font-bold text-brand-yellow mb-2">{item.metric}</div>
              <div className="text-xl font-semibold mb-2">{item.label}</div>
              <div className="text-white/70">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;