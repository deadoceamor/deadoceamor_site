import Header from "./components/Header";
import Hero from "./components/Hero";
import CorporateSection from "./components/CorporateSection";
import FeaturesStrip from "./components/FeaturesStrip";
import Catalog from "./components/Catalog";
import PartySpotlight from "./components/PartySpotlight";
import AboutSection from "./components/AboutSection";
import Reviews from "./components/Reviews";
import FaqSection from "./components/FaqSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Barra de anúncio superior + Cabeçalho + Menu mobile */}
      <Header />

      <main>
        {/* Seção principal: Banner, botões e destaques */}
        <Hero />

        {/* Atendimento para Empresas e Eventos Corporativos (B2B) */}
        <CorporateSection />

        {/* Bolos de festa sob encomenda */}
        <PartySpotlight />

        {/* Faixa com os 4 diferenciais da confeitaria */}
        <FeaturesStrip />

        {/* Cardápio de doces para pronta-entrega e delivery */}
        <Catalog />

        {/* Quem Somos: História do casal Diego e Andressa */}
        <AboutSection />

        {/* Depoimentos reais de clientes dos apps e WhatsApp */}
        <Reviews />

        {/* Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* Onde Estamos, horários e retirada na Vila Carmosina */}
        <LocationSection />
      </main>

      {/* Rodapé com links e contatos */}
      <Footer />

      {/* Botão flutuante para chamar direto no WhatsApp */}
      <FloatingWhatsApp />
    </>
  );
}
