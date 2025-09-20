import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Eva
            </div>
            <p className="text-gray-400">Angular/React Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/anetohchidiogo"
              className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/anetohchidiogo"
              className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com/anetohchidiogo"
              className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/anetohchidiogo"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2025 Anetoh Chidiogo. Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;