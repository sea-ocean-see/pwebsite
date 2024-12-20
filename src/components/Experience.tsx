import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Research Scientist",
      company: "BioTech Innovations Lab",
      period: "2020 - Present",
      description: "Leading research in nanoparticle-based drug delivery systems and tissue engineering applications.",
      achievements: [
        "Developed novel drug delivery platform reducing side effects by 60%",
        "Published 5 high-impact papers in leading journals",
        "Secured $2M in research grants"
      ]
    },
    {
      title: "Research Fellow",
      company: "Advanced Medical Research Institute",
      period: "2018 - 2020",
      description: "Conducted research on regenerative medicine applications using stem cells.",
      achievements: [
        "Pioneered new stem cell differentiation protocol",
        "Mentored 4 graduate students",
        "Filed 2 patents"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600">{exp.title}</h3>
                  <p className="text-lg text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;