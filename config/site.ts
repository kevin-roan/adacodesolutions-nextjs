export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Adacode Solutions",
  description: "No.1 Software Training Institute in Kozhikode",
  navItems: [
    {
      label: "Courses",
      href: "/docs",
    },
    {
      label: "FAQ's",
      href: "/pricing",
    },
    {
      label: "Contact Us",
      href: "/blog",
    },
    {
      label: "About Us",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "About Us",
      href: "/profile",
    },
    {
      label: "Team",
      href: "/dashboard",
    },
    {
      label: "Courses",
      href: "/projects",
    },
    {
      label: "FAQ",
      href: "/team",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },

    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/adacodesolutions/",
    twitter: "https://instagram.com/adacodesolutions",
    discord: "https://discord.gg/adacodesolutions",
    sponsor: "https://www.adacodesolutions.com",
  },
};
