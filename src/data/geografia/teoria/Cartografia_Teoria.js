export const teoriaCartografia = {
  titulo: "Introdução à Cartografia e Orientação",
  introducao: "Ciência da representação da superfície terrestre através de mapas, escalas e sistemas de coordenadas.",
  modulos: [
    {
      topico: "1. Coordenadas Geográficas",
      texto: "Sistema de linhas imaginárias que permitem localizar qualquer ponto no globo com precisão.",
      detalhes: [
        "Latitude: Distância em graus de qualquer ponto até à Linha do Equador (0° a 90° N/S). Define as zonas climáticas.",
        "Longitude: Distância em graus até ao Meridiano de Greenwich (0° a 180° L/O). Define os fusos horários.",
        "GPS: Sistema de posicionamento global baseado em satélites que utiliza estas coordenadas."
      ]
    },
    {
      topico: "2. Projeções Cartográficas",
      texto: "Técnicas para transferir a superfície curva da Terra para um plano (mapa). Todas as projeções possuem distorções.",
      detalhes: [
        "Cilíndrica de Mercator: Preserva as formas dos continentes, mas distorce as áreas (visão eurocêntrica).",
        "Cilíndrica de Peters: Preserva as áreas (proporções reais), mas distorce as formas (visão focada no sul subdesenvolvido).",
        "Cónica e Azimutal: Utilizadas para representar regiões específicas (polos ou latitudes médias)."
      ]
    },
    {
      topico: "3. Escalas e Fusos Horários",
      texto: "A escala indica a relação entre o tamanho real e o representado no mapa.",
      detalhes: [
        "Escala Grande vs. Pequena: Quanto maior o detalhe (ex: 1:100), maior é a escala. Quanto maior a área representada (ex: 1:1.000.000), menor é a escala.",
        "Fusos Horários: O Brasil possui 4 fusos horários oficiais, todos situados a Oeste do meridiano de Greenwich (GMT-2, -3, -4, -5).",
        "Linha Internacional de Data: Oposta ao meridiano de Greenwich, onde se muda o dia."
      ]
    }
  ]
};