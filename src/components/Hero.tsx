import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="top" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 to-gray-100 pt-16"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl">
          <img 
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Sandeep Nagamolla" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
          <span className="inline-block animate-fadeIn">Sandeep Nagamolla</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-6 animate-fadeIn animation-delay-200">
          Data Scientist & Machine Learning Engineer
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed animate-fadeIn animation-delay-400">
          I leverage data and AI to solve complex problems and drive business value. 
          Passionate about creating impactful solutions through machine learning, 
          data analysis, and innovative technology.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fadeIn animation-delay-600">
          <a 
            href="mailto:sreddy.nagamolla@gmail.com" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all hover:shadow-lg"
          >
            Get in Touch
          </a>
          <a 
            href="#about" 
            className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg shadow-md transition-all hover:shadow-lg border border-gray-200"
          >
            Learn More
          </a>
        </div>
        
        <div className="animate-bounce absolute bottom-8">
          <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;