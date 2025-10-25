import { cn } from '@primeuix/utils';
import { getFirstFocusableElement, focus } from '@primeuix/utils/dom';
import { s as script$5 } from './index-B7Hm-fRB.mjs';
import { createElementBlock, openBlock, mergeProps, createElementVNode, Fragment, renderList, renderSlot, normalizeClass, createBlock, resolveDynamicComponent } from 'vue';
import { s as script$6 } from './index-CAHYJcnJ.mjs';
import { style } from '@primeuix/styles/rating';
import { B as BaseStyle } from './server.mjs';
import '@primeuix/utils/object';
import './index-f6-L4oOs.mjs';
import '@primeuix/styled';
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
import 'vue/server-renderer';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@unhead/schema-org/vue';

var script$4 = {
  name: "BanIcon",
  "extends": script$5
};
function _toConsumableArray$2(r) {
  return _arrayWithoutHoles$2(r) || _iterableToArray$2(r) || _unsupportedIterableToArray$2(r) || _nonIterableSpread$2();
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
  }
}
function _iterableToArray$2(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles$2(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$2(r);
}
function _arrayLikeToArray$2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _toConsumableArray$2(_cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
script$4.render = render$3;
var script$3 = {
  name: "StarIcon",
  "extends": script$5
};
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _toConsumableArray$1(_cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
script$3.render = render$2;
var script$2 = {
  name: "StarFillIcon",
  "extends": script$5
};
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _toConsumableArray(_cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
script$2.render = render$1;
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-rating", {
      "p-readonly": props.readonly,
      "p-disabled": props.disabled
    }];
  },
  option: function option(_ref2) {
    var instance = _ref2.instance, value = _ref2.value;
    return ["p-rating-option", {
      "p-rating-option-active": value <= instance.d_value,
      "p-focus-visible": value === instance.focusedOptionIndex && instance.isFocusVisibleItem
    }];
  },
  onIcon: function onIcon(_ref3) {
    var instance = _ref3.instance;
    return ["p-rating-icon p-rating-on-icon", {
      "p-invalid": instance.$invalid
    }];
  },
  offIcon: function offIcon(_ref4) {
    var instance = _ref4.instance;
    return ["p-rating-icon p-rating-off-icon", {
      "p-invalid": instance.$invalid
    }];
  }
};
var RatingStyle = BaseStyle.extend({
  name: "rating",
  style,
  classes
});
var script$1 = {
  name: "BaseRating",
  "extends": script$6,
  props: {
    readonly: {
      type: Boolean,
      "default": false
    },
    stars: {
      type: Number,
      "default": 5
    },
    onIcon: {
      type: String,
      "default": void 0
    },
    offIcon: {
      type: String,
      "default": void 0
    }
  },
  style: RatingStyle,
  provide: function provide() {
    return {
      $pcRating: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Rating",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur"],
  data: function data() {
    return {
      focusedOptionIndex: -1,
      isFocusVisibleItem: true
    };
  },
  methods: {
    getPTOptions: function getPTOptions(key, value) {
      return this.ptm(key, {
        context: {
          active: value <= this.d_value,
          focused: value === this.focusedOptionIndex
        }
      });
    },
    onOptionClick: function onOptionClick(event, value) {
      if (!this.readonly && !this.disabled) {
        this.onOptionSelect(event, value);
        this.isFocusVisibleItem = false;
        var firstFocusableEl = getFirstFocusableElement(event.currentTarget);
        firstFocusableEl && focus(firstFocusableEl);
      }
    },
    onFocus: function onFocus(event, value) {
      var _event$sourceCapabili;
      this.focusedOptionIndex = value;
      this.isFocusVisibleItem = ((_event$sourceCapabili = event.sourceCapabilities) === null || _event$sourceCapabili === void 0 ? void 0 : _event$sourceCapabili.firesTouchEvents) === false;
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField);
    },
    onChange: function onChange(event, value) {
      this.onOptionSelect(event, value);
      this.isFocusVisibleItem = true;
    },
    onOptionSelect: function onOptionSelect(event, value) {
      if (this.focusedOptionIndex === value || this.d_value === value) {
        this.focusedOptionIndex = -1;
        this.updateModel(event, null);
      } else {
        this.focusedOptionIndex = value;
        this.updateModel(event, value || null);
      }
    },
    updateModel: function updateModel(event, value) {
      this.writeValue(value, event);
      this.$emit("change", {
        originalEvent: event,
        value
      });
    },
    starAriaLabel: function starAriaLabel(value) {
      return value === 1 ? this.$primevue.config.locale.aria.star : this.$primevue.config.locale.aria.stars.replace(/{star}/g, value);
    },
    dataOption: function dataOption(value) {
      return cn({
        readonly: this.readonly,
        disabled: this.disabled,
        active: value <= this.d_value,
        "focus-visible": value === this.focusedOptionIndex && this.isFocusVisibleItem
      });
    }
  },
  computed: {
    namex: function namex() {
      return this.name || "".concat(this.$attrSelector, "_name");
    },
    dataP: function dataP() {
      return cn({
        readonly: this.readonly,
        disabled: this.disabled
      });
    }
  },
  components: {
    StarFillIcon: script$2,
    StarIcon: script$3,
    BanIcon: script$4
  }
};
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["onClick", "data-p-active", "data-p-focused", "data-p"];
var _hoisted_3 = ["value", "name", "checked", "disabled", "readonly", "aria-label", "onFocus", "onChange"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root"), {
    "data-p": $options.dataP
  }), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.stars, function(value) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: value,
      "class": _ctx.cx("option", {
        value
      }),
      onClick: function onClick($event) {
        return $options.onOptionClick($event, value);
      }
    }, {
      ref_for: true
    }, $options.getPTOptions("option", value), {
      "data-p-active": value <= _ctx.d_value,
      "data-p-focused": value === $data.focusedOptionIndex,
      "data-p": $options.dataOption(value)
    }), [createElementVNode("span", mergeProps({
      "class": "p-hidden-accessible"
    }, {
      ref_for: true
    }, _ctx.ptm("hiddenOptionInputContainer"), {
      "data-p-hidden-accessible": true
    }), [createElementVNode("input", mergeProps({
      type: "radio",
      value,
      name: $options.namex,
      checked: _ctx.d_value === value,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      "aria-label": $options.starAriaLabel(value),
      onFocus: function onFocus2($event) {
        return $options.onFocus($event, value);
      },
      onBlur: _cache[0] || (_cache[0] = function() {
        return $options.onBlur && $options.onBlur.apply($options, arguments);
      }),
      onChange: function onChange2($event) {
        return $options.onChange($event, value);
      }
    }, {
      ref_for: true
    }, _ctx.ptm("hiddenOptionInput")), null, 16, _hoisted_3)], 16), value <= _ctx.d_value ? renderSlot(_ctx.$slots, "onicon", {
      key: 0,
      value,
      toggleCallback: function toggleCallback(event) {
        return $options.onChange(event, value);
      },
      "class": normalizeClass(_ctx.cx("onIcon"))
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.onIcon ? "span" : "StarFillIcon"), mergeProps({
        "class": [_ctx.cx("onIcon"), _ctx.onIcon]
      }, {
        ref_for: true
      }, _ctx.ptm("onIcon")), null, 16, ["class"]))];
    }) : renderSlot(_ctx.$slots, "officon", {
      key: 1,
      value,
      "class": normalizeClass(_ctx.cx("offIcon")),
      toggleCallback: function toggleCallback(event) {
        return $options.onChange(event, value);
      }
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.offIcon ? "span" : "StarIcon"), mergeProps({
        "class": [_ctx.cx("offIcon"), _ctx.offIcon]
      }, {
        ref_for: true
      }, _ctx.ptm("offIcon")), null, 16, ["class"]))];
    })], 16, _hoisted_2);
  }), 128))], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-yv-wGr-A.mjs.map
