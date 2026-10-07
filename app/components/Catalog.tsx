"use client";

import { useState } from "react";
import {
  IconCloche,
  IconFlame,
  IconPartyCake,
  IconCoffee,
  IconBuilding,
  IconWhatsApp
} from "./Icons";
import { PRODUCTS, waLink } from "../data";

interface CatalogProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Catalog({ activeTab: externalTab, onTabChange }: CatalogProps) {
  const [internalTab, setInternalTab] = useState<string>("todos");

  const currentTab = externalTab !== undefined ? externalTab : internalTab;
  const setTab = onTabChange || setInternalTab;

  const filteredProducts =
    currentTab === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === currentTab);

  return (
    <section className="catalog-section" id="cardapio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Escolha o seu doce favorito</h2>
          <p className="section-subtitle">
            Ingredientes selecionados e preparo artesanal.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="catalog-tabs">
          <button
            className={`catalog-tab ${currentTab === "todos" ? "active" : ""}`}
            onClick={() => setTab("todos")}
          >
            <IconCloche size={14} />
            <span>Todos os Doces</span>
          </button>
          <button
            className={`catalog-tab ${currentTab === "festas" ? "active" : ""}`}
            onClick={() => setTab("festas")}
          >
            <IconPartyCake size={14} />
            <span>Bolos de Festa</span>
          </button>
          <button
            className={`catalog-tab ${currentTab === "vulcao" ? "active" : ""}`}
            onClick={() => setTab("vulcao")}
          >
            <IconFlame size={14} color={currentTab === "vulcao" ? "#ffffff" : "var(--brand-red)"} />
            <span>Bolo Vulcão</span>
          </button>
          <button
            className={`catalog-tab ${currentTab === "caseirinhos" ? "active" : ""}`}
            onClick={() => setTab("caseirinhos")}
          >
            <IconCoffee size={14} />
            <span>Caseirinhos</span>
          </button>
          <button
            className={`catalog-tab ${currentTab === "corporativo" ? "active" : ""}`}
            onClick={() => setTab("corporativo")}
          >
            <IconBuilding size={14} />
            <span>Corporativo</span>
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="product-image-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="product-card-badge">{p.badge}</span>
              </div>

              <div className="product-content">
                <h3 className="product-title">{p.title}</h3>
                <p className="product-desc">{p.desc}</p>

                <div className="product-footer">
                  <div className="product-price-info">
                    <span className="product-price-label">Disponibilidade</span>
                    <span className="product-price-val">{p.priceNote}</span>
                  </div>

                  <a
                    href={waLink(`Olá, Diego e Andressa! Quero pedir o *${p.title}* que vi no site 😋`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <IconWhatsApp size={14} />
                    <span>Pedir no Whats</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
