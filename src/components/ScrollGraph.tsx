import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Code, Award } from 'lucide-react';

const ScrollGraph = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const growthData = [
    { year: '2024', projects: 10, clients: 50 },
    { year: '2025', projects: 15, clients: 60 },
  ];

  const maxProjects = Math.max(...growthData.map((d) => d.projects));
  const maxClients = Math.max(...growthData.map((d) => d.clients));

  const achievements = [
    {
      icon: <Code size={24} />,
      title: 'Lines of Code',
      value: '2.5M+',
      description: 'Written with precision and care',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Members',
      value: '45+',
      description: 'Expert developers and designers',
    },
    {
      icon: <Award size={24} />,
      title: 'Awards Won',
      value: '12+',
      description: 'Industry recognition and excellence',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Growth Rate',
      value: '150%',
      description: 'Year-over-year business growth',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Growth Story</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From humble beginnings to industry leadership - witness our journey of continuous 
            growth, innovation, and client success over the years.
          </p>
        </div>

        {/* Growth Chart */}
        <div ref={sectionRef} className="mb-20">
          <div className="glass-card p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Projects & Clients Growth (2024-2025)
            </h3>

            <div className="relative h-80 lg:h-96">
              {/* Y-axis Labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-sm">
                <span>{maxProjects}</span>
                <span>{Math.floor(maxProjects * 0.75)}</span>
                <span>{Math.floor(maxProjects * 0.5)}</span>
                <span>{Math.floor(maxProjects * 0.25)}</span>
                <span>0</span>
              </div>

              <div className="ml-12 h-full relative">
                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div
                    key={percent}
                    className="absolute w-full border-t border-gray-800/50"
                    style={{ top: `${100 - percent}%` }}
                  />
                ))}

                {/* Bars */}
                <div className="flex items-end justify-between h-full pt-4">
                  {growthData.map((data, index) => (
                    <div key={data.year} className="flex flex-col items-center flex-1 max-w-20">
                      <div className="relative w-full flex justify-center space-x-1 mb-4">
                        {/* Projects Bar */}
                        <div
                          className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t w-4 transition-all duration-1000 ease-out"
                          style={{
                            height: isVisible ? `${(data.projects / maxProjects) * 100}%` : '0%',
                            transitionDelay: `${index * 0.1}s`,
                          }}
                        />
                        {/* Clients Bar */}
                        <div
                          className="bg-gradient-to-t from-purple-800 to-purple-600 rounded-t w-4 transition-all duration-1000 ease-out"
                          style={{
                            height: isVisible ? `${(data.clients / maxClients) * 100}%` : '0%',
                            transitionDelay: `${index * 0.1 + 0.2}s`,
                          }}
                        />
                      </div>
                      <span className="text-gray-400 text-xs font-medium">{data.year}</span>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-purple-400 rounded" />
                    <span className="text-gray-300 text-sm">Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-800 to-purple-600 rounded" />
                    <span className="text-gray-300 text-sm">Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-card p-6 text-center hover:bg-gray-800/50 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2 + 1}s` }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg w-fit mx-auto mb-4">
                <div className="text-white">{achievement.icon}</div>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{achievement.value}</div>
              <h4 className="text-white font-semibold mb-2">{achievement.title}</h4>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollGraph;
