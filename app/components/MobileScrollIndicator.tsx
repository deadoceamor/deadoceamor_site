"use client";

import { useEffect, useState, useCallback } from "react";
import { IconChevronDown } from "./Icons";

export default function MobileScrollIndicator() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      // Esconder quando se aproxima do rodapé (footer ou seção #onde)
      const footer = document.querySelector("footer");
      const locationSection = document.querySelector("#onde");
      const triggerElement = locationSection || footer;

      let nearBottom = false;

      if (triggerElement) {
        const rect = triggerElement.getBoundingClientRect();
        // Quando a seção final / rodapé entra na tela
        if (rect.top <= window.innerHeight - 80) {
          nearBottom = true;
        }
      }

      // Verificação adicional de proximidade do fim total do scroll da página
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 140) {
        nearBottom = true;
      }

      setIsVisible(!nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rolagem suave e orgânica garantida via requestAnimationFrame
  const smoothScrollTo = useCallback((targetY: number, duration = 520) => {
    const startY = window.pageYOffset || document.documentElement.scrollTop;
    const diff = targetY - startY;
    if (Math.abs(diff) < 2) return;

    const startTime = performance.now();

    // Easing cúbico (suave no início e no final)
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + diff * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;

    // Encontra as seções da página para rolar de forma inteligente
    const sections = Array.from(document.querySelectorAll("main > section, footer"));
    const headerOffset = 64; // Compensação da barra fixa superior

    const nextSection = sections.find((sec) => {
      const rect = sec.getBoundingClientRect();
      return rect.top > 80;
    });

    let targetY: number;

    if (nextSection) {
      const rect = nextSection.getBoundingClientRect();
      const sectionTop = currentScroll + rect.top - headerOffset;

      // Se a próxima seção estiver muito longe (ex: catálogo extenso), desce 75% da tela
      if (rect.top > viewportHeight * 1.1) {
        targetY = currentScroll + viewportHeight * 0.75;
      } else {
        targetY = Math.max(0, sectionTop);
      }
    } else {
      // Fallback padrão: desce 75% da altura da tela
      targetY = currentScroll + viewportHeight * 0.75;
    }

    const maxScroll = document.documentElement.scrollHeight - viewportHeight;
    targetY = Math.min(targetY, maxScroll);

    smoothScrollTo(targetY, 520);
  };

  return (
    <button
      type="button"
      onClick={handleScrollDown}
      className={`mobile-scroll-indicator ${isVisible ? "visible" : "hidden"}`}
      aria-label="Ver mais - Rolar para baixo"
      title="Ver mais"
    >
      <span className="mobile-scroll-text">Ver mais</span>
      <IconChevronDown size={15} color="currentColor" />
    </button>
  );
}
