# Инструкция по добавлению изображений

## Копирование изображений из папки "Angels of the Renaissance"

Для добавления реальных изображений в галерею выполните следующие команды:

### Windows (PowerShell)
```powershell
# Скопировать несколько изображений для галереи
copy "..\Angels of the Renaissance\photo_1_2025-05-29_13-24-52.jpg" "src\assets\images\reference1.jpg"
copy "..\Angels of the Renaissance\photo_5_2025-05-29_13-24-52.jpg" "src\assets\images\reference2.jpg"
copy "..\Angels of the Renaissance\photo_10_2025-05-29_13-24-52.jpg" "src\assets\images\reference3.jpg"
copy "..\Angels of the Renaissance\photo_15_2025-05-29_13-24-52.jpg" "src\assets\images\reference4.jpg"
copy "..\Angels of the Renaissance\photo_20_2025-05-29_13-24-52.jpg" "src\assets\images\reference5.jpg"
copy "..\Angels of the Renaissance\photo_25_2025-05-29_13-24-52.jpg" "src\assets\images\reference6.jpg"
```

### macOS/Linux
```bash
# Скопировать несколько изображений для галереи
cp "../Angels of the Renaissance/photo_1_2025-05-29_13-24-52.jpg" "src/assets/images/reference1.jpg"
cp "../Angels of the Renaissance/photo_5_2025-05-29_13-24-52.jpg" "src/assets/images/reference2.jpg"
cp "../Angels of the Renaissance/photo_10_2025-05-29_13-24-52.jpg" "src/assets/images/reference3.jpg"
cp "../Angels of the Renaissance/photo_15_2025-05-29_13-24-52.jpg" "src/assets/images/reference4.jpg"
cp "../Angels of the Renaissance/photo_20_2025-05-29_13-24-52.jpg" "src/assets/images/reference5.jpg"
cp "../Angels of the Renaissance/photo_25_2025-05-29_13-24-52.jpg" "src/assets/images/reference6.jpg"
```

## Обновление компонента Gallery

После копирования изображений обновите файл `src/components/Gallery.tsx`, заменив заглушки на реальные изображения:

```typescript
const images = [
  {
    id: 1,
    src: require('../assets/images/reference1.jpg'),
    alt: 'Референс 1 - Образ ангела Ренессанса'
  },
  {
    id: 2,
    src: require('../assets/images/reference2.jpg'),
    alt: 'Референс 2 - Небесное создание'
  },
  // ... остальные изображения
];
```

## Оптимизация изображений

Для лучшей производительности рекомендуется:

1. Сжать изображения до разумного размера (например, ширина 800px)
2. Использовать формат WebP для современных браузеров
3. Добавить lazy loading (уже реализовано)

## Примечание

Папка "Angels of the Renaissance" добавлена в `.gitignore`, поэтому изображения не будут включены в репозиторий. Это сделано для защиты авторских прав на изображения. 