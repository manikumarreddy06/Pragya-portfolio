import React from 'react';
import { GraduationCap, BookOpen, FileText } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  thesis?: string;
  icon?: 'phd' | 'masters' | 'bachelors';
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  year,
  grade,
  thesis,
  icon = 'bachelors',
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'phd':
        return <GraduationCap className="w-8 h-8 text-[#4A90A0]" />;
      case 'masters':
        return <BookOpen className="w-8 h-8 text-[#4A90A0]" />;
      default:
        return <FileText className="w-8 h-8 text-[#4A90A0]" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#F5F5F5] p-3 rounded-lg">
          {getIcon()}
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-[#1A365D] mb-2">{degree}</h3>
          <p className="text-[#4A90A0] font-semibold mb-1">{institution}</p>
          <p className="text-gray-600 mb-2">{year}</p>
          <p className="text-gray-700 mb-2">Grade: {grade}</p>
          {thesis && (
            <div className="mt-4 border-t pt-4">
              <p className="text-sm font-semibold text-[#1A365D] mb-1">Thesis</p>
              <p className="text-gray-600 text-sm">{thesis}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;