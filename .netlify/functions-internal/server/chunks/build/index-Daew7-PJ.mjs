import { defineComponent, computed, withAsyncContext, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, unref, ref, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DCG6bkwJ.mjs';
import { g as useProductsStore, u as useHead, _ as __nuxt_component_0$1$1, f as useRoute } from './server.mjs';
import { _ as __nuxt_component_1 } from './ProductCard-CoeWgmm7.mjs';
import { _ as __nuxt_component_0$2 } from './BlogCard-DdqMEO4N.mjs';
import { u as useAsyncData } from './asyncData-CgjrJLH1.mjs';
import { q as queryContent } from './query-sNZP8SzM.mjs';
import '../nitro/nitro.mjs';
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
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styled';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@unhead/schema-org/vue';
import './formatters-CIT9DWcj.mjs';
import 'perfect-debounce';
import './preview-6qDP3qXy.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-89d8625c><div class="container" data-v-89d8625c><div class="hero-content" data-v-89d8625c><h1 data-v-89d8625c>\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438\u0433\u0440\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432</h1><p data-v-89d8625c> \u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 Steam, Epic Games, PlayStation, Xbox \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C. \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E, \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0441 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430. </p><div class="hero-features" data-v-89d8625c> \u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u2022 \u041B\u0443\u0447\u0448\u0438\u0435 \u0446\u0435\u043D\u044B \u2022 \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 24/7 </div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-89d8625c"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProductCarousel",
  __ssrInlineRender: true,
  props: {
    products: {}
  },
  setup(__props) {
    ref(null);
    const carouselWrapper = ref(null);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1$1;
      const _component_ProductCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "carousel-wrapper",
        ref_key: "carouselWrapper",
        ref: carouselWrapper
      }, _attrs))} data-v-fcf0fb6b>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="carousel-fallback" data-v-fcf0fb6b${_scopeId}><!--[-->`);
            ssrRenderList(__props.products.slice(0, 4), (product) => {
              _push2(`<div class="fallback-item" data-v-fcf0fb6b${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ProductCard, {
                product,
                "show-description": false
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "carousel-fallback" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.products.slice(0, 4), (product) => {
                  return openBlock(), createBlock("div", {
                    key: product.slug,
                    class: "fallback-item"
                  }, [
                    createVNode(_component_ProductCard, {
                      product,
                      "show-description": false
                    }, null, 8, ["product"])
                  ]);
                }), 128))
              ])
            ];
          }
        })
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ProductCarousel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fcf0fb6b"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CategoryNav",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "category-nav" }, _attrs))} data-v-099f3db1><div class="container" data-v-099f3db1><ul data-v-099f3db1><li data-v-099f3db1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/games",
        class: { active: unref(route).path.includes("/games") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0418\u0433\u0440\u044B `);
          } else {
            return [
              createTextVNode(" \u0418\u0433\u0440\u044B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-099f3db1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: { active: unref(route).path.includes("/services") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u0435\u0440\u0432\u0438\u0441\u044B `);
          } else {
            return [
              createTextVNode(" \u0421\u0435\u0440\u0432\u0438\u0441\u044B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-099f3db1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/telegram-stars",
        class: { active: unref(route).path.includes("/telegram-stars") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Telegram Stars `);
          } else {
            return [
              createTextVNode(" Telegram Stars ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-099f3db1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: { active: unref(route).path.includes("/blog") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0411\u043B\u043E\u0433 `);
          } else {
            return [
              createTextVNode(" \u0411\u043B\u043E\u0433 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></nav>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/CategoryNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-099f3db1"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TelegramBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-4a7b37d0><div class="container" data-v-4a7b37d0><div class="section-header" data-v-4a7b37d0><h2 class="section-title" data-v-4a7b37d0>Telegram Stars</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/telegram-stars",
        class: "section-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041A\u0443\u043F\u0438\u0442\u044C <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-4a7b37d0${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-4a7b37d0${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" \u041A\u0443\u043F\u0438\u0442\u044C "),
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor"
              }, [
                createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="telegram-preview" data-v-4a7b37d0><div class="telegram-preview-content" data-v-4a7b37d0><h3 data-v-4a7b37d0>Telegram Stars</h3><p data-v-4a7b37d0>\u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0437\u0432\u0451\u0437\u0434\u044B Telegram \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0430\u0432\u0442\u043E\u0440\u043E\u0432 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/telegram-stars",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041A\u0443\u043F\u0438\u0442\u044C Stars`);
          } else {
            return [
              createTextVNode("\u041A\u0443\u043F\u0438\u0442\u044C Stars")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="telegram-icon" data-v-4a7b37d0>\u2605</div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/TelegramBanner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4a7b37d0"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FAQSection",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        question: "\u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435?",
        answer: "\u041E\u0431\u044B\u0447\u043D\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B. \u0412 \u0440\u0435\u0434\u043A\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043E 15 \u043C\u0438\u043D\u0443\u0442 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0437\u0430\u043A\u0430\u0437\u0430."
      },
      {
        question: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u043B\u0438 \u043F\u043E\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0447\u0435\u0440\u0435\u0437 \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441?",
        answer: "\u0414\u0430, \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0437\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u044B\u0435 \u043A\u0430\u043D\u0430\u043B\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0430\u0434\u0451\u0436\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B, \u0430 \u0432\u0441\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B."
      },
      {
        question: "\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438?",
        answer: "\u041F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432. \u0415\u0441\u043B\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u043A\u0430\u0437\u0430 - \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0435\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439, \u0438 \u043C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443."
      },
      {
        question: "\u041A\u0430\u043A\u0438\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B?",
        answer: "\u041C\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0435 \u043A\u0430\u0440\u0442\u044B Visa, MasterCard \u0438 \u041C\u0418\u0420, \u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0438\u0441\u0442\u0435\u043C\u0443 \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 (\u0421\u0411\u041F), \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0438 \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0443. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u043A\u0430\u0437\u0430."
      },
      {
        question: "\u041D\u0443\u0436\u043D\u0430 \u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435?",
        answer: "\u041D\u0435\u0442, \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F. \u0414\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C email \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0447\u0435\u043A\u0430 \u0438 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u0437\u0430\u043A\u0430\u0437\u0430. \u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B."
      },
      {
        question: "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u043F\u0440\u0438\u0448\u043B\u043E?",
        answer: "\u0415\u0441\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 15 \u043C\u0438\u043D\u0443\u0442 \u043F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u043F\u043E\u0441\u0442\u0443\u043F\u0438\u043B\u043E, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430. \u0415\u0441\u043B\u0438 \u0432\u0441\u0451 \u0432\u0435\u0440\u043D\u043E - \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0435\u0439 \u0441\u043B\u0443\u0436\u0431\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 Telegram, \u0443\u043A\u0430\u0437\u0430\u0432 \u043D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430."
      },
      {
        question: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E?",
        answer: "\u0414\u0430, \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 24/7. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u0421\u043B\u0443\u0436\u0431\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0441 9:00 \u0434\u043E 23:00 \u041C\u0421\u041A, \u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432\u0441\u0435\u0433\u0434\u0430."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-4cded2de><div class="container" data-v-4cded2de><h2 class="section-title" data-v-4cded2de>\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h2><div class="faq-section" data-v-4cded2de><!--[-->`);
      ssrRenderList(faqs, (faq, index2) => {
        _push(`<details data-v-4cded2de><summary data-v-4cded2de>${ssrInterpolate(faq.question)}</summary><div class="faq-answer" data-v-4cded2de>${ssrInterpolate(faq.answer)}</div></details>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/FAQSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4cded2de"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const productsStore = useProductsStore();
    const popularProducts = computed(() => productsStore.popularProducts);
    const gamesPreview = computed(() => {
      return productsStore.gameProducts.slice(0, 5);
    });
    const servicesPreview = computed(() => {
      return productsStore.serviceProducts.slice(0, 4);
    });
    const { data: blogPosts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-preview",
      () => queryContent("/blog").sort({ date: -1 }).limit(3).find()
    )), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = withAsyncContext(() => productsStore.fetchProducts()), await __temp, __restore();
    useHead({
      title: "Plata\u041F\u0430\u043B\u0430\u0442\u0430 - \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438\u0433\u0440\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432",
      meta: [
        {
          name: "description",
          content: "\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 Steam, Epic Games, PlayStation, Xbox \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C. \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E, \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0441 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ProductCarousel = __nuxt_component_2;
      const _component_CategoryNav = __nuxt_component_3;
      const _component_ProductCard = __nuxt_component_1;
      const _component_TelegramBanner = __nuxt_component_5;
      const _component_BlogCard = __nuxt_component_0$2;
      const _component_FAQSection = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-0c59f004>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(`<section class="section" data-v-0c59f004><div class="container" data-v-0c59f004><div class="section-header" data-v-0c59f004><h2 class="section-title" data-v-0c59f004>\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalog",
        class: "section-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-0c59f004${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-0c59f004${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 "),
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor"
              }, [
                createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(popularProducts)) {
        _push(ssrRenderComponent(_component_ProductCarousel, { products: unref(popularProducts) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_CategoryNav, null, null, _parent));
      _push(`<section class="section" id="games" data-v-0c59f004><div class="container" data-v-0c59f004><div class="section-header" data-v-0c59f004><h2 class="section-title" data-v-0c59f004>\u0418\u0433\u0440\u044B</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/games",
        class: "section-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-0c59f004${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-0c59f004${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 "),
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor"
              }, [
                createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="product-grid" data-v-0c59f004><!--[-->`);
      ssrRenderList(unref(gamesPreview), (product, index2) => {
        _push(ssrRenderComponent(_component_ProductCard, {
          key: product.slug,
          product,
          "show-description": false,
          loading: index2 < 3 ? "eager" : "lazy"
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="section" id="services" data-v-0c59f004><div class="container" data-v-0c59f004><div class="section-header" data-v-0c59f004><h2 class="section-title" data-v-0c59f004>\u0421\u0435\u0440\u0432\u0438\u0441\u044B</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "section-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-0c59f004${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-0c59f004${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 "),
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor"
              }, [
                createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="product-grid" data-v-0c59f004><!--[-->`);
      ssrRenderList(unref(servicesPreview), (product, index2) => {
        _push(ssrRenderComponent(_component_ProductCard, {
          key: product.slug,
          product,
          "show-description": false,
          loading: index2 < 3 ? "eager" : "lazy"
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_TelegramBanner, null, null, _parent));
      _push(`<section class="section" id="blog" data-v-0c59f004><div class="container" data-v-0c59f004><div class="section-header" data-v-0c59f004><h2 class="section-title" data-v-0c59f004>\u0411\u043B\u043E\u0433</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "section-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-0c59f004${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-0c59f004${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" \u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 "),
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor"
              }, [
                createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="product-grid" data-v-0c59f004><!--[-->`);
      ssrRenderList(unref(blogPosts), (post) => {
        var _a;
        _push(ssrRenderComponent(_component_BlogCard, {
          key: post._path,
          post: {
            slug: ((_a = post._path) == null ? void 0 : _a.split("/").pop()) || "",
            title: post.title,
            excerpt: post.description,
            date: post.date,
            image: post.image
          }
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_FAQSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c59f004"]]);

export { index as default };
//# sourceMappingURL=index-Daew7-PJ.mjs.map
