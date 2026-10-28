import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpLeft, MapPin } from "lucide-react";
import { GraphicGallery, type GraphicWork } from "@/components/graphic-gallery";
import { GraphicHeader } from "@/components/graphic-header";
import { contact, profile } from "@/data/portfolio";
import data from "@/data/graphic-works.json";

const works: GraphicWork[] = data.works;
const categories = [...new Set(works.map((work) => work.category))];
const designCount = works.reduce((sum, work) => sum + work.images.length, 0);
// The hero fan shows the first three featured covers.
const fan = works.filter((work) => work.featured).slice(0, 3);
const careerMail = `mailto:${contact.email}?subject=${encodeURIComponent("فرصة وظيفية في التصميم")}`;

export const metadata: Metadata = {
  title: "أعمال التصميم",
  description: "تصاميم أحمد الشامي للسوشال ميديا والإعلانات.",
};

// Reached by direct link only: the home page has no link to it.
export default function GraphicPage() {
  return (
    <>
      <GraphicHeader contactHref={careerMail} />
      <main id="main-content">
        <section className="hero stage">
          <div className="stage-pattern" aria-hidden="true" />
          <div className="hero-inner content-width">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="tiny-mark" aria-hidden="true" />
                {profile.name} · مصمم جرافيك
              </p>
              <h1 className="gradient-heading">
                تصاميم توصل الفكرة،
                <br />
                من أول نظرة.
              </h1>
              <p className="hero-description">
                منشورات وإعلانات للسوشال ميديا، لمطاعم ومشروبات ومنتجات
                وتطبيقات.
              </p>
              <div className="hero-actions">
                <a href="#featured" className="button button-cta">
                  شوف أعمالي
                  <span className="cta-icon">
                    <ArrowDown size={18} aria-hidden="true" />
                  </span>
                </a>
                <a href={careerMail} className="button button-glass">
                  خلّنا نتواصل
                  <ArrowUpLeft size={17} aria-hidden="true" />
                </a>
              </div>
              <dl className="graphic-stats">
                <div>
                  <dt>عمل</dt>
                  <dd>{works.length}</dd>
                </div>
                <div>
                  <dt>تصميم</dt>
                  <dd>{designCount}</dd>
                </div>
                <div>
                  <dt>تصنيفات</dt>
                  <dd>{categories.length}</dd>
                </div>
              </dl>
            </div>
            <div className="graphic-fan" aria-hidden="true">
              <span className="scene-coordinate coordinate-top" dir="ltr">
                CONCEPT → DESIGN → POST
              </span>
              {fan.map((work, index) => (
                <div className="graphic-fan-card" data-index={index} key={work.slug}>
                  <Image
                    src={work.images[0]}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 50vw, 280px"
                    priority={index === 0}
                  />
                </div>
              ))}
              <span className="scene-coordinate coordinate-bottom" dir="ltr">
                DESIGN PORTFOLIO / 02
              </span>
            </div>
          </div>
          <div className="hero-bottom content-width">
            <span className="graphic-hero-categories">
              {categories.join(" · ")}
            </span>
            <a href="#featured">
              أفضل أعمالي
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <GraphicGallery works={works} />

        <section id="contact" className="section contact-section stage">
          <div className="stage-pattern" aria-hidden="true" />
          <div className="content-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span dir="ltr">03</span>
                  <span className="eyebrow-line" />
                  التواصل
                </p>
                <h2 className="gradient-heading">
                  عندك فرصة في التصميم؟ خلّنا نتكلم.
                </h2>
              </div>
              <p className="section-description">
                أبحث عن دور في التصميم الجرافيك ضمن فريق، حضوري أو عن بُعد.
              </p>
            </div>
            <div className="contact-grid">
              <a href={careerMail} className="contact-option">
                <span className="contact-option-number" dir="ltr">
                  01 / CAREER
                </span>
                <div>
                  <h3>فرصة وظيفية</h3>
                  <ArrowUpLeft size={26} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p>للتواصل حول دور في التصميم الجرافيك ضمن فريقك.</p>
              </a>
              <Link href="/" className="contact-option">
                <span className="contact-option-number" dir="ltr">
                  02 / CODE
                </span>
                <div>
                  <h3>أعمالي البرمجية</h3>
                  <ArrowUpLeft size={26} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p>أطوّر تطبيقات ويب أيضًا. شوف مشاريعي في الصفحة الرئيسية.</p>
              </Link>
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
          <Link href="/" className="footer-brand" aria-label="أحمد — الرئيسية">
            <Image
              className="brand-symbol"
              src="/brand/ahmed-icon.svg"
              width={98}
              height={339}
              alt="رمز أحمد: أ"
            />
          </Link>
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
          <p className="graphic-footer-meta">
            <MapPin size={12} aria-hidden="true" />
            {profile.location}
            <span className="location-divider" />© 2026 أحمد الشامي
          </p>
        </footer>
      </main>
    </>
  );
}
