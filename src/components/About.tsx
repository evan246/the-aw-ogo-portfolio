import React from 'react';
import { Award, Code, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Coffee, value: '3', label: 'Years Experience' },
    { icon: Award, value: '12', label: 'Awards Won' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Angular/React Developer with over 3 years of experience creating 
              exceptional digital experiences. My journey began with a Computer Science degree, 
              and I've since specialized in building scalable, user-centric applications.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With a background in Economics and Statistics, I bring analytical thinking to frontend development. I thrive on transforming complex problems into elegant solutions, whether it's 
              architecting a React application from scratch or optimizing Angular performance. 
              My approach combines technical excellence with creative problem-solving.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">What drives me:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Creating intuitive, accessible user interfaces</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Writing clean, maintainable, and scalable code</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Staying current with emerging technologies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Mentoring junior developers and sharing knowledge</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:pl-8">
            <img
              src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Anetoh working on a project"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;