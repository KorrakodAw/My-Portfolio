// data/portfolio.ts

export const personalInfo = {
  name: "Korrakod",
  role: "Full Stack Developer",
  location: "Lamphun, Thailand",
  email: "your.email@example.com", // Update this!
  github: "https://github.com/KorrakodAw",
  about: `
    I am a developer passionate about building scalable web applications. 
    Currently focused on the React ecosystem (Next.js) and backend development with Node.js and PostgreSQL.
    
    I love solving complex problems, whether it's optimizing database queries or fixing CSS layouts.
    When I'm not coding, you can find me analyzing Thai stocks or gaming on my dual-monitor setup.
  `,
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Playwright"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "Linux (WSL)", "VS Code"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Full Stack E-Commerce",
    description:
      "A complete shopping platform with product management and cart functionality.",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    link: "https://github.com/KorrakodAw/project-1",
  },
  {
    id: 2,
    title: "Stock Market Tracker",
    description:
      "Real-time dashboard tracking Thai stocks (PTTEP, SCB) and Crypto prices.",
    tech: ["React", "Chart.js", "Node.js"],
    link: "https://github.com/KorrakodAw/project-2",
  },
  {
    id: 3,
    title: "Game Guide Platform",
    description: "A community wiki for games like GTA 5 and Hogwarts Legacy.",
    tech: ["TypeScript", "Tailwind", "Next.js"],
    link: "https://github.com/KorrakodAw/project-3",
  },
];
