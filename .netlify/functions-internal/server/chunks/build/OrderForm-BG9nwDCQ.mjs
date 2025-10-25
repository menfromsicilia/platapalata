import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { a as formatPrice } from './formatters-CIT9DWcj.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderForm",
  __ssrInlineRender: true,
  props: {
    denominationPrice: {},
    serviceFee: { default: 50 },
    canPurchase: { type: Boolean, default: true },
    showEmail: { type: Boolean },
    email: {},
    emailError: {}
  },
  emits: ["purchase", "update:email", "validate-email"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const paymentMethods = [
      { label: "\u0421\u0411\u041F", value: "sbp" },
      { label: "\u041A\u0410\u0420\u0422\u0410", value: "card" }
    ];
    const selectedPaymentMethod = ref("sbp");
    const validationError = ref("");
    const totalPrice = computed(() => props.denominationPrice + props.serviceFee);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "order-form" }, _attrs))} data-v-9818162a><h2 class="form-title" data-v-9818162a>\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438</h2>`);
      if (__props.showEmail) {
        _push(`<div class="email-section" data-v-9818162a><label class="field-label" data-v-9818162a>Email</label><input${ssrRenderAttr("model-value", __props.email)} type="email" class="${ssrRenderClass([{ "error": __props.emailError }, "form-input"])}" placeholder="your@email.com" data-v-9818162a>`);
        if (__props.emailError) {
          _push(`<p class="form-error" data-v-9818162a>${ssrInterpolate(__props.emailError)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="form-hint" data-v-9818162a>\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u043D\u0430 email</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="form-subtitle" data-v-9818162a>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</h3><div class="payment-methods-selector" data-v-9818162a><!--[-->`);
      ssrRenderList(paymentMethods, (method) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(selectedPaymentMethod) === method.value }, "payment-method-btn"])}" data-v-9818162a><span data-v-9818162a>${ssrInterpolate(method.label)}</span></button>`);
      });
      _push(`<!--]--></div><div class="order-summary" data-v-9818162a><div class="summary-row" data-v-9818162a><span data-v-9818162a>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u0430</span><span data-v-9818162a>${ssrInterpolate(unref(formatPrice)(__props.denominationPrice))}</span></div><div class="summary-row" data-v-9818162a><span data-v-9818162a>\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u0430</span><span data-v-9818162a>${ssrInterpolate(unref(formatPrice)(__props.serviceFee))}</span></div><div class="summary-row total" data-v-9818162a><span data-v-9818162a>\u0418\u0442\u043E\u0433\u043E</span><span data-v-9818162a>${ssrInterpolate(unref(formatPrice)(unref(totalPrice)))}</span></div></div><div class="info-block" data-v-9818162a><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-v-9818162a><circle cx="12" cy="12" r="10" data-v-9818162a></circle><line x1="12" y1="16" x2="12" y2="12" stroke="white" stroke-width="2" data-v-9818162a></line><circle cx="12" cy="8" r="1" fill="white" data-v-9818162a></circle></svg><p data-v-9818162a>\u0414\u043B\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C VPN \u0438 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443</p></div><button class="btn-buy"${ssrIncludeBooleanAttr(!__props.canPurchase) ? " disabled" : ""} data-v-9818162a> \u041E\u041F\u041B\u0410\u0422\u0418\u0422\u042C ${ssrInterpolate(unref(formatPrice)(unref(totalPrice)))}</button>`);
      if (unref(validationError)) {
        _push(`<p class="validation-error" data-v-9818162a>${ssrInterpolate(unref(validationError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</aside>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/OrderForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9818162a"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=OrderForm-BG9nwDCQ.mjs.map
