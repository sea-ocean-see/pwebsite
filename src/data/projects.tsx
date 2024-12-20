import React from 'react';
import { Atom, Brain, TestTube } from 'lucide-react';

export const projects = [
  {
    title: "Nanoparticle Drug Delivery System",
    description: "Developed a novel nanoparticle-based drug delivery system for targeted cancer treatment with reduced side effects.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000",
    icon: <Atom className="w-8 h-8" />,
    tags: ["Nanotechnology", "Drug Delivery", "Cancer Treatment"]
  },
  {
    title: "Tissue Engineering Platform",
    description: "Created an innovative platform for engineering complex tissue structures using biocompatible materials.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000",
    icon: <Brain className="w-8 h-8" />,
    tags: ["Regenerative Medicine", "Tissue Engineering", "Biomaterials"]
  },
  {
    title: "Smart Drug Release System",
    description: "Engineered a responsive drug release system that adapts to physiological conditions.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1000",
    icon: <TestTube className="w-8 h-8" />,
    tags: ["Smart Materials", "Drug Delivery", "Biosensors"]
  }
];