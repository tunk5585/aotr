import React from 'react';

const DressCode: React.FC = () => {
  const guidelines = {
    welcome: [
      {
        icon: "01",
        title: "Ренессансная элегантность",
        description: "Платья и костюмы в духе Ренессанса: корсеты, струящиеся ткани, завышенная талия"
      },
      {
        icon: "02", 
        title: "Небесная палитра",
        description: "Светлые, молочные, пудровые оттенки, золото, жемчуг"
      },
      {
        icon: "03",
        title: "Благородные материалы", 
        description: "Атлас, бархат, органза, шёлк"
      },
      {
        icon: "04",
        title: "Божественные акценты",
        description: "Перья, фресковый макияж, нимбы, крылья (в меру), сияющая кожа"
      },
      {
        icon: "05",
        title: "Художественное вдохновение",
        description: "Образы, будто вы сошли с полотен Боттичелли, Рафаэля, Карваджо"
      }
    ],
    avoid: [
      "Современного кэжуала",
      "Спортивных элементов", 
      "Тёмного тотал-лука"
    ]
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50 relative">
      {/* Декоративные элементы только для больших экранов */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-px h-64 bg-gray-200 rotate-12 hidden xl:block"></div>
        <div className="absolute bottom-20 left-16 w-px h-48 bg-gray-200 -rotate-12 hidden xl:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center lg:text-left">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-2">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400 mb-6 lg:mb-8">
                Dress Code Guidelines
              </p>
              <h2 className="font-elegant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-black leading-[0.8]">
                Дресс-код
              </h2>
            </div>
            <div className="text-center lg:text-left">
              <div className="h-px bg-gold w-16 lg:w-24 mx-auto lg:mx-0 mb-4 lg:mb-6"></div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Ваш образ — это ключ к волшебству вечера
              </p>
            </div>
          </div>
        </div>

        {/* Главное описание */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="elegant-frame p-8 sm:p-12 lg:p-16 relative mx-4 sm:mx-0">
            <div className="max-w-4xl">
              <h3 className="font-elegant text-2xl sm:text-3xl lg:text-4xl font-light mb-6 lg:mb-8 text-black">
                Концепция
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed font-light">
                Вдохновляйтесь образами небесных созданий эпохи Возрождения: 
                божественная нежность, скульптурные формы, золото, светлая палитра, 
                драпировки, перья и сияние.
              </p>
            </div>
          </div>
        </div>

        {/* Рекомендации */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Что приветствуется */}
          <div className="lg:col-span-8">
            <div className="mb-8 lg:mb-12">
              <h3 className="font-elegant text-2xl sm:text-3xl lg:text-4xl text-black mb-4">
                Что приветствуется
              </h3>
              <div className="h-px bg-gray-300 w-24 lg:w-32"></div>
            </div>
            
            <div className="space-y-8 lg:space-y-12">
              {guidelines.welcome.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white border border-gray-200 flex items-center justify-center">
                        <span className="text-xs lg:text-sm font-mono text-gray-500">
                          {item.icon}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 pt-1 lg:pt-2">
                      <h4 className="font-elegant text-lg sm:text-xl lg:text-2xl text-black mb-3 group-hover:text-gray-600 transition-colors duration-300 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {index < guidelines.welcome.length - 1 && (
                    <div className="mt-6 lg:mt-8 ml-6 lg:ml-8 h-px bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Что избегать */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="bg-white p-6 lg:p-8 border border-gray-200 lg:sticky lg:top-8">
              <div className="mb-6 lg:mb-8">
                <h3 className="font-elegant text-xl lg:text-2xl text-black mb-4">
                  Что избегать
                </h3>
                <div className="h-px bg-gray-300 w-16"></div>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                {guidelines.avoid.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gray-400 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>

              {/* Дополнительная информация */}
              <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic leading-relaxed">
                  "Красота — это гармония души, отражённая во внешнем облике"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Финальный призыв */}
        <div className="mt-20 sm:mt-24 lg:mt-32 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="font-elegant text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-6 lg:mb-8">
              Позвольте своему образу рассказать историю небесной красоты и божественной элегантности
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-gray-400"></div>
              <div className="w-1 h-1 bg-gray-300 mt-1"></div>
              <div className="w-3 h-3 bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode; 