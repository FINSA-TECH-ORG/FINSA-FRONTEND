import React from 'react';
import Image from 'next/image';
import { eventMoments } from '../assets/SymposiumMedia';
export const Symposium: React.FC = () => {
  return (
    <section className="bg-[#1853ad] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#0c95d9] font-bold tracking-[0.3em] uppercase mb-4">Flagship Gatherings</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold leading-tight">
              The Auditorium <br /> Experience.
            </h3>
          </div>
          <p className="text-white/70 max-w-sm text-lg italic border-l border-[#b24a53] pl-4">
            Where the theories of the classroom meet the wisdom of the industry’s greatest minds.
          </p>
        </div>

        {/* Cinematic Snap Carousel */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar">
          {eventMoments.map((event) => (
            <div 
              key={event.id} 
              className="flex-shrink-0 w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-video relative rounded-3xl overflow-hidden snap-center group"
            >
              {/* Event Image */}
              <Image 
                src={event.image} 
                alt={event.title}
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Text Content Overlay */}
              <div className="absolute bottom-0 p-8 md:p-12 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#b24a53] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {event.stats}
                  </span>
                  <div className="h-[1px] w-12 bg-white/30" />
                </div>
                
                <h4 className="text-2xl text-white md:text-3xl font-bold mb-2"> Theme: {event.theme}</h4>
                <p className="text-[#0c95d9] font-semibold mb-4 text-lg">{event.title}</p>
                
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="text-white/60 text-sm">Keynote: {event.speaker}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#1853ad] transition-all">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Indicator/Footer */}
        <div className="mt-8 flex items-center gap-4">
          <div className="h-1 w-24 bg-[#0c95d9]" />
          <p className="text-xs font-mono uppercase tracking-widest text-white/40">
            Scroll to explore moments of impact
          </p>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

