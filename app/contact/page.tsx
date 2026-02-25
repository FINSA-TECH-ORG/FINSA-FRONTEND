"use client";

import React, { useState } from 'react';

const BentoContact = () => {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  return (
    <section className="bg-[#f8fafc] py-24 px-6 min-h-screen flex items-center justify-center">
      {/* Centered Bento Grid Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Module 1: Brand & Purpose (Top Left) */}
        <div className="md:col-span-8 bg-[#0a192f] rounded-[2rem] p-10 text-white flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2e5bff]/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-[#2e5bff]/20 transition-all duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-[#2e5bff] font-mono text-sm tracking-widest uppercase mb-4 font-bold">Inquiry Portal v2.0</h2>
            <p className="text-4xl md:text-5xl font-light leading-tight">
              Let’s architect the <span className="font-bold italic">future</span> of <span className="text-[#2e5bff]">finance.</span>
            </p>
          </div>
          
          <div className="mt-20 flex gap-10 relative z-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Response Time</p>
              <p className="font-bold"> 24 Hours</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Global HQ</p>
              <p className="font-bold">Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Module 2: The Core Form (Main Body) */}
        <form 
          className="md:col-span-8 bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
          onSubmit={(e) => { e.preventDefault(); setStatus("success"); }}
        >
          {/* Honeypot Security */}
          <input type="text" name="bot_check" className="hidden" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group border-b border-slate-200 focus-within:border-[#2e5bff] transition-colors">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Organisation</label>
                <input required name="organisation" type="text" className="w-full py-3 outline-none text-[#0a192f] font-medium bg-transparent" placeholder="Institution Name" />
              </div>
              <div className="group border-b border-slate-200 focus-within:border-[#2e5bff] transition-colors">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name / Position</label>
                <input required name="position" type="text" className="w-full py-3 outline-none text-[#0a192f] font-medium bg-transparent" placeholder="e.g. John Doe | Director" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="group border-b border-slate-200 focus-within:border-[#2e5bff] transition-colors">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp / Phone</label>
                <input required name="whatsapp" type="tel" className="w-full py-3 outline-none text-[#0a192f] font-medium bg-transparent" placeholder="+234..." />
              </div>
              <div className="group border-b border-slate-200 focus-within:border-[#2e5bff] transition-colors">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact Email</label>
                <input required name="email" type="email" className="w-full py-3 outline-none text-[#0a192f] font-medium bg-transparent" placeholder="name@domain.com" />
              </div>
            </div>
          </div>

          <div className="mt-10 border-b border-slate-200 focus-within:border-[#2e5bff] transition-colors">
             <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Engagement Purpose & Details</label>
             <textarea name="message" rows={3} className="w-full py-3 outline-none text-[#0a192f] font-medium bg-transparent resize-none" placeholder="Briefly describe your inquiry..." />
          </div>

          <button className="mt-10 w-full md:w-auto px-12 py-4 bg-[#2e5bff] text-white rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-[#0a192f] hover:shadow-2xl transition-all active:scale-95">
            {status === "success" ? "Transmission Successful" : "Submit Inquiry"}
          </button>
        </form>

        {/* Module 3: Social/Quick Links (Right Side Column) */}
        <div className="md:col-span-4 grid grid-cols-1 gap-4">
          <div className="bg-[#ff5a5f] rounded-[2rem] p-8 text-white flex flex-col justify-center">
             <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2">Urgent Hotline</p>
             <p className="text-2xl font-black">+234 800 FINSA</p>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 flex flex-col justify-between hover:border-[#2e5bff] transition-colors cursor-pointer group">
             <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">LinkedIn Connect</p>
             <p className="text-xl font-bold text-[#0a192f] group-hover:text-[#2e5bff]">Professional Network →</p>
          </div>

          <div className="bg-[#2e5bff] rounded-[2rem] p-8 text-white flex flex-col justify-between">
             <p className="opacity-80 text-[10px] font-bold uppercase tracking-widest">Technical Support</p>
             <p className="text-xl font-bold">help@finsa.org</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoContact;