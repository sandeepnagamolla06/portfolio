import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'Programming' },
  { name: 'Data Analysis', level: 90, category: 'Data Science' },
  { name: 'Machine Learning', level: 85, category: 'Data Science' },
  { name: 'Deep Learning', level: 80, category: 'Data Science' },
  { name: 'NLP', level: 90, category: 'Data Science' },
  { name: 'SQL', level: 85, category: 'Database' },
  { name: 'R', level: 75, category: 'Programming' },
  { name: 'Data Visualization', level: 85, category: 'Data Science' },
  { name: 'Big Data (Spark)', level: 75, category: 'Data Engineering' },
  { name: 'Cloud (AWS)', level: 80, category: 'Infrastructure' },
  { name: 'TensorFlow/PyTorch', level: 85, category: 'Machine Learning' },
  { name: 'JavaScript/TypeScript', level: 70, category: 'Programming' },
];

const categoryOrder = [
  'Data Science',
  'Machine Learning',
  'Programming',
  'Database',
  'Data Engineering',
  'Infrastructure'
];

const Skills: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Sort categories according to categoryOrder
  const sortedCategories = Object.keys(skillsByCategory).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A comprehensive overview of my technical expertise and proficiency levels in various domains.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {sortedCategories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{category}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {skillsByCategory[category].map((skill) => (
                  <div key={skill.name} className="transform transition-transform hover:scale-105">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"
                        style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Other Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Docker', 'Kubernetes', 'Flask', 'FastAPI', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Tableau', 'Power BI', 'MLOps', 'CI/CD', 'RESTful APIs'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;