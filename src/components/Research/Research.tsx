import React from 'react';
import { researchData } from './data';
import ResearchCategory from './ResearchCategory';
import { Microscope, Beaker, Lightbulb } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-12">Research</h2>

        {researchData.map((category, index) => (
          <ResearchCategory key={index} category={category} />
        ))}

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-[#4A90A0]/10 p-3 rounded-full w-fit mb-4">
              <Microscope className="w-6 h-6 text-[#4A90A0]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Research Focus</h3>
            <p className="text-gray-600">Specialized in photodynamic therapy and nanoformulation for cancer treatment</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-[#4A90A0]/10 p-3 rounded-full w-fit mb-4">
              <Beaker className="w-6 h-6 text-[#4A90A0]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Methodology</h3>
            <p className="text-gray-600">Advanced nanoparticle synthesis and characterization techniques</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-[#4A90A0]/10 p-3 rounded-full w-fit mb-4">
              <Lightbulb className="w-6 h-6 text-[#4A90A0]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Innovation</h3>
            <p className="text-gray-600">Novel approaches to targeted drug delivery and imaging</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;