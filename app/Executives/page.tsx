"use client"
import Image from 'next/image';
import {useState, useEffect} from "react";
import { Executive } from '@app/lib/libTypes';
import { getExecutives } from '@app/lib/Finsa';
import Refresh from '../component/RefreshBlogs';
import { Suspense } from 'react';

const baseUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}`
const executives = [
  {
    id: 1,
    role: "President",
    name: "Hamed Tijani",
    bio: "As the team leader, the Hamed heads the executive cabinet to keep everyone organized, motivated, and working toward the same goals. Serving as the official face of the association, he acts as the primary spokesperson when dealing with University authorities, professors, and external partners. Additionally, Hamed operates as the corporate liaison by meeting with executives, financial institutions, and guest speakers to secure sponsorships and career opportunities for students. Ultimately, he is the primary decision maker, holding full accountability for the association’s budget, strategy, and overall legacy during their tenure.",
    image: "/President.jpg"
  },
  {
    id: 2,
    role: "Vice President",
    name: "David O. Owoyemi",
    bio: "David Provides strategic support to the President, oversees academic affairs to uphold high standards and student development, and coordinates programs and committees to ensure alignment with the association’s vision and objectives.",
    image: "/VicePresident.jpg"
  },
  {
    id: 3,
    role: "General Secretary",
    name: "Amarachi Nwogu",
    bio: "Amarachi is a key administrative leader responsible for coordination between students, committees, and executives . She manage records, agendas, and communications while voicing concerns, ensuring compliance, and promoting inclusivity through strong organization and leadership skills.",
    image: "/GenSec.jpg"
  },
  {
    id: 4,
    role: "Assistant General Secretary",
    name: "Foyinsola S. Olaosebikan",
    bio: "In this role, Foyinsola handles the documentation of executive meetings, ensuring that accurate minutes are recorded, decisions are tracked, and action items are clearly communicated to the cabinet. Foyinsola manages the association's official correspondence, scheduling, and member databases, keeping administrative pipelines running smoothly behind the scenes. When the General Secretary is unavailable, Foyinsola steps in to lead the secretariat.",
    image: "/AssistantGenSec.jpg"
  },
  {
    id: 5,
    role: "Financial Secretary",
    name: "Oderinde A. Aisha",
    bio: "Ashabi serves as the Financial Secretary, playing a vital role in managing the organization’s financial activities with transparency, accountability, and efficiency. She is responsible for keeping accurate financial records, coordinating budgets, monitoring expenditures, and ensuring proper documentation of all financial transactions. Through her dedication and attention to detail, she supports effective planning and smooth execution of programs and activities within the association.",
    image: "/FinSec.jpg"
  },
  {
    id: 6,
    role: "Treasurer",
    name: "John Ocheme",
    bio: "John handles dues collection, verify payments, and follow up with students who have outstanding obligatory fees. He also works closely with the Financial Secretary to maintain accurate financial records and supports other executive members to ensure the smooth running of the association.",
    image: "/Treasurer.jpg"
  },
  {
    id: 7,
    role: "Sport Secretary",
    name: "Prosper Chukwuebuka Ugbor",
    bio: "Prosper is the Administrative head in charge of FINSA sport Activities. He handles correspondence, meeting minutes/agendas, records, membership, event coordination, official communications, and compliance to support smooth sports operations.",
    image: "/SportSec.jpg"
  },
   {
    id: 8,
    role: "Social Secretary",
    name: "Eunice Jagunna Toluwalase",
    bio: " Eunice is responsible for promoting the welfare and unity of members by organizing social activities and events, coordinating member engagement initiatives, celebrating important occasions, and ensuring effective communication that strengthens bonding and participation within the association.",
    image: "/SocialSec.jpg"
  },
   {
    id: 9,
    role: "Welfare Secretary",
    name: "Daniella Ugwuebgbu",
    bio: " Daniella serves as the Welfare Secretary, prioritizing the well-being and comfort of students within the association. She coordinates welfare initiatives, plans supportive programs, and ensures that members feel heard, valued, and included. She works closely with other executives to create a balanced academic and social environment, while providing guidance and assistance when students need it most. Through empathy, organization, and dedication, she helps make student life more enjoyable and stress-free.",
    image: "/WelFareSec.jpg"
  },
  {
    id: 10,
    role: "Public Relations officer",
    name: "Adeyehun Temitope",
    bio: " Temitope serve as the voice and image of the association by communicating important information to students, promoting our programs and events, managing our public image, and building strong relationships between the association, the student body, and the school management.",
    image: "/PublicRelationOfficer.jpg"
  }
];

const ExecutiveProfiles=()=> {
const [executivesData, setExecutivesData] = useState<Executive[]>([]) 
const [isLoading, setIsLoading] = useState(false)
  const fetchExecutives = async()=> {
    try{
      setIsLoading(true)
   const response = await getExecutives();
      setExecutivesData(response)
    }catch(err){
      throw new Error("Could Fetch the executives data..")
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=> {
  const callBack =async()=> {
   await fetchExecutives()
  }
  callBack()
  },[])

  //const executivesData = await  getExecutives()
  //console.log(executivesData)
  return (
    <section className="bg-[#f7f7f6] py-24">
      <Refresh/>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-32 mt-10">

          <p className="text-5xl md:text-7xl font-black text-[#1853ad] italic tracking-tighter">
            The FINSA <span className="text-[#b24a53]">Executives.</span>
          </p>
        </div>

        {/* Profiles - Non-Card Layout */}
        <div className="space-y-40">
          {executivesData.length > 0 ? (
          executivesData.map((exec, index) => (
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
                    src={`${baseUrl}/assets/${exec.profile_image}
                  `} 
                    alt={exec.full_name} 
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
                    {exec.full_name}
                  </h2>
                  
                </div>

                <p className="text-[#6c788e] text-xl md:text-2xl leading-relaxed max-w-xl font-medium italic">
                  {exec.bio}
                </p>

                
              </div>
            </div>
          ))) : isLoading === true ? (
           
                <div className="text-center py-32">
                  <p className="text-slate-400 font-medium animate-pulse text-xl">
                    Getting the existing executives data.... </p>
                </div>
              
          ) : (
  <div className="text-center py-32">
                  <p className="text-slate-400 font-medium animate-pulse text-xl">
                 No executives data.... </p>
                </div>
              )
}
        </div>
      </div>
      
    </section>
  );
};
export default ExecutiveProfiles;
