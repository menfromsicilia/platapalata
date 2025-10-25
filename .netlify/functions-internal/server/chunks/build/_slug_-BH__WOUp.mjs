import { _ as __nuxt_component_0 } from './nuxt-link-DCG6bkwJ.mjs';
import { _ as __nuxt_component_1 } from './CustomSelect-DkbTI0qo.mjs';
import { _ as __nuxt_component_1$1 } from './OrderForm-BG9nwDCQ.mjs';
import { defineComponent, withAsyncContext, reactive, ref, computed, watch, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { f as useRoute, c as createError, u as useHead } from './server.mjs';
import { u as useProductBySlug } from './useProduct-DmnHjUAz.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './formatters-CIT9DWcj.mjs';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styled';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@unhead/schema-org/vue';
import './asyncData-CgjrJLH1.mjs';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e;
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useProductBySlug(slug)), __temp = await __temp, __restore(), __temp);
    if (!product.value) {
      throw createError({
        statusCode: 404,
        message: "Product not found"
      });
    }
    const formData = reactive({
      server: "",
      email: ""
    });
    const selectedDenomination = ref(
      ((_b = (_a = product.value) == null ? void 0 : _a.denominations) == null ? void 0 : _b[0]) || null
    );
    const emailError = ref("");
    const serverField = computed(
      () => {
        var _a2, _b2;
        return (_b2 = (_a2 = product.value) == null ? void 0 : _a2.fields) == null ? void 0 : _b2.find((f) => f.type === "select");
      }
    );
    const validateEmail = () => {
      if (!formData.email) {
        emailError.value = "Email \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D";
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        emailError.value = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email";
        return false;
      }
      emailError.value = "";
      return true;
    };
    watch(() => formData.email, () => {
      if (emailError.value && formData.email) {
        validateEmail();
      }
    });
    const canPurchase = computed(() => {
      return !!selectedDenomination.value && !!formData.email && !emailError.value;
    });
    const handlePurchase = async (paymentMethod) => {
      var _a2;
      if (!validateEmail()) {
        return;
      }
      console.log("Purchase:", {
        product: (_a2 = product.value) == null ? void 0 : _a2.slug,
        denomination: selectedDenomination.value,
        email: formData.email,
        server: formData.server,
        paymentMethod
      });
    };
    useHead({
      title: `${(_c = product.value) == null ? void 0 : _c.name} - Plata\u041F\u0430\u043B\u0430\u0442\u0430`,
      meta: [
        {
          name: "description",
          content: ((_d = product.value) == null ? void 0 : _d.description) || `\u041A\u0443\u043F\u0438\u0442\u044C ${(_e = product.value) == null ? void 0 : _e.name}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CustomSelect = __nuxt_component_1;
      const _component_OrderForm = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-page-wrapper" }, _attrs))} data-v-64f81afe><div class="container" data-v-64f81afe><nav class="breadcrumbs" data-v-64f81afe>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0413\u043B\u0430\u0432\u043D\u0430\u044F`);
          } else {
            return [
              createTextVNode("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-64f81afe>\u2192</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/games" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0418\u0433\u0440\u044B`);
          } else {
            return [
              createTextVNode("\u0418\u0433\u0440\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-64f81afe>\u2192</span><span data-v-64f81afe>${ssrInterpolate((_a2 = unref(product)) == null ? void 0 : _a2.name)}</span></nav></div><div class="product-layout" data-v-64f81afe><div class="hero-block" data-v-64f81afe><div class="hero-image" data-v-64f81afe>`);
      if ((_b2 = unref(product)) == null ? void 0 : _b2.imageUrl) {
        _push(`<img${ssrRenderAttr("src", unref(product).imageUrl)}${ssrRenderAttr("alt", unref(product).name)} data-v-64f81afe>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="hero-content" data-v-64f81afe><h1 class="product-title" data-v-64f81afe>${ssrInterpolate((_c2 = unref(product)) == null ? void 0 : _c2.name)}</h1>`);
      if ((_d2 = unref(product)) == null ? void 0 : _d2.isOfficial) {
        _push(`<div class="official-badge" data-v-64f81afe><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-64f81afe><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-64f81afe></path><polyline points="22 4 12 14.01 9 11.01" data-v-64f81afe></polyline></svg><span data-v-64f81afe>\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0451\u0440</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="product-description" data-v-64f81afe>${ssrInterpolate((_e2 = unref(product)) == null ? void 0 : _e2.description)}</p></div></div>`);
      if ((_g = (_f = unref(product)) == null ? void 0 : _f.fields) == null ? void 0 : _g.find((f) => f.type === "select")) {
        _push(`<div class="form-section region-section" data-v-64f81afe><h2 class="section-title" data-v-64f81afe>${ssrInterpolate(((_h = unref(serverField)) == null ? void 0 : _h.label) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440")}</h2>`);
        _push(ssrRenderComponent(_component_CustomSelect, {
          modelValue: unref(formData).server,
          "onUpdate:modelValue": ($event) => unref(formData).server = $event,
          options: ((_i = unref(serverField)) == null ? void 0 : _i.options) || []
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="form-section denomination-section" data-v-64f81afe><h2 class="section-title" data-v-64f81afe>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B</h2><div class="denomination-grid" data-v-64f81afe><!--[-->`);
      ssrRenderList((_j = unref(product)) == null ? void 0 : _j.denominations, (denom) => {
        var _a3;
        _push(`<button class="${ssrRenderClass([{ selected: ((_a3 = unref(selectedDenomination)) == null ? void 0 : _a3.id) === denom.id }, "denom-btn"])}"${ssrIncludeBooleanAttr(!denom.available) ? " disabled" : ""} data-v-64f81afe>${ssrInterpolate(denom.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="form-section purchase-section" data-v-64f81afe><h2 class="section-title" data-v-64f81afe>\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438</h2><p class="section-subtitle" data-v-64f81afe>\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0430\u0443\u0447\u0435\u0440 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E</p><input${ssrRenderAttr("value", unref(formData).email)} type="email" class="${ssrRenderClass([{ "error": unref(emailError) }, "form-input"])}" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043B\u0438\u0447\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443" data-v-64f81afe>`);
      if (unref(emailError)) {
        _push(`<p class="form-error" data-v-64f81afe>${ssrInterpolate(unref(emailError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="form-hint" data-v-64f81afe>\u0412\u0430\u0443\u0447\u0435\u0440 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E \u043F\u043E \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043F\u0440\u0438\u0448\u043B\u0435\u043C \u043F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.</p></div><div class="faq-section" data-v-64f81afe><h2 class="faq-title" data-v-64f81afe>\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h2><details data-v-64f81afe><summary data-v-64f81afe>\u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435?</summary><div class="faq-answer" data-v-64f81afe> \u041E\u0431\u044B\u0447\u043D\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B. \u0412 \u0440\u0435\u0434\u043A\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043E 15 \u043C\u0438\u043D\u0443\u0442 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0437\u0430\u043A\u0430\u0437\u0430. </div></details><details data-v-64f81afe><summary data-v-64f81afe>\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u043B\u0438 \u043F\u043E\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0447\u0435\u0440\u0435\u0437 \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441?</summary><div class="faq-answer" data-v-64f81afe> \u0414\u0430, \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0437\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u044B\u0435 \u043A\u0430\u043D\u0430\u043B\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0430\u0434\u0451\u0436\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B, \u0430 \u0432\u0441\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. </div></details><details data-v-64f81afe><summary data-v-64f81afe>\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438?</summary><div class="faq-answer" data-v-64f81afe> \u041F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432. \u0415\u0441\u043B\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u043A\u0430\u0437\u0430 - \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0435\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439, \u0438 \u043C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443. </div></details><details data-v-64f81afe><summary data-v-64f81afe>\u041A\u0430\u043A\u0438\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B?</summary><div class="faq-answer" data-v-64f81afe> \u041C\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0435 \u043A\u0430\u0440\u0442\u044B Visa, MasterCard \u0438 \u041C\u0418\u0420, \u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0438\u0441\u0442\u0435\u043C\u0443 \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 (\u0421\u0411\u041F), \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0438 \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0443. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u043A\u0430\u0437\u0430. </div></details><details data-v-64f81afe><summary data-v-64f81afe>\u041D\u0443\u0436\u043D\u0430 \u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435?</summary><div class="faq-answer" data-v-64f81afe> \u041D\u0435\u0442, \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F. \u0414\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C email \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0447\u0435\u043A\u0430 \u0438 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u0437\u0430\u043A\u0430\u0437\u0430. \u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B. </div></details><details data-v-64f81afe><summary data-v-64f81afe>\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u043F\u0440\u0438\u0448\u043B\u043E?</summary><div class="faq-answer" data-v-64f81afe> \u0415\u0441\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 15 \u043C\u0438\u043D\u0443\u0442 \u043F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u043F\u043E\u0441\u0442\u0443\u043F\u0438\u043B\u043E, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430. \u0415\u0441\u043B\u0438 \u0432\u0441\u0451 \u0432\u0435\u0440\u043D\u043E - \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0435\u0439 \u0441\u043B\u0443\u0436\u0431\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 Telegram, \u0443\u043A\u0430\u0437\u0430\u0432 \u043D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430. </div></details><details data-v-64f81afe><summary data-v-64f81afe>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E?</summary><div class="faq-answer" data-v-64f81afe> \u0414\u0430, \u043D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 24/7. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u0421\u043B\u0443\u0436\u0431\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0441 9:00 \u0434\u043E 23:00 \u041C\u0421\u041A, \u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432\u0441\u0435\u0433\u0434\u0430. </div></details></div>`);
      if (unref(selectedDenomination)) {
        _push(ssrRenderComponent(_component_OrderForm, {
          "denomination-price": unref(selectedDenomination).price,
          "can-purchase": unref(canPurchase),
          onPurchase: handlePurchase
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-64f81afe"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BH__WOUp.mjs.map
