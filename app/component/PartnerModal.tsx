'use client';

import React, { useState } from 'react';

export default function PartnerModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const date = new Date();
  const yearValue = date?.getFullYear()
const email = "finsa4unilag@gmail.com"
const subject = encodeURIComponent(`Corporate Partnership Inquiry - FINSA ${yearValue}`)
const composeGmailPage = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
  return (
    <>
      {/* Footer Trigger Button */}
      <button
        onClick={openModal}
        className="text-sm font-bold bg-red-500 uppercase py-4 px-3  rounded-md
        outline-none tracking-wider text-white hover:text-[#123f85] transition-colors duration-200"
      >
        Partner With Us
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* Modal Card Body */}
          <div className="relative w-full max-w-md transform overflow-hidden rounded-[2rem] bg-white border border-slate-100 p-8 text-left shadow-2xl transition-all z-10">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Red Brand Badge */}
            <div className="mb-4 inline-block">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b24a53] bg-red-50 border border-red-100 px-2.5 py-1 rounded-md">
                Corporate Engagement
              </span>
            </div>

            {/* Typography */}
            <h3 className="text-2xl font-black text-[#1853ad] tracking-tight leading-tight mb-3">
              Partner with FINSA
            </h3>
            <p className="text-sm text-[#6c788e] leading-relaxed mb-8">
              Select an option below to view our corporate sponsorship packages or connect directly with our executive committee regarding collaboration opportunities.
            </p>

            {/* Flow Options Layout */}
            <div className="flex flex-col gap-3">
              
              {/* Option 1: Blue Download Anchor */}
              <a
                href="/Finsaproposal.pdf"
                download="FINSA_2026_Proposal.pdf"
                onClick={closeModal}
                className="w-full py-3.5 bg-[#1853ad] hover:bg-[#123f85] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors duration-200 shadow-sm text-center block"
              >
                Download 2026 Proposal
              </a>

              {/* Option 2: White/Bordered MailTo Anchor */}
              <a
                href={composeGmailPage}
                target = "_blank"
                rel = "noopener noreferer"
                onClick={closeModal}
                className="w-full py-3.5 bg-white border-2 border-[#1853ad] hover:bg-slate-50 text-[#1853ad] font-bold text-xs uppercase tracking-widest rounded-xl transition-colors duration-200 text-center block"
              >
                Contact Official Mail
              </a>

              {/* Cancel Button */}
              <button
                onClick={closeModal}
                className="w-full py-3.5 bg-[#f7f7f6] hover:bg-[#ededec] text-[#6c788e] font-bold text-xs uppercase tracking-widest rounded-xl transition-colors duration-200 mt-2"
              >
                Cancel
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}