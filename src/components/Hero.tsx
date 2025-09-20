import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="mb-8 animate-fade-in-up">
          <img
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
            alt="Anetoh Chidiogo"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl object-cover animate-float"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-500">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Anetoh Chidiogo
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up animation-delay-1000">
          Angular/React Developer
        </p>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed animate-fade-in-up animation-delay-1500">
          Crafting beautiful, performant web applications with Angular and React. 
          Passionate about creating seamless user experiences and writing clean, maintainable code.
        </p>

        <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up animation-delay-2000">
          <a
            href="https://github.com/anetohchidiogo"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/anetohchidiogo"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://instagram.com/anetohchidiogo"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://facebook.com/anetohchidiogo"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#contact"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center space-x-2 text-lg hover:text-indigo-300 transition-colors duration-300 animate-fade-in-up animation-delay-2500"
        >
          <span>Discover my work</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;