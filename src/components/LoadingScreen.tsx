import React, { useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  useEffect(() => {
    const preloadResources = async () => {
      // Минимальная искусственная задержка (показываем ореол минимум 2.5 секунды)
      const minimumDisplayTime = 2500; // 2.5 секунды
      const startTime = Date.now();

      try {
        // Ждем готовности DOM и window.load
        if (document.readyState !== 'complete') {
          await new Promise(resolve => {
            if (document.readyState === 'complete') {
              resolve(void 0);
            } else {
              const handleLoad = () => {
                document.removeEventListener('DOMContentLoaded', handleLoad);
                window.removeEventListener('load', handleLoad);
                resolve(void 0);
              };
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', handleLoad);
              }
              window.addEventListener('load', handleLoad);
            }
          });
        }

        // Ждем готовности шрифтов
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready.catch(() => {
            // Игнорируем ошибки шрифтов
          });
        }

        // Предзагружаем критически важные изображения галереи (первые 10)
        const criticalImages = Array.from({ length: 10 }, (_, i) => {
          try {
            return require(`../assets/images/photo_${i + 1}_2025-05-29_13-24-52.jpg`);
          } catch {
            return null;
          }
        }).filter(Boolean);

        if (criticalImages.length > 0) {
          const imagePromises = criticalImages.map((url) => {
            return new Promise<void>((resolve) => {
              const img = new Image();
              const timeout = setTimeout(() => resolve(), 1000); // Таймаут на 1 сек
              
              img.onload = () => {
                clearTimeout(timeout);
                resolve();
              };
              img.onerror = () => {
                clearTimeout(timeout);
                resolve(); // Продолжаем даже при ошибке
              };
              img.src = url;
            });
          });

          await Promise.allSettled(imagePromises); // Используем allSettled вместо all
        }

        // Проверяем, что прошло минимальное время показа
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < minimumDisplayTime) {
          await new Promise(resolve => setTimeout(resolve, minimumDisplayTime - elapsedTime));
        }

        // Дополнительная пауза для плавности
        await new Promise(resolve => setTimeout(resolve, 300));
        
      } catch (error) {
        console.warn('Loading screen error:', error);
        // Даже при ошибках продолжаем показывать минимальное время
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < minimumDisplayTime) {
          await new Promise(resolve => setTimeout(resolve, minimumDisplayTime - elapsedTime));
        }
      }
      
      onLoadingComplete();
    };

    preloadResources();
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Только ореол без текста */}
      <div className="divine-halo w-64 h-32"></div>
    </div>
  );
};

export default LoadingScreen; 