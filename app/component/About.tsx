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
          


                 {/* History Card */}
          <div className="group relative p-12 md:p-16 min-h-[500px] flex flex-col justify-between hover:bg-slate-50 transition-all duration-500">
            <div className="absolute top-0 left-0 h-2 w-0 group-hover:w-full bg-[#0c95d9] transition-all duration-700" />
            <div>
              <h3 className="text-[#0c95d9] text-3xl font-black uppercase italic tracking-tighter mb-8"> About Us</h3>
              <p className="text-[#6c788e] text-xl leading-relaxed">
              The Finance Students’ Association (FINSA) is the ocial
student body of the Department of Finance at the
University of Lagos. We are committed to shaping future
finance professionals by providing opportunities that
bridge the gap between academic knowledge and real world applications. With a vibrant membership of nearly
1,000 students, FINSA offers a dynamic platform where
members engage in specialized training, mentorship, and
networking opportunities. 
              </p>
           
            </div>
            <div className="text-[10px] font-bold tracking-widest text-[#0c95d9]/40 uppercase italic">Pillar Three: Legacy</div>
          </div>
          {/* Mission Card */}
          <div className="group relative p-12 md:p-16 min-h-[500px] flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 hover:bg-slate-50 transition-all duration-500">
            <div className="absolute top-0 left-0 h-2 w-0 group-hover:w-full bg-[#b24a53]  transition-all duration-700" />
            <div>
              <h3 className="text-[#b24a53]  text-3xl font-black uppercase italic tracking-tighter mb-8">Mission</h3>
              <p className="text-[#6c788e] text-xl leading-relaxed">
                To provide high-quality finance education that develops
students into well-rounded professionals, equipped with
the expertise and critical thinking skills needed to excel in
the fast-paced and evolving globalfinance industry.
              </p>
            </div>
            <div className="text-[10px] font-bold tracking-widest text-[#1853ad]/40 uppercase italic">Pillar One: Current Duty</div>
          </div>


          {/* Vision Card */}
          <div className="group relative p-12 md:p-16 min-h-[500px] flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 hover:bg-slate-50 transition-all duration-500">
            <div className="absolute top-0 left-0 h-2 w-0 group-hover:w-full bg-[#1853ad] transition-all duration-700" />
            <div>
              <h3 className="text-[#1853ad] text-3xl font-black uppercase italic tracking-tighter mb-8">Vision</h3>
              <p className="text-[#6c788e] text-xl leading-relaxed">
               To be the leading student organization in Nigeria, shaping
the next generation of finance leaders through innovative
learning and strong industry collaboration.
              </p>
            </div>
            <div className="text-[10px] font-bold tracking-widest text-[#b24a53]/40 uppercase italic">Pillar Two: Horizon</div>
          </div>

   

        </div>
      </div>

      {/* --- HISTORY MODAL (Timeline) --- */}
   
    </section>
  );
};

