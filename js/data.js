/* ==========================================================
   ARQUIVO DE CONTEÚDO
   ========================================================== */
const CONTACT = {
  whatsapp: "86995932781",
  telefone: "(86) 99593-2781",
  instagram: "generalissima_viagens",
  email: "", 
  endereco: "Rua Vereador Otávio Braga, 3043 – Planalto Ininga"
};

const PACOTES = [
  {
    id: "cimbres-juazeiro-2027", tipo: "peregrinacao",
    nome: "Peregrinação Cimbres-PE e Juazeiro-CE 2027",
    destino: "Serra de Cimbres (PE) e Juazeiro do Norte (CE)",
    data: "09 a 13 de junho de 2027", duracao: "3 diárias de hotel",
    preco: "R$ 1.400,00", pagamento: "Até 10x no cartão (com juros) ou Pix parcelado com quitação até o embarque",
    descricao: "Fé na Serra de Cimbres e em Juazeiro do Norte, cultura nos castelos e descanso em Porto de Galinhas.",
    roteiro: ["Serra de Cimbres", "Juazeiro do Norte", "Castelo Santa Helena", "Castelo Torre", "Casa do Doce", "Porto de Galinhas"],
    inclui: ["Ônibus executivo", "3 diárias em hotel com café da manhã"],
    obs: "Taxas de passeios não inclusas. Vagas limitadas.",
    imagem: "assets/img/pacotes/cimbres-juazeiro.jpg" 
  },
  {
    id: "misericordia-2027", tipo: "excursao",
    nome: "16º Misericórdia Brasil 2027",
    destino: "Fortaleza (CE), saindo de Teresina",
    data: "Ônibus 1: saída 31/03/2027 · Ônibus 2: saída 01/04/2027", duracao: "",
    preco: "R$ 1.100,00 à vista", pagamento: "Até 10x no cartão ou Pix (com juros), quitação até 25/03",
    descricao: "Dois ônibus de saída para viver o Misericórdia Brasil em Fortaleza, com grandes pregadores e o Instituto Hesed.",
    roteiro: [],
    inclui: ["Ônibus executivo com Wi-Fi", "Translado", "Hospedagem com café da manhã", "Camisa personalizada", "Passagem pelo Instituto Hesed Fortaleza (somente ônibus 1)"],
    obs: "Vagas limitadas.",
    imagem: "assets/img/pacotes/misericordia-fortaleza.jpg" 
  },
  {
    id: "aparecida-2027", tipo: "peregrinacao",
    nome: "Peregrinação Aparecida 2027",
    destino: "9 destinos pelo Brasil",
    data: "18 a 31 de julho de 2027", duracao: "14 dias",
    preco: "R$ 3.500,00 à vista", pagamento: "Até 12x no cartão ou Pix até o mês da viagem (com juros)",
    descricao: "Uma jornada de fé, devoção e turismo por grandes destinos religiosos e turísticos do país.",
    roteiro: ["Salvador (BA)", "Porto Seguro (BA)", "Rio de Janeiro (RJ)", "Aparecida (SP)", "Curitiba (PR)", "Nova Trento (SC)", "Gramado (RS)", "Canela (RS)", "Brasília (DF)"],
    inclui: ["Transporte em ônibus executivo", "Hospedagem", "Café da manhã, almoço e jantar no hotel", "Seguro viagem", "Guia turístico acompanhante"],
    obs: "",
    imagem: "assets/img/pacotes/aparecida.jpg" 
  },
  {
    id: "frei-gilson-caxias", tipo: "excursao",
    nome: "Caravana para o show do Frei Gilson em Caxias-MA",
    destino: "Caxias (MA)",
    data: "A confirmar", duracao: "", preco: "", pagamento: "",
    descricao: "Caravana para o show do Frei Gilson. Consulte datas e valores pelo WhatsApp.",
    roteiro: [], inclui: [], obs: "",
    imagem: "assets/img/pacotes/frei-gilson-caxias.jpg" 
  }
];

const FOTOS = [
  { src: "assets/img/galeria/foto-01.jpg", alt: "Grupo em peregrinação", legenda: "", forma: "larga" },
  { src: "assets/img/galeria/foto-02.jpg", alt: "Viagem em grupo", legenda: "", forma: "" },
  { src: "assets/img/galeria/foto-03.jpg", alt: "Destino da viagem", legenda: "", forma: "alta" },
  { src: "assets/img/galeria/foto-04.jpg", alt: "Registro da viagem", legenda: "", forma: "" },
  { src: "assets/img/galeria/foto-05.jpg", alt: "Registro da viagem", legenda: "", forma: "" },
  { src: "assets/img/galeria/foto-06.jpg", alt: "Registro da viagem", legenda: "", forma: "larga" }
];

const VIDEOS = [];
const DEPOIMENTOS = [];