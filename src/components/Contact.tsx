import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden" data-section="contact">
      {/* Декоративные элементы только для больших экранов */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-px h-40 bg-gray-100 rotate-12 hidden xl:block"></div>
        <div className="absolute bottom-40 right-24 w-px h-56 bg-gray-100 -rotate-12 hidden xl:block"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-px bg-gray-100 transform -translate-x-1/2 hidden lg:block"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center">
          <div className="space-y-6 md:space-y-12 lg:space-y-8">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400">
              Contact Information
            </p>
            <h2 className="font-elegant text-3xl sm:text-4xl lg:text-5xl font-light text-black leading-[0.8]">
              Контакты
            </h2>
            <div className="h-px bg-gray-300 w-24 lg:w-32 mx-auto"></div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Левая колонка - информация */}
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-6 md:space-y-12 lg:space-y-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-black font-medium">
                Распорядитель вечеринки
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg font-extralight">
                Если возникнут вопросы, вы всегда можете связаться с нашим распорядителем. 
                Элина поможет с любыми деталями и ответит на все ваши вопросы о мероприятии.
              </p>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center space-x-4 lg:space-x-6 bg-gray-50 p-4 lg:p-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
                    Телефон
                  </p>
                  <a 
                    href="tel:+79651906148" 
                    className="text-base sm:text-lg lg:text-xl text-black hover:text-gray-600 transition-colors duration-300 font-extralight"
                  >
                    +7 965 190 6148
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 lg:space-x-6 bg-gray-50 p-4 lg:p-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
                    Имя
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-black font-extralight">
                    Элина
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - карточка */}
          <div>
            <div className="bg-gray-50 p-8 sm:p-10 lg:p-12 relative">
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-8 md:space-y-16 lg:space-y-10">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500">
                    Quick Contact
                  </p>
                  <div className="space-y-4 lg:space-y-6">
                    <a 
                      href="tel:+79651906148" 
                      className="block bg-black text-white py-4 lg:py-6 px-6 lg:px-8 text-lg lg:text-xl hover:bg-gray-800 transition-colors duration-300 font-medium text-center"
                    >
                      Позвонить Элине
                    </a>
                    <div className="bg-white p-4 lg:p-6 border border-gray-200">
                      <p className="text-base lg:text-lg text-gray-700 font-extralight">
                        Время работы: 9:00 — 21:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Финальное сообщение */}
        <div className="mt-20 sm:mt-24 lg:mt-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
            <div className="space-y-6 lg:space-y-8">
              <div className="h-px bg-gray-300 w-24 lg:w-32 mx-auto"></div>
            </div>

            {/* Финальная подпись */}
            <div className="pt-12 lg:pt-16">
              <div className="inline-block space-y-6 md:space-y-12 lg:space-y-8">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400">
                  With Love
                </p>
                <p className="font-elegant text-xl lg:text-2xl text-black">
                  Элеонора Абрамова
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 