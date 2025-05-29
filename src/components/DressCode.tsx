import React from 'react';

const DressCode: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative" data-section="dresscode">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Простой заголовок */}
        <div className="mb-8 lg:mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4">
            Dress Code
          </p>
          <h2 className="font-elegant text-3xl sm:text-4xl lg:text-5xl font-light text-black leading-tight">
            Angels of the Renaissance
          </h2>
          
          {/* Декоративная линия после заголовка */}
          <div className="mt-6 lg:mt-8">
            <div className="h-px bg-gray-300 w-24 lg:w-32 mx-auto"></div>
          </div>
        </div>

        {/* Основной текст */}
        <div className="max-w-2xl mx-auto space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed">
          <p>
            Вдохновляйтесь образами небесных созданий эпохи Возрождения: 
            божественная нежность, скульптурные формы, золото, светлая палитра, 
            драпировки, перья и сияние.
          </p>
          
          <div className="space-y-4">
            <p><strong>Что приветствуется:</strong></p>
            <ul className="text-left space-y-2 max-w-xl mx-auto">
              <li>• Платья и костюмы в духе Ренессанса: корсеты, струящиеся ткани, завышенная талия</li>
              <li>• Светлые, молочные, пудровые оттенки, золото, жемчуг</li>
              <li>• Атлас, бархат, органза, шёлк</li>
              <li>• Акценты: перья, фресковый макияж, нимбы, крылья (в меру), сияющая кожа</li>
              <li>• Образы, будто вы сошли с полотен Боттичелли, Рафаэля, Карваджо</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p><strong>Что избегать:</strong></p>
            <p>Современного кэжуала, спортивных элементов, тёмного тотал-лука</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode; 