import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import CardEstudo from './components/CardEstudo';
import CardQuestao from './components/CardQuestao';
import { BatIcon } from './components/BatIcon';
import { bancoDeDadosTotal } from './data';

function App() {
  const [telaAtual, setTelaAtual] = useState('home');
  const [subTema, setSubTema] = useState(null); 
  const [indiceQuestao, setIndiceQuestao] = useState(0);
  const [modo, setModo] = useState('leitura'); 
  const [isDark, setIsDark] = useState(true);

  const obterDadosAtivos = () => {
    if (telaAtual === 'etica') return bancoDeDadosTotal.etica;
    if (telaAtual === 'geografia' && subTema) {
      return bancoDeDadosTotal.geografia[subTema];
    }
    return null;
  };

  const dadosAtivos = obterDadosAtivos();
  const questaoAtiva = dadosAtivos?.questoes?.[indiceQuestao];

  return (
    <div className={`${isDark ? 'dark' : ''} font-sans min-h-screen relative text-[var(--text-main)] transition-colors duration-500`}>
      <div className="bat-background-layer"></div>

      <header className="bg-[#0f172a] border-b border-[#1e293b] p-4 sticky top-0 z-50 backdrop-blur-md shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 
            className="text-xl font-black text-white cursor-pointer tracking-widest uppercase hover:text-[var(--primary)] transition-colors flex items-center gap-2"
            onClick={() => setTelaAtual('home')}
          >
            <span className="text-[var(--primary)]">🦇</span> IBGE MASTER
          </h1>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-white/10 transition-all group"
              title={isDark ? "Acender Luzes" : "Apagar Luzes"}
            >
              {isDark ? (
                <div className="text-[var(--primary)] drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                   <BatIcon className="w-6 h-6" />
                </div>
              ) : (
                <div className="text-gray-400 group-hover:text-white text-xl">☀️</div>
              )}
            </button>

            <div className="hidden sm:block text-xs px-3 py-1 rounded-lg border border-[#334155] text-gray-400 font-mono bg-[#020617]">
              Agente: <span className="text-white font-bold">ANA LÍVIA</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-6 relative z-10">
        {telaAtual === 'home' && (
          <Dashboard selecionarMateria={(chaveSubTema, modoEscolhido) => {
            if (chaveSubTema === 'etica') {
              setTelaAtual('etica');
            } else {
              setTelaAtual('geografia');
              setSubTema(chaveSubTema); 
            }
            setModo(modoEscolhido);
            setIndiceQuestao(0);
          }} />
        )}

        {telaAtual !== 'home' && dadosAtivos && (
          <div className="animate-fade-in space-y-8">
            <div className="flex justify-between items-center bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
              <button 
                onClick={() => setTelaAtual('home')} 
                className="text-[var(--primary)] text-sm font-bold hover:underline uppercase tracking-wider flex items-center gap-2"
              >
                <span>←</span> Retornar à Base
              </button>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setModo('leitura')}
                  className={modo === 'leitura' ? 'bat-btn' : 'bat-btn-outline'}
                >TEORIA</button>
                <button 
                  onClick={() => setModo('simulado')}
                  className={modo === 'simulado' ? 'bat-btn' : 'bat-btn-outline'}
                >SIMULADO</button>
              </div>
            </div>

            {modo === 'leitura' ? (
              <div className="gotham-card p-8"> 
                <CardEstudo 
                  titulo={dadosAtivos?.leitura?.titulo || dadosAtivos?.titulo || "Sem Título"}
                  resumo={dadosAtivos?.leitura?.introducao || dadosAtivos?.resumo || ""}
                  topicos={dadosAtivos?.leitura?.modulos || dadosAtivos?.topicos || []}
                />
              </div>
            ) : (
              <div className="space-y-6">
                {questaoAtiva ? (
                  <div className="space-y-4">
                    <div className="px-2">
                       <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-[0.2em]">
                         Missão {indiceQuestao + 1} / {dadosAtivos.questoes.length}
                       </span>
                    </div>

                    <div className="gotham-card p-6 md:p-8">
                        <CardQuestao 
                          key={`${subTema}-${indiceQuestao}`}
                          pergunta={questaoAtiva?.pergunta || questaoAtiva?.text || "Questão sem título"}
                          alternativas={questaoAtiva?.alternativas || questaoAtiva?.options || []}
                          correta={questaoAtiva?.correta ?? questaoAtiva?.correct}
                          explicacao={questaoAtiva?.explicação || questaoAtiva?.explanation}
                          dica={questaoAtiva?.dica || questaoAtiva?.tip}
                        />
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <button 
                        disabled={indiceQuestao === 0}
                        onClick={() => setIndiceQuestao(prev => prev - 1)}
                        className="flex-1 bat-btn-outline disabled:opacity-30 disabled:cursor-not-allowed"
                      >Anterior</button>
                      <button 
                        disabled={indiceQuestao === dadosAtivos.questoes.length - 1}
                        onClick={() => setIndiceQuestao(prev => prev + 1)}
                        className="flex-[2] bat-btn disabled:opacity-30 disabled:cursor-not-allowed"
                      >Próxima</button>
                    </div>
                  </div>
                ) : (
                  <div className="gotham-card p-12 text-center border-dashed border-[var(--border)]">
                    <div className="text-4xl mb-4 opacity-50">🦇</div>
                    <p className="text-[var(--text-muted)] font-medium">Nenhuma missão encontrada.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;