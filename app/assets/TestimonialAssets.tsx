import Image from "/../../public/TFSFour.jpg"

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  content: string;
  type: 'student' | 'partner';
  image: string; 
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tolani Adeleke",
    role: "Investment Banking Analyst",
    organization: "Goldman Sachs",
    content: "The Financial Modelling mentorship at FINSA was the turning point in my career. I walked into my interviews with the technical confidence of a second-year analyst.",
    type: 'student',
    image: "/TFSFour.jpg"
      },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Director of Talent",
    organization: "Global Consulting Firm",
    content: "We partner with FINSA because their students are consistently the most prepared. Their curriculum alignment with industry standards is unparalleled in the region.",
    type: 'partner',
    image: "/TFSFour.jpg"
  },
  {
    id: 3,
    name: "Emeka Okafor",
    role: "Final Year Student",
    organization: "Unilag",
    content: "Being part of the executive team taught me project management and leadership. FINSA provides a roadmap to success that the classroom simply cannot replicate.",
    type: 'student',
    image: "/TFSFour.jpg"
  }
];