# RisingBlock Component Examples

## 🌟 Авангардный компонент с эффектом небесного вознесения

### Основные возможности:
- **Универсальность**: Оборачивает любой JSX-контент
- **Три уровня интенсивности**: subtle, medium, divine
- **Настраиваемые задержки**: для каскадной анимации
- **Эстетика Ренессанса**: свечение, дымка, элегантность

## 📋 Типы пропсов

```typescript
interface RisingBlockProps {
  children: React.ReactNode;     // Любой JSX контент
  className?: string;            // Дополнительные CSS классы
  delay?: number;               // Задержка анимации в секундах
  intensity?: 'subtle' | 'medium' | 'divine'; // Интенсивность эффекта
}
```

## 🎭 Примеры использования

### 1. Простой заголовок с тонким эффектом
```jsx
<RisingBlock intensity="subtle">
  <h2 className="text-4xl font-elegant">
    Элегантный заголовок
  </h2>
</RisingBlock>
```

### 2. Карточка с средним свечением
```jsx
<RisingBlock intensity="medium" delay={0.2}>
  <div className="bg-white p-8 border border-gray-200">
    <h3>Название карточки</h3>
    <p>Описание с небесным эффектом</p>
  </div>
</RisingBlock>
```

### 3. Божественный блок с максимальным эффектом
```jsx
<RisingBlock intensity="divine" delay={0.5}>
  <div className="bg-black text-white p-12">
    <h1 className="text-6xl">Angels of Renaissance</h1>
    <p>Максимальное свечение и левитация</p>
  </div>
</RisingBlock>
```

### 4. Каскадная анимация списка
```jsx
{items.map((item, index) => (
  <RisingBlock 
    key={item.id}
    intensity="medium"
    delay={0.1 * (index + 1)}
  >
    <div className="p-6">
      {item.content}
    </div>
  </RisingBlock>
))}
```

## 🎨 Эффекты по уровням интенсивности

### Subtle (Тонкий)
- Подъем: -15px
- Свечение: Мягкое белое
- Blur: 2px → 0px
- Scale: 1.01

### Medium (Средний)  
- Подъем: -30px
- Свечение: Умеренное с inset
- Blur: 4px → 0px
- Scale: 1.02

### Divine (Божественный)
- Подъем: -45px
- Свечение: Многослойное + дополнительный ореол
- Blur: 6px → 0px
- Scale: 1.03
- Дополнительный слой свечения

## 🛠️ Технические детали

### Зависимости:
- `framer-motion` - анимации
- `react-intersection-observer` - триггер появления
- `TailwindCSS` - стилизация

### Настройки Intersection Observer:
- `triggerOnce: true` - анимация только один раз
- `threshold: 0.1` - срабатывает при 10% видимости
- `rootMargin: '-50px 0px'` - отступ для раннего срабатывания

### Кастомные timing функции:
- `cubic-bezier(0.25, 0.4, 0.25, 1)` - естественная анимация
- Разные длительности для opacity, transform, filter

## 🎯 Рекомендации по использованию

1. **Для заголовков секций**: `intensity="divine"`
2. **Для карточек контента**: `intensity="medium"`  
3. **Для мелких элементов**: `intensity="subtle"`
4. **Каскадные списки**: увеличивайте delay на 0.1-0.2s
5. **Группировка**: используйте одинаковую интенсивность для связанных элементов

## 🎨 Стилистические принципы

- **Не банально**: избегаем стандартных drop-shadow
- **Ренессанс**: белое свечение как божественный свет
- **Современность**: утонченные размытия и scale
- **Драматизм**: многослойные эффекты для divine
- **Элегантность**: плавные переходы и естественные кривые 