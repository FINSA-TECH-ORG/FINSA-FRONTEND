"use client"
import Image from 'next/image';
import {useState, useEffect} from "react";
import { Executive } from '@app/lib/libTypes';
import { getExecutives } from '@app/lib/Finsa';
import Refresh from '../component/RefreshBlogs';

const baseUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}`
const executives = [
  {
    id: 1,
    role: "President",
    full_name: "David Owoyemi",
    bio: `He serves as President of FINSA UNILAG for the 2026/2027 session, having previously served as Vice President.

Through initiatives such as The Finance Symposium (TFS), the Skills Acquisition Programme (SAP), and industry visits, he is committed to empowering students, fostering industry partnerships, and bridging the gap between academic knowledge and professional practice.`,
    profile_image: "/President.avif"
  },
  {
    id: 2,
    role: "Vice President",
    full_name: "Olalekan F. Aduke ",
    bio: "Olalekan Fathia Aduke serves as the Vice President of FINSA, where she assists in leading executive operations, coordinating administrative activities, and fostering strong synergy across all committees.",
    profile_image: "/VicePresident.avif"
  },
  {
    id: 3,
    role: "General Secretary",
    full_name: "John Ocheme",
    bio: "John is a key administrative leader responsible for coordination between students, committees, and executives . He manage records, agendas, and communications while voicing concerns, ensuring compliance, and promoting inclusivity through strong organization and leadership skills.",
    profile_image: "/GeneralSec.avif"
  },
  {
    id: 4,
    role: "Assistant General Secretary",
    full_name: "Okunlola Peculiar",
    bio: "Okunlola Peculiar is a penultimate-year Finance student at the University of Lagos and the Assistant General Secretary of the Finance Students' Association (FINSA), UNILAG Division. In this role, I support the General Secretary in the day-to-day administration of the association, assists with documentation, and helps to ensure that all administrative tasks are completed efficiently.",
    profile_image: "/AssistantGenSec.avif"
  },
  {
    id: 5,
    role: "Financial Secretary",
    full_name: "Chijioke Emmanuel Chibuzor",
    bio: "Chijioke Emmanuel Chibuzor serves as the Financial Secretary, where he keeps accurate records of the association's income and expenditure.",
    profile_image: "/FinSecretary.avif"
  },
  {
    id: 6,
    role: "Treasurer",
    full_name: "Jegede Oluwafikunayomi Daniel",
    bio: "Oluwafikunayomi Daniel Jegede serves as the Treasurer of FINSA, where he is responsible for managing the association’s finances, maintaining accurate financial records, and promoting transparency and accountability in financial transactions.",
    profile_image: "/Treasurer.avif"
  },
  {
    id: 7,
    role: "Sport Secretary",
    full_name: "Temitope Adeyehun",
    bio: "Temitope Adeyehun is a 400-level Finance student, videographer, and Creative Director of TalentedShotIt Visuals. He serves as the Sports Secretary of FINSA UNILAG and enjoys creativity, meeting people, and creating meaningful experiences.",
    profile_image: "/SportSecretary.avif"
  },
   {
    id: 8,
    role: "Social Secretary",
    full_name: "Emmanuel Komolafe",
    bio: "Emmanuel is responsible for promoting the welfare and unity of members by organizing social activities and events, coordinating member engagement initiatives, celebrating important occasions, and ensuring effective communication that strengthens bonding and participation within the association.",
    profile_image: "/SocialSecretary.avif"
  },
   {
    id: 9,
    role: "Welfare",
    full_name: "Lateef Olabisi Omolola",
    bio: "Lateef Olabisi Omolola serves as the Welfare Secretary, where she looks after the well-being and interests of members. She identifies their needs, coordinates support initiatives, and acts as a link between members and the executive council to make sure concerns are heard and addressed promptly. She also helps organize welfare programs, encourages unity and a caring community, and works with other executives to keep the association's environment supportive and inclusive.",
    profile_image: "/Welfare.avif"
  },
  {
    id: 10,
    role: "Public Relations officer",
    full_name: "Joshua Oyedele Olamide",
    bio: " Joshua Oyedele Olamide is a 300-level Finance student at the University of Lagos, a video editor, content creator, and the PRO of FINSA UNILAG. He is passionate about creativity, storytelling, and building meaningful connections.",
    profile_image: "/PublicRelations.avif"
  }
];

const ExecutiveProfiles=()=> {
//const [executivesData, setExecutivesData] = useState<Executive[]>([]) 
const [isLoading, setIsLoading] = useState(false)
  // const fetchExecutives = async()=> {
  //   try{
  //     setIsLoading(true)
  //  const response = await getExecutives();
  //     setExecutivesData(response)
  //   }catch(err){
  //     throw new Error("Could Fetch the executives data..")
  //   }finally{
  //     setIsLoading(false)
  //   }
  // }

  // useEffect(()=> {
  // const callBack =async()=> {
  //  await fetchExecutives()
  // }
  // callBack()
  // },[])

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
          {executives.length > 0 ? (
          executives.map((exec, index) => (
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
                  <Image src ={ `${exec.profile_image}`} 
                  //   src={`
                  //     //`${baseUrl}/assets/${exec.profile_image}
                  // `} 
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
          ))) : isLoading === true  ? (
           
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
