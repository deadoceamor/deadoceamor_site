"use client";

import { useRef } from "react";
import {
  IconSparkles,
  IconScale,
  IconChefHat,
  IconChevronLeft,
  IconChevronRight
} from "./Icons";
import { LINKS } from "../data";

interface CorporatePhoto {
  src: string;
  alt: string;
  label: string;
  position: string;
}

const CORPORATE_PHOTOS: CorporatePhoto[] = [
  {
    src: "/corporativo/diego-andressa-izzo-mesa.webp",
    alt: "Diego e Andressa com produção de encomendas corporativas para a IZZO",
    label: "Entrega de 160 fatias • IZZO",
    position: "center 30%"
  },
  {
    src: "/corporativo/160-sorrisos-entregues.webp",
    alt: "Diego e Andressa com 160 fatias preparadas: Sorrisos entregues com afeto",
    label: "160 Sorrisos com Afeto • D&A",
    position: "center 35%"
  },
  {
    src: "/corporativo/160-fatias-24h.webp",
    alt: "Produção de 160 fatias em 24h pela segunda vez em 15 dias",
    label: "160 Fatias em 24h • 2ª vez em 15 dias",
    position: "center 45%"
  },
  {
    src: "/corporativo/bolos-demanda-fatias.webp",
    alt: "Fatias individuais padronizadas em marmitinhas para eventos corporativos",
    label: "Fatias Padronizadas sob Demanda",
    position: "center 50%"
  },
  {
    src: "/corporativo/dimen-bolo-e-paes-de-mel.webp",
    alt: "Bolo e pães de mel personalizados para evento Dimen Medicina Nuclear",
    label: "Bolo Comemorativo e Pães de Mel • DIMEN",
    position: "center 50%"
  }
];

export default function CorporateSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 310;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="corporate-section" id="corporativo">
      <div className="container">
        <div className="corporate-card">
          {/* Header Superior: Título, Descrição e Botão de Ação */}
          <div className="corporate-header">
            <div className="corporate-header-text">
              <span className="corporate-tag">Corporativo & Eventos B2B</span>
              <h2 className="corporate-title">
                Atendemos eventos corporativos
              </h2>
              <p className="corporate-subtitle">
                Eleve o padrão das suas reuniões, coffee breaks, comemorações de metas e datas festivas. Fornecemos fatias individuais padronizadas com a marca da sua empresa, pontualidade e zero desperdício.
              </p>
            </div>
            <div className="corporate-header-cta">
              <a
                href={LINKS.whatsappEmpresa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Solicitar Orçamento Corporativo
              </a>
            </div>
          </div>

          {/* 3 Diferenciais Corporativos em Destaque */}
          <div className="corporate-features-row">
            <div className="corporate-feature-item">
              <div className="corporate-feature-icon">
                <IconSparkles size={18} color="var(--brand-red)" />
              </div>
              <div>
                <strong>Aprovado por grandes marcas</strong>
                <p>Produções executadas com rigor para IZZO, DIMEN Medicina Nuclear e empresas parceiras.</p>
              </div>
            </div>

            <div className="corporate-feature-item">
              <div className="corporate-feature-icon">
                <IconScale size={18} color="var(--brand-red)" />
              </div>
              <div>
                <strong>Identidade corporativa</strong>
                <p>Rótulos e tags personalizadas com as cores, logotipo e mensagem da sua campanha.</p>
              </div>
            </div>

            <div className="corporate-feature-item">
              <div className="corporate-feature-icon">
                <IconChefHat size={18} color="var(--brand-red)" />
              </div>
              <div>
                <strong>Zero louça e praticidade</strong>
                <p>Fatias individuais prontas na marmitinha: abra e sirva imediatamente sem necessidade de cortes.</p>
              </div>
            </div>
          </div>

          {/* Galeria Horizontal Lado a Lado: Imagens em Formato 4:3 */}
          <div className="corporate-gallery-container">
            <div className="corporate-gallery-header">
              <div className="corporate-gallery-title-wrap">
                <span className="corporate-gallery-title">
                  Galeria de Entregas & Produções Reais
                </span>
                <span className="corporate-gallery-count">
                  {CORPORATE_PHOTOS.length} fotos
                </span>
              </div>
              <div className="corporate-gallery-nav">
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  className="corporate-nav-btn"
                  aria-label="Foto anterior"
                  title="Ver fotos anteriores"
                >
                  <IconChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  className="corporate-nav-btn"
                  aria-label="Próxima foto"
                  title="Ver próximas fotos"
                >
                  <IconChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="corporate-horizontal-track" ref={scrollRef}>
              {CORPORATE_PHOTOS.map((photo, index) => (
                <div className="corporate-photo-card-h" key={index}>
                  <div className="corporate-photo-aspect">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="corporate-photo-img-h"
                      style={{ objectPosition: photo.position }}
                      loading="lazy"
                    />
                  </div>
                  <div className="corporate-photo-label-h">
                    {photo.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
