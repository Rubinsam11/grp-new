import React, { useEffect } from 'react';
import { Code, Smartphone, Settings, Cloud, Database, Shield, Zap, Globe } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Create stunning, high-performance websites and web applications using cutting-edge technologies like React, Vue, and Node.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Modern Frameworks'],
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.',
      features: ['Native Development', 'Cross-Platform', 'App Store Optimization', 'Push Notifications'],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Settings size={32} />,
      title: 'Custom Software Solutions',
      description: 'Develop tailored software solutions that address your specific business challenges and operational requirements.',
      features: ['Business Logic', 'Workflow Automation', 'System Integration', 'Scalable Architecture'],
      gradient: 'from-purple-700 to-purple-800'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Solutions',
      description: 'Migrate and deploy your applications to the cloud with AWS, Azure, and Google Cloud Platform for maximum scalability.',
      features: ['Cloud Migration', 'DevOps Implementation', 'Auto Scaling', 'Cost Optimization'],
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Design',
      description: 'Design and optimize databases for maximum performance, security, and scalability across various data platforms.',
      features: ['Database Architecture', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
      gradient: 'from-purple-600 to-purple-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Security Solutions',
      description: 'Implement robust security measures to protect your applications and sensitive data from modern threats.',
      features: ['Security Audits', 'Data Encryption', 'Access Control', 'Compliance Standards'],
      gradient: 'from-purple-800 to-purple-600'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description: 'Enhance your existing applications with advanced optimization techniques for speed and efficiency.',
      features: ['Code Optimization', 'Load Balancing', 'Caching Strategies', 'Monitoring Tools'],
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      icon: <Globe size={32} />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions about your digital transformation journey.',
      features: ['Technology Strategy', 'Digital Transformation', 'Architecture Planning', 'Best Practices'],
      gradient: 'from-purple-600 to-purple-400'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive software development services designed to accelerate your business 
            growth and digital transformation in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:bg-gray-800/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-800">
                <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300 group-hover:translate-x-1 transform">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;