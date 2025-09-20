import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Door to Door Delivery Platform',
      description: 'A comprehensive delivery platform connecting vendors with clients, featuring real-time tracking, order management, and seamless delivery coordination.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['Angular', 'TypeScript', 'Firebase', 'Material UI'],
      github: '#',
      live: '#'
    },
    {
      title: 'ALS - Account Linking System',
      description: 'Advanced account linking system for Door to Door clients, enabling seamless integration and management of multiple user accounts and services.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      github: '#',
      live: '#'
    },
    {
      title: 'Loch Scientific - Oil Servicing',
      description: 'Professional oil servicing website with service booking, equipment management, and client portal for industrial oil maintenance solutions.',
      image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
      github: '#',
      live: 'https://lochscientific.vercel.app/'
    },
    {
      title: 'Bug Tracker System',
      description: 'Comprehensive bug tracking and project management system with issue assignment, progress tracking, and team collaboration features.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['Angular', 'TypeScript', 'Express.js', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Advanced e-commerce dashboard with real-time analytics, inventory management, sales tracking, and comprehensive reporting features.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management Platform',
      description: 'Comprehensive task management platform with team collaboration, project tracking, deadline management, and productivity analytics.',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['Angular', 'Material UI', 'Video.js', 'Express.js'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github size={18} className="text-gray-800" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="text-gray-800" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium border border-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
          >
            <span>View All Projects</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;