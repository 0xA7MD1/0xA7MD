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
  url?: string;
  logoUrl?: string;
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
    "أبني تطبيقات ويب عربية متكاملة، من الواجهة وقواعد البيانات إلى الذكاء الاصطناعي والدفع والأتمتة.",
  summary:
    "مطوّر Full-Stack متخصص في Next.js وTypeScript وPostgreSQL. أبني منتجات عربية متكاملة تشمل نمذجة البيانات والخدمات الخلفية والواجهات وتكاملات الذكاء الاصطناعي والدفع. صمّمت وطوّرت تطبيقًا للصحة والإنتاجية، ونظام إدارة مطاعم متعددة الفروع، ومنصة لتعلّم الإنجليزية. عملت بعقد على منصة مؤسسية باستخدام Laravel وReact، وأنا متاح للعمل الحضوري والهجين وعن بُعد.",
  location: "الرياض، السعودية",
  avatarUrl: "/me.webp",
  siteUrl: "https://0xa7md.vercel.app/",
};

export const contact: PortfolioContact = {
  email: "0xA7MD@proton.me",
  phone: "+966 55 225 6978",
  socials: [
    { name: "GitHub", url: "https://github.com/0xA7MD1" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-al-shami" },
    { name: "X", url: "https://x.com/0xa7md1" },
    { name: "YouTube", url: "https://www.youtube.com/@0xA7MD" },
    { name: "TikTok", url: "https://www.tiktok.com/@0xa7md1" },
  ],
};

export const experience: readonly PortfolioExperience[] = [
  {
    company: "Maham Tech — Mham Expo",
    title: "مطوّر برمجيات",
    workType: "عقد",
    location: "منصة لإدارة المعارض",
    start: "2026",
    end: "2026",
    description:
      "تطوير وحدات مالية وموارد بشرية في منصة مؤسسية مبنية على Laravel وReact. شمل العمل إنشاء القيود والضرائب وربطها بالأستاذ العام، معالجة فروقات المدين والدائن، إدارة الوحدات وعقود الإيجار، واستخراج بيانات الموظفين من المستندات.",
  },
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
  { name: "TanStack Query", category: "frontend" },
  { name: "Zustand", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Drizzle ORM", category: "backend" },
  { name: "n8n", category: "automation" },
  { name: "Python", category: "automation" },
  { name: "Vercel AI SDK", category: "automation" },
  { name: "MCP", category: "automation" },
  { name: "Docker", category: "infrastructure" },
  { name: "Git", category: "infrastructure" },
  { name: "Vitest", category: "infrastructure" },
  { name: "Sentry", category: "infrastructure" },
];

export const projects: readonly PortfolioProject[] = [
  {
    id: "talluq",
    title: "تألق",
    category: "تطبيق للصحة والإنتاجية",
    description:
      "تطبيق يجمع متابعة العادات والتغذية والتمرين، مع تحليل الوجبات بالذكاء الاصطناعي لمساعدة المستخدم على تنظيم يومه.",
    highlights: [
      "تحليل صور الوجبات ومدرب ذكي يبني خطط التمارين.",
      "اشتراكات Polar بثلاث فئات وحصص يومية للذكاء الاصطناعي.",
      "أكثر من 35 جدولًا للبيانات وسجل مالي يمنع تكرار الحركات.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel AI SDK",
      "Google Gemini",
      "Polar",
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
    id: "sawakhen",
    title: "Sawakhen ERP",
    category: "إدارة مطاعم متعددة الفروع",
    year: "2025 — 2026",
    description:
      "نظام عربي لإدارة الوصفات والمشتريات والمخزون والإنتاج والتحويلات بين الفروع والجرد والمصروفات والموارد البشرية، يتطور إلى منتج SaaS.",
    highlights: [
      "48 جدولًا في PostgreSQL ومحرك مخزون بمعاملات موحّدة وتكاليف ثابتة.",
      "38 صلاحية مع تحقق مركزي وسجل تدقيق للعمليات.",
      "استخراج الفواتير عبر Mistral OCR ومساعد ذكي وخادم MCP محمي بـOAuth.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Mistral OCR", "MCP"],
    websiteUrl: "https://sawakhen-erp.vercel.app/",
  },
  {
    id: "verba",
    title: "Verba",
    category: "تعلّم الإنجليزية بالكتابة",
    year: "2026",
    description:
      "منصة تساعد المتحدثين بالعربية على تعلّم الإنجليزية بكتابة محادثات مهنية، مع صعوبة تتكيف مع أداء المستخدم ومراجعة متباعدة للكلمات.",
    highlights: [
      "963 تبادلًا حواريًا في 20 موضوعًا وقاموس عربي من 2,600 كلمة.",
      "مسار كتابة سريع ومزامنة للتقدم تعمل عند انقطاع الاتصال.",
      "196 اختبارًا آليًا لمنطق التعلّم والتقدم باستخدام Vitest.",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "Drizzle ORM", "Clerk", "Vitest"],
    websiteUrl: "https://verba-sa.vercel.app/",
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
