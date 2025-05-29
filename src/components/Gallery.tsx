import React, { useState, useEffect, useRef, useCallback } from 'react';

const Gallery: React.FC = () => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const galleryRef = useRef<HTMLElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);

  const references = [
    { id: 1, src: require('../assets/images/photo_1_2025-05-29_13-24-52.jpg'), alt: 'Ангел 1' },
    { id: 2, src: require('../assets/images/photo_2_2025-05-29_13-24-52.jpg'), alt: 'Ангел 2' },
    { id: 3, src: require('../assets/images/photo_3_2025-05-29_13-24-52.jpg'), alt: 'Ангел 3' },
    { id: 4, src: require('../assets/images/photo_4_2025-05-29_13-24-52.jpg'), alt: 'Ангел 4' },
    { id: 5, src: require('../assets/images/photo_5_2025-05-29_13-24-52.jpg'), alt: 'Ангел 5' },
    { id: 6, src: require('../assets/images/photo_6_2025-05-29_13-24-52.jpg'), alt: 'Ангел 6' },
    { id: 7, src: require('../assets/images/photo_7_2025-05-29_13-24-52.jpg'), alt: 'Ангел 7' },
    { id: 8, src: require('../assets/images/photo_8_2025-05-29_13-24-52.jpg'), alt: 'Ангел 8' },
    { id: 9, src: require('../assets/images/photo_9_2025-05-29_13-24-52.jpg'), alt: 'Ангел 9' },
    { id: 10, src: require('../assets/images/photo_10_2025-05-29_13-24-52.jpg'), alt: 'Ангел 10' },
    { id: 11, src: require('../assets/images/photo_11_2025-05-29_13-24-52.jpg'), alt: 'Ангел 11' },
    { id: 12, src: require('../assets/images/photo_12_2025-05-29_13-24-52.jpg'), alt: 'Ангел 12' },
    { id: 13, src: require('../assets/images/photo_13_2025-05-29_13-24-52.jpg'), alt: 'Ангел 13' },
    { id: 14, src: require('../assets/images/photo_14_2025-05-29_13-24-52.jpg'), alt: 'Ангел 14' },
    { id: 15, src: require('../assets/images/photo_15_2025-05-29_13-24-52.jpg'), alt: 'Ангел 15' },
    { id: 16, src: require('../assets/images/photo_16_2025-05-29_13-24-52.jpg'), alt: 'Ангел 16' },
    { id: 17, src: require('../assets/images/photo_17_2025-05-29_13-24-52.jpg'), alt: 'Ангел 17' },
    { id: 18, src: require('../assets/images/photo_18_2025-05-29_13-24-52.jpg'), alt: 'Ангел 18' },
    { id: 19, src: require('../assets/images/photo_19_2025-05-29_13-24-52.jpg'), alt: 'Ангел 19' },
    { id: 20, src: require('../assets/images/photo_20_2025-05-29_13-24-52.jpg'), alt: 'Ангел 20' },
    { id: 21, src: require('../assets/images/photo_21_2025-05-29_13-24-52.jpg'), alt: 'Ангел 21' },
    { id: 22, src: require('../assets/images/photo_22_2025-05-29_13-24-52.jpg'), alt: 'Ангел 22' },
    { id: 23, src: require('../assets/images/photo_23_2025-05-29_13-24-52.jpg'), alt: 'Ангел 23' },
    { id: 24, src: require('../assets/images/photo_24_2025-05-29_13-24-52.jpg'), alt: 'Ангел 24' },
    { id: 25, src: require('../assets/images/photo_25_2025-05-29_13-24-52.jpg'), alt: 'Ангел 25' },
    { id: 26, src: require('../assets/images/photo_26_2025-05-29_13-24-52.jpg'), alt: 'Ангел 26' },
    { id: 27, src: require('../assets/images/photo_27_2025-05-29_13-24-52.jpg'), alt: 'Ангел 27' },
    { id: 28, src: require('../assets/images/photo_28_2025-05-29_13-24-52.jpg'), alt: 'Ангел 28' },
    { id: 29, src: require('../assets/images/photo_29_2025-05-29_13-24-52.jpg'), alt: 'Ангел 29' },
    { id: 30, src: require('../assets/images/photo_30_2025-05-29_13-24-52.jpg'), alt: 'Ангел 30' },
    { id: 31, src: require('../assets/images/photo_31_2025-05-29_13-24-52.jpg'), alt: 'Ангел 31' },
    { id: 32, src: require('../assets/images/photo_32_2025-05-29_13-24-52.jpg'), alt: 'Ангел 32' },
    { id: 33, src: require('../assets/images/photo_33_2025-05-29_13-24-52.jpg'), alt: 'Ангел 33' },
    { id: 34, src: require('../assets/images/photo_34_2025-05-29_13-24-52.jpg'), alt: 'Ангел 34' },
    { id: 35, src: require('../assets/images/photo_35_2025-05-29_13-24-52.jpg'), alt: 'Ангел 35' },
    { id: 36, src: require('../assets/images/photo_36_2025-05-29_13-24-52.jpg'), alt: 'Ангел 36' },
    { id: 37, src: require('../assets/images/photo_37_2025-05-29_13-24-52.jpg'), alt: 'Ангел 37' },
    { id: 38, src: require('../assets/images/photo_38_2025-05-29_13-24-52.jpg'), alt: 'Ангел 38' },
    { id: 39, src: require('../assets/images/photo_39_2025-05-29_13-24-52.jpg'), alt: 'Ангел 39' },
    { id: 40, src: require('../assets/images/photo_40_2025-05-29_13-24-52.jpg'), alt: 'Ангел 40' },
    { id: 41, src: require('../assets/images/photo_41_2025-05-29_13-24-52.jpg'), alt: 'Ангел 41' },
    { id: 42, src: require('../assets/images/photo_42_2025-05-29_13-24-52.jpg'), alt: 'Ангел 42' },
    { id: 43, src: require('../assets/images/photo_43_2025-05-29_13-24-52.jpg'), alt: 'Ангел 43' },
    { id: 44, src: require('../assets/images/photo_44_2025-05-29_13-24-52.jpg'), alt: 'Ангел 44' },
    { id: 45, src: require('../assets/images/photo_45_2025-05-29_13-24-52.jpg'), alt: 'Ангел 45' },
    { id: 46, src: require('../assets/images/photo_46_2025-05-29_13-24-52.jpg'), alt: 'Ангел 46' }
  ];

  // Функция для расчета расстояния до портала и интенсивности свечения
  const calculateGlowIntensity = useCallback((element: HTMLElement): number => {
    if (!portalRef.current || !isGalleryVisible) return 0;
    
    const portalRect = portalRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    
    const portalCenter = portalRect.top + portalRect.height / 2;
    const elementCenter = elementRect.top + elementRect.height / 2;
    
    const distance = Math.abs(portalCenter - elementCenter);
    const maxDistance = window.innerHeight * 0.4; // Уменьшено с полной высоты до 40%
    
    // Интенсивность от 0 до 1, максимальная когда элемент близко к порталу
    const intensity = Math.max(0, 1 - (distance / maxDistance));
    return Math.pow(intensity, 1.5); // Изменено с 2 на 1.5 для более плавного перехода
  }, [isGalleryVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;

      const galleryRect = galleryRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Портал показывается когда галерея активна и остается до самого конца
      const isVisible = galleryRect.top <= viewportHeight * 0.5 && galleryRect.bottom > 0;
      setIsGalleryVisible(isVisible);

      // Расчет прогресса скролла в галерее
      if (isVisible) {
        const progress = Math.max(0, Math.min(1, -galleryRect.top / (galleryRect.height - viewportHeight)));
        setScrollProgress(progress);

        // Обновляем свечение для каждой фотографии
        const photoElements = galleryRef.current.querySelectorAll('.photo-item');
        photoElements.forEach((element) => {
          const intensity = calculateGlowIntensity(element as HTMLElement);
          const photoEl = element as HTMLElement;
          
          if (intensity > 0.1) {
            photoEl.style.filter = `brightness(${1 + intensity * 3}) saturate(${1 + intensity * 0.5}) blur(${intensity * 1}px)`;
            photoEl.style.boxShadow = `
              0 0 ${intensity * 30}px rgba(255, 255, 255, ${intensity}),
              0 0 ${intensity * 60}px rgba(255, 255, 255, ${intensity * 0.8}),
              0 0 ${intensity * 100}px rgba(255, 255, 255, ${intensity * 0.6}),
              0 0 ${intensity * 150}px rgba(255, 255, 255, ${intensity * 0.4})
            `;
            photoEl.style.transform = `scale(${1 + intensity * 0.15}) translateY(${-intensity * 15}px)`;
            photoEl.style.opacity = `${Math.max(0.6, 1 - intensity * 0.4)}`;
          } else {
            photoEl.style.filter = 'none';
            photoEl.style.boxShadow = 'none';
            photoEl.style.transform = 'none';
            photoEl.style.opacity = '1';
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Инициализация

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isGalleryVisible, calculateGlowIntensity]);

  return (
    <section ref={galleryRef} className="py-16 sm:py-24 lg:py-32 bg-black text-white relative overflow-hidden" data-section="gallery">
      {/* Портал - появляется при скролле до галереи */}
      <div 
        ref={portalRef}
        className={`fixed top-4 md:top-8 lg:top-12 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 ${
          isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
        }`}
        style={{
          filter: `brightness(${1 + scrollProgress * 0.5})`,
          perspective: '1000px'
        }}
      >
        {/* ВАРИАНТ 1: Классическая тарелка в перспективе */}
        <div className="relative w-48 h-24 sm:w-56 sm:h-28" style={{ 
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity'
        }}>
          {/* Внешний эллипс */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{ 
              background: 'radial-gradient(ellipse 100% 30% at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.2) 100%)',
              boxShadow: '0 0 60px rgba(255,255,255,0.3), inset 0 0 30px rgba(255,255,255,0.2)',
              animation: 'portal-spin-outer 15s linear infinite',
              willChange: 'transform',
              borderRadius: '50%'
            }}
          />
          
          {/* Средний эллипс */}
          <div 
            className="absolute inset-x-6 inset-y-2 rounded-full"
            style={{ 
              background: 'radial-gradient(ellipse 80% 40% at center, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
              boxShadow: '0 0 40px rgba(255,255,255,0.4), inset 0 0 20px rgba(255,255,255,0.3)',
              animation: 'portal-spin-middle 10s linear infinite reverse',
              willChange: 'transform',
              borderRadius: '50%'
            }}
          />
          
          {/* Внутренний эллипс */}
          <div 
            className="absolute inset-x-12 inset-y-4 rounded-full"
            style={{ 
              background: 'radial-gradient(ellipse 60% 50% at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.2) 100%)',
              boxShadow: '0 0 30px rgba(255,255,255,0.6), inset 0 0 15px rgba(255,255,255,0.5)',
              animation: 'portal-spin-inner 6s linear infinite',
              willChange: 'transform',
              borderRadius: '50%'
            }}
          />
          
          {/* Центральная воронка */}
          <div 
            className="absolute inset-x-16 inset-y-6 rounded-full"
            style={{
              background: 'radial-gradient(ellipse 40% 60% at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.2) 60%, transparent 100%)',
              boxShadow: '0 0 50px rgba(255,255,255,0.8), inset 0 0 20px rgba(255,255,255,0.9)',
              animation: 'portal-pulse-center 2s ease-in-out infinite',
              willChange: 'transform, opacity',
              borderRadius: '50%'
            }}
          />
          
          {/* Упрощенные энергетические кольца */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${25 - i * 5}%`,
                right: `${25 - i * 5}%`,
                top: `${42 + i * 3}%`,
                height: '2px',
                background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,${0.7 - i * 0.2}) 50%, transparent 100%)`,
                transform: 'rotateX(75deg)',
                animation: `pulse ${2.5 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                willChange: 'opacity'
              }}
            />
          ))}
          
          {/* Уменьшенное количество частиц */}
          <div className="absolute -inset-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  top: `${50 + 25 * Math.sin((i * 45 * Math.PI) / 180) * 0.3}%`,
                  left: `${50 + 35 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                  animation: 'pulse 2s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`,
                  boxShadow: '0 0 8px rgba(255,255,255,0.8)',
                  transform: 'rotateX(75deg)',
                  willChange: 'opacity'
                }}
              />
            ))}
          </div>
          
          {/* Упрощенные световые лучи */}
          <div className="absolute inset-0 rounded-full opacity-60">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-gradient-to-r from-transparent via-white to-transparent"
                style={{
                  top: '50%',
                  left: '10%',
                  right: '10%',
                  height: '1px',
                  transformOrigin: 'center',
                  transform: `rotateX(75deg) rotateZ(${i * 45}deg)`,
                  animation: 'spin 8s linear infinite',
                  animationDelay: `${i * 0.5}s`,
                  opacity: 0.4,
                  willChange: 'transform'
                }}
              />
            ))}
          </div>
        </div>

        {/* 
        ВАРИАНТ 2: Минималистичная тарелка (замените код выше на этот)
        <div className="relative w-52 h-20 sm:w-60 sm:h-24" style={{ transformStyle: 'preserve-3d' }}>
          <div 
            className="absolute inset-0 rounded-full border-2 border-white/40"
            style={{ 
              transform: 'rotateX(80deg)',
              background: 'radial-gradient(ellipse 90% 20% at center, rgba(255,255,255,0.3) 0%, transparent 60%)',
              boxShadow: '0 0 80px rgba(255,255,255,0.4)'
            }}
          />
          <div 
            className="absolute inset-8 rounded-full border border-white/60"
            style={{ 
              transform: 'rotateX(80deg)',
              background: 'radial-gradient(ellipse 80% 30% at center, rgba(255,255,255,0.6) 0%, transparent 50%)',
              animation: 'pulse 3s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute inset-16 rounded-full"
            style={{ 
              transform: 'rotateX(80deg)',
              background: 'radial-gradient(ellipse 60% 40% at center, rgba(255,255,255,0.9) 0%, transparent 40%)',
              boxShadow: '0 0 40px rgba(255,255,255,0.8)',
              animation: 'pulse 2s ease-in-out infinite reverse'
            }}
          />
        </div>
        */}

        {/* 
        ВАРИАНТ 3: Технологичная тарелка с сегментами (замените код выше на этот)
        <div className="relative w-56 h-28 sm:w-64 sm:h-32" style={{ transformStyle: 'preserve-3d' }}>
          <div 
            className="absolute inset-0 rounded-full"
            style={{ 
              transform: 'rotateX(70deg)',
              background: 'conic-gradient(from 0deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0.8) 100%)',
              boxShadow: '0 0 60px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.2)',
              animation: 'spin 20s linear infinite'
            }}
          />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border-l-2 border-white/50"
              style={{
                left: '50%',
                top: '20%',
                bottom: '20%',
                width: '50%',
                transformOrigin: 'left center',
                transform: `rotateX(70deg) rotateZ(${i * 45}deg)`,
                animation: `pulse ${3 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
        */}

        {/* 
        ВАРИАНТ 4: Голографическая тарелка (замените код выше на этот)
        <div className="relative w-50 h-25 sm:w-58 sm:h-29" style={{ transformStyle: 'preserve-3d' }}>
          <div 
            className="absolute inset-0 rounded-full"
            style={{ 
              transform: 'rotateX(78deg)',
              background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.6) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.6) 75%, rgba(255,255,255,0.1) 100%)',
              backgroundSize: '20px 20px',
              boxShadow: '0 0 100px rgba(255,255,255,0.3), inset 0 0 50px rgba(255,255,255,0.1)',
              animation: 'spin 25s linear infinite'
            }}
          />
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${15 + i * 10}%`,
                right: `${15 + i * 10}%`,
                top: `${30 + i * 5}%`,
                bottom: `${30 + i * 5}%`,
                border: `1px solid rgba(255,255,255,${0.7 - i * 0.2})`,
                transform: 'rotateX(78deg)',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i}s`
              }}
            />
          ))}
        </div>
        */}
      </div>

      {/* Декоративные элементы только для больших экранов */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-px h-48 bg-white/10 rotate-12 hidden xl:block"></div>
        <div className="absolute bottom-1/4 right-20 w-px h-64 bg-white/10 -rotate-12 hidden xl:block"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-px bg-white/5 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="mb-16 sm:mb-20 lg:mb-24 text-center">
          <div className="space-y-6 md:space-y-8 lg:space-y-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400 mb-4 lg:mb-6">
              Visual References
            </p>
            <h2 className="font-elegant text-3xl sm:text-4xl lg:text-5xl font-light leading-[0.8]">
              Галерея
              <br />
              <span className="text-white">вдохновения</span>
            </h2>
          </div>
          
          <div className="mt-8 lg:mt-16">
            <div className="h-px bg-gray-300 w-24 lg:w-32 mx-auto"></div>
          </div>
        </div>

        {/* Сетка галереи - облачное расположение с перекрытиями */}
        <div className="space-y-4 sm:space-y-6">
          {/* Группа 1 */}
          <div className="flex flex-wrap gap-2 justify-center items-start -space-x-4 sm:-space-x-6">
            {references.slice(0, 4).map((ref, index) => (
              <div 
                key={ref.id}
                className={`photo-item relative overflow-hidden ${
                  index === 0 ? 'w-40 sm:w-48 lg:w-56' : 
                  index === 1 ? 'w-32 sm:w-40 lg:w-44' :
                  index === 2 ? 'w-36 sm:w-44 lg:w-52' :
                  'w-28 sm:w-36 lg:w-40'
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  transition: 'filter 0.1s ease-out, box-shadow 0.1s ease-out, transform 0.1s ease-out, opacity 0.1s ease-out',
                  willChange: 'opacity, filter, transform',
                  transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(3deg)',
                  marginTop: index === 1 ? '2rem' : index === 3 ? '1.5rem' : '0',
                  marginLeft: index > 0 ? '-1rem' : '0',
                  zIndex: 10 + index
                }}
              >
                <div className="relative">
                  <img
                    src={ref.src}
                    alt={ref.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Группа 2 */}
          <div className="flex flex-wrap gap-1 justify-start items-start ml-8 sm:ml-16 lg:ml-24 -space-x-6 sm:-space-x-8">
            {references.slice(4, 9).map((ref, index) => (
              <div 
                key={ref.id}
                className={`photo-item relative overflow-hidden ${
                  index === 0 ? 'w-36 sm:w-44 lg:w-48' : 
                  index === 1 ? 'w-44 sm:w-52 lg:w-60' :
                  index === 2 ? 'w-32 sm:w-36 lg:w-44' :
                  index === 3 ? 'w-40 sm:w-48 lg:w-56' :
                  'w-28 sm:w-32 lg:w-40'
                }`}
                style={{
                  animationDelay: `${(index + 4) * 0.05}s`,
                  transition: 'filter 0.1s ease-out, box-shadow 0.1s ease-out, transform 0.1s ease-out, opacity 0.1s ease-out',
                  willChange: 'opacity, filter, transform',
                  transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-4deg)',
                  marginTop: index === 2 ? '3rem' : index === 4 ? '2rem' : index === 1 ? '1rem' : '0',
                  marginLeft: index > 0 ? '-1.5rem' : '0',
                  zIndex: 15 + index
                }}
              >
                <div className="relative">
                  <img
                    src={ref.src}
                    alt={ref.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Группа 3 - центральная */}
          <div className="flex flex-wrap gap-2 justify-center items-start -space-x-5 sm:-space-x-7">
            {references.slice(9, 15).map((ref, index) => (
              <div 
                key={ref.id}
                className={`photo-item relative overflow-hidden ${
                  index === 0 ? 'w-48 sm:w-56 lg:w-64' : 
                  index === 1 ? 'w-32 sm:w-40 lg:w-48' :
                  index === 2 ? 'w-36 sm:w-44 lg:w-52' :
                  index === 3 ? 'w-44 sm:w-52 lg:w-56' :
                  index === 4 ? 'w-40 sm:w-48 lg:w-52' :
                  'w-32 sm:w-40 lg:w-44'
                }`}
                style={{
                  animationDelay: `${(index + 9) * 0.05}s`,
                  transition: 'filter 0.1s ease-out, box-shadow 0.1s ease-out, transform 0.1s ease-out, opacity 0.1s ease-out',
                  willChange: 'opacity, filter, transform',
                  transform: index % 3 === 0 ? 'rotate(-1deg)' : index % 3 === 1 ? 'rotate(2deg)' : 'rotate(-3deg)',
                  marginTop: index === 2 ? '2.5rem' : index === 4 ? '1.5rem' : index === 5 ? '3rem' : '0',
                  marginLeft: index > 0 ? '-1.25rem' : '0',
                  zIndex: 20 + index
                }}
              >
                <div className="relative">
                  <img
                    src={ref.src}
                    alt={ref.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Группа 4 */}
          <div className="flex flex-wrap gap-1 justify-end items-start mr-8 sm:mr-16 lg:mr-24 -space-x-4 sm:-space-x-6">
            {references.slice(15, 21).map((ref, index) => (
              <div 
                key={ref.id}
                className={`photo-item relative overflow-hidden ${
                  index === 0 ? 'w-40 sm:w-48 lg:w-52' : 
                  index === 1 ? 'w-36 sm:w-44 lg:w-48' :
                  index === 2 ? 'w-32 sm:w-40 lg:w-44' :
                  index === 3 ? 'w-44 sm:w-52 lg:w-60' :
                  index === 4 ? 'w-28 sm:w-36 lg:w-40' :
                  'w-40 sm:w-48 lg:w-56'
                }`}
                style={{
                  animationDelay: `${(index + 15) * 0.05}s`,
                  transition: 'filter 0.1s ease-out, box-shadow 0.1s ease-out, transform 0.1s ease-out, opacity 0.1s ease-out',
                  willChange: 'opacity, filter, transform',
                  transform: index % 2 === 0 ? 'rotate(3deg)' : 'rotate(-2deg)',
                  marginTop: index === 1 ? '1.5rem' : index === 3 ? '2.5rem' : index === 4 ? '1rem' : '0',
                  marginLeft: index > 0 ? '-1rem' : '0',
                  zIndex: 25 + index
                }}
              >
                <div className="relative">
                  <img
                    src={ref.src}
                    alt={ref.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Группа 5 - финальная, плотная куча */}
          <div className="flex flex-wrap gap-0 justify-center items-start -space-x-8 sm:-space-x-10 px-4 sm:px-8">
            {references.slice(21).map((ref, index) => (
              <div 
                key={ref.id}
                className={`photo-item relative overflow-hidden ${
                  index % 4 === 0 ? 'w-36 sm:w-44 lg:w-48' : 
                  index % 4 === 1 ? 'w-32 sm:w-40 lg:w-44' :
                  index % 4 === 2 ? 'w-40 sm:w-48 lg:w-52' :
                  'w-28 sm:w-36 lg:w-40'
                }`}
                style={{
                  animationDelay: `${(index + 21) * 0.05}s`,
                  transition: 'filter 0.1s ease-out, box-shadow 0.1s ease-out, transform 0.1s ease-out, opacity 0.1s ease-out',
                  willChange: 'opacity, filter, transform',
                  transform: index % 3 === 0 ? 'rotate(-1deg)' : index % 3 === 1 ? 'rotate(4deg)' : 'rotate(-2deg)',
                  marginTop: index % 5 === 0 ? '0' : index % 5 === 1 ? '3rem' : index % 5 === 2 ? '1.5rem' : index % 5 === 3 ? '2rem' : '1rem',
                  marginLeft: index > 0 ? '-2rem' : '0',
                  zIndex: 30 + index
                }}
              >
                <div className="relative">
                  <img
                    src={ref.src}
                    alt={ref.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Нижний блок */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-6">
              <div className="h-px bg-gray-300 w-12 lg:w-16"></div>
              <div className="w-2 h-2 bg-gold transform rotate-45" style={{
                boxShadow: '0 0 8px rgba(255, 215, 0, 0.6), 0 0 16px rgba(255, 215, 0, 0.4), 0 0 24px rgba(255, 215, 0, 0.2)'
              }}></div>
              <div className="h-px bg-gray-300 w-12 lg:w-16"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 