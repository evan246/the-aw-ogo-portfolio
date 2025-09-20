import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'Angular', level: 95, icon: '🅰️' },
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Vue.js', level: 20, icon: '💚' },
        { name: 'Next.js', level: 88, icon: '▲' },
      ]
    },
    {
      title: 'Languages & Core',
      skills: [
        { name: 'TypeScript', level: 92, icon: '🔷' },
        { name: 'JavaScript', level: 95, icon: '💛' },
        { name: 'HTML5', level: 98, icon: '🧡' },
        { name: 'CSS3', level: 94, icon: '💙' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'Webpack', level: 85, icon: '📦' },
        { name: 'Node.js', level: 82, icon: '💚' },
        { name: 'GraphQL', level: 80, icon: '💜' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-indigo-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl px-8 py-4 border border-indigo-100">
            <div className="text-2xl">🚀</div>
            <div>
              <p className="font-semibold text-gray-900">Always Learning</p>
              <p className="text-sm text-gray-600">Currently exploring Three.js and WebGL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;