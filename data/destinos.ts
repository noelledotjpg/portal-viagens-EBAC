export interface Destino {
  slug: string;
  nome: string;
  pais: string;
  continente: string;
  descricao: string;
  descricaoLonga: string;
  imagem: string;
  cor: string;
  destaques: string[];
  melhorEpoca: string;
  clima: string;
  moeda: string;
}

export const destinos: Destino[] = [
  {
    slug: "kyoto",
    nome: "Kyoto",
    pais: "Japão",
    continente: "Ásia",
    descricao: "Templos milenares, jardins zen e a alma da cultura japonesa preservada entre bambus e cerejeiras.",
    descricaoLonga:
      "Kyoto foi a capital imperial do Japão por mais de mil anos, e ainda hoje guarda a essência da civilização nipônica. São mais de 1.600 templos budistas, 400 santuários xintoístas e 17 sítios Património da UNESCO. Caminhe pelas vielas de Gion ao entardecer, cruzando com maikos (aprendizes de gueixa) em quimono. Meditação, cerimônia do chá, cerejeiras em flor na primavera e folhagens de outono: Kyoto entrega beleza em todas as estações.",
    imagem: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80",
    cor: "#C8553D",
    destaques: ["Fushimi Inari", "Arashiyama", "Kinkaku-ji", "Distrito de Gion", "Nishiki Market"],
    melhorEpoca: "Março–Maio / Outubro–Novembro",
    clima: "Temperado com quatro estações",
    moeda: "Iene (¥)",
  },
  {
    slug: "marrakech",
    nome: "Marrakech",
    pais: "Marrocos",
    continente: "África",
    descricao: "Uma explosão de cor, especiaria e mistério. A cidade rosa que convida a se perder em seus labirintos.",
    descricaoLonga:
      "Marrakech é uma cidade que ataca todos os sentidos ao mesmo tempo. A medina medieval, Patrimônio da UNESCO, é um labirinto de becos onde artesãos trabalham madeira, couro e cobre como faziam há séculos. A Praça Jemaa el-Fna transforma-se ao entardecer em palco de contadores de histórias, músicos e cozinheiros ao ar livre. Os souks cheiram a cominho e rosa, e os riads escondem jardins secretos de azulejos dourados por trás de portas discretas.",
    imagem: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80",
    cor: "#D4813A",
    destaques: ["Jemaa el-Fna", "Souks medievais", "Jardim Majorelle", "Palácio Bahia", "Medina"],
    melhorEpoca: "Outubro–Abril",
    clima: "Semi-árido, verões quentes",
    moeda: "Dirham marroquino (MAD)",
  },
  {
    slug: "patagonia",
    nome: "Patagônia",
    pais: "Argentina / Chile",
    continente: "América do Sul",
    descricao: "O fim do mundo como você imaginou: geleiras azuis, picos que perfuram as nuvens e silêncio absoluto.",
    descricaoLonga:
      "A Patagônia é uma das últimas fronteiras selvagens do planeta. Estende-se por dois países e oferece paisagens que desafiam a escala humana: o Fitz Roy e as Torres del Paine emergem do horizonte como lâminas de granito, enquanto a geleira Perito Moreno avança sobre o Lago Argentino com estrondos de trovão. Os caminhos de trekking aqui são legendários - o W e o Circuito completo das Torres são peregrinações para quem busca a natureza em sua forma mais pura e implacável.",
    imagem: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    cor: "#3B7EA1",
    destaques: ["Torres del Paine", "Fitz Roy", "Geleira Perito Moreno", "Ushuaia", "Trekking W"],
    melhorEpoca: "Novembro–Março",
    clima: "Frio, ventoso e imprevisível",
    moeda: "Peso argentino / Peso chileno",
  },
  {
    slug: "santorini",
    nome: "Santorini",
    pais: "Grécia",
    continente: "Europa",
    descricao: "Cúpulas azuis sobre o vulcão, pôr do sol de outro mundo e o Mediterrâneo que nunca acaba.",
    descricaoLonga:
      "Santorini é o resultado de uma das maiores erupções vulcânicas da história - uma ilha em forma de crescente abraçando uma caldera submersa. As vilas brancas de Oia e Fira escalam as falésias como espuma petrificada, ponctuadas pelas cúpulas azuis que se tornaram símbolo da Grécia. O sol poente mergulha no mar com cores que parecem pintadas - laranja, rosa e violeta. As praias de areia vulcânica negra e vermelha completam uma ilha que parece existir fora do tempo.",
    imagem: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    cor: "#5B8EC4",
    destaques: ["Oia ao pôr do sol", "Caldera view", "Praia de Perissa", "Akrotiri", "Vinho local"],
    melhorEpoca: "Maio–Outubro",
    clima: "Mediterrâneo, verões secos",
    moeda: "Euro (€)",
  },
  {
    slug: "bali",
    nome: "Bali",
    pais: "Indonésia",
    continente: "Ásia",
    descricao: "A ilha dos deuses: terraços de arroz em cascata, templos na névoa e uma espiritualidade palpável.",
    descricaoLonga:
      "Bali é única entre as ilhas indonésias por sua cultura hindu profundamente enraizada, expressa em milhares de templos, rituais diários e festivais que tingem as ruas de flores e incenso. Os terraços de arroz de Tegalalang e Jatiluwih são obras de arte coletivas esculpidas em gerações. Ubud, no coração da ilha, é o centro cultural com galerias, dança kecak e cafés entre os arrozais. As praias do sul - Seminyak, Canggu, Uluwatu - oferecem surf e vida noturna vibrante.",
    imagem: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    cor: "#5A9A78",
    destaques: ["Ubud", "Tegalalang", "Tanah Lot", "Uluwatu", "Seminyak"],
    melhorEpoca: "Abril–Outubro",
    clima: "Tropical, duas estações",
    moeda: "Rupia indonésia (IDR)",
  },
  {
    slug: "islândia",
    nome: "Islândia",
    pais: "Islândia",
    continente: "Europa",
    descricao: "Auroras boreais, geysers borbulhantes e paisagens lunares onde o fogo e o gelo coexistem.",
    descricaoLonga:
      "A Islândia é um laboratório geológico a céu aberto - jovem demais para ter suavizado seus ângulos. Geysers que irrompem a cada poucos minutos, cachoeiras que despencam de planaltos de lava, campos de musgo verde neon sobre basalto negro, glaciares que avançam para o mar. No inverno, as auroras boreais dançam sobre a escuridão ártica em cortinas de verde e roxo. No verão, o sol da meia-noite permite explorar sem fim.",
    imagem: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    cor: "#6B7FA8",
    destaques: ["Aurora Boreal", "Golden Circle", "Blue Lagoon", "Jökulsárlón", "Ring Road"],
    melhorEpoca: "Jun–Ago (sol meia-noite) / Set–Mar (auroras)",
    clima: "Subártico, muito variável",
    moeda: "Coroa islandesa (ISK)",
  },
];

export function getDestino(slug: string): Destino | undefined {
  return destinos.find((d) => d.slug === slug);
}
