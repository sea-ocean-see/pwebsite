import React from 'react';
import { Microscope, Dna, TestTube } from 'lucide-react';

export const features = [
  {
    title: "Nanotechnology",
    description: "Developing innovative nanoparticle solutions",
    icon: <Microscope className="w-12 h-12 text-indigo-600" />
  },
  {
    title: "Genetic Engineering",
    description: "Advancing genetic modification techniques",
    icon: <Dna className="w-12 h-12 text-indigo-600" />
  },
  {
    title: "Drug Delivery",
    description: "Creating targeted delivery systems",
    icon: <TestTube className="w-12 h-12 text-indigo-600" />
  }
];