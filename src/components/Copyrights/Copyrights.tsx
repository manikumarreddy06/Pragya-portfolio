import React from 'react';
import { Copyright } from 'lucide-react';
import CopyrightCard from './CopyrightCard';
import { copyrightData } from './copyrightData';

const Copyrights = () => {
  return (
    <section id="copyrights" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Copyright className="w-8 h-8 text-[#4A90A0]" />
          <h2 className="text-3xl font-bold text-[#1A365D]">Copyrights</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copyrightData.map((copyright, index) => (
            <CopyrightCard key={index} {...copyright} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Copyrights;