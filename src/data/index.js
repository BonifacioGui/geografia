// 1. Teoria (Pasta Nova)
import { teoriaCartografia } from './geografia/teoria/Cartografia_Teoria';
import { teoriaDivisao } from './geografia/teoria/DivisaoPolitica_Teoria';
import { teoriaClimas } from './geografia/teoria/ClimasBrasil_Teoria';
import { teoriaNatureza } from './geografia/teoria/NaturezaBrasil_Teoria';
import { teoriaPopulacao } from './geografia/teoria/PopulacaoBrasil_Teoria';
import { teoriaAgrario } from './geografia/teoria/EspacoAgrario_Teoria';

// 2. Questões (Arquivos Antigos - que você não mexeu)
// Verifique se os nomes dos arquivos estão corretos aqui:
import { formacaoTerritorialData } from './geografia/FormacaoTerritorial'; 
import { cartografiaData } from './geografia/Cartografia';
import { divisaoPoliticaData } from './geografia/DivisaoPoliticaEconomia';
import { climasBrasilData } from './geografia/ClimasBrasil';
import { biomasDominiosData } from './geografia/BiomasDominios';
import { populacaoData } from './geografia/Populacao';
import { espacoAgrarioData } from './geografia/EspacoAgrario';
import { urbanizacaoBrasileiraData } from './geografia/Urbanizacao';
import { teoriaUrbanizacao } from './geografia/teoria/Urbanizacao_Teoria';
import { eticaIBGE } from './etica/eticaData';

export const bancoDeDadosTotal = {
  geografia: {
    cartografia: { leitura: teoriaCartografia, questoes: cartografiaData.questoes },
    formacao: { leitura: teoriaDivisao, questoes: formacaoTerritorialData.questoes },
    divisao: { leitura: teoriaDivisao, questoes: divisaoPoliticaData.questoes },
    climas: { leitura: teoriaClimas, questoes: climasBrasilData.questoes },
    populacao: { leitura: teoriaPopulacao, questoes: populacaoData.questoes },
    agrario: { leitura: teoriaAgrario, questoes: espacoAgrarioData.questoes },
    biomas: { leitura: teoriaNatureza, questoes: biomasDominiosData.questoes },
    urbanizacao: { leitura: teoriaUrbanizacao, questoes: urbanizacaoBrasileiraData.questoes 
    },
  },
  etica: eticaIBGE
};