
import Home from "./component/Home";
import { SponsorSection } from "./component/SponsorShip";
import { MentorshipSection } from "./component/Mentorship";
import { ImpactSection } from "./component/CurriculumMgt";
import { Symposium } from "./component/Symposium";
import { TestimonialSection } from "./component/Testimonial";
import { About } from "./component/About";
import { Metadata } from "next";

export const metaData : Metadata = {
  metadataBase : new URL("https://finsa-unilag.com"),

  title : "FINSA - The Finance Student Association | UNILAG",
  description : "FINSA is a student-led organization at the University of Lagos dedicated to fostering financial literacy, professional development, and networking opportunities for students interested in finance and related fields. We aim to empower our members with the knowledge and skills needed to excel in the financial industry through workshops, seminars, mentorship programs, and collaborative projects.",
  alternates : {
    canonical : "https://finsa-unilag.com"
  }
}

export default function LandingPage() {
// ───────── PART 2: STRUCTURED BRAND DATA (For Google's Algorithm) ─────────
  const organizationSchema = {
    '@context': 'https://schema.org/Organization',
    '@type': 'Organization',
    'name': 'FINSA',
    'url': 'https://finsa-unilag.com',
    'logo': 'https://finsa-unilag.com/logo.png', // Path to your public brand asset
    'description':"FINSA is a student-led organization at the University of Lagos dedicated to fostering financial literacy, professional development, and networking opportunities for students interested in finance and related fields. We aim to empower our members with the knowledge and skills needed to excel in the financial industry through workshops, seminars, mentorship programs, and collaborative projects.",
   'parentOrganization': {
      '@type': 'CollegeOrUniversity',
      'name': 'University of Lagos'
    }
  };

  return (
   <section>
    <script type="application/ld+json"
     dangerouslySetInnerHTML={{__html : JSON.stringify(organizationSchema)}}/>
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
    
 
