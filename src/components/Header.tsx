import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleScroll = () => {
    if (!isScrolledDown) {
      // Скролл вниз к следующему разделу
      const nextSection = document.querySelector('#next-section') || document.querySelector('section:not(header)');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
        // Задержка перед изменением состояния для плавности
        setTimeout(() => setIsScrolledDown(true), 300);
      }
    } else {
      // Скролл наверх
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Задержка перед изменением состояния для плавности
      setTimeout(() => setIsScrolledDown(false), 300);
    }
  };

  const addToCalendar = () => {
    // Данные события
    const eventTitle = "Angels of the Renaissance - День рождения Элеоноры";
    const eventDate = "20250627"; // YYYYMMDD формат
    const eventTime = "190000"; // HHMMSS формат (19:00)
    const eventEndTime = "230000"; // HHMMSS формат (23:00)
    const eventDescription = "Вечеринка в стиле Ренессанса. Дресс-код: небесные ангелы эпохи Возрождения";
    const eventLocation = ""; // Можно добавить локацию если известна

    // Для мобильных устройств - пробуем открыть нативный календарь
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Создаем универсальную ссылку для календаря
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventDate}T${eventTime}/${eventDate}T${eventEndTime}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
      
      // Пробуем открыть в календаре устройства
      const calendarIntent = `intent://calendar/events?title=${encodeURIComponent(eventTitle)}&startTime=${new Date(2025, 5, 27, 19, 0).getTime()}&endTime=${new Date(2025, 5, 27, 23, 0).getTime()}#Intent;scheme=content;package=com.android.calendar;end`;
      
      // Для iOS
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.open(calendarUrl, '_blank');
      } else {
        // Для Android пробуем intent, если не работает - fallback на Google Calendar
        try {
          window.location.href = calendarIntent;
        } catch (e) {
          window.open(calendarUrl, '_blank');
        }
      }
    } else {
      // Для десктопа - открываем Google Calendar
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventDate}T${eventTime}/${eventDate}T${eventEndTime}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
      window.open(calendarUrl, '_blank');
    }
  };

  // Отслеживаем скролл для автоматического переворота стрелки
  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolledDown(scrollTop > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <header className="relative h-[90vh] lg:h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Основной контент */}
        <div className="text-center space-y-8 md:space-y-12 lg:space-y-10">
          
          {/* Заголовок */}
          <div className="space-y-6 md:space-y-8 lg:space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400 font-extralight">
              Birthday Celebration
            </p>
            
            <h1 className="font-divine text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[0.9] tracking-wide divine-halo">
              Angels of the
              <br />
              <span className="text-white">Renaissance</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-6">
              <div className="h-px bg-gray-300 w-12 lg:w-16"></div>
              <div className="w-2 h-2 bg-gold transform rotate-45"></div>
              <div className="h-px bg-gray-300 w-12 lg:w-16"></div>
            </div>
          </div>

          {/* Дата */}
          <div className="space-y-6 md:space-y-8 lg:space-y-6">
            <div 
              className="inline-block elegant-date py-4 px-8 lg:py-6 lg:px-10 cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-black border-2 border-gray-400"
              onClick={addToCalendar}
            >
              <div className="text-center space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-extralight">
                  Save the Date
                </p>
                <time className="font-celestial text-xl lg:text-2xl xl:text-3xl font-medium block text-white">
                  27 июня 2025 года
                </time>
              </div>
            </div>
          </div>

          {/* Имя и приглашение */}
          <div className="space-y-6 md:space-y-8 lg:space-y-6">
            <h2 className="font-celestial text-2xl sm:text-3xl lg:text-4xl font-light text-white">
              Элеонора Абрамова
            </h2>
            <p className="text-base lg:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed font-extralight text-balance">
              имеет честь пригласить вас на вечеринку по случаю своего дня рождения. 
              Будем признательны, если вы сможете поддержать дресс-код мероприятия. 
              Референсы и описание дресс-кода вы найдёте ниже.
            </p>
          </div>
        </div>
      </div>

      {/* Интерактивная кнопка стрелки */}
      <button 
        onClick={handleScroll}
        className="fixed right-8 bottom-8 z-50 group"
        style={{ position: 'fixed' }}
      >
        <div className="relative w-10 h-10 rounded-full bg-white bg-opacity-20 border border-gray-400 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 scroll-arrow-halo">
          <div 
            className={`w-3 h-3 border-b-2 border-r-2 border-gray-300 transform transition-transform duration-500 ${
              isScrolledDown ? 'rotate-[-135deg] translate-y-0.5' : 'rotate-45 -translate-y-0.5'
            }`}
          ></div>
        </div>
      </button>
    </header>
  );
};

export default Header; 