import React from 'react';
import EducationCard from './EducationCard';
import { educationData } from './educationData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-12">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              year={edu.year}
              grade={edu.grade}
              thesis={edu.thesis}
              icon={edu.icon}
            />
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#1A365D] mb-4">Academic Achievements</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#4A90A0] rounded-full mr-3"></span>
              Graduated with First Class in Bachelor's degree
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#4A90A0] rounded-full mr-3"></span>
              Specialized research in Photodynamic Therapy and Imaging
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#4A90A0] rounded-full mr-3"></span>
              Advanced expertise in Medical Bionanotechnology
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;