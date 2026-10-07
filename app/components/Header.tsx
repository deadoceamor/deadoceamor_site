"use client";

import { useState } from "react";
import {
  IconMenu,
  IconClose,
  IconBuilding,
  IconCloche,
  IconPartyCake,
  IconUsers,
  IconHeart,
  IconStar,
  IconNotice,
  IconPin,
  IconWhatsApp,
  IconInstagram
} from "./Icons";
import { LINKS } from "../data";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      {/* Main Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="brand-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logomarca.webp"
              alt="Doce Amor"
              className="brand-logo-img"
            />
            <span className="brand-name">Doce Amor</span>
          </a>

          <nav className="nav-desktop">
            <a href="#corporativo" style={{ fontWeight: 700, color: "var(--brand-red)" }}>Corporativo B2B</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#festas">Bolos de Festa</a>
            <a href="#calculadora">Calculadora</a>
            <a href="#historia">Quem Somos</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#faq">Dúvidas</a>
            <a href="#onde">Onde Estamos</a>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Abrir menu de navegação"
          >
            <IconMenu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`drawer-backdrop ${isDrawerOpen ? "open" : ""}`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden={!isDrawerOpen}
      />
      <aside
        className={`drawer-panel ${isDrawerOpen ? "open" : ""}`}
        aria-label="Menu de navegação mobile"
      >
        <div className="drawer-header">
          <div className="drawer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logomarca.webp" alt="Doce Amor" style={{ height: "40px", width: "auto" }} />
            <span className="brand-name" style={{ fontSize: "24px", top: "4px" }}>Doce Amor</span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Fechar menu"
          >
            <IconClose size={20} />
          </button>
        </div>

        <nav className="drawer-nav">
          <a
            href="#corporativo"
            className="drawer-link highlight"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconBuilding size={18} />
            <span>Corporativo B2B</span>
          </a>
          <a
            href="#cardapio"
            className="drawer-link"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconCloche size={18} />
            <span>Cardápio da Semana</span>
          </a>
          <a
            href="#festas"
            className="drawer-link"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconPartyCake size={18} />
            <span>Bolos de Festa</span>
          </a>
          <a
            href="#calculadora"
            className="drawer-link"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconUsers size={18} />
            <span>Calculadora de Festa</span>
          </a>
          <a
            href="#historia"
            className="drawer-link"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconHeart size={18} />
            <span>Quem Somos</span>
          </a>
          <a
            href="#avaliacoes"
            className="drawer-link"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconStar size={18} />
            <span>Avaliações</span>
          </a>
          <a
            href="#faq"
            className="drawer-link"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconNotice size={18} />
            <span>Dúvidas Frequentes</span>
          </a>
          <a
            href="#onde"
            className="drawer-link"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconPin size={18} />
            <span>Onde Estamos</span>
          </a>
        </nav>

        <div className="drawer-footer">
          <a
            href={LINKS.whatsappGeral}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp btn-md"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconWhatsApp size={18} />
            <span>Pedir no WhatsApp</span>
          </a>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setIsDrawerOpen(false)}
          >
            <IconInstagram size={16} color="#E1306C" />
            <span>Instagram: @deadoceamor</span>
          </a>
        </div>
      </aside>
    </>
  );
}
