import React from 'react';
import { Award, FileCheck } from 'lucide-react';
import PatentCard from './PatentCard';
import { grantedPatents, pendingPatents } from './patentsData';

const Patents = () => {
  return (
    <section id="patents" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-12">Patents</h2>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#4A90A0]" />
              <h3 className="text-2xl font-semibold text-[#1A365D]">Granted Patents</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {grantedPatents.map((patent, index) => (
                <PatentCard key={index} {...patent} status="granted" />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-6 h-6 text-[#4A90A0]" />
              <h3 className="text-2xl font-semibold text-[#1A365D]">Patent Applications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pendingPatents.map((patent, index) => (
                <PatentCard key={index} {...patent} status="pending" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patents;