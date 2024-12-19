import React from 'react';
import { Publication } from './types';
import { ExternalLink } from 'lucide-react';

interface PublicationsListProps {
  publications: Publication[];
}

const PublicationsList: React.FC<PublicationsListProps> = ({ publications }) => {
  return (
    <div className="space-y-6">
      {publications.map((pub, index) => (
        <div key={index} className="border-b border-gray-200 pb-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="text-sm text-[#4A90A0] font-medium">{pub.year}</span>
              <h3 className="text-lg font-semibold text-[#1A365D] mt-1">{pub.title}</h3>
              <p className="text-gray-600 mt-2">{pub.authors}</p>
              <p className="text-gray-500 mt-1">{pub.journal}</p>
              <div className="flex flex-wrap gap-4 mt-2">
                {pub.impactFactor && (
                  <span className="text-sm text-gray-600">Impact Factor: {pub.impactFactor}</span>
                )}
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#4A90A0] hover:text-[#1A365D]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {pub.doi}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationsList;