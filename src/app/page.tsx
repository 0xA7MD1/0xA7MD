import Image from "next/image";
import {
  ArrowDown,
  ArrowUpLeft,
  Braces,
  BriefcaseBusiness,
  Cpu,
  Database,
  GitBranch,
  GraduationCap,
  MapPin,
  Workflow,
} from "lucide-react";
import { ProjectList } from "@/components/project-list";
import { PageMotion } from "@/components/page-motion";
import {
  contact,
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

const capabilities = [
  {
    title: "تطبيقات الويب",
    description:
      "واجهات متجاوبة، وتجربة استخدام واضحة، وتطبيقات تربط الواجهة بالخدمات الخلفية.",
    icon: Braces,
    category: "frontend",
  },
  {
    title: "البيانات والخدمات",
    description:
      "قواعد بيانات، وتسجيل دخول وصلاحيات، وربط الخدمات التي يحتاجها المنتج.",
    icon: Database,
    category: "backend",
  },
  {
    title: "الذكاء الاصطناعي والأتمتة",
    description:
      "ربط نماذج الذكاء الاصطناعي وبناء تدفقات عمل تختصر الخطوات المتكررة.",
    icon: Workflow,
    category: "automation",
  },
] as const;

function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span dir="ltr">{number}</span>
          <span className="eyebrow-line" />
          {label}
        </p>
        <h2 className="gradient-heading">{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function mailLink(subject: string) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}

export default function Page() {
  return (
    <main id="main-content">
      <PageMotion />
      <section id="home" className="hero stage">
        <div className="stage-pattern" aria-hidden="true" />
        <div className="hero-inner content-width">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-mark" aria-hidden="true" />
              {profile.name} · {profile.role}
            </p>
            <h1 className="gradient-heading">
              أبني تجارب رقمية،
              <br />
              من الفكرة إلى التنفيذ.
            </h1>
            <p className="hero-description">{profile.description}</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-cta">
                استكشف أعمالي
                <span className="cta-icon">
                  <ArrowUpLeft size={18} aria-hidden="true" />
                </span>
              </a>
              <a href="#contact" className="button button-glass">
                خلّنا نتواصل
                <ArrowUpLeft size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-location">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
              <span className="location-divider" />
              <span dir="ltr">0xA7MD</span>
            </p>
          </div>
          <div className="brand-scene" aria-hidden="true">
            <div className="brand-orbit orbit-one" />
            <div className="brand-orbit orbit-two" />
            <span className="scene-coordinate coordinate-top" dir="ltr">
              IDEA → BUILD → REFINE
            </span>
            <div className="hero-brand-mark" />
            <span className="scene-tag tag-code">
              <Braces size={17} />
              <span dir="ltr">Software</span>
            </span>
            <span className="scene-tag tag-ai">
              <Cpu size={17} />
              <span dir="ltr">AI & Automation</span>
            </span>
            <span className="scene-coordinate coordinate-bottom" dir="ltr">
              PERSONAL PORTFOLIO / 01
            </span>
          </div>
        </div>
        <div className="hero-bottom content-width">
          <span>شغلي يتكلم عنّي.</span>
          <a href="#projects">
            المشاريع المختارة
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="projects" className="section content-width">
        <SectionHeading
          number="01"
          label="المشاريع"
          title="من الأفكار إلى منتجات فعلية."
          description="تطبيقات ويب وتجارب في الذكاء الاصطناعي والأتمتة. كل مشروع يحكي جزءًا من طريقة عملي."
        />
        <ProjectList projects={projects} />
        <a
          className="all-work-link"
          href="https://github.com/0xA7MD1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitBranch size={17} aria-hidden="true" />
          المزيد من أعمالي على GitHub
          <ArrowUpLeft size={17} aria-hidden="true" />
        </a>
      </section>

      <section id="expertise" className="section expertise-section stage">
        <div className="stage-pattern" aria-hidden="true" />
        <div className="content-width">
          <SectionHeading
            number="02"
            label="ما أبنيه"
            title="التقنية في خدمة الفكرة."
            description="أختار أدوات المشروع بحسب احتياجه، وأهتم بتفاصيل التنفيذ وتجربة المستخدم معًا."
          />
          <div className="capability-grid">
            {capabilities.map(
              ({ title, description, icon: Icon, category }) => (
                <article className="capability" key={title}>
                  <span className="capability-icon">
                    <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="tags" dir="ltr">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <span key={skill.name}>{skill.name}</span>
                      ))}
                  </div>
                </article>
              ),
            )}
          </div>
          <div className="tool-note">
            <GitBranch size={16} aria-hidden="true" />
            <span>أدوات أستخدمها أيضًا</span>
            <span dir="ltr">
              {skills
                .filter((skill) => skill.category === "infrastructure")
                .map((skill) => skill.name)
                .join(" / ")}
            </span>
          </div>
        </div>
      </section>

      <section id="about" className="section content-width">
        <SectionHeading
          number="03"
          label="عنّي"
          title="أحمد، وخلف كل مشروع حكاية."
        />
        <div className="about-grid">
          <div className="about-copy">
            <div className="profile-line">
              <span className="profile-emblem" aria-hidden="true">
                <span className="profile-monogram" />
              </span>
              <div>
                <span className="profile-caption" dir="ltr">
                  SOFTWARE ENGINEER
                </span>
                <h3>{profile.name}</h3>
                <p>
                  {profile.role} · {profile.location}
                </p>
              </div>
            </div>
            <p>{profile.summary}</p>
            <p>
              طوّرت منتجات للصحة والإنتاجية وإدارة المطاعم وتعلّم الإنجليزية.
              وتعلّمت التصميم لأصمّم مشاريعي بنفسي؛ أهتم بوضوح الواجهة بقدر
              اهتمامي بما يعمل خلفها.
            </p>
            <div className="about-availability">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              <div>
                <strong>متاح لفرص تطوير البرمجيات</strong>
                <p>حضوري · هجين · عن بُعد</p>
              </div>
            </div>
            <div className="about-actions">
              <a
                className="button button-glass"
                href="/resume/ahmed-al-shami.pdf"
                download
              >
                تحميل السيرة الذاتية
                <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href={
                  contact.socials.find((social) => social.name === "LinkedIn")
                    ?.url
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpLeft size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="education-card">
              <GraduationCap size={22} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p>التعليم</p>
                <h3>
                  {education.qualification} · {education.track}
                </h3>
                <span>
                  المعدل <bdi>{education.grade}</bdi> · {education.year}
                </span>
              </div>
            </div>
          </div>
          <div className="experience-panel">
            <div className="experience-heading">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              <h3>من خبرتي العملية</h3>
            </div>
            {experience.map((item) => (
              <article key={item.company} className="experience-item">
                <div className="experience-meta">
                  <span className="experience-status">
                    {item.status ?? item.workType}
                  </span>
                  <span className="experience-year" dir="ltr">
                    {item.start}
                    {item.end && item.end !== item.start
                      ? ` — ${item.end}`
                      : ""}
                  </span>
                </div>
                <div className="experience-top">
                  {item.logoUrl && (
                    <Image
                      src={item.logoUrl}
                      width={42}
                      height={45}
                      style={{ height: "auto" }}
                      alt=""
                    />
                  )}
                  <div>
                    <h3 dir="auto">{item.company}</h3>
                    <p>{item.title}</p>
                  </div>
                </div>
                <p className="experience-description">{item.description}</p>
                <div className="experience-bottom">
                  <span>
                    {item.workType} · {item.location}
                  </span>
                  {item.url && (
                    <a
                      className="text-link"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      زيارة الجهة
                      <ArrowUpLeft size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section stage">
        <div className="stage-pattern" aria-hidden="true" />
        <div className="content-width">
          <SectionHeading
            number="04"
            label="التواصل"
            title="عندك فرصة أو فكرة؟ خلّنا نتكلم."
            description="سواء تبحث عن مطوّر لفريقك، أو تحتاج تنفيذ مشروع برمجي بنطاق محدد."
          />
          <div className="contact-grid">
            <a
              href={mailLink("فرصة وظيفية في البرمجة")}
              className="contact-option"
            >
              <span className="contact-option-number" dir="ltr">
                01 / CAREER
              </span>
              <div>
                <h3>فرصة وظيفية</h3>
                <ArrowUpLeft size={26} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p>للتواصل حول دور في تطوير البرمجيات ضمن فريقك.</p>
            </a>
            <a href={mailLink("مشروع برمجي مستقل")} className="contact-option">
              <span className="contact-option-number" dir="ltr">
                02 / PROJECT
              </span>
              <div>
                <h3>مشروع مستقل</h3>
                <ArrowUpLeft size={26} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p>أرسل فكرة المشروع، ونطاقه والموعد المتوقع للتنفيذ.</p>
            </a>
          </div>
          <div className="contact-direct">
            <a href={`mailto:${contact.email}`} dir="ltr">
              {contact.email}
              <ArrowUpLeft size={21} aria-hidden="true" />
            </a>
            <a
              className="phone-link"
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              dir="ltr"
            >
              {contact.phone}
            </a>
          </div>
        </div>
      </section>
      <footer className="footer content-width">
        <a
          href="#home"
          className="footer-brand"
          aria-label="أحمد — العودة لأعلى الصفحة"
        >
          <Image
            className="brand-symbol"
            src="/brand/ahmed-icon.svg"
            width={98}
            height={339}
            alt="رمز أحمد: أ"
          />
        </a>
        <nav aria-label="حساباتي" className="social-links">
          {contact.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
              <ArrowUpLeft size={13} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <p>© 2026 أحمد الشامي</p>
      </footer>
    </main>
  );
}
