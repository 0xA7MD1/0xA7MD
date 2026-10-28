"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ModeToggle } from "@/components/mode-toggle";

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

// Same behavior as the home navbar: transparent over the hero, solid on scroll.
export function GraphicHeader({ contactHref }: { contactHref: string }) {
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 24,
    () => false,
  );
  return (
    <header className="site-header" data-scrolled={scrolled}>
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
        <nav className="desktop-nav" aria-label="التنقل في الأعمال">
          <a href="#featured">المختارة</a>
          <a href="#all-works">كل الأعمال</a>
          <a href="#contact">التواصل</a>
        </nav>
        <div className="header-actions">
          <ModeToggle />
          <a href={contactHref} className="button button-cta header-contact">
            لنتواصل
          </a>
        </div>
      </div>
    </header>
  );
}
