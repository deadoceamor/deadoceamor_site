"use client";

import { useState } from "react";
import {
  IconScooter,
  IconChevronDown,
  IconIfood,
  Icon99Food,
  IconKeeta
} from "./Icons";
import { PRODUCTS, LINKS } from "../data";
import { prefixPath } from "../utils";

interface CatalogProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Catalog({}: CatalogProps) {
  const [expandedDeliveryId, setExpandedDeliveryId] = useState<string | null>(null);

  const toggleDeliveryOptions = (id: string) => {
    setExpandedDeliveryId((prev) => (prev === id ? null : id));
  };

  const deliveryProducts = PRODUCTS.filter((p) => p.category === "delivery");

  return (
    <section className="catalog-section" id="cardapio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nossos Doces</h2>
          <p className="section-subtitle">
            Ingredientes selecionados e preparo artesanal para pronta-entrega e delivery.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {deliveryProducts.map((p) => {
            const isExpanded = expandedDeliveryId === p.id;

            return (
              <div className="product-card" key={p.id}>
                <div className="product-image-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={prefixPath(p.image)} alt={p.title} loading="lazy" />
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
                  </div>

                  {/* Drawer expansível com as 3 opções de delivery direto */}
                  {isExpanded && (
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
