import React from 'react';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a dedicated Data Scientist with a passion for transforming complex data into actionable insights. 
            With expertise in machine learning, natural language processing, and data visualization, I specialize in 
            building solutions that drive business decisions and create impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Sandeep working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-blue-50 rounded-lg -z-10"></div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a results-driven data scientist with a strong background in natural language processing 
                and predictive modeling. I combine analytical skills with technical expertise to develop 
                innovative solutions that solve real-world problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Experience</h4>
                  <p className="text-gray-600">4+ years of industry experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg text-teal-600">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Education</h4>
                  <p className="text-gray-600">Master's in Data Analytics</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-lg text-amber-600">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Tech Stack</h4>
                  <p className="text-gray-600">Python, ML, NLP, Big Data</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg text-purple-600">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Certifications</h4>
                  <p className="text-gray-600">AWS, TensorFlow, PyTorch</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                View Full Resume
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
