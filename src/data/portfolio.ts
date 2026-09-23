/**
 * All portfolio content lives here. Edit this file to update the site.
 *
 * Placeholders: any URL left as an empty string ("") is hidden from visitors.
 * While running `npm run dev`, empty links show up as dashed "add link" hints
 * so it's easy to spot what still needs filling in.
 */

export type ProjectVisual = "pantry" | "ocean" | "poker" | "calculator";

export type Project = {
  slug: string;
  title: string;
  year: string;
  /** One-line description shown under the title. */
  tagline: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: {
    /** TODO: paste the GitHub repository URL, e.g. "https://github.com/you/pantrypal" */
    repo: string;
    /** TODO: paste the live demo / video URL */
    demo: string;
  };
  /** CSS-drawn placeholder art, used when `image` is not set. */
  visual: ProjectVisual;
  /**
   * Optional real screenshot. Put the file in /public/projects/ and set this to
   * e.g. { src: "/projects/pantrypal.png", alt: "PantryPal pantry dashboard" }.
   */
  image?: { src: string; alt: string };
};

export const site = {
  name: "Ryan Gao",
  role: "Computer Science Student & Full-Stack Developer",
  intro:
    "I build web applications that are useful and interactive: things people can click through, rely on, and come back to. I care about the whole stack, from the data model to the last hover state.",
  metaDescription:
    "Ryan Gao is a computer science student at NYU building full-stack web applications, with a focus on machine learning and AI.",

  email: "rsg8583@nyu.edu",
  linkedin: "https://www.linkedin.com/in/ryan-gao06/",
  github: "https://github.com/rsg8583-hue",

  /**
   * Put the PDF in /public with this exact file name. The download buttons turn
   * on automatically once the file exists.
   */
  resumeFile: "RyanGaoResume2026.pdf",
};

export const about = {
  paragraphs: [
    "I'm studying computer science at New York University on the Machine Learning & AI track, and I expect to graduate in May 2028.",
    "I'm most interested in practical software: tools that solve a specific problem well. I like pairing a thoughtful interface with solid engineering underneath, so the thing is pleasant to use and still holds up when it's tested.",
  ],
  facts: [
    { label: "School", value: "New York University" },
    { label: "Degree", value: "B.S. Computer Science" },
    { label: "Track", value: "Machine Learning & AI" },
    { label: "Graduating", value: "May 2028" },
  ],
};

export const projects: Project[] = [
  {
    slug: "pantrypal",
    title: "PantryPal",
    year: "2026",
    tagline: "Full-stack kitchen management and meal planning",
    summary:
      "A web app for keeping track of what's in the kitchen and deciding what to cook with it.",
    highlights: [
      "Pantry inventory with expiration tracking, shopping lists, recipes, and meal history.",
      "Personalized recipe recommendations from the OpenAI API, requested through Next.js server routes.",
      "Prisma and PostgreSQL for data, with tests written in Vitest and Testing Library.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Prisma",
      "PostgreSQL",
      "Vitest",
      "Testing Library",
    ],
    links: {
      repo: "https://github.com/rsg8583-hue/PantryPal",
      demo: "https://pantry-pal-khaki.vercel.app/",
    },
    visual: "pantry",
  },
  {
    slug: "poker-analyst",
    title: "Poker Analyst",
    year: "2025",
    tagline: "Texas Hold'em win-probability calculator",
    summary:
      "A browser tool that estimates your chance of winning a hand from your hole cards, the board, and how your opponents play.",
    highlights: [
      "Monte Carlo simulation over thousands of deals to estimate win percentage from preflop through the river.",
      "Full hand evaluator covering every ranking from high card to royal flush, including split pots.",
      "Ten opponent archetypes, such as tight-aggressive, maniac, and calling station, modeled with VPIP, PFR, and aggression stats that adjust the odds.",
    ],
    tech: ["JavaScript", "HTML", "CSS"],
    links: {
      repo: "https://github.com/rsg8583-hue/Poker-Analyst",
      demo: "https://poker-analyst-two.vercel.app/",
    },
    visual: "poker",
  },
  {
    slug: "plastic-pollution-simulation",
    title: "Interactive Plastic Pollution Simulation",
    year: "2025",
    tagline: "Exhibited at the NYU Shanghai Interactive Media Arts Show",
    summary:
      "An interactive simulation that shows plastic building up in the ocean over time.",
    highlights: [
      "Built with p5.js, JavaScript, HTML, and CSS.",
      "Presented at the NYU Shanghai Interactive Media Arts Show.",
    ],
    tech: ["p5.js", "JavaScript", "HTML", "CSS"],
    links: {
      repo: "",
      demo: "https://rsg8583-hue.github.io/CCLab/miniProject8/",
    },
    visual: "ocean",
  },
  {
    slug: "calculator",
    title: "Calculator",
    year: "2023",
    tagline: "Four-function calculator in Python and Kivy",
    summary:
      "A small desktop calculator built with the Kivy UI framework, later recreated as a web page so it can be tried in the browser.",
    highlights: [
      "Kivy layout of a display, a 4×4 button grid, and a Clear button, all wired to event callbacks.",
      "Browser version with the same key layout, keyboard input, and a small recursive-descent parser in place of Python's eval.",
    ],
    tech: ["Python", "Kivy", "JavaScript", "HTML", "CSS"],
    links: {
      repo: "https://github.com/rsg8583-hue/Calculator",
      demo: "https://calculator-nine-silk-71.vercel.app",
    },
    visual: "calculator",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    group: "Frontend",
    items: ["Next.js", "React", "HTML", "CSS", "Tailwind CSS", "p5.js"],
  },
  { group: "Data", items: ["Prisma", "PostgreSQL"] },
  {
    group: "Tools & Testing",
    items: ["Git", "Vitest", "Testing Library", "Arduino IDE"],
  },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
