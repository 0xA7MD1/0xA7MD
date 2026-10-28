import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { GraphicGallery, type GraphicWork } from "@/components/graphic-gallery";
import { ModeToggle } from "@/components/mode-toggle";
import { contact, profile } from "@/data/portfolio";
import data from "@/data/graphic-works.json";

const works: GraphicWork[] = data.works;
const careerMail = `mailto:${contact.email}?subject=${encodeURIComponent("فرصة وظيفية في التصميم")}`;

export const metadata: Metadata = {
  title: "أعمال التصميم",
  description: "تصاميم أحمد الشامي للسوشال ميديا والإعلانات.",
};

// Reached by direct link only: the home page has no link to it.
export default function GraphicPage() {
  return (
    <>
      <header className="site-header" data-scrolled="true">
        <div className="header-inner">
          <Link className="header-brand" href="/" aria-label="أحمد — الرئيسية">
            <Image
              className="brand-symbol"
              src="/brand/ahmed-icon.svg"
              alt="رمز أحمد: أ"
              width={98}
              height={339}
              style={{ width: "auto", height: 40 }}
              priority
            />
          </Link>
          <div className="header-actions graphic-header-actions">
            <ModeToggle />
            <a href={careerMail} className="button button-cta header-contact">
              لنتواصل
            </a>
          </div>
        </div>
      </header>
      <main id="main-content">
        <section className="hero graphic-hero stage">
          <div className="stage-pattern" aria-hidden="true" />
          <div className="content-width graphic-hero-inner">
            <p className="eyebrow">
              <span className="tiny-mark" aria-hidden="true" />
              {profile.name} · مصمم جرافيك
            </p>
            <h1 className="gradient-heading">أعمالي في التصميم.</h1>
            <p className="hero-description">
              منشورات وإعلانات للسوشال ميديا، لمطاعم ومشروبات ومنتجات وتطبيقات.
            </p>
          </div>
        </section>

        <GraphicGallery works={works} />

        <section className="section contact-section stage">
          <div className="stage-pattern" aria-hidden="true" />
          <div className="content-width graphic-contact">
            <h2 className="gradient-heading">عندك فرصة في التصميم؟</h2>
            <a href={careerMail} className="button button-cta">
              راسلني
              <span className="cta-icon">
                <ArrowUpLeft size={18} aria-hidden="true" />
              </span>
            </a>
            <a className="graphic-mail" href={`mailto:${contact.email}`} dir="ltr">
              {contact.email}
            </a>
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
          <p>© 2026 أحمد الشامي</p>
        </footer>
      </main>
    </>
  );
}
