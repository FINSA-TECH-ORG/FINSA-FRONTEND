"use client"
import Home from "./component/Home";
import { SponsorSection } from "./component/SponsorShip";
import { MentorshipSection } from "./component/Mentorship";
import { ImpactSection } from "./component/CurriculumMgt";
import { Symposium } from "./component/Symposium";
import { TestimonialSection } from "./component/Testimonial";
import { About } from "./component/About";
export default function Layout() {


  return (
   <section>
   <Home/>
   {/* About Comprises of the History, Mission and Vision */}
   <About/>
 {/* MentorShip Section */}
    <MentorshipSection/>
   {/* Curriculum mgt and coordination  */}
    <ImpactSection/>
 {/* Biggest Events of the session */}
    <Symposium/>
{/* SponsorShip Deals */}
    <SponsorSection/>
  {/* Testimonials */}
    <TestimonialSection/>
   
    </section>
   
  );
}
    
 
