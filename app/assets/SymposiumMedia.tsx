interface FinsaEvent {
  id: number;
  title: string;
  speaker: string;
  theme: string;
  stats: string; // e.g., "500+ Attendees"
  image: string;
}

export const eventMoments: FinsaEvent[] = [
    {
    id: 1,
    title: "Unlocking Potentials For Growth.",
    speaker: "Commissioner for Finance, GMD of Anchoria Capital Group, CFA Governor, others to speak at UNILAG's student-led conference; The Finance Symposium 5.0",
    theme: "Africa’s Financial Renaissance: Inside FINSA’s Finance Symposium 5.0",
    stats: "3300+ Attendees",
    image: "/TFS5.jpeg"
  },{
    id: 2,
    title: "Global Finance in 2025(TFS 4.0)",
    speaker: "Big 4 Consulting Partners",
    theme: "Global Finance: Adapting to a changing Economic Landscape",
    stats: "2315+ Attendees",
    image: "/TFSFour.jpg"
  },
  {
    id: 3,
    title: "Charting the career paths, unveiling insights and mastering the markets",
    speaker: "Economists and Debt capital specialist",
    theme: "Beyond the Financial horizons in 2024 (TFS 3.0)",
    stats: "1500+ Attendees",
    image: "/TFSThree.jpg"
  },
  
  
 
];