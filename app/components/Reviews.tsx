import { IconStar, IconHeart } from "./Icons";
import { REVIEWS } from "../data";

export default function Reviews() {
  return (
    <section className="reviews-section" id="avaliacoes">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Avaliações dos nossos clientes</h2>
          <p className="section-subtitle">
            Depoimentos reais deixados nos aplicativos de delivery e nas mensagens de WhatsApp.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars-wrap">
                {[...Array(r.stars)].map((_, idx) => (
                  <IconStar key={idx} size={15} />
                ))}
              </div>
              <p className="review-text">“{r.text}”</p>
              <div className="review-badge" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <IconHeart size={12} color="var(--brand-red)" />
                <span>{r.author} • {r.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
