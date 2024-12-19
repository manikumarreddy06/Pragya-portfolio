import React from 'react';
import { ArrowLeft } from 'lucide-react';
import PublicationsList from './PublicationsList';
import PublicationFilters from './PublicationFilters';
import { Publication } from './types';

interface PublicationsListViewProps {
  publications: Publication[];
  onBack: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  yearFilter: string;
  setYearFilter: (year: string) => void;
  years: number[];
}

const PublicationsListView: React.FC<PublicationsListViewProps> = ({
  publications,
  onBack,
  searchQuery,
  setSearchQuery,
  yearFilter,
  setYearFilter,
  years,
}) => {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#4A90A0] hover:text-[#1A365D] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Publications
        </button>

        <h2 className="text-3xl font-bold text-[#1A365D] mb-12">All Publications</h2>

        <PublicationFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          yearFilter={yearFilter}
          setYearFilter={setYearFilter}
          years={years}
        />

        <div className="mt-8">
          <PublicationsList publications={publications} />
        </div>
      </div>
    </section>
  );
};

export default PublicationsListView;