"use client";

import {
  IconWhatsApp,
  IconBuilding,
  IconPartyCake,
  IconIfood,
  Icon99Food,
  IconKeeta
} from "./Icons";
import { LINKS } from "../data";

interface HeroProps {
  onSelectCategory?: (category: string) => void;
}

export default function Hero({ onSelectCategory }: HeroProps) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid-2col">
          {/* Coluna Esquerda: Informações e Ações */}
          <div className="hero-col-text">

            <h1 className="hero-title">
              Bolos e doces <span className="highlight"> saborosos </span> e <span className="highlight"> personalizados </span> para tornar seu evento <span className="highlight"> inesquecível </span>.
            </h1>

            <p className="hero-desc">
              Deixe sua festa completa com bolos artesanais na medida certa e doces feitos sob encomenda com ingredientes nobres. Faça a sua encomenda pelo WhatsApp.
            </p>

            <div className="hero-cta-group">
              <a
                href={LINKS.whatsappGeral}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <IconWhatsApp size={18} />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
            </div>

            <div className="delivery-badge-bar">
              <span className="delivery-badge-label">Peça também no seu app favorito:</span>
              <div className="delivery-badge-pills">
                <a href={LINKS.ifood} target="_blank" rel="noreferrer" className="delivery-app-chip">
                  <IconIfood size={16} />
                  <span>iFood Delivery</span>
                </a>
                <a href={LINKS.food99} target="_blank" rel="noreferrer" className="delivery-app-chip">
                  <Icon99Food size={16} />
                  <span>99Food</span>
                </a>
                <a href={LINKS.keeta} target="_blank" rel="noreferrer" className="delivery-app-chip">
                  <IconKeeta size={16} />
                  <span>Keeta</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Card Visual com Destaque de Produtos & Selo Flutuante */}
          <div className="hero-col-visual">
            <div className="hero-showcase-claycard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/doces_sob_encomenda.webp"
                alt="D&A Doce Amor - Doces e bolos para festas"
                className="hero-showcase-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
