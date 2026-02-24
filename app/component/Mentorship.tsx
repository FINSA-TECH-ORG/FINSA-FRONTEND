 "use client"
import React from 'react';
import Image from 'next/image';
import { mentorshipData } from '../assets/mentorshipData';
export const MentorshipSection: React.FC = () => {
  return (
   <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Remains the same */}
        <div className="mb-16 border-l-8 border-[#1853ad] pl-6">
          <h2 className="text-[#1853ad] text-4xl font-extrabold tracking-tight uppercase">
            The Mentorship Lab
          </h2>
          <p className="text-[#6c788e] text-lg mt-2 font-medium">
            Where raw data meets strategic execution. No simulations—just real-world financial architecture.
          </p>
        </div>

        {/* Updated Adaptive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {mentorshipData.map((item) => (
            <div key={item.id} className="flex flex-col group">
              
              {/* Image Container */}
              <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-t-2xl md:rounded-2xl cursor-pointer bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                />

                {/* Desktop-Only Hover Overlay (Hidden on Mobile) */}
                <div 
                  style={{ backgroundColor: `${item.color}ee` }} 
                  className="hidden md:flex absolute inset-0 p-8 flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20"
                >
                  <div className="w-12 h-1 bg-white mb-6" />
                  <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="text-white text-xs font-mono font-semibold py-2 px-3 border border-white/30 rounded-md w-fit bg-white/10">
                    {item.technicalFocus}
                  </div>
                </div>

                {/* Mobile-Only Title Label (Overlayed on image for context) */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                   <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>

              {/* Mobile-Only Description (Visible beneath image on small screens) */}
              <div className="md:hidden bg-gray-50 p-6 rounded-b-2xl border-b-4" style={{ borderColor: item.color }}>
                <span className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: item.color }}>
                  {item.technicalFocus}
                </span>
                <p className="text-[#6c788e] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Technical Footer - Remains the same */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 gap-4">
           <div className="flex flex-wrap justify-center gap-4">
              <span className="text-[#6c788e] text-xs font-bold">#FINANCIAL_MODELLING</span>
              <span className="text-[#6c788e] text-xs font-bold">#FPA_STRATEGY</span>
              <span className="text-[#6c788e] text-xs font-bold">#DATA_ARBITRAGE</span>
           </div>
           <p className="text-[#b24a53] font-bold text-sm italic text-center md:text-right">
             Standardized Excellence. Career Ready.
           </p>
        </div>
      </div>
    </section>
  );
};

