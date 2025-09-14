"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      "service_mq3px51",
      "template_g1s8vrx",
      formData,
      "zCEBmiLFk-0M0NdOs"
    ).then(
      () => {
        setShowPopup(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setShowPopup(false), 1000);
      },
      (err) => console.log('Failed:', err)
    );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9389425749",
      color: "bg-brand-pink"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "info.letscapture@gmail.com",
      color: "bg-brand-purple"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Ganga Nagar, Meerut, Uttar Pradesh, India",
      color: "bg-brand-yellow"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-brand-purple">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Contact us today and let's 
            discuss how we can help you tell your story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-200 focus:border-brand-purple"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-200 focus:border-brand-purple"
                />
              </div>
              
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-white border-gray-200 focus:border-brand-purple"
              />
              
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="bg-white border-gray-200 focus:border-brand-purple resize-none"
              />
              
              <Button 
                type="submit"
                className="w-full bg-brand-purple hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>

            {/* Popup Notification */}
            {showPopup && (
              <div className="absolute top-4 right-4 bg-white border border-green-500 text-green-700 px-4 py-3 rounded-lg shadow-lg transition-opacity duration-500 opacity-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6" />
                  <span>Message sent successfully!</span>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-200"
                  >
                    <div className={`${info.color} rounded-full w-12 h-12 flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Google Maps integration would be here</p>
              </div>
            </div>

            <div className="bg-brand-purple/10 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
