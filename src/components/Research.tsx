import React from 'react';
import { ArrowRight } from 'lucide-react';

const Research = () => {
  const projects = [
    {
      title: "Nano-carriers for Targeted Drug Delivery",
      description: "Development of novel nanoparticle-based drug delivery systems for enhanced therapeutic efficacy in cancer treatment.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      year: "2021-Present"
    },
    {
      title: "Smart Biosensors for Disease Detection",
      description: "Engineering of advanced biosensing platforms using DNA nanotechnology for early disease detection.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
      year: "2019-2021"
    },
    {
      title: "Molecular Machines for Cell Repair",
      description: "Design and implementation of molecular machines capable of performing precise cellular repairs.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      year: "2018-2019"
    }
  ];

  return (
    <section id="research" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-12">Research Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[#4A90A0] font-semibold mb-2">{project.year}</div>
                <h3 className="text-xl font-semibold text-[#1A365D] mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="flex items-center text-[#4A90A0] hover:text-[#1A365D] transition-colors">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#1A365D] mb-8">Research Timeline</h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-[#4A90A0]">
                  {project.year}
                </div>
                <div className="flex-grow pl-8 border-l-2 border-[#4A90A0]">
                  <h4 className="text-lg font-semibold text-[#1A365D] mb-2">{project.title}</h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;