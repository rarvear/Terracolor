"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/Carousel.module.css";

const slides = [
  { src: "/images/cancha.jpg", alt: "Pintura para césped deportivo — cancha pintada", label: "Césped" },
  { src: "/images/Exteriores.jpg", alt: "Pintura para exteriores — fachada pintada", label: "Exteriores" },
  { src: "/images/Interiores.jpg", alt: "Pintura para interiores — habitación decorada", label: "Interiores" },
  { src: "/images/texturas.jpg", alt: "Texturas decorativas — pared con acabado texturado", label: "Texturas" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prev = useCallback(() => goTo(current === 0 ? slides.length - 1 : current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current === slides.length - 1 ? 0 : current + 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className={styles.carousel} role="region" aria-label="Galería de imágenes" aria-roledescription="carrusel">
      <div className={styles.viewport}>
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className={`${styles.slide} ${i === current ? styles.slideActive : ""}`}
            priority={i === 0}
          />
        ))}
        <div className={styles.slideOverlay} />
        <div className={styles.slideLabel}>{slides[current].label}</div>
      </div>

      <button className={`${styles.btn} ${styles.btnPrev}`} onClick={prev} aria-label="Imagen anterior">
        <ChevronLeft size={24} />
      </button>
      <button className={`${styles.btn} ${styles.btnNext}`} onClick={next} aria-label="Imagen siguiente">
        <ChevronRight size={24} />
      </button>

      <div className={styles.dots} role="tablist" aria-label="Seleccionar imagen">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}