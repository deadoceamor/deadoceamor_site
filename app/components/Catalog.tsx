"use client";

import { useState } from "react";
import {
  IconCloche,
  IconPartyCake,
  IconBuilding,
  IconWhatsApp,
  IconScooter,
  IconChevronDown,
  IconIfood,
  Icon99Food,
  IconKeeta
} from "./Icons";
import { PRODUCTS, LINKS, waLink } from "../data";

interface CatalogProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Catalog({ activeTab: externalTab, onTabChange }: CatalogProps) {
  const [internalTab, setInternalTab] = useState<string>("todos");
  const [expandedDeliveryId, setExpandedDeliveryId] = useState<string | null>(null);

  const currentTab = externalTab !== undefined ? externalTab : internalTab;
  const setTab = onTabChange || setInternalTab;

  const filteredProducts =
    currentTab === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === currentTab);

  const toggleDeliveryOptions = (id: string) => {
    setExpandedDeliveryId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="catalog-section" id="cardapio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Escolha o seu doce favorito</h2>
          <p className="section-subtitle">
            Ingredientes selecionados e preparo artesanal.
          </p>
        </div>

        {/* Category Filter Tabs - 3 Focos (Delivery/Todos, Bolos de Festa, Corporativo) */}
        <div className="catalog-tabs">
          <button
            className={`catalog-tab ${currentTab === "todos" || currentTab === "delivery" ? "active" : ""}`}
            onClick={() => setTab("todos")}
          >
            <IconCloche size={14} />
            <span>Todos os Doces / Delivery</span>
          </button>
          <button
            className={`catalog-tab ${currentTab === "festas" ? "active" : ""}`}
            onClick={() => setTab("festas")}
          >
            <IconPartyCake size={14} />
            <span>Bolos de Festa</span>
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
          {filteredProducts.map((p) => {
            const isDelivery = p.category === "delivery";
            const isExpanded = isDelivery && expandedDeliveryId === p.id;

            return (
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
                      <span className="product-price-label">Valor</span>
                      <span className="product-price-val">{p.priceNote}</span>
                    </div>

                    {isDelivery ? (
                      <button
                        type="button"
                        onClick={() => toggleDeliveryOptions(p.id)}
                        className={`btn btn-delivery-toggle btn-sm ${isExpanded ? "active" : ""}`}
                        aria-expanded={isExpanded}
                        title="Ver opções de entrega nos aplicativos"
                      >
                        <IconScooter size={15} />
                        <span>Pedir no Delivery</span>
                        <IconChevronDown
                          size={13}
                          style={{
                            transition: "transform 0.25s ease",
                            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                            marginLeft: "2px"
                          }}
                        />
                      </button>
                    ) : p.category === "festas" ? (
                      <a
                        href={waLink(`Olá, Diego e Andressa! Quero encomendar o bolo de festa: *${p.title}* que vi no site 🎂`)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp btn-sm"
                        title="Fazer pedido pelo WhatsApp"
                      >
                        <IconWhatsApp size={14} />
                        <span>Pedir no Whats</span>
                      </a>
                    ) : (
                      <a
                        href={waLink(`Olá, Diego e Andressa! Gostaria de um orçamento corporativo para: *${p.title}* que vi no site ☕`)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp btn-sm"
                        title="Solicitar orçamento pelo WhatsApp"
                      >
                        <IconWhatsApp size={14} />
                        <span>Pedir no Whats</span>
                      </a>
                    )}
                  </div>

                  {/* Drawer expansível com as 3 opções de delivery direto */}
                  {isDelivery && isExpanded && (
                    <div className="delivery-expanded-drawer">
                      <span className="delivery-expanded-title">
                        Escolha seu app favorito:
                      </span>
                      <div className="delivery-expanded-buttons">
                        <a
                          href={LINKS.ifood}
                          target="_blank"
                          rel="noreferrer"
                          className="delivery-pill-app ifood-pill"
                        >
                          <IconIfood size={15} />
                          <span>iFood</span>
                        </a>
                        <a
                          href={LINKS.food99}
                          target="_blank"
                          rel="noreferrer"
                          className="delivery-pill-app food99-pill"
                        >
                          <Icon99Food size={15} />
                          <span>99Food</span>
                        </a>
                        <a
                          href={LINKS.keeta}
                          target="_blank"
                          rel="noreferrer"
                          className="delivery-pill-app keeta-pill"
                        >
                          <IconKeeta size={15} />
                          <span>Keeta</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
