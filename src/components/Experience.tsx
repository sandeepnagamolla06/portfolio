import React, { useState } from 'react';
import { CalendarDays, MapPin } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Data Scientist',
    company: 'BNY Mellon',
    location: 'New York, NY',
    period: 'Feb 2025 – Present',
    description:
      'Developing and implementing machine learning solutions for credit risk assessment, financial analytics, and process automation.',
    achievements: [
      'Built a credit risk model (XGBoost, RNN) with 0.91 AUC, reducing defaults by 18%',
      'Designed Power BI dashboards tracking high-risk assets across 12 departments',
      'Automated investor reports via LangChain & OpenAI, saving 20+ hours/week',
      'Used SpaCy & Transformers for earnings call sentiment analysis, cutting reporting time by 70%',
      'Optimized ETL pipelines with AWS Glue & PySpark, boosting efficiency by 32%',
    ],
  },
  {
    id: 'exp2',
    role: 'Data Analyst',
    company: 'Capgemini',
    location: 'Hyderabad, India',
    period: 'Sep 2021 – Dec 2022',
    description:
      'Led data analytics initiatives focusing on retail demand forecasting, recommendation systems, and fraud detection.',
    achievements: [
      'Forecasted retail demand with R & TensorFlow, improving inventory accuracy by 14%',
      'Built recommender & fraud detection models (NMF, NCF, BERT), boosting conversions by 12% and achieving 95.7% fraud precision',
      'Automated ETL with SSIS & Azure; optimized Snowflake data models, cutting manual work by 70% and report load times by 40%',
    ],
  },
  {
    id: 'exp3',
    role: 'Associate Data Analyst',
    company: 'Adani Group',
    location: 'Hyderabad, India',
    period: 'Oct 2020 - Aug 2021',
    description:
      'Drove data analytics initiatives focusing on data validation, energy optimization, and real-time ETL pipeline development.',
    achievements: [
      'Built a Bash-MySQL data validation framework, cutting QA time by 12 hours/week and improving anomaly detection by 26%.',
      'Developed Power BI dashboards and time-series forecasts, reducing electricity costs by 5.6% and improving budget accuracy by 20%',
      'Engineered real-time ETL pipelines (Kafka, PostgreSQL) and modeled KPIs in Snowflake, boosting operational and inventory efficiency',
    ],
  },
];

const Experience: React.FC = () => {
  const [activeExp, setActiveExp] = useState<string>(experiences[0].id);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            My professional journey as a data scientist and machine learning
            practitioner.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Navigation sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="bg-gray-50 rounded-lg p-4">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(exp.id)}
                  className={`w-full text-left p-4 my-2 rounded-lg transition-all focus:outline-none ${
                    activeExp === exp.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  <h3 className="font-medium">{exp.role}</h3>
                  <p
                    className={
                      activeExp === exp.id ? 'text-blue-100' : 'text-gray-500'
                    }
                  >
                    {exp.company}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Experience details */}
          <div className="md:col-span-8 lg:col-span-9">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`bg-white rounded-lg shadow-lg p-6 md:p-8 transition-opacity duration-300 ${
                  activeExp === exp.id ? 'opacity-100' : 'hidden'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl text-blue-600 font-medium">
                    {exp.company}
                  </h4>

                  <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600">
                    <div className="flex items-center">
                      <CalendarDays size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
