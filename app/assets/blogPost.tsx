
export type BlogType = {
  id: number;
  author: string;
  title: string;
  slug: string;
  publish_date: string;
  summary: string;
  cover_image: string;
  content: string;
 link : string
};


export const blogData: BlogType[] = [
 
  {
    id: 1,
    title: "Africa’s Financial Renaissance: Inside FINSA’s Finance Symposium 5.0",
    author: "Hamed Tijani",
    summary : "Commissioner for Finance, GMD of Anchoria Capital Group, CFA Governor, others to speak at UNILAG's student-led conference; The Finance Symposium 5.0",
    slug : "Insights",
    content: `The Finance Students Association of the University of Lagos (FINSA) is bringing back one of Nigeria's most recognised student-led finance events.
     The Finance Symposium 5.0 is scheduled to be held on June 9, 2026, at the J.F. Ade Ajayi Auditorium, University of Lagos.
     Themed "Africa's Financial Renaissance: Unlocking Potentials for Growth," this year's edition centres on the structural 
     questions shaping the continent's financial future: where capital is flowing, how it is being deployed, what innovation is making possible, 
     and what it will take to build financial systems that actually serve African economies at scale. 
It reflects a deliberate focus on the gap between Africa's capital potential and the
mechanisms that currently exist to mobilise it, and the conversations the continent's
 financial community needs to be having. Headlining the speaker lineup is the Honourable Commissioner
  for Finance, Lagos State, Abayomi Oluyomi. As the chief financial officer of Africa's largest subnational economy,
   Oluyomi sits at the intersection of public capital allocation, fiscal policy, and economic development 
   in a city that processes more financial activity than most African nations combined. His presence
    at a student-led symposium signals something worth noting: the people shaping how Lagos raises, 
    spends, and strategically deploys public funds are willing to engage the next generation of finance 
    professionals directly. The event also conveys speakers such as Sam Chidoka, GCEO of Anchoria Capital 
    Group, Frank Nnamka, CFA Governor, alongside other seasoned professionals spanning private equity,
     venture capital, and Fintech.
For students and young professionals trying to understand how government finance works in practice,
not in theory, access is rare. The broader speaker lineup draws from private equity, venture capital,
and fintech, covering the full spectrum of how capital moves across the continent, from public budgets 
to startup funding rounds.
The Finance Symposium has grown steadily since its first edition, recording over 4000 attendees across 
previous editions. The 2026 edition is expected to be the largest yet. Attendance is free. Registration is open at: `,
    publish_date: "May 25, 2026",
    cover_image: "/TFSKeynote.jpeg",
   link : " https://app.eventpadi.com/tfs2026/checkout"
  }
];