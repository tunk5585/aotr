import React from 'react';

const EventInfo: React.FC = () => {
  const addToCalendar = () => {
    // Данные события
    const eventTitle = "Angels of the Renaissance - День рождения Элеоноры";
    const eventDate = "20250627"; // YYYYMMDD формат
    const eventTime = "180000"; // HHMMSS формат (18:00 - время сбора)
    const eventEndTime = "230000"; // HHMMSS формат (23:00)
    const eventDescription = "Вечеринка в стиле Ренессанса. Дресс-код: небесные ангелы эпохи Возрождения. Сбор гостей в 18:00.";
    const eventLocation = "Yauza place, Яузский бул., 12, Москва"; // Место проведения

    // Для мобильных устройств - пробуем открыть нативный календарь
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Создаем универсальную ссылку для календаря
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventDate}T${eventTime}/${eventDate}T${eventEndTime}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
      
      // Пробуем открыть в календаре устройства
      const calendarIntent = `intent://calendar/events?title=${encodeURIComponent(eventTitle)}&startTime=${new Date(2025, 5, 27, 18, 0).getTime()}&endTime=${new Date(2025, 5, 27, 23, 0).getTime()}#Intent;scheme=content;package=com.android.calendar;end`;
      
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

  const openMaps = () => {
    const address = "Яузский бул., 12, Москва";
    const encodedAddress = encodeURIComponent(address);
    
    // Для мобильных устройств пробуем открыть нативные карты
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // Для iOS - пробуем Apple Maps, fallback на Google Maps
        const appleMapsUrl = `maps://maps.apple.com/?q=${encodedAddress}`;
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        
        // Пробуем Apple Maps
        const link = document.createElement('a');
        link.href = appleMapsUrl;
        link.click();
        
        // Fallback на Google Maps через небольшую задержку
        setTimeout(() => {
          window.open(googleMapsUrl, '_blank');
        }, 1000);
      } else {
        // Для Android - Google Maps intent
        const googleMapsIntent = `geo:0,0?q=${encodedAddress}`;
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        
        try {
          window.location.href = googleMapsIntent;
        } catch (e) {
          window.open(googleMapsUrl, '_blank');
        }
      }
    } else {
      // Для десктопа - Google Maps
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden" data-section="eventinfo">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-12 w-px h-32 bg-gray-100 rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-24 right-16 w-px h-40 bg-gray-100 -rotate-45 hidden lg:block"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-px bg-gray-100 transform -translate-y-1/2 hidden xl:block"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center">
          <div className="space-y-6 md:space-y-12 lg:space-y-8">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400">
              Event Details
            </p>
            <h2 className="font-elegant text-3xl sm:text-4xl lg:text-5xl font-light text-black leading-[0.8]">
              Время и место
            </h2>
            <div className="h-px bg-gray-300 w-24 lg:w-32 mx-auto"></div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Левая колонка - Время */}
          <div className="space-y-8 lg:space-y-12">
            <div className="bg-gray-50 p-8 sm:p-10 lg:p-12 text-center">
              <div className="space-y-6 lg:space-y-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500">
                    Время сбора гостей
                  </p>
                  <p className="font-elegant text-3xl sm:text-4xl lg:text-5xl text-black font-light">
                    18:00
                  </p>
                  <p className="text-base lg:text-lg text-gray-700 font-extralight">
                    27 июня 2025 года
                  </p>
                </div>

                <button 
                  onClick={addToCalendar}
                  className="bg-black text-white py-3 px-6 lg:py-4 lg:px-8 text-sm lg:text-base hover:bg-gray-800 transition-colors duration-300 font-medium w-full"
                >
                  Добавить в календарь
                </button>
              </div>
            </div>
          </div>

          {/* Правая колонка - Место */}
          <div className="space-y-8 lg:space-y-12">
            <div className="bg-gray-50 p-8 sm:p-10 lg:p-12 text-center">
              <div className="space-y-6 lg:space-y-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500">
                    Место проведения
                  </p>
                  <div className="space-y-2">
                    <p className="font-elegant text-2xl sm:text-3xl lg:text-4xl text-black font-light">
                      Yauza place
                    </p>
                    <p className="text-base lg:text-lg text-gray-700 font-extralight">
                      Яузский бул., 12, Москва
                    </p>
                  </div>
                </div>

                <button 
                  onClick={openMaps}
                  className="bg-black text-white py-3 px-6 lg:py-4 lg:px-8 text-sm lg:text-base hover:bg-gray-800 transition-colors duration-300 font-medium w-full"
                >
                  Открыть карты
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo; 