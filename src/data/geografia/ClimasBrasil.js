export const climasBrasilData = {
  titulo: "Climas do Brasil",
  descricao: "Dinâmica climática, massas de ar, tipos de chuva e interpretação de climogramas brasileiros.",
  questoes: [
    {
      id: "clim-01",
      topic: "Massas de Ar",
      pergunta: "Qual massa de ar, apesar de ter origem continental, apresenta características de alta umidade e é responsável pelo grande volume de chuvas na região Norte e Centro-Oeste durante o verão?",
      alternativas: [
        "Massa Tropical Continental (mTc)",
        "Massa Polar Atlântica (mPa)",
        "Massa Equatorial Continental (mEc)", // Correta (C)
        "Massa Equatorial Atlântica (mEa)",
        "Massa Tropical Atlântica (mTa)"
      ],
      correta: 2,
      explicacao: "A mEc é úmida devido à intensa evapotranspiração da Floresta Amazônica, que libera vapor d'água na atmosfera.",
      dica: "Pense na floresta como uma 'bomba d'água'."
    },
    {
      id: "clim-02",
      topic: "Fenômeno da Friagem",
      pergunta: "O fenômeno da 'friagem', que consiste na queda brusca de temperatura na Amazônia Ocidental, ocorre devido a:",
      alternativas: [
        "Encontro de duas massas equatoriais.",
        "Influência de ventos vindos do Pacífico.",
        "Excessiva umidade da floresta.",
        "Avanço da Massa Polar Atlântica (mPa) pelo interior do continente.", // Correta (D)
        "Fenômeno El Niño nos rios."
      ],
      correta: 3,
      explicacao: "A mPa avança pelas planícies centrais da América do Sul e atinge o Norte do Brasil, baixando a temperatura.",
      dica: "A massa polar é a única capaz de trazer frio intenso."
    },
    {
      id: "clim-03",
      topic: "Amplitude Térmica",
      pergunta: "Em qual tipo climático brasileiro observa-se a maior amplitude térmica anual e as quatro estações do ano mais bem definidas?",
      alternativas: [
        "Clima Equatorial Úmido",
        "Clima Tropical Semiárido",
        "Clima Tropical de Altitude",
        "Clima Litorâneo Úmido",
        "Clima Subtropical Úmido" // Correta (E)
      ],
      correta: 4,
      explicacao: "O clima Subtropical, por estar abaixo do Trópico de Capricórnio, apresenta verões quentes e invernos rigorosos, gerando grande variação térmica.",
      dica: "É o clima característico da Região Sul."
    },
    {
      id: "clim-04",
      topic: "Tipos de Chuva",
      pergunta: "As chamadas 'chuvas de relevo' ou orográficas, muito comuns na Serra do Mar, ocorrem quando:",
      alternativas: [
        "Uma massa de ar úmida encontra uma barreira montanhosa, sobe e condensa.", // Correta (A)
        "O ar quente sobe rapidamente e se resfria (convecção).",
        "Ocorre o encontro de uma massa fria com uma quente (frente).",
        "A evaporação dos rios é intensa.",
        "Ventos secos descem a serra."
      ],
      correta: 0,
      explicacao: "O relevo obriga a massa de ar a subir, causando o resfriamento e a precipitação na encosta.",
      dica: "Relevo = Barreira."
    },
    {
      id: "clim-05",
      topic: "Rios Voadores",
      pergunta: "A expressão 'Rios Voadores' refere-se ao processo de:",
      alternativas: [
        "Poluição atmosférica viajando para o Sul.",
        "Transporte de umidade da Amazônia para o Centro-Sul do Brasil.", // Correta (B)
        "Fluxo de sedimentos para o Pantanal.",
        "Transbordamento do Rio Amazonas.",
        "Correntes marítimas quentes."
      ],
      correta: 1,
      explicacao: "A umidade da Amazônia é barrada pelos Andes e redirecionada para o Sul, alimentando as chuvas nessas regiões.",
      dica: "É a floresta 'exportando' chuva."
    },
    {
      id: "clim-06",
      topic: "Clima Semiárido",
      pergunta: "Por que as massas de ar úmidas chegam com pouca umidade ao Sertão nordestino?",
      alternativas: [
        "Porque o Sertão está em zona de alta pressão.",
        "Devido às altas temperaturas que impedem a condensação.",
        "Porque perdem umidade ao cruzar barreiras de relevo (Planalto da Borborema).", // Correta (C)
        "Porque a vegetação absorve toda a água antes.",
        "Por causa do fenômeno La Niña."
      ],
      correta: 2,
      explicacao: "As massas precipitam sua umidade antes de chegar ao Sertão, muitas vezes barradas pelo relevo.",
      dica: "Elas chegam ao destino já 'secas'."
    },
    {
      id: "clim-07",
      topic: "Classificação de Strahler",
      pergunta: "A classificação climática de Arthur Strahler diferencia os climas brasileiros com base em qual critério principal?",
      alternativas: [
        "Dinâmica e movimentação das massas de ar.", // Correta (A)
        "Médias de temperatura mínima.",
        "Tipos de solo.",
        "Proximidade dos trópicos.",
        "Volume de radiação solar."
      ],
      correta: 0,
      explicacao: "Strahler foca na origem e no deslocamento das massas de ar para definir as zonas climáticas.",
      dica: "Strahler foca no 'movimento'."
    },
    {
      id: "clim-08",
      topic: "Clima Tropical de Altitude",
      pergunta: "O Clima Tropical de Altitude diferencia-se do Tropical Típico principalmente por apresentar:",
      alternativas: [
        "Verões secos e invernos chuvosos.",
        "Baixa amplitude térmica.",
        "Domínio constante da mTc.",
        "Temperaturas médias mais baixas e ocorrência de geadas eventuais.", // Correta (D)
        "Ausência de chuvas orográficas."
      ],
      correta: 3,
      explicacao: "A altitude reduz a temperatura média, resultando em invernos mais frios.",
      dica: "Quanto mais alto, mais frio."
    },
    { 
      id: "clim-09",
      topic: "Friagem", 
      pergunta: "No inverno, o fenômeno da 'Friagem' atinge o Acre, derrubando a temperatura. Ele é causado pela:", 
      alternativas: [
        "Massa Equatorial Continental", 
        "Massa Tropical Atlântica", 
        "Corrente de Humboldt", 
        "El Niño",
        "Massa Polar Atlântica" // Correta (E)
      ], 
      correta: 4, 
      explicacao: "A Massa Polar Atlântica (mPa) avança pelo interior e causa o choque térmico no Norte.", 
      dica: "Friagem = Massa Polar." 
    },
    {
      id: "clim-10",
      topic: "Classificações Climáticas",
      pergunta: "A classificação climática de Strahler é a mais cobrada em concursos pois prioriza:",
      alternativas: [
        "Apenas as médias anuais de pluviosidade.",
        "A dinâmica das massas de ar e os elementos climáticos.", // Correta (B)
        "O tipo de vegetação nativa.",
        "A altitude das bacias hidrográficas.",
        "A medição da pressão atmosférica."
      ],
      correta: 1,
      explicacao: "Strahler baseia-se nos elementos e fatores climáticos, com foco especial na dinâmica das massas de ar.",
      dica: "Pense no movimento do ar como motor do clima."
    },
    {
      id: "clim-11",
      topic: "Características Gerais",
      pergunta: "Sobre as características gerais do território brasileiro, é correto afirmar que:",
      alternativas: [
        "A amplitude térmica é alta em todo o território.",
        "O clima temperado domina 50% do país.",
        "92% do território encontra-se na zona intertropical, predominando climas quentes.", // Correta (C)
        "O litoral sofre pouca influência das massas oceânicas.",
        "O volume de radiação solar é baixo no Norte."
      ],
      correta: 2,
      explicacao: "O Brasil possui 92% do território na zona intertropical, com predomínio de climas quentes e úmidos.",
      dica: "O Brasil é essencialmente um país tropical."
    },
    {
      id: "clim-12",
      topic: "Massa Equatorial Continental",
      pergunta: "A massa Equatorial continental (mEc), responsável por grande parte da umidade na região Norte, possui como característica:",
      alternativas: [
        "Ser uma massa quente e úmida que se forma sobre a floresta Amazônica.", // Correta (A)
        "Ser fria e seca.",
        "Formar-se no Oceano Atlântico.",
        "Ser quente e seca.",
        "Atuar exclusivamente no inverno."
      ],
      correta: 0,
      explicacao: "A mEc forma-se na floresta Amazônica e atua no continente, sendo quente e muito úmida.",
      dica: "A floresta funciona como uma 'fábrica' de umidade."
    },
    {
      id: "clim-13",
      topic: "Clima Equatorial Úmido",
      pergunta: "O climograma de São Gabriel da Cachoeira (AM) revela uma característica típica do clima Equatorial Úmido:",
      alternativas: [
        "Estação seca bem definida.",
        "Temperaturas abaixo de 10°C no inverno.",
        "Índice pluviométrico baixo.",
        "Chuvas concentradas em dezembro.",
        "Baixa amplitude térmica anual e altas médias de temperatura." // Correta (E)
      ],
      correta: 4,
      explicacao: "O clima Equatorial Úmido apresenta alta temperatura média (25°C) e baixa amplitude térmica anual.",
      dica: "Nesse clima, quase não há diferença entre 'verão' e 'inverno'."
    },
    {
      id: "clim-14",
      topic: "Dinâmica Pluviométrica",
      pergunta: "As chuvas convectivas, comuns na região Amazônica, são ocasionadas prioritariamente por:",
      alternativas: [
        "Encontro de massas com barreiras montanhosas.",
        "Passagem rápida de frentes frias.",
        "Ascensão e resfriamento do ar úmido e quente (movimento vertical).", // Correta (C)
        "Efeito da maritimidade.",
        "Ausência de radiação solar."
      ],
      correta: 2,
      explicacao: "As chuvas convectivas ocorrem pela subida do ar quente e úmido, comum em dias de muito calor.",
      dica: "Convecção = movimento vertical do ar."
    },
    {
      id: "clim-15",
      topic: "Clima Tropical",
      pergunta: "O clima Tropical (ou Subúmido), que abrange o Centro-Oeste, caracteriza-se por:",
      alternativas: [
        "Chuvas abundantes o ano todo.",
        "Apresentar nítida sazonalidade: verão chuvoso e inverno seco.", // Correta (B)
        "Possuir temperaturas sempre abaixo de 10°C.",
        "Ser controlado apenas pela mEa.",
        "Amplitude térmica anual nula."
      ],
      correta: 1,
      explicacao: "O clima Tropical apresenta sazonalidade pluviométrica, com verão úmido e inverno seco.",
      dica: "Verão chove, Inverno seca."
    },
    {
      id: "clim-16",
      topic: "Massa Polar Atlântica",
      pergunta: "A massa Polar atlântica (mPa) exerce influência no clima Tropical brasileiro ao provocar:",
      alternativas: [
        "Aumento da umidade no Sertão.",
        "Formação de furacões.",
        "Elevação das temperaturas.",
        "Extinção da seca.",
        "Queda de temperatura no Sul, Sudeste e Centro-Oeste no inverno." // Correta (E)
      ],
      correta: 4,
      explicacao: "A mPa é responsável por provocar a queda de temperatura nessas regiões ao avançar pelo continente.",
      dica: "É a massa que traz o 'frio'."
    },
    {
      id: "clim-17",
      topic: "Ocorrência Regional",
      pergunta: "O clima Tropical Semiárido é encontrado prioritariamente em qual porção do território?",
      alternativas: [
        "Litoral sul de São Paulo.",
        "Grande parte do Sertão nordestino e norte de Minas Gerais.", // Correta (B)
        "Região serrana do Rio.",
        "Rio Grande do Sul.",
        "Extremo oeste do Acre."
      ],
      correta: 1,
      explicacao: "O Semiárido ocorre no Sertão nordestino e no norte de Minas Gerais.",
      dica: "Associe ao Polígono das Secas."
    },
    {
      id: "clim-18",
      topic: "Fatores do Semiárido",
      pergunta: "Por que as massas de ar mEc e mTa chegam secas ao Sertão nordestino?",
      alternativas: [
        "Porque já nascem secas.",
        "Ausência de ventos alísios.",
        "O Sertão é abaixo do nível do mar.",
        "Perdem a umidade ao cruzar barreiras de relevo ou longas distâncias.", // Correta (D)
        "Resfriamento do oceano."
      ],
      correta: 3,
      explicacao: "As massas perdem umidade ao percorrer longas distâncias ou precipitar em barreiras como o Planalto da Borborema.",
      dica: "O relevo impede a passagem da chuva."
    },
    {
      id: "clim-19",
      topic: "Pluviometria do Semiárido",
      pergunta: "Uma característica marcante das chuvas no clima Tropical Semiárido é:",
      alternativas: [
        "Serem distribuídas equitativamente.",
        "Ocorrerem apenas como neve.",
        "Índices superiores a 3000 mm.",
        "Serem causadas apenas pela vegetação.",
        "Serem escassas e mal distribuídas, concentradas em curto período." // Correta (E)
      ],
      correta: 4,
      explicacao: "O clima possui pouca quantidade de chuvas e estas são mal distribuídas temporalmente.",
      dica: "Pouca água e concentrada."
    },
    {
      id: "clim-20",
      topic: "Chuvas de Relevo",
      pergunta: "No clima Litorâneo Úmido, o encontro da mTa com barreiras como a Serra do Mar provoca:",
      alternativas: [
        "Chuvas convectivas.",
        "Chuvas de relevo (orográficas).", // Correta (B)
        "Estiagem absoluta.",
        "Ventos secos.",
        "Tornados."
      ],
      correta: 1,
      explicacao: "O encontro com relevos acidentados provoca chuvas de relevo.",
      dica: "O ar 'sobe' a montanha, resfria e chove."
    },
    {
      id: "clim-21",
      topic: "Sazonalidade Litorânea",
      pergunta: "Diferente do Sudeste, o clima Litorâneo Úmido no Nordeste (ex: Maceió) apresenta:",
      alternativas: [
        "Invernos rigorosos.",
        "Ausência de mTa.",
        "Verão seco e inverno chuvoso.", // Correta (C)
        "Amplitude térmica alta.",
        "Chuvas concentradas no verão."
      ],
      correta: 2,
      explicacao: "No Nordeste litorâneo, a pluviosidade se concentra no outono/inverno.",
      dica: "Pico de chuva no meio do ano."
    },
    {
      id: "clim-22",
      topic: "Chuvas Frontais",
      pergunta: "As chuvas frontais no litoral brasileiro resultam do encontro das massas:",
      alternativas: [
        "mPa e mTa.", // Correta (A)
        "mEc e mEa.",
        "mTc e mEc.",
        "mPa e mTc.",
        "mTa e mEa."
      ],
      correta: 0,
      explicacao: "O encontro da Polar (fria) com a Tropical (quente) gera chuvas frontais.",
      dica: "Choque térmico de massas."
    },
    {
      id: "clim-23",
      topic: "Tropical de Altitude",
      pergunta: "O clima Tropical de Altitude ocorre principalmente em:",
      alternativas: [
        "Planícies do Pantanal.",
        "Vale do Amazonas.",
        "Litoral do RS.",
        "Regiões serranas do Sudeste (RJ, SP, MG, ES).", // Correta (D)
        "Planalto de Roraima."
      ],
      correta: 3,
      explicacao: "Típico das serras do Sudeste.",
      dica: "Altitude no Sudeste."
    },
    {
      id: "clim-24",
      topic: "Tropical de Altitude - Características",
      pergunta: "Uma característica do Tropical de Altitude em relação ao Tropical comum é:",
      alternativas: [
        "Estação seca no verão.",
        "Baixa pluviosidade.",
        "Domínio da mTc.",
        "Amplitude nula.",
        "Temperaturas mais amenas devido à elevação." // Correta (E)
      ],
      correta: 4,
      explicacao: "Temperaturas entre 15°C e 21°C devido à altitude.",
      dica: "Mais alto = mais fresco."
    },
    {
      id: "clim-25",
      topic: "Clima Subtropical",
      pergunta: "O clima Subtropical Úmido (Região Sul) destaca-se por possuir:",
      alternativas: [
        "A maior amplitude térmica anual do país.", // Correta (A)
        "Médias sempre acima de 30°C.",
        "Seca absoluta no verão.",
        "Ausência de geadas.",
        "A menor pluviosidade."
      ],
      correta: 0,
      explicacao: "Verões quentes e invernos frios geram alta variação térmica.",
      dica: "Estações muito diferentes."
    },
    {
      id: "clim-26",
      topic: "Regularidade Pluviométrica",
      pergunta: "No clima Subtropical, as chuvas são:",
      alternativas: [
        "Inexistentes no inverno.",
        "Concentradas em janeiro.",
        "Irregulares.",
        "Regulares ao longo do ano, sem estação seca definida.", // Correta (D)
        "Concentradas no outono."
      ],
      correta: 3,
      explicacao: "O clima Subtropical tem chuvas bem distribuídas o ano todo.",
      dica: "Chove sempre."
    },
    {
      id: "clim-27",
      topic: "Estações do Ano",
      pergunta: "Qual domínio climático brasileiro apresenta as quatro estações do ano bem definidas?",
      alternativas: [
        "Equatorial.",
        "Semiárido.",
        "Subtropical Úmido.", // Correta (C)
        "Litorâneo.",
        "Tropical."
      ],
      correta: 2,
      explicacao: "O Subtropical é o que mais se assemelha aos climas temperados.",
      dica: "Sul do Brasil."
    },
    {
      id: "clim-28",
      topic: "Friagem",
      pergunta: "A 'friagem' na Amazônia ocidental é provocada pela:",
      alternativas: [
        "mEc.",
        "mTa.",
        "mTc.",
        "Chegada da massa Polar atlântica (mPa).", // Correta (D)
        "Ausência de ventos."
      ],
      correta: 3,
      explicacao: "Frentes frias (mPa) atingem o sul da região Equatorial.",
      dica: "Ar polar no norte."
    },
    {
      id: "clim-29",
      topic: "Interpretação de Climograma",
      pergunta: "Um climograma com temperaturas constantes e chuvas altas e regulares indica o clima:",
      alternativas: [
        "Tropical.",
        "Subtropical.",
        "Semiárido.",
        "Equatorial Úmido.", // Correta (D)
        "Atlântico."
      ],
      correta: 3,
      explicacao: "Sempre quente e sempre chuvoso = Equatorial.",
      dica: "Linha reta no topo."
    },
    {
      id: "clim-30",
      topic: "Interpretação de Climograma",
      pergunta: "Um climograma com colunas de chuva em 'U' (chuva no verão, seca no inverno) identifica o clima:",
      alternativas: [
        "Tropical (Subúmido).", // Correta (A)
        "Equatorial.",
        "Subtropical.",
        "Litorâneo (NE).",
        "Altitude."
      ],
      correta: 0,
      explicacao: "Sazonalidade clássica: Verão chuvoso, Inverno seco.",
      dica: "Formato de U ou V nas barras."
    },
    {
      id: "clim-31",
      topic: "Interpretação de Climograma",
      pergunta: "Temperaturas altas e colunas de chuva muito baixas o ano todo representam o clima:",
      alternativas: [
        "Subtropical.",
        "Equatorial.",
        "Tropical Semiárido.", // Correta (C)
        "Litorâneo.",
        "Altitude."
      ],
      correta: 2,
      explicacao: "Calor e seca predominante.",
      dica: "Barras quase inexistentes."
    },
    {
      id: "clim-32",
      topic: "Interpretação de Climograma",
      pergunta: "Climograma com pico de chuvas entre maio e julho (inverno) identifica o:",
      alternativas: [
        "Equatorial.",
        "Tropical.",
        "Subtropical.",
        "Semiárido.",
        "Litorâneo Úmido (Nordeste)." // Correta (E)
      ],
      correta: 4,
      explicacao: "No litoral nordestino chove mais no meio do ano.",
      dica: "Inverno chuvoso."
    },
    {
      id: "clim-33",
      topic: "Interpretação de Climograma",
      pergunta: "Linha de temperatura em 'vale' profundo no meio do ano (frio) e chuva constante define o:",
      alternativas: [
        "Equatorial.",
        "Subtropical Úmido.", // Correta (B)
        "Semiárido.",
        "Litorâneo.",
        "Tropical."
      ],
      correta: 1,
      explicacao: "Grande variação térmica e chuva regular.",
      dica: "Frio no meio do ano."
    },
    {
      id: "clim-34",
      topic: "Strahler",
      pergunta: "A metodologia de Strahler analisa o clima através da:",
      alternativas: [
        "Latitude exclusiva.",
        "Radiação solar.",
        "Quantidade de rios.",
        "Dinâmica das massas de ar.", // Correta (D)
        "Vegetação."
      ],
      correta: 3,
      explicacao: "Baseia-se na movimentação das massas.",
      dica: "Dinâmica atmosférica."
    },
    {
      id: "clim-35",
      topic: "Fenômenos do Sul",
      pergunta: "No clima Subtropical, geadas e neve são causadas pela:",
      alternativas: [
        "mEc.",
        "mTa.",
        "mPa durante o inverno.", // Correta (C)
        "mTc.",
        "mEa."
      ],
      correta: 2,
      explicacao: "A massa polar derruba as temperaturas.",
      dica: "Frio extremo."
    },
    {
      id: "clim-36",
      topic: "Tropical - Ocorrência",
      pergunta: "O clima Tropical domina a maior parte do país, abrangendo:",
      alternativas: [
        "Apenas o Sul.",
        "Grande parte de GO, DF, MS, SP, MG, BA.", // Correta (B)
        "Somente o litoral.",
        "Exclusivamente o Amazonas.",
        "Apenas o ES."
      ],
      correta: 1,
      explicacao: "É o clima do 'miolo' do Brasil.",
      dica: "Centro-Oeste e Sudeste."
    },
    {
      id: "clim-37",
      topic: "Massa Equatorial Atlântica",
      pergunta: "Qual o papel da massa Equatorial atlântica (mEa) no clima litorâneo?",
      alternativas: [
        "Provocar secas.",
        "Causar nevascas.",
        "Impedir a mTa.",
        "Ser a única responsável por granizo.",
        "Regular o clima no verão na faixa litorânea do Norte/Nordeste." // Correta (E)
      ],
      correta: 4,
      explicacao: "Atua no litoral norte e nordeste, trazendo calor e umidade.",
      dica: "Vento quente do mar."
    },
    {
      id: "clim-38",
      topic: "Mec e Umidade",
      pergunta: "A mEc é úmida principalmente devido a:",
      alternativas: [
        "Proximidade com a Antártida.",
        "Evapotranspiração da Floresta Amazônica e rios.", // Correta (B)
        "Ausência de montanhas.",
        "Influência da mTc.",
        "Degelo dos Andes."
      ],
      correta: 1,
      explicacao: "A floresta recicla a água para a atmosfera.",
      dica: "Rios voadores nascem aqui."
    },
    {
      id: "clim-39",
      topic: "Tropical de Altitude",
      pergunta: "Um climograma com temperatura caindo no meio do ano e verão chuvoso indica:",
      alternativas: [
        "Equatorial.",
        "Semiárido.",
        "Clima Tropical de Altitude.", // Correta (C)
        "Litorâneo.",
        "Tropical Continental."
      ],
      correta: 2,
      explicacao: "Inverno ameno/frio e seco; verão quente e chuvoso.",
      dica: "Serras do Sudeste."
    }
  ]
};