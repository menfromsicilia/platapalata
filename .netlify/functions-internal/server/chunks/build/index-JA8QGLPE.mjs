import { _ as __nuxt_component_0 } from './nuxt-link-DCG6bkwJ.mjs';
import { _ as __nuxt_component_1 } from './OrderForm-BG9nwDCQ.mjs';
import { defineComponent, reactive, ref, computed, watch, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = reactive({
      username: "",
      email: ""
    });
    const usernameError = ref("");
    const emailError = ref("");
    const packages = [
      { id: 1, stars: 50, price: 78 },
      { id: 2, stars: 100, price: 156 },
      { id: 3, stars: 200, price: 310 },
      { id: 4, stars: 500, price: 776 },
      { id: 5, stars: 1e3, price: 1551 },
      { id: 6, stars: 2500, price: 3878 },
      { id: 7, stars: 5e3, price: 7755 },
      { id: 8, stars: 1e4, price: 15510 }
    ];
    const selectedPackage = ref(packages[1]);
    const serviceFee = computed(() => 0);
    const validateUsername = () => {
      if (!formData.username) {
        usernameError.value = "Telegram \u043D\u0438\u043A\u043D\u0435\u0439\u043C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D";
        return false;
      }
      if (formData.username.length < 5) {
        usernameError.value = "\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 5 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432";
        return false;
      }
      usernameError.value = "";
      return true;
    };
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
    watch(() => formData.username, () => {
      if (usernameError.value && formData.username) {
        validateUsername();
      }
    });
    watch(() => formData.email, () => {
      if (emailError.value && formData.email) {
        validateEmail();
      }
    });
    const canPurchase = computed(() => {
      return !!selectedPackage.value && !!formData.username && !!formData.email && !usernameError.value && !emailError.value;
    });
    const handlePurchase = async (paymentMethod) => {
      if (!validateUsername() || !validateEmail()) {
        return;
      }
      console.log("Purchase Telegram Stars:", {
        package: selectedPackage.value,
        username: formData.username,
        email: formData.email,
        paymentMethod
      });
    };
    useHead({
      title: "Telegram Stars - Plata\u041F\u0430\u043B\u0430\u0442\u0430",
      meta: [
        {
          name: "description",
          content: "\u041A\u0443\u043F\u0438\u0442\u044C Telegram Stars \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0430\u0432\u0442\u043E\u0440\u043E\u0432 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430. \u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430, \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u0446\u0435\u043D\u044B."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_OrderForm = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "telegram-stars-page" }, _attrs))} data-v-f822ddde><div class="container" data-v-f822ddde><nav class="breadcrumbs" data-v-f822ddde>`);
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
      _push(`<span data-v-f822ddde>\u2192</span><span data-v-f822ddde>Telegram Stars</span></nav></div><div class="product-layout" data-v-f822ddde><div class="hero-block" data-v-f822ddde><div class="hero-image" data-v-f822ddde> \u2B50 </div><div class="hero-content" data-v-f822ddde><h1 class="product-title" data-v-f822ddde>Telegram Stars</h1><div class="official-badge" data-v-f822ddde><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-f822ddde><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-f822ddde></path><polyline points="22 4 12 14.01 9 11.01" data-v-f822ddde></polyline></svg><span data-v-f822ddde>\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0451\u0440</span></div><p class="product-description" data-v-f822ddde> \u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0437\u0432\u0451\u0437\u0434\u044B Telegram \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0430\u0432\u0442\u043E\u0440\u043E\u0432 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430. </p></div></div><div class="form-section telegram-username-section" data-v-f822ddde><h2 class="section-title" data-v-f822ddde>Telegram \u043D\u0438\u043A\u043D\u0435\u0439\u043C</h2><div class="telegram-input-wrapper" data-v-f822ddde><span class="telegram-prefix" data-v-f822ddde>@</span><input${ssrRenderAttr("value", unref(formData).username)} type="text" class="${ssrRenderClass([{ "error": unref(usernameError) }, "form-input"])}" placeholder="Telegram \u043D\u0438\u043A\u043D\u0435\u0439\u043C" data-v-f822ddde><div class="input-icon" data-v-f822ddde><svg viewBox="0 0 24 24" fill="currentColor" data-v-f822ddde><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-f822ddde></path></svg></div></div>`);
      if (unref(usernameError)) {
        _push(`<p class="form-error" data-v-f822ddde>${ssrInterpolate(unref(usernameError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-section packages-section" data-v-f822ddde><h2 class="section-title" data-v-f822ddde>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u043A\u0435\u0442 \u0437\u0432\u0451\u0437\u0434</h2><div class="packages-grid" data-v-f822ddde><!--[-->`);
      ssrRenderList(packages, (pkg) => {
        var _a;
        _push(`<label class="${ssrRenderClass([{ selected: ((_a = unref(selectedPackage)) == null ? void 0 : _a.id) === pkg.id }, "package-option"])}" data-v-f822ddde><div class="package-radio" data-v-f822ddde></div><div class="package-content" data-v-f822ddde><span class="star-icon" data-v-f822ddde>\u2B50</span><div class="package-info" data-v-f822ddde><div class="package-amount" data-v-f822ddde>${ssrInterpolate(pkg.stars)} \u0437\u0432\u0451\u0437\u0434</div></div><div class="package-price" data-v-f822ddde>${ssrInterpolate(pkg.price)}\u20BD</div></div></label>`);
      });
      _push(`<!--]--></div></div><div class="form-section purchase-section" data-v-f822ddde><h2 class="section-title" data-v-f822ddde>\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438</h2><input${ssrRenderAttr("value", unref(formData).email)} type="email" class="${ssrRenderClass([{ "error": unref(emailError) }, "form-input email-input"])}" placeholder="Email" data-v-f822ddde>`);
      if (unref(emailError)) {
        _push(`<p class="form-error" data-v-f822ddde>${ssrInterpolate(unref(emailError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="form-hint" data-v-f822ddde>\u0427\u0435\u043A \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 email \u043F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B.</p></div><div class="faq-section" data-v-f822ddde><h2 class="faq-title" data-v-f822ddde>\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h2><details data-v-f822ddde><summary data-v-f822ddde>\u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0437\u0432\u0451\u0437\u0434\u044B?</summary><div class="faq-answer" data-v-f822ddde> \u0417\u0432\u0451\u0437\u0434\u044B Telegram \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B. \u0412 \u0440\u0435\u0434\u043A\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043E 15 \u043C\u0438\u043D\u0443\u0442 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0437\u0430\u043A\u0430\u0437\u0430. </div></details><details data-v-f822ddde><summary data-v-f822ddde>\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u043B\u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441?</summary><div class="faq-answer" data-v-f822ddde> \u0414\u0430, \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0437\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u044B\u0435 \u043A\u0430\u043D\u0430\u043B\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0430\u0434\u0451\u0436\u043D\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B, \u0430 \u0432\u0441\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. </div></details><details data-v-f822ddde><summary data-v-f822ddde>\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438?</summary><div class="faq-answer" data-v-f822ddde> \u041F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0437\u0432\u0451\u0437\u0434 \u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432. \u0415\u0441\u043B\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u043A\u0430\u0437\u0430 - \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0435\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439, \u0438 \u043C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443. </div></details><details data-v-f822ddde><summary data-v-f822ddde>\u041A\u0430\u043A\u0438\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B?</summary><div class="faq-answer" data-v-f822ddde> \u041C\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0435 \u043A\u0430\u0440\u0442\u044B Visa, MasterCard \u0438 \u041C\u0418\u0420, \u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0438\u0441\u0442\u0435\u043C\u0443 \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 (\u0421\u0411\u041F), \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0438 \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0443. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043F\u0440\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u043A\u0430\u0437\u0430. </div></details><details data-v-f822ddde><summary data-v-f822ddde>\u0414\u043B\u044F \u0447\u0435\u0433\u043E \u043D\u0443\u0436\u043D\u044B Telegram Stars?</summary><div class="faq-answer" data-v-f822ddde> Telegram Stars \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043F\u043B\u0430\u0442\u043D\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443 \u0432 \u043A\u0430\u043D\u0430\u043B\u0430\u0445 \u0438 \u0431\u043E\u0442\u0430\u0445, \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u0435\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0435. </div></details></div>`);
      if (unref(selectedPackage)) {
        _push(ssrRenderComponent(_component_OrderForm, {
          "denomination-price": unref(selectedPackage).price,
          "service-fee": unref(serviceFee),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/telegram-stars/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f822ddde"]]);

export { index as default };
//# sourceMappingURL=index-JA8QGLPE.mjs.map
