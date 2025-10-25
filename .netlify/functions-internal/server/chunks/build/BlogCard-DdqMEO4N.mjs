import { _ as __nuxt_component_0$1 } from './nuxt-link-DCG6bkwJ.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlogCard",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    const props = __props;
    const formattedDate = computed(() => {
      const date = new Date(props.post.date);
      return date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
    });
    const getImageStyle = computed(() => {
      if (props.post.image) {
        return { backgroundImage: `url(${props.post.image})` };
      }
      const gradients = [
        "linear-gradient(135deg, #66c0f4 0%, #5c9dc9 100%)",
        "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
        "linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%)"
      ];
      const index = props.post.slug.length % gradients.length;
      return { background: gradients[index] };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/blog/${__props.post.slug}`,
        class: "blog-card"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="blog-card-image" style="${ssrRenderStyle(unref(getImageStyle))}" data-v-2b624961${_scopeId}></div><div class="blog-card-content" data-v-2b624961${_scopeId}><h3 class="blog-card-title" data-v-2b624961${_scopeId}>${ssrInterpolate(__props.post.title)}</h3><p class="blog-card-excerpt" data-v-2b624961${_scopeId}>${ssrInterpolate(__props.post.excerpt)}</p><div class="blog-card-meta" data-v-2b624961${_scopeId}>${ssrInterpolate(unref(formattedDate))}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "blog-card-image",
                style: unref(getImageStyle)
              }, null, 4),
              createVNode("div", { class: "blog-card-content" }, [
                createVNode("h3", { class: "blog-card-title" }, toDisplayString(__props.post.title), 1),
                createVNode("p", { class: "blog-card-excerpt" }, toDisplayString(__props.post.excerpt), 1),
                createVNode("div", { class: "blog-card-meta" }, toDisplayString(unref(formattedDate)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BlogCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b624961"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=BlogCard-DdqMEO4N.mjs.map
