"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  ArrowUpLeft,
  Check,
  Code2,
  Maximize2,
  Play,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const video = useRef<HTMLIFrameElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const [playing, setPlaying] = useState(false);
  function openImage() {
    setZoomed(false);
    dialog.current?.showModal();
  }
  function closeImage() {
    dialog.current?.close();
  }
  return (
    <article id={project.id} className="project-card">
      <div className="project-topline">
        <span className="project-index" dir="ltr">
          /{String(index).padStart(2, "0")}
        </span>
        <span>{project.category}</span>
        {project.year && (
          <span className="project-year" dir="ltr">
            {project.year}
          </span>
        )}
      </div>
      {project.image && (
        <>
          <button
            ref={opener}
            className="project-image-button"
            onClick={openImage}
            aria-label={`تكبير صورة مشروع ${project.title}`}
            aria-haspopup="dialog"
          >
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(100vw - 80px), 1152px"
              quality={90}
              loading={index === 1 ? "eager" : "lazy"}
              className="project-image"
            />
            <span className="image-expand-label">
              <Maximize2 size={15} aria-hidden="true" />
              تكبير الصورة
            </span>
          </button>
          <dialog
            ref={dialog}
            className="image-dialog"
            aria-labelledby={`${project.id}-image-title`}
            onClose={() => {
              setZoomed(false);
              opener.current?.focus();
            }}
            onClick={(event) => {
              if (event.target === event.currentTarget) closeImage();
            }}
          >
            <div className="dialog-toolbar">
              <h3 id={`${project.id}-image-title`}>
                {project.title} — عرض المشروع
              </h3>
              <div>
                <button
                  className="icon-button"
                  onClick={() => setZoomed(!zoomed)}
                  aria-label={
                    zoomed ? "ملاءمة الصورة للشاشة" : "تكبير تفاصيل الصورة"
                  }
                  aria-pressed={zoomed}
                >
                  {zoomed ? <ZoomOut size={19} /> : <ZoomIn size={19} />}
                </button>
                <a
                  href={project.image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dialog-original"
                >
                  فتح الأصل
                  <ArrowUpLeft size={15} aria-hidden="true" />
                </a>
                <button
                  className="icon-button"
                  autoFocus
                  onClick={closeImage}
                  aria-label="إغلاق الصورة"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="dialog-image-scroll" data-zoomed={zoomed}>
              {/* The viewer intentionally uses the full-resolution source. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                className="dialog-image"
                loading="lazy"
              />
            </div>
          </dialog>
        </>
      )}
      {project.videoId && (
        <div className="project-video">
          {playing ? (
            <iframe
              ref={video}
              onLoad={() => video.current?.focus()}
              src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0`}
              title={`عرض مشروع ${project.title}`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button
              className="video-poster"
              onClick={() => setPlaying(true)}
              aria-label={`تشغيل العرض المصوّر لمشروع ${project.title}`}
            >
              <span className="video-cover-label">{project.category}</span>
              <span className="video-cover-title" dir="ltr">
                {project.title}
              </span>
              <span className="video-play">
                <Play size={23} fill="currentColor" aria-hidden="true" />
              </span>
              <span className="video-caption">
                عرض المشروع<small>شاهد المشروع أثناء الاستخدام</small>
              </span>
            </button>
          )}
        </div>
      )}
      <div className="project-info">
        <div className="project-story">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-cta"
              >
                زيارة المشروع
                <span className="cta-icon">
                  <ArrowUpLeft size={17} aria-hidden="true" />
                </span>
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-glass"
              >
                <Code2 size={17} aria-hidden="true" />
                الكود المصدري
              </a>
            )}
            {project.videoUrl && (
              <a
                className="text-link"
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
                <ArrowUpLeft size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <div className="project-details">
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <Check size={15} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="tags" dir="ltr">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
