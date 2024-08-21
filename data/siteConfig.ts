import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://dumping.netlify.app",
  siteName: "Dumping Ground of Noman Dhoni",
  siteDescription:
    "This is the site where I Dump all my necessary things for the future.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/nomandhoni-cs",
    twitter: "https://twitter.com/nomandhoni",
    linkedin: "https://www.linkedin.com/in/nomandhoni/",
    instagram: "https://www.instagram.com/nomandhoni/",
  },
};
export default siteConfig;
