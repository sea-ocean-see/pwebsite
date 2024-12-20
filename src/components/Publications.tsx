import React from 'react';
import { publications } from '../data/publications';
import { ScrollText } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Publications & Research</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <ScrollText className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-3">{pub.authors}</p>
                  <p className="text-sm text-gray-500">{pub.journal}, {pub.year}</p>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-700 text-sm mt-2 inline-block"
                    >
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;