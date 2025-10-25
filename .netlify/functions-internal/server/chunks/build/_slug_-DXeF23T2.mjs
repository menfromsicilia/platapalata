import _sfc_main$1 from './ContentRenderer-DFJJFD3i.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DCG6bkwJ.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import script from './index-BaKOahx3.mjs';
import { f as formatBlogDate } from './formatters-CIT9DWcj.mjs';
import { f as useRoute, c as createError, u as useHead } from './server.mjs';
import { u as useAsyncData } from './asyncData-CgjrJLH1.mjs';
import { q as queryContent } from './query-sNZP8SzM.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './ContentRendererMarkdown-6j1m5XZ6.mjs';
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
import 'property-information';
import './node-yHY0X6Y7.mjs';
import './preview-6qDP3qXy.mjs';
import '@primeuix/utils';
import './index-f6-L4oOs.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@unhead/schema-org/vue';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `blog-${slug}`,
      () => queryContent(`/blog/${slug}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    if (!post.value) {
      throw createError({
        statusCode: 404,
        message: "Post not found"
      });
    }
    useHead({
      title: `${(_a = post.value) == null ? void 0 : _a.title} - \u0411\u043B\u043E\u0433 Plata\u041F\u0430\u043B\u0430\u0442\u0430`,
      meta: [
        {
          name: "description",
          content: ((_b = post.value) == null ? void 0 : _b.description) || ""
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-post-page" }, _attrs))} data-v-6af9f121><div class="container" data-v-6af9f121>`);
      if (unref(post)) {
        _push(`<article class="blog-post" data-v-6af9f121><header class="blog-post-header" data-v-6af9f121><h1 class="blog-post-title" data-v-6af9f121>${ssrInterpolate(unref(post).title)}</h1><div class="blog-post-meta" data-v-6af9f121><span class="blog-post-date" data-v-6af9f121>${ssrInterpolate(unref(formatBlogDate)(unref(post).date))}</span><span class="blog-post-author" data-v-6af9f121>${ssrInterpolate(unref(post).author)}</span></div>`);
        if (unref(post).tags && unref(post).tags.length) {
          _push(`<div class="blog-post-tags" data-v-6af9f121><!--[-->`);
          ssrRenderList(unref(post).tags, (tag) => {
            _push(ssrRenderComponent(unref(script), {
              key: tag,
              value: tag,
              severity: "info"
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</header>`);
        if (unref(post).image) {
          _push(`<div class="blog-post-image" data-v-6af9f121><img${ssrRenderAttr("src", unref(post).image)}${ssrRenderAttr("alt", unref(post).title)} data-v-6af9f121></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="blog-post-content" data-v-6af9f121>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(post) }, null, _parent));
        _push(`</div><footer class="blog-post-footer" data-v-6af9f121>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="pi pi-arrow-left" data-v-6af9f121${_scopeId}></i> \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u0442\u0430\u0442\u044C\u044F\u043C `);
            } else {
              return [
                createVNode("i", { class: "pi pi-arrow-left" }),
                createTextVNode(" \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u0442\u0430\u0442\u044C\u044F\u043C ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</footer></article>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6af9f121"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-DXeF23T2.mjs.map
