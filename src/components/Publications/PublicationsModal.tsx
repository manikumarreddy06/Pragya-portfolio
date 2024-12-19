import React from 'react';
import { X } from 'lucide-react';
import { Publication } from './types';
import PublicationsList from './PublicationsList';
import PublicationFilters from './PublicationFilters';

interface PublicationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  publications: Publication[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  yearFilter: string;
  setYearFilter: (year: string) => void;
  years: number[];
}

const PublicationsModal: React.FC<PublicationsModalProps> = ({
  isOpen,
  onClose,
  publications,
  searchQuery,
  setSearchQuery,
  yearFilter,
  setYearFilter,
  years,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#1A365D]">All Publications</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <PublicationFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            yearFilter={yearFilter}
            setYearFilter={setYearFilter}
            years={years}
          />
          
          <div className="overflow-y-auto max-h-[60vh]">
            <PublicationsList publications={publications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsModal;