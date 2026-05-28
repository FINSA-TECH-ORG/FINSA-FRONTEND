  "use client"
  import FINSAGroup from "../../public/FINSAGroup.jpg";
import FinsaMobileImage from "../../public/FinsaMobileImage.jpg"
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./nav";


export default function Home() {


  
return(
  <section className="relative w-full h-screen  lg:min-h-[800px] bg-[#F7FFF6] bg-white flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute top-0  inset-0">
        <Image
          src={FINSAGroup}
          alt="FINSA Institutional"
          className="w-full h-full  md:object-cover hidden md:block"
        />
       
        <div className="absolute inset-0 bg-black/40 md:block hidden" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Center Content */}
      <div className="flex flex-col-reverse md:mt-0 mt-50 sm:mt-20">
        
        <Image
          src={FinsaMobileImage}
          alt="FINSA Institutional"
          className="w-full h-full object-contain md:hidden flex"
        />
    
      <div className="relative z-10  text-center px-6 max-w-4xl">
     
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-white  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          Developing Future-Ready Finance Leaders
        </motion.h1>

        <div
          className="h-1 w-28 mx-auto mt-6"
          style={{ backgroundColor: "#B24A53" }}
        />

        <p
          className="mt-6 text-sm md:text-[#F7FFF6] text-black  font-medium md:text-base"
          //style={{ color: "#F7FFF6" }}
        >
          Academic coordination, industry exposure, and structured mentorship
          shaping the next generation of finance professionals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 my-5 justify-center mt-8">
          <a
            href="#About"
            className="px-6 py-3 rounded-md font-semibold"
            style={{
              backgroundColor: "#1853AD",
              color: "#FFFFFF"
            }}
          >
           Get to Know Us.
          </a>

      
        </div>
</div>
      </div>
    </section>
)}