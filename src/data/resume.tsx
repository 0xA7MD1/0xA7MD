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
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;