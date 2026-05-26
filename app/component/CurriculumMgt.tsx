import React from 'react';

export const ImpactSection: React.FC = () => {
  const pillars = [
    {
      id: "01",
      title: "Structural Foundation",
      items: ["Timely Semester Course Updates", "Optimized Study Infrastructure"],
      description: "We streamline the academic journey by providing clear roadmaps and the physical resources necessary for deep, focused study."
    },
    {
      id: "02",
      title: "Professional Immersion",
      items: ["Corporate Office Visits", , "Direct Internship Pipelines"],
      description: "Bridging the gap between theory and the boardroom through direct exposure to industry leaders and real-world work environments."
    },
    {
      id: "03",
      title: "Holistic Excellence",
      items: ["Competitive Sports Leagues", "Annual Dinner Award Ceremonies"],
      description: "Cultivating well-rounded professionals by celebrating academic merit and fostering leadership through team-based athletics."
    }
  ];

  return (
    <section className="bg-[#f7f7f6] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-20">
          <h2 className="text-[#1853ad] text-xs font-bold tracking-[0.2em] uppercase mb-4">The Curriculum & Coordination</h2>
          <p className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
            How we transform the <span className="font-bold text-[#1853ad]">undergraduate experience</span> into a career-ready trajectory.
          </p>
        </div>

        <div className="space-y-16">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="group border-t border-slate-200 pt-10 flex flex-col md:flex-row gap-8">
              
              {/* ID & Title Column */}
              <div className="md:w-1/3">
                <span className="text-[#b24a53] font-mono text-xl block mb-2">{pillar.id}</span>
                <h3 className="text-[#1853ad] text-2xl font-bold uppercase tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              {/* Description & List Column */}
              <div className="md:w-2/3">
                <p className="text-[#6c788e] text-lg mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {pillar.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full group-hover:border-[#0c95d9] transition-colors"
                    >
                       {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Impact Quote */}
        <div className="mt-24 p-12 bg-[#1853ad] rounded-2xl text-center text-white">
          <blockquote className="text-2xl font-serif italic mb-6">
            FINSA isn't just an association; it is a system of accountability that ensures no student is left behind in the pursuit of financial mastery.
          </blockquote>
          <p className="text-sm font-bold uppercase tracking-widest text-[#0c95d9]">The FINSA Executive Council</p>
        </div>

      </div>
    </section>
  );
};

