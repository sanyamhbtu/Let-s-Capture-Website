"use client";

import { Camera, Facebook, Twitter, Instagram, Youtube, Mail, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Podcast Rooms", href: "#services" },
        { name: "Video Production", href: "#services" },
        { name: "Photography", href: "#services" },
        { name: "Graphic Design", href: "#services" },
        { name: "Web Design", href: "#services" },
        { name: "Social Media", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Sitemap", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1BStk28PjT/", name: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/harsh-saini-b81b2a380/", name: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/letscapture.in/", name: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@LetsCaptureOfficial", name: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-brand-purple p-2 rounded-full">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Lets Capture</span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              We believe every story deserves to be told with creativity and precision. 
              Join us in creating memorable experiences that resonate with your audience.
            </p>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-brand-purple"
                />
                <Button className="bg-brand-purple hover:bg-purple-700 px-6">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Subscribe to our newsletter for tips and updates
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-brand-purple transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 hover:bg-brand-purple p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>&copy; 2025 Lets Capture. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-brand-purple transition-colors duration-200">Privacy</a>
                <a href="#" className="hover:text-brand-purple transition-colors duration-200">Terms</a>
                <a href="#" className="hover:text-brand-purple transition-colors duration-200">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;