import { IconHeart, IconWhatsApp } from "./Icons";
import { LINKS } from "../data";

export default function AboutSection() {
  return (
    <section className="story-section" id="historia">
      <div className="container story-grid">
        <div className="story-photo-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/casal.webp"
            alt="Diego e Andressa - Fundadores D&A Doce Amor"
          />
        </div>

        <div className="story-content">
          <h2>Feito com amor e carinho de família.</h2>
          <p>
            A D&A Doce Amor nasceu do carinho e da dedicação de Diego e Andressa em produzir bolos e sobremesas que transmitissem o mesmo sabor e aconchego das receitas feitas em casa.
          </p>
          <p>
            Começamos atendendo nossos vizinhos de condomínio na Vila Carmosina e, rapidamente, o boca a boca conquistou Itaquera e região. Nossa prioridade sempre foi a mesma: massa fofinha e bem molhadinha, recheios generosos e equilíbrio no açúcar para que você e sua família saboreiem com prazer do primeiro ao último pedaço.
          </p>
          <p>
            Cada bolo é preparado com ingredientes nobres e higiene rigorosa. Para nós, confeitaria não é apenas uma receita: é levar alegria para o seu café da tarde, momentos marcantes para celebrações em família e eventos corporativos memoráveis.
          </p>
        </div>
      </div>
    </section>
  );
}
