"use client";
import Image from 'next/image';

const executives = [
  {
    id: 1,
    role: "President",
    name: "Oladimeji Hammed",
    bio: "Driving the strategic vision of FINSA with a focus on institutional partnerships and global benchmarking. Adewale has spearheaded the 2026 Expansion roadmap.",
    image: "/President.jpg"
  },
  {
    id: 2,
    role: "Vice President",
    name: "David O. Owoyemi",
    bio: "Leading the technical curriculum and mentorship wings. Chinaza ensures that every member's technical proficiency meets international street standards.",
    image: "/VicePresident.jpg"
  },
  {
    id: 3,
    role: "General Secretary",
    name: "Amarachi Nwogu",
    bio: "Leading the technical curriculum and mentorship wings. Chinaza ensures that every member's technical proficiency meets international street standards.",
    image: "/GenSec.jpg"
  },
  {
    id: 4,
    role: "Assistant General Secretary",
    name: "Foyinsola S.Olaosebikan",
    bio: "Leading the technical curriculum and mentorship wings. Chinaza ensures that every member's technical proficiency meets international street standards.",
    image: "/AssistantGenSec.jpg"
  },
  {
    id: 5,
    role: "Financial Secretary",
    name: "Oderinde A. Aisha",
    bio: "Leading the technical curriculum and mentorship wings. Chinaza ensures that every member's technical proficiency meets international street standards.",
    image: "/FinSec.jpg"
  },
  {
    id: 6,
    role: "Treasurer",
    name: "John Ocheme",
    bio: "Leading the technical curriculum and mentorship wings. Chinaza ensures that every member's technical proficiency meets international street standards.",
    image: "/Treasurer.jpg"
  },
  {
    id: 7,
    role: "Sport Secretary",
    name: "Prosper Chukwuebuka Ugbor",
    bio: "Leading the technical curriculum and mentorship wings. Chinaza ensures that every member's technical proficiency meets international street standards.",
    image: "/SportSec.jpg"
  },
   {
    id: 8,
    role: "Social Secretary",
    name: "Eunice Jagunna",
    bio: "Leading the technical curriculum and mentorship wings. Chinaza ensures that every member's technical proficiency meets international street standards.",
    image: "/SocialSec.jpg"
  },
   {
    id: 9,
    role: "Welfare Secretary",
    name: "Daniella Ugwuebgbu",
    bio: "Leading the technical curriculum and mentorship wings. Chinaza ensures that every member's technical proficiency meets international street standards.",
    image: "/WelFareSec.jpg"
  },
  {
    id: 10,
    role: "Public Relations officer",
    name: "Adeyehun Temitope",
    bio: "Leading the technical curriculum and mentorship wings. Chinaza ensures that every member's technical proficiency meets international street standards.",
    image: "/PublicRelationOfficer.jpg"
  }
];

const ExecutiveProfiles = () => {
  return (
    <section className="bg-[#f7f7f6] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-32">
          <h1 className="text-[#6c788e] text-xs font-bold tracking-[0.5em] uppercase mb-4">Leadership</h1>
          <p className="text-5xl md:text-7xl font-black text-[#1853ad] italic tracking-tighter">
            The FINSA <span className="text-[#b24a53]">Executive.</span>
          </p>
        </div>

        {/* Profiles - Non-Card Layout */}
        <div className="space-y-40">
          {executives.map((exec, index) => (
            <div 
              key={exec.id} 
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column - Large & Artistic */}
              <div className="w-full md:w-5/12 relative aspect-[3/4] group">
                <div className="absolute inset-0 border-[12px] border-[#1853ad] translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative w-full h-full overflow-hidden shadow-2xl">
                  <Image 
                    src={exec.image} 
                    alt={exec.name} 
                    fill 
                    className="object-cover  transition-all duration-700"
                  />
                </div>
              </div>

              {/* Text Column - Editorial Style */}
              <div className="w-full md:w-7/12 space-y-8">
                <div>
                  <span className="text-[#b24a53] font-bold uppercase tracking-widest text-sm">
                    {exec.role}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-black text-[#1853ad] mt-2 mb-4 tracking-tighter">
                    {exec.name}
                  </h2>
                  
                </div>

                <p className="text-[#6c788e] text-xl md:text-2xl leading-relaxed max-w-xl font-medium italic">
                  {exec.bio}
                </p>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveProfiles;