// app/events/types.ts (or include at the top of your page file)
export interface FinsaEvent {
  id: string;
  title: string;
  tagline: string;
  description: string;
  linkedinText: string;
  linkedinUrl: string;
  imagePath: string;
  layoutDirection: 'normal' | 'reverse';
  styles: {
    badgeBg: string;
    badgeText: string;
    accentText: string;
    cardBg: string;
    gradientBg: string;
  };
}

export const FINSA_EVENTS_DATA: FinsaEvent[] = [
  {
    id: 'freshers-orientation',
    title: "Freshers' Orientation",
    tagline: "Welcome to the Vanguard of Finance",
    description: "An interactive introduction welcoming our new inductees into the department. This session outlines academic pathways, introduces peer mentorship networks, and sets the foundational benchmark for absolute excellence in the finance ecosystem.",
    linkedinText: " Welcoming the Next Generation: Relive the highlights, academic insights, and mentorship introductions from our official Freshers' Orientation ceremony.",
    linkedinUrl: "/",
    imagePath: "/fresher.avif", // Replace with your Directus asset path once uploaded
    layoutDirection: 'normal',
    styles: {
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-600',
      accentText: 'text-blue-600',
      cardBg: 'bg-gradient-to-br from-blue-50/40 to-transparent',
      gradientBg: 'from-blue-600 to-sky-500'
    }
  },
  {
    id: 'skill-acquisition',
    title: "Skill Acquisition Program",
    tagline: "Bridging Classrooms with Industry Demands",
    description: "An intensive, practical workshop series designed to equip finance students with industry-relevant competencies. From financial modeling frameworks to advanced technological workflows, we empower our peers to build scalable tools for modern analysis.",
    linkedinText: " Industrial Readiness: Discover how our intensive Skill Acquisition Program is equipping students with technical workflows and modern analytics frameworks.",
    linkedinUrl: "/",
    imagePath: "/MentorDummyThree.jpg",
    layoutDirection: 'reverse', // Switches image to the right side
    styles: {
      badgeBg: 'bg-sky-50',
      badgeText: 'text-sky-700',
      accentText: 'text-sky-700',
      cardBg: 'bg-gradient-to-bl from-sky-50/40 to-transparent',
      gradientBg: 'from-sky-600 to-indigo-500'
    }
  },
  {
    id: 'sports-events',
    title: "FINSA Sports Festival",
    tagline: "Synergy, Strategy, and Athletic Excellence",
    description: "Shifting gears from computational spreadsheets to athletic fields. The annual sports event fosters peer collaboration, strategic teamwork, and physical well-being through friendly track, field, and indoor competitive tournaments.",
    linkedinText: " Beyond the Classroom: Celebrating teamwork, strategic execution, and athletic synergy at the annual FINSA Sports Festival.",
    linkedinUrl: "/",
    imagePath: "/SportsFest.avif",
    layoutDirection: 'normal',
    styles: {
      badgeBg: 'bg-indigo-50',
      badgeText: 'text-indigo-600',
      accentText: 'text-indigo-600',
      cardBg: 'bg-gradient-to-br from-indigo-50/40 to-transparent',
      gradientBg: 'from-indigo-600 to-blue-500'
    }
  },
  {
    id: 'dinner-awards',
    title: "Dinner & Awards Night",
    tagline: "A Grand Gala Celebrating Exceptional Milestones",
    description: "The ultimate flagship gathering honoring the brilliant achievements of our outstanding students, dedicated faculty members, and supportive corporate alumni networks. A night characterized by premium network interactions, fine dining, and prestigious acknowledgments.",
    linkedinText: " A Night of Excellence: Honoring outstanding academic achievements and celebrating leadership milestones at the grand FINSA Dinner & Awards Gala.",
    linkedinUrl: "/",
    imagePath: "/Dinner.avif",
    layoutDirection: 'reverse',
    styles: {
      badgeBg: 'bg-slate-900',
      badgeText: 'text-slate-100',
      accentText: 'text-blue-900',
      cardBg: 'bg-gradient-to-bl from-slate-50 to-transparent border border-slate-100',
      gradientBg: 'from-slate-900 to-blue-950'
    }
  }
];