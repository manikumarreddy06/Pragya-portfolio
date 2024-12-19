import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Search, ChevronDown } from 'lucide-react';

const Publications = () => {
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const publications = [
    {
      title: "Theranostic dye entrapped in an optimized blended-polymer matrix for effective photodynamic inactivation of diseased cells",
      journal: "Naunyn-Schmiedeberg's Archives of Pharmacology",
      year: 2024,
      authors: "Pallavi P, Girigoswami K, Harini K, Gowtham P, Thirumalai A, Girigoswami A",
      impactFactor: 3.1,
      doi: "10.1007/s00210-024-00000-0"
    },
    {
      title: "Hydrogels of Alginate Derivative‐Encased Nanodots Featuring Carbon‐Coated Manganese Ferrite Cores with Gold Shells to Offer Antiangiogenesis with Multimodal Imaging‐Based Theranostics",
      journal: "Advanced Therapeutics",
      year: 2024,
      authors: "Gowtham P, Girigoswami K, Prabhu AD, Pallavi P, Thirumalai A, Harini K, Girigoswami A",
      impactFactor: 4.6,
      doi: "10.1002/adtp.202400054"
    },
    // Add more publications here...
  ];

  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  
  const filteredPublications = publications.filter(pub => {
    const matchesYear = yearFilter === 'all' || pub.year.toString() === yearFilter;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  const metrics = {
    totalPublications: 39,
    totalCitations: 500, // Update with actual number
    hIndex: 12, // Update with actual number
    totalImpactFactor: publications.reduce((sum, pub) => sum + (pub.impactFactor || 0), 0)
  };

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-12">Publications</h2>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search publications..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90A0] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-[#4A90A0] focus:border-transparent"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#1A365D] mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <p className="text-[#4A90A0] mb-2">
                    {pub.journal} • {pub.year}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    {pub.impactFactor && (
                      <span className="bg-[#4A90A0]/10 px-3 py-1 rounded-full">
                        IF: {pub.impactFactor}
                      </span>
                    )}
                    {pub.doi && (
                      <span>DOI: {pub.doi}</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="p-2 text-[#4A90A0] hover:text-[#1A365D] transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-[#4A90A0] hover:text-[#1A365D] transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <FileText className="w-8 h-8 text-[#4A90A0] mb-4" />
            <h3 className="text-2xl font-semibold text-[#1A365D] mb-2">
              {metrics.totalPublications}
            </h3>
            <p className="text-gray-600">Total Publications</p>
          </div>
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#1A365D] mb-2">
              {metrics.totalCitations}
            </h3>
            <p className="text-gray-600">Total Citations</p>
          </div>
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#1A365D] mb-2">
              {metrics.hIndex}
            </h3>
            <p className="text-gray-600">H-Index</p>
          </div>
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#1A365D] mb-2">
              {metrics.totalImpactFactor.toFixed(1)}
            </h3>
            <p className="text-gray-600">Cumulative IF</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://orcid.org/0000-0001-6422-9697"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1A365D] text-white px-6 py-3 rounded-lg hover:bg-[#4A90A0] transition-colors"
          >
            Explore My Work Here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;