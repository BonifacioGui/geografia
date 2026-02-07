import React, { useState } from 'react';

const CardQuestao = ({ pergunta, alternativas, correta, explicacao, dica }) => {
  const [selecionada, setSelecionada] = useState(null);
  const [mostrarDica, setMostrarDica] = useState(false);

  const responder = (index) => {
    if (selecionada !== null) return;
    setSelecionada(index);
  };

  const acertou = selecionada === correta;

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in w-full">
      
      {/* 1. Enunciado da Missão - Responsivo */}
      <div className="pb-4 border-b border-[var(--border)]">
        <h3 className="text-xl md:text-3xl font-bold text-[var(--text-main)] leading-snug">
          {pergunta}
        </h3>
      </div>

      {/* 2. Alternativas - TRAVADAS EM COLUNA (Mobile First) */}
      <div className="flex flex-col gap-3 md:gap-4 w-full">
        {alternativas.map((alt, index) => {
          let estiloBotao = "bat-btn-outline w-full text-left justify-start py-3 md:py-4 px-4 md:px-6 text-base md:text-lg normal-case hover:bg-[var(--bg-card-active)]"; 
          
          if (selecionada !== null) {
            if (index === correta) {
              estiloBotao = "bg-green-900/80 text-white border-green-500 font-bold shadow-[0_0_15px_rgba(34,197,94,0.4)] scale-[1.01]";
            } else if (index === selecionada) {
              estiloBotao = "bg-red-900/80 text-white border-red-500 opacity-90";
            } else {
              estiloBotao = "border-[var(--border)] opacity-30 cursor-not-allowed";
            }
          }

          return (
            <button
              key={index}
              onClick={() => responder(index)}
              disabled={selecionada !== null}
              className={`flex items-center rounded-xl border transition-all duration-300 group ${estiloBotao}`}
            >
              {/* Badge da Letra - Não encolhe no mobile */}
              <span className="mr-3 md:mr-4 font-mono font-bold opacity-60 text-xs md:text-sm border border-current w-7 h-7 md:w-8 md:h-8 rounded flex items-center justify-center shrink-0">
                {['A','B','C','D','E'][index]}
              </span>
              
              {/* Texto da Alternativa */}
              <span className="leading-tight py-1">{alt}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Área de Feedback / Dica */}
      <div className="min-h-[80px] mt-4 md:mt-6">
        {selecionada === null ? (
          <div className="relative flex justify-end">
            <button 
              onClick={() => setMostrarDica(!mostrarDica)}
              className="text-[10px] md:text-xs font-bold text-[var(--primary)] uppercase tracking-[0.2em] hover:underline flex items-center gap-2 py-2"
            >
              <span>{mostrarDica ? "🙈" : "💡"}</span>
              {mostrarDica ? "Ocultar Pista" : "Pedir Pista do Oráculo"}
            </button>
            
            {mostrarDica && (
              <div className="absolute bottom-full right-0 mb-4 p-4 w-full md:max-w-sm bg-[#1a1a1a] border border-[var(--primary)]/50 text-yellow-100 text-sm rounded-xl shadow-2xl animate-fade-in z-50 backdrop-blur-md">
                <div className="text-[var(--primary)] font-black text-xs mb-1 tracking-widest">CHARADA:</div>
                {dica}
              </div>
            )}
          </div>
        ) : (
          /* Feedback de Resposta */
          <div className={`p-5 md:p-6 rounded-xl border animate-fade-in-up shadow-2xl relative overflow-hidden ${acertou ? 'bg-green-900/20 border-green-800' : 'bg-red-900/20 border-red-800'}`}>
            
            <div className={`absolute inset-0 opacity-10 ${acertou ? 'bg-green-500' : 'bg-red-500'}`}></div>

            <h4 className={`text-lg md:text-xl font-black mb-2 md:mb-3 flex items-center gap-2 uppercase tracking-wide relative z-10 ${acertou ? 'text-green-400' : 'text-red-400'}`}>
              {acertou ? '✅ Missão Cumprida!' : '❌ Falha na Missão'}
            </h4>
            
            <div className="text-[var(--text-main)] text-sm md:text-lg leading-relaxed space-y-3 relative z-10">
              <p className="opacity-90">
                <span className="font-bold text-[var(--primary)] mr-1">Análise:</span> 
                {explicacao}
              </p>
              
              <div className="pt-3 border-t border-white/10 text-[10px] md:text-sm text-[var(--text-muted)] flex gap-2 italic">
                 <span>💡</span> <span>{dica}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardQuestao;