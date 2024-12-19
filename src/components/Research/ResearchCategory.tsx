import React from 'react';
import { ResearchCategory as ResearchCategoryType } from './types';
import ProjectCard from './ProjectCard';
import { GraduationCap } from 'lucide-react';

interface ResearchCategoryProps {
  category: ResearchCategoryType;
}

const ResearchCategory: React.FC<ResearchCategoryProps> = ({ category }) => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-[#4A90A0] p-3 rounded-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#1A365D]">{category.title}</h3>
          <p className="text-[#4A90A0]">
            {category.institution} • {category.period}
          </p>
          <p className="text-gray-600">Advisor: {category.advisor}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ResearchCategory;