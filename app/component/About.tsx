"use client";

export const About = () => {


  // Growth Interval Data for History
 

  return (
    <section id="About" className="bg-white py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-[#6c788e] text-xs font-bold tracking-[0.4em] uppercase mb-4">The Foundation</h2>
          <p className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
            An institution built on <span className="font-bold text-[#1853ad]">Rigor</span> and <span className="font-bold text-[#b24a53]">Purpose</span>.
          </p>
        </div>

        {/* The Three-Carded Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
          
          {/* Mission Card */}
          <div className="group relative p-12 md:p-16 min-h-[500px] flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 hover:bg-slate-50 transition-all duration-500">
            <div className="absolute top-0 left-0 h-2 w-0 group-hover:w-full bg-[#1853ad] transition-all duration-700" />
            <div>
              <h3 className="text-[#1853ad] text-3xl font-black uppercase italic tracking-tighter mb-8">Mission</h3>
              <p className="text-[#6c788e] text-xl leading-relaxed">
                To transform students into elite financial professionals through rigorous technical training in 
                <span className="text-[#1853ad] font-semibold"> financial modeling, FP&A, and data analytics</span>. 
                We ensure every member is day-one ready for the global markets.
              </p>
            </div>
            <div className="text-[10px] font-bold tracking-widest text-[#1853ad]/40 uppercase italic">Pillar One: Current Duty</div>
          </div>

          {/* Vision Card */}
          <div className="group relative p-12 md:p-16 min-h-[500px] flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 hover:bg-slate-50 transition-all duration-500">
            <div className="absolute top-0 left-0 h-2 w-0 group-hover:w-full bg-[#b24a53] transition-all duration-700" />
            <div>
              <h3 className="text-[#b24a53] text-3xl font-black uppercase italic tracking-tighter mb-8">Vision</h3>
              <p className="text-[#6c788e] text-xl leading-relaxed">
                To serve as the primary <span className="text-[#b24a53] font-semibold">global gateway</span> for 
                Nigerian finance talent, creating a future where our scholars lead the most influential 
                financial institutions in the world.
              </p>
            </div>
            <div className="text-[10px] font-bold tracking-widest text-[#b24a53]/40 uppercase italic">Pillar Two: Horizon</div>
          </div>

          {/* History Card */}
          <div className="group relative p-12 md:p-16 min-h-[500px] flex flex-col justify-between hover:bg-slate-50 transition-all duration-500">
            <div className="absolute top-0 left-0 h-2 w-0 group-hover:w-full bg-[#0c95d9] transition-all duration-700" />
            <div>
              <h3 className="text-[#0c95d9] text-3xl font-black uppercase italic tracking-tighter mb-8">History</h3>
              <p className="text-[#6c788e] text-xl leading-relaxed">
                Born out of the need for specialized coordination, FINSA has evolved from a local association 
                into a <span className="text-[#0c95d9] font-semibold">technical powerhouse</span>. Our legacy is 
                marked by constant, impeccable growth intervals.
              </p>
           
            </div>
            <div className="text-[10px] font-bold tracking-widest text-[#0c95d9]/40 uppercase italic">Pillar Three: Legacy</div>
          </div>

        </div>
      </div>

      {/* --- HISTORY MODAL (Timeline) --- */}
   
    </section>
  );
};

