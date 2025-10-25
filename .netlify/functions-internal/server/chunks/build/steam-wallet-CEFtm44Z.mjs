import { _ as __nuxt_component_0 } from './nuxt-link-DCG6bkwJ.mjs';
import { _ as __nuxt_component_1 } from './OrderForm-BG9nwDCQ.mjs';
import { defineComponent, reactive, ref, computed, watch, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useProductBySlug } from './useProduct-DmnHjUAz.mjs';
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
import './asyncData-CgjrJLH1.mjs';
import 'perfect-debounce';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styled';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@unhead/schema-org/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "steam-wallet",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const formData = reactive({
      steamAccount: "",
      email: ""
    });
    const customAmount = ref(null);
    const accountError = ref("");
    const amountError = ref("");
    const emailError = ref("");
    const finalAmount = computed(() => customAmount.value || 0);
    const validateAccount = () => {
      if (!formData.steamAccount) {
        accountError.value = "Steam \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D";
        return false;
      }
      accountError.value = "";
      return true;
    };
    const validateAmount = () => {
      if (!customAmount.value) {
        amountError.value = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F";
        return false;
      }
      if (customAmount.value < 100) {
        amountError.value = "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 100\u20BD";
        return false;
      }
      if (customAmount.value > 15e3) {
        amountError.value = "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 15000\u20BD";
        return false;
      }
      amountError.value = "";
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
    const canPurchase = computed(() => {
      return !!formData.steamAccount && !!customAmount.value && customAmount.value >= 100 && customAmount.value <= 15e3 && !!formData.email && !accountError.value && !amountError.value && !emailError.value;
    });
    const handlePurchase = async (paymentMethod) => {
      if (!validateAccount() || !validateAmount() || !validateEmail()) {
        return;
      }
      console.log("Purchase Steam Wallet:", {
        steamAccount: formData.steamAccount,
        amount: customAmount.value,
        email: formData.email,
        paymentMethod
      });
    };
    watch(() => formData.steamAccount, () => {
      if (accountError.value && formData.steamAccount) {
        validateAccount();
      }
    });
    watch(() => customAmount.value, () => {
      if (amountError.value && customAmount.value) {
        validateAmount();
      }
    });
    watch(() => formData.email, () => {
      if (emailError.value && formData.email) {
        validateEmail();
      }
    });
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useProductBySlug("steam-wallet")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Steam Wallet - \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 Steam - Plata\u041F\u0430\u043B\u0430\u0442\u0430",
      meta: [
        {
          name: "description",
          content: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 Steam \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u043E\u0442 100\u20BD \u0434\u043E 15000\u20BD. \u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435, \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0451\u0440."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_OrderForm = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "steam-page" }, _attrs))} data-v-9bf3b236><div class="container" data-v-9bf3b236><nav class="breadcrumbs" data-v-9bf3b236>`);
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
      _push(`<span data-v-9bf3b236>\u2192</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u0435\u0440\u0432\u0438\u0441\u044B`);
          } else {
            return [
              createTextVNode("\u0421\u0435\u0440\u0432\u0438\u0441\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-9bf3b236>\u2192</span><span data-v-9bf3b236>Steam Wallet</span></nav></div><div class="product-layout" data-v-9bf3b236><div class="hero-block" data-v-9bf3b236><div class="hero-image" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #1b2838 0%, #2a475e 100%)" })}" data-v-9bf3b236>`);
      if ((_a = unref(product)) == null ? void 0 : _a.imageUrl) {
        _push(`<img${ssrRenderAttr("src", unref(product).imageUrl)}${ssrRenderAttr("alt", unref(product).name)} style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-9bf3b236>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="hero-content" data-v-9bf3b236><h1 class="product-title" data-v-9bf3b236>Steam Wallet - \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430</h1><div class="official-badge" data-v-9bf3b236><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9bf3b236><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-v-9bf3b236></path><polyline points="22 4 12 14.01 9 11.01" data-v-9bf3b236></polyline></svg><span data-v-9bf3b236>\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0451\u0440</span></div><p class="product-description" data-v-9bf3b236> \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 Steam \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u0441\u0443\u043C\u043C\u0443. \u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0438\u0433\u0440\u044B, DLC \u0438 \u0432\u043D\u0443\u0442\u0440\u0438\u0438\u0433\u0440\u043E\u0432\u044B\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B. </p></div></div><div class="form-section" data-v-9bf3b236><h2 class="section-title" data-v-9bf3b236>\u0412\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 Steam</h2><input${ssrRenderAttr("value", unref(formData).steamAccount)} type="text" class="${ssrRenderClass([{ "error": unref(accountError) }, "form-input"])}" placeholder="\u0412\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 Steam" data-v-9bf3b236>`);
      if (unref(accountError)) {
        _push(`<p class="form-error" data-v-9bf3b236>${ssrInterpolate(unref(accountError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="form-hint" data-v-9bf3b236>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0432\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B\u044C Steam</p></div><div class="form-section" data-v-9bf3b236><h2 class="section-title" data-v-9bf3b236>\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</h2><div class="amount-input-wrapper" data-v-9bf3b236><input${ssrRenderAttr("value", unref(customAmount))} type="number" class="${ssrRenderClass([{ "error": unref(amountError) }, "amount-input"])}" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443" min="100" max="15000" data-v-9bf3b236><span class="currency" data-v-9bf3b236>\u20BD</span></div>`);
      if (unref(amountError)) {
        _push(`<p class="form-error" data-v-9bf3b236>${ssrInterpolate(unref(amountError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="form-hint" data-v-9bf3b236>\u041C\u0438\u043D\u0438\u043C\u0443\u043C 100\u20BD, \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 15000\u20BD</p></div><div class="form-section purchase-section" data-v-9bf3b236><h2 class="section-title" data-v-9bf3b236>\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438</h2><p class="section-subtitle" data-v-9bf3b236>\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0430\u0443\u0447\u0435\u0440 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E</p><input${ssrRenderAttr("value", unref(formData).email)} type="email" class="${ssrRenderClass([{ "error": unref(emailError) }, "form-input"])}" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043B\u0438\u0447\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443" data-v-9bf3b236>`);
      if (unref(emailError)) {
        _push(`<p class="form-error" data-v-9bf3b236>${ssrInterpolate(unref(emailError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="form-hint" data-v-9bf3b236>\u0412\u0430\u0443\u0447\u0435\u0440 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E \u043F\u043E \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043F\u0440\u0438\u0448\u043B\u0435\u043C \u043F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.</p></div><div class="faq-section purchase-section" data-v-9bf3b236><h2 class="faq-title" data-v-9bf3b236>\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h2><details data-v-9bf3b236><summary data-v-9bf3b236>\u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435?</summary><div class="faq-answer" data-v-9bf3b236> Steam \u043A\u043E\u0448\u0435\u043B\u0451\u043A \u043F\u043E\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B. \u0412 \u0440\u0435\u0434\u043A\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043E 15 \u043C\u0438\u043D\u0443\u0442. </div></details><details data-v-9bf3b236><summary data-v-9bf3b236>\u041A\u0430\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0443\u0436\u043D\u044B \u0434\u043B\u044F \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F?</summary><div class="faq-answer" data-v-9bf3b236> \u041D\u0443\u0436\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B\u044C Steam \u0438\u043B\u0438 Steam ID. \u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u043F\u0430\u0440\u043E\u043B\u0435\u0439 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438. </div></details><details data-v-9bf3b236><summary data-v-9bf3b236>\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438?</summary><div class="faq-answer" data-v-9bf3b236> \u041F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432. </div></details></div>`);
      _push(ssrRenderComponent(_component_OrderForm, {
        "denomination-price": unref(finalAmount),
        "can-purchase": unref(canPurchase),
        onPurchase: handlePurchase
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/steam-wallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const steamWallet = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9bf3b236"]]);

export { steamWallet as default };
//# sourceMappingURL=steam-wallet-CEFtm44Z.mjs.map
