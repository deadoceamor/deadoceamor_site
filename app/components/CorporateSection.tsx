import {
  IconBuilding,
  IconSparkles,
  IconScale,
  IconChefHat
} from "./Icons";
import { LINKS } from "../data";

export default function CorporateSection() {
  return (
    <section className="corporate-section" id="corporativo">
      <div className="container">
        <div className="corporate-card">
        <div>
          <h2 style={{ fontFamily: "var(--font-playfair-display)", fontSize: "32px", fontWeight: 800, letterSpacing: "-0.015em", marginBottom: "14px", lineHeight: "1.25" }}>
            Atendemos eventos corporativos
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6", marginBottom: "18px" }}>
            Eleve o padrão das suas reuniões, coffee breaks, comemorações de metas e datas festivas. Fornecemos porções padronizadas e fatias individuais personalizadas com a marca da sua empresa.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "26px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text-main)" }}>
              <IconSparkles size={16} color="var(--brand-red)" />
              <span><strong>Aprovado por grandes marcas:</strong> Produções executadas com rigor para <strong>IZZO</strong> e <strong>DIMEN Medicina Nuclear</strong> entre outras.</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text-main)" }}>
              <IconScale size={16} color="var(--brand-red)" />
              <span><strong>Identidade corporativa:</strong> Rótulos e tags personalizadas com as cores e marca da sua ação.</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text-main)" }}>
              <IconChefHat size={16} color="var(--brand-red)" />
              <span><strong>Zero louça e cortes:</strong> Abra a caixa e sirva imediatamente na sala de reunião.</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          </div>
        </div>

        {/* Corporate Real Proof Gallery */}
        <div className="corporate-gallery-grid">
          <div className="corporate-photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/corporativo/diego-andressa-izzo-mesa.webp"
              alt="Diego e Andressa com produção de encomendas corporativas para a IZZO"
              className="corporate-photo-img"
            />
            <div className="corporate-photo-label">
              Entrega de 160 fatias • IZZO
            </div>
          </div>

          <div className="corporate-photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/corporativo/fatias-abertas-recheio.webp"
              alt="Fatias abertas mostrando as camadas generosas de massa molhadinha e recheio"
              className="corporate-photo-img"
            />
            <div className="corporate-photo-label">
              Massa Molhadinha e Recheio Farto
            </div>
          </div>

          <div className="corporate-photo-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/corporativo/dimen-bolo-e-paes-de-mel.webp"
              alt="Bolo e pães de mel personalizados para evento Dimen Medicina Nuclear"
              className="corporate-photo-img"
            />
            <div className="corporate-photo-label">
              Bolo Comemorativo e Pães de Mel • DIMEN
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
