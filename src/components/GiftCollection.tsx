import React from 'react';

const GiftCollection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden" data-section="gift">


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <div className="space-y-4 md:space-y-6 lg:space-y-6">
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
            <div className="bg-white p-6 sm:p-8 lg:p-10 relative border border-gray-200 shadow-sm">
              <div className="space-y-6 lg:space-y-8">
                <div className="text-center space-y-4 lg:space-y-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500">
                      Baby Angel's Collection
                    </p>
                    <h3 className="font-elegant text-xl lg:text-2xl text-black font-light">
                      Сбор на особенный подарок
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://messenger.online.sberbank.ru/sl/2B6q4ahyxcvdanvO8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-black text-white py-5 lg:py-6 px-6 lg:px-8 text-lg lg:text-lg hover:bg-gray-800 transition-all duration-300 font-medium text-center shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    Участвовать в сборе
                  </a>
                  
                  <div className="bg-gray-50 p-4 lg:p-6 border border-gray-200 text-center">
                    <p className="text-sm lg:text-base text-gray-600 font-medium">
                      Безопасный сбор через СберБанк
                    </p>
                  </div>
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