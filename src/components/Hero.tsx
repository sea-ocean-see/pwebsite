import React from 'react';
import { FeatureCard } from './ui/FeatureCard';
import { features } from '../data/features';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Advancing Healthcare Through
              <span className="text-indigo-600"> Nanotechnology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pioneering research in nanotechnology, regenerative medicine, and drug delivery
              systems to transform the future of healthcare.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <FeatureCard {...features[0]} />
              <FeatureCard {...features[1]} />
            </div>
            <div className="space-y-6 mt-12">
              <FeatureCard {...features[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;