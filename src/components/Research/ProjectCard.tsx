import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { ResearchProject } from './types';

interface ProjectCardProps {
  project: ResearchProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-[#1A365D] text-white px-3 py-1 rounded-full text-sm">
          {project.year}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#1A365D] mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <button className="flex items-center text-[#4A90A0] hover:text-[#1A365D] transition-colors">
            Learn more <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button className="flex items-center text-[#4A90A0] hover:text-[#1A365D] transition-colors">
            <Download className="w-4 h-4 mr-2" /> Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;