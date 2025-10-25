import { _ as __nuxt_component_0 } from './nuxt-link-DCG6bkwJ.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { t as truncateText } from './formatters-CIT9DWcj.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {},
    showDescription: { type: Boolean, default: true },
    loading: { default: "lazy" }
  },
  setup(__props) {
    const props = __props;
    const productLink = computed(() => {
      const categoryPath = props.product.category === "telegram" ? "telegram-stars" : props.product.category;
      return `/${categoryPath}/${props.product.slug}`;
    });
    computed(() => {
      if (props.product.imageUrl) {
        return `center / cover no-repeat url(${props.product.imageUrl}), linear-gradient(135deg, #2a475e 0%, #1b2838 100%)`;
      }
      const gradients = {
        "steam": "linear-gradient(135deg, #1b2838 0%, #2a475e 100%)",
        "playstation": "linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)",
        "xbox": "linear-gradient(135deg, #0F9B0F 0%, #00D084 100%)",
        "spotify": "linear-gradient(135deg, #1DB954 0%, #1ed760 100%)",
        "netflix": "linear-gradient(135deg, #E50914 0%, #B20710 100%)",
        "genshin-impact": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "valorant": "linear-gradient(135deg, #FF4655 0%, #BD3944 100%)",
        "mobile-legends": "linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)",
        "pubg-mobile": "linear-gradient(135deg, #A8E6CF 0%, #3DDC84 100%)",
        "league-of-legends": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "honkai-star-rail": "linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%)",
        "telegram": "linear-gradient(135deg, #66c0f4 0%, #5c9dc9 100%)"
      };
      return gradients[props.product.slug] || "linear-gradient(135deg, #66c0f4 0%, #5c9dc9 100%)";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: unref(productLink),
        class: "product-card"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="product-card-image" data-v-84105d43${_scopeId}>`);
            if (__props.product.imageUrl) {
              _push2(`<img${ssrRenderAttr("src", __props.product.imageUrl)}${ssrRenderAttr("alt", __props.product.name)}${ssrRenderAttr("loading", __props.loading)} class="product-image" data-v-84105d43${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="product-card-content" data-v-84105d43${_scopeId}><h3 class="product-card-title" data-v-84105d43${_scopeId}>${ssrInterpolate(__props.product.name)}</h3>`);
            if (__props.showDescription && __props.product.description) {
              _push2(`<p class="product-card-description" data-v-84105d43${_scopeId}>${ssrInterpolate(unref(truncateText)(__props.product.description, 80))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "product-card-image" }, [
                __props.product.imageUrl ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: __props.product.imageUrl,
                  alt: __props.product.name,
                  loading: __props.loading,
                  class: "product-image"
                }, null, 8, ["src", "alt", "loading"])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "product-card-content" }, [
                createVNode("h3", { class: "product-card-title" }, toDisplayString(__props.product.name), 1),
                __props.showDescription && __props.product.description ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "product-card-description"
                }, toDisplayString(unref(truncateText)(__props.product.description, 80)), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-84105d43"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ProductCard-CoeWgmm7.mjs.map
