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
  role: "Aspiring Data Professional",
  availability: "Open to data & analytics opportunities",
  tagline:
    "I work across the data lifecycle — using SQL, Python, databases and BI tools to collect, transform, analyze and communicate data for better decisions.",
  portrait: "/assets/portrait.png",
  portraitAlt: "Mohan Kumar B, aspiring data analyst",
  highlight: { value: "2", label: "Analytics internships" },
  marquee: ["SQL", "Python", "Power BI", "Excel", "Pandas", "Data Storytelling"],
  resumeUrl: "/assets/resume.pdf",
  nav: [
    { label: "Home", href: "#top" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "Email", url: `mailto:${EMAIL}`, icon: "mail" },
    { label: "GitHub", url: GITHUB, icon: "github" },
    { label: "LinkedIn", url: LINKEDIN, icon: "linkedin" },
  ],
  stats: [
    { value: "2", label: "Internships completed" },
    { value: "10+", label: "Tools & technologies" },
    { value: "2026", label: "B.E. graduating year" },
  ],
  about: {
    heading: "The person behind the dashboards",
    paragraphs: [
      "I'm Mohan Kumar B, a Computer Science Engineering student at Sri Krishna College of Technology, Coimbatore, building a career in analytics. What pulled me in was a simple question during an internship review: why did two reports show two different numbers? Chasing that answer turned into the work I now want to do full time.",
      "I work across SQL, Python and Excel to clean messy data, find the signal in it, and hand back something a team can act on. I care about honest caveats, reproducible queries, and charts that answer the question without a legend lecture.",
    ],
    personality:
      "Off the clock: I rebuild spreadsheets nobody asked me to rebuild, read up on new BI tooling, and will happily argue about whether that chart needed to be a pie.",
    facts: [
      { value: "2", label: "Internships" },
      { value: "7.5", label: "CGPA / 10" },
      { value: "SQL", label: "Daily driver" },
    ],
  },
  experience: [
    {
      role: "Web Development Intern",
      company: "Codsoft",
      period: "Aug 2024 — Sep 2024",
      location: "Remote",
      bullets: [
        "Built responsive web projects with HTML, CSS and JavaScript, delivering each task within the assigned sprint timeline.",
        "Applied clean component structure and version control with Git while iterating on feedback from the mentor reviews.",
      ],
    },
    {
      role: "Full Stack Python Developer Intern",
      company: "Appin Technology",
      period: "Jun 2024 — Jul 2024",
      location: "Coimbatore, India",
      bullets: [
        "Developed full-stack web applications using Python with Django/Flask, optimizing backend logic, database structures and API integrations.",
        "Acquired hands-on experience with deployment and version control tools such as Git and AWS.",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "Roots Industries India Limited",
      period: "Nov 2023 — Dec 2023",
      location: "Online",
      bullets: [
        "Analyzed sales and production data using Excel and SQL to identify trends and support monthly business reporting.",
        "Built automated Excel dashboards with pivot tables, VLOOKUP and XLOOKUP to track key performance metrics, reducing manual reporting effort.",
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
      title: "Programming & Query",
      items: ["SQL", "Python", "Pandas", "NumPy", "R", "Excel Formulas & VBA"],
    },
    {
      title: "BI & Visualization",
      items: [
        "Power BI",
        "Tableau",
        "Excel Dashboards",
        "Pivot Tables",
        "Matplotlib",
        "Seaborn",
        "Looker Studio",
      ],
    },
    {
      title: "Analytics & Methods",
      items: [
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Descriptive Statistics",
        "Trend & Cohort Analysis",
        "Forecasting",
        "KPI Reporting",
        "Data Storytelling",
      ],
    },
    {
      title: "Data Platforms & Tools",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Jupyter Notebook", "Git & GitHub", "AWS Basics"],
    },
  ],
  contact: {
    heading: "Let's put your numbers on the record.",
    blurb:
      "Open to data analyst, business analyst and BI roles, plus internships and freelance analysis work. Email gets the fastest reply.",
    email: EMAIL,
    linkedin: { label: "linkedin.com/in/mohan-kumar-30s", url: LINKEDIN },
    github: { label: "github.com/Mohan-Kumar-B", url: GITHUB },
  },
};
