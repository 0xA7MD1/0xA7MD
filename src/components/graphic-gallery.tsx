"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GraphicWork = {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  description?: string;
  images: string[];
};

const ALL = "الكل";

function WorkCard({
  work,
  large,
  onOpen,
}: {
  work: GraphicWork;
  large?: boolean;
  onOpen: () => void;
}) {
  return (
    <article className="graphic-card" data-large={large || undefined}>
      <button
        type="button"
        className="graphic-frame"
        onClick={onOpen}
        aria-label={`عرض ${work.title}`}
      >
        <Image
          src={work.images[0]}
          alt={work.title}
          fill
          sizes={
            large
              ? "(max-width: 760px) 100vw, 560px"
              : "(max-width: 760px) 50vw, (max-width: 1000px) 33vw, 280px"
          }
        />
        {work.images.length > 1 && (
          <span className="graphic-count">
            <bdi>{work.images.length}</bdi> تصاميم
          </span>
        )}
      </button>
      <div className="graphic-caption">
        <h3 dir="auto">{work.title}</h3>
        <span>{work.category}</span>
      </div>
      {large && work.description && <p>{work.description}</p>}
    </article>
  );
}

export function GraphicGallery({ works }: { works: GraphicWork[] }) {
  const featured = works.filter((work) => work.featured);
  const categories = [ALL, ...new Set(works.map((work) => work.category))];
  const [filter, setFilter] = useState(ALL);
  const [open, setOpen] = useState<{ work: GraphicWork; index: number }>();
  const dialog = useRef<HTMLDialogElement>(null);
  const shown =
    filter === ALL ? works : works.filter((work) => work.category === filter);

  useEffect(() => {
    if (open && !dialog.current?.open) dialog.current?.showModal();
  }, [open]);

  function step(delta: number) {
    if (!open) return;
    const count = open.work.images.length;
    setOpen({ ...open, index: (open.index + delta + count) % count });
  }

  return (
    <>
      <section
        id="featured"
        className="section content-width"
        aria-labelledby="featured-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span dir="ltr">01</span>
              <span className="eyebrow-line" />
              المختارة
            </p>
            <h2 id="featured-title" className="gradient-heading">
              أفضل أعمالي.
            </h2>
          </div>
        </div>
        <div className="graphic-featured">
          {featured.map((work) => (
            <WorkCard
              key={work.slug}
              work={work}
              large
              onOpen={() => setOpen({ work, index: 0 })}
            />
          ))}
        </div>
      </section>

      <section
        id="all-works"
        className="section content-width"
        aria-labelledby="all-works-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span dir="ltr">02</span>
              <span className="eyebrow-line" />
              الأعمال
            </p>
            <h2 id="all-works-title" className="gradient-heading">
              كل أعمالي.
            </h2>
          </div>
        </div>
        <div className="graphic-filters" role="group" aria-label="تصنيف الأعمال">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="graphic-grid">
          {shown.map((work) => (
            <WorkCard
              key={work.slug}
              work={work}
              onOpen={() => setOpen({ work, index: 0 })}
            />
          ))}
        </div>
      </section>

      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label={open?.work.title}
        onClose={() => setOpen(undefined)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          // RTL: the left arrow moves forward.
          if (event.key === "ArrowLeft") step(1);
          if (event.key === "ArrowRight") step(-1);
        }}
      >
        {open && (
          <>
            <div className="dialog-toolbar">
              <h3 dir="auto">{open.work.title}</h3>
              <div>
                {open.work.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="icon-button"
                      aria-label="التصميم السابق"
                      onClick={() => step(-1)}
                    >
                      <ChevronRight size={18} aria-hidden="true" />
                    </button>
                    <span className="graphic-dialog-index" dir="ltr">
                      {open.index + 1} / {open.work.images.length}
                    </span>
                    <button
                      type="button"
                      className="icon-button"
                      aria-label="التصميم التالي"
                      onClick={() => step(1)}
                    >
                      <ChevronLeft size={18} aria-hidden="true" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  className="icon-button"
                  aria-label="إغلاق"
                  onClick={() => dialog.current?.close()}
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="graphic-dialog-stage">
              <Image
                key={open.work.images[open.index]}
                src={open.work.images[open.index]}
                alt={`${open.work.title} — ${open.index + 1}`}
                fill
                sizes="(max-width: 1500px) 100vw, 1500px"
                quality={90}
                loading="eager"
              />
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
