import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
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

  const projects = [
    {
      title: 'FinTech Dashboard',
      description: 'A comprehensive financial analytics platform with real-time data visualization, portfolio management, and advanced reporting capabilities.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      category: 'Web Application',
      featured: true
    },
    {
      title: 'Healthcare Mobile Suite',
      description: 'Complete telemedicine solution with patient management, video consultations, prescription handling, and health monitoring.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js'],
      category: 'Mobile App',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Scalable multi-vendor marketplace with advanced inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Stripe'],
      category: 'Web Platform'
    },
    {
      title: 'IoT Monitoring System',
      description: 'Industrial IoT platform for real-time equipment monitoring, predictive maintenance, and automated reporting.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Angular', 'Python', 'InfluxDB', 'MQTT', 'Docker'],
      category: 'Enterprise Software'
    },
    {
      title: 'Social Learning Platform',
      description: 'Interactive educational platform with live streaming, course management, progress tracking, and community features.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Prisma', 'WebRTC', 'AWS', 'Tailwind'],
      category: 'EdTech Platform'
    },
    {
      title: 'Logistics Management App',
      description: 'Complete supply chain solution with route optimization, real-time tracking, and automated dispatch management.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Google Maps', 'Firebase', 'ML Kit'],
      category: 'Mobile App'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our most impactful projects and see how we've transformed businesses 
            across various industries with innovative software solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden hover:bg-gray-800/50 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                      FEATURED
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800/50 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-600/20 hover:border-purple-500 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden hover:bg-gray-800/50 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800/50 text-gray-400 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-on-scroll">
          <div className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your <span className="gradient-text">Next Project</span>?
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Let's discuss how we can bring your vision to life with our expertise and innovative approach.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
