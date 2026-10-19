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
    id: "mini-vulcao-ninho",
    category: "delivery",
    badge: "O Mais Pedido no Delivery",
    title: "Bolo mini vulcão massa de chocolate recheio de brigadeiro com Ninho",
    desc: "Uma deliciosa versão do bolo vulcão no tamanho mini. Massa fofinha, massa de chocolate com uma deliciosa cobertura de brigadeiro com Ninho, uma ótima opção.",
    priceNote: "Sob consulta",
    image: "/products/mini-vulcao-chocolate-com-ninho.webp"
  },
  {
    id: "mini-vulcao-brigadeiro",
    category: "delivery",
    badge: "Chocolatudo Irresistível",
    title: "Bolo mini vulcão massa chocolate recheio de brigadeiro",
    desc: "Uma deliciosa versão do bolo vulcão no tamanho mini. Massa fofinha, massa de chocolate com uma deliciosa cobertura de brigadeiro uma ótima opção para café da tarde.",
    priceNote: "Sob consulta",
    image: "/products/mini-vulcao-chocolate-com-brigadeiro.webp"
  },
  {
    id: "bolo-caseiro-choc-ninho",
    category: "delivery",
    badge: "Serve de 8 a 12 Fatias",
    title: "Bolo de chocolate recheio de Brigadeiro com Ninho (serve de 8 a 12 fatias)",
    desc: "Experimente nosso delicioso bolo de chocolate com a massa bem fofinha e uma combinação irresistível de 2 recheios (Brigadeiro e Ninho). Peso aprox: 850g (serve de 8 a 12 fatias).",
    priceNote: "Sob consulta",
    image: "/products/bolo-caseiro-chocolate-com-ninho-e-brigadeiro.webp"
  },
  {
    id: "bolo-caseiro-choc-brigadeiro",
    category: "delivery",
    badge: "Serve de 8 a 12 Fatias",
    title: "Bolo de chocolate recheio de brigadeiro (serve de 8 a 12 fatias)",
    desc: "Experimente nosso delicioso bolo bem fofinho com a massa de chocolate e uma irresistível cobertura de brigadeiro.",
    priceNote: "Sob consulta",
    image: "/products/bolo-caseiro-chocolate-com-brigadeiro.webp"
  },
  {
    id: "banoffee-individual",
    category: "delivery",
    badge: "Sobremesa Queridinha",
    title: "Deliciosa Banoffee individual",
    desc: "Banoffee uma Deliciosa Sobremesa feita com base crocante de bolacha, doce de leite feito na panela de pressão, bananas em fatias, um leve toque de canela.",
    priceNote: "Sob consulta",
    image: "/products/banoffee-individual.webp"
  },
  {
    id: "sobremesa-surpresa-uva",
    category: "delivery",
    badge: "Refrescante & Cremosa",
    title: "Sobremesa Surpresa de Uva no Pote",
    desc: "Camada de um Delicioso Recheio branco cremoso, uvas verdes frescas selecionadas e finalizado com um irresistível brigadeiro de 50% cacau.",
    priceNote: "Sob consulta",
    image: "/products/sobremesa-surpresa-de-uva.webp"
  },
  {
    id: "bolo-festa-morangos-ninho",
    category: "festas",
    badge: "Sob Encomenda (3 dias)",
    title: "Naked Cake com Morangos e Ninho",
    desc: "Massa fofinha e molhadinha, recheio alto e generoso de Ninho com brigadeiro nobre 50% cacau, finalizado com morangos frescos e brigadeiros artesanais.",
    priceNote: "Sob consulta",
    image: "/encomendas/bolo-festa-morangos-e-ninho.webp"
  },
  {
    id: "bolo-festa-frozen",
    category: "festas",
    badge: "Temático Infantil",
    title: "Bolo Temático Frozen (Elsa & Anna)",
    desc: "Decoração primorosa em chantininho com bico em rosetas degradê suave, flocos de neve e topo temático exclusivo da Frozen.",
    priceNote: "Sob consulta",
    image: "/encomendas/bolo-tematico-frozen-alice.webp"
  },
  {
    id: "bolo-festa-historia-professor",
    category: "festas",
    badge: "Profissões & Celebrações",
    title: "Bolo Comemorativo História & Professor",
    desc: "Acabamento espatulado em dois tons com topo temático celebrando vocações, formaturas, datas de aniversário e conquistas.",
    priceNote: "Sob consulta",
    image: "/encomendas/bolo-tematico-historia-professor.webp"
  },
  {
    id: "bolo-festa-homem-aranha",
    category: "festas",
    badge: "Temático Infantil",
    title: "Bolo Temático Homem-Aranha",
    desc: "Bolo espatulado em vermelho marcante, silhueta urbana, teias e topo personalizado de heróis para animar a comemoração.",
    priceNote: "Sob consulta",
    image: "/encomendas/bolo-tematico-homem-aranha.webp"
  },
  {
    id: "bolo-festa-superman",
    category: "festas",
    badge: "Homenagem Especial",
    title: "Bolo Especial Superman / Heróis",
    desc: "Bolo imponente com acabamento degradê moderno em preto e branco e brasão do Superman para homenagear com afeto quem é super para você.",
    priceNote: "Sob consulta",
    image: "/encomendas/bolo-tematico-superman-parabens.webp"
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
