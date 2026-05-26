'use client';

import React, { useState } from 'react';

export default function ProposalModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="px-6 py-3 bg-[#1853ad] hover:bg-[#123f85] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all duration-200"
      >
        View FINSA 2026 Proposal
      </button>

      {/* Modal Overlay Shell */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-md transform overflow-hidden rounded-[2rem] bg-white border border-slate-100 p-8 text-left shadow-2xl transition-all z-10">
            
            {/* Top Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Red Badge Indicator */}
            <div className="mb-4 inline-block">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b24a53] bg-red-50 border border-red-100 px-2.5 py-1 rounded-md">
                Official Document
              </span>
            </div>

            {/* Typography */}
            <h3 className="text-2xl font-black text-[#1853ad] tracking-tight leading-tight mb-3">
              FINSA 2026 Proposal
            </h3>
            <p className="text-sm text-[#6c788e] leading-relaxed mb-8">
              Access the complete strategic roadmap, operational targets, and corporate sponsorship portfolios engineered for the Finance Symposium 5.0 and upcoming fiscal term.
            </p>

            {/* Flow Action Controls */}
            <div className="flex flex-col gap-3">
              
              {/* Primary Blue Download Anchor */}
              <a
                href="/Finsaproposal.pdf"
                download="FINSA_2026_Proposal.pdf"
                onClick={closeModal}
                className="w-full py-3.5 bg-[#1853ad] hover:bg-[#123f85] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors duration-200 shadow-sm text-center block"
              >
                Download Proposal
              </a>

              {/* Neutral Exit Button */}
              <button
                onClick={closeModal}
                className="w-full py-3.5 bg-[#f7f7f6] hover:bg-[#ededec] text-[#6c788e] font-bold text-xs uppercase tracking-widest rounded-xl transition-colors duration-200"
              >
                Exit
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}