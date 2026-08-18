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
  location: "Sylhet, Bangladesh",
  email: "wadeechy18@gmail.com",
  github: "https://github.com/wadeechy18-cmd",
  linkedin: "https://www.linkedin.com/in/wadee-chy-5b29a6414/",
  cv: "[CV_URL]",
  siteUrl: "https://wadeeportfolio.vercel.app", // used for metadataBase / Open Graph
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
    "I'm based in Sylhet, Bangladesh, and an aspiring software engineer who builds software products and businesses alongside my studies. I completed my OTHM Level 3 Diploma in August 2025 and am currently applying to Computer Science and Engineering degree programs, while developing my technical skills through real, production software.",
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
      description: "Founded or co-founded three businesses, from concept through to live operation.",
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
  label: "AI-Powered Spreadsheet Automation Platform",
  description:
    "A full-stack, AI-integrated spreadsheet automation platform — built to work like a real spreadsheet first, with AI layered in for natural-language questions and reasoning over data.",
  problem:
    "Spreadsheet work is often repetitive, and routing every operation through an LLM is slow and expensive. ExcelAI is built around a local-first spreadsheet engine, with AI called in only where genuine reasoning over the data is required.",
  approach:
    "The backend is built in Python/FastAPI with JWT authentication (including refresh tokens), a PostgreSQL database via SQLAlchemy and Alembic, and a multi-provider AI chat layer supporting Claude, Gemini, DeepSeek, and OpenAI-compatible APIs. The Next.js/TypeScript frontend covers authentication flows, a dashboard, an admin area, and workspace pages, tested end-to-end with Playwright. A standalone Python spreadsheet engine, built on pandas and openpyxl, handles data cleaning, formatting, formula generation, and native chart creation — designed to run core operations locally rather than through an LLM, to keep the platform fast and reduce AI/API costs.",
  technologies: [
    "Python",
    "FastAPI",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "pandas",
    "openpyxl",
    "JWT Auth",
    "Playwright",
    "AI / LLM APIs",
  ],
  engineeringAreas: [
    "JWT authentication with refresh tokens and a PostgreSQL data layer (SQLAlchemy / Alembic)",
    "Multi-provider AI chat layer (Claude, Gemini, DeepSeek, OpenAI-compatible)",
    "Local-first spreadsheet engine for cleaning, formatting, formula generation, and chart creation",
    "Workbook generator for ready-made templates (invoice, payroll, CRM, budget, inventory)",
    "Usage tracking and rate-limiting for the platform's billing layer",
    "End-to-end testing with Playwright",
  ],
  status: "Live",
  liveUrl: "https://datapilot-chi.vercel.app",
  githubUrl: "https://github.com/wadeechy18-cmd/datapilot",
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
      "A sub-accounting outreach business supporting accounting firms in the UK, Australia, and New Zealand with Xero-related and outsourced accounting services.",
    contributions: [
      "Founded the business",
      "Built and maintain the company website",
      "Lead a 6-person team, including client-partnership associates, through task delegation, SOP creation, and performance monitoring",
      "Developed business workflows and manage international client outreach and operations",
    ],
    website: "https://www.smaccountingltd.com/",
  },
  {
    name: "SolveIQ",
    role: "Co-Founder",
    tag: "Digital Services Agency",
    description:
      "A web and app development agency, co-founded as Vela Digital, offering software development, design, and digital marketing — including video editing, graphic design, and social content — for agencies and small businesses.",
    contributions: [
      "Co-founded the agency",
      "Built and maintain the agency's web presence",
      "Contribute to business development",
    ],
    website: "https://solveiq-six.vercel.app/",
  },
  {
    name: "SYNX",
    role: "Founder",
    tag: "Streetwear / Apparel",
    description:
      "A youth-focused athletic and streetwear clothing brand — heavyweight hoodies, boxy tees, and compression essentials, built around minimal design.",
    contributions: [
      "Founded the brand",
      "Developed the brand's web presence",
      "Work on brand and business development",
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
    role: "Founder & Developer",
    place: "ExcelAI",
    period: "2026 — Present",
    points: [
      "Designed and built the Python/FastAPI backend, including JWT auth and a multi-provider AI chat layer",
      "Developed the Next.js/TypeScript frontend, tested end-to-end with Playwright",
      "Built a standalone spreadsheet engine (pandas, openpyxl) to run core operations locally",
      "Implemented a workbook generator, usage tracking, and rate-limiting for the platform's billing layer",
    ],
  },
  {
    role: "Founder / Co-Founder",
    place: "SM Accounting · SolveIQ · SYNX",
    period: "2025 — Present",
    points: [
      "Founded SM Accounting and SYNX; co-founded SolveIQ (Vela Digital)",
      "Built and maintain each business's website",
      "Lead a 6-person team through task delegation, SOP creation, and performance monitoring",
      "Manage international client outreach, business development, and day-to-day operations",
    ],
  },
  {
    role: "Teacher",
    place: "Springfield School",
    period: "2025 — Present",
    points: [
      "Teach mathematics, English, and science",
      "Prepare lessons and explain concepts clearly",
      "Manage classroom responsibilities",
    ],
  },
  {
    role: "Private Tutor",
    place: "Self-employed",
    period: "2024 — Present",
    points: [
      "Provide private tuition to 3 students",
      "Plan lessons around individual needs",
      "Monitor student progress and adapt teaching approach accordingly",
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
    items: ["FastAPI", "REST APIs", "PostgreSQL", "SQLAlchemy", "Alembic"],
  },
  {
    group: "Data / Automation",
    items: ["pandas", "openpyxl", "NumPy"],
  },
  {
    group: "AI",
    items: ["AI-assisted development", "LLM APIs", "AI application development"],
  },
  {
    group: "Tools / Deployment",
    items: ["Git", "GitHub", "Vercel", "Playwright"],
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
