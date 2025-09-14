"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Camera = "https://res.cloudinary.com/djkkjnmke/image/upload/v1757865730/lets_capture_logo-removebg-preview_xqa0p5.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-effect shadow-2xl backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-r from-brand-purple to-brand-pink p-0 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                {/* <Camera className="w-7 h-7 text-white" /> */}
                <img 
  src={Camera} 
  alt="Let's Capture" 
  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20" 
/>
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-brand-yellow animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                Lets Capture
              </span>
              <div className="text-xs text-gray-500 font-medium">Creative Studio</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href.slice(1)
                      ? 'text-white bg-gradient-to-r from-brand-purple to-brand-pink shadow-lg'
                      : isScrolled
                        ? 'text-gray-700 hover:text-brand-purple hover:bg-white/50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full opacity-20 animate-pulse" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
  <a
    href="https://wa.me/9389425749?text=Hello%2C%20I%20want%20to%20connect%21"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="btn-magnetic bg-gradient-to-r from-brand-yellow to-brand-pink hover:from-brand-pink hover:to-brand-purple text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <Sparkles className="w-4 h-4 mr-2" />
      Let's Capture
    </Button>
  </a>
</div>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isScrolled
                  ? 'text-gray-700 hover:text-brand-purple hover:bg-white/50'
                  : 'text-white hover:text-brand-yellow hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-effect rounded-2xl mt-4 p-6 shadow-2xl backdrop-blur-md">
            <div className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-white bg-gradient-to-r from-brand-purple to-brand-pink shadow-lg'
                      : 'text-gray-700 hover:text-brand-purple hover:bg-white/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
  href="https://wa.me/9389425749?text=Hello%2C%20I%20want%20to%20connect%21"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full mt-6 btn-magnetic bg-gradient-to-r from-brand-yellow to-brand-pink text-white font-bold py-4 rounded-xl shadow-lg">
    <Sparkles className="w-4 h-4 mr-2" />
    Let's Connect
  </Button>
</a>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;