"use client";

import { useState } from "react";
import {
  IconSparkles,
  IconScale,
  IconChefHat
} from "./Icons";
import { prefixPath } from "../utils";

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

// Conjunto duplicado para preenchimento de telas amplas antes do looping contínuo
const MARQUEE_SET = [...CORPORATE_PHOTOS, ...CORPORATE_PHOTOS];

export default function CorporateSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="corporate-section" id="corporativo">
      <div className="container">
        <div className="corporate-card">
          {/* Header Superior: Título, Tag e Descrição Centralizados */}
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

          {/* Galeria Horizontal Infinita Ultrapassando os Limites do Card */}
          <div className="corporate-gallery-container">
            <div className="corporate-gallery-header">
              <span className="corporate-gallery-title">
                Produções reais
              </span>
            </div>

            <div
              className={`corporate-marquee-outer ${isPaused ? "is-paused" : ""}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <div className="corporate-marquee-wrapper">
                {/* Faixa 1 */}
                <div className="corporate-marquee-track">
                  {MARQUEE_SET.map((photo, index) => (
                    <div className="corporate-photo-card-h" key={`t1-${index}`}>
                      <div className="corporate-photo-aspect">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={prefixPath(photo.src)}
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

                {/* Faixa 2 (Clone contínuo para transição imperceptível em loop) */}
                <div className="corporate-marquee-track" aria-hidden="true">
                  {MARQUEE_SET.map((photo, index) => (
                    <div className="corporate-photo-card-h" key={`t2-${index}`}>
                      <div className="corporate-photo-aspect">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={prefixPath(photo.src)}
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
        </div>
      </div>
    </section>
  );
}
