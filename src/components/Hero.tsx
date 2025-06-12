import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Smartphone, Settings, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container-custom">
        <div className={`max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-purple-600/20 to-purple-400/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
              🚀 Welcome to the Future of Software Development
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming Ideas Into
            <span className="gradient-text block">Digital Excellence</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl leading-relaxed">
            GRP is your trusted partner in cutting-edge software development. We craft innovative web applications, 
            mobile solutions, and custom software that drives business transformation and accelerates growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="btn-primary flex items-center justify-center group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button className="btn-secondary">
              Explore Our Work
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Web Development</h3>
              <p className="text-gray-400">Modern, responsive websites that captivate and convert</p>
            </div>
            
            <div className="glass-card p-6 hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Mobile Apps</h3>
              <p className="text-gray-400">Native iOS & Android solutions for maximum impact</p>
            </div>
            
            <div className="glass-card p-6 hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Settings size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Custom Software</h3>
              <p className="text-gray-400">Tailored solutions that fit your unique business needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToNext}
          className="text-purple-400 hover:text-purple-300 transition-colors duration-300 animate-bounce-slow"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;