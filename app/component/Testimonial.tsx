"use client"
import React from 'react';
import Image from 'next/image';
import { testimonials } from '../assets/TestimonialAssets';
// import { useEffect, useState } from 'react';
// import { Testimonial } from '@app/lib/libTypes';
// import { getTestimonial } from '@app/lib/Finsa';
export const TestimonialSection: React.FC = () => {
const date = new Date();
  const yearValue = date?.getFullYear()
const email = "finsa4unilag@gmail.com"
const subject = encodeURIComponent(`SponsorShip Proposal - FINSA ${yearValue}`)
const composeGmailPage = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
  // const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>([]) 
  // const [isLoading, setIsLoading] = useState(false)
  //   const fetchTestimonials = async()=> {
  //     try{
  //       setIsLoading(true)
  //    const response = await getTestimonial();
  //       setTestimonialsData(response)
  //     }catch(err){
  //       throw new Error("Could Fetch the testimonials data..")
  //     }finally{
  //       setIsLoading(false)
  //     }
  //   }
  
  //   useEffect(()=> {
  //   const callBack =async()=> {
  //    await fetchTestimonials()
  //   }
  //   callBack()
  //   },[])
  
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Minimalist Style */}
        <div className="text-center mb-20">
          <h2 className="text-[#6c788e] text-xs font-bold tracking-[0.3em] uppercase mb-3">Testimonials</h2>
          <p className="text-4xl font-bold text-[#1853ad]">Voice of the Community</p>
          <div className="h-1 w-16 bg-[#b24a53] mx-auto mt-6" />
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#f7f7f6] p-8 rounded-2xl border border-transparent hover:border-[#0c95d9]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-[#b24a53] text-5xl font-serif leading-none mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                  “
                </div>
                <p className="text-[#6c788e] text-lg leading-relaxed italic mb-8">
                  {item.content}
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                                  {item?.image && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#1853ad]">

                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                                  )}
                <div>
                  <h4 className="text-[#1853ad] font-bold text-sm uppercase">{item.name}</h4>
                  <p className="text-[#6c788e] text-xs font-medium">
                    {item.role} <span className="text-[#b24a53]">@ {item.organization}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA before Footer */}
        <div className="mt-20 text-center w-full border-t border-gray-100 pt-20">
          <h3 className="text-2xl font-bold text-[#1853ad] mb-4">Be part of the story.</h3>
          <p className="text-[#6c788e] mb-8">Whether you are an aspiring financier or a corporate partner, {"let's"} build the future together.</p>
          <div className="flex w-full justify-center gap-4">
          
            <a href={composeGmailPage}   target = "_blank"
                rel = "noopener noreferer"
            className="border-2 md:w-1/3 w-full border-[#1853ad] text-[#1853ad] 
            px-10 py-4 rounded-full font-bold hover:bg-[#1853ad] hover:text-white transition-all">
              Sponsor an Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
