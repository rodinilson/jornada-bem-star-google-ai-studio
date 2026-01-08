
import React, { useState, useCallback } from 'react';
import { HEALTH_TIPS } from './constants';
import { HealthTip } from './types';
import HealthCard from './components/HealthCard';

const App: React.FC = () => {
  const [selectedTip, setSelectedTip] = useState<HealthTip | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenInsight = useCallback((tip: HealthTip) => {
    setSelectedTip(tip);
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTip(null);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 py-6">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <i className="fa-solid fa-heart-pulse text-white text-xl"></i>
            </div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">VidaSaudável 5</h1>
          </div>
          <p className="text-slate-500 text-center max-w-md">
            Pequenas mudanças diárias geram grandes resultados a longo prazo.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-12 max-w-6xl">
        {/* Intro */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 sm:text-5xl">
            Sua jornada para o <span className="text-emerald-500 underline decoration-emerald-200">bem-estar</span>
          </h2>
          <p className="text-lg text-slate-600">Explore nossas dicas fundamentais para uma vida mais leve e saudável.</p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HEALTH_TIPS.map((tip) => (
            <HealthCard key={tip.id} tip={tip} onClick={handleOpenInsight} />
          ))}
          
          {/* Decorative/Extra Card for UI Balance */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-lg hidden lg:flex">
            <i className="fa-solid fa-star text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">O seu progresso importa</h3>
            <p className="text-emerald-50/80">Cada escolha saudável é uma vitória para o seu futuro eu.</p>
          </div>
        </div>
      </main>

      {/* Modal for Detailed Insights */}
      {isModalOpen && selectedTip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className={`p-6 flex items-center justify-between border-b ${selectedTip.bgColor}`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <i className={`fa-solid ${selectedTip.icon} ${selectedTip.color} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{selectedTip.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Guia Completo</span>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shadow-sm"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="prose prose-slate max-w-none">
                {selectedTip.details.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed mb-4 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2.5 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-900 transition-all active:scale-95"
              >
                Entendi, obrigado!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Branding */}
      <footer className="mt-20 py-8 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} VidaSaudável 5. Guia estático para sua saúde.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
