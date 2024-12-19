import React, { useState, useMemo } from 'react';
import PublicationCard from './PublicationCard';
import PublicationMetrics from './PublicationMetrics';
import PublicationFilters from './PublicationFilters';
import PublicationsButton from './PublicationsButton';
import PublicationsListView from './PublicationsListView';
import { publications } from './publicationsData';
import { PublicationMetrics as Metrics } from './types';

const Publications = () => {
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showListView, setShowListView] = useState(false);

  const years = useMemo(() => 
    [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a),
    []
  );
  
  const filteredPublications = useMemo(() => 
    publications.filter(pub => {
      const matchesYear = yearFilter === 'all' || pub.year.toString() === yearFilter;
      const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesYear && matchesSearch;
    }),
    [yearFilter, searchQuery]
  );

  const metrics: Metrics = useMemo(() => ({
    totalPublications: publications.length,
    totalCitations: 500,
    hIndex: 12,
    totalImpactFactor: publications.reduce((sum, pub) => sum + (pub.impactFactor || 0), 0)
  }), []);

  if (showListView) {
    return (
      <PublicationsListView
        publications={filteredPublications}
        onBack={() => setShowListView(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
        years={years}
      />
    );
  }

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-12">Publications</h2>

        <PublicationFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          yearFilter={yearFilter}
          setYearFilter={setYearFilter}
          years={years}
        />

        <div className="space-y-6 mb-12">
          {filteredPublications.slice(0, 5).map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>

        <PublicationsButton 
          onClick={() => setShowListView(true)} 
          className="mb-12"
        />

        <PublicationMetrics metrics={metrics} />
      </div>
    </section>
  );
};

export default Publications;