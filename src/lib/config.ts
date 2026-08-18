// ---------------------------------------------------------------------------
// SITE CONTENT CONFIG
// Every piece of editable, personal, or placeholder content lives here.
// Replace the [BRACKETED] placeholders with your real details.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Wadee Chowdhury",
  shortName: "WC", // initials, used in nav logo / footer mark
  title: "Software Developer & Founder",
  tagline: "Software Developer · Founder · Builder",
  email: "wadeechy18@gmail.com",
  github: "https://github.com/wadeechy18-cmd",
  linkedin: "https://www.linkedin.com/in/wadee-chy-5b29a6414/",
  cv: "[CV_URL]",
  siteUrl: "https://example.com", // used for metadataBase / Open Graph
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Businesses", href: "#businesses" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  eyebrow: "Software Developer / Founder / Builder",
  headline: "I build software and businesses.",
  subheading:
    "Software developer, founder, and team leader focused on Python, AI, and modern full-stack development.",
  body: "I enjoy taking ideas from concept to production — building software, launching businesses, managing teams, and solving real-world problems.",
};

export const ABOUT = {
  paragraphs: [
    "I'm a student and aspiring software engineer who builds software products and businesses alongside my studies. I'm currently developing my technical skills while simultaneously running businesses, managing a team, and building software in production.",
    "I'm interested in the intersection of software, AI, and entrepreneurship. I like building things from scratch — from software products to businesses — and learning by solving real problems.",
    "Alongside development and business, I teach at a secondary school and privately tutor students, which has sharpened how I explain complex ideas clearly and simply.",
  ],
  pillars: [
    {
      label: "Software Development",
      description: "Full-stack web development, AI-assisted development, and production software.",
    },
    {
      label: "Entrepreneurship",
      description: "Founded and operate three businesses, from concept through to live operation.",
    },
    {
      label: "Leadership",
      description: "Manage a team of six across business operations and development.",
    },
    {
      label: "Teaching",
      description: "Teach at a secondary school and privately tutor three students.",
    },
  ],
};

export const FEATURED_PROJECT = {
  name: "ExcelAI",
  label: "AI-Assisted Spreadsheet Platform",
  description:
    "A spreadsheet platform for cleaning, formatting, and analyzing Excel workbooks — built to work like a real spreadsheet first, with AI layered in for natural-language questions and reasoning over data.",
  problem:
    "Spreadsheet work is often repetitive and requires knowledge of formulas, functions, and manual data manipulation. Most operations don't need AI at all — they need to be fast and reliable — but some questions about the data genuinely require reasoning. ExcelAI explores that split.",
  approach:
    "The platform combines a Python/FastAPI backend with a Next.js and TypeScript frontend. Spreadsheet data is parsed and manipulated using pandas and openpyxl. Standard spreadsheet operations run locally and instantly; AI (via LLM APIs) is only invoked for natural-language questions and reasoning over the data, including generating a new spreadsheet directly from a prompt.",
  technologies: [
    "Python",
    "FastAPI",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "pandas",
    "openpyxl",
    "AI / LLM APIs",
  ],
  engineeringAreas: [
    "Local-first spreadsheet operations with AI used only where reasoning is required",
    "Natural-language question answering over spreadsheet data",
    "Spreadsheet parsing and data manipulation",
    "Generating spreadsheets directly from a prompt",
  ],
  status: "Live",
  liveUrl: "https://datapilot-chi.vercel.app",
  githubUrl: "[EXCELAI_GITHUB_URL]",
};

export type Business = {
  name: string;
  role: string;
  description: string;
  contributions: string[];
  website: string;
  tag: string;
};

export const BUSINESSES: Business[] = [
  {
    name: "SM Accounting",
    role: "Founder",
    tag: "Accounting & Outsourcing",
    description:
      "An accounting outsourcing business supporting accounting firms in the UK, Australia, and New Zealand with Xero-related work and outsourced accounting services.",
    contributions: [
      "Founded the business",
      "Built the website",
      "Developed business systems and workflows",
      "Manage team operations",
      "Work on international business development",
    ],
    website: "https://www.smaccountingltd.com/",
  },
  {
    name: "SolveIQ",
    role: "Founder",
    tag: "Creative & Digital Services",
    description:
      "A digital services business offering video editing, graphic design, websites, and social media content for small businesses that need quality creative work without agency overhead.",
    contributions: [
      "Founded the business",
      "Built and developed the website",
      "Work on business development",
      "Manage operations",
    ],
    website: "https://solveiq-six.vercel.app/",
  },
  {
    name: "SYNX",
    role: "Founder",
    tag: "Streetwear / Apparel",
    description:
      "A youth-focused clothing and athletic streetwear brand — heavyweight hoodies, boxy tees, and compression essentials, built around minimal design.",
    contributions: [
      "Founded the brand",
      "Brand development",
      "Website development",
      "Product and business development",
    ],
    website: "https://synx-seven.vercel.app/",
  },
];

export const LEADERSHIP = {
  stat: "6",
  statLabel: "People currently managed",
  description:
    "I currently manage a team of 6 people across business operations and development activities.",
  responsibilities: [
    "Delegating tasks",
    "Creating workflows",
    "Developing standard operating procedures",
    "Monitoring performance",
    "Coordinating team members",
    "Managing day-to-day operations",
  ],
};

export type ExperienceItem = {
  role: string;
  place: string;
  period: string;
  points: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Founder / Software Developer",
    place: "My Businesses",
    period: "2026 — Present",
    points: [
      "Founded multiple businesses",
      "Built production websites",
      "Developed software products",
      "Managed a team",
      "Worked on business development and operations",
    ],
  },
  {
    role: "Teacher",
    place: "Springfield School",
    period: "Current",
    points: [
      "Teaching students",
      "Preparing lessons",
      "Explaining concepts clearly",
      "Managing classroom responsibilities",
    ],
  },
  {
    role: "Private Tutor",
    place: "Independent",
    period: "Current",
    points: [
      "Currently provide private tuition to 3 students",
      "Lesson planning",
      "Explaining concepts",
      "Tracking student progress",
      "Communication and responsibility",
    ],
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    group: "Data / Automation",
    items: ["pandas", "openpyxl"],
  },
  {
    group: "AI",
    items: ["AI-assisted development", "LLM APIs", "AI application development"],
  },
  {
    group: "Tools / Deployment",
    items: ["Git", "GitHub", "Vercel"],
  },
];

export const LEARNING = [
  "Advanced Python",
  "Data Structures & Algorithms",
  "Database design",
  "Backend engineering",
  "System design",
  "Cloud deployment",
  "AI engineering",
  "Mathematics for computer science",
];

export const APPROACH = [
  {
    label: "Build",
    text: "I learn by building real products.",
  },
  {
    label: "Learn",
    text: "I use projects to turn theory into practical engineering skills.",
  },
  {
    label: "Solve",
    text: "I enjoy breaking large problems into smaller systems.",
  },
  {
    label: "Lead",
    text: "I've learned business and leadership by building teams and operating businesses.",
  },
];
