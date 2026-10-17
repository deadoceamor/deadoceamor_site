export const WHATS_NUMBER = "5511992360531";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;

export const LINKS = {
  whatsappGeral: waLink("Olá, Diego e Andressa! Vim pelo site D&A Doce Amor e gostaria de fazer um pedido 🍰"),
  whatsappCardapio: waLink("Olá! Gostaria de ver as opções de bolos e doces disponíveis para hoje 😋"),
  whatsappFesta: waLink(
    "Olá, Diego e Andressa! Quero encomendar um bolo de festa 🎂\n\n• Data da comemoração: \n• Quantidade de convidados: \n• Sabor preferido: \n• Retirada na Vila Carmosina ou Entrega: "
  ),
  whatsappEmpresa: waLink(
    "Olá, Diego e Andressa! Gostaria de um orçamento de bolos e fatias para evento corporativo da minha empresa ☕"
  ),
  instagram: "https://www.instagram.com/deadoceamor",
  ifood: "https://www.ifood.com.br/delivery/sao-paulo-sp/da-doce-amor-bolos-festa-e-sobremesas-itaquera/ea364cc7-eee7-4c77-bcc3-dbbc60b9ba5d?UTM_Medium=share",
  keeta: "https://url-eu.mykeeta.com/CI8DN4Mz",
  food99: "https://oia.99app.com/dlp9/aI6GjY"
};

export interface Product {
  id: string;
  category: "delivery" | "festas" | "corporativo";
  badge: string;
  title: string;
  desc: string;
  priceNote: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "vulcao-ninho",
    category: "delivery",
    badge: "O Mais Pedido no Delivery",
    title: "Mini Bolo Vulcão de Brigadeiro com Ninho",
    desc: "Massa molhadinha de cacau com uma verdadeira erupção cremosa de brigadeiro com 50% cacau e brigadeiro de Ninho aveludado.",
    priceNote: "Sob consulta",
    image: "/products/prod-vulcao.jpg"
  },
  {
    id: "caseirinho-choc-ninho",
    category: "delivery",
    badge: "Perfeito para o Café",
    title: "Bolo Caseirinho Chocolate + Ninho",
    desc: "Aquele bolo fofinho e aconchegante para pronta-entrega, com cobertura e recheio generosos. Feito para reunir quem você ama.",
    priceNote: "Sob consulta",
    image: "/products/prod-caseirinho.jpg"
  },
  {
    id: "caseiro-cenoura",
    category: "delivery",
    badge: "Clássico Irresistível",
    title: "Caseirinho Especial com Brigadeiro",
    desc: "Massa leve, fresquinha e macia com calda generosa de brigadeiro artesanal derretendo por cima.",
    priceNote: "Sob consulta",
    image: "/products/prod-caseiro-cafe.jpg"
  },
  {
    id: "bolo-festa-aniversario",
    category: "festas",
    badge: "Sob Encomenda (3 dias)",
    title: "Bolo Decorado para Festa e Aniversário",
    desc: "O ponto alto da sua celebração. Massa estruturada ultra molhadinha, recheio alto e acabamento impecável.",
    priceNote: "Sob consulta",
    image: "/products/prod-festa-especial.jpg"
  },
  {
    id: "bolo-festa-tematico",
    category: "festas",
    badge: "Exclusivo & Personalizado",
    title: "Bolos para Celebrações Especiais",
    desc: "Decoração personalizada ao seu gosto. Combinações clássicas como brigadeiro 50% cacau, Ninho, beijinho, morangos e uvas verdes.",
    priceNote: "Sob consulta",
    image: "/products/prod-festa-decorado.jpg"
  },
  {
    id: "corporativo-eventos",
    category: "corporativo",
    badge: "Atendimento B2B / CNPJ",
    title: "Kits e Fatias para Eventos Corporativos",
    desc: "Fatias padronizadas em marmitinhas com rótulo personalizado para reuniões, coffee breaks e ações comemorativas da sua empresa.",
    priceNote: "Sob consulta",
    image: "/products/prod-corporativo.jpg"
  }
];

export interface Review {
  stars: number;
  text: string;
  author: string;
  city: string;
}

export const REVIEWS: Review[] = [
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
