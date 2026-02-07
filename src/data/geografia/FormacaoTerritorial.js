export const formacaoTerritorialData = {
  titulo: "Formação Territorial do Brasil",
  descricao: "Processo histórico de ocupação, tratados de limites, ciclos econômicos e a evolução da divisão política do território nacional.",
  questoes: [
    {
      id: "form-01",
      topic: "Conceitos de Território",
      pergunta: "Como pode ser definido o território nacional brasileiro conforme os conceitos geográficos oficiais?",
      alternativas: [
        "O espaço soberano do Estado, delimitado por fronteiras, onde se exerce o poder estatal.", // Correta (A) - Movi para o início
        "A área de livre circulação de mercadorias na América Latina.",
        "O espaço geográfico sem normas centrais definidas.",
        "Apenas as terras pertencentes originalmente à coroa portuguesa.",
        "A zona econômica exclusiva em águas internacionais."
      ],
      correta: 0, 
      explicacao: "O território é o espaço, limitado por fronteiras, no qual se exerce a soberania do Estado brasileiro.",
      dica: "Lembre-se das palavras 'Fronteiras' e 'Soberania'."
    },
    {
      id: "form-02",
      topic: "Tratados de Limites",
      pergunta: "Qual foi a importância do Tratado de Madri (1750) para a configuração do Brasil?",
      alternativas: [
        "Extinguiu as Capitanias Hereditárias.",
        "Garantiu a independência imediata das províncias.",
        "Foi o primeiro tratado a dividir o mundo entre Portugal e Espanha.",
        "Anexou o estado do Mato Grosso do Sul ao território.",
        "Estabeleceu o princípio do Uti possidetis, garantindo a posse de terras efetivamente ocupadas." // Correta (E) - Movi para o final
      ],
      correta: 4,
      explicacao: "O Tratado de Madri baseou-se no princípio do Uti possidetis (quem possui de fato, possui de direito), expandindo o Brasil além de Tordesilhas.",
      dica: "Esse tratado reconheceu a ocupação portuguesa no interior."
    },
    {
      id: "form-03",
      topic: "Dimensões e Localização",
      pergunta: "O Brasil é considerado um país de dimensões continentais. Sobre sua localização geográfica, é correto afirmar que:",
      alternativas: [
        "Possui a totalidade do seu território no Hemisfério Norte.",
        "É o maior país do mundo em extensão territorial contínua.",
        "Possui 92% do território na zona intertropical, entre os trópicos de Câncer e Capricórnio.", // Correta (C) - Movi para o meio
        "Não possui saída para o Oceano Atlântico.",
        "Está localizado totalmente na zona temperada do sul."
      ],
      correta: 2,
      explicacao: "A maior parte do Brasil situa-se na zona intertropical, o que influencia seu clima e biodiversidade.",
      dica: "Pense na predominância de climas quentes."
    },
    {
      id: "form-04",
      topic: "União Ibérica",
      pergunta: "Durante o período da União Ibérica (1580-1640), a linha do Tratado de Tordesilhas perdeu sua função prática. Qual foi a consequência disso para o Brasil?",
      alternativas: [
        "A imediata independência de São Paulo.",
        "A expansão luso-brasileira para o interior e para a bacia Amazônica.", // Correta (B) - Movi para posição 1
        "A expulsão de todos os jesuítas das missões.",
        "O fechamento dos portos para o comércio com a Inglaterra.",
        "A perda de territórios para a França Antártica."
      ],
      correta: 1,
      explicacao: "Sob uma única coroa, os colonos avançaram para o interior sem respeitar os limites antigos.",
      dica: "Sem barreira política, o avanço foi mais fácil."
    },
    {
      id: "form-05",
      topic: "Ciclos Econômicos",
      pergunta: "Qual ciclo econômico foi responsável por deslocar o eixo econômico e populacional do Nordeste para o Sudeste durante o período colonial?",
      alternativas: [
        "Ciclo da Cana-de-açúcar.",
        "Ciclo da Borracha.",
        "Ciclo do Café.",
        "Ciclo da Mineração (Ouro).", // Correta (D) - Movi para posição 3
        "Ciclo do Algodão."
      ],
      correta: 3,
      explicacao: "A descoberta de ouro em MG, GO e MT no século XVIII causou uma grande migração e a transferência da capital para o Rio de Janeiro em 1763.",
      dica: "Pense na mudança de Salvador para o Rio."
    },
    {
      id: "form-06",
      topic: "Tratado de Petrópolis",
      pergunta: "Em 1903, o Brasil incorporou o território do Acre através de negociações diplomáticas lideradas pelo Barão do Rio Branco. Esse acordo ficou conhecido como:",
      alternativas: [
        "Tratado de Madri.",
        "Tratado de Petrópolis.", // Correta (B) - Movi para posição 1
        "Tratado de Santo Ildefonso.",
        "Tratado de Badajoz.",
        "Tratado de Utrecht."
      ],
      correta: 1,
      explicacao: "O tratado resolveu o conflito com a Bolívia, comprando o Acre após a revolução liderada por Plácido de Castro.",
      dica: "Envolveu o Ciclo da Borracha."
    },
    {
      id: "form-07",
      topic: "Geopolítica do Século XX",
      pergunta: "Na década de 1940, o governo Vargas criou os 'Territórios Federais'. Qual era o objetivo principal dessa estratégia geopolítica?",
      alternativas: [
        "Facilitar a exploração de petróleo no litoral baiano.",
        "Dar autonomia política às capitais dos estados do Sul.",
        "Diminuir o número total de municípios no país.",
        "Substituir o modelo de estados pelo de províncias imperiais.",
        "Reforçar a vigilância e a soberania em áreas de fronteira vulneráveis." // Correta (E) - Movi para o final
      ],
      correta: 4,
      explicacao: "A criação visava povoar e proteger regiões remotas como Amapá, Roraima e Rondônia durante a 2ª Guerra Mundial.",
      dica: "Pense em 'Segurança Nacional'."
    },
    {
      id: "form-08",
      topic: "Divisão Administrativa Atual",
      pergunta: "Atualmente, o território brasileiro está dividido em 27 unidades federativas. Dessas unidades, quantas são Estados e qual é a exceção?",
      alternativas: [
        "26 Estados e 1 Distrito Federal.", // Correta (A) - Movi para o início
        "27 Estados e nenhum Distrito Federal.",
        "25 Estados e 2 Distritos Federais.",
        "24 Estados e 3 Territórios Federais.",
        "20 Estados e 7 Territórios."
      ],
      correta: 0,
      explicacao: "O Brasil possui 26 estados soberanos em suas competências e o Distrito Federal, onde fica Brasília.",
      dica: "A conta total fecha em 27."
    },
    {
      id: "form-09",
      topic: "Evolução Administrativa",
      pergunta: "No mapa do 'Império do Brazil' em 1822, as unidades que hoje conhecemos como Estados eram denominadas:",
      alternativas: [
        "Capitanias Reais",
        "Departamentos",
        "Territórios",
        "Províncias", // Correta (D)
        "Comarcas"
      ],
      correta: 3,
      explicacao: "Durante o período imperial, o Brasil era dividido administrativamente em províncias.",
      dica: "Termo utilizado antes da Proclamação da República."
    },
    {
      id: "form-10",
      topic: "Acre",
      pergunta: "A incorporação do Acre ao Brasil pelo Tratado de Petrópolis (1903) deu origem a uma unidade administrativa:",
      alternativas: [
        "Autônoma desde a sua criação como Estado da Federação",
        "Subordinada administrativamente ao Estado do Amazonas",
        "Gerida diretamente pelo poder central como Território Federal", // Correta (C)
        "Anexada como um prolongamento do território do Mato Grosso",
        "Classificada como Distrito Especial de Fronteira"
      ],
      correta: 2,
      explicacao: "O Acre foi anexado como Território Federal, uma unidade gerida diretamente pelo poder central.",
      dica: "Unidades geridas pela União antes de virarem estados."
    },
    {
      id: "form-11",
      topic: "Territórios Federais",
      pergunta: "Qual das alternativas descreve a lógica central da criação dos territórios federais na década de 1940?",
      alternativas: [
        "Incentivar a industrialização pesada no extremo norte",
        "Reforçar a presença do governo central em áreas pouco povoadas e vulneráveis", // Correta (B)
        "Aumentar a autonomia das elites locais em áreas remotas",
        "Atender a plebiscitos populares realizados nas fronteiras",
        "Dividir os estados do Sul para reduzir seu poder político"
      ],
      correta: 1,
      explicacao: "A criação visava a segurança das fronteiras e o aumento da presença governamental em áreas remotas e vulneráveis.",
      dica: "Pense em segurança nacional e controle de fronteiras."
    },
    {
      id: "form-12",
      topic: "Fernando de Noronha",
      pergunta: "O território federal de Fernando de Noronha, criado em 1942, teve qual destino após a Constituição de 1988?",
      alternativas: [
        "Tornou-se o menor estado da federação",
        "Permaneceu como território sob gestão direta da Marinha",
        "Foi transformado em um município do estado do Rio Grande do Norte",
        "Passou a integrar o território do Distrito Federal",
        "Foi anexado ao estado de Pernambuco" // Correta (E)
      ],
      correta: 4,
      explicacao: "Fernando de Noronha foi anexado ao estado de Pernambuco pela CF/1988.",
      dica: "Hoje é um distrito estadual de um estado nordestino."
    },
    {
      id: "form-13",
      topic: "Territórios Extintos",
      pergunta: "Os territórios de Ponta Porã e Iguaçu, criados em 1943, possuem em comum o fato de terem sido:",
      alternativas: [
        "Transformados em estados pela Constituição de 1988",
        "Renomeados para Mato Grosso do Sul e Paraná, respectivamente",
        "Extintos em 1946, retornando aos seus estados de origem", // Correta (C)
        "Anexados definitivamente ao Paraguai após conflitos",
        "Sede das primeiras usinas nucleares brasileiras"
      ],
      correta: 2,
      explicacao: "Ambos os territórios foram criados em 1943 e extintos em 1946.",
      dica: "Tiveram vida curta no mapa brasileiro."
    },
    {
      id: "form-14",
      topic: "Brasília",
      pergunta: "Entre os argumentos para a construção da nova capital, Brasília, destacava-se:",
      alternativas: [
        "A interiorização do povoamento e o desenvolvimento econômico regional", // Correta (A)
        "A necessidade de isolar o governo das pressões populares do litoral",
        "A criação de um polo industrial voltado para a exportação marítima",
        "A proteção contra ataques navais diretos de potências europeias",
        "A concentração de toda a produção agrícola do país em um único ponto"
      ],
      correta: 0,
      explicacao: "Os argumentos incluíam segurança nacional, interiorização do povoamento e desenvolvimento econômico.",
      dica: "Pense em levar o progresso para o centro do país."
    },
    {
      id: "form-15",
      topic: "Criação de Estados",
      pergunta: "A criação do estado do Mato Grosso do Sul em 1977 foi resultado da:",
      alternativas: [
        "Fusão com o antigo território de Ponta Porã",
        "Anexação de terras cedidas pela Bolívia",
        "Elevação do status de Território Federal",
        "Divisão administrativa do estado de Goiás",
        "Bipartição do estado de Mato Grosso" // Correta (E)
      ],
      correta: 4,
      explicacao: "Mato Grosso do Sul foi criado em 1977 a partir da bipartição do Mato Grosso.",
      dica: "Um estado gigante foi dividido em dois."
    },
    {
      id: "form-16",
      topic: "Criação de Estados",
      pergunta: "O estado do Tocantins, criado em 1988, surgiu a partir de qual processo administrativo?",
      alternativas: [
        "Elevação do Território Federal do Araguaia",
        "Bipartição do estado do Maranhão",
        "Desmembramento da porção norte de Goiás", // Correta (C)
        "Anexação de áreas lindeiras do Pará e Bahia",
        "Fusão dos territórios de Rio Branco e Amapá"
      ],
      correta: 2,
      explicacao: "O Tocantins foi criado em 1988 pela bipartição de Goiás.",
      dica: "Ocorreu na porção norte de um estado do Centro-Oeste."
    },
    {
      id: "form-17",
      topic: "Novos Estados Propostos",
      pergunta: "Em plebiscitos recentes, a criação de quais unidades federativas foi rejeitada pela população local?",
      alternativas: [
        "Gurgueia e Maranhão do Sul",
        "Tapajós e Carajás", // Correta (B)
        "Triângulo e Rio São Francisco",
        "Oiapoque e Juruá",
        "Solimões e Pantanal"
      ],
      correta: 1,
      explicacao: "Tapajós e Carajás foram propostas de novos estados rejeitadas em plebiscito no Pará.",
      dica: "Propostas de divisão do estado do Pará."
    },
    {
      id: "form-18",
      topic: "Economia-Arquipélago",
      pergunta: "O termo 'economia-arquipélago', que descreve o Brasil até meados do século XX, refere-se a:",
      alternativas: [
        "Uma rede de cidades litorâneas altamente integradas por ferrovias",
        "Um sistema de produção baseado exclusivamente em ilhas oceânicas",
        "A dependência econômica total de Portugal e Espanha após 1822",
        "Regiões isoladas entre si, com trocas internas fracas e voltadas ao exterior", // Correta (D)
        "O domínio das rotas fluviais da Amazônia sobre o resto do país"
      ],
      correta: 3,
      explicacao: "Refere-se a arquipélagos econômicos com pouca integração interna até a primeira metade do século XX.",
      dica: "Áreas que funcionavam como 'ilhas' de produção para exportação."
    },
    {
      id: "form-19",
      topic: "Industrialização",
      pergunta: "A partir da década de 1920, qual setor passou a ser o novo núcleo dinâmico da economia brasileira?",
      alternativas: [
        "Indústria, sobretudo em São Paulo", // Correta (A)
        "Mineração de ferro em Minas Gerais",
        "Extração de borracha no Amazonas",
        "Agricultura de subsistência no Nordeste",
        "Pecuária extensiva no Mato Grosso"
      ],
      correta: 0,
      explicacao: "A industrialização, iniciada fortemente em SP na década de 1920, tornou-se o núcleo dinâmico.",
      dica: "Mudança do foco agrário-exportador para o urbano-industrial."
    },
    {
      id: "form-20",
      topic: "Integração Territorial",
      pergunta: "Qual projeto governamental da Era Vargas incentivou a ocupação do interior do Brasil (Centro-Oeste e Norte)?",
      alternativas: [
        "Plano de Metas",
        "Brasil Potência",
        "Projeto Rondon",
        "SUDENE",
        "Marcha para o Oeste" // Correta (E)
      ],
      correta: 4,
      explicacao: "A 'Marcha para o Oeste' foi o projeto de Vargas (Estado Novo) para ocupar o interior.",
      dica: "Foco no deslocamento do eixo populacional para o oeste."
    },
    {
      id: "form-21",
      topic: "Infraestrutura e Ocupação",
      pergunta: "Na segunda metade do século XX, a ocupação da Amazônia foi impulsionada pela construção de grandes rodovias, EXCETO:",
      alternativas: [
        "Belém-Brasília",
        "Transamazônica",
        "Imigrantes (SP-160)", // Correta (C)
        "Cuiabá-Santarém (BR-163)",
        "Rondônia-Acre (BR-364)"
      ],
      correta: 2,
      explicacao: "A Imigrantes é uma rodovia estadual de São Paulo, não amazônica.",
      dica: "A exceção é uma rodovia que liga SP ao litoral."
    },
    {
      id: "form-22",
      topic: "Ciclos Econômicos",
      pergunta: "O ciclo do açúcar, base da economia colonial nos séculos XVI e XVII, concentrou-se prioritariamente na região:",
      alternativas: [
        "Sudeste",
        "Nordeste", // Correta (B)
        "Sul",
        "Norte",
        "Centro-Oeste"
      ],
      correta: 1,
      explicacao: "O açúcar foi o ciclo dominante no Nordeste nos séculos XVI e XVII.",
      dica: "Região de clima e solo favoráveis no litoral."
    },
    {
      id: "form-23",
      topic: "Ciclos Econômicos",
      pergunta: "A extração da borracha na Amazônia teve seu auge produtivo em qual período?",
      alternativas: [
        "Séculos XVI e XVII",
        "Final do século XVII ao XVIII",
        "Século XIX apenas",
        "Durante toda a Segunda Guerra Mundial",
        "Final do século XIX e início do XX" // Correta (E)
      ],
      correta: 4,
      explicacao: "O ciclo da borracha ocorreu no final do século XIX e início do XX.",
      dica: "Coincidiu com a Belle Époque amazônica."
    },
    {
      id: "form-24",
      topic: "Ciclo do Ouro",
      pergunta: "O ciclo do ouro (fim do XVII ao XVIII) promoveu uma importante mudança no eixo econômico para:",
      alternativas: [
        "Maranhão",
        "Rio Grande do Sul",
        "Minas Gerais", // Correta (C)
        "Amazonas",
        "Goiás"
      ],
      correta: 2,
      explicacao: "O ciclo do ouro concentrou-se em Minas Gerais, deslocando o eixo para o Centro-Sul.",
      dica: "Estado que leva o nome da atividade mineral."
    },
    {
      id: "form-25",
      topic: "Pecuária e Interiorização",
      pergunta: "Qual a importância da criação de gado (pecuária) para a formação do território brasileiro?",
      alternativas: [
        "Servir como motor de ocupação do interior do Brasil", // Correta (A)
        "Fixar a população exclusivamente nos portos exportadores",
        "Impedir o avanço de colonos estrangeiros no Sul",
        "Substituir totalmente a mão de obra escravizada por animais",
        "Promover a industrialização precoce do Sertão"
      ],
      correta: 0,
      explicacao: "A criação de gado foi fundamental para a ocupação do interior, avançando ao longo dos rios.",
      dica: "Atividade que não dependia da proximidade com o porto."
    },
    {
      id: "form-26",
      topic: "Arco do Desmatamento",
      pergunta: "O 'Arco do Desmatamento' na Amazônia está associado ao avanço de quais projetos na segunda metade do século XX?",
      alternativas: [
        "Reflorestamento obrigatório e turismo sustentável",
        "Industrialização têxtil e naval",
        "Criação de reservas indígenas e quilombolas",
        "Agropecuários e de exploração mineral", // Correta (D)
        "Pesquisa científica de bioprospecção"
      ],
      correta: 3,
      explicacao: "O avanço para a Amazônia envolveu projetos agropecuários e de exploração mineral.",
      dica: "Frentes de expansão econômica sobre a floresta."
    },
    {
      id: "form-27",
      topic: "Distrito Federal",
      pergunta: "Com a Proclamação da República (1889), qual cidade exercia a função de Distrito Federal?",
      alternativas: [
        "Salvador",
        "São Paulo",
        "Curitiba",
        "Brasília",
        "Rio de Janeiro" // Correta (E)
      ],
      correta: 4,
      explicacao: "O Rio de Janeiro foi a capital federal e Distrito Federal antes da construção de Brasília.",
      dica: "Capital federal antes de 1960."
    },
    {
      id: "form-28",
      topic: "Evolução do Acre",
      pergunta: "Após ser anexado como Território Federal em 1903, em que ano o Acre foi transformado em Estado?",
      alternativas: [
        "1943",
        "1962", // Correta (B)
        "1956",
        "1977",
        "1988"
      ],
      correta: 1,
      explicacao: "O Acre foi transformado em estado em 1962.",
      dica: "Década de 60, antes da nova Constituição."
    },
    {
      id: "form-29",
      topic: "Território do Rio Negro",
      pergunta: "A proposta de criação do 'Território Federal do Rio Negro' localiza-se em qual estado atual?",
      alternativas: [
        "Pará",
        "Roraima",
        "Amapá",
        "Amazonas", // Correta (D)
        "Acre"
      ],
      correta: 3,
      explicacao: "O Território Federal do Rio Negro é uma proposta de desmembramento do Amazonas.",
      dica: "Região do Rio Negro, no noroeste do país."
    },
    {
      id: "form-30",
      topic: "Renomeação de Territórios",
      pergunta: "O Território Federal de Rio Branco passou a ser denominado Roraima em qual ano?",
      alternativas: [
        "1943",
        "1946",
        "1956",
        "1988",
        "1962" // Correta (E)
      ],
      correta: 4,
      explicacao: "A denominação de Roraima ocorreu em 1962.",
      dica: "Mesmo ano em que o Acre virou estado."
    },
    {
      id: "form-31",
      topic: "Logística Colonial",
      pergunta: "No século XVII, qual era o principal eixo de expansão da pecuária no Nordeste?",
      alternativas: [
        "Do litoral para o interior (Sertão)", // Correta (A)
        "Do interior para as ilhas oceânicas",
        "De Minas Gerais para o Amazonas",
        "Apenas entre as cidades de Salvador e Recife",
        "Do Rio de Janeiro em direção ao Uruguai"
      ],
      correta: 0,
      explicacao: "Os eixos de expansão da pecuária partiram do litoral para o interior, acompanhando o Rio São Francisco.",
      dica: "O gado 'limpava' o caminho para longe da cana."
    },
    {
      id: "form-32",
      topic: "Drogas do Sertão",
      pergunta: "A exploração das 'Drogas do Sertão' no século XVII foi predominante em qual bacia hidrográfica?",
      alternativas: [
        "Bacia do Prata",
        "Bacia Amazônica", // Correta (B)
        "Bacia do São Francisco",
        "Bacia do Tocantins-Araguaia",
        "Bacia do Parnaíba"
      ],
      correta: 1,
      explicacao: "As drogas do sertão (cacau, baunilha, etc.) foram exploradas ao longo do Rio Amazonas.",
      dica: "Produtos extrativos da floresta equatorial."
    },
    {
      id: "form-33",
      topic: "Divisão Territorial - Século XVIII",
      pergunta: "No século XVIII, qual produto de exportação aparece mapeado no Maranhão e Ceará?",
      alternativas: [
        "Café",
        "Borracha",
        "Uva",
        "Algodão", // Correta (D)
        "Trigo"
      ],
      correta: 3,
      explicacao: "O algodão foi um importante produto de exportação do Maranhão e Ceará no século XVIII.",
      dica: "Importante para a revolução industrial têxtil."
    },
    {
      id: "form-34",
      topic: "Mineração e Malha Urbana",
      pergunta: "A mineração no século XVIII promoveu o surgimento de importantes núcleos urbanos no interior, EXCETO:",
      alternativas: [
        "Vila Boa (Goiás)",
        "Cuiabá (Mato Grosso)",
        "Sabará (Minas Gerais)",
        "Santos (São Paulo)", // Correta (D)
        "Ouro Preto (Minas Gerais)"
      ],
      correta: 3,
      explicacao: "Santos é uma cidade litorânea (porto); as demais são núcleos mineiros do interior.",
      dica: "A exceção é um porto de escoamento, não uma mina."
    },
    {
      id: "form-35",
      topic: "Café",
      pergunta: "O ciclo do café, nos séculos XIX e XX, teve seu principal polo produtivo no:",
      alternativas: [
        "Nordeste",
        "Norte",
        "Sudeste", // Correta (C)
        "Sul",
        "Centro-Oeste"
      ],
      correta: 2,
      explicacao: "O café foi o ciclo dominante no Sudeste (Vale do Paraíba e Oeste Paulista).",
      dica: "Pense na riqueza de SP e RJ."
    },
    {
      id: "form-36",
      topic: "Mercado Interno",
      pergunta: "A partir de qual processo o mercado interno brasileiro passou a ser o motor da organização do território?",
      alternativas: [
        "Início da extração de pau-brasil",
        "Assinatura do Tratado de Madri",
        "Industrialização brasileira a partir de 1920", // Correta (C)
        "Criação das Capitanias Hereditárias",
        "Expulsão dos holandeses de Pernambuco"
      ],
      correta: 2,
      explicacao: "A indústria passou a ser o núcleo dinâmico, voltado para o consumo interno e integração.",
      dica: "Transição da economia exportadora para a integrada."
    },
    {
      id: "form-37",
      topic: "Município Neutro",
      pergunta: "No mapa do Império de 1822, o que representava o 'Município Neutro'?",
      alternativas: [
        "Uma área de conflito entre Brasil e Argentina",
        "A sede da corte, a cidade do Rio de Janeiro", // Correta (B)
        "A cidade de São Paulo após uma revolta",
        "Um território cedido integralmente à Igreja Católica",
        "A região de Brasília antes de ser construída"
      ],
      correta: 1,
      explicacao: "O Município Neutro era a designação da cidade do Rio de Janeiro, capital do Império.",
      dica: "A capital tinha um status administrativo especial."
    },
    {
      id: "form-38",
      topic: "Ocupação do Cerrado",
      pergunta: "A ocupação efetiva dos Cerrados brasileiros ocorreu prioritariamente em qual período?",
      alternativas: [
        "Século XVII, com o gado",
        "Século XVIII, com o ouro",
        "Primeira metade do século XX",
        "Somente após o ano 2000",
        "Segunda metade do século XX" // Correta (E)
      ],
      correta: 4,
      explicacao: "A ocupação dos cerrados (agronegócio) ocorreu na segunda metade do século XX.",
      dica: "Associada à modernização agrícola e Brasília."
    }
  ]
};