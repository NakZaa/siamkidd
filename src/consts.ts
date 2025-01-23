import type { Site, Page, Links, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Siam Kid D",
  DESCRIPTION: "Siam Kid D School",
  AUTHOR: "Siam Kid D",
};

export const HOME: Page = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to Siam Kid D School",
};

export const ACTIVITIES: Page = {
  TITLE: "Activities",
  DESCRIPTION: "Activities at Siam Kid D School",
};

export const CONTACT: Page = {
  TITLE: "Contact",
  DESCRIPTION: "Join Siam Kid D School",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Activities",
    HREF: "/activities",
  },
  {
    TEXT: "Contact",
    HREF: "/contact",
  },
];

export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "markhorn.dev@gmail.com",
    HREF: "mailto:markhorn.dev@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "markhorn-dev",
    HREF: "https://github.com/markhorn-dev/astro-sphere",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
];
