import React, { useEffect } from 'react';

interface LazyImageLoaderProps {
  enabled: boolean;
}

const LazyImageLoader: React.FC<LazyImageLoaderProps> = ({ enabled }) => {
  useEffect(() => {
    if (!enabled) return;

    // Проверяем мобильное устройство
    const isMobile = window.innerWidth < 768;
    
    const loadRemainingImages = async () => {
      // Получаем полный список изображений
      const allImageUrls = Array.from({ length: 46 }, (_, i) => {
        try {
          return require(`../assets/images/photo_${i + 1}_2025-05-29_13-24-52.jpg`);
        } catch {
          return null;
        }
      }).filter(Boolean);

      // Определяем какие изображения уже загружены
      const alreadyLoadedCount = isMobile ? 8 : 15;
      const remainingImages = allImageUrls.slice(alreadyLoadedCount);
      
      // Загружаем оставшиеся изображения по одному с интервалом
      for (const url of remainingImages) {
        await new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Продолжаем даже при ошибке
          img.src = url;
        });
        
        // Небольшая пауза между загрузками (больше на мобильных)
        await new Promise(resolve => setTimeout(resolve, isMobile ? 300 : 150));
      }
      
      console.log('Все изображения загружены в фоне');
    };

    // Запускаем с задержкой, чтобы не мешать основному интерфейсу
    const timer = setTimeout(() => {
      loadRemainingImages();
    }, 2000);

    return () => clearTimeout(timer);
  }, [enabled]);

  // Компонент не рендерит ничего видимого
  return null;
};

export default LazyImageLoader; 