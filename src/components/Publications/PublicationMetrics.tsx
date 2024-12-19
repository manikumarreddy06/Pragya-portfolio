import React from 'react';
import { FileText } from 'lucide-react';
import { PublicationMetrics as Metrics } from './types';

interface PublicationMetricsProps {
  metrics: Metrics;
}

const PublicationMetrics: React.FC<PublicationMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid md:grid-cols-4 gap-8">
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
  );
};

export default PublicationMetrics;