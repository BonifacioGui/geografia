import React from 'react';

const CardEstudo = ({ titulo, resumo, topicos }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 1. Cabeçalho do Dossiê */}
      <div className="border-b border-[var(--border)] pb-6">
        <div className="flex items-center gap-3 mb-4">
           <span className="text-4xl animate-pulse-slow">🦇</span>
           <span className="text-xs font-mono text-[var(--primary)] border border-[var(--primary)] px-2 py-1 rounded uppercase tracking-widest">
             Arquivo Confidencial
           </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-[var(--text-main)] uppercase tracking-tight mb-4 leading-none">
          {titulo || "Dossiê de Estudo"}
        </h2>
        
        <p className="text-[var(--text-muted)] text-xl leading-relaxed font-medium border-l-4 border-[var(--primary)] pl-4">
          {resumo || "Iniciando análise de dados táticos..."}
        </p>
      </div>

      {/* 2. Lista de Tópicos (Estilo Fichas de Investigação) */}
      <div className="grid gap-6">
        {topicos && topicos.length > 0 ? (
          topicos.map((topico, index) => (
            <div 
              key={index}
              className="gotham-card p-6 group hover:border-[var(--primary)] hover:bg-[var(--bg-card)]/80 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                {/* Badge Amarelo com Número */}
                <div className="flex-shrink-0 relative">
                   <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--primary)] text-black font-black text-xl shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover:scale-110 transition-transform">
                     {index + 1}
                   </span>
                   {/* Linha decorativa vertical entre os números */}
                   {index !== topicos.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-full bg-[var(--border)] -translate-x-1/2 -z-10 group-hover:bg-[var(--primary)] transition-colors opacity-30"></div>
                   )}
                </div>
                
                <div className="space-y-3 pt-1 w-full">
                  <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                    {/* Correção: Tenta subtitulo, se não existir, tenta titulo */}
                    {topico.subtitulo || topico.titulo || `Tópico ${index + 1}`}
                  </h3>
                  <p className="text-[var(--text-muted)] text-base leading-relaxed group-hover:text-[var(--text-main)] transition-colors">
                    {/* Correção: Tenta detalhe, se não existir, tenta texto ou descricao */}
                    {topico.detalhe || topico.texto || topico.descricao || "Conteúdo em processamento..."}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-10 border border-dashed border-[var(--border)] rounded-xl opacity-50">
            <p className="text-[var(--text-muted)]">Nenhum módulo de dados encontrado para este setor.</p>
          </div>
        )}
      </div>

      {/* 3. Rodapé do Relatório */}
      <div className="mt-10 p-6 border-2 border-dashed border-[var(--border)] rounded-xl text-center opacity-60 hover:opacity-100 transition-opacity">
        <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-[0.3em] mb-2">
          /// Fim do Relatório ///
        </p>
        <p className="text-[var(--primary)] text-sm font-bold">
          Dados sincronizados com o Bat-computador
        </p>
      </div>
    </div>
  );
};

export default CardEstudo;