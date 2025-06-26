import React from 'react';

const GiftCollection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white relative" data-section="gift">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center">
          <div className="space-y-6 md:space-y-12 lg:space-y-8">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400">
              Special Gift Collection
            </p>
            <h2 className="font-elegant text-3xl sm:text-4xl lg:text-5xl font-light text-black leading-[0.8]">
              Подарок для Элеоноры
            </h2>
            <div className="h-px bg-gray-300 w-24 lg:w-32 mx-auto"></div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            <div className="bg-gray-50 p-8 sm:p-10 lg:p-12 text-center">
              <div className="space-y-8 lg:space-y-10">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500">
                    Сбор на особенный подарок
                  </p>
                  <p className="font-elegant text-3xl sm:text-4xl lg:text-5xl text-black font-light">
                    Baby Angel's
                  </p>
                </div>

                <div className="pt-2">
                  <a 
                    href="https://messenger.online.sberbank.ru/sl/2B6q4ahyxcvdanvO8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white py-3 px-6 lg:py-4 lg:px-8 text-sm lg:text-base hover:bg-gray-800 transition-colors duration-300 font-medium w-full block"
                  >
                    Участвовать в сборе
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCollection; 