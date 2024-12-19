import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon: Icon, title, skills }) => {
  return (
    <div className="bg-[#F5F5F5] p-6 rounded-lg">
      <div className="bg-[#4A90A0]/10 p-3 rounded-full w-fit mb-4">
        <Icon className="w-6 h-6 text-[#4A90A0]" />
      </div>
      <h3 className="text-lg font-semibold text-[#1A365D] mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700">
            <span className="w-1.5 h-1.5 bg-[#4A90A0] rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;