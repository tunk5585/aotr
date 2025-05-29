import React from 'react';

const Gallery: React.FC = () => {
  const references = [
    {
      id: 1,
      category: "Образы",
      title: "Небесная грация",
      description: "Струящиеся ткани и божественная нежность",
      src: require('../assets/images/reference1.jpg'),
      alt: 'Референс 1 - Образ ангела Ренессанса',
      size: "large"
    },
    {
      id: 2,
      category: "Стиль",
      title: "Ренессансная элегантность",
      description: "Корсеты и завышенная талия",
      src: 'https://via.placeholder.com/400x500/F5F5F5/666666?text=Style+Reference',
      alt: 'Референс 2 - Стиль Ренессанса',
      size: "medium"
    },
    {
      id: 3,
      category: "Материалы",
      title: "Благородные ткани",
      description: "Атлас, бархат, органза",
      src: 'https://via.placeholder.com/400x700/E8E8E8/555555?text=Fabric+Reference',
      alt: 'Референс 3 - Ткани',
      size: "tall"
    },
    {
      id: 4,
      category: "Палитра",
      title: "Светлые тона",
      description: "Молочные и жемчужные оттенки",
      src: 'https://via.placeholder.com/400x550/F8F8F8/777777?text=Color+Palette',
      alt: 'Референс 4 - Цветовая палитра',
      size: "medium"
    },
    {
      id: 5,
      category: "Детали",
      title: "Изящные акценты",
      description: "Перья, жемчуг, сияние",
      src: 'https://via.placeholder.com/400x650/EEEEEE/666666?text=Details',
      alt: 'Референс 5 - Детали образа',
      size: "tall"
    },
    {
      id: 6,
      category: "Вдохновение",
      title: "Мастера Возрождения",
      description: "Боттичелли, Рафаэль, Караваджо",
      src: 'https://via.placeholder.com/400x580/F0F0F0/888888?text=Masters',
      alt: 'Референс 6 - Мастера',
      size: "large"
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-black text-white relative overflow-hidden">
      {/* Декоративные элементы только для больших экранов */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-px h-48 bg-white/10 rotate-12 hidden xl:block"></div>
        <div className="absolute bottom-1/4 right-20 w-px h-64 bg-white/10 -rotate-12 hidden xl:block"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-px bg-white/5 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400 mb-4 lg:mb-6">
                Visual References
              </p>
              <h2 className="font-elegant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.8]">
                Галерея
                <br />
                <span className="text-gray-300">вдохновения</span>
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:ml-auto">
                Образы небесных созданий эпохи Возрождения 
                для вашего вдохновения при создании идеального наряда
              </p>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-16">
            <div className="h-px bg-gradient-to-r from-white via-white/20 to-transparent"></div>
          </div>
        </div>

        {/* Сетка галереи - адаптивная */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px]">
          {references.map((ref, index) => (
            <div 
              key={ref.id}
              className={`
                group cursor-pointer relative overflow-hidden bg-white/5 border border-white/10 
                transition-all duration-700 hover:bg-white/10 hover:border-white/20
                ${ref.size === 'large' ? 'sm:col-span-2 lg:col-span-7 lg:row-span-2' : ''}
                ${ref.size === 'medium' ? 'lg:col-span-5' : ''}
                ${ref.size === 'tall' ? 'sm:col-span-1 lg:col-span-5 lg:row-span-2' : ''}
              `}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Изображение */}
              <div className="absolute inset-0">
                <img
                  src={ref.src}
                  alt={ref.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>
              </div>

              {/* Контент */}
              <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 border border-gray-500 px-2 py-1 sm:px-3 inline-block">
                    {ref.category}
                  </span>
                </div>
                
                <div className="transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="font-elegant text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-white mb-2 leading-tight">
                    {ref.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 hidden sm:block">
                    {ref.description}
                  </p>
                </div>

                {/* Стрелка */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border-t border-r border-white transform rotate-45"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Нижний блок */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="inline-block">
            <p className="text-gray-400 text-base sm:text-lg font-light italic px-4">
              "Пусть каждый образ расскажет свою историю"
            </p>
            <div className="mt-4 lg:mt-6 flex justify-center space-x-1">
              <div className="w-2 h-2 bg-white/60"></div>
              <div className="w-1 h-1 bg-white/40 mt-0.5"></div>
              <div className="w-2 h-2 bg-white/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 