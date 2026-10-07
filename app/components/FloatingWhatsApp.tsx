"use client";

import { useEffect, useState } from "react";
import { IconWhatsApp } from "./Icons";
import { LINKS } from "../data";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Esconder na primeira seção (Hero) onde já há botões principais em destaque
      const heroSection = document.querySelector(".hero-section");
      const heroHeight = heroSection ? (heroSection as HTMLElement).offsetHeight : 550;
      const isPastHero = scrollY > heroHeight - 120;

      // 2. Esconder na última seção (#onde / localização) e no rodapé (footer) onde há botões de contato
      const locationSection = document.querySelector("#onde");
      const footer = document.querySelector("footer");
      const triggerElement = locationSection || footer;

      let isNearBottom = false;
      if (triggerElement) {
        const rect = triggerElement.getBoundingClientRect();
        // Esconde quando a seção de contato/localização entra na tela (evita sobreposição)
        if (rect.top <= window.innerHeight - 100) {
          isNearBottom = true;
        }
      }

      setIsVisible(isPastHero && !isNearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={LINKS.whatsappGeral}
      target="_blank"
      rel="noreferrer"
      className={`float-wa-btn ${isVisible ? "visible" : "hidden"}`}
      aria-label="Fazer pedido no WhatsApp"
    >
      <IconWhatsApp size={20} color="#063c1e" />
      <span>Pedir no WhatsApp</span>
    </a>
  );
}
