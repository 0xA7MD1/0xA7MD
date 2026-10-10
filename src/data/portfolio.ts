export interface PortfolioProfile {
  name: string;
  nameEnglish: string;
  initials: string;
  role: string;
  description: string;
  summary: string;
  location: string;
  avatarUrl: string;
  siteUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface PortfolioContact {
  email: string;
  phone: string;
  socials: readonly SocialLink[];
}

export interface PortfolioExperience {
  company: string;
  title: string;
  workType: string;
  location: string;
  start: string;
  end: string;
  description: string;
  url: string;
  logoUrl: string;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "automation"
  | "infrastructure";

export interface PortfolioSkill {
  name: string;
  category: SkillCategory;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  year?: string;
  description: string;
  highlights: readonly string[];
  technologies: readonly string[];
  image?: ProjectImage;
  websiteUrl?: string;
  sourceUrl?: string;
  videoId?: string;
  videoUrl?: string;
}

export const profile: PortfolioProfile = {
  name: "أحمد الشامي",
  nameEnglish: "Ahmed Al-Shami",
  initials: "AA",
  role: "مطوّر برمجيات",
  description:
    "أبني تطبيقات ويب سريعة، وأستخدم الذكاء الاصطناعي والأتمتة لتطوير سير العمل.",
  summary:
    "أطوّر تطبيقات ويب من الفكرة إلى التنفيذ، مع اهتمام بتجربة الاستخدام ووضوح الواجهة. يشمل عملي تطوير الواجهات والخدمات الخلفية، وربط قواعد البيانات، وبناء تدفقات عمل تستخدم الذكاء الاصطناعي والأتمتة.",
  location: "الرياض، السعودية",
  avatarUrl: "/me.webp",
  siteUrl: "https://0xa7md.vercel.app/",
};

export const contact: PortfolioContact = {
  email: "0xA7MD@proton.me",
  phone: "+966 55 225 6978",
  socials: [
    { name: "GitHub", url: "https://github.com/0xA7MD1" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/0xa7md" },
    { name: "X", url: "https://x.com/0xa7md1" },
    { name: "YouTube", url: "https://www.youtube.com/@0xA7MD" },
    { name: "TikTok", url: "https://www.tiktok.com/@0xa7md1" },
  ],
};

export const experience: readonly PortfolioExperience[] = [
  {
    company: "متجر عزم",
    title: "استشاري تجارة إلكترونية",
    workType: "عمل مستقل",
    location: "عن بُعد",
    start: "2025",
    end: "حتى الآن",
    description:
      "تجهيز متجر عزم وإطلاقه على منصة سلة، من إعداد المنتجات والأسعار والأوصاف إلى تنظيم واجهة المتجر وتجربة الاستخدام.",
    url: "https://salla.sa/azm.store",
    logoUrl: "/azm.png",
  },
];

export const skills: readonly PortfolioSkill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "n8n", category: "automation" },
  { name: "Python", category: "automation" },
  { name: "Docker", category: "infrastructure" },
  { name: "Git", category: "infrastructure" },
];

export const projects: readonly PortfolioProject[] = [
  {
    id: "talluq",
    title: "تألق",
    category: "تطبيق للصحة والإنتاجية",
    description:
      "تطبيق يجمع متابعة العادات والتغذية والتمرين، مع تحليل الوجبات بالذكاء الاصطناعي لمساعدة المستخدم على تنظيم يومه.",
    highlights: [
      "متابعة العادات والتمرين في تجربة واحدة.",
      "تحليل صورة الوجبة ومتابعة التغذية.",
      "واجهة عربية تركز على الاستخدام اليومي.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "OpenRouter SDK",
      "Better Auth",
      "Drizzle ORM",
    ],
    image: {
      src: "/projects/talluq.png",
      alt: "عرض مشروع تألق مع واجهتي متابعة اليوم وتحليل التغذية على الجوال.",
      width: 4672,
      height: 3488,
    },
    websiteUrl: "https://talluq.vercel.app/",
    // أكد أحمد أن تألق امتداد Intlaq؛ المستودع الحالي خاص.
  },
  {
    id: "revuhub",
    title: "RevuHub",
    category: "نشر محتوى بالذكاء الاصطناعي",
    year: "2025",
    description:
      "منصة تؤتمت البحث وكتابة المقالات وترجمتها ونشرها بالعربية والإنجليزية. تنسّق تدفقات n8n بين البحث والتوليد والتخزين، وتعرض المقالات عبر واجهة Astro.",
    highlights: [
      "البحث والتوليد والترجمة ضمن سلسلة عمل مؤتمتة.",
      "إنتاج مقالات MDX بالعربية والإنجليزية وحفظها في Supabase.",
      "واجهة لعرض محتوى مهيّأ لمحركات البحث.",
    ],
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
    websiteUrl: "https://revuhub.vercel.app/",
    sourceUrl: "https://github.com/0xA7MD1/RevuHub",
    videoId: "kloR7Q_edN8",
    videoUrl: "https://www.youtube.com/watch?v=kloR7Q_edN8",
  },
  {
    id: "abdat",
    title: "Abdat",
    category: "منصة فيديو قصيرة",
    year: "2025",
    description:
      "منصة عربية للفيديوهات القصيرة، تضم موجزًا عموديًا يعمل تلقائيًا، وتفاعلات اجتماعية، وملفات لصنّاع المحتوى، ولوحة تحكم لإدارة المحتوى والصلاحيات.",
    highlights: [
      "تجربة موجّهة للجوال مع موجز فيديو عمودي.",
      "تعليقات وقوائم تشغيل وملفات لصنّاع المحتوى.",
      "تسجيل دخول وصلاحيات بحسب الدور ولوحة إدارة.",
    ],
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
    websiteUrl: "https://abdat.vercel.app/",
    sourceUrl: "https://github.com/0xA7MD1/abdat",
    videoId: "0uIpI0HU2ts",
    videoUrl: "https://youtu.be/0uIpI0HU2ts?si=5y5cPLzNkzBcHFMn",
  },
];

// نسخة المشروع السابقة؛ أكد أحمد أنها أصبحت تألق، لذلك لا تكررها في projects.
export const previousProject: PortfolioProject = {
  id: "intlaq",
  title: "Intlaq",
  category: "تطبيق للصحة والإنتاجية",
  year: "2025",
  description:
    "لوحة عربية للصحة والإنتاجية تجمع تحليل الوجبات بالذكاء الاصطناعي وتتبع العادات والتمارين ومؤقت بومودورو، مع تخزين مشفّر وواجهة متجاوبة تدعم اتجاه الكتابة العربي.",
  highlights: [
    "تحليل الوجبات بالذكاء الاصطناعي.",
    "متابعة العادات والتمارين ومؤقت بومودورو.",
    "تخزين مشفّر وواجهة متجاوبة تدعم RTL.",
  ],
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
  websiteUrl: "https://intlaq.vercel.app/",
  sourceUrl: "https://github.com/0xA7MD1/intlaq",
  videoId: "BXAGatzfUkY",
  videoUrl: "https://youtu.be/BXAGatzfUkY?si=O964g0LqojE862yD",
};
