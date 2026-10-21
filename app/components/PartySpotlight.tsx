"use client";

import { useState } from "react";
import {
  IconCalendar,
  IconSparkles,
  IconScooter
} from "./Icons";
import { prefixPath } from "../utils";

interface PartyPhoto {
  src: string;
  alt: string;
  label: string;
  position?: string;
}

const PARTY_PHOTOS: PartyPhoto[] = [
  {
    src: "/encomendas/bolo-festa-morangos-e-ninho.webp",
    alt: "Naked cake artesanal com morangos frescos e brigadeiros de Ninho",
    label: "Naked Cake com Morangos & Ninho",
    position: "center 45%"
  },
  {
    src: "/encomendas/bolo-tematico-frozen-alice.webp",
    alt: "Bolo infantil temático Frozen com Elsa, Anna e Olaf",
    label: "Bolo Infantil Frozen • Elsa & Anna",
    position: "center 40%"
  },
  {
    src: "/encomendas/bolo-tematico-historia-professor.webp",
    alt: "Bolo temático História e Professor com livros e lousa",
    label: "Bolo Temático História & Professor",
    position: "center 45%"
  },
  {
    src: "/encomendas/bolo-tematico-homem-aranha.webp",
    alt: "Bolo temático infantil Homem-Aranha",
    label: "Bolo Temático Homem-Aranha",
    position: "center 45%"
  },
  {
    src: "/encomendas/bolo-tematico-superman-parabens.webp",
    alt: "Bolo temático Superman com degradê preto e branco",
    label: "Bolo Especial Superman",
    position: "center 45%"
  }
];

// Conjunto duplicado para preenchimento de telas amplas antes do looping contínuo
const MARQUEE_SET = [...PARTY_PHOTOS, ...PARTY_PHOTOS];

export default function PartySpotlight() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="corporate-section" id="festas">
      <div className="container">
        <div className="corporate-card">
          {/* Header Superior: Título, Tag e Descrição Centralizados */}
          <div className="corporate-header">
            <div className="corporate-header-text">
              <span className="corporate-tag">Bolos por Encomenda & Festas</span>
              <h2 className="corporate-title">
                Bolos para celebrações inesquecíveis
              </h2>
              <p className="corporate-subtitle">
                Nossos bolos de festa combinam recheio farto e consistente com uma apresentação elegante e acabamento fino. Produções exclusivas feitas sob medida para tornar o seu momento marcante.
              </p>
            </div>
          </div>

          {/* 3 Diferenciais em Destaque no mesmo estilo de CorporateSection */}
          <div className="corporate-features-row">
            <div className="corporate-feature-item">
              <div className="corporate-feature-icon">
                <IconCalendar size={18} color="var(--brand-red)" />
              </div>
              <div>
                <strong>Defina data e convidados</strong>
                <p>Atendemos desde celebrações intimistas (10 pessoas) até grandes festas familiares.</p>
              </div>
            </div>

            <div className="corporate-feature-item">
              <div className="corporate-feature-icon">
                <IconSparkles size={18} color="var(--brand-red)" />
              </div>
              <div>
                <strong>Massa, recheio e decoração</strong>
                <p>Brigadeiro 50% cacau, Ninho cremoso, beijinho e frutas frescas como morangos ou uvas.</p>
              </div>
            </div>

            <div className="corporate-feature-item">
              <div className="corporate-feature-icon">
                <IconScooter size={18} color="var(--brand-red)" />
              </div>
              <div>
                <strong>Retirada ou entrega pontual</strong>
                <p>Retire com facilidade na Vila Carmosina ou agende entrega protegida na região.</p>
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
              onTouchCancel={() => setIsPaused(false)}
            >
              <div className="corporate-marquee-wrapper">
                {/* Faixa 1 */}
                <div className="corporate-marquee-track">
                  {MARQUEE_SET.map((photo, index) => (
                    <div className="corporate-photo-card-h" key={`party-t1-${index}`}>
                      <div className="corporate-photo-aspect">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={prefixPath(photo.src)}
                          alt={photo.alt}
                          className="corporate-photo-img-h"
                          style={{ objectPosition: photo.position || "center" }}
                          loading="eager"
                          decoding="async"
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
                    <div className="corporate-photo-card-h" key={`party-t2-${index}`}>
                      <div className="corporate-photo-aspect">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={prefixPath(photo.src)}
                          alt={photo.alt}
                          className="corporate-photo-img-h"
                          style={{ objectPosition: photo.position || "center" }}
                          loading="eager"
                          decoding="async"
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
