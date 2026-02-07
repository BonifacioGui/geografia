export const populacaoData = {
  titulo: "Demografia: População Brasileira",
  introducao: "Estudo da dinâmica, estrutura e distribuição da população no território nacional.",
  questoes: [
    {
      id: "pop-01",
      topic: "Transição Demográfica",
      pergunta: "O Brasil vive um estágio avançado de transição demográfica. Qual das alternativas abaixo descreve corretamente uma consequência atual desse processo?",
      alternativas: [
        "Aumento explosivo da taxa de natalidade em áreas rurais.",
        "Equilíbrio perfeito entre a população masculina e feminina.",
        "Redução da expectativa de vida devido à urbanização.",
        "Estreitamento da base da pirâmide etária e aumento proporcional da população idosa.",
        "Interrupção total das migrações internas."
      ],
      correta: 3, // D
      explicacao: "A queda na fecundidade estreita a base (menos crianças), enquanto a melhoria na saúde alarga o topo (mais idosos).",
      dica: "Pense no envelhecimento populacional."
    },
    {
      id: "pop-02",
      topic: "Conceitos Demográficos",
      pergunta: "Um país que possui uma grande população absoluta, mas uma densidade demográfica relativamente baixa em relação ao seu território total, é classificado como:",
      alternativas: [
        "Populoso e pouco povoado.",
        "Povoado e pouco populoso.",
        "Povoado e populoso.",
        "Nem populoso, nem povoado.",
        "Saturado demograficamente."
      ],
      correta: 0, // A
      explicacao: "O Brasil é populoso (grande número total), mas pouco povoado (vazios demográficos).",
      dica: "Diferencie 'Total de Pessoas' de 'Pessoas por km²'."
    },
    {
      id: "pop-03",
      topic: "Migrações",
      pergunta: "O deslocamento diário de pessoas que moram em cidades vizinhas para trabalhar nos grandes centros é chamado de:",
      alternativas: [
        "Êxodo Rural.",
        "Transumância.",
        "Migração Pendular.",
        "Migração de Retorno.",
        "Nomadismo Moderno."
      ],
      correta: 2, // C
      explicacao: "A migração pendular é o movimento de 'vai e vem' diário, sem mudança de residência.",
      dica: "Movimento de um pêndulo."
    },
    {
      id: "pop-04",
      topic: "Taxa de Fecundidade",
      pergunta: "A taxa de fecundidade necessária para reposição é de 2,1. Sobre a realidade brasileira atual, é correto afirmar que:",
      alternativas: [
        "A taxa permanece estagnada em 2,1.",
        "A taxa brasileira caiu para cerca de 1,7, situando-se abaixo do nível de reposição.",
        "A taxa está acima de 3,5, gerando explosão demográfica.",
        "Houve aumento na fecundidade devido ao mercado de trabalho.",
        "A taxa é maior no Sul do que no Norte."
      ],
      correta: 1, // B
      explicacao: "A urbanização reduziu a média de filhos para 1,7, indicando futura diminuição populacional.",
      dica: "Menos de 2 filhos por casal."
    },
    {
      id: "pop-05",
      topic: "História",
      pergunta: "Na década de 1930 (Era Vargas), qual medida foi adotada para controlar a entrada de estrangeiros?",
      alternativas: [
        "Abertura total das fronteiras.",
        "Proibição total de portugueses.",
        "Expulsão de japoneses.",
        "Obrigação de trabalho no petróleo.",
        "Criação da Lei de Cotas (1934), limitando a entrada por nacionalidade."
      ],
      correta: 4, // E
      explicacao: "A Lei de Cotas visava proteger o mercado de trabalho nacional.",
      dica: "Nacionalismo de Vargas."
    },
    {
      id: "pop-06",
      topic: "Disparidades",
      pergunta: "A esperança de vida no Brasil apresenta variações regionais. Segundo o IBGE, qual o padrão observado?",
      alternativas: [
        "A região Norte possui a maior expectativa de vida.",
        "Não existem diferenças significativas.",
        "Os estados do Sul e Sudeste apresentam médias superiores à nacional.",
        "O Nordeste superou o Sul em 2010.",
        "A expectativa é maior na área rural."
      ],
      correta: 2, // C
      explicacao: "Melhores indicadores de saneamento no Sul/Sudeste resultam em maior longevidade.",
      dica: "Desenvolvimento socioeconômico regional."
    },
    {
      id: "pop-07",
      topic: "Crescimento Vegetativo",
      pergunta: "O crescimento vegetativo (ou natural) de uma população é obtido através de qual cálculo?",
      alternativas: [
        "Diferença entre a taxa de natalidade e a taxa de mortalidade.",
        "Soma da natalidade com o saldo migratório.",
        "Divisão da população pela área.",
        "Subtração de emigrantes por imigrantes.",
        "Multiplicação da fecundidade pela expectativa de vida."
      ],
      correta: 0, // A
      explicacao: "O crescimento natural foca apenas no balanço biológico (nascimentos - mortes).",
      dica: "Vegetativo = Biológico."
    },
    {
      id: "pop-08",
      topic: "Migração de Retorno",
      pergunta: "A partir da década de 1990, observa-se no Brasil o crescimento da 'Migração de Retorno', marcada pelo:",
      alternativas: [
        "Fluxo de jovens do Sudeste para lavouras do Nordeste.",
        "Saída massiva para a Europa.",
        "Movimento diário entre cidades vizinhas.",
        "Retorno de migrantes (principalmente nordestinos) para seus estados de origem.",
        "Abandono total das áreas urbanas."
      ],
      correta: 3, // D
      explicacao: "A desconcentração industrial incentivou muitos a voltarem para suas terras de origem.",
      dica: "Volta à terra natal."
    },
    {
      id: "pop-09",
      topic: "Migração Séc XXI",
      pergunta: "Sobre as migrações externas no Brasil no século XXI, destaca-se:",
      alternativas: [
        "A proibição de entrada de refugiados.",
        "O recebimento maior de imigrantes da América do Sul (venezuelanos, bolivianos).",
        "A maioria dos imigrantes vindo da Europa.",
        "O fim da entrada de estrangeiros.",
        "A migração forçada de africanos como principal fonte."
      ],
      correta: 1, // B
      explicacao: "Crises em vizinhos tornaram a migração intra-sul-americana a principal do período.",
      dica: "Vizinhos de continente."
    },
    {
      id: "pop-10",
      topic: "Políticas Anos 70",
      pergunta: "Na década de 1970, o Governo Militar incentivou a migração para Norte e Centro-Oeste visando:",
      alternativas: [
        "Diminuir a produção de soja.",
        "Transformar a Amazônia em santuário intocado.",
        "Levar a capital de volta para o Rio.",
        "Impedir a construção de rodovias.",
        "Ocupar os 'vazios demográficos' e garantir a segurança nacional."
      ],
      correta: 4, // E
      explicacao: "Lema 'Integrar para não entregar': ocupação da Amazônia e Cerrado.",
      dica: "Segurança Nacional."
    },
    { 
      id: "pop-11",
      topic: "Migrações Recentes", 
      pergunta: "Morar no interior e trabalhar na capital alguns dias da semana (home office híbrido) é uma forma de:", 
      alternativas: ["Pendularidade de Longa Distância", "Êxodo Urbano", "Transumância", "Nomadismo", "Migração Sazonal"], 
      correta: 0, // A
      explicacao: "É uma evolução da pendularidade, facilitada pela tecnologia.", 
      dica: "Ir e voltar, mas de longe." 
    },
    { 
      id: "pop-12",
      topic: "Fecundidade", 
      pergunta: "Se a Taxa de Fecundidade ficar abaixo de 2,1 por muito tempo, a população tende a:", 
      alternativas: ["Crescer para sempre.", "Zerar a mortalidade.", "Envelhecer e eventualmente diminuir.", "Ter mais crianças.", "Aumentar a base da pirâmide."], 
      correta: 2, // C
      explicacao: "Abaixo de 2,1 não há reposição completa dos pais.", 
      dica: "Sem reposição = encolhimento." 
    },
    { 
      id: "pop-13",
      topic: "IDH", 
      pergunta: "O Índice de Desenvolvimento Humano (IDH) é composto por:", 
      alternativas: [
        "Segurança, Saúde e Renda", 
        "Educação, Longevidade (Saúde) e Renda",
        "PIB, Inflação e Desemprego", 
        "Natalidade, Mortalidade e Migração", 
        "Educação, Meio Ambiente e Democracia"
      ], 
      correta: 1, // B
      explicacao: "Educação, Saúde e Renda formam o tripé do IDH.", 
      dica: "Saúde, Escola e Dinheiro." 
    },
    {
      id: "pop-14",
      topic: "Conceitos",
      pergunta: "Um país com elevada população absoluta, mas baixa densidade demográfica é:",
      alternativas: [
        "Povoado e pouco populoso.",
        "Urbano e subdesenvolvido.",
        "Densamente povoado e agrário.",
        "Populoso e pouco povoado.",
        "Emergente e de baixa natalidade."
      ],
      correta: 3, // D
      explicacao: "Populoso (total) vs Pouco Povoado (densidade).",
      dica: "Muita gente, mas muito espaço."
    },
    {
      id: "pop-15",
      topic: "Crescimento Vegetativo",
      pergunta: "O crescimento natural de uma população é a diferença entre:",
      alternativas: [
        "Imigração e emigração.",
        "População urbana e rural.",
        "Expectativa de vida e mortalidade infantil.",
        "População ativa e dependente.",
        "Taxa de natalidade e taxa de mortalidade."
      ],
      correta: 4, // E
      explicacao: "Crescimento vegetativo ignora migrações.",
      dica: "Nascimentos menos mortes."
    },
    {
      id: "pop-16",
      topic: "Queda da Fecundidade",
      pergunta: "Qual fator foi determinante para o declínio da fecundidade no Brasil pós-1960?",
      alternativas: [
        "Urbanização e inserção da mulher no mercado de trabalho.",
        "Aumento da mortalidade infantil.",
        "Proibição de contraceptivos.",
        "Expulsão de imigrantes.",
        "Redução da expectativa de vida."
      ],
      correta: 0, // A
      explicacao: "A vida urbana e a carreira feminina mudaram o planejamento familiar.",
      dica: "Mudança social da mulher."
    },
    {
      id: "pop-17",
      topic: "Transição Demográfica",
      pergunta: "A primeira fase da transição demográfica caracteriza-se por:",
      alternativas: [
        "Baixas taxas de natalidade e mortalidade.",
        "Queda brusca da natalidade.",
        "Elevadas taxas de natalidade e mortalidade (baixo crescimento).",
        "Envelhecimento acelerado.",
        "Explosão demográfica."
      ],
      correta: 2, // C
      explicacao: "Fase pré-industrial: nascia muito, morria muito.",
      dica: "Equilíbrio primitivo."
    },
    {
      id: "pop-18",
      topic: "Explosão Demográfica",
      pergunta: "A 'explosão demográfica' no Brasil ocorreu em meados do século XX devido a:",
      alternativas: [
        "Aumento repentino na fecundidade.",
        "Manutenção de alta natalidade e queda brusca da mortalidade.",
        "Chegada de 50 milhões de imigrantes.",
        "Extinção total de doenças.",
        "Retorno ao campo."
      ],
      correta: 1, // B
      explicacao: "A saúde melhorou (menos mortes), mas a natalidade continuou alta por um tempo.",
      dica: "Gap entre natalidade e mortalidade."
    },
    {
      id: "pop-19",
      topic: "Pirâmide Etária",
      pergunta: "O estreitamento da base de uma pirâmide etária indica:",
      alternativas: [
        "Aumento da mortalidade infantil.",
        "Crescimento descontrolado de jovens.",
        "Queda na expectativa de vida.",
        "Redução nas taxas de natalidade e fecundidade.",
        "Êxodo rural acelerado."
      ],
      correta: 3, // D
      explicacao: "Base = Crianças. Base estreita = Menos nascimentos.",
      dica: "Menos bebês."
    },
    {
      id: "pop-20",
      topic: "Envelhecimento",
      pergunta: "O alargamento do topo da pirâmide etária brasileira reflete:",
      alternativas: [
        "Aumento da expectativa de vida e melhoria na saúde.",
        "Necessidade de mais creches.",
        "Redução de aposentados.",
        "Predominância de homens jovens.",
        "Emigração de idosos."
      ],
      correta: 0, // A
      explicacao: "Topo = Idosos. Topo largo = Mais gente vivendo mais.",
      dica: "Longevidade."
    },
    {
      id: "pop-21",
      topic: "Bônus Demográfico",
      pergunta: "O 'Bônus Demográfico' ocorre quando:",
      alternativas: [
        "O número de crianças supera o de adultos.",
        "A proporção de pessoas em idade ativa é maior que a de dependentes.",
        "A população idosa é a principal força de trabalho.",
        "O governo premia famílias grandes.",
        "A mortalidade supera a natalidade."
      ],
      correta: 1, // B
      explicacao: "Janela econômica onde há mais gente trabalhando do que dependendo.",
      dica: "Mais braços para o trabalho."
    },
    {
      id: "pop-22",
      topic: "Distribuição",
      pergunta: "A distribuição da população brasileira é marcada por forte concentração:",
      alternativas: [
        "Nas fronteiras andinas.",
        "No interior da Amazônia.",
        "Na faixa litorânea e metrópoles próximas ao mar.",
        "Exclusivamente no Centro-Oeste.",
        "Ao longo do Rio São Francisco."
      ],
      correta: 2, // C
      explicacao: "Herança histórica da colonização e economia exportadora.",
      dica: "Perto do Oceano."
    },
    {
      id: "pop-23",
      topic: "Densidade",
      pergunta: "Qual região apresenta a MENOR densidade demográfica?",
      alternativas: [
        "Sudeste",
        "Sul",
        "Nordeste",
        "Centro-Oeste",
        "Norte"
      ],
      correta: 4, // E
      explicacao: "A região Norte é a maior em área, diluindo sua população.",
      dica: "Vazio demográfico relativo."
    },
    {
      id: "pop-24",
      topic: "Imigração Séc XIX",
      pergunta: "Imigrantes europeus vieram ao Brasil no séc. XIX atraídos principalmente por:",
      alternativas: [
        "Trabalho nas lavouras de café.",
        "Indústrias em Brasília.",
        "Garimpo de Serra Pelada.",
        "Petróleo no pré-sal.",
        "Fuga de desastres naturais."
      ],
      correta: 0, // A
      explicacao: "Substituição da mão de obra escrava na economia cafeeira.",
      dica: "Ciclo do Café."
    },
    {
      id: "pop-25",
      topic: "Imigração Japonesa",
      pergunta: "A imigração japonesa concentrou-se inicialmente em:",
      alternativas: [
        "Pernambuco e Paraíba.",
        "Amazonas.",
        "Rio Grande do Sul.",
        "São Paulo e Paraná.",
        "Minas Gerais."
      ],
      correta: 3, // D
      explicacao: "Interior de SP e Norte do PR foram os destinos principais.",
      dica: "Bairro da Liberdade (SP)."
    },
    {
      id: "pop-26",
      topic: "Migrações Séc XXI",
      pergunta: "No século XXI, o Brasil tornou-se destino de:",
      alternativas: [
        "Russos e Ucranianos.",
        "Haitianos e Venezuelanos (crises humanitárias).",
        "Canadenses.",
        "Australianos.",
        "Franceses."
      ],
      correta: 1, // B
      explicacao: "Crises no Haiti e Venezuela impulsionaram esses fluxos.",
      dica: "Vizinhos e Caribe."
    },
    {
      id: "pop-27",
      topic: "Êxodo Rural",
      pergunta: "A saída em massa do campo para as cidades denomina-se:",
      alternativas: [
        "Migração Pendular",
        "Transumância",
        "Êxodo Rural",
        "Migração de Retorno",
        "Nomadismo"
      ],
      correta: 2, // C
      explicacao: "Movimento que urbanizou o Brasil.",
      dica: "Campo -> Cidade."
    },
    {
      id: "pop-28",
      topic: "Migração Pendular",
      pergunta: "A migração diária entre cidade-dormitório e centro de trabalho é:",
      alternativas: [
        "Pendular",
        "Sazonal",
        "Definitiva",
        "Inter-regional",
        "Transumância"
      ],
      correta: 0, // A
      explicacao: "Movimento diário de ir e vir.",
      dica: "Pêndulo."
    },
    {
      id: "pop-29",
      topic: "Transumância",
      pergunta: "A transumância (migração sazonal) está ligada a:",
      alternativas: [
        "Mudança permanente.",
        "Viagens de férias.",
        "Fuga de conflitos.",
        "Home office.",
        "Ciclos climáticos ou épocas de colheita."
      ],
      correta: 4, // E
      explicacao: "Movimento temporário ligado a safras ou estações.",
      dica: "Sazonal."
    },
    {
      id: "pop-30",
      topic: "Migração de Retorno",
      pergunta: "A 'Migração de Retorno' caracteriza-se pelo:",
      alternativas: [
        "Fluxo para o exterior.",
        "Retorno de migrantes para seus estados de origem.",
        "Paulistas indo para a Amazônia.",
        "Abandono das cidades.",
        "Trabalho pendular."
      ],
      correta: 1, // B
      explicacao: "Volta para a terra natal devido à melhora econômica local.",
      dica: "O bom filho à casa torna."
    },
    {
      id: "pop-31",
      topic: "PEA",
      pergunta: "A População Economicamente Ativa (PEA) compreende:",
      alternativas: [
        "Apenas funcionários públicos.",
        "Todas as pessoas com conta bancária.",
        "Pessoas trabalhando ou procurando emprego ativamente.",
        "Crianças que trabalham.",
        "Apenas trabalhadores industriais."
      ],
      correta: 2, // C
      explicacao: "Ocupados + Desempregados (que buscam trabalho).",
      dica: "Quem move a economia."
    },
    {
      id: "pop-32",
      topic: "Malthus",
      pergunta: "Segundo Malthus, a fome seria causada porque:",
      alternativas: [
        "A população cresce em progressão geométrica e alimentos em aritmética.",
        "O clima esfriou.",
        "A tecnologia é complexa.",
        "As pessoas não querem trabalhar.",
        "Há muito desperdício."
      ],
      correta: 0, // A
      explicacao: "População (PG) cresce mais rápido que comida (PA).",
      dica: "PG vs PA."
    },
    {
      id: "pop-33",
      topic: "Reformista",
      pergunta: "A Teoria Reformista defende que:",
      alternativas: [
        "O controle de natalidade deve ser obrigatório.",
        "O planeta está cheio.",
        "A tecnologia deve ser proibida.",
        "A pobreza é a causa do excesso populacional, não a consequência.",
        "Apenas ricos devem ter filhos."
      ],
      correta: 3, // D
      explicacao: "Melhore a vida das pessoas e elas terão menos filhos.",
      dica: "Justiça social reduz natalidade."
    },
    {
      id: "pop-34",
      topic: "Previdência",
      pergunta: "O envelhecimento populacional gera desafio para a previdência devido ao aumento da:",
      alternativas: [
        "População jovem.",
        "Taxa de mortalidade infantil.",
        "Migração pendular.",
        "Produção de brinquedos.",
        "Razão de dependência dos idosos."
      ],
      correta: 4, // E
      explicacao: "Menos gente pagando, mais gente recebendo.",
      dica: "Dependência."
    },
    {
      id: "pop-35",
      topic: "Terceirização",
      pergunta: "A 'Terceirização' da economia refere-se ao crescimento do:",
      alternativas: [
        "Setor Primário.",
        "Setor Secundário.",
        "Setor Terciário (Comércio/Serviços).",
        "Setor Quaternário.",
        "Subsistência."
      ],
      correta: 2, // C
      explicacao: "Comércio e serviços são os maiores empregadores hoje.",
      dica: "Serviços."
    },
    {
      id: "pop-36",
      topic: "Gênero",
      pergunta: "As mulheres são maioria na população brasileira porque:",
      alternativas: [
        "Nascem muito mais meninas.",
        "Os homens morrem mais cedo (violência/doenças).",
        "Mulheres não podem emigrar.",
        "Bônus demográfico.",
        "Homens trabalham no campo."
      ],
      correta: 1, // B
      explicacao: "Sobremortalidade masculina, principalmente jovem.",
      dica: "Mulheres vivem mais."
    },
    {
      id: "pop-37",
      topic: "Marcha para o Oeste",
      pergunta: "A 'Marcha para o Oeste' (Vargas) visava ocupar:",
      alternativas: [
        "Centro-Oeste e Norte.",
        "Litoral da Bahia.",
        "Interior de SP.",
        "Pampas.",
        "Fernando de Noronha."
      ],
      correta: 0, // A
      explicacao: "Ocupar os vazios do interior do Brasil.",
      dica: "Rumo ao interior."
    },
    {
      id: "pop-38",
      topic: "Frente Agrícola",
      pergunta: "Nos anos 70, a migração do Sul para o Centro-Oeste foi motivada por:",
      alternativas: [
        "Ouro em Minas.",
        "Desejo de morar em Brasília.",
        "Seca no RS.",
        "Esgotamento de terras no Sul e expansão da soja.",
        "Indústria em Manaus."
      ],
      correta: 3, // D
      explicacao: "Busca por novas terras baratas para o agronegócio.",
      dica: "Soja no Cerrado."
    }
  ]
};