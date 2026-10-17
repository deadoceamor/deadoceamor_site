"use client";

import { useState } from "react";
import {
  IconCalendar,
  IconSparkles,
  IconScooter,
  IconPartyCake
} from "./Icons";
import { LINKS } from "../data";

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

// Conjunto duplicado para preenchimento amplo antes do looping contínuo
const MARQUEE_SET = [...PARTY_PHOTOS, ...PARTY_PHOTOS];

export default function PartySpotlight() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="party-spotlight-section" id="festas">
      <div className="container">
        <div className="party-spotlight-card">
          <div className="party-grid">
            <div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Bolos para Festas e Aniversários Inesquecíveis
              </h2>

              <p className="hero-desc" style={{ marginBottom: "20px" }}>
                Nossos bolos de festa combinam recheio farto e consistente com uma apresentação elegante e acabamento fino. Garanta a data com antecedência para produção exclusiva.
              </p>

              <div className="steps-list">
                <div className="step-item">
                  <div className="step-number">
                    <IconCalendar size={16} color="var(--brand-red)" />
                  </div>
                  <div className="step-text">
                    <h4>Defina a Data e Quantidade de Convidados</h4>
                    <p>Atendemos desde celebrações intimistas (10 pessoas) até grandes festas familiares.</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">
                    <IconSparkles size={16} color="var(--brand-red)" />
                  </div>
                  <div className="step-text">
                    <h4>Escolha Massa, Recheio e Decoração</h4>
                    <p>Brigadeiro feito com 50% cacau, brigadeiro de Ninho cremoso, recheio de beijinho e frutas frescas como morangos ou uvas verdes.</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">
                    <IconScooter size={16} color="var(--brand-red)" />
                  </div>
                  <div className="step-text">
                    <h4>Retirada na Vila Carmosina ou Entrega Pontual</h4>
                    <p>Retire com facilidade em Itaquera ou agende entrega protegida para Itaquera e região.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "24px", marginBottom: "36px" }}>
                <a
                  href={LINKS.whatsappFesta}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-burgundy btn-lg"
                >
                  <IconPartyCake size={18} />
                  <span>Orçar Bolo de Festa no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Galeria Horizontal Infinita Ultrapassando os Limites do Card */}
          <div className="corporate-gallery-container" style={{ marginTop: "12px" }}>
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
                    <div className="corporate-photo-card-h" key={`party-t1-${index}`}>
                      <div className="corporate-photo-aspect">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="corporate-photo-img-h"
                          style={{ objectPosition: photo.position || "center" }}
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
                    <div className="corporate-photo-card-h" key={`party-t2-${index}`}>
                      <div className="corporate-photo-aspect">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="corporate-photo-img-h"
                          style={{ objectPosition: photo.position || "center" }}
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
