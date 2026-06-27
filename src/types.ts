export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "web" | "design-uiux";
  image: string;
  tech: string[];
  problem: string;
  solution: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  skillsGained: string[];
}

export interface SkillCategory {
  category: string;
  items: { name: string; icon: string }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface Leadership {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export const projectsData: Project[] = [
  {
    id: "heritagerevive",
    title: "HeritageRevive",
    subtitle: "Cultural Heritage Archiving Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "FastAPI", "OpenCV", "PyTorch", "React", "Tailwind CSS"],
    problem: "Historical photographs and cultural documentations are physically deteriorating. Restoring them via manual graphic software is tedious, expensive, and lacks community-driven indexing and curation tools.",
    solution: "Developed an archiving and image refinement pipeline that processes damaged archival imagery while indexing metadata to preserve historic landmarks digitally.",
    features: [
      "Archival photo processing and scratch/noise reduction pipeline",
      "Interactive comparison slider for visual analysis",
      "Community archival uploads with geographical map tags",
      "Responsive historical timeline tracking and localized filtering"
    ],
    demoUrl: "https://heritage-ai-frontend-seven.vercel.app/"
  },
  {
    id: "craftnest",
    title: "CraftNest",
    subtitle: "Artisan E-Commerce Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Vite", "Motion", "Tailwind CSS", "Three.js"],
    problem: "Local artisans producing custom handmade crafts lack access to global digital marketing tools and frictionless storefronts, while conscious consumers find it difficult to discover authentic, verified regional products.",
    solution: "Engineered a high-performance e-commerce marketplace that features dynamic product filtering, seamless merchant catalogs, and customizable user feeds to streamline regional trade.",
    features: [
      "Custom product query and filter architecture",
      "Dynamic, lightweight user discovery dashboard",
      "Self-service storefront builder for independent artisans",
      "Optimized client-side checkout flow and cart analytics panel"
    ],
    demoUrl: "https://craftnest-creations.lovable.app/"
  },
  {
    id: "volterra",
    title: "Volterra Automotive",
    subtitle: "High-Fidelity EV Interactive Showcase",
    category: "web",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Vite", "Motion", "Tailwind CSS", "Three.js"],
    problem: "Standard online automotive portfolios rely heavily on static image grids that fail to capture the interactive sensory, aerodynamic, and custom configuration details of modern electric vehicles.",
    solution: "Created an immersive, hardware-accelerated interactive web interface that mimics the precision of physical showrooms with custom camera movements and spec toggles.",
    features: [
      "Custom interactive vehicle specification and styling toggles",
      "Physics-based performance and range simulation utility",
      "Cinematic view showcase with scroll-linked coordinate maps",
      "Fully optimized assets and performance-tuned load times"
    ],
    demoUrl: "https://volterra-future-motion.lovable.app/"
  },
  // {
  //   id: "foodapp",
  //   title: "Food Delivery Platform Redesign",
  //   subtitle: "Figma UX Architecture Case Study",
  //   category: "design-uiux",
  //   image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
  //   tech: ["Figma", "Design Systems", "Wireframing", "User Journeys"],
  //   problem: "Modern food delivery applications are frequently cluttered with cognitive overload, confusing navigational hierarchies, and dark-pattern cart prompts that decrease conversions.",
  //   solution: "Redesigned the complete mobile and web layout using a strict three-click checkout hierarchy and high-contrast accessibility patterns conforming to WCAG 2.1 requirements.",
  //   features: [
  //     "Streamlined checkout flow path reducing visual friction",
  //     "Accessible design system built on high-contrast scales",
  //     "Interactive, high-fidelity user path testing prototypes",
  //     "Optimized menu navigation reducing task completion times"
  //   ],
  //   demoUrl: "https://www.figma.com/file/laraib-food-redesign"
  // }
];

export const experienceData: Experience[] = [
  {
    id: "devshieldx",
    role: "Web Development Intern",
    company: "DevShieldx",
    location: "Lahore, Pakistan",
    period: "Mar 2026 – Apr 2026",
    bullets: [
      "Built fully responsive, highly performant web interfaces using semantic HTML, utility-first CSS and ES6+ TypeScript, ensuring strict cross-browser compatibility.",
      "Collaborated with product designers on UI/UX optimization, transforming high-fidelity Figma mockups into structured, modular React code.",
      "Diagnosed and resolved client-side bottlenecks, achieving a 20%+ increase in Lighthouse performance scores through code-splitting and asset lazy-loading.",
      "Utilized Git/GitHub for structured version control, conducting code reviews, managing pull requests, and maintaining clean repository history."
    ],
    skillsGained: ["JavaScript", "Git", "Figma", "Web Performance"]
  },
  {
    id: "mindbridge",
    role: "Customer Support Representative (Uber SSA & MENA)",
    company: "Mindbridge",
    location: "Lahore, Pakistan",
    period: "Nov 2024 – Nov 2025",
    bullets: [
      "Managed and resolved complex, high-priority user and partner inquiries across SSA and MENA regions in a fast-paced SLA environment.",
      "Sustained key service metrics, maintaining response accuracy and customer satisfaction (CSAT) scores averaging over 95% month-over-month.",
      "Leveraged precise written and verbal communication skills to resolve complex account, payment, and logistics discrepancies with high empathy."
    ],
    skillsGained: ["Problem Solving", "SLA Management", "Cross-Cultural Communication", "Conflict Resolution"]
  },
  {
    id: "teaching",
    role: "Teaching Specialist",
    company: "Govt. Girls High School, Bucha Kalan",
    location: "Sargodha, Pakistan",
    period: "Apr 2022 – Sep 2022",
    bullets: [
      "Taught introductory computer science and technology concepts, structuring clear lesson plans for students with diverse technical backgrounds.",
      "Designed curriculum milestones and hands-on assignments, increasing student comprehension and class-wide project success by 40%.",
      "Fostered public speaking, organizational, and technical mentorship skills through interactive workshops and computer lab training sessions."
    ],
    skillsGained: ["Curriculum Design", "Technical Instruction", "Public Speaking", "Mentorship"]
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Languages & Core",
    items: [
      { name: "JavaScript", icon: "Code" },
      { name: "Python", icon: "Terminal" },
      { name: "C / C++", icon: "FileCode" },
      { name: "HTML5 & CSS3", icon: "Layout" }
    ]
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "FastAPI", icon: "Server" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Git & GitHub", icon: "GitBranch" }
    ]
  },
  {
    category: "Design & UX/UI",
    items: [
      { name: "Figma/Adobe Photoshop", icon: "Figma" },
      { name: "Design Systems", icon: "Layers" },
      { name: "Wireframing", icon: "PenTool" },
    ]
  },
  {
    category: "Concepts & Platforms",
    items: [
      { name: "Web Performance", icon: "Zap" },
      { name: "Cross-Device QA", icon: "Smartphone" },
      { name: "Technical Writing", icon: "BookOpen" }
    ]
  }
];

export const leadershipData: Leadership[] = [
  {
    id: "tedx",
    role: "Ambassador",
    organization: "TEDxLCWU",
    period: "2025 - Present",
    description: "Orchestrating community outreach, leading engagement pipelines, and managing event logistics to promote local speaking platforms at Lahore College for Women University."
  },
  {
    id: "alkhidmat",
    role: "Voluntary Lead & Field Associate",
    organization: "Alkhidmat Foundation & Talent Pool",
    period: "2023 - Active",
    description: "Coordinating disaster relief efforts, managing local fundraising events, and assisting with digital literacy workshops designed to connect women to vocational resources."
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert1",
    name: "Generative AI Fundamentals",
    issuer: "PakAngels",
    year: "2026"
  },
  {
    id: "cert2",
    name: "Prompt Engineering Certification",
    issuer: "Dubau Future Foundation",
    year: "2026"
  }
];
