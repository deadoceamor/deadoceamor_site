"use client";

import { useState } from "react";
import {
  IconCalendar,
  IconSparkles,
  IconScooter,
  IconPartyCake,
  IconUsers,
  IconWhatsApp
} from "./Icons";
import { LINKS, waLink } from "../data";

export default function PartySpotlight() {
  const [guests, setGuests] = useState<number>(20);

  // Approximate cake weight calculation (approx 110g per guest)
  const calcWeight = (guests * 0.11).toFixed(1);

  return (
    <section className="party-spotlight-section" id="festas">
      <div className="container">
        <div className="party-spotlight-card">
          <div className="party-grid">
            <div>

              <h2 className="section-title" style={{ textAlign: "left" }}>
                Bolos para Festas e Aniversários Inesquecíveis
              </h2>

              <p className="hero-desc" style={{ marginBottom: "20px" }}>
                Nossos bolos de festa combinam recheio farto e consistente com uma apresentação elegante e acabamento fino. Garanta a data com antecedência para produção exclusiva.
              </p>

              <div className="steps-list">
                <div className="step-item">
                  <div className="step-number">
                    <IconCalendar size={16} color="var(--brand-red)" />
                  </div>
                  <div className="step-text">
                    <h4>Defina a Data e Quantidade de Convidados</h4>
                    <p>Atendemos desde celebrações intimistas (10 pessoas) até grandes festas familiares.</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">
                    <IconSparkles size={16} color="var(--brand-red)" />
                  </div>
                  <div className="step-text">
                    <h4>Escolha Massa, Recheio e Decoração</h4>
                    <p>Brigadeiro gourmet, Ninho com morangos frescos, chocolate belga ou doce de leite artesanal.</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">
                    <IconScooter size={16} color="var(--brand-red)" />
                  </div>
                  <div className="step-text">
                    <h4>Retirada na Vila Carmosina ou Entrega Pontual</h4>
                    <p>Retire com facilidade em Itaquera ou agende entrega protegida para Itaquera e região.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
