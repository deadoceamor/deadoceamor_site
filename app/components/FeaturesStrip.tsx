import {
  IconWhisk,
  IconChocolate,
  IconScale,
  IconScooter
} from "./Icons";

export default function FeaturesStrip() {
  return (
    <section className="features-strip">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-box">
              <IconWhisk size={22} color="var(--brand-red)" />
            </div>
            <h3 className="feature-title">Massa Saborosa</h3>
            <p className="feature-desc">Massa estruturada, incrivelmente úmida e fofinha na medida ideal.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <IconChocolate size={22} color="var(--brand-red)" />
            </div>
            <h3 className="feature-title">Recheio Farto & Nobre</h3>
            <p className="feature-desc">Brigadeiro de chocolate nobre, leite Ninho genuíno e frutas frescas selecionadas.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <IconScale size={22} color="var(--brand-red)" />
            </div>
            <h3 className="feature-title">Equilíbrio & Zero Enjoativo</h3>
            <p className="feature-desc">Doçura balanceada para saborear a sobremesa inteira sem cansar o paladar.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <IconScooter size={22} color="var(--brand-red)" />
            </div>
            <h3 className="feature-title">Transporte Seguro</h3>
            <p className="feature-desc">Embalagens firmes e seladas para o seu bolo chegar impecável à sua mesa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
