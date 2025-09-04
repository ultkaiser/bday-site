import React from 'react';
import { Sparkles, Gift, Cake, Star } from 'lucide-react';

const Timeline: React.FC = () => {
  const milestones = [
    {
      icon: Star,
      title: 'Born to Shine',
      description: 'A beautiful soul entered this world',
      year: '2015',
      color: 'bg-pink-500',
    },
    {
      icon: Gift,
      title: 'First Steps',
      description: 'Taking those precious first steps into adventure',
      year: '2016',
      color: 'bg-purple-500',
    },
    {
      icon: Sparkles,
      title: 'School Days Begin',
      description: 'Starting the journey of learning and friendship',
      year: '2020',
      color: 'bg-indigo-500',
    },
    {
      icon: Cake,
      title: 'Today\'s Celebration',
      description: 'Another year of wonderful memories and growth',
      year: '2025',
      color: 'bg-gradient-to-r from-pink-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-indigo-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent mb-4">
            Memory Lane
          </h2>
          <p className="text-xl text-gray-600">
            A journey through beautiful moments and milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-pink-300 to-indigo-300"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full ${milestone.color} shadow-lg animate-pulse`}></div>
                </div>

                {/* Content Card */}
                <div 
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  } md:w-5/12`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 ${milestone.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                        <span className="text-sm font-medium text-purple-500">{milestone.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;