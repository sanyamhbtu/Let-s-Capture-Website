"use client";

import { useState, useEffect } from 'react';
import { Star, ExternalLink, Play, Eye, Heart, Award } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const filters = ['All', 'Podcast', 'Video', 'Photography', 'Design', 'Web'];
  
  const projects = [
    {
      id: 1,
      title: "Innovators’ Roundtable Podcast",
      category: "Podcast",
      image: "https://res.cloudinary.com/djkkjnmke/image/upload/v1757860578/podcast_phoot_krjd1u.jpg",
      client: "SI (Sub-Inspector)",
      rating: 5,
      testimonial: "Working with Let’s Capture and SI was a game-changer. The setup, sound clarity, and overall experience exceeded our expectations!",
      views: "3.8k",
      likes: "1.2K",
      year: "2025",
      tags: ["Podcast Setup", "Creative Collaboration", "High-Quality Audio"]
}
,
    {
  id: 2,
  title: "Wedding Cinematic Experience",
  category: "Bride",
  image: "https://res.cloudinary.com/djkkjnmke/image/upload/v1757860731/wedding_photo_otnwju.jpg",
  client: "Sarah & James",
  rating: 5,
  testimonial: "An unforgettable cinematic journey that captured every heartfelt moment of our special day with elegance, emotion, and artistry.",
  views: "1.8k",
  likes: "1k",
  year: "2025",
  tags: ["Wedding Video", "Cinematic Storytelling", "Emotional Highlights"]
}
,
    {
  id: 3,
  title: "Professional Photography Projects",
  category: "Photography",
  image: "https://res.cloudinary.com/djkkjnmke/image/upload/v1757861052/professional_photo_xldgre.jpg",
  client: "National Bodybuilding Championship",
  rating: 5,
  testimonial: "Outstanding photography services that beautifully captured our brand’s story and boosted engagement across all channels.",
  views: "950K",
  likes: "28K",
  year: "2025",
  tags: ["Photography", "Commercial", "Lifestyle","Product"]
}
,
    {
  id: 4,
  title: "Comprehensive Brand Identity Design",
  category: "Design",
  image: "https://res.cloudinary.com/djkkjnmke/image/upload/v1757862087/Modern_SB_letter_Logo_Instagram_Post_dkmoj5.png",
  client: "Shubh Fit The Gym",
  rating: 5,
  testimonial: "Innovative and visually striking design that captures the essence of our brand and communicates our values clearly to our audience.",
  views: "3.2k",
  likes: "3K",
  year: "2025",
  tags: ["Branding", "Logo Design", "Visual Identity", "Creative Strategy"]
}
,
    {
  id: 5,
  title: "Custom Web Design Solutions",
  category: "Web",
  image: "https://res.cloudinary.com/djkkjnmke/image/upload/v1757861317/Screenshot_2025-09-14_201811_ee5zmd.png",
  client: "Sweet & Delightful E-commerce Website",
  rating: 5,
  testimonial: "A beautifully crafted website that perfectly reflects our brand and transformed user engagement into real results.",
  views: "2.1k",
  likes: "1K",
  year: "2025",
  tags: ["Web Design", "UI/UX", "SEO","WordPress","E-Commerce"]
}
,
    {
  id: 6,
  title: "Corporate Event Cinematic Coverage",
  category: "Event",
  image: "https://res.cloudinary.com/djkkjnmke/image/upload/v1757862536/IMG_4921_pahpae.jpg",
  client: "Innovation Summit",
  rating: 5,
  testimonial: "A highly professional team that captured every key moment with cinematic precision, bringing the event’s energy and highlights to life.",
  views: "4.1k",
  likes: "2K",
  year: "2025",
  tags: ["Corporate Events", "Cinematic Coverage", "Live Highlights", "Event Storytelling"]
}

  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.portfolio-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-yellow/20 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-brand-purple" />
            <span className="text-brand-purple font-semibold">Our Portfolio</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow bg-clip-text text-transparent">
              Showcase of
            </span>
            <br />
            <span className="text-gray-900">Excellence</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Explore our diverse collection of successful projects and see why clients 
            trust us with their most important creative needs.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`btn-magnetic px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow-xl'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="masonry-grid">
          {filteredProjects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            
            return (
              <div 
                key={project.id}
                data-index={index}
                className={`portfolio-card masonry-item group cursor-pointer transition-all duration-700 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span className="text-sm">{project.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span className="text-sm">{project.likes}</span>
                            </div>
                          </div>
                          <ExternalLink className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-brand-purple text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </div>
                    
                    {/* Play Button for Videos */}
                    {/* {project.category === 'Video' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )} */}
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-brand-purple font-semibold text-sm">{project.year}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                        ))}
                        <span className="ml-2 text-gray-600 text-sm">({project.rating}.0)</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-purple transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">Client: <span className="font-semibold">{project.client}</span></p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <blockquote className="text-gray-600 italic border-l-4 border-brand-purple pl-4">
                      "{project.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <a href="https://harsh-saini.my.canva.site/god-of-visual">
          <button className="btn-magnetic bg-gradient-to-r from-brand-purple to-brand-pink text-violet-800 font-bold px-12 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            View Full Portfolio
          </button>
          </a>
        </div>

        {/* Stats Section */}
        
      </div>
    </section>
  );
};

export default PortfolioSection;