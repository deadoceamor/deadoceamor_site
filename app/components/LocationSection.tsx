import {
  IconPin,
  IconScooter,
  IconClock,
  IconChefHat,
  IconWhatsApp,
  IconIfood,
  Icon99Food,
  IconKeeta
} from "./Icons";
import { LINKS } from "../data";

export default function LocationSection() {
  return (
    <section className="location-section" id="onde">
      <div className="container">
        <div className="location-card">
          <div className="location-info">            <h3>Vila Carmosina • Itaquera, São Paulo/SP</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "14.5px" }}>
              Produção artesanal com carinho e entrega rápida em toda a vizinhança.
            </p>

            <div className="location-details-list">
              <div className="location-detail-row">
                <span className="location-item-icon">
                  <IconPin size={16} />
                </span>
                <div>
                  <strong>Endereço de Retirada:</strong> Vila Carmosina – Itaquera, São Paulo / SP
                </div>
              </div>

              <div className="location-detail-row">
                <span className="location-item-icon">
                  <IconScooter size={16} />
                </span>
                <div>
                  <strong>Regiões de Entrega:</strong> Itaquera e região
                </div>
              </div>

              <div className="location-detail-row">
                <span className="location-item-icon">
                  <IconClock size={16} />
                </span>
                <div>
                  <strong>Dias e Horários:</strong> Domingo a Sexta-feira, das 12:30 às 20:30
                </div>
              </div>

              <div className="location-detail-row">
                <span className="location-item-icon">
                  <IconChefHat size={16} />
                </span>
                <div>
                  <strong>Atendimento Pessoal:</strong> Diego e Andressa
                </div>
              </div>
            </div>

            <div className="location-cta-group">
              <a
                href={LINKS.whatsappGeral}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <IconWhatsApp size={17} />
                <span>Chamar no WhatsApp</span>
              </a>
              <a
                href={LINKS.ifood}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <IconIfood size={16} />
                <span>Abrir no iFood</span>
              </a>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Mapa Interativo Google Maps */}
            <div
              style={{
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                border: "1px solid var(--border-light)",
                boxShadow: "0 8px 22px rgba(185, 160, 145, 0.16)",
                height: "240px",
                position: "relative",
                background: "#f0ece7"
              }}
            >
              <iframe
                title="Mapa Vila Carmosina - Itaquera"
                src="https://maps.google.com/maps?q=Vila%20Carmosina%2C%20Itaquera%2C%20S%C3%A3o%20Paulo%20-%20SP&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
