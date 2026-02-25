

interface BlogPost {
  id: number;
  title: string;
  author: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Macro-Economic Shifts in Emerging Markets",
    author: "Adewale Thompson",
    description: "An analysis of how currency fluctuations in 2026 are impacting foreign direct investment in West Africa.",
    category: "Market Analysis",
    date: "Feb 24, 2026",
    image: "/blog-macro.jpg"
  },
  {
    id: 2,
    title: "Mastering the LBO Model",
    author: "Chinaza Okechukwu",
    description: "A technical walkthrough of Leveraged Buyout modeling for private equity recruitment cycles.",
    category: "Technical Skills",
    date: "Feb 20, 2026",
    image: "/blog-lbo.jpg"
  },
  {
    id: 3,
    title: "The Ethics of Algorithmic Trading",
    author: "Dr. Sarah Alabi",
    description: "Exploring the intersection of high-frequency trading and market fairness in the age of AI.",
    category: "Insights",
    date: "Feb 15, 2026",
    image: "/blog-ai.jpg"
  }
];