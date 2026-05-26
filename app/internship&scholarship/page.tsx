"use client";

import  { useEffect, useState } from 'react';
import { opportunities } from '../assets/internship&scholarship';
import { getOpportunities } from '@app/lib/Finsa';
import { Opportunity } from '@app/lib/libTypes';

const InternshipHub = () => {
  const [selectedOp, setSelectedOp] = useState<any>(null);
const [internOpportunities, setInternOpportunites] = useState<Opportunity[]>([]);
 const FetchOpp = async()=> {
  try {
  const response =  await getOpportunities()
   setInternOpportunites(response)
  }catch(err){
    throw new Error("Error Occuring the")
  }
//console.log(response)
 }
 useEffect(()=> {
  const callBack = async()=> {
  FetchOpp()
  }
  callBack()
 },[])

  return (
    <section className="bg-[#f7f7f6] py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto"> {/* Centered on Large Screens */}
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[#6c788e] text-xs font-bold tracking-[0.5em] uppercase mb-4">Live Feed</h2>
          <p className="text-4xl font-black text-[#1853ad] italic tracking-tighter">
            Internships & <span className="text-[#b24a53]">Openings.</span>
          </p>
        </div>
 {/* The Update Bar List */}
        <div className="space-y-4">
          {internOpportunities.map((op) => (
            <div 
              key={op.id}
              onClick={() => setSelectedOp(op)}
              className="group w-full bg-white border border-slate-200 p-5 md:p-6 flex flex-col md:flex-row items-center justify-between cursor-pointer hover:border-[#1853ad] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* "New" or "Urgent" Indicator */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${op.status === 'New' ? 'bg-[#0c95d9]' : 'bg-[#b24a53]'}`} />

              <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                <div className="flex-shrink-0 text-center md:text-left">
                  <span className="block text-[10px] font-black text-[#6c788e] uppercase tracking-widest mb-1">Company</span>
                  <span className="text-lg font-bold text-[#1853ad]">{op.company_name}</span>
                </div>
                
                <div className="h-px w-full md:h-10 md:w-px bg-slate-100" />

                <div className="flex-grow text-center md:text-left">
                  <span className="block text-[10px] font-black text-[#6c788e] uppercase tracking-widest mb-1">Position</span>
                  <span className="text-slate-900 font-semibold">{op.position}</span>
                </div>

                <div className="flex-shrink-0 text-center md:text-left">
                  <span className="block text-[10px] font-black text-[#6c788e] uppercase tracking-widest mb-1">Deadline</span>
                  <span className="text-[#b24a53] font-mono text-sm">{op.deadline}</span>
                </div>
              </div>

              <div className="mt-4 md:mt-0 md:ml-6">
                <span className="text-[#0c95d9] group-hover:translate-x-2 transition-transform inline-block">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL WITH BLUR BACKGROUND --- */}
      {selectedOp && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-[#1853ad]/40 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedOp(null)} 
          />
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedOp(null)}
              className="absolute top-8 right-8 text-slate-400 hover:text-[#b24a53] font-black transition-colors"
            >
              ✕
            </button>

            <div className="mb-8">
              <span className="inline-block bg-[#1853ad]/10 text-[#1853ad] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                {selectedOp.type_bagde}
              </span>
              <h3 className="text-3xl font-black text-[#1853ad] tracking-tighter leading-none mb-2">
                {selectedOp.position}
              </h3>
              <p className="text-[#b24a53] font-bold text-lg uppercase tracking-tight">
                {selectedOp.company_name}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 underline decoration-[#0c95d9] decoration-2 underline-offset-4">Details</h4>
                <p className="text-[#6c788e] leading-relaxed italic">
                  {selectedOp.popup_details}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                <p className="text-[#6c788e] text-xs">
                  Applications close: <span className="font-bold text-slate-900">{selectedOp.deadline}</span>
                </p>
                <a href={selectedOp?.application_link}
                 className="bg-[#1853ad] text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#b24a53]
                 transition-colors shadow-lg shadow-[#1853ad]/20">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InternshipHub;