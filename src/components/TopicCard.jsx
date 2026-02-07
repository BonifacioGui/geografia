import React from 'react';

const TopicCard = ({ titulo, concluido, aoClicar }) => {
  return (
    <button 
      onClick={aoClicar}
      className="bg-slate-800 border border-slate-700 p-4 rounded-xl hover:border-indigo-500 transition-all text-left group flex justify-between items-center"
    >
      <div>
        <h4 className="text-slate-200 font-semibold group-hover:text-indigo-400 transition-colors">
          {titulo}
        </h4>
        <p className="text-xs text-slate-500">Módulo de Estudo + Simulado</p>
      </div>
      <div className="text-slate-600 group-hover:text-indigo-500">
        <i className="fas fa-chevron-right"></i>
      </div>
    </button>
  );
};

export default TopicCard;