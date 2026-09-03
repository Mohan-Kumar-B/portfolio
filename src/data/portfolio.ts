/**
 * Single source of truth for all site content.
 * Swap in your own details here — no markup changes needed.
 */



export type NavItem = { label: string; href: string };

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type EducationItem = {
  period: string;
  qualification: string;
  institution: string;
  detail: string;
  score: string;
  scoreLabel: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  url: string;
  icon: "mail" | "github" | "linkedin";
};

export type Profile = {
  name: string;
  initial: string;
  role: string;
  availability: string;
  tagline: string;
  portrait: string;
  portraitAlt: string;
  highlight: { value: string; label: string };
  marquee: string[];
  resumeUrl: string;
  nav: NavItem[];
  socials: SocialLink[];
  stats: { value: string; label: string }[];
  about: {
    heading: string;
    paragraphs: string[];
    personality: string;
    facts: { value: string; label: string }[];
  };
  experience: Experience[];
  education: EducationItem[];
  skills: SkillGroup[];
  contact: {
    heading: string;
    blurb: string;
    email: string;
    linkedin: { label: string; url: string };
    github: { label: string; url: string };
  };
};

const EMAIL = "mohankumarbpw@gmail.com";
const GITHUB = "https://github.com/Mohan-Kumar-B";
const LINKEDIN = "https://www.linkedin.com/in/mohan-kumar-30s/";

export const profile: Profile = {
  name: "Mohan Kumar B",
  initial: "M",
  role: "Data Professional",
  availability: "Open to data & analytics opportunities",
  tagline:
    "I work across the data lifecycle — using SQL, Python, databases and BI tools to collect, transform, analyze and communicate data for better decisions.",
  portrait: "/assets/portrait.png",
  portraitAlt: "Mohan Kumar B, Data Professional",
  highlight: { value: "2", label: "Analytics internships" },
  marquee: [
  "SQL",
  "Python",
  "Databases",
  "ETL",
  "Power BI",
  "Data Analytics",
  "Data Engineering",
],
  resumeUrl: "/assets/resume.pdf",
  nav: [
    { label: "Home", href: "#top" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "Email", url: `mailto:${EMAIL}`, icon: "mail" },
    { label: "GitHub", url: GITHUB, icon: "github" },
    { label: "LinkedIn", url: LINKEDIN, icon: "linkedin" },
  ],
  stats: [
  { value: "3", label: "Industry Internships" },
  { value: "10+", label: "Tools & Technologies" },
  { value: "2026", label: "B.E. CSE Graduate" },
],
  about: {
    heading: "The person behind the data",
    paragraphs: [
      "I'm Mohan Kumar B, a Computer Science Engineering graduate with an interest in building a career in the data field. My background combines programming, databases, SQL, data analysis and business intelligence, giving me a foundation to work across different stages of the data lifecycle.", 
      "I enjoy working with data from collection and transformation through analysis and visualization. I use SQL and Python to work with data, databases and transformations, while tools such as Power BI and Excel help me communicate findings clearly and support business decisions.",
    ],
    personality:
      "I'm naturally curious about how data moves, how systems produce it, and how it can be transformed into something useful for people and businesses.",
    facts: [
  { value: "CSE", label: "Engineering Background" },
  { value: "SQL", label: "Core Skill" },
  { value: "Data", label: "Career Focus" },
],
  },
  experience: [
    {
      role: "Data Analyst Intern",
      company: "Roots Industries India Limited",
      period: "May 2025 — June 2025",
      location: "Hybrid - Coimbatore",
      bullets: [
        "Analyzed sales and production data using SQL and Excel to identify trends, investigate performance patterns and support business reporting.",
        "Built automated Excel reporting dashboards using pivot tables, VLOOKUP and XLOOKUP to track key performance metrics and reduce repetitive reporting work."
      ],
    },
    {
      role: "Full Stack Python Developer Intern",
      company: "Appin Technology",
      period: "Jun 2024 — Jul 2024",
      location: "Coimbatore, India",
      bullets: [
        "Developed full-stack applications using Python, Django/Flask, databases and REST APIs, gaining hands-on experience with backend systems, data handling and application workflows.",
        "Worked with Git, AWS fundamentals and application deployment while collaborating on backend development and database-related tasks."
      ],
    },
    
    {
      role: "Web Development Intern",
      company: "Codsoft",
      period: "Aug 2024 — Sep 2024",
      location: "Online",
      bullets: [
        "Built responsive web projects with HTML, CSS and JavaScript, delivering each task within the assigned sprint timeline.",
        "Applied clean component structure and version control with Git while iterating on feedback from the mentor reviews.",
      ],
    },
  ],
  education: [
    {
      period: "2022 — 2026",
      qualification: "B.E. Computer Science Engineering",
      institution: "Sri Krishna College of Technology",
      detail: "Coimbatore, India · Anna University",
      score: "7.5",
      scoreLabel: "CGPA / 10",
    },
    {
      period: "2020 — 2022",
      qualification: "Higher Secondary (11th & 12th)",
      institution: "Maharishi Vidya Mandir School, Karaikudi",
      detail: "State Board · Mathematics & Computer Science",
      score: "93%",
      scoreLabel: "Percentage",
    },
    {
      period: "2019 — 2020",
      qualification: "Secondary School (10th)",
      institution: "Maharishi Vidya Mandir School, Karaikudi",
      detail: "State Board",
      score: "97%",
      scoreLabel: "Percentage",
    },
  ],
  skills: [
  {
    title: "Programming & Data",
    items: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Excel",
    ],
  },
  {
    title: "Databases & Data Management",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Data Modeling",
      "SQL Queries",
      "Data Transformation",
    ],
  },
  {
    title: "Analytics & Business Intelligence",
    items: [
      "Power BI",
      "Excel Dashboards",
      "Statistics",
      "KPI Analysis",
      "Data Visualization",
      "Data Storytelling",
    ],
  },
  {
    title: "Data Engineering Foundations",
    items: [
      "ETL / ELT",
      "Data Pipelines",
      "APIs",
      "Python Automation",
      "Git & GitHub",
      "AWS Fundamentals",
    ],
  },
],
  contact: {
    heading:"Let's build something with data.",
    blurb:
      "Open to entry-level opportunities across Data Analytics, Business Intelligence, Business Analytics and Data Engineering. I'm interested in roles where I can work with data, technology and business problems.",
    email: EMAIL,
    linkedin: { label: "linkedin.com/in/mohan-kumar-30s", url: LINKEDIN },
    github: { label: "github.com/Mohan-Kumar-B", url: GITHUB },
  },
};
