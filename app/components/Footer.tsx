import {
  IconWhatsApp,
  IconInstagram,
  IconIfood,
  Icon99Food,
  IconKeeta,
  IconClock
} from "./Icons";
import { LINKS } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logomarca.webp"
                alt="Doce Amor"
                className="footer-brand-logo"
                style={{ marginBottom: 0 }}
              />
              <span className="brand-name" style={{ color: "#ffffff", fontSize: "28px" }}>
                Doce Amor
              </span>
            </div>
            <p className="footer-text">
              Doce Amor — Bolos, Festas e Sobremesas Artesanais. Massa molhadinha, recheio farto e sabor inesquecível na Vila Carmosina, Itaquera – São Paulo/SP.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Navegação</div>
            <ul className="footer-links">
              <li><a href="#cardapio">Cardápio da Semana</a></li>
              <li><a href="#festas">Bolos de Festa & Aniversário</a></li>
              <li><a href="#calculadora">Calculadora de Convidados</a></li>
              <li><a href="#corporativo">Eventos Corporativos</a></li>
              <li><a href="#historia">Nossa História</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Faça seu Pedido</div>
            <ul className="footer-links">
              <li>
                <a href={LINKS.whatsappGeral} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <IconWhatsApp size={16} color="#25d366" />
                  <span>WhatsApp: (11) 99236-0531</span>
                </a>
              </li>
              <li>
                <a href={LINKS.instagram} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <IconInstagram size={16} color="#E1306C" />
                  <span>Instagram: @deadoceamor</span>
                </a>
              </li>
              <li>
                <a href={LINKS.ifood} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <IconIfood size={15} />
                  <span>iFood Delivery</span>
                </a>
              </li>
              <li>
                <a href={LINKS.food99} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <Icon99Food size={15} />
                  <span>99Food</span>
                </a>
              </li>
              <li>
                <a href={LINKS.keeta} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <IconKeeta size={15} />
                  <span>Keeta Delivery</span>
                </a>
              </li>
              <li style={{ marginTop: "8px", color: "#8a827b", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <IconClock size={15} color="#8a827b" />
                <span>Dom a Sex: 12:30 às 20:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} D&A Doce Amor. Todos os direitos reservados.</span>
          <span>Vila Carmosina • Itaquera – São Paulo/SP</span>
        </div>
      </div>
    </footer>
  );
}
