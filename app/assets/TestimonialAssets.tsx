import Image from "/../../public/TFSFour.jpg"

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  content: string;
  type: 'student' | 'partner';
  image ?: string; 
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Oluwamayowa Arepo",
    role: "400 level",
    organization: "Student",
    content: `TFS 4.0 was nothing short of epic. Personally, i attended 2.0 and 3.0 but didn't pay much attention to what was done. So i decided not to volunteer at all for 4.0 so i could immerse myself in the session, and boy, was that a good decision?
In every session, clarity and professionalism were woven together, leaving the participants enlightened on the beauty of finance. One important highlight for me was when my number was called for the raffle draw. I was elated.
I'm even more excited about TFs 5.0. I know it will be nothing short of transformation for me. Though i'll be volunteering this time, i will be sure to beas attentive as i possibly can.`,
    type: 'student',
 //   image: "/TFSFour.jpg"
      },
  {
    id: 2,
    name: "Noibi Oluwatosin",
    role: "400 level",
    organization: "Babcock unviversity",
    content: `TFS 4.0 was a totally captivting experience. At first, i didn't quite know what to expect, especially since i was coming from a different school and it was my first time attending an event organized by the Finance Students Association, UNILAG.
What stood out to me the most was how the industry experts shared practical insights on navigating the corporate world. I also really enjoyed the stock pitch competition and panel session, they were great opportunities to learn, hear different perspective, and gain valuable insights from both students and seasoned professionals.`,
    type: 'partner',
  //  image: "/TFSFour.jpg"
  },
  {
    id: 3,
    name: "Amarachi Nwogu",
    role: "Final Year Student",
    organization: "Unilag",
    content: "Being a part of the executive team taught me patience and community building, through FINSA platform I have been able to impact life and that’s something I’m proud of. FINSA provides a roadmap to success that only the classroom can’t replicate.",
    type: 'student',
    image: "/GenSec.jpg"
  }
];