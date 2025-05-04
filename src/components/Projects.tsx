import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Suggestion Mining',
    category: 'NLP',
    image: 'https://images.pexels.com/photos/7792805/pexels-photo-7792805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A natural language processing system that identifies and extracts suggestions from product reviews and customer feedback.',
    technologies: ['Python', 'BERT', 'PyTorch', 'Flask'],
    githubLink: 'https://github.com/sandeepnagamolla06/Suggestion-Mining',
    demoLink: '#'
  },
  {
    id: 'proj2',
    title: 'Predictive Maintenance System',
    category: 'Machine Learning',
    image: 'https://images.pexels.com/photos/9087432/pexels-photo-9087432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A machine learning system that predicts equipment failures before they occur, reducing downtime and maintenance costs.',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Docker'],
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: 'proj3',
    title: 'Customer Churn Predictor',
    category: 'Data Science',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A predictive analytics solution that identifies customers at risk of churning, allowing targeted retention strategies.',
    technologies: ['Python', 'XGBoost', 'AWS SageMaker', 'Tableau'],
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: 'proj4',
    title: 'Real-time Data Dashboard',
    category: 'Data Visualization',
    image: 'https://images.pexels.com/photos/7947961/pexels-photo-7947961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'An interactive dashboard for monitoring key business metrics in real-time with customizable alerts and reports.',
    technologies: ['Python', 'D3.js', 'Flask', 'PostgreSQL'],
    githubLink: '#',
    demoLink: '#'
  }
];

// Categories for filter
const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A showcase of my data science and machine learning projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                filter === category 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600/90 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={18} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/sandeepnagamolla06" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all hover:shadow-lg"
          >
            <Github size={20} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;