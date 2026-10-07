export default function FaqSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
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
              Absolutamente não. Nossos doces e bolos são montados com estrutura firme e acondicionados em embalagens reforçadas e travadas. As entregas em Itaquera e região são feitas com muito cuidado e rapidez para garantir que o produto chegue intacto e perfeito à sua mesa.
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
              Atendemos toda a região de Itaquera e região, seja via delivery direto pelo WhatsApp ou pelos aplicativos parceiros (iFood, 99Food e Keeta).
            </div>
          </details>

          <details className="faq-item">
            <summary className="faq-summary">
              <span>Posso retirar meu pedido pessoalmente?</span>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-content">
              Sim! Você pode retirar diretamente com Diego e Andressa no nosso endereço na Vila Carmosina (Itaquera - São Paulo/SP). Basta combinar o horário certinho pelo WhatsApp.
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
  );
}
