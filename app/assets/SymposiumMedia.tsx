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
    title: "Beyond the Financial horizons in 2024 (TFS 3.0)",
    speaker: "Economists and Debt capital specialist",
    theme: "Charting the career paths, unveiling insights and mastering the markets",
    stats: "500+ Attendees",
    image: require("../../public/TFSThree.jpg")
  },
  {
    id: 2,
    title: "Global Finance in 2025(TFS 4.0)",
    speaker: "Big 4 Consulting Partners",
    theme: "The Future of Audit & AI Integration",
    stats: "Enough Attendees to lit the place up",
    image: require("../../public/TFSFour.jpg")
  },
  {
    id: 3,
    title: "Unveiling 2026(TFS5.0)",
    speaker: "To be revealed",
    theme: "Coming Soon",
    stats: "When events concludes",
    image: require("../../public/TFSFive.jpeg")
  }
];