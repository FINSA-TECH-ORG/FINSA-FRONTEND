"use client"
import Home from "./component/Home";
import { SponsorSection } from "./component/SponsorShip";
import { MentorshipSection } from "./component/Mentorship";
import { ImpactSection } from "./component/CurriculumMgt";
import { Symposium } from "./component/Symposium";
import { TestimonialSection } from "./component/Testimonial";
export default function Layout() {


  return (
   <section>
   <Home/>
    {/* SponsorShip Deals */}
    <SponsorSection/>
    {/* MentorShip Section */}
    <MentorshipSection/>
    {/* Curriculum mgt and coordination  */}
    <ImpactSection/>
    {/* Biggest Events of the session */}
    <Symposium/>
    {/* Testimonials */}
    <TestimonialSection/>
    </section>
   
  );
}
    
 
