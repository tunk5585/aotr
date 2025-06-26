import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LazyImageLoader from './components/LazyImageLoader';
import Header from './components/Header';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import EventInfo from './components/EventInfo';
import Contact from './components/Contact';
import GiftCollection from './components/GiftCollection';

function App() {
  // Возможность пропустить загрузку для разработки
  const skipLoading = process.env.REACT_APP_SKIP_LOADING === 'true' || 
                     localStorage.getItem('skipLoading') === 'true';
  
  const [isLoading, setIsLoading] = useState(!skipLoading);
  const [showContent, setShowContent] = useState(skipLoading);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Небольшая задержка для плавного появления контента
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Функция для изменения theme-color браузера
  useEffect(() => {
    if (!showContent) return;

    const updateThemeColor = () => {
      const sections = [
        { element: document.querySelector('header'), color: '#000000' }, // Header - черный
        { element: document.querySelector('[data-section="gallery"]'), color: '#000000' }, // Gallery - черный  
        { element: document.querySelector('[data-section="dresscode"]'), color: '#ffffff' }, // DressCode - белый
        { element: document.querySelector('[data-section="eventinfo"]'), color: '#ffffff' }, // EventInfo - белый
        { element: document.querySelector('[data-section="gift"]'), color: '#ffffff' }, // GiftCollection - белый
        { element: document.querySelector('[data-section="contact"]'), color: '#ffffff' } // Contact - белый
      ];

      const viewportHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      
      // Находим существующий meta тег theme-color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (!metaThemeColor) return;

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = scrollTop + rect.top;
          const elementBottom = elementTop + rect.height;
          
          // Проверяем, занимает ли секция больше половины экрана
          if (scrollTop >= elementTop - viewportHeight / 2 && scrollTop < elementBottom - viewportHeight / 2) {
            // Обновляем существующий meta тег theme-color
            metaThemeColor.setAttribute('content', section.color);
            break;
          }
        }
      }
    };

    // Устанавливаем начальный цвет
    updateThemeColor();
    
    // Добавляем слушатель скролла
    window.addEventListener('scroll', updateThemeColor);
    window.addEventListener('resize', updateThemeColor);

    return () => {
      window.removeEventListener('scroll', updateThemeColor);
      window.removeEventListener('resize', updateThemeColor);
    };
  }, [showContent]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div 
      className={`min-h-screen transition-opacity duration-1000 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Компонент для фоновой загрузки оставшихся изображений */}
      <LazyImageLoader enabled={showContent} />
      
      <Header />
      <Gallery />
      <DressCode />
      <EventInfo />
      <GiftCollection />
      <Contact />
    </div>
  );
}

export default App;
