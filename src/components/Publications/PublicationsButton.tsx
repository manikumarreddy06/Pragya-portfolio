import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PublicationsButtonProps {
  onClick: () => void;
  className?: string;
}

const PublicationsButton: React.FC<PublicationsButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[#1A365D] text-white px-6 py-3 rounded-lg hover:bg-[#4A90A0] transition-colors flex items-center justify-center gap-2 ${className}`}
    >
      View All Publications
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}

export default PublicationsButton;