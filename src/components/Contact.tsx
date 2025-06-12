import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: 'hello@grp.dev',
      description: 'Get in touch anytime',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: '123 Tech Street, Silicon Valley, CA 94025',
      description: 'Our headquarters',
      gradient: 'from-purple-700 to-purple-800'
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: 10:00 AM - 4:00 PM',
      gradient: 'from-purple-400 to-purple-600'
    }
  ];

  const quickActions = [
    {
      icon: <MessageSquare size={20} />,
      title: 'Live Chat',
      description: 'Chat with our team',
      action: 'Start Chat'
    },
    {
      icon: <Calendar size={20} />,
      title: 'Schedule Call',
      description: 'Book a consultation',
      action: 'Book Now'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge software solutions? 
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact <span className="gradient-text">Information</span>
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-card p-6 hover:bg-gray-800/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-r ${info.gradient} p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-purple-300 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="w-full glass-card p-4 hover:bg-gray-800/50 transition-all duration-300 group text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">
                            {action.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {action.title}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {action.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-purple-400 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                        {action.action} →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 lg:p-12 animate-on-scroll">
              <h3 className="text-2xl font-bold text-white mb-8">
                Start Your <span className="gradient-text">Project</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile App Development</option>
                    <option value="custom-software">Custom Software Solutions</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                    placeholder="Tell us about your project requirements, timeline, budget, and any specific features you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="animate-on-scroll">
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Visit Our <span className="gradient-text">Office</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Located in the heart of Silicon Valley, we're always ready to meet in person.
            </p>
            <div className="bg-gray-800/50 rounded-lg h-64 flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <MapPin size={48} className="text-purple-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Interactive Map Coming Soon</p>
                <p className="text-gray-500 text-sm">123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;