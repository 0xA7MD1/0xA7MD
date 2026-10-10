"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const links = [
  { id: "projects", label: "المشاريع" },
  { id: "expertise", label: "ما أبنيه" },
  { id: "about", label: "عنّي" },
  { id: "contact", label: "التواصل" },
];
function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export default function Navbar() {
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 24,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    for (const link of links) {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);
  function closeMenu() {
    setOpen(false);
  }
  if (pathname !== "/") return null;
  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-open={open}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          closeMenu();
          menuButton.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <a
          className="header-brand"
          href="#home"
          aria-label="أحمد — الرئيسية"
          onClick={closeMenu}
        >
          <Image
            className="brand-symbol"
            src="/brand/ahmed-icon.svg"
            alt="رمز أحمد: أ"
            width={98}
            height={339}
            priority
          />
        </a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {links.map((link) => (
            <a
              href={`#${link.id}`}
              key={link.id}
              aria-current={active === link.id ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ModeToggle />
          <a
            href="#contact"
            className="button button-cta header-contact"
            onClick={closeMenu}
          >
            لنتواصل
          </a>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="التنقل على الجوال"
        hidden={!open}
      >
        {links.map((link) => (
          <a
            href={`#${link.id}`}
            key={link.id}
            aria-current={active === link.id ? "location" : undefined}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
