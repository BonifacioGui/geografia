export const espacoAgrarioData = {
  titulo: "Organização do Espaço Agrário",
  introducao: "Estudo da estrutura fundiária, modernização agrícola e as relações de produção no campo brasileiro.",
  questoes: [
    {
      id: "agr-01",
      topic: "Estrutura Fundiária",
      pergunta: "A estrutura fundiária brasileira caracteriza-se pela elevada concentração de terras. Historicamente, qual dispositivo legal de 1850 consolidou a terra como mercadoria?",
      alternativas: [
        "Lei de Sesmarias",
        "Estatuto da Terra",
        "Reforma Agrária Integral",
        "Código Florestal",
        "Lei de Terras" // Correta (E)
      ],
      correta: 4,
      explicacao: "A Lei de Terras de 1850 determinou que as terras públicas só poderiam ser adquiridas por compra, impedindo o acesso via ocupação.",
      dica: "Pense no ano de 1850 e na 'compra' de terras."
    },
    {
      id: "agr-02",
      topic: "Trabalho no Campo",
      pergunta: "O trabalhador rural que ocupa e cultiva terras devolutas (públicas) ou propriedades de terceiros sem possuir o título legal de propriedade é chamado de:",
      alternativas: [
        "Posseiro", // Correta (A)
        "Arrendatário",
        "Parceiro",
        "Grileiro",
        "Colono"
      ],
      correta: 0,
      explicacao: "O posseiro utiliza a terra por direito de posse e uso, mas não possui a escritura oficial.",
      dica: "Diferencie de 'Grileiro', que falsifica documentos."
    },
    {
      id: "agr-03",
      topic: "Modernização Agrícola",
      pergunta: "A chamada 'Revolução Verde' no Brasil trouxe avanços técnicos, mas também gerou impactos socioespaciais negativos, como:",
      alternativas: [
        "Aumento da biodiversidade nas lavouras.",
        "Fim total dos conflitos de terra no país.",
        "Intensificação do êxodo rural e concentração de terras.", // Correta (C)
        "Substituição de máquinas por trabalho manual intensivo.",
        "Redução drástica do uso de agrotóxicos."
      ],
      correta: 2,
      explicacao: "A mecanização e a modernização expulsaram muitos pequenos produtores do campo, acelerando o crescimento urbano.",
      dica: "Pense na 'dor' da modernização para o pequeno trabalhador."
    },
    {
      id: "agr-04",
      topic: "Conceitos Fundiários",
      pergunta: "O módulo rural é uma unidade de medida expressa em hectares que busca definir o tamanho mínimo de uma propriedade familiar. Esse valor é variável porque depende:",
      alternativas: [
        "Apenas da vontade do proprietário da terra.",
        "Da localização do município e do tipo de exploração econômica predominante.", // Correta (B)
        "Exclusivamente do número de filhos do agricultor.",
        "Do valor do salário mínimo vigente no ano da compra.",
        "De um sorteio realizado anualmente pelo INCRA."
      ],
      correta: 1,
      explicacao: "O módulo rural varia conforme a produtividade da região e a atividade (ex: horticultura exige menos terra que pecuária).",
      dica: "A terra na Amazônia rende diferente da terra em São Paulo."
    },
    {
      id: "agr-05",
      topic: "Relações de Produção",
      pergunta: "Diferente do posseiro, o 'Grileiro' é um agente do campo conhecido por:",
      alternativas: [
        "Trabalhar por dia nas colheitas de cana-de-açúcar.",
        "Alugar a terra de terceiros pagando uma quantia fixa em dinheiro.",
        "Viver exclusivamente da agricultura de subsistência.",
        "Utilizar meios ilícitos e documentos falsificados para se apropriar de terras.", // Correta (D)
        "Ser o proprietário de grandes agroindústrias exportadoras."
      ],
      correta: 3,
      explicacao: "A grilagem envolve o envelhecimento artificial de documentos falsos para simular a antiguidade da posse da terra.",
      dica: "O termo vem da prática de colocar grilos em caixas com papéis novos."
    },
    {
      id: "agr-06",
      topic: "Agronegócio",
      pergunta: "A agropecuária brasileira é focada na produção de 'Commodities'. Qual característica define esse tipo de produto?",
      alternativas: [
        "Produtos de origem primária, com baixo valor agregado, cotados no mercado internacional.", // Correta (A)
        "Produtos manufaturados de alta tecnologia.",
        "Alimentos orgânicos produzidos apenas para consumo local.",
        "Equipamentos industriais usados na fabricação de tratores.",
        "Sementes modificadas proibidas para exportação."
      ],
      correta: 0,
      explicacao: "Commodities como soja e milho são mercadorias padronizadas cujos preços são definidos nas bolsas de valores globais.",
      dica: "Pense em mercadorias padrão: soja, ferro, petróleo."
    },
    {
      id: "agr-07",
      topic: "Agricultura Familiar",
      pergunta: "A Agricultura Familiar desempenha um papel social e econômico vital no Brasil por ser:",
      alternativas: [
        "A principal responsável pelo desmatamento ilegal.",
        "A maior utilizadora de agrotóxicos.",
        "Composta exclusivamente por latifúndios.",
        "Isenta de relação com o mercado.",
        "A principal fonte dos alimentos da cesta básica consumida internamente." // Correta (E)
      ],
      correta: 4,
      explicacao: "A agricultura familiar produz cerca de 70% dos alimentos consumidos no mercado interno (feijão, mandioca, hortaliças).",
      dica: "O agronegócio exporta, a agricultura familiar alimenta o país."
    },
    {
      id: "agr-08",
      topic: "Relações de Trabalho",
      pergunta: "O termo 'Boia-fria' descreve trabalhadores rurais que:",
      alternativas: [
        "São proprietários de minifúndios.",
        "São funcionários públicos federais.",
        "São trabalhadores temporários e volantes, sem vínculo fixo.", // Correta (C)
        "São técnicos especializados em colheitadeiras.",
        "São antigos escravizados com posse definitiva."
      ],
      correta: 2,
      explicacao: "Os boias-frias realizam tarefas sazonais, como o corte da cana, vivendo em condições de grande precariedade.",
      dica: "Trabalho temporário, manual e sem carteira assinada."
    },
    { 
      id: "agr-09",
      topic: "Estrutura Fundiária", 
      pergunta: "Se 1% das propriedades ocupam 50% da área total, isso indica:", 
      alternativas: [
        "Produtividade", 
        "Concentração Fundiária", // Correta (B)
        "Sustentabilidade", 
        "Agricultura Familiar", 
        "Reforma Agrária"
      ], 
      correta: 1, 
      explicacao: "A má distribuição de terras gera um alto índice de concentração fundiária.", 
      dica: "Muita terra na mão de poucos." 
    },
    { 
      id: "agr-10",
      topic: "Commodities", 
      pergunta: "Produtos primários (grãos) produzidos em larga escala com preços definidos em bolsas internacionais são:", 
      alternativas: [
        "Manufaturados", 
        "Bens de Capital", 
        "Royalties", 
        "Commodities", // Correta (D)
        "Subsídios"
      ], 
      correta: 3, 
      explicacao: "Commodities são mercadorias padronizadas negociadas globalmente.", 
      dica: "Soja e Ferro são exemplos." 
    }
  ]
};