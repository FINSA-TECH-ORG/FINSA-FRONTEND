

interface MentorshipModule {
  id: number;
  title: string;
  technicalFocus: string;
  description: string;
  image: string; // Replace with your specific mentorship photos
  color: string;
}

export const mentorshipData: MentorshipModule[] = [
  {
    id: 1,
    title: "Advanced Financial Modelling",
    technicalFocus: "Dynamic 3-Statement Integration",
    description: "Moving beyond templates. Students build integrated IS/BS/CF models from scratch using raw historical data to project future performance.",
    image: "/MentorDummyOne.jpg",
    color: "#1853ad" // Finsa Blue
  },
  {
    id: 2,
    title: "Strategic FP&A",
    technicalFocus: "Variance Analysis & Forecasting",
    description: "Bridge the gap between accounting and strategy. Analyzing budget vs. actuals and performing sensitivity analysis for corporate decision-making.",
    image: "/mentorDummyTwo.jpg",
    color: "#b24a53" // Finsa Crimson
  },
  {
    id: 3,
    title: "Data Analytics in Finance",
    technicalFocus: "Python & PowerBI Visualization",
    description: "Handling Big Data. Using real-life datasets to identify trends, automate reporting, and create interactive executive dashboards.",
    image: "/MentorDummyThree.jpg",
    color: "#0c95d9" // Finsa Sky
  },
  {
    id: 4,
    title: "Investment Valuation",
    technicalFocus: "DCF & Comparable Company Analysis",
    description: "The art of intrinsic value. Students perform sector-specific valuations using WACC, Beta calculations, and exit multiples.",
    image: "/MentorDummyFour.jpg",
    color: "#95595b" // Finsa Burgundy
  }
];