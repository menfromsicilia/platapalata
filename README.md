# PlataПалата

Маркетплейс цифровых товаров - игровые ваучеры, пополнения счетов, подарочные карты.

## Технологический стек

- **Framework:** Nuxt 3
- **Language:** TypeScript
- **Styling:** SCSS (Mobile First)
- **UI Library:** PrimeVue
- **State Management:** Pinia
- **Content:** @nuxt/content
- **Carousel:** Swiper
- **SEO:** @nuxtjs/seo

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Превью продакшен сборки
npm run preview
```

## Структура проекта

```
platapalata/
├── assets/           # SCSS стили
├── components/       # Vue компоненты
│   ├── layout/      # Layout компоненты
│   ├── products/    # Компоненты продуктов
│   └── ui/          # UI компоненты
├── composables/     # Composables
├── constants/       # Константы
├── content/         # Markdown контент
│   └── blog/       # Статьи блога
├── data/           # Мокап данные
├── layouts/        # Layouts
├── pages/          # Страницы (роутинг)
│   ├── games/     # Каталог игр
│   ├── services/  # Каталог сервисов
│   ├── telegram-stars/  # Telegram Stars
│   └── blog/      # Блог
├── public/         # Статические файлы
├── server/         # Server routes
├── stores/         # Pinia stores
├── types/          # TypeScript типы
└── utils/          # Утилиты

```

## Основные функции

### Продукты

- Каталог игр (Genshin Impact, Valorant, League of Legends и др.)
- Каталог сервисов (Netflix, Spotify, PlayStation, Xbox и др.)
- Steam пополнение (особая логика)
- Telegram Stars

### Функционал

- 🔍 Поиск продуктов
- 📱 Mobile First дизайн
- 🎨 Steam-стиль оформление
- 🛒 Форма покупки с динамическими полями
- 📝 Блог на Markdown (@nuxt/content)
- 🔐 SEO оптимизация (sitemap, robots.txt, meta-теги)
- ⚡ SSR (Server Side Rendering)

## API Integration

Проект готов к интеграции с реальным API. Текущая версия использует мокап данные.

### Для подключения реального API:

1. Обновите `runtimeConfig.public.apiBase` в `nuxt.config.ts`
2. Раскомментируйте API запросы в:
   - `stores/products.ts`
   - `composables/useProducts.ts`
   - `composables/useProduct.ts`
   - `composables/usePurchase.ts`
   - `composables/useSteamCalculator.ts`

### API Endpoints (планируется):

- `GET /products/` - Список всех продуктов
- `GET /products/{id}` - Детальная информация о продукте
- `GET /cost/steam` - Расчёт стоимости Steam
- `POST /vouchers` - Создание заказа (Wata API)

## SEO

- ✅ Автоматическая генерация title и description
- ✅ Open Graph теги
- ✅ JSON-LD structured data
- ✅ Sitemap.xml (динамический)
- ✅ Robots.txt
- ✅ Canonical URLs

## Разработка

### Добавление нового продукта (мокап):

Отредактируйте `data/mock-products.ts`

### Добавление новой статьи блога:

Создайте `.md` файл в `content/blog/` с frontmatter:

```yaml
---
title: 'Заголовок'
description: 'Описание'
image: '/images/blog/image.jpg'
date: '2025-01-20'
author: 'PlataПалата Team'
tags: ['tag1', 'tag2']
---
```

### SCSS переменные:

Все цветовые схемы и breakpoints в `assets/scss/abstracts/_variables.scss`

## Лицензия

Proprietary

