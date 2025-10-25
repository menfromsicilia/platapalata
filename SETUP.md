# 🚀 Инструкция по запуску PlataПалата

## Установка зависимостей

```bash
npm install
```

## Запуск проекта

### Development режим

```bash
npm run dev
```

Проект будет доступен по адресу: `http://localhost:3000`

### Production сборка

```bash
# Сборка
npm run build

# Запуск production сервера
npm run preview
```

## Структура проекта

Проект полностью готов к работе! Все компоненты реализованы и используют:

### ✅ Реализованные функции:

- **Главная страница** с Hero секцией, каруселью популярных товаров
- **Каталоги** игр и сервисов с поиском
- **Детальные страницы** продуктов с формой покупки
- **Telegram Stars** отдельный раздел
- **Блог** с 3 готовыми статьями
- **SEO** оптимизация (sitemap.xml, robots.txt, meta-теги)
- **Mobile First** дизайн
- **PrimeVue** компоненты
- **Swiper** карусель на главной

### 📦 Мокап данные

Все продукты сейчас загружаются из `data/mock-products.ts`:

- **6 игр:** Genshin Impact, Honkai Star Rail, League of Legends, Mobile Legends, PUBG Mobile, Valorant
- **5 сервисов:** Netflix, PlayStation Store, Spotify, Xbox Game Pass, Steam Wallet
- **1 Telegram:** Telegram Stars

### 🔌 Подключение реального API

Когда API будет готов:

1. Откройте файлы с `TODO: Заменить на реальный API запрос`
2. Раскомментируйте код с `$fetch`
3. Удалите/закомментируйте мокап данные

Файлы для обновления:
- `stores/products.ts`
- `composables/useProducts.ts`
- `composables/useProduct.ts`
- `composables/usePurchase.ts`
- `composables/useSteamCalculator.ts`

## Добавление контента

### Добавить новый продукт (пока мокап)

Отредактируйте `data/mock-products.ts`:

```typescript
{
  platform: 'wata',
  platform_product_id: 13,
  slug: 'new-game',
  name: 'New Game',
  category: 'games',
  type: 'voucher',
  description: 'Description...',
  imageUrl: '/images/games/new-game.jpg',
  popular: false,
  sortOrder: 13,
  denominations: [...],
  fields: [...]
}
```

### Добавить новую статью в блог

Создайте файл в `content/blog/my-article.md`:

```markdown
---
title: 'Заголовок статьи'
description: 'Описание для SEO'
image: '/images/blog/my-article.jpg'
date: '2025-01-25'
author: 'PlataПалата Team'
tags: ['tag1', 'tag2']
---

# Заголовок

Ваш контент здесь...
```

## Настройка

### Домен и API

Отредактируйте `nuxt.config.ts`:

```typescript
runtimeConfig: {
  public: {
    apiBase: 'https://your-api.com',
    siteUrl: 'https://platapalata.com'
  }
}
```

### Логотип

Замените файл логотипа (если нужно) в компоненте `components/layout/TheHeader.vue`

### Favicon

Замените `public/favicon.ico` на ваш

### Цветовая схема

Все цвета Steam-стиля находятся в `assets/scss/abstracts/_variables.scss`

## Что внутри?

### Pages (страницы):
- `/` - Главная
- `/games` - Каталог игр
- `/games/[slug]` - Детальная страница игры
- `/services` - Каталог сервисов
- `/services/[slug]` - Детальная страница сервиса
- `/telegram-stars` - Telegram Stars
- `/blog` - Список статей
- `/blog/[slug]` - Статья блога

### Components:
- `layout/` - Header, Footer, CategoryNav
- `ui/` - ProductCard, ProductCarousel (Swiper), HeroSection, FAQSection, TelegramBanner, BlogCard
- `products/` - PurchaseForm (форма покупки с динамическими полями)

### Styles:
- Mobile First подход
- SCSS с переменными Steam-стиля
- PrimeVue кастомизация
- Адаптивность: mobile, tablet (768px), desktop (1024px), wide (1280px)

## Полезные команды

```bash
# Dev режим
npm run dev

# Сборка
npm run build

# Preview
npm run preview

# Type checking
npm run typecheck

# Lint (если настроен)
npm run lint
```

## Проблемы и решения

### Ошибка при установке зависимостей

Попробуйте:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Swiper не работает

Убедитесь что установлен:
```bash
npm install swiper
```

### PrimeVue компоненты не отображаются

Проверьте что `@primevue/nuxt-module` установлен и добавлен в `modules` в `nuxt.config.ts`

## Следующие шаги

1. ✅ Проект готов к запуску
2. 🔄 Подключить реальное API (когда будет готово)
3. 🎨 Добавить ваш логотип в `components/layout/TheHeader.vue`
4. 📸 Добавить изображения продуктов в `public/images/`
5. 📝 Добавить больше статей в блог
6. 🚀 Deploy на production

## Deploy

Проект можно задеплоить на:
- **Vercel** (рекомендуется для Nuxt)
- **Netlify**
- **Cloudflare Pages**
- **VPS** (с Node.js)

Для Vercel:
```bash
npm install -g vercel
vercel
```

---

**Готово! 🎉**

Проект полностью функционален и готов к работе!

