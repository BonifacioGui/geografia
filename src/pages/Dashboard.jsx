import React, { useState } from 'react';
import { bancoDeDadosTotal } from '../data';

// --- COMPONENTE DO CARD (Estilo Gotham) ---
const TopicCard = ({ chave, dados, aoEscolher }) => {
  const [expandido, setExpandido] = useState(false);
  const tituloExibicao = dados.leitura?.titulo || dados.titulo || chave;

  return (
    <div className="relative h-full">
      <button 
        onClick={() => setExpandido(!expandido)}
        className={`w-full h-full p-6 text-left gotham-card transition-all duration-300 ${
          expandido ? 'ring-2 ring-[var(--primary)] shadow-[0_0_20px_rgba(251,191,36,0.2)]' : ''
        }`}
      >
        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg text-2xl md:text-3xl transition-all ${
              expandido ? 'bg-[var(--primary)] text-black' : 'bg-white/5 text-[var(--primary)]'
            }`}>
              {chave === 'etica' ? '⚖️' : '🌍'}
            </div>
            <span className={`text-[var(--primary)] transition-transform ${expandido ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          
          <h3 className="text-lg md:text-xl font-bold text-[var(--text-main)] mb-2 group-hover:text-[var(--primary)]">
            {tituloExibicao}
          </h3>

          {!expandido && (
             <p className="text-[10px] md:text-xs text-[var(--text-muted)] mt-auto uppercase tracking-widest opacity-60">
               Toque para acessar
             </p>
          )}

          {expandido && (
            <div className="grid grid-cols-1 gap-2 mt-4 animate-expand">
               <div 
                  onClick={(e) => {e.stopPropagation(); aoEscolher(chave, 'leitura')}}
                  className="py-2.5 px-4 rounded-lg border border-[var(--border)] text-xs md:text-sm text-[var(--text-main)] hover:bg-[var(--primary)] hover:text-black transition-all text-center cursor-pointer font-bold"
               >
                  📖 Teoria
               </div>
               <div 
                  onClick={(e) => {e.stopPropagation(); aoEscolher(chave, 'simulado')}}
                  className="py-2.5 px-4 rounded-lg border border-[var(--border)] text-xs md:text-sm text-[var(--text-main)] hover:bg-[var(--primary)] hover:text-black transition-all text-center cursor-pointer font-bold"
               >
                  ⚔️ Simulado
               </div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

// --- DASHBOARD PRINCIPAL ---
const Dashboard = ({ selecionarMateria }) => {
  const temasGeo = bancoDeDadosTotal.geografia ? Object.keys(bancoDeDadosTotal.geografia) : [];

  return (
    <div className="relative min-h-screen pb-20">
      
      {/* --- 1. O FUNDO DO BATMAN (Restaurado e Fixado) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/quadrinho-de-batman.jpg?w=1200&h=900&crop=0')`,
            filter: 'grayscale(100%) contrast(120%) brightness(0.3)' 
          }}
        ></div>
        {/* Máscara Degradê */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        
        {/* Efeito de Raio */}
        <div className="bat-lightning-effect opacity-20"></div>
      </div>

      {/* --- 2. O CONTEÚDO --- */}
      <div className="relative z-10 space-y-8 md:space-y-12 animate-fade-in">
        
        {/* Banner Épico */}
        <header className="bat-hero-banner group">
          <div className="relative z-20 pl-4 border-l-4 border-[var(--primary)]">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              <span className="text-[var(--primary)]">Fala,</span> Bunda Gorda! 🦇
            </h2>
            <p className="text-gray-300 max-w-lg text-sm md:text-lg leading-relaxed font-medium drop-shadow-md">
              A noite é longa e o edital não espera. O Bat-computador está pronto.
            </p>
          </div>
        </header>

        {/* Seção Geografia */}
        <section>
          <div className="flex items-center justify-between mb-6 md:mb-8 px-2 border-b border-[var(--border)] pb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl">🗺️</span>
              <div>
                <h2 className="text-lg md:text-2xl font-black text-[var(--text-main)] uppercase tracking-widest">Geografia</h2>
                <p className="text-[10px] text-[var(--text-muted)] font-mono">DADOS TÁTICOS DO BRASIL</p>
              </div>
            </div>
            <span className="text-[var(--primary)] text-[10px] md:text-xs font-bold bg-[var(--primary)]/10 px-2 py-1 rounded border border-[var(--primary)]/20">
              {temasGeo.length} MISSÕES
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {temasGeo.map((chave) => (
              <TopicCard 
                key={chave}
                chave={chave}
                dados={bancoDeDadosTotal.geografia[chave]}
                aoEscolher={selecionarMateria}
              />
            ))}
          </div>
        </section>

        {/* Seção Ética */}
        <section className="pt-4">
          <div className="flex items-center gap-3 mb-6 md:mb-8 px-2 border-b border-[var(--border)] pb-4">
            <span className="text-2xl md:text-3xl">⚖️</span>
            <div>
               <h2 className="text-lg md:text-2xl font-black text-[var(--text-main)] uppercase tracking-widest">Ética e Conduta</h2>
               <p className="text-[10px] text-[var(--text-muted)] font-mono">CÓDIGO DE HONRA</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <TopicCard 
              chave="etica"
              dados={bancoDeDadosTotal.etica}
              aoEscolher={selecionarMateria}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;