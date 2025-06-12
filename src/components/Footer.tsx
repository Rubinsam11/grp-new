import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Custom Software Solutions',
    'Cloud Solutions',
    'Database Design',
    'IT Consulting'
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook', color: 'hover:text-blue-400' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <Github size={20} />, href: '#', name: 'GitHub', color: 'hover:text-gray-300' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">GR</span>
                <span className="gradient-text">P</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative software solutions. 
              We're your trusted partner in digital transformation and technology excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                  hello@grp.dev
                </span>
              </div>
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-start group">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                  123 Tech Street<br />
                  Silicon Valley, CA 94025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 GRP. All rights reserved. Crafted with passion and precision.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;