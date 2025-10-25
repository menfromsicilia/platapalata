import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomSelect",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    options: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const selectRef = ref(null);
    const isOpen = ref(false);
    const selectedLabel = computed(() => {
      const selected = props.options.find((opt) => opt.value === props.modelValue);
      return (selected == null ? void 0 : selected.label) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435...";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "custom-select",
        ref_key: "selectRef",
        ref: selectRef
      }, _attrs))} data-v-e22674e9><div class="${ssrRenderClass([{ open: unref(isOpen) }, "select-trigger"])}" data-v-e22674e9><span data-v-e22674e9>${ssrInterpolate(unref(selectedLabel))}</span><svg class="${ssrRenderClass([{ rotate: unref(isOpen) }, "select-arrow"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-e22674e9><polyline points="6 9 12 15 18 9" data-v-e22674e9></polyline></svg></div>`);
      if (unref(isOpen)) {
        _push(`<div class="select-dropdown" data-v-e22674e9><!--[-->`);
        ssrRenderList(__props.options, (option) => {
          _push(`<div class="${ssrRenderClass([{ selected: __props.modelValue === option.value }, "select-option"])}" data-v-e22674e9>${ssrInterpolate(option.label)}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CustomSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e22674e9"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=CustomSelect-DkbTI0qo.mjs.map
