import React, { useEffect, useRef } from 'react';
import { Users, Award, Clock, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);

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

  const stats = [
    { icon: <Users size={32} />, number: '150+', label: 'Happy Clients', color: 'from-purple-600 to-purple-700' },
    { icon: <Award size={32} />, number: '300+', label: 'Projects Completed', color: 'from-purple-500 to-purple-600' },
    { icon: <Clock size={32} />, number: '8+', label: 'Years Experience', color: 'from-purple-700 to-purple-800' },
    { icon: <Target size={32} />, number: '99%', label: 'Success Rate', color: 'from-purple-400 to-purple-600' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and methodologies to deliver solutions that set you apart from the competition.'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We work closely with you to understand your vision and exceed your expectations.'
    },
    {
      title: 'Quality Assurance',
      description: 'Every line of code is crafted with precision. We maintain the highest standards of quality and performance.'
    },
    {
      title: 'Agile Methodology',
      description: 'Fast, flexible, and efficient development processes that adapt to your changing business needs.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">GRP</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of innovators, developers, and technology enthusiasts 
            dedicated to transforming businesses through exceptional software solutions.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="glass-card p-8 hover:bg-gray-800/50 transition-all duration-300 group">
                <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-white mb-6">
              Our <span className="gradient-text">Story</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Founded in 2016, GRP emerged from a vision to bridge the gap between innovative technology 
              and business success. What started as a small team of passionate developers has evolved 
              into a leading software development company trusted by enterprises worldwide.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              We believe in the transformative power of well-crafted software. Our approach combines 
              technical excellence with deep business understanding, ensuring every solution we deliver 
              drives measurable results and sustainable growth.
            </p>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-2xl blur-xl"></div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl w-full border border-gray-800/50"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 animate-on-scroll hover:bg-gray-800/50 transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg w-fit mb-6">
              <Target size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses with innovative software solutions that drive growth, 
              efficiency, and competitive advantage in the digital landscape.
            </p>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll hover:bg-gray-800/50 transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg w-fit mb-6">
              <TrendingUp size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the global leader in software development, recognized for our innovation, 
              quality, and commitment to transforming businesses through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;