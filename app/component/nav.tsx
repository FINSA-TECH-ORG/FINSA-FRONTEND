"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
//import { div } from "framer-motion/client";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
 const [blurState, setBlurState] = useState<boolean>(true);
useEffect(()=> {
  const ScrollDetection=()=> {
    if((pathname ==="/" || pathname === "/#About")){
    setIsScrolled( window?.innerWidth > 800 ? window?.scrollY > 800 :
 window?.innerWidth <=600  ? window?.scrollY > 500 : false)
    }
    setBlurState(window?.innerWidth <= 600 ? window?.scrollY <= 50 : window?.innerWidth > 800
       ? window?.scrollY <= 150 : false )
  }
  window.addEventListener("scroll", ScrollDetection, {passive : true})
  return ()=> window.removeEventListener("scroll", ScrollDetection)
})


  const navTheme = isScrolled && window?.scrollY > 200  ? "bg-[#1853AD]"  : isScrolled === false
   && (pathname !=="/" && pathname !== "/#About")? "bg-[#1853AD]"
   : isScrolled === false && blurState ? "bg-transparent" : "backdrop-blur-lg";
 
  const Navigation = [
    {id : 1, nav :  "Home", link : "/"}, 
     {id : 2, nav : "Meet the Executives",link : "/Executives"},
    {id : 3, nav :   "Blogs", link : "/blogs"},
     {id : 4, nav :"Internship and scholarship opport..", link : "/internship&scholarship"}, 
     {id : 5, nav : "Announcement", link : "/announcement"},
      {id : 6, nav : "ContactUs" , link : "/contact"}
  ]
 
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
          className={`flex items-center gap-2`}
         // style={{ color: "#F7FFF6" }}
        >
          <Image className="rounded-full" alt="logo" src={"/logo.png"} width={50} height={50}/>
        <p  className={`text-lg font-bold ${isScrolled ? "text-white" : "text-black"}
           md:text-[#F7FFF6]`}>FINSA</p>  
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden  lg:flex items-center gap-8 back `}>
          {Navigation.map(
            (item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-sm font-medium transition duration-300"
                style={{ color: "#F7FFF6" }}
              >
                {item.nav}
              </Link>
            )
          )}
        </div>
        

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className={`w-6 h-0.5 ${isScrolled ? "bg-white" : "bg-black"}`}></span>
          <span className={`w-6 h-0.5 md:bg-white  ${isScrolled ? "bg-white" : "bg-black"}`}></span>
          <span className={`w-6 h-0.5 md:bg-white ${isScrolled ? "bg-white" : "bg-black"}`}></span>
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
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col z-6 px-6 py-6 gap-6">
              {Navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-sm font-medium"
                  style={{ color: "#1853AD" }}
                  onClick={() => setOpen(false)}
                >
                  {item.nav}
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