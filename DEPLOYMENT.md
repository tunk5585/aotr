# Инструкция по деплою на GitHub Pages

## 🚀 Быстрый деплой

### Вариант 1: Автоматический деплой через GitHub Actions (рекомендуется)

1. **Создайте репозиторий на GitHub**
   ```bash
   # Инициализируйте git репозиторий
   git init
   git add .
   git commit -m "Initial commit: Angels of the Renaissance landing"
   
   # Добавьте удалённый репозиторий
   git remote add origin https://github.com/yourusername/party-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Настройте GitHub Pages**
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"
   - Workflow автоматически запустится при пуше в main ветку

3. **Обновите homepage в package.json**
   ```json
   "homepage": "https://yourusername.github.io/party-landing"
   ```

### Вариант 2: Ручной деплой

1. **Установите gh-pages** (уже установлен)
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Обновите package.json** (уже настроен)
   ```json
   {
     "homepage": "https://yourusername.github.io/party-landing",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Выполните деплой**
   ```bash
   npm run deploy
   ```

## 🔧 Настройка проекта

### Обязательные шаги перед деплоем:

1. **Замените placeholder в package.json**
   ```json
   "homepage": "https://ВАШЕ_ИМЯ_ПОЛЬЗОВАТЕЛЯ.github.io/НАЗВАНИЕ_РЕПОЗИТОРИЯ"
   ```

2. **Добавьте изображения** (опционально)
   - Следуйте инструкциям в `IMAGES_SETUP.md`
   - Скопируйте изображения из папки "Angels of the Renaissance"

3. **Проверьте локально**
   ```bash
   npm start
   ```

## 🌐 Доступ к сайту

После успешного деплоя сайт будет доступен по адресу:
```
https://yourusername.github.io/party-landing
```

## 🔄 Обновление сайта

### Автоматическое обновление (GitHub Actions)
- Просто сделайте push в main ветку
- GitHub Actions автоматически пересоберёт и задеплоит сайт

### Ручное обновление
```bash
# Внесите изменения в код
git add .
git commit -m "Update content"
git push origin main

# Задеплойте вручную (если не используете GitHub Actions)
npm run deploy
```

## 🛠 Устранение проблем

### Проблема: Сайт не загружается
- Проверьте правильность поля `homepage` в package.json
- Убедитесь, что GitHub Pages включён в настройках репозитория

### Проблема: Изображения не отображаются
- Убедитесь, что изображения скопированы в `src/assets/images/`
- Проверьте пути к изображениям в компоненте Gallery

### Проблема: Стили не применяются
- Убедитесь, что TailwindCSS правильно настроен
- Проверьте, что в index.css подключены директивы @tailwind

## 📱 Проверка адаптивности

Протестируйте сайт на разных устройствах:
- 📱 Мобильные телефоны (320px+)
- 📱 Планшеты (768px+)
- 💻 Десктопы (1024px+)

## 🎨 Кастомизация

### Изменение цветовой палитры
Отредактируйте `tailwind.config.js`:
```javascript
colors: {
  pearl: '#F8F6F0',    // Жемчужный
  cream: '#FFF8DC',    // Кремовый
  dusty: '#F5E6D3',    // Пудровый
  gold: '#FFD700',     // Золотой
  // ... добавьте свои цвета
}
```

### Изменение шрифтов
Обновите Google Fonts в `src/index.css` и `tailwind.config.js`

---

**Удачного деплоя! ✨** 