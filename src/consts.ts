import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Todd Miller",
  EMAIL: "t.miller07@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A small tech-blog and portfolio created using Astro and MDX.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const NOTES: Metadata = {
  TITLE: "Notes",
  DESCRIPTION: "A collection of notes on topics I want to keep as reference.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/todd-miller"
  },
  { 
    NAME: "linkedin",
    HREF: "https://linkedin.com/in/todd-miller-a97030134",
  }
];
