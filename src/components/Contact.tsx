import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Декоративные элементы только для больших экранов */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-px h-40 bg-gray-100 rotate-12 hidden xl:block"></div>
        <div className="absolute bottom-40 right-24 w-px h-56 bg-gray-100 -rotate-12 hidden xl:block"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-px bg-gray-100 transform -translate-x-1/2 hidden lg:block"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400 mb-6 lg:mb-8">
            Contact Information
          </p>
          <h2 className="font-elegant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-black leading-[0.8] mb-8 lg:mb-12">
            Контакты
          </h2>
          <div className="h-px bg-black w-16 lg:w-24 mx-auto"></div>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Левая колонка - информация */}
          <div className="space-y-8 lg:space-y-12 text-center lg:text-left">
            <div>
              <h3 className="font-elegant text-2xl sm:text-3xl lg:text-4xl text-black mb-4 lg:mb-6">
                Распорядитель вечеринки
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Если возникнут вопросы, вы всегда можете связаться с нашим распорядителем. 
                Элина поможет с любыми деталями и ответит на все ваши вопросы о мероприятии.
              </p>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center space-x-4 lg:space-x-6 bg-gray-50 p-4 lg:p-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base lg:text-lg">📞</span>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
                    Телефон
                  </p>
                  <a 
                    href="tel:+79651906148" 
                    className="font-elegant text-xl sm:text-2xl lg:text-3xl text-black hover:text-gray-600 transition-colors duration-300"
                  >
                    +7 965 190 6148
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 lg:space-x-6 bg-gray-50 p-4 lg:p-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base lg:text-lg">👤</span>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
                    Имя
                  </p>
                  <p className="font-elegant text-xl sm:text-2xl lg:text-3xl text-black">
                    Элина
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - карточка */}
          <div>
            <div className="bg-gray-50 p-8 sm:p-10 lg:p-12 relative">
              <div className="text-center space-y-6 lg:space-y-8">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 mb-6">
                    Quick Contact
                  </p>
                  <div className="space-y-4 lg:space-y-6">
                    <a 
                      href="tel:+79651906148" 
                      className="block bg-black text-white py-4 lg:py-6 px-6 lg:px-8 font-elegant text-lg lg:text-xl hover:bg-gray-800 transition-colors duration-300"
                    >
                      Позвонить Элине
                    </a>
                    <div className="bg-white p-4 lg:p-6 border border-gray-200">
                      <p className="font-elegant text-base lg:text-lg text-gray-700">
                        Время работы: 9:00 — 21:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 lg:pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic leading-relaxed">
                    "Каждая деталь важна для создания идеального вечера"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Финальное сообщение */}
        <div className="mt-20 sm:mt-24 lg:mt-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
            <div className="space-y-6 lg:space-y-8">
              <p className="font-elegant text-3xl sm:text-4xl lg:text-5xl text-black font-light leading-tight px-4">
                До встречи в мире 
                <br />
                <span className="text-gray-600">небесной красоты!</span>
              </p>
              
              <div className="flex justify-center space-x-3">
                <div className="w-4 h-4 bg-gray-400"></div>
                <div className="w-2 h-2 bg-gray-300 mt-1"></div>
                <div className="w-4 h-4 bg-gray-400"></div>
              </div>
            </div>

            {/* Финальная подпись */}
            <div className="pt-12 lg:pt-16">
              <div className="inline-block">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400 mb-3 lg:mb-4">
                  With Love
                </p>
                <p className="font-elegant text-xl lg:text-2xl text-black">
                  Элеонора Абрамова
                </p>
                <div className="h-px bg-gray-300 w-24 lg:w-32 mx-auto mt-3 lg:mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 