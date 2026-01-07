
import React from 'react';
import { HealthTip } from '../types';

interface HealthCardProps {
  tip: HealthTip;
  onClick: (tip: HealthTip) => void;
}

const HealthCard: React.FC<HealthCardProps> = ({ tip, onClick }) => {
  return (
    <div 
      onClick={() => onClick(tip)}
      className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col h-full"
    >
      <div className={`w-14 h-14 ${tip.bgColor} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
        <i className={`fa-solid ${tip.icon} ${tip.color} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">{tip.title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{tip.description}</p>
      <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
        Saiba mais <i className="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
      </div>
    </div>
  );
};

export default HealthCard;
