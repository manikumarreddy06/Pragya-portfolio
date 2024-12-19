import React from 'react';
import { Microscope, Award, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">
              Advancing Bionanotechnology for Tomorrow's Medicine
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Pioneering research in molecular engineering and nanoscale therapeutics
              at the intersection of biology and nanotechnology. Developing innovative
              solutions for targeted drug delivery and biosensing applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#research"
                className="bg-[#1A365D] text-white px-6 py-3 rounded-lg hover:bg-[#4A90A0] transition-colors"
              >
                View Research
              </a>
              <a
                href="#contact"
                className="border-2 border-[#1A365D] text-[#1A365D] px-6 py-3 rounded-lg hover:bg-[#1A365D] hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
              alt="Research scientist working"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-[#4A90A0] p-3 rounded-full">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A365D]">5+ Years</p>
                  <p className="text-sm text-gray-600">Research Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Award className="w-12 h-12 text-[#4A90A0] mb-4" />
            <h3 className="text-xl font-semibold text-[#1A365D] mb-2">39+ Publications</h3>
            <p className="text-gray-600">Published in leading scientific journals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BookOpen className="w-12 h-12 text-[#4A90A0] mb-4" />
            <h3 className="text-xl font-semibold text-[#1A365D] mb-2">2 Patents Granted</h3>
            <p className="text-gray-600">With 2 more patent applications</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Microscope className="w-12 h-12 text-[#4A90A0] mb-4" />
            <h3 className="text-xl font-semibold text-[#1A365D] mb-2">5 Copyrights</h3>
            <p className="text-gray-600">In bionanotechnology research</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;