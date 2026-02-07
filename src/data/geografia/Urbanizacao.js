export const urbanizacaoBrasileiraData = {
  titulo: "Urbanização e Problemas Urbanos no Brasil",
  descricao: "Questões extraídas do material sobre o processo de urbanização, rede urbana, hierarquia das cidades e desafios socioespaciais.",
  questoes: [
    {
      id: "urb-pdf-01",
      topic: "Conceitos Básicos",
      pergunta: "Ao diferenciar os conceitos de 'cidade' e 'município', o material estabelece que:",
      alternativas: [
        "Município é um termo genérico para qualquer área urbana densamente povoada.",
        "Cidade é a unidade da divisão político-administrativa, composta por sede e distritos.",
        "Município é a unidade política que pode conter tanto zonas urbanas quanto rurais.", // Correta (C)
        "Cidade e município são sinónimos perfeitos na legislação brasileira atual.",
        "O município é delimitado exclusivamente pelo perímetro urbano legal."
      ],
      correta: 2,
      explicacao: "O município é uma unidade da divisão político-administrativa do Brasil que pode ter zonas urbanas (cidade) e rurais (campo).",
      dica: "Pense no município como a divisão política maior."
    },
    {
      id: "urb-pdf-02",
      topic: "Processo de Urbanização",
      pergunta: "Uma sociedade é considerada formalmente 'urbana' quando:",
      alternativas: [
        "A maioria das suas cidades possui mais de 100 mil habitantes.",
        "Mais de 90% do território é ocupado por asfalto e betão.",
        "O setor industrial ultrapassa o setor de serviços em geração de lucro.",
        "O governo federal extingue as atividades agrícolas no interior.",
        "A população das cidades supera numericamente a população rural." // Correta (E) - Movi para o final
      ],
      correta: 4,
      explicacao: "A urbanização ocorre quando o crescimento da população urbana é mais acelerado que o da rural, tornando-se a maioria.",
      dica: "É uma questão de maioria populacional."
    },
    {
      id: "urb-pdf-03",
      topic: "Histórico da Urbanização Brasileira",
      pergunta: "No Brasil, o marco histórico em que a população urbana superou a população rural pela primeira vez foi o ano de:",
      alternativas: [
        "1930",
        "1965", // Correta (B) - Movi para posição 1
        "1945",
        "1988",
        "2010"
      ],
      correta: 1,
      explicacao: "Foi em 1965 que a população urbana superou a população rural no Brasil.",
      dica: "Década de 60, auge da industrialização."
    },
    {
      id: "urb-pdf-04",
      topic: "Êxodo Rural",
      pergunta: "A 'repulsão' da força de trabalho do campo no Brasil, motor do êxodo rural, deveu-se principalmente a:",
      alternativas: [
        "Mecanização agrícola e estrutura fundiária concentradora.", // Correta (A) - Movi para o início
        "Falta de infraestrutura elétrica nas pequenas vilas do interior.",
        "Expansão da agroecologia e da agricultura de subsistência.",
        "Atração cultural exercida pelas novelas de televisão.",
        "Aumento dos salários rurais em comparação aos urbanos."
      ],
      correta: 0,
      explicacao: "A substituição do homem pela máquina e o monopólio das terras por uma elite expulsaram o trabalhador do campo.",
      dica: "Máquinas no campo + pouca terra para muitos."
    },
    {
      id: "urb-pdf-05",
      topic: "Segregação Espacial",
      pergunta: "A segregação socioespacial, marca da urbanização brasileira, manifesta-se através de:",
      alternativas: [
        "Bairros onde todas as classes sociais vivem em perfeita harmonia.",
        "Proibição de circulação de pessoas pobres em centros comerciais.",
        "Obrigação legal de morar perto do local de trabalho.",
        "Concentração de diferentes grupos sociais em áreas distintas e desiguais da cidade.", // Correta (D) - Movi para posição 3
        "Extinção das periferias por meio de programas habitacionais eficientes."
      ],
      correta: 3,
      explicacao: "Refere-se à separação entre bairros nobres dotados de infraestrutura e assentamentos precários e periféricos.",
      dica: "Divisão entre o centro rico e a periferia pobre."
    },
    {
      id: "urb-pdf-06",
      topic: "Rede Urbana e Industrialização",
      pergunta: "A rede de cidades brasileira reflete as desigualdades do seu processo industrial, resultando em:",
      alternativas: [
        "Uma distribuição equitativa de metrópoles por todos os estados.",
        "Uma rede urbana totalmente independente da economia global.",
        "Forte concentração na região Sudeste e vazios demográficos no interior.", // Correta (C)
        "Predomínio de cidades pequenas como centros de decisão política.",
        "O fim das hierarquias entre cidades devido ao avanço da internet."
      ],
      correta: 2,
      explicacao: "A industrialização concentrou-se no Sudeste, gerando uma hierarquia urbana desigual e desarticulada.",
      dica: "O Sudeste é o coração urbano-industrial."
    },
    {
      id: "urb-pdf-07",
      topic: "Desmetropolização",
      pergunta: "O fenómeno da 'desmetropolização' observado recentemente no Brasil caracteriza-se por:",
      alternativas: [
        "Aumento da atração de cidades médias em relação às metrópoles saturadas.", // Correta (A) - Movi para o início
        "Esvaziamento total das grandes cidades brasileiras.",
        "Proibição da instalação de novas indústrias em São Paulo e Rio.",
        "Migração em massa da população urbana de volta para o campo.",
        "Extinção das regiões metropolitanas para criar municípios autónomos."
      ],
      correta: 0,
      explicacao: "Empresas e pessoas buscam alternativas às metrópoles saturadas, aumentando o crescimento das cidades médias.",
      dica: "Fuga do caos das metrópoles para o interior."
    },
    {
      id: "urb-pdf-08",
      topic: "Diferenças Regionais",
      pergunta: "Atualmente, qual região brasileira apresenta a MENOR taxa de urbanização, segundo o material?",
      alternativas: [
        "Sudeste",
        "Sul",
        "Centro-Oeste",
        "Norte",
        "Nordeste" // Correta (E)
      ],
      correta: 4,
      explicacao: "A região Nordeste é a que apresenta a menor taxa de urbanização no Brasil (73,4% em 2010).",
      dica: "Região com maior peso histórico da população rural."
    },
    {
      id: "urb-pdf-09",
      topic: "Conurbação",
      pergunta: "Define-se conurbação como o processo de:",
      alternativas: [
        "Criação de novos municípios a partir da divisão de um antigo.",
        "Crescimento horizontal de cidades cujas malhas urbanas se unem fisicamente.", // Correta (B) - Movi para posição 1
        "Construção de muralhas para separar cidades rivais.",
        "Deslocamento diário de trabalhadores entre cidades vizinhas.",
        "Transformação de áreas industriais em áreas residenciais de luxo."
      ],
      correta: 1,
      explicacao: "Ocorre quando o crescimento de cidades próximas faz com que as suas áreas urbanas se encontrem.",
      dica: "Mancha urbana contínua entre cidades."
    },
    {
      id: "urb-pdf-10",
      topic: "Regiões Metropolitanas",
      pergunta: "Segundo a Constituição de 1988, a competência legal para a criação de regiões metropolitanas cabe aos:",
      alternativas: [
        "Municípios envolvidos, via plebiscito.",
        "Órgãos federais como o IBGE.",
        "Presidente da República, por decreto.",
        "Estados da federação, através de leis estaduais.", // Correta (D) - Movi para posição 3
        "Conselhos comunitários de bairros periféricos."
      ],
      correta: 3,
      explicacao: "A Constituição de 1988 atribuiu aos estados a competência para criar regiões metropolitanas.",
      dica: "É uma decisão de nível estadual."
    },
    {
      id: "urb-pdf-11",
      topic: "Regiões Integradas (RIDE)",
      pergunta: "A diferença fundamental entre uma Região Metropolitana e uma RIDE (Região Integrada de Desenvolvimento) é que a RIDE:",
      alternativas: [
        "É composta apenas por municípios de um mesmo estado.",
        "Não possui uma metrópole centralizada como polo.",
        "Envolve municípios pertencentes a estados distintos e é criada por lei federal.", // Correta (C)
        "É administrada exclusivamente pelos prefeitos locais, sem intervenção estadual.",
        "Destina-se apenas à preservação ambiental, sem funções urbanas."
      ],
      correta: 2,
      explicacao: "As RIDEs abrangem municípios de estados diferentes (ex: DF, Petrolina-Juazeiro) e são criadas por lei complementar federal.",
      dica: "Estados diferentes = Lei Federal (RIDE)."
    },
    {
      id: "urb-pdf-12",
      topic: "Megalópole Brasileira",
      pergunta: "O conceito de 'Megalópole Brasileira' refere-se à região que interliga física e funcionalmente:",
      alternativas: [
        "As regiões metropolitanas de São Paulo e Rio de Janeiro.", // Correta (A) - Movi para o início
        "As metrópoles de Manaus e Belém.",
        "Os eixos urbanos de Brasília e Goiânia.",
        "O complexo industrial de Porto Alegre e Curitiba.",
        "A faixa litorânea entre Salvador e Recife."
      ],
      correta: 0,
      explicacao: "Embora debatida, a megalópole brasileira ligaria as áreas urbanas de SP e RJ, incluindo Campinas e Vale do Paraíba.",
      dica: "Eixo BR-116 (Dutra) entre as duas maiores metrópoles."
    },
    {
      id: "urb-pdf-13",
      topic: "Hierarquia Urbana",
      pergunta: "Na 'Hierarquia Urbana Atual', em contraste com a 'Clássica', observa-se que:",
      alternativas: [
        "As vilas só podem comunicar-se com cidades locais vizinhas.",
        "As metrópoles nacionais perderam o poder de comando sobre o território.",
        "As comunicações físicas por rodovias tornaram-se irrelevantes.",
        "A influência das cidades é medida apenas pela sua extensão territorial.",
        "Todos os níveis da rede estabelecem fluxos diretos entre si graças à tecnologia." // Correta (E) - Movi para o final
      ],
      correta: 4,
      explicacao: "O avanço tecnológico permite fluxos entre todos os níveis, eliminando a obrigatoriedade da escala degrau a degrau.",
      dica: "Pense na internet permitindo compras diretas da metrópole."
    },
    {
      id: "urb-pdf-14",
      topic: "REGIC 2018",
      pergunta: "O estudo REGIC (2018) do IBGE classifica os centros urbanos brasileiros em cinco grandes níveis. O nível mais elevado, ocupado isoladamente por São Paulo, é:",
      alternativas: [
        "Metrópole Nacional.",
        "Grande Metrópole Nacional.", // Correta (B) - Movi para posição 1
        "Cidade Global de Primeiro Nível.",
        "Centro Regional A.",
        "Polo de Comando Continental."
      ],
      correta: 1,
      explicacao: "O arranjo populacional de São Paulo ocupa, isoladamente, a posição de maior hierarquia como Grande Metrópole Nacional.",
      dica: "SP está no topo absoluto."
    },
    {
      id: "urb-pdf-15",
      topic: "REGIC 2018 - Metrópoles",
      pergunta: "De acordo com a última atualização da REGIC, qual destas cidades NÃO é uma capital estadual, mas é classificada como metrópole?",
      alternativas: [
        "Vitória (ES)",
        "Florianópolis (SC)",
        "Belém (PA)",
        "Campinas (SP)", // Correta (D) - Movi para posição 3
        "Manaus (AM)"
      ],
      correta: 3,
      explicacao: "Campinas é a única cidade que não é capital estadual a ser classificada como metrópole no estudo do IBGE.",
      dica: "Polo do interior paulista."
    },
    {
      id: "urb-pdf-16",
      topic: "Cidades Globais",
      pergunta: "O conceito de 'Cidade Global', aplicado a São Paulo e Rio de Janeiro, fundamenta-se na:",
      alternativas: [
        "Função de centro de gestão de redes mundiais e tomada de decisões políticas e económicas.", // Correta (A) - Movi para o início
        "Quantidade de turistas estrangeiros recebidos anualmente.",
        "Capacidade de produzir alimentos para o mercado mundial.",
        "Presença de arquitetura europeia nos centros históricos.",
        "Ausência de pobreza e desigualdade social em seus limites."
      ],
      correta: 0,
      explicacao: "Cidades globais são centros de comando de empresas transnacionais e mercados financeiros mundiais.",
      dica: "Poder de gestão e influência mundial."
    },
    {
      id: "urb-pdf-17",
      topic: "Déficit Habitacional",
      pergunta: "Para o cálculo do déficit habitacional, a Fundação João Pinheiro considera o 'ónus excessivo com aluguer', que ocorre quando:",
      alternativas: [
        "O aluguer compromete mais de 10% da renda de famílias ricas.",
        "O morador gasta metade do salário com condomínio de luxo.",
        "O valor do aluguer aumenta anualmente acima da inflação oficial.",
        "O governo cobra impostos sobre imóveis desocupados.",
        "Famílias que ganham até 3 salários mínimos gastam mais de 30% da renda com aluguer." // Correta (E) - Movi para o final
      ],
      correta: 4,
      explicacao: "O comprometimento de mais de 30% da renda familiar com aluguer em famílias de baixa renda define este critério.",
      dica: "Baixa renda + gasto elevado com moradia."
    },
    {
      id: "urb-pdf-18",
      topic: "Gentrificação",
      pergunta: "O processo de gentrificação caracteriza-se pela:",
      alternativas: [
        "Criação de hortas comunitárias em bairros de classe média.",
        "Construção de novas periferias financiadas pelo governo federal.",
        "Melhoria de uma área urbana que resulta na expulsão da população local pelo aumento do custo de vida.", // Correta (C) - Movi para posição 2
        "Substituição de prédios modernos por casarões históricos.",
        "Obrigação de os moradores pintarem as fachadas das casas."
      ],
      correta: 2,
      explicacao: "A valorização de uma área expulsa as populações originais que não conseguem arcar com os novos custos.",
      dica: "Enobrecimento que exclui os mais pobres."
    },
    {
      id: "urb-pdf-19",
      topic: "Mobilidade Urbana",
      pergunta: "A migração pendular, comum em regiões metropolitanas, define-se como:",
      alternativas: [
        "A mudança definitiva de residência para outro estado.",
        "O movimento diário de ir e vir entre a casa e o trabalho/estudo em cidades diferentes.", // Correta (B) - Movi para posição 1
        "O deslocamento de idosos para cidades litorâneas no verão.",
        "A viagem sazonal de trabalhadores para a colheita da soja.",
        "O fluxo de mercadorias por camião entre portos e indústrias."
      ],
      correta: 1,
      explicacao: "É um movimento regular de curta duração que não implica mudança de residência definitiva.",
      dica: "Como um pêndulo: vai e volta todo dia."
    },
    {
      id: "urb-pdf-20",
      topic: "Saneamento Básico",
      pergunta: "Em termos de saneamento básico no Brasil, os dados indicam que a situação mais crítica refere-se ao:",
      alternativas: [
        "Abastecimento de água tratada.",
        "Iluminação pública de avenidas centrais.",
        "Fornecimento de energia elétrica residencial.",
        "Recolha e tratamento de esgotos domésticos.", // Correta (D) - Movi para posição 3
        "Acesso à internet de banda larga."
      ],
      correta: 3,
      explicacao: "Enquanto 83% têm água tratada, apenas 50% têm esgoto recolhido e menos de 43% é tratado.",
      dica: "Tratar o esgoto é o maior desafio brasileiro."
    },
    {
      id: "urb-pdf-21",
      topic: "Gestão de Resíduos",
      pergunta: "A Política Nacional de Resíduos Sólidos (2010) definiu prazos para a erradicação dos 'lixões', considerando como destino adequado o(a):",
      alternativas: [
        "Aterro sanitário com drenagem de chorume e gases.", // Correta (A) - Movi para o início
        "Incineração em céu aberto.",
        "Lançamento em rios de grande caudal.",
        "Enterramento em praias desertas.",
        "Exportação de resíduos para países vizinhos."
      ],
      correta: 0,
      explicacao: "Os aterros sanitários são áreas onde resíduos são compactados e o solo é protegido da contaminação.",
      dica: "Lixão (errado) vs Aterro Sanitário (correto)."
    },
    {
      id: "urb-pdf-22",
      topic: "Problemas Ambientais Urbanos",
      pergunta: "Os deslizamentos de encostas nas cidades brasileiras são frequentemente agravados por:",
      alternativas: [
        "Uso de asfalto permeável em todas as ruas.",
        "Excesso de plantação de árvores frutíferas em morros.",
        "Retirada da vegetação nativa e ocupação de áreas de risco em encostas.", // Correta (C) - Movi para posição 2
        "Diminuição dos níveis de pluviosidade tropical.",
        "Construção de túneis de ventilação sob os morros."
      ],
      correta: 2,
      explicacao: "A ocupação irregular expõe o solo, facilitando o escorregamento de massas de terra pela gravidade e chuva.",
      dica: "Fator humano + relevo inclinado + chuva."
    },
    {
      id: "urb-pdf-23",
      topic: "Violência Urbana",
      pergunta: "Dentre as causas citadas para a explosão da violência urbana no Brasil, destaca-se:",
      alternativas: [
        "O excesso de policiamento nas periferias extremas.",
        "A distribuição equitativa de renda entre todos os cidadãos.",
        "A abundância de vagas de emprego qualificado para todos os migrantes.",
        "A proibição total do comércio informal nas calçadas.",
        "A omissão do Estado em prover direitos sociais como lazer e segurança." // Correta (E) - Movi para o final
      ],
      correta: 4,
      explicacao: "A ausência ou omissão do poder público, somada à desigualdade, gera ambientes propícios à criminalidade.",
      dica: "Falta de Estado nas áreas mais pobres."
    },
    {
      id: "urb-pdf-24",
      topic: "Autossegregação",
      pergunta: "O conceito de 'autossegregação urbana' refere-se ao fenómeno em que:",
      alternativas: [
        "O governo expulsa moradores de favelas para o interior.",
        "Classes de alto poder aquisitivo isolam-se voluntariamente em condomínios fechados.", // Correta (B) - Movi para posição 1
        "Trabalhadores informais criam associações de bairro para autogestão.",
        "A prefeitura proíbe a construção de prédios altos no centro.",
        "Imigrantes estrangeiros formam bairros exclusivos e fechados ao público."
      ],
      correta: 1,
      explicacao: "É uma escolha pessoal de grupos ricos por segurança e exclusividade, criando 'enclaves' urbanos.",
      dica: "Segregação por escolha (elite)."
    },
    {
      id: "urb-pdf-25",
      topic: "Economia Informal",
      pergunta: "A economia informal no Brasil, exemplificada pelos 'camelódromos', caracteriza-se por:",
      alternativas: [
        "Pagamento de impostos federais elevados via notas fiscais.",
        "Atividades com carteira assinada e direitos trabalhistas plenos.",
        "Domínio exclusivo de empresas multinacionais de tecnologia.",
        "Trabalho à margem da formalidade, sem registo de firma ou contribuição tributária.", // Correta (D) - Movi para posição 3
        "Uso de mão de obra altamente qualificada com mestrado e doutorado."
      ],
      correta: 3,
      explicacao: "Atividades sem registo e sem direitos sociais garantidos, muitas vezes fruto do desaquecimento do mercado.",
      dica: "Trabalho 'por conta própria' sem benefícios."
    },
    {
      id: "urb-pdf-26",
      topic: "Industrialização e Urbanização",
      pergunta: "A urbanização vertiginosa do século XX no Brasil coincidiu com:",
      alternativas: [
        "O período de maior expansão da economia brasileira e industrialização.", // Correta (A) - Movi para o início
        "O declínio do setor de serviços em São Paulo.",
        "O fim definitivo das desigualdades regionais.",
        "A redução drástica do número de habitantes das metrópoles.",
        "O investimento maciço do Estado apenas em infraestrutura rural."
      ],
      correta: 0,
      explicacao: "A industrialização (Era Vargas a JK) foi o motor que levou milhões às cidades.",
      dica: "Indústria = Urbanização acelerada."
    },
    {
      id: "urb-pdf-27",
      topic: "Regiões Metropolitanas de 1973",
      pergunta: "As primeiras nove regiões metropolitanas do Brasil, criadas em 1973, incluíam:",
      alternativas: [
        "Brasília, Manaus e Campinas.",
        "Maceió, Natal e João Pessoa.",
        "São Paulo, Porto Alegre e Salvador.", // Correta (C) - Movi para posição 2
        "Florianópolis, Vitória e Cuiabá.",
        "Teresina, Petrolina e Juazeiro."
      ],
      correta: 2,
      explicacao: "As pioneiras foram SP, Belém, BH, Curitiba, Fortaleza, Porto Alegre, Recife, RJ e Salvador.",
      dica: "As maiores capitais históricas."
    },
    {
      id: "urb-pdf-28",
      topic: "Metropolização",
      pergunta: "O estágio da 'metropolização' na urbanização brasileira foi marcado por:",
      alternativas: [
        "Redução da densidade populacional no litoral sudeste.",
        "Extinção das trocas comerciais entre o campo e a cidade.",
        "Nascimento de cidades exclusivamente rurais no interior de Minas.",
        "Fim da influência de São Paulo sobre os outros estados.",
        "Aumento considerável de cidades milionárias e grandes cidades médias." // Correta (E) - Movi para o final
      ],
      correta: 4,
      explicacao: "A aglomeração espacial resultou na formação de metrópoles com milhões de habitantes.",
      dica: "Inchaço das cidades e formação de polos regionais."
    },
    {
      id: "urb-pdf-29",
      topic: "Cidades Médias",
      pergunta: "Qual a vantagem competitiva que as cidades médias oferecem para atrair empresas fugindo das metrópoles?",
      alternativas: [
        "Ausência total de leis ambientais ou trabalhistas.",
        "Isenções fiscais, mão de obra mais barata e infraestrutura menos saturada.", // Correta (B) - Movi para posição 1
        "Proximidade exclusiva com portos internacionais de águas profundas.",
        "População composta exclusivamente por altos executivos estrangeiros.",
        "Clima mais frio, ideal para indústrias de alta tecnologia."
      ],
      correta: 1,
      explicacao: "Oferecem custos menores e vias de circulação mais transitáveis que os centros caóticos.",
      dica: "Menos custos e menos trânsito."
    },
    {
      id: "urb-pdf-30",
      topic: "Sazonalidade e Mobilidade",
      pergunta: "Diferente da migração pendular, o movimento populacional 'estacional' ou 'sazonal' está ligado a:",
      alternativas: [
        "Deslocamentos diários entre casa e faculdade.",
        "Mudança permanente de país por motivos políticos.",
        "Uso de transportes coletivos de massa em horários de pico.",
        "Épocas do ano específicas, como colheitas ou fluxos turísticos.", // Correta (D) - Movi para posição 3
        "Concentração de empresas de tecnologia em um único bairro."
      ],
      correta: 3,
      explicacao: "Ocorre em períodos cíclicos, não sendo um movimento diário como o pendular.",
      dica: "Pense em 'estações' do ano."
    }
  ]
};