
import Home from "./component/Home";
import { SponsorSection } from "./component/SponsorShip";
import { MentorshipSection } from "./component/Mentorship";
import { ImpactSection } from "./component/CurriculumMgt";
import { Symposium } from "./component/Symposium";
import { TestimonialSection } from "./component/Testimonial";
import { About } from "./component/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://finsa-unilag.com"),
  title: "FINSA - The Finance Student Association | UNILAG",
  description: "FINSA is a student-led organization at the University of Lagos dedicated to fostering financial literacy, professional development, and networking opportunities for students interested in finance and related fields.",
  alternates: {
    canonical: "https://finsa-unilag.com"
  },
  openGraph: {
    title: "FINSA - The Finance Student Association | UNILAG",
    description: "Fostering financial literacy and professional development at the University of Lagos.",
    url: "https://finsa-unilag.com",
    siteName: "FINSA UNILAG",
    images: [
      {
        url: "/finsaLogo.png", 
        width: 1200,
        height: 630,
        alt: "FINSA UNILAG",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Bonus: Explicitly tell search engines where your favicon/icon image points
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  }
};

export default function LandingPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'FINSA',
    'url': 'https://finsa-unilag.com',
    // Ensure this absolute path points to a valid 1:1 aspect ratio square PNG image file
    'logo': 'https://finsa-unilag.com/logo.png', 
    'description': "FINSA is a student-led organization at the University of Lagos dedicated to fostering financial literacy, professional development, and networking opportunities for students interested in finance.",
    'sameAs': [
      "https://www.instagram.com/finsa_unilag/",
      "https://www.linkedin.com/in/finsa-unilag-bb871035a/",
      "https://www.youtube.com/@FINSAUNILAG",
      "https://x.com/finsa_unilag"
    ],
    // FIX 2: Corrected to valid schema.org standard nomenclature mapping
    'parentOrganization': {
      '@type': 'EducationalOrganization',
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
    
 
