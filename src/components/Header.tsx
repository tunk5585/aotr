import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden pt-8 sm:pt-12 lg:pt-16 xl:pt-20">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Основной контент */}
        <div className="text-center space-y-12 lg:space-y-14">
          
          {/* Заголовок */}
          <div className="space-y-6 lg:space-y-8">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
              Birthday Celebration
            </p>
            
            <h1 className="font-divine text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-black leading-[0.9] tracking-wide divine-halo">
              Angels of the
              <br />
              <span className="text-gray-500">Renaissance</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="h-px bg-gray-300 w-16 lg:w-24"></div>
              <div className="w-2 h-2 bg-gold transform rotate-45"></div>
              <div className="h-px bg-gray-300 w-16 lg:w-24"></div>
            </div>
          </div>

          {/* Информация о вечеринке */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="font-celestial text-2xl sm:text-3xl lg:text-4xl font-light text-black">
              Элеонора Абрамова
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              имеет честь пригласить вас на вечеринку по случаю своего дня рождения
            </p>
          </div>

          {/* Дата */}
          <div className="inline-block elegant-date py-6 px-10 lg:py-8 lg:px-12">
            <div className="text-center space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                Save the Date
              </p>
              <time className="font-celestial text-2xl lg:text-3xl xl:text-4xl font-medium block text-black">
                27 июня 2025 года
              </time>
            </div>
          </div>

          {/* Финальное сообщение */}
          <div className="pt-6">
            <p className="text-sm text-gray-500 italic">
              Пожалуйста, сохраните эту дату в своих календарях
            </p>
          </div>
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 border-b border-r border-gray-400 transform rotate-45"></div>
      </div>
    </header>
  );
};

export default Header; 