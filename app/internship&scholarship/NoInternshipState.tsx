'use client';

import React from 'react';

interface EmptyInternshipsProps {
  onResetFilters?: () => void;
}

export default function EmptyInternships({ onResetFilters }: EmptyInternshipsProps) {
  return (
    <div className="w-full max-w-xl mx-auto text-center py-16 px-6 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm transition-all duration-300">
      
      {/* Dynamic Graphic Container */}
      <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
        
        {/* Subtle Decorative Background Ring */}
        <div className="absolute inset-2 border border-slate-100 rounded-xl pointer-events-none" />
        
        {/* Magnifying Glass & Document Icon */}
        <svg className="w-10 h-10 text-[#6c788e]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 .714-.047 1.416-.14 2.107" />
        </svg>

        {/* Small Red Indicator Dot */}
        <span className="absolute top-5 right-5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b24a53] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#b24a53]"></span>
        </span>
      </div>

      {/* Brand Badge */}
      <div className="mb-4 inline-block">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b24a53] bg-red-50 border border-red-100 px-2.5 py-1 rounded-md">
          Search Status
        </span>
      </div>

      {/* Main Message Typography */}
      <h3 className="text-2xl font-black text-[#1853ad] tracking-tight mb-3">
        No Opportunities Found
      </h3>
      
      <p className="text-sm text-[#6c788e] leading-relaxed max-w-sm mx-auto mb-8">
        We {"couldn't"} find any internship positions matching your current search criteria or active filters at this moment.
      </p>

      {/* Suggested Action Blocks */}
      <div className="bg-[#f7f7f6] rounded-2xl p-5 mb-8 text-left max-w-md mx-auto border border-[#ededec]">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1853ad] mb-2.5">
          Recommended Next Steps
        </h4>
        <ul className="space-y-2 text-xs text-[#6c788e] font-medium">
          <li className="flex items-start gap-2">
            <span className="text-[#b24a53] font-bold">✓</span> Check your spelling or loosen your keyword parameters.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#b24a53] font-bold">✓</span> Remove specific industry tags like Frontend, Fintech, or Investment Banking.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#b24a53] font-bold">✓</span> Broaden your search to explore general finance and technology tracks.
          </li>
        </ul>
      </div>

      {/* Action Controls */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
        
        {/* Reset Button (Executes callback passed from parent directory) */}
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="flex-1 py-3.5 bg-[#1853ad] hover:bg-[#123f85] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors duration-200 shadow-sm"
          >
            Clear Active Filters
          </button>
        )}

        {/* Secondary Contact/Support Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=finsa4unilag@gmail.com&su=Internship%20Board%20Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 bg-white border-2 border-slate-200 hover:border-slate-300 text-[#6c788e] font-bold text-xs uppercase tracking-widest rounded-xl transition-colors duration-200 text-center block"
        >
          Inquire with FINSA
        </a>

      </div>

    </div>
  );
}