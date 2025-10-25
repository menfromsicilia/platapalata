import { d as defineEventHandler, u as useRuntimeConfig } from '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'node:crypto';
import 'consola';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue';
import '@unhead/schema-org';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'github-slugger';
import 'unhead/server';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const mockProducts = [
  // ========================================
  // ИГРЫ
  // ========================================
  {
    platform: "wata",
    platform_product_id: 1,
    slug: "genshin-impact",
    name: "Genshin Impact",
    category: "games",
    type: "voucher",
    description: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 Genesis Crystals \u0434\u043B\u044F Genshin Impact. \u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u043E\u0432 \u043D\u0430 \u0432\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442.",
    imageUrl: "/images/games/genshin-impact.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 1,
    denominations: [
      { id: 1, name: "500\u20BD", currency: "RUB", price: 500, country: null, available: true, count: 100 },
      { id: 2, name: "1000\u20BD", currency: "RUB", price: 1e3, country: null, available: true, count: 100 },
      { id: 3, name: "2000\u20BD", currency: "RUB", price: 2e3, country: null, available: true, count: 50 },
      { id: 4, name: "5000\u20BD", currency: "RUB", price: 5e3, country: null, available: true, count: 20 }
    ],
    fields: [
      { name: "uid", label: "UID \u0438\u0433\u0440\u043E\u043A\u0430", type: "text", placeholder: "123456789", required: true },
      {
        name: "server",
        label: "\u0421\u0435\u0440\u0432\u0435\u0440",
        type: "select",
        required: true,
        options: [
          { label: "Europe", value: "eu" },
          { label: "America", value: "na" },
          { label: "Asia", value: "asia" },
          { label: "TW/HK/MO", value: "tw" }
        ]
      }
    ],
    servers: {
      eu: "Europe",
      na: "America",
      asia: "Asia",
      tw: "TW/HK/MO"
    }
  },
  {
    platform: "wata",
    platform_product_id: 2,
    slug: "honkai-star-rail",
    name: "Honkai: Star Rail",
    category: "games",
    type: "voucher",
    description: "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 Oneiric Shards \u0434\u043B\u044F Honkai: Star Rail. \u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u0434\u044B, \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F.",
    imageUrl: "/images/games/honkai-star-rail.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 2,
    denominations: [
      { id: 5, name: "500\u20BD", currency: "RUB", price: 500, country: null, available: true, count: 100 },
      { id: 6, name: "1000\u20BD", currency: "RUB", price: 1e3, country: null, available: true, count: 100 },
      { id: 7, name: "2000\u20BD", currency: "RUB", price: 2e3, country: null, available: true, count: 50 },
      { id: 8, name: "3000\u20BD", currency: "RUB", price: 3e3, country: null, available: true, count: 30 }
    ],
    fields: [
      { name: "uid", label: "UID \u0438\u0433\u0440\u043E\u043A\u0430", type: "text", placeholder: "123456789", required: true },
      {
        name: "server",
        label: "\u0421\u0435\u0440\u0432\u0435\u0440",
        type: "select",
        required: true,
        options: [
          { label: "Europe", value: "eu" },
          { label: "America", value: "na" },
          { label: "Asia", value: "asia" }
        ]
      }
    ],
    servers: {
      eu: "Europe",
      na: "America",
      asia: "Asia"
    }
  },
  {
    platform: "wata",
    platform_product_id: 3,
    slug: "league-of-legends",
    name: "League of Legends",
    category: "games",
    type: "voucher",
    description: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 Riot Points (RP) \u0434\u043B\u044F League of Legends. \u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0441\u043A\u0438\u043D\u044B, \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u043E\u0432 \u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442.",
    imageUrl: "/images/games/league-of-legends.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 3,
    denominations: [
      { id: 9, name: "500\u20BD", currency: "RUB", price: 500, country: null, available: true, count: 100 },
      { id: 10, name: "1000\u20BD", currency: "RUB", price: 1e3, country: null, available: true, count: 100 },
      { id: 11, name: "2000\u20BD", currency: "RUB", price: 2e3, country: null, available: true, count: 80 },
      { id: 12, name: "5000\u20BD", currency: "RUB", price: 5e3, country: null, available: true, count: 40 }
    ],
    fields: [
      { name: "username", label: "\u0418\u043C\u044F \u0438\u0433\u0440\u043E\u043A\u0430", type: "text", placeholder: "YourUsername", required: true },
      {
        name: "region",
        label: "\u0420\u0435\u0433\u0438\u043E\u043D",
        type: "select",
        required: true,
        options: [
          { label: "EUW", value: "euw" },
          { label: "EUNE", value: "eune" },
          { label: "NA", value: "na" },
          { label: "RU", value: "ru" }
        ]
      }
    ],
    servers: null
  },
  {
    platform: "wata",
    platform_product_id: 4,
    slug: "mobile-legends",
    name: "Mobile Legends",
    category: "games",
    type: "voucher",
    description: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 Diamonds \u0434\u043B\u044F Mobile Legends: Bang Bang. \u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0430\u043B\u043C\u0430\u0437\u043E\u0432 \u043D\u0430 \u0432\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442.",
    imageUrl: "/images/games/mobile-legends.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 4,
    denominations: [
      { id: 13, name: "500\u20BD", currency: "RUB", price: 500, country: null, available: true, count: 150 },
      { id: 14, name: "1000\u20BD", currency: "RUB", price: 1e3, country: null, available: true, count: 150 },
      { id: 15, name: "1500\u20BD", currency: "RUB", price: 1500, country: null, available: true, count: 100 },
      { id: 16, name: "3000\u20BD", currency: "RUB", price: 3e3, country: null, available: true, count: 50 }
    ],
    fields: [
      { name: "user_id", label: "User ID", type: "text", placeholder: "123456789", required: true },
      { name: "zone_id", label: "Zone ID", type: "text", placeholder: "1234", required: true }
    ],
    servers: null
  },
  {
    platform: "wata",
    platform_product_id: 5,
    slug: "pubg-mobile",
    name: "PUBG Mobile",
    category: "games",
    type: "voucher",
    description: "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 Unknown Cash (UC) \u0434\u043B\u044F PUBG Mobile. \u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 UC \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043A\u043E\u0440\u043E\u043B\u0435\u0432\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u0432 \u0438 \u0441\u043A\u0438\u043D\u043E\u0432.",
    imageUrl: "/images/games/pubg-mobile.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 5,
    denominations: [
      { id: 17, name: "500\u20BD", currency: "RUB", price: 500, country: null, available: true, count: 120 },
      { id: 18, name: "1000\u20BD", currency: "RUB", price: 1e3, country: null, available: true, count: 120 },
      { id: 19, name: "2000\u20BD", currency: "RUB", price: 2e3, country: null, available: true, count: 80 },
      { id: 20, name: "5000\u20BD", currency: "RUB", price: 5e3, country: null, available: true, count: 30 }
    ],
    fields: [
      { name: "player_id", label: "Player ID", type: "text", placeholder: "123456789", required: true }
    ],
    servers: null
  },
  {
    platform: "wata",
    platform_product_id: 6,
    slug: "valorant",
    name: "Valorant",
    category: "games",
    type: "voucher",
    description: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 Valorant Points (VP) \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0441\u043A\u0438\u043D\u043E\u0432 \u043E\u0440\u0443\u0436\u0438\u044F, \u0430\u0433\u0435\u043D\u0442\u043E\u0432 \u0438 \u0431\u043E\u0435\u0432\u044B\u0445 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u0432.",
    imageUrl: "/images/games/valorant.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 6,
    denominations: [
      { id: 21, name: "500\u20BD", currency: "RUB", price: 500, country: null, available: true, count: 100 },
      { id: 22, name: "1000\u20BD", currency: "RUB", price: 1e3, country: null, available: true, count: 100 },
      { id: 23, name: "2000\u20BD", currency: "RUB", price: 2e3, country: null, available: true, count: 70 },
      { id: 24, name: "5000\u20BD", currency: "RUB", price: 5e3, country: null, available: true, count: 40 }
    ],
    fields: [
      { name: "riot_id", label: "Riot ID", type: "text", placeholder: "Username#TAG", required: true },
      {
        name: "region",
        label: "\u0420\u0435\u0433\u0438\u043E\u043D",
        type: "select",
        required: true,
        options: [
          { label: "Europe", value: "eu" },
          { label: "North America", value: "na" },
          { label: "Asia Pacific", value: "ap" }
        ]
      }
    ],
    servers: null
  },
  // ========================================
  // СЕРВИСЫ (ваучеры с номиналами)
  // ========================================
  {
    platform: "wata",
    platform_product_id: 7,
    slug: "netflix",
    name: "Netflix",
    category: "services",
    type: "voucher",
    description: "\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u044B Netflix \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438. \u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043B\u044E\u0431\u0438\u043C\u044B\u0435 \u0444\u0438\u043B\u044C\u043C\u044B \u0438 \u0441\u0435\u0440\u0438\u0430\u043B\u044B \u0431\u0435\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u044B.",
    imageUrl: "/images/services/netflix.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 7,
    denominations: [
      { id: 25, name: "1000\u20BD", currency: "RUB", price: 1e3, country: "RU", available: true, count: 50 },
      { id: 26, name: "2000\u20BD", currency: "RUB", price: 2e3, country: "RU", available: true, count: 50 },
      { id: 27, name: "3000\u20BD", currency: "RUB", price: 3e3, country: "RU", available: true, count: 30 },
      { id: 28, name: "5000\u20BD", currency: "RUB", price: 5e3, country: "RU", available: true, count: 20 }
    ],
    fields: [
      { name: "email", label: "Email \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 Netflix", type: "email", placeholder: "your@email.com", required: true }
    ],
    servers: null
  },
  {
    platform: "wata",
    platform_product_id: 8,
    slug: "playstation-store",
    name: "PlayStation Store",
    category: "services",
    type: "voucher",
    description: "\u041A\u0430\u0440\u0442\u044B \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F PlayStation Network \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438\u0433\u0440, \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0439 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043E\u043A PS Plus.",
    imageUrl: "/images/services/playstation.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 8,
    denominations: [
      { id: 29, name: "1000\u20BD", currency: "RUB", price: 1e3, country: "RU", available: true, count: 80 },
      { id: 30, name: "2000\u20BD", currency: "RUB", price: 2e3, country: "RU", available: true, count: 80 },
      { id: 31, name: "3000\u20BD", currency: "RUB", price: 3e3, country: "RU", available: true, count: 50 },
      { id: 32, name: "5000\u20BD", currency: "RUB", price: 5e3, country: "RU", available: true, count: 40 }
    ],
    fields: [
      { name: "psn_id", label: "PlayStation Network ID", type: "text", placeholder: "YourPSNID", required: true }
    ],
    servers: null
  },
  {
    platform: "wata",
    platform_product_id: 9,
    slug: "spotify",
    name: "Spotify Premium",
    category: "services",
    type: "voucher",
    description: "\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u044B Spotify \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u044B Premium \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438. \u041C\u0443\u0437\u044B\u043A\u0430 \u0431\u0435\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u044B \u0438 \u043E\u0444\u043B\u0430\u0439\u043D \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u043D\u0438\u0435.",
    imageUrl: "/images/services/spotify.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 9,
    denominations: [
      { id: 33, name: "500\u20BD", currency: "RUB", price: 500, country: "RU", available: true, count: 100 },
      { id: 34, name: "1000\u20BD", currency: "RUB", price: 1e3, country: "RU", available: true, count: 100 },
      { id: 35, name: "2000\u20BD", currency: "RUB", price: 2e3, country: "RU", available: true, count: 60 },
      { id: 36, name: "3000\u20BD", currency: "RUB", price: 3e3, country: "RU", available: true, count: 30 }
    ],
    fields: [
      { name: "email", label: "Email \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 Spotify", type: "email", placeholder: "your@email.com", required: true }
    ],
    servers: null
  },
  {
    platform: "wata",
    platform_product_id: 10,
    slug: "xbox-game-pass",
    name: "Xbox Game Pass",
    category: "services",
    type: "voucher",
    description: "\u041A\u0430\u0440\u0442\u044B \u043E\u043F\u043B\u0430\u0442\u044B Xbox \u0434\u043B\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 Game Pass \u0438 \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0432 Microsoft Store.",
    imageUrl: "/images/services/xbox.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 10,
    denominations: [
      { id: 37, name: "1000\u20BD", currency: "RUB", price: 1e3, country: "RU", available: true, count: 70 },
      { id: 38, name: "2000\u20BD", currency: "RUB", price: 2e3, country: "RU", available: true, count: 70 },
      { id: 39, name: "3000\u20BD", currency: "RUB", price: 3e3, country: "RU", available: true, count: 40 },
      { id: 40, name: "5000\u20BD", currency: "RUB", price: 5e3, country: "RU", available: true, count: 30 }
    ],
    fields: [
      { name: "gamertag", label: "Xbox Gamertag", type: "text", placeholder: "YourGamertag", required: true }
    ],
    servers: null
  },
  {
    platform: "wata",
    platform_product_id: 11,
    slug: "steam-wallet",
    name: "Steam Wallet",
    category: "services",
    type: "steam_topup",
    description: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 Steam \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u0441\u0443\u043C\u043C\u0443. \u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0438\u0433\u0440\u044B, DLC \u0438 \u0432\u043D\u0443\u0442\u0440\u0438\u0438\u0433\u0440\u043E\u0432\u044B\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B.",
    imageUrl: "/images/services/steam.jpg",
    isOfficial: true,
    popular: true,
    sortOrder: 1,
    denominations: [
      { id: 41, name: "100\u20BD", currency: "RUB", price: 100, country: "RU", available: true, count: 1e3 },
      { id: 42, name: "500\u20BD", currency: "RUB", price: 500, country: "RU", available: true, count: 1e3 },
      { id: 43, name: "1000\u20BD", currency: "RUB", price: 1e3, country: "RU", available: true, count: 1e3 },
      { id: 44, name: "2000\u20BD", currency: "RUB", price: 2e3, country: "RU", available: true, count: 500 },
      { id: 45, name: "5000\u20BD", currency: "RUB", price: 5e3, country: "RU", available: true, count: 200 }
    ],
    fields: [
      { name: "steam_account", label: "Steam \u0430\u043A\u043A\u0430\u0443\u043D\u0442 (\u0441\u0441\u044B\u043B\u043A\u0430 \u0438\u043B\u0438 ID)", type: "text", placeholder: "https://steamcommunity.com/id/yourname", required: true }
    ],
    servers: null
  },
  // ========================================
  // TELEGRAM STARS
  // ========================================
  {
    platform: "telegram",
    platform_product_id: 12,
    slug: "telegram-stars",
    name: "Telegram Stars",
    category: "telegram",
    type: "voucher",
    description: "\u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0437\u0432\u0451\u0437\u0434\u044B Telegram \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0430\u0432\u0442\u043E\u0440\u043E\u0432 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430.",
    imageUrl: "/images/common/telegram-stars.svg",
    isOfficial: true,
    popular: false,
    sortOrder: 12,
    denominations: [
      { id: 46, name: "100 Stars", currency: "RUB", price: 100, country: null, available: true, count: 500 },
      { id: 47, name: "500 Stars", currency: "RUB", price: 500, country: null, available: true, count: 500 },
      { id: 48, name: "1000 Stars", currency: "RUB", price: 1e3, country: null, available: true, count: 300 },
      { id: 49, name: "2500 Stars", currency: "RUB", price: 2500, country: null, available: true, count: 200 },
      { id: 50, name: "5000 Stars", currency: "RUB", price: 5e3, country: null, available: true, count: 100 }
    ],
    fields: [
      { name: "telegram_username", label: "Telegram Username", type: "text", placeholder: "@username", required: true }
    ],
    servers: null
  }
];

const sitemap_xml = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const siteUrl = config.public.siteUrl;
  const staticUrls = [
    { loc: "/", lastmod: (/* @__PURE__ */ new Date()).toISOString(), priority: 1, changefreq: "daily" },
    { loc: "/games", lastmod: (/* @__PURE__ */ new Date()).toISOString(), priority: 0.9, changefreq: "daily" },
    { loc: "/services", lastmod: (/* @__PURE__ */ new Date()).toISOString(), priority: 0.9, changefreq: "daily" },
    { loc: "/telegram-stars", lastmod: (/* @__PURE__ */ new Date()).toISOString(), priority: 0.8, changefreq: "weekly" },
    { loc: "/blog", lastmod: (/* @__PURE__ */ new Date()).toISOString(), priority: 0.7, changefreq: "daily" }
  ];
  const productUrls = mockProducts.map((product) => {
    const categoryPath = product.category === "telegram" ? "telegram-stars" : product.category;
    return {
      loc: `/${categoryPath}/${product.slug}`,
      lastmod: (/* @__PURE__ */ new Date()).toISOString(),
      priority: product.popular ? 0.8 : 0.7,
      changefreq: "weekly"
    };
  });
  const allUrls = [...staticUrls, ...productUrls];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allUrls.map(
    (url) => `  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  ).join("\n")}
</urlset>`;
  event.node.res.setHeader("Content-Type", "application/xml");
  return sitemap;
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
