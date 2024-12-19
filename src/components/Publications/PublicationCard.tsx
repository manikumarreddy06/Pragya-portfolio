import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Publication } from './types';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-[#1A365D] mb-2">
            {publication.title}
          </h3>
          <p className="text-gray-600 mb-2">{publication.authors}</p>
          <p className="text-[#4A90A0] mb-2">
            {publication.journal} • {publication.year}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {publication.impactFactor && (
              <span className="bg-[#4A90A0]/10 px-3 py-1 rounded-full">
                IF: {publication.impactFactor}
              </span>
            )}
            {publication.doi && (
              <span>DOI: {publication.doi}</span>
            )}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="p-2 text-[#4A90A0] hover:text-[#1A365D] transition-colors">
            <Download className="w-5 h-5" />
          </button>
          {publication.doi && (
            <a 
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#4A90A0] hover:text-[#1A365D] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;