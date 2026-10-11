"use client";

import { useEffect } from "react";

// Keep the content server-rendered. Load motion after the first paint.
export function PageMotion() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    const timer = window.setTimeout(async () => {
      if (
        disposed ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      try {
        const [{ gsap }, { ScrollToPlugin }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollToPlugin"),
        ]);
        if (disposed) return;
        gsap.registerPlugin(ScrollToPlugin);
        const media = gsap.matchMedia();
        media.add("(prefers-reduced-motion: no-preference)", (context) => {
          const main = document.getElementById("main-content");
          if (!main) return;
          let restoreScroll = () => {};
          const reveal = (element: Element) => {
            if (element.contains(document.activeElement)) return;
            context.add(() => {
              gsap.fromTo(
                element,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.55,
                  ease: "power2.out",
                  clearProps: "transform,opacity",
                  overwrite: "auto",
                },
              );
            });
          };
          const observer = new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                observer.unobserve(entry.target);
                reveal(entry.target);
              }
            },
            { threshold: 0.08 },
          );
          main
            .querySelectorAll(
              ".section-heading, .project-info, .capability, .about-copy, .experience-item, .education-card, .contact-option",
            )
            .forEach((element) => {
              // Do not replay motion on restored scroll positions or visible content.
              if (element.getBoundingClientRect().top >= window.innerHeight)
                observer.observe(element);
            });
          if (window.scrollY < 100 && !window.location.hash) {
            context.add(() => {
              gsap.fromTo(
                ".hero-copy > *, .brand-scene",
                { y: 16, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.07,
                  duration: 0.55,
                  ease: "power2.out",
                  clearProps: "transform,opacity",
                },
              );
            });
          }
          const navigate = (event: MouseEvent) => {
            if (
              event.defaultPrevented ||
              event.button !== 0 ||
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            )
              return;
            const link =
              event.target instanceof Element
                ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
                : null;
            if (
              !link ||
              link.classList.contains("skip-link") ||
              link.hasAttribute("download")
            )
              return;
            const hash = link.getAttribute("href");
            const target = hash ? document.getElementById(hash.slice(1)) : null;
            if (!target) return;
            event.preventDefault();
            if (window.location.hash !== hash)
              window.history.pushState(null, "", hash);
            gsap.killTweensOf(window);
            restoreScroll();
            const root = document.documentElement;
            const previousBehavior = root.style.scrollBehavior;
            root.style.scrollBehavior = "auto";
            restoreScroll = () => {
              root.style.scrollBehavior = previousBehavior;
            };
            context.add(() => {
              gsap.to(window, {
                duration: 0.7,
                ease: "power2.inOut",
                overwrite: "auto",
                scrollTo: {
                  y: target,
                  offsetY:
                    parseFloat(getComputedStyle(target).scrollMarginTop) || 0,
                  autoKill: true,
                  onAutoKill: restoreScroll,
                },
                onInterrupt: restoreScroll,
                onComplete: () => {
                  restoreScroll();
                  const hadTabIndex = target.hasAttribute("tabindex");
                  if (!hadTabIndex) target.setAttribute("tabindex", "-1");
                  target.focus({ preventScroll: true });
                  if (!hadTabIndex)
                    target.addEventListener(
                      "blur",
                      () => target.removeAttribute("tabindex"),
                      { once: true },
                    );
                },
              });
            });
          };
          document.addEventListener("click", navigate);
          return () => {
            restoreScroll();
            observer.disconnect();
            document.removeEventListener("click", navigate);
          };
        });
        const main = document.getElementById("main-content");
        if (main) main.dataset.motion = "ready";
        cleanup = () => media.revert();
      } catch {
        // Native scrolling and visible content remain usable if motion cannot load.
      }
    }, 200);
    return () => {
      disposed = true;
      window.clearTimeout(timer);
      cleanup?.();
    };
  }, []);
  return null;
}
