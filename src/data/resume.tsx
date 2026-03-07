import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";
import { AstroIcon } from "@/components/ui/svgs/astro";
import { GitIcon } from "@/components/ui/svgs/git";
import { FlutterIcon } from "@/components/ui/svgs/flutter";
import { ReactNativeIcon } from "@/components/ui/svgs/reactNative";
import { FigmaIcon } from "@/components/ui/svgs/figma";
import { N8nIcon } from "@/components/ui/svgs/n8n";
import { SupabaseIcon } from "@/components/ui/svgs/supabase";
import { PrismaIcon } from "@/components/ui/svgs/prisma";
import { VercelIcon } from "@/components/ui/svgs/vercel";

export const DATA = {
  name: "Ahmed Al-Shami",
  initials: "AA",
  url: "https://0xa7md.vercel.app/",
  location: "Riyadh, Saudi Arabia",
  locationLink: "https://www.google.com/maps/place/Riyadh",
  description:
    "Software Engineer focused on building fast web applications and AI-automated workflows.",
  summary:
    "I am a Software Engineer who builds modern, fast, and user-friendly web applications. I combine clean code with strong UI/UX design to create complete digital products from scratch. Beyond just writing code, I use AI and automation tools to make business workflows smarter and faster. Whether I am working on an e-commerce platform or a custom AI tool, my goal is always to deliver scalable solutions that solve real problems.",
  avatarUrl: "/me.webp",
  skills: [
    // --- Frontend ---
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Astro", icon: AstroIcon },
    { name: "TypeScript", icon: Typescript },

    // --- Backend & Databases ---
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Supabase", icon: SupabaseIcon },
    { name: "Prisma", icon: PrismaIcon },

    // --- AI & Automation ---
    { name: "Python", icon: Python },
    { name: "n8n", icon: N8nIcon },

    // --- Cloud & DevOps ---
    { name: "Docker", icon: Docker },
    { name: "Git", icon: GitIcon },
    { name: "Vercel", icon: VercelIcon },

    // --- Mobile & Design ---
    { name: "Flutter", icon: FlutterIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "Figma", icon: FigmaIcon },

    // --- Programming Languages ---
    { name: "C# (basics)", icon: Csharp },
    { name: "Go (basics)", icon: Golang },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "0xA7MD@proton.me",
    tel: "+966 55 225 6978",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0xA7MD1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/0xa7md",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0xa7md1",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@0xA7MD",
        icon: Icons.youtube,
        navbar: true,
      },
      TikTok: {
        name: "TikTok",
        url: "https://www.tiktok.com/@0xa7md1",
        icon: Icons.tiktok,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:0xA7MD@proton.me",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Azm Store",
      href: "https://salla.sa/azm.store", 
      badges: ["Freelance"],
      location: "Remote",
      title: "E-commerce Consultant",
      logoUrl: "/azm.png", 
      start: "2025",
      end: "Present",
      description:
        "Led end-to-end setup and launch of a full e-commerce store on the Salla platform, managing everything from product curation to go-live. Defined pricing strategies and wrote conversion-optimized product descriptions. Designed all product visuals, promotional banners, and social media ad creatives for marketing campaigns. Developed the store's complete branding and visual identity, including website UI/UX design. Drove initial customer acquisition through coordinated social media marketing at launch.",
    },
  ],
  education: [
    {
      school: "High School",
      href: "",
      degree: "High School Graduate",
      logoUrl: "",
      start: "2022",
      end: "June 25, 2026",
    },
  ],
  projects: [
    {
      title: "RevuHub",
      href: "https://revuhub.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "AI-powered automated content publishing platform that generates, researches, translates, and publishes SEO-ready articles with zero manual writing. Built around an orchestration pipeline using n8n, integrating AI research (Exa) and AI generation agents (Gemini) to produce structured MDX articles in English and Arabic, store them in Supabase, and render them through a high-performance Astro frontend.",
      technologies: [
        "Astro",
        "React",
        "TailwindCSS",
        "Supabase",
        "PostgreSQL",
        "n8n",
        "LangChain",
        "Google Gemini 2.5 Flash",
        "Exa AI",
        "Unsplash API",
        "MDX",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://revuhub.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xA7MD1/RevuHub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "https://www.youtube.com/watch?v=kloR7Q_edN8",
    },
    {
      title: "Abdat",
      href: "https://abdat.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Arabic short-video platform inspired by TikTok, featuring a vertical autoplay feed, social interactions, and a full admin dashboard. Built as a mobile-first application with React and Supabase, supporting authentication, role-based access control, comments, playlists, creator profiles, and content management tools.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "Supabase",
        "PostgreSQL",
        "React Query",
        "Zod",
        "Radix UI",
        "shadcn/ui",
        "Vitest",
      ],
      links: [
        {
          type: "Website",
          href: "https://abdat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xA7MD1/abdat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "https://youtu.be/0uIpI0HU2ts?si=5y5cPLzNkzBcHFMn",
    },
    {
      title: "Intlaq",
      href: "https://intlaq.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Arabic-first productivity and wellness dashboard integrating AI-powered meal analysis, habit tracking, workouts, and a Pomodoro focus timer. Built with a full-stack modern architecture, secure encrypted storage, and RTL-ready responsive UI for Arabic users.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Drizzle ORM",
        "Neon Postgres",
        "Zustand",
        "Cloudinary",
        "Google Gemini",
        "Resend",
        "Vitest",
      ],
      links: [
        {
          type: "Website",
          href: "https://intlaq.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xA7MD1/intlaq",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "https://youtu.be/BXAGatzfUkY?si=O964g0LqojE862yD",
    },
  ],
} as const;