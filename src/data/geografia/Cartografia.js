export const cartografiaData = {
  titulo: "Cartografia",
  descricao: "Conceitos fundamentais de cartografia, escalas, projeções, fusos horários e interpretação de mapas.",
  questoes: [
    {
      id: "cart-01",
      topic: "Fuso Horário + Viagem",
      pergunta: "Um empresário sai de Fernando de Noronha (Fuso -2 GMT) às 08:00 para Manaus (Fuso -4 GMT). Sabendo que o voo tem duração de 4 horas, qual será o horário local de chegada?",
      alternativas: [
        "08:00",
        "06:00",
        "10:00", // Correta (C) - Movi para o meio
        "12:00",
        "14:00"
      ],
      correta: 2,
      explicacao: "A diferença de fuso entre Noronha e Manaus é de -2 horas. Quando são 08:00 em Noronha, são 06:00 em Manaus. Somando as 4h de voo ao horário de Manaus, a chegada é às 10:00.",
      dica: "Sempre ajuste o fuso para o destino antes de somar o tempo de viagem."
    },
    {
      id: "cart-02",
      topic: "Conceito de Escala",
      pergunta: "Ao comparar dois mapas, um com escala de 1:5.000 e outro com escala de 1:1.000.000, qual deles é considerado uma 'escala grande' e qual sua característica?",
      alternativas: [
        "1:1.000.000, pois cobre uma área muito maior do território.",
        "1:5.000, pois o denominador maior indica mais detalhes.",
        "Ambos possuem o mesmo nível de detalhamento por serem escalas numéricas.",
        "1:1.000.000, pois é a escala padrão para plantas urbanas.",
        "1:5.000, pois apresenta maior nível de detalhes e menor área representada." // Correta (E) - Movi para o final
      ],
      correta: 4,
      explicacao: "Escala grande é aquela que possui denominador menor. Ela 'aproxima' a visão, permitindo ver mais detalhes de uma área pequena.",
      dica: "Denominador pequeno = Detalhe grande."
    },
    {
      id: "cart-03",
      topic: "Cálculo de Distância",
      pergunta: "Em um mapa escolar na escala 1:2.500.000, a distância em linha reta entre dois pontos é de 10 cm. Qual a distância real em quilômetros?",
      alternativas: [
        "250 km", // Correta (A) - Movi para o início
        "25 km",
        "2.500 km",
        "2,5 km",
        "250.000 km"
      ],
      correta: 0,
      explicacao: "Na escala 1:2.500.000, cada 1cm no mapa equivale a 25km na realidade. Logo, 10cm * 25km = 250km.",
      dica: "1 km possui 100.000 cm. Use isso para converter escalas rapidamente."
    },
    {
      id: "cart-04",
      topic: "Projeções Cartográficas",
      pergunta: "A Projeção de Mercator é muito utilizada na navegação por ser uma projeção conforme. Qual a principal crítica pedagógica a essa projeção no ensino de geografia?",
      alternativas: [
        "Ela distorce as formas dos continentes, deixando-os irreconhecíveis.",
        "Ela é eurocêntrica e distorce as áreas, fazendo as terras do Norte parecerem maiores que as do Sul.", // Correta (B) - Movi para posição 1
        "Ela privilegia a proporção das áreas em detrimento das formas.",
        "Ela não consegue representar os polos da Terra.",
        "Ela é uma projeção azimutal que deforma o centro do mapa."
      ],
      correta: 1,
      explicacao: "Mercator mantém as formas, mas deforma as áreas, exagerando o tamanho das regiões de alta latitude.",
      dica: "Pense na 'visão de mundo' que cada mapa transmite."
    },
    {
      id: "cart-05",
      topic: "Símbolos e Convenções",
      pergunta: "Segundo a apostila do IBGE, as informações cartográficas que requerem um traçado característico, como rios, rodovias e ferrovias, são classificadas como informações:",
      alternativas: [
        "Pontuais",
        "Zonais",
        "Digitais",
        "Lineares", // Correta (D) - Movi para posição 3
        "Tridimensionais"
      ],
      correta: 3,
      explicacao: "Informações lineares são utilizadas para elementos que requerem traçados contínuos, como redes de transporte.",
      dica: "Rios e estradas seguem linhas."
    },
    {
      id: "cart-06",
      topic: "Mapas Temáticos",
      pergunta: "Como são chamados os mapas que apresentam características selecionadas da população, como densidade demográfica e fluxos migratórios?",
      alternativas: [
        "Mapas Demográficos", // Correta (A) - Movi para o início
        "Mapas Físicos",
        "Mapas Geomorfológicos",
        "Mapas Hipsométricos",
        "Mapas Políticos"
      ],
      correta: 0,
      explicacao: "Mapas demográficos focam na distribuição e características da população.",
      dica: "Demos = Povo."
    },
    {
      id: "cart-07",
      topic: "Fusos Horários do Brasil",
      pergunta: "Considerando a divisão de fusos do Brasil, se em Brasília (GMT -3) são 14:00, que horas serão em Rio Branco, no Acre (GMT -5)?",
      alternativas: [
        "16:00",
        "15:00",
        "13:00",
        "10:00",
        "12:00" // Correta (E) - Movi para o final
      ],
      correta: 4,
      explicacao: "O Acre está dois fusos atrás de Brasília. 14:00 - 2 horas = 12:00.",
      dica: "O Brasil tem 4 fusos: -2, -3, -4 e -5."
    },
    {
      id: "cart-08",
      topic: "Projeção de Peters",
      pergunta: "A Projeção de Peters é frequentemente chamada de 'mapa para o mundo solidário' porque:",
      alternativas: [
        "Não apresenta distorções.",
        "Mantém a proporção real das áreas, destacando o Hemisfério Sul.", // Correta (B) - Movi para posição 1
        "Mantém a forma exata dos continentes.",
        "É baseada em fotos de satélite.",
        "Utiliza o Meridiano de Brasília como centro."
      ],
      correta: 1,
      explicacao: "A projeção de Peters preserva o tamanho real das áreas, combatendo o eurocentrismo.",
      dica: "Projeção Equivalente = Áreas iguais."
    },
    { 
      id: "cart-09",
      topic: "Curvas de Nível", 
      pergunta: "Curvas de nível muito próximas umas das outras no mapa indicam:", 
      alternativas: [
        "Terreno plano.", 
        "Terreno suave.", 
        "Subida íngreme/escarpa.", // Correta (C) - Movi para posição 2
        "Rio largo.", 
        "Praia."
      ], 
      correta: 2, 
      explicacao: "Curvas juntas indicam que a altitude muda rapidamente em curta distância.", 
      dica: "Juntas = Parede." 
    },
    { 
      id: "cart-10",
      topic: "Anamorfose", 
      pergunta: "Um mapa onde os países aparecem 'deformados' para destacar uma variável estatística é uma:", 
      alternativas: [
        "Anamorfose Geográfica", // Correta (A) - Movi para o início
        "Projeção de Mercator", 
        "Projeção de Peters", 
        "Mapa de Curvas de Nível", 
        "Cartograma Topográfico"
      ], 
      correta: 0, 
      explicacao: "A anamorfose distorce a forma geométrica para destacar uma variável (ex: PIB).", 
      dica: "Mapa gordo/magro distorcido = Anamorfose." 
    },
    { 
      id: "cart-11",
      topic: "Símbolos", 
      pergunta: "Em um mapa, a cor AZUL é reservada universalmente para representar:", 
      alternativas: [
        "Vegetação", 
        "Áreas Urbanas", 
        "Rodovias", 
        "Relevo", 
        "Hidrografia" // Correta (E) - Movi para o final
      ], 
      correta: 4, 
      explicacao: "Convenções internacionais padronizam o azul para massas de água.", 
      dica: "Azul = Água." 
    },
    {
      id: "cart-12",
      topic: "Conceito de Cartografia",
      pergunta: "De acordo com as definições apresentadas no material, a cartografia pode ser entendida como:",
      alternativas: [
        "O estudo exclusivo da geologia do subsolo.",
        "A ciência que mede a profundidade dos oceanos.",
        "A aplicação de leis jurídicas sobre terras.",
        "A técnica e a arte de representar a superfície terrestre e fenômenos socioeconômicos.", // Correta (D)
        "O mapeamento apenas de áreas urbanas."
      ],
      correta: 3,
      explicacao: "A cartografia é definida como a técnica e a arte de representar a superfície terrestre e seus fenômenos.",
      dica: "Envolve representação, técnica e ciência."
    },
    {
      id: "cart-13",
      topic: "Mapas e Poder",
      pergunta: "Historicamente, o conhecimento do espaço por meio dos mapas foi vital para as conquistas territoriais porque:",
      alternativas: [
        "Os mapas continham conhecimentos estratégicos usados como instrumento de poder.", // Correta (A)
        "Os mapas eram distribuídos gratuitamente para camponeses.",
        "A posse de mapas impedia a ocorrência de tsunamis.",
        "A tecnologia era controlada pela Igreja.",
        "Os mapas indicavam apenas rotas turísticas."
      ],
      correta: 0,
      explicacao: "Desde as grandes navegações, mapas e dados estatísticos foram considerados instrumentos de poder político e militar.",
      dica: "Pense em 'conhecimento é poder'."
    },
    {
      id: "cart-14",
      topic: "Projeções Cartográficas",
      pergunta: "Ao transformar a esfera terrestre em um plano, os cartógrafos enfrentam um problema insolúvel:",
      alternativas: [
        "A impossibilidade de usar cores.",
        "A necessidade de desenhar apenas no sentido Norte-Sul.",
        "O fato de que os meridianos nunca podem se cruzar.",
        "A proibição de representar o fundo do mar.",
        "A ocorrência inevitável de distorções nas áreas, formas ou distâncias." // Correta (E)
      ],
      correta: 4,
      explicacao: "Qualquer projeção adotada sempre apresentará algum tipo de distorção na transição do elipsoide para o plano.",
      dica: "A Terra é redonda e o papel é plano."
    },
    {
      id: "cart-15",
      topic: "Plantas Cartográficas",
      pergunta: "Em qual representação cartográfica a curvatura da Terra NÃO precisa ser levada em consideração?",
      alternativas: [
        "Planisférios Políticos",
        "Plantas", // Correta (B)
        "Mapas de Anamorfose",
        "Cartas Topográficas Regionais",
        "Globos Terrestres"
      ],
      correta: 1,
      explicacao: "Plantas representam áreas muito limitadas, onde a curvatura da Terra não gera distorção perceptível.",
      dica: "Foco em áreas muito pequenas."
    },
    {
      id: "cart-16",
      topic: "Projeções Conformes",
      pergunta: "As projeções classificadas como 'conformes' têm como propriedade principal:",
      alternativas: [
        "Manter a proporção exata de todas as áreas.",
        "Garantir que todas as distâncias sejam medidas sem erro.",
        "Preservar os ângulos idênticos aos do globo, mantendo as formas terrestres.", // Correta (C)
        "Aumentar o tamanho das regiões equatoriais.",
        "Representar o relevo com cores variadas."
      ],
      correta: 2,
      explicacao: "Nas projeções conformes, os ângulos são preservados, mantendo-se a forma, mas alterando o tamanho das áreas.",
      dica: "Conforme = Formas mantidas."
    },
    {
      id: "cart-17",
      topic: "Projeção de Mercator",
      pergunta: "A projeção de Mercator, amplamente utilizada para a navegação, destaca-se por:",
      alternativas: [
        "Ser uma projeção equivalente.",
        "Mostrar o Brasil maior do que a Groenlândia.",
        "Ser a única que não apresenta distorções.",
        "Facilitar a representação precisa de ângulos e coordenadas para bússolas.", // Correta (D)
        "Utilizar um cone de papel."
      ],
      correta: 3,
      explicacao: "Mercator é uma projeção conforme que prioriza a navegação e a precisão de ângulos.",
      dica: "Foi feita para navegadores."
    },
    {
      id: "cart-18",
      topic: "Projeções Equivalentes",
      pergunta: "A principal característica da projeção de Peters (ou mapa-múndi de Peters) é:",
      alternativas: [
        "Manter as áreas proporcionalmente idênticas às do globo terrestre.", // Correta (A)
        "Preservar as formas originais dos continentes.",
        "Centrar o mapa no Polo Norte.",
        "Evitar o uso de meridianos.",
        "Representar apenas o hemisfério Norte."
      ],
      correta: 0,
      explicacao: "A projeção de Peters é equivalente: as áreas são proporcionais à realidade.",
      dica: "Valoriza a dimensão real das massas de terra."
    },
    {
      id: "cart-19",
      topic: "Projeção Equidistante",
      pergunta: "As projeções equidistantes são ideais para qual finalidade prática?",
      alternativas: [
        "Estudo de geologia profunda.",
        "Mapeamento de vegetação.",
        "Análise da densidade demográfica.",
        "Representação tridimensional.",
        "Definição de rotas aéreas ou marítimas a partir de um ponto central." // Correta (E)
      ],
      correta: 4,
      explicacao: "Por manterem distâncias precisas a partir de um centro, são usadas para traçar rotas de transporte.",
      dica: "Foco na precisão de distâncias."
    },
    {
      id: "cart-20",
      topic: "Projeção de Robinson",
      pergunta: "A projeção de Robinson é frequentemente classificada como 'afilática'. Isso significa que:",
      alternativas: [
        "Preserva perfeitamente forma e área.",
        "Distorce apenas as regiões equatoriais.",
        "Não preserva nenhuma propriedade específica, mas reduz as distorções visuais globais.", // Correta (C)
        "É construída exclusivamente por drones.",
        "Só pode ser utilizada em globos de papel."
      ],
      correta: 2,
      explicacao: "A projeção afilática busca um equilíbrio visual para atlas escolares, sem ser matematicamente perfeita.",
      dica: "É a que 'menos engana' o olho nos mapas escolares."
    },
    {
      id: "cart-21",
      topic: "Figuras Geométricas",
      pergunta: "Quando o globo terrestre é tangenciado num dos polos por um plano de papel, temos uma projeção:",
      alternativas: [
        "Cilíndrica Equatorial",
        "Cônica de Albers",
        "Afilática Meridional",
        "Azimutal ou Polar", // Correta (D)
        "Hipsométrica Central"
      ],
      correta: 3,
      explicacao: "A projeção plana ou azimutal, quando tangencia o polo, é chamada de projeção polar.",
      dica: "O papel encosta apenas em um ponto (topo ou base)."
    },
    {
      id: "cart-22",
      topic: "Coordenadas Geográficas",
      pergunta: "O sistema de coordenadas geográficas baseia-se na interseção de duas linhas imaginárias denominadas:",
      alternativas: [
        "Paralelos e Meridianos.", // Correta (A)
        "Altitude e Longitude.",
        "Equador e Trópico de Câncer.",
        "Graus e Minutos.",
        "Norte e Leste."
      ],
      correta: 0,
      explicacao: "O sistema é formado por paralelos (latitudes) e meridianos (longitudes).",
      dica: "Linhas horizontais e verticais."
    },
    {
      id: "cart-23",
      topic: "Latitudes",
      pergunta: "A latitude varia de 0° a 90° e é medida a partir de qual referência inicial?",
      alternativas: [
        "Meridiano de Greenwich.",
        "Linha do Equador.", // Correta (B)
        "Trópico de Capricórnio.",
        "Círculo Polar Ártico.",
        "Antimeridiano de 180°."
      ],
      correta: 1,
      explicacao: "A latitude é a distância em graus entre um lugar e a Linha do Equador.",
      dica: "O Equador é o marco zero horizontal."
    },
    {
      id: "cart-24",
      topic: "Nomenclatura de Hemisférios",
      pergunta: "O hemisfério Norte também pode ser identificado pelos termos:",
      alternativas: [
        "Austral ou Meridional.",
        "Leste ou Oriental.",
        "Oeste ou Ocidental.",
        "Zonal ou Hipsométrico.",
        "Setentrional ou Boreal." // Correta (E)
      ],
      correta: 4,
      explicacao: "Hemisfério Norte é sinônimo de Setentrional ou Boreal.",
      dica: "Borealis = Norte (ex: aurora boreal)."
    },
    {
      id: "cart-25",
      topic: "Longitudes",
      pergunta: "A longitude varia de 0° a 180° para Leste ou Oeste, tendo como marco zero:",
      alternativas: [
        "A Linha Internacional de Data.",
        "O Polo Norte Geográfico.",
        "O Meridiano de Greenwich.", // Correta (C)
        "A cidade de Brasília.",
        "O Trópico de Câncer."
      ],
      correta: 2,
      explicacao: "O meridiano de origem passa por Greenwich, na Inglaterra.",
      dica: "Marco zero vertical."
    },
    {
      id: "cart-26",
      topic: "Linha Internacional de Data",
      pergunta: "A função primordial da Linha Internacional de Data (Meridiano 180°) é:",
      alternativas: [
        "Dividir o Brasil em fusos.",
        "Indicar onde o Sol nasce.",
        "Marcar o ponto de maior profundidade do oceano.",
        "Separar o início e o final do dia civil na Terra.", // Correta (D)
        "Definir a altitude zero."
      ],
      correta: 3,
      explicacao: "Ela estabelece a modificação da data ou do dia civil em que se está posicionado.",
      dica: "É o antimeridiano de Greenwich."
    },
    {
      id: "cart-27",
      topic: "Orientação e Rosa dos Ventos",
      pergunta: "Na Rosa dos Ventos, o ponto colateral que se situa entre o Sul (S) e o Leste (E) é o:",
      alternativas: [
        "Sudeste (SE).", // Correta (A)
        "Noroeste (NO).",
        "Sudoeste (SO).",
        "Nordeste (NE).",
        "Sul-Sudeste (SSE)."
      ],
      correta: 0,
      explicacao: "O Sudeste (SE) é o ponto colateral localizado entre os pontos cardeais Sul e Leste.",
      dica: "Região de MG, ES, SP e RJ."
    },
    {
      id: "cart-28",
      topic: "Orientação pelo Sol",
      pergunta: "Ao estender o braço direito na direção do nascer do Sol (Leste), o observador terá à sua frente o:",
      alternativas: [
        "Oeste.",
        "Norte.", // Correta (B)
        "Sul.",
        "Sudoeste.",
        "Zênite."
      ],
      correta: 1,
      explicacao: "Braço direito = Leste; Frente = Norte.",
      dica: "Lembre-se da posição padrão: Direito-Leste, Frente-Norte."
    },
    {
      id: "cart-29",
      topic: "Cruzeiro do Sul",
      pergunta: "Para encontrar o ponto cardeal Sul à noite no hemisfério meridional, deve-se prolongar o braço maior do Cruzeiro do Sul:",
      alternativas: [
        "Duas vezes e meia em direção à Lua.",
        "Dez vezes até tocar Órion.",
        "Três vezes para a esquerda.",
        "Ininterruptamente até a Estrela Polar.",
        "Quatro vezes e meia em uma linha imaginária até o horizonte." // Correta (E)
      ],
      correta: 4,
      explicacao: "O procedimento correto envolve prolongar o braço maior 4,5 vezes e descer para o horizonte.",
      dica: "Número mágico: 4,5."
    },
    {
      id: "cart-30",
      topic: "Estrela Polaris",
      pergunta: "A Estrela Polaris é uma ferramenta de orientação útil para navegadores que se encontram:",
      alternativas: [
        "No Hemisfério Norte (setentrional).", // Correta (A)
        "No Hemisfério Sul (meridional).",
        "Exclusivamente sobre o Equador.",
        "Apenas durante o dia.",
        "Em submarinos."
      ],
      correta: 0,
      explicacao: "A Polaris encontra-se sobre o Polo Norte e só pode ser vista desse hemisfério.",
      dica: "Também chamada de Estrela do Norte."
    },
    {
      id: "cart-31",
      topic: "Rotação da Terra",
      pergunta: "O movimento de rotação da Terra é realizado de Oeste para Leste e tem como principal consequência geográfica:",
      alternativas: [
        "A ocorrência das quatro estações do ano.",
        "A variação anual das latitudes tropicais.",
        "O degelo das calotas polares.",
        "A alternância entre os dias e as noites.", // Correta (D)
        "A mudança de direção dos ventos alísios."
      ],
      correta: 3,
      explicacao: "A rotação em torno do próprio eixo gera a iluminação alternada do Sol, definindo os dias e noites.",
      dica: "Dura aproximadamente 24 horas."
    },
    {
      id: "cart-32",
      topic: "Translação e Estações",
      pergunta: "A inclinação do eixo da Terra (23°27') durante o movimento de translação é responsável por:",
      alternativas: [
        "Impedir que o Sol brilhe sobre os oceanos.",
        "Fazer com que a Terra gire mais rápido.",
        "Gerar a diferença de insolação que causa as estações do ano.", // Correta (C)
        "Eliminar a gravidade nas montanhas.",
        "Dividir o ano em meses lunares."
      ],
      correta: 2,
      explicacao: "Sem a inclinação do eixo, a duração do dia e da noite seria sempre igual e as estações climáticas inexistiriam.",
      dica: "Inclinação + Volta ao Sol = Estações."
    },
    {
      id: "cart-33",
      topic: "Equinócios",
      pergunta: "Nos dias de equinócio (21 de março e 23 de setembro), ocorre o seguinte fenômeno:",
      alternativas: [
        "O dia é muito mais longo que a noite no Hemisfério Sul.",
        "A noite é muito mais longa que o dia no Hemisfério Norte.",
        "O Sol nunca se põe na Antártida.",
        "As marés atingem o nível mais baixo.",
        "Os raios solares atingem de maneira igual os dois hemisférios." // Correta (E)
      ],
      correta: 4,
      explicacao: "Equinócio significa igualdade entre a duração do dia e da noite nos dois hemisférios.",
      dica: "Equi = igual."
    },
    {
      id: "cart-34",
      topic: "Solstícios",
      pergunta: "O solstício de 21 de junho marca, respectivamente, o início das seguintes estações no Norte e no Sul:",
      alternativas: [
        "Verão e Inverno.", // Correta (A)
        "Outono e Primavera.",
        "Inverno e Verão.",
        "Verão e Outono.",
        "Inverno e Primavera."
      ],
      correta: 0,
      explicacao: "Em 21 de junho, o Norte recebe mais luz (verão) e o Sul recebe menos (inverno).",
      dica: "Pense no calendário das férias de meio de ano no Brasil."
    },
    {
      id: "cart-35",
      topic: "Escala Cartográfica",
      pergunta: "Sobre a escala cartográfica, é correto afirmar que:",
      alternativas: [
        "Quanto maior for a escala, menores serão os detalhes.",
        "A riqueza de detalhes do mapa é diretamente proporcional à escala.", // Correta (B)
        "Escalas pequenas são usadas para mapear ruas.",
        "A riqueza de detalhes é inversamente proporcional ao tamanho da escala.",
        "O denominador da escala nunca passa de 1000."
      ],
      correta: 1,
      explicacao: "Quanto maior for a escala (ex: 1:100), maiores serão os detalhes representados.",
      dica: "Grande escala = Grandes detalhes (visão aproximada)."
    },
    {
      id: "cart-36",
      topic: "Escala Numérica",
      pergunta: "Uma escala de 1:200.000 indica que cada centímetro no mapa corresponde a:",
      alternativas: [
        "200 metros na realidade.",
        "20 quilômetros na realidade.",
        "2 quilômetros na realidade.", // Correta (C)
        "200 quilômetros na realidade.",
        "20 metros na realidade."
      ],
      correta: 2,
      explicacao: "200.000 cm equivalem a 2.000 metros ou 2 km (corta-se cinco zeros).",
      dica: "Cinco casas decimais para transformar cm em km."
    },
    {
      id: "cart-37",
      topic: "Cálculo de Escala",
      pergunta: "Em um mapa, a distância gráfica entre duas cidades é de 5 cm. Se a escala é 1:500.000, qual a distância real (D)?",
      alternativas: [
        "2,5 km.",
        "250 km.",
        "25 metros.",
        "25 km.", // Correta (D)
        "250 metros."
      ],
      correta: 3,
      explicacao: "$D = E \times d \rightarrow D = 500.000 \times 5 = 2.500.000$ cm. Convertendo: 25 km.",
      dica: "Multiplique o denominador pelo valor no mapa e converta."
    },
    {
      id: "cart-38",
      topic: "Escala Gráfica",
      pergunta: "A principal vantagem da escala gráfica em relação à numérica é que:",
      alternativas: [
        "Permite o cálculo automático da altitude.",
        "Não utiliza unidades de medida.",
        "É a única aceita pelo IBGE.",
        "Garante que o mapa não tenha distorções.",
        "Mantém a proporção mesmo se o mapa for ampliado ou reduzido." // Correta (E)
      ],
      correta: 4,
      explicacao: "Como é um desenho graduado, ela acompanha as alterações sofridas pelo papel.",
      dica: "Ela aumenta ou diminui junto com o mapa."
    },
    {
      id: "cart-39",
      topic: "Legendas",
      pergunta: "A função da legenda em um mapa é:",
      alternativas: [
        "Decodificar os símbolos, cores e traços utilizados na representação.", // Correta (A)
        "Indicar o nome do cartógrafo.",
        "Exibir a data de impressão.",
        "Garantir o Norte para baixo.",
        "Substituir a escala."
      ],
      correta: 0,
      explicacao: "A legenda nos mostra o que as cores e símbolos significam e dá informações sobre o tema.",
      dica: "É o 'tradutor' do mapa."
    },
    {
      id: "cart-40",
      topic: "Símbolos Cartográficos",
      pergunta: "Símbolos que utilizam polígonos para representar extensões de área (como vegetação) são chamados de:",
      alternativas: [
        "Pontuais.",
        "Zonais.", // Correta (B)
        "Lineares.",
        "Topográficos.",
        "Mosaicos."
      ],
      correta: 1,
      explicacao: "Símbolos zonais representam informações que ocupam uma determinada extensão sobre a área.",
      dica: "Pense em 'zonas' ou 'áreas'."
    },
    {
      id: "cart-41",
      topic: "Símbolos Cartográficos",
      pergunta: "Informações representadas por figuras geométricas como pontos para indicar cidades são classificadas como:",
      alternativas: [
        "Zonais.",
        "Lineares.",
        "Pontuais.", // Correta (C)
        "Anamórficas.",
        "Isotérmicas."
      ],
      correta: 2,
      explicacao: "O símbolo pontual é usado quando a representação pode ser traduzida por pontos.",
      dica: "Um ponto no mapa marca o local exato."
    },
    {
      id: "cart-42",
      topic: "Tipos de Mapas",
      pergunta: "Um mapa político é projetado primordialmente para exibir:",
      alternativas: [
        "Variações de altitude.",
        "Distribuição de florestas.",
        "Índice de chuvas.",
        "As divisões administrativas de países, estados e municípios.", // Correta (D)
        "Rotas de migração."
      ],
      correta: 3,
      explicacao: "Mapas políticos mostram fronteiras, limites territoriais e centros de poder administrativo.",
      dica: "Foco na organização administrativa."
    },
    {
      id: "cart-43",
      topic: "Mapas Físicos",
      pergunta: "Mapas que representam montanhas, planícies, geologia e padrões climáticos são enquadrados como:",
      alternativas: [
        "Mapas Políticos.",
        "Anamorfoses.",
        "Cartas Cadastrais.",
        "Mapas Demográficos.",
        "Mapas Físicos." // Correta (E)
      ],
      correta: 4,
      explicacao: "Mapas físicos enfatizam a topografia, hidrografia e vegetação.",
      dica: "Representam aspectos naturais."
    },
    {
      id: "cart-44",
      topic: "Mapas Hipsométricos",
      pergunta: "A nomenclatura específica para mapas que mostram as variações de altitude do relevo terrestre é:",
      alternativas: [
        "Mapas Hipsométricos.", // Correta (A)
        "Mapas Batimétricos.",
        "Mapas Pluviométricos.",
        "Mapas Barimétricos.",
        "Mapas Litológicos."
      ],
      correta: 0,
      explicacao: "Mapas de altitude também são chamados de hipsométricos.",
      dica: "Hipsometria = Medida da altura/altitude."
    },
    {
      id: "cart-45",
      topic: "Curvas de Nível",
      pergunta: "Sobre as curvas de nível (isoípsas), é correto afirmar que:",
      alternativas: [
        "Unem pontos de mesma latitude.",
        "Unem os pontos do relevo que têm a mesma altitude.", // Correta (B)
        "Quanto mais próximas, menor a declividade.",
        "Representam apenas vegetação densa.",
        "São linhas que nunca se aproximam."
      ],
      correta: 1,
      explicacao: "Isoípsas são linhas que conectam pontos de igual altitude.",
      dica: "Conectam alturas iguais."
    },
    {
      id: "cart-46",
      topic: "Mapas Batimétricos",
      pergunta: "Qual o objetivo principal de um mapa batimétrico?",
      alternativas: [
        "Indicar a idade das rochas.",
        "Representar a pressão atmosférica.",
        "Mapear as profundidades de corpos d'água (oceanos, lagos).", // Correta (C)
        "Medir o crescimento populacional.",
        "Identificar minérios."
      ],
      correta: 2,
      explicacao: "Mapas batimétricos representam as profundidades.",
      dica: "É o oposto da hipsometria (altura)."
    },
    {
      id: "cart-47",
      topic: "Mapas Geológicos",
      pergunta: "Mapas litológicos e estratigráficos são categorias inseridas nos:",
      alternativas: [
        "Mapas Meteorológicos.",
        "Mapas Demográficos.",
        "Mapas de Anamorfose.",
        "Mapas Geológicos.", // Correta (D)
        "Globos Escolares."
      ],
      correta: 3,
      explicacao: "Mostram formações rochosas, estruturas geológicas e recursos minerais.",
      dica: "Tratam das rochas e do tempo geológico."
    },
    {
      id: "cart-48",
      topic: "Anamorfose",
      pergunta: "A técnica de anamorfose geográfica é utilizada principalmente para:",
      alternativas: [
        "Representar o relevo com precisão.",
        "Garantir fronteiras inalteradas.",
        "Substituir fotos de satélite.",
        "Medir distâncias exatas.",
        "Evidenciar desigualdades distorcendo formas conforme o valor de uma variável." // Correta (E)
      ],
      correta: 4,
      explicacao: "A anamorfose distorce áreas para destacar dados socioeconômicos (ex: PIB, população).",
      dica: "O mapa fica 'inchado' onde o valor é maior."
    },
    {
      id: "cart-49",
      topic: "Classificações Cartográficas",
      pergunta: "A diferença fundamental entre um 'Mapa' e uma 'Carta' é que a Carta:",
      alternativas: [
        "Possui escala média ou grande e permite avaliar pormenores com precisão.", // Correta (A)
        "É sempre em escala pequena.",
        "É a representação esférica da Terra.",
        "Não pode conter legendas.",
        "É produzida apenas por satélites."
      ],
      correta: 0,
      explicacao: "Cartas possuem maior grau de detalhamento e precisão compatível com escalas médias ou grandes.",
      dica: "A carta é mais detalhada que o mapa geral."
    },
    {
      id: "cart-50",
      topic: "Produtos por Imagem",
      pergunta: "O 'Mosaico' cartográfico é definido como:",
      alternativas: [
        "Um mapa desenhado à mão.",
        "Um conjunto de fotos de uma área específica montadas como uma única fotografia.", // Correta (B)
        "Uma representação em vidro.",
        "A transformação de uma foto em projeção ortogonal.",
        "O registo de radar."
      ],
      correta: 1,
      explicacao: "É o conjunto de fotos recortadas e montadas técnica e artisticamente.",
      dica: "Um quebra-cabeça de fotografias aéreas."
    },
    {
      id: "cart-51",
      topic: "Ortofotocarta",
      pergunta: "A 'Ortofotocarta' diferencia-se da fotografia comum por ser:",
      alternativas: [
        "Uma imagem meramente ilustrativa.",
        "Exclusivamente em preto e branco.",
        "Uma ortofotografia georreferenciada e complementada por símbolos e linhas.", // Correta (C)
        "Um desenho feito à mão.",
        "A única sem escala."
      ],
      correta: 2,
      explicacao: "É resultado da transformação de uma foto original, sendo georreferenciada e contendo informações planimétricas.",
      dica: "Foto tratada que funciona como mapa."
    }
  ]
};