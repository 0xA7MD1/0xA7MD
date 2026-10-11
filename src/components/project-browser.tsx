"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpLeft, MousePointer2, RotateCw, X, Globe } from "lucide-react";

export function ProjectBrowser({
  id,
  title,
  url,
  active,
  onActiveChange,
}: {
  id: string;
  title: string;
  url: string;
  active: boolean;
  onActiveChange: (id: string | null) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const activateButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const focusAfterStop = useRef(false);
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const [revision, setRevision] = useState(0);
  const [loadedKey, setLoadedKey] = useState("");
  const frameKey = `${active ? "interactive" : "preview"}-${revision}`;
  const loaded = loadedKey === frameKey;
  const mounted = visible || active;
  const domain = new URL(url).hostname;

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const resize = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );
    resize.observe(element);
    return () => resize.disconnect();
  }, []);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (!entry.isIntersecting) setLoadedKey("");
        if (!entry.isIntersecting && active) onActiveChange(null);
      },
      { rootMargin: "160px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [active, onActiveChange]);

  useEffect(() => {
    if (!active) {
      if (focusAfterStop.current)
        activateButton.current?.focus({ preventScroll: true });
      focusAfterStop.current = false;
      return;
    }
    closeButton.current?.focus({ preventScroll: true });
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      focusAfterStop.current = true;
      onActiveChange(null);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [active, onActiveChange]);

  return (
    <div
      ref={container}
      className="project-browser"
      data-active={active}
      style={{ "--preview-scale": width / 1440 } as CSSProperties}
    >
      <div className="browser-toolbar">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <a
          className="browser-address"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          dir="ltr"
          aria-label={`فتح ${title} في تبويب جديد`}
        >
          <Globe size={13} aria-hidden="true" />
          <span>{domain}</span>
          <ArrowUpLeft size={13} aria-hidden="true" />
        </a>
        <div className="browser-tools">
          {active && (
            <>
              <button
                className="icon-button"
                onClick={() => setRevision((value) => value + 1)}
                aria-label={`إعادة تحميل ${title}`}
              >
                <RotateCw size={16} />
              </button>
              <button
                ref={closeButton}
                className="icon-button"
                onClick={() => {
                  focusAfterStop.current = true;
                  onActiveChange(null);
                }}
                aria-label={`إيقاف تصفح ${title}`}
              >
                <X size={18} />
              </button>
            </>
          )}
          {!active && (
            <span className="browser-preview-label">معاينة الموقع</span>
          )}
        </div>
      </div>
      <div className="browser-stage" id={`${id}-browser`}>
        {mounted && !loaded && (
          <div className="browser-loading" role="status">
            <Globe size={25} aria-hidden="true" />
            <span>جاري فتح {title}…</span>
          </div>
        )}
        {mounted && (
          <iframe
            key={frameKey}
            className="browser-frame"
            src={url}
            title={`موقع ${title} — ${active ? "تصفح تفاعلي" : "معاينة صفحة الهبوط"}`}
            tabIndex={active ? 0 : -1}
            aria-hidden={!active}
            onLoad={() => setLoadedKey(frameKey)}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            allow="fullscreen"
            allowFullScreen
          />
        )}
        {!active && (
          <button
            ref={activateButton}
            className="browser-activate"
            aria-label={`تصفح مشروع ${title} داخل الكارد`}
            aria-controls={`${id}-browser`}
            onClick={() => onActiveChange(id)}
          >
            <span className="browser-activate-caption">
              <MousePointer2 size={17} aria-hidden="true" />
              تصفح المشروع
              <ArrowUpLeft size={16} aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      {active && (
        <div className="browser-session-bar">
          <span>
            <span className="browser-live-dot" />
            أنت تتصفح {title}
          </span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            فتح الموقع كاملًا
            <ArrowUpLeft size={15} aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}
