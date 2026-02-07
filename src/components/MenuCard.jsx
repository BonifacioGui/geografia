// src/components/MenuCard.jsx
import React from 'react';

const MenuCard = ({ titulo, subTitulo, icone, cor, aoClicar }) => {
  return (
    <button 
      onClick={aoClicar}
      className={`p-6 rounded-2xl border border-slate-700 bg-slate-800 hover:border-${cor}-500 transition-all group text-left shadow-lg transform hover:-translate-y-1`}
    >
      <div className={`w-12 h-12 rounded-lg bg-${cor}-500/20 flex items-center justify-center mb-4 text-${cor}-400 text-2xl group-hover:scale-110 transition-transform`}>
        <i className={`fas ${icone}`}></i>
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{titulo}</h3>
      <p className="text-slate-400 text-sm">{subTitulo}</p>
    </button>
  );
};

export default MenuCard;