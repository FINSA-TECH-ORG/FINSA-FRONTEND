"use client"
import React from 'react';
import Image from 'next/image';
import SponsorImage from "../../public/SponsorsFinsa.jpeg"
import ProposalModal from './ProposalModal';


export const SponsorSection: React.FC = () => {
  return (
   <section className="bg-[#f7f7f6] py-16 px-4  md:py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Text Introduction for Partners/Sponsors */}
        <div className="text-center mb-12">
          <h2 className="text-[#1853ad] text-3xl md:text-4xl font-bold mb-4">
            Our Strategic Alliances
          </h2>
          <p className="text-[#6c788e] text-lg max-w-2xl mx-auto">
            We partner with industry leaders to bridge the gap between academic theory 
            and professional excellence. Join the network shaping the future of finance.
          </p>
        </div>

        {/* The Unique Single Image Container */}
        <div className="relative w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-2 md:p-6 transition-transform hover:scale-[1.01]">
          <div className="relative aspect-square md:aspect-video w-full">
            <Image
              src={SponsorImage}
              alt="Industry Leading Sponsors and Partnership Categories"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Action Section for New Partners */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 bg-white p-8 rounded-xl border-t-4 border-[#b24a53] shadow-sm">
          <div className="text-center md:text-left">
            <h3 className="text-[#1853ad] font-bold text-xl">Ready to invest in the next generation?</h3>
            <p className="text-[#6c788e]">Download our 2026 Partnership Prospectus to see our impact metrics.</p>
          </div>
         <ProposalModal/>
        </div>

      </div>
    </section>
  );
};
