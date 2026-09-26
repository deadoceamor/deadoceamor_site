"use client";

import { useState } from "react";
import {
  IconChefHat,
  IconWhisk,
  IconHeart,
  IconCake,
  IconPartyCake,
  IconWhatsApp,
  IconChocolate,
  IconScale,
  IconScooter,
  IconCoffee,
  IconDessert,
  IconFlame,
  IconBuilding,
  IconStar,
  IconCalendar,
  IconPin,
  IconClock,
  IconSparkles,
  IconUsers,
  IconCloche,
  IconIfood,
  Icon99Food,
  IconKeeta
} from "./components/Icons";

const WHATS_NUMBER = "5511992360531";

const waLink = (msg: string) =>
  `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;

const LINKS = {
  whatsappGeral: waLink("Olá, Diego! Vim pelo site D&A Doce Amor e gostaria de fazer um pedido 🍰"),
  whatsappCardapio: waLink("Olá! Gostaria de ver as opções de bolos e doces disponíveis para hoje 😋"),
  whatsappFesta: waLink(
    "Olá, Diego! Quero encomendar um bolo de festa 🎂\n\n• Data da comemoração: \n• Quantidade de convidados: \n• Sabor preferido: \n• Retirada na Vila Carmosina ou Entrega: "
  ),
  whatsappEmpresa: waLink(
    "Olá, Diego! Gostaria de um orçamento de bolos e fatias para evento corporativo da minha empresa ☕"
  ),
  ifood: "https://www.ifood.com.br/delivery/sao-paulo-sp/da-doce-amor-bolos-festa-e-sobremesas-itaquera/ea364cc7-eee7-4c77-bcc3-dbbc60b9ba5d?UTM_Medium=share",
  keeta: "https://url-eu.mykeeta.com/XNTkur0z",
  food99: "https://oia.99app.com/dlp9/AeAiMv?area=BR"
};

interface Product {
  id: string;
  category: "mais-pedidos" | "festas" | "caseirinhos" | "geladas" | "corporativo";
  badge: string;
  title: string;
  desc: string;
  priceNote: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: "vulcao-ninho",
    category: "mais-pedidos",
    badge: "O Mais Pedido da Semana",
    title: "Mini Bolo Vulcão de Brigadeiro com Ninho",
    desc: "Massa molhadinha de cacau com uma verdadeira erupção cremosa de brigadeiro gourmet e Ninho aveludado.",
    priceNote: "A partir de R$ 15",
    image: "/products/prod-vulcao.jpg"
  },
  {
    id: "caseirinho-choc-ninho",
    category: "caseirinhos",
    badge: "Perfeito para o Café",
    title: "Bolo Caseirinho Chocolate + Ninho",
    desc: "Aquele bolo fofinho e aconchegante, com cobertura e recheio generosos. Feito para reunir quem você ama.",
    priceNote: "A partir de R$ 15",
    image: "/products/prod-caseirinho.jpg"
  },
  {
    id: "banoffee-pote",
    category: "geladas",
    badge: "Sobremesa Nobre",
    title: "Banoffee Artesanal",
    desc: "Base crocante especial, banana fresca selecionada, doce de leite suave e chantilly leve. Zero enjoativa.",
    priceNote: "Porção individual",
    image: "/products/prod-banoffee.jpg"
  },
  {
    id: "surpresa-uva",
    category: "geladas",
    badge: "Refrescante & Delicado",
    title: "Surpresa de Uva Verde",
    desc: "Brigadeiro branco aveludado com uvas verdes frescas, doces e crocantes. Uma explosão suave de sabor.",
    priceNote: "Porção individual",
    image: "/products/prod-uva.jpg"
  },
  {
    id: "bolo-festa-aniversario",
    category: "festas",
    badge: "Sob Encomenda (3 dias)",
    title: "Bolo Decorado para Festa e Aniversário",
    desc: "O ponto alto da sua celebração. Massa estruturada ultra molhadinha, recheio alto e acabamento impecável.",
    priceNote: "Orçamento sob medida",
    image: "/products/prod-festa-especial.jpg"
  },
  {
    id: "bolo-festa-tematico",
    category: "festas",
    badge: "Exclusivo & Personalizado",
    title: "Bolos para Celebrações Especiais",
    desc: "Decoração personalizada ao seu gosto. Combinações clássicas como brigadeiro artesanal com Ninho e frutas.",
    priceNote: "Orçamento sob medida",
    image: "/products/prod-festa-decorado.jpg"
  },
  {
    id: "caseiro-cenoura",
    category: "caseirinhos",
    badge: "Clássico Irresistível",
    title: "Caseirinho Especial com Brigadeiro",
    desc: "Massa leve, fresquinha e macia com calda generosa de chocolate ao leite artesanal derretendo por cima.",
    priceNote: "A partir de R$ 15",
    image: "/products/prod-caseiro-cafe.jpg"
  },
  {
    id: "corporativo-eventos",
    category: "corporativo",
    badge: "Atendimento B2B / CNPJ",
    title: "Kits e Fatias para Eventos Corporativos",
    desc: "Fatias padronizadas e embalagens individuais para reuniões, coffee breaks e datas comemorativas da sua empresa.",
    priceNote: "Condições especiais",
    image: "/products/prod-corporativo.jpg"
  }
];

const REVIEWS = [
  {
    stars: 5,
    text: "Muito gostoso e com bastante recheio, vou comprar sempre. Entrega super rápida!",
    author: "Cliente iFood",
    city: "Itaquera - SP"
  },
  {
    stars: 5,
    text: "Que bolo gostoso, veio super quentinho e eu amei o mimo de paçoca. Atendimento impecável!",
    author: "Cliente 99Food",
    city: "Vila Carmosina - SP"
  },
  {
    stars: 5,
    text: "Bolo simplesmente sensacional! Massa molhadinha de verdade, nada enjoativo. Vendedora extremamente atenciosa.",
    author: "Encomenda WhatsApp",
    city: "Guaianazes - SP"
  },
  {
    stars: 5,
    text: "Muito bom, fresquinho e bem embalado. Chegou intacto e exatamente como na foto, preço justo.",
    author: "Cliente Keeta",
    city: "Itaquera - SP"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("todos");
  const [guests, setGuests] = useState<number>(20);

  const filteredProducts =
    activeTab === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  // Approximate cake weight calculation (approx 110g per guest)
  const calcWeight = (guests * 0.11).toFixed(1);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-badge">
            <span className="topbar-dot"></span>
            <span>Atendimento aberto hoje • Vila Carmosina, Itaquera e Guaianazes</span>
          </div>
          <div className="topbar-links">
            <a href={LINKS.ifood} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <IconIfood size={14} /> iFood
            </a>
            <span>•</span>
            <a href={LINKS.food99} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <Icon99Food size={14} /> 99Food
            </a>
            <span>•</span>
            <a href={LINKS.keeta} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <IconKeeta size={14} /> Keeta
            </a>
            <span>•</span>
            <a href={LINKS.whatsappGeral} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <IconWhatsApp size={13} color="#25d366" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

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
            <a href="#cardapio">Cardápio</a>
            <a href="#festas">Bolos de Festa</a>
            <a href="#calculadora">Calculadora</a>
            <a href="#historia">Quem Somos</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#faq">Dúvidas</a>
            <a href="#onde">Onde Estamos</a>
          </nav>

          <div className="header-actions">
            <a
              href={LINKS.whatsappGeral}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <IconWhatsApp size={16} />
              <span>Pedir no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <div className="hero-pill">
                <IconCake size={16} color="var(--brand-red)" />
                <span>Vila Carmosina • Itaquera & Guaianazes • Dom a Sex 12:30–20:30</span>
              </div>

              <h1 className="hero-title">
                Bolos artesanais com <span className="highlight">massa molhadinha</span> e recheio de verdade.
              </h1>

              <p className="hero-desc">
                Mini bolos vulcão irresistíveis, caseirinhos para o café, sobremesas geladas e bolos decorados sob medida para sua festa. Feitos diariamente com carinho pelo Diego e família.
              </p>

              <div className="hero-cta-group">
                <a
                  href={LINKS.whatsappGeral}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <IconWhatsApp size={18} />
                  <span>Fazer Pedido no WhatsApp</span>
                </a>
                <a href="#festas" className="btn btn-primary btn-lg">
                  <IconPartyCake size={17} />
                  <span>Orçar Bolo de Festa</span>
                </a>
                <a href="#cardapio" className="btn btn-secondary btn-lg">
                  <IconCloche size={16} />
                  <span>Ver Cardápio</span>
                </a>
              </div>

              <div className="delivery-badge-bar">
                <span className="delivery-badge-label">Peça também no seu app favorito:</span>
                <div className="delivery-badge-pills">
                  <a href={LINKS.ifood} target="_blank" rel="noreferrer" className="delivery-app-chip">
                    <IconIfood size={16} />
                    <span>iFood Delivery</span>
                  </a>
                  <a href={LINKS.food99} target="_blank" rel="noreferrer" className="delivery-app-chip">
                    <Icon99Food size={16} />
                    <span>99Food</span>
                  </a>
                  <a href={LINKS.keeta} target="_blank" rel="noreferrer" className="delivery-app-chip">
                    <IconKeeta size={16} />
                    <span>Keeta</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Visual Card using casal.webp */}
            <div className="hero-visual-card">
              <div className="hero-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/casal.webp"
                  alt="Diego e família - Confeiteiros da D&A Doce Amor"
                />
              </div>
              <div className="hero-floating-badge">
                <div>
                  <div className="hero-floating-badge-title" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span>Feito com amor pelo Diego & Família</span>
                    <IconHeart size={14} color="var(--brand-red)" />
                  </div>
                  <div className="hero-floating-badge-sub">Produção diária artesanal • Pedidos sob encomenda</div>
                </div>
                <a
                  href={LINKS.whatsappGeral}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <IconWhatsApp size={14} />
                  <span>Conversar</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Bar with Custom SVG Icons */}
        <section className="features-strip">
          <div className="container">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-box">
                  <IconWhisk size={22} color="var(--brand-red)" />
                </div>
                <h3 className="feature-title">Massa Molhadinha</h3>
                <p className="feature-desc">Massa estruturada, incrivelmente úmida e fofinha na medida ideal.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-box">
                  <IconChocolate size={22} color="var(--brand-red)" />
                </div>
                <h3 className="feature-title">Recheio Farto & Nobre</h3>
                <p className="feature-desc">Brigadeiro aveludado, leite Ninho genuíno e frutas frescas sem miséria.</p>
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

        {/* Catalog Section with Tabs & Custom SVG Icons */}
        <section className="catalog-section" id="cardapio">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Cardápio da Semana</span>
              <h2 className="section-title">Escolha o seu doce favorito</h2>
              <p className="section-subtitle">
                Ingredientes selecionados e preparo artesanal. Peça pelo WhatsApp e confirme a disponibilidade imediata.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="catalog-tabs">
              <button
                className={`catalog-tab ${activeTab === "todos" ? "active" : ""}`}
                onClick={() => setActiveTab("todos")}
              >
                <IconCloche size={14} />
                <span>Todos os Doces</span>
              </button>
              <button
                className={`catalog-tab ${activeTab === "mais-pedidos" ? "active" : ""}`}
                onClick={() => setActiveTab("mais-pedidos")}
              >
                <IconFlame size={14} color={activeTab === "mais-pedidos" ? "#ffffff" : "var(--brand-red)"} />
                <span>Mais Pedidos</span>
              </button>
              <button
                className={`catalog-tab ${activeTab === "festas" ? "active" : ""}`}
                onClick={() => setActiveTab("festas")}
              >
                <IconPartyCake size={14} />
                <span>Bolos de Festa</span>
              </button>
              <button
                className={`catalog-tab ${activeTab === "caseirinhos" ? "active" : ""}`}
                onClick={() => setActiveTab("caseirinhos")}
              >
                <IconCoffee size={14} />
                <span>Caseirinhos & Vulcão</span>
              </button>
              <button
                className={`catalog-tab ${activeTab === "geladas" ? "active" : ""}`}
                onClick={() => setActiveTab("geladas")}
              >
                <IconDessert size={14} />
                <span>Sobremesas Geladas</span>
              </button>
              <button
                className={`catalog-tab ${activeTab === "corporativo" ? "active" : ""}`}
                onClick={() => setActiveTab("corporativo")}
              >
                <IconBuilding size={14} />
                <span>Corporativo</span>
              </button>
            </div>

            {/* Product Cards Grid */}
            <div className="products-grid">
              {filteredProducts.map((p) => (
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
                        <span className="product-price-label">Disponibilidade</span>
                        <span className="product-price-val">{p.priceNote}</span>
                      </div>

                      <a
                        href={waLink(`Olá, Diego! Quero pedir o *${p.title}* que vi no site 😋`)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp btn-sm"
                      >
                        <IconWhatsApp size={14} />
                        <span>Pedir no Whats</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Party Cakes Spotlight Section */}
        <section className="party-spotlight-section" id="festas">
          <div className="container">
            <div className="party-spotlight-card">
              <div className="party-grid">
                <div>
                  <div className="notice-pill">
                    <IconCalendar size={15} color="var(--brand-red)" />
                    <span>Agendamento com 3 dias de antecedência pelo WhatsApp</span>
                  </div>

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
                        <p>Retire com facilidade em Itaquera ou agende entrega protegida para Itaquera e Guaianazes.</p>
                      </div>
                    </div>
                  </div>

                  <div className="hero-cta-group">
                    <a
                      href={LINKS.whatsappFesta}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-burgundy btn-lg"
                    >
                      <IconPartyCake size={18} />
                      <span>Orçar Bolo de Festa com Diego</span>
                    </a>
                  </div>
                </div>

                {/* Party Cake Calculator */}
                <div className="calc-box" id="calculadora">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <IconPartyCake size={20} color="var(--brand-red)" />
                    <h3 className="calc-title">Calculadora Rápida para sua Festa</h3>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                    Descubra o tamanho aproximado do bolo ideal para os seus convidados:
                  </p>

                  <div>
                    <div className="calc-slider-label">
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                        <IconUsers size={15} />
                        Número de convidados:
                      </span>
                      <strong>{guests} pessoas</strong>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="60"
                      step="5"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="calc-slider"
                    />
                  </div>

                  <div className="calc-result">
                    <div>
                      <div className="calc-result-title">Tamanho Sugerido</div>
                      <div className="calc-result-val">~{calcWeight} kg</div>
                    </div>
                    <div>
                      <div className="calc-result-title">Prazo Mínimo</div>
                      <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-main)" }}>
                        3 dias de antecedência
                      </div>
                    </div>
                  </div>

                  <a
                    href={waLink(
                      `Olá, Diego! Quero orçar um bolo de festa para cerca de *${guests} convidados* (~${calcWeight} kg) que calculei no site 🎂`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp btn-md"
                    style={{ width: "100%" }}
                  >
                    <IconWhatsApp size={16} />
                    <span>Orçar para {guests} Convidados no Whats</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Section */}
        <section className="container" id="corporativo" style={{ padding: "32px 32px 72px" }}>
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-light)",
              borderRadius: "var(--radius-card)",
              padding: "44px 38px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "32px",
              boxShadow: "var(--shadow-card)"
            }}
          >
            <div style={{ maxWidth: "620px" }}>
              <span className="section-tag" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <IconBuilding size={14} color="var(--brand-red)" />
                Eventos & Parcerias B2B
              </span>
              <h3 style={{ fontFamily: "var(--font-primary)", fontSize: "32px", fontWeight: "normal", marginBottom: "12px" }}>
                Bolos e Kits Corporativos para sua Empresa
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6" }}>
                Já fornecemos fatias padronizadas e caixas individuais para reuniões, treinamentos e confraternizações em Itaquera e Guaianazes. Atendimento pontual com facilidade para empresas.
              </p>
            </div>
            <a
              href={LINKS.whatsappEmpresa}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-lg"
            >
              <IconBuilding size={17} />
              <span>Solicitar Orçamento CNPJ</span>
            </a>
          </div>
        </section>

        {/* Story / About Section using casal.webp & logo elements */}
        <section className="story-section" id="historia">
          <div className="container story-grid">
            <div className="story-photo-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/casal.webp"
                alt="Diego e Esposa - Fundadores D&A Doce Amor"
              />
            </div>

            <div className="story-content">
              <span className="section-tag" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <IconHeart size={14} color="var(--brand-red)" />
                Nossa Essência
              </span>
              <h2>Feito com amor e alma de família.</h2>
              <p>
                A D&A Doce Amor nasceu do carinho e da dedicação do Diego e sua esposa em produzir bolos e sobremesas que transmitissem o mesmo sabor e aconchego das receitas feitas em casa.
              </p>
              <p>
                Começamos atendendo nossos vizinhos de condomínio na Vila Carmosina e, rapidamente, o boca a boca conquistou Itaquera e Guaianazes. Nossa prioridade sempre foi a mesma: massa fofinha e bem molhadinha, recheios generosos e equilíbrio no açúcar para que você e sua família saboreiem com prazer do primeiro ao último pedaço.
              </p>
              <p>
                Cada bolo é preparado com ingredientes nobres e higiene rigorosa. Para nós, confeitaria não é apenas uma receita: é levar alegria para o seu café da tarde e momentos marcantes para a sua celebração.
              </p>

              <div style={{ marginTop: "24px" }}>
                <a
                  href={LINKS.whatsappGeral}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  <IconWhatsApp size={17} />
                  <span>Falar com o Diego no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section with Custom Star SVGs */}
        <section className="reviews-section" id="avaliacoes">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Opinião de Quem Provou</span>
              <h2 className="section-title">Avaliações 5 Estrelas dos Clientes</h2>
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

        {/* Interactive FAQ Section with Minimalist SVGs */}
        <section className="faq-section" id="faq">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Tire Suas Dúvidas</span>
              <h2 className="section-title">Perguntas Frequentes</h2>
              <p className="section-subtitle">
                Tudo o que você precisa saber sobre prazos, embalagens e entregas.
              </p>
            </div>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary className="faq-summary">
                  <span>O bolo corre risco de derreter ou quebrar no transporte?</span>
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-content">
                  Absolutamente não. Nossos doces e bolos são montados com estrutura firme e acondicionados em embalagens reforçadas e travadas. As entregas em Itaquera e Guaianazes são feitas com muito cuidado e rapidez para garantir que o produto chegue intacto e perfeito à sua mesa.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Os bolos e doces são muito doces ou enjoativos?</span>
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-content">
                  Não. Um dos elogios mais frequentes dos nossos clientes é justamente o equilíbrio do açúcar. Usamos bases de chocolate nobre, cacau e brigadeiro no ponto certo para que você possa comer à vontade sem pesar.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Qual o prazo para encomendar bolos de festa e aniversário?</span>
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-content">
                  Pedimos um prazo mínimo de 3 dias de antecedência para bolos decorados de festa. Esse tempo é indispensável para garantir a compra de ingredientes frescos, a estruturação perfeita do bolo e a personalização da sua decoração.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Vocês entregam em quais bairros de São Paulo?</span>
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-content">
                  Atendemos toda a região de Itaquera e Guaianazes, seja via delivery direto pelo WhatsApp ou pelos aplicativos parceiros (iFood, 99Food e Keeta).
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Posso retirar meu pedido pessoalmente?</span>
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-content">
                  Sim! Você pode retirar diretamente com o Diego no nosso endereço na Vila Carmosina (Itaquera - São Paulo/SP). Basta combinar o horário certinho pelo WhatsApp.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Existe valor mínimo para pedido?</span>
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-content">
                  Sim, nosso pedido mínimo para encomenda é de R$ 11. Temos opções de mini bolos e caseirinhos individuais a partir de R$ 15.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Location & Logistics Section with Custom SVGs */}
        <section className="location-section" id="onde">
          <div className="container">
            <div className="location-card">
              <div className="location-info">
                <span className="section-tag">Localização & Atendimento</span>
                <h3>Vila Carmosina • Itaquera, São Paulo/SP</h3>
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
                      <strong>Regiões de Entrega:</strong> Itaquera, Guaianazes e imediações
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
                      <strong>Atendimento Pessoal:</strong> Diego e esposa
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

              <div
                style={{
                  background: "var(--bg-surface-subtle)",
                  borderRadius: "var(--radius-card)",
                  padding: "var(--padding-card)",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px"
                }}
              >
                <div style={{ fontWeight: "700", fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconWhatsApp size={18} color="#25d366" />
                  <span>Atendimento Exclusivo no WhatsApp</span>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--text-muted)" }}>
                  Converse diretamente com os confeiteiros para tirar dúvidas de sabores, solicitar fotos do dia ou reservar bolos para o seu fim de semana.
                </p>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--text-main)" }}>
                  +55 (11) 99236-0531
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <a
                    href={LINKS.food99}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Icon99Food size={14} />
                    <span>99Food</span>
                  </a>
                  <a
                    href={LINKS.keeta}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <IconKeeta size={14} />
                    <span>Keeta</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Minimalist Custom Icons */}
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

      {/* Floating WhatsApp Action Button with Custom SVG */}
      <a
        href={LINKS.whatsappGeral}
        target="_blank"
        rel="noreferrer"
        className="float-wa-btn"
        aria-label="Fazer pedido no WhatsApp"
      >
        <IconWhatsApp size={20} color="#063c1e" />
        <span>Pedir no WhatsApp</span>
      </a>
    </>
  );
}
