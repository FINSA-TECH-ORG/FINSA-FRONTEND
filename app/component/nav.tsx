"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
//import { div } from "framer-motion/client";
type windowInterface = {
  scrollY : number,
  innerWidth : number
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
  //const [navBg,setNavBg] = useState("");
  
//const windowObj : windowInterface = window  
useEffect(()=> {
  const ScrollDetection=()=> {
    setIsScrolled( window?.innerWidth > 800 ? window?.scrollY > 800 :
 window?.innerWidth <=600 ? window?.scrollY > 500 : false)
  }
  window.addEventListener("scroll", ScrollDetection, {passive : true})
  return ()=> window.removeEventListener("scroll", ScrollDetection)
})
  const navTheme = isScrolled ? "bg-[#1853AD]" : "backdrop-blur-lg"
 
 
  //ScrollFunc()
//ScrollFunc()
//console.log(navBg)
//  setInterval(()=> {

//  }, 1000)c
 
  return (
  <div className={`fixed top-0 w-full z-50 `}>

    <nav className={`absolute top-0 left-0 w-full z-50 py-3 transition-all duration-500 ${navTheme}
   `}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
    
        <Link
          href="/"
          className="text-lg font-bold text-black md:text-[#F7FFF6] "
         // style={{ color: "#F7FFF6" }}
        >
          FINSA
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden  md:flex items-center gap-8 `}>
          {[   "Home",
            "Meet Our Lecturers",
            "Meet Our Executives",
                "Meet Our Alumnis",
                "Blogs and Newsletter",
                "Contact Us"].map(
            (item, index) => (
              <Link
                key={index}
                href="#"
                className="text-sm font-medium transition duration-300"
                style={{ color: "#F7FFF6" }}
              >
                {item}
              </Link>
            )
          )}
        </div>
        

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 md:bg-white bg-black"></span>
          <span className="w-6 h-0.5 md:bg-white bg-black"></span>
          <span className="w-6 h-0.5 md:bg-white bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col z-6 px-6 py-6 gap-6">
              {[
               "Home",
            "Meet Our Lecturers",
            "Meet Our Executives",
                "Meet Our Alumnis",
                "Blogs and Newsletter",
                "Contact Us"
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-sm font-medium"
                  style={{ color: "#1853AD" }}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  </div>
  );
}