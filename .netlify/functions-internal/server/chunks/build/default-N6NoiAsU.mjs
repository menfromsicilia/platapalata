import { _ as __nuxt_component_0$1 } from './nuxt-link-DCG6bkwJ.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, ref, computed, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { g as useProductsStore, a as useRouter } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styled';
import '@primeuix/utils';
import '@primeuix/utils/object';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@unhead/schema-org/vue';
import 'devalue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SearchDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const productsStore = useProductsStore();
    useRouter();
    const searchRef = ref(null);
    const searchQuery = ref("");
    const showResults = ref(false);
    const searchResults = computed(() => {
      if (!searchQuery.value || searchQuery.value.length < 2) {
        return [];
      }
      const query = searchQuery.value.toLowerCase();
      const allProducts = productsStore.allProducts;
      return allProducts.filter(
        (p) => {
          var _a;
          return p.name.toLowerCase().includes(query) || ((_a = p.description) == null ? void 0 : _a.toLowerCase().includes(query));
        }
      ).slice(0, 8);
    });
    const closeResults = () => {
      showResults.value = false;
      searchQuery.value = "";
    };
    const getProductUrl = (product) => {
      const categoryPath = product.category === "telegram" ? "telegram-stars" : product.category;
      return `/${categoryPath}/${product.slug}`;
    };
    const getCategoryIcon = (category) => {
      const icons = {
        games: "\u{1F3AE}",
        services: "\u2699\uFE0F",
        telegram: "\u2B50"
      };
      return icons[category] || "\u{1F4E6}";
    };
    const getCategoryLabel = (category) => {
      const labels = {
        games: "\u0418\u0433\u0440\u044B",
        services: "\u0421\u0435\u0440\u0432\u0438\u0441\u044B",
        telegram: "Telegram"
      };
      return labels[category] || "\u041F\u0440\u043E\u0434\u0443\u043A\u0442";
    };
    const getGradient = (slug) => {
      const gradients = {
        "steam-wallet": "linear-gradient(135deg, #1b2838 0%, #2a475e 100%)",
        "playstation": "linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)",
        "xbox": "linear-gradient(135deg, #0F9B0F 0%, #00D084 100%)",
        "spotify": "linear-gradient(135deg, #1DB954 0%, #1ed760 100%)",
        "netflix": "linear-gradient(135deg, #E50914 0%, #B20710 100%)",
        "genshin-impact": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "valorant": "linear-gradient(135deg, #FF4655 0%, #BD3944 100%)",
        "mobile-legends": "linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)",
        "pubg-mobile": "linear-gradient(135deg, #A8E6CF 0%, #3DDC84 100%)",
        "league-of-legends": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "telegram-stars": "linear-gradient(135deg, #229ED9 0%, #0088cc 100%)"
      };
      return gradients[slug] || "linear-gradient(135deg, #66c0f4 0%, #5c9dc9 100%)";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "search-dropdown",
        ref_key: "searchRef",
        ref: searchRef
      }, _attrs))} data-v-7f39d8de><div class="search-wrapper" data-v-7f39d8de><svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-7f39d8de><circle cx="11" cy="11" r="8" data-v-7f39d8de></circle><path d="m21 21-4.35-4.35" data-v-7f39d8de></path></svg><input${ssrRenderAttr("value", unref(searchQuery))} type="text" class="search-input" placeholder="\u041F\u043E\u0438\u0441\u043A \u0438\u0433\u0440, \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432..." data-v-7f39d8de>`);
      if (unref(searchQuery)) {
        _push(`<button class="search-clear" data-v-7f39d8de><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-7f39d8de><line x1="18" y1="6" x2="6" y2="18" data-v-7f39d8de></line><line x1="6" y1="6" x2="18" y2="18" data-v-7f39d8de></line></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(showResults) && unref(searchResults).length > 0) {
        _push(`<div class="search-results" data-v-7f39d8de><!--[-->`);
        ssrRenderList(unref(searchResults), (product) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: product.slug,
            to: getProductUrl(product),
            class: "search-result-item",
            onClick: closeResults
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="result-icon" style="${ssrRenderStyle({ background: getGradient(product.slug) })}" data-v-7f39d8de${_scopeId}>${ssrInterpolate(getCategoryIcon(product.category))}</div><div class="result-info" data-v-7f39d8de${_scopeId}><div class="result-name" data-v-7f39d8de${_scopeId}>${ssrInterpolate(product.name)}</div><div class="result-category" data-v-7f39d8de${_scopeId}>${ssrInterpolate(getCategoryLabel(product.category))}</div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "result-icon",
                    style: { background: getGradient(product.slug) }
                  }, toDisplayString(getCategoryIcon(product.category)), 5),
                  createVNode("div", { class: "result-info" }, [
                    createVNode("div", { class: "result-name" }, toDisplayString(product.name), 1),
                    createVNode("div", { class: "result-category" }, toDisplayString(getCategoryLabel(product.category)), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (unref(showResults) && unref(searchQuery) && unref(searchResults).length === 0) {
        _push(`<div class="search-results" data-v-7f39d8de><div class="no-results" data-v-7f39d8de> \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SearchDropdown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7f39d8de"]]);
const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_SearchDropdown = __nuxt_component_1$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-ea062a81><div class="container" data-v-ea062a81><div class="header-content" data-v-ea062a81>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo-icon" data-v-ea062a81${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Platapalata" data-v-ea062a81${_scopeId}></div><span data-v-ea062a81${_scopeId}>Platapalata</span>`);
          } else {
            return [
              createVNode("div", { class: "logo-icon" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "Platapalata"
                })
              ]),
              createVNode("span", null, "Platapalata")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_SearchDropdown, null, null, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/TheHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ea062a81"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-2e354e4f><div class="container" data-v-2e354e4f><div class="footer-content" data-v-2e354e4f><strong data-v-2e354e4f>Platapalata</strong> \xA9 2025<br data-v-2e354e4f> \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430: <a href="mailto:support@platapalata.com" data-v-2e354e4f>support@platapalata.com</a></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2e354e4f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = __nuxt_component_0;
      const _component_TheFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
      _push(`<main class="main-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-N6NoiAsU.mjs.map
