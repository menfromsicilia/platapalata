import { findSingle, isTouchDevice, relativePosition, getOuterWidth, absolutePosition, addStyle, focus } from '@primeuix/utils/dom';
import { isNotEmpty, isEmpty, equals, findLastIndex, isPrintableCharacter, resolveFieldData, isString } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { C as ConnectedOverlayScrollHandler } from './index-1v7fOn3J.mjs';
import { s as script$4 } from './index-JBm1V3FU.mjs';
import { s as script$6 } from './index-CdHYoDjK.mjs';
import { s as script$5 } from './index-DB01oqaI.mjs';
import { s as script$3 } from './index-CLftTDsa.mjs';
import { O as OverlayEventBus } from './index-rAVNvoJo.mjs';
import { s as script$7 } from './index-D21vFaAL.mjs';
import { s as script$9 } from './index-CJM4ASb2.mjs';
import { style } from '@primeuix/styles/cascadeselect';
import { B as BaseStyle } from './server.mjs';
import { s as script$8 } from './index-f6-L4oOs.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import { resolveComponent, resolveDirective, createElementBlock, openBlock, mergeProps, Fragment, renderList, withDirectives, createBlock, createCommentVNode, resolveDynamicComponent, toDisplayString, normalizeClass, createElementVNode, renderSlot, createVNode, createTextVNode, withCtx, Transition } from 'vue';
import './index-B7Hm-fRB.mjs';
import '@primeuix/utils/eventbus';
import './index-CAHYJcnJ.mjs';
import '@primeuix/utils';
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
import 'vue/server-renderer';
import 'pinia';
import 'vue-router';
import '@primeuix/styled';
import '@primeuix/styles/base';
import '@unhead/schema-org/vue';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';

var inlineStyles = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === "self" ? "relative" : void 0
    };
  }
};
var classes = {
  root: function root2(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-cascadeselect p-component p-inputwrapper", {
      "p-cascadeselect-mobile": instance.queryMatches,
      "p-disabled": props.disabled,
      "p-invalid": instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-focus": instance.focused,
      "p-inputwrapper-filled": instance.$filled,
      "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
      "p-cascadeselect-open": instance.overlayVisible,
      "p-cascadeselect-fluid": instance.$fluid,
      "p-cascadeselect-sm p-inputfield-sm": props.size === "small",
      "p-cascadeselect-lg p-inputfield-lg": props.size === "large"
    }];
  },
  label: function label(_ref3) {
    var _instance$label;
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-cascadeselect-label", {
      "p-placeholder": instance.label === props.placeholder,
      "p-cascadeselect-label-empty": !instance.$slots["value"] && (instance.label === "p-emptylabel" || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
    }];
  },
  clearIcon: "p-cascadeselect-clear-icon",
  dropdown: "p-cascadeselect-dropdown",
  loadingIcon: "p-cascadeselect-loading-icon",
  dropdownIcon: "p-cascadeselect-dropdown-icon",
  overlay: function overlay(_ref4) {
    var instance = _ref4.instance;
    return ["p-cascadeselect-overlay p-component", {
      "p-cascadeselect-mobile-active": instance.queryMatches
    }];
  },
  listContainer: "p-cascadeselect-list-container",
  list: "p-cascadeselect-list",
  option: function option(_ref5) {
    var instance = _ref5.instance, processedOption = _ref5.processedOption;
    return ["p-cascadeselect-option", {
      "p-cascadeselect-option-active": instance.isOptionActive(processedOption),
      "p-cascadeselect-option-selected": instance.isOptionSelected(processedOption),
      "p-focus": instance.isOptionFocused(processedOption),
      "p-disabled": instance.isOptionDisabled(processedOption)
    }];
  },
  optionContent: "p-cascadeselect-option-content",
  optionText: "p-cascadeselect-option-text",
  groupIconContainer: "p-cascadeselect-group-icon-container",
  groupIcon: "p-cascadeselect-group-icon",
  optionList: "p-cascadeselect-overlay p-cascadeselect-option-list"
};
var CascadeSelectStyle = BaseStyle.extend({
  name: "cascadeselect",
  style,
  classes,
  inlineStyles
});
var script$2 = {
  name: "BaseCascadeSelect",
  "extends": script$9,
  props: {
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    placeholder: String,
    breakpoint: {
      type: String,
      "default": "960px"
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      "default": false
    },
    clearIcon: {
      type: String,
      "default": void 0
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
      type: Object,
      "default": null
    },
    panelProps: {
      type: null,
      "default": null
    },
    overlayClass: {
      type: [String, Object],
      "default": null
    },
    overlayStyle: {
      type: Object,
      "default": null
    },
    overlayProps: {
      type: null,
      "default": null
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    loading: {
      type: Boolean,
      "default": false
    },
    dropdownIcon: {
      type: String,
      "default": void 0
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    optionGroupIcon: {
      type: String,
      "default": void 0
    },
    autoOptionFocus: {
      type: Boolean,
      "default": false
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    focusOnHover: {
      type: Boolean,
      "default": true
    },
    searchLocale: {
      type: String,
      "default": void 0
    },
    searchMessage: {
      type: String,
      "default": null
    },
    selectionMessage: {
      type: String,
      "default": null
    },
    emptySelectionMessage: {
      type: String,
      "default": null
    },
    emptySearchMessage: {
      type: String,
      "default": null
    },
    emptyMessage: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: CascadeSelectStyle,
  provide: function provide() {
    return {
      $pcCascadeSelect: this,
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "CascadeSelectSub",
  hostName: "CascadeSelect",
  "extends": script$8,
  emits: ["option-change", "option-focus-change", "option-focus-enter-change"],
  container: null,
  props: {
    selectId: String,
    focusedOptionId: String,
    options: Array,
    optionLabel: String | Function,
    optionValue: String,
    optionDisabled: null,
    optionGroupIcon: String,
    optionGroupLabel: String,
    optionGroupChildren: {
      type: [String, Array],
      "default": null
    },
    activeOptionPath: Array,
    level: Number,
    templates: null,
    value: null
  },
  methods: {
    getOptionId: function getOptionId(processedOption) {
      return "".concat(this.selectId, "_").concat(processedOption.key);
    },
    getOptionLabel: function getOptionLabel(processedOption) {
      return this.optionLabel ? resolveFieldData(processedOption.option, this.optionLabel) : processedOption.option;
    },
    getOptionValue: function getOptionValue(processedOption) {
      return this.optionValue ? resolveFieldData(processedOption.option, this.optionValue) : processedOption.option;
    },
    getPTOptions: function getPTOptions(processedOption, index, key) {
      return this.ptm(key, {
        context: {
          option: processedOption,
          index,
          level: this.level,
          optionGroup: this.isOptionGroup(processedOption),
          active: this.isOptionActive(processedOption),
          focused: this.isOptionFocused(processedOption),
          disabled: this.isOptionDisabled(processedOption)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(processedOption) {
      return this.optionDisabled ? resolveFieldData(processedOption.option, this.optionDisabled) : false;
    },
    getOptionGroupLabel: function getOptionGroupLabel(processedOption) {
      return this.optionGroupLabel ? resolveFieldData(processedOption.option, this.optionGroupLabel) : null;
    },
    getOptionGroupChildren: function getOptionGroupChildren(processedOption) {
      return processedOption.children;
    },
    isOptionGroup: function isOptionGroup(processedOption) {
      return isNotEmpty(processedOption.children);
    },
    isOptionSelected: function isOptionSelected(processedOption) {
      return equals(this.value, processedOption === null || processedOption === void 0 ? void 0 : processedOption.option);
    },
    isOptionActive: function isOptionActive(processedOption) {
      return this.activeOptionPath && this.activeOptionPath.some(function(path) {
        return path.key === processedOption.key;
      });
    },
    isOptionFocused: function isOptionFocused(processedOption) {
      return this.focusedOptionId === this.getOptionId(processedOption);
    },
    getOptionLabelToRender: function getOptionLabelToRender(processedOption) {
      return this.isOptionGroup(processedOption) ? this.getOptionGroupLabel(processedOption) : this.getOptionLabel(processedOption);
    },
    onOptionClick: function onOptionClick(event, processedOption) {
      this.$emit("option-change", {
        originalEvent: event,
        processedOption,
        isFocus: true
      });
    },
    onOptionMouseEnter: function onOptionMouseEnter(event, processedOption) {
      this.$emit("option-focus-enter-change", {
        originalEvent: event,
        processedOption
      });
    },
    onOptionMouseMove: function onOptionMouseMove(event, processedOption) {
      this.$emit("option-focus-change", {
        originalEvent: event,
        processedOption
      });
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    listAriaLabel: function listAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : void 0;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    AngleRightIcon: script$4
  }
};
var _hoisted_1$1 = ["id", "aria-label", "aria-selected", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "data-p-option-group", "data-p-active", "data-p-focus", "data-p-disabled"];
var _hoisted_2 = ["onClick", "onMouseenter", "onMousemove"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AngleRightIcon = resolveComponent("AngleRightIcon");
  var _component_CascadeSelectSub = resolveComponent("CascadeSelectSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", mergeProps({
    ref: $options.containerRef,
    "class": _ctx.cx("list")
  }, $props.level === 0 ? _ctx.ptm("list") : _ctx.ptm("optionList")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.options, function(processedOption, index) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: $options.getOptionLabelToRender(processedOption),
      id: $options.getOptionId(processedOption),
      "class": _ctx.cx("option", {
        processedOption
      }),
      role: "treeitem",
      "aria-label": $options.getOptionLabelToRender(processedOption),
      "aria-selected": $options.isOptionGroup(processedOption) ? void 0 : $options.isOptionSelected(processedOption),
      "aria-expanded": $options.isOptionGroup(processedOption) ? $options.isOptionActive(processedOption) : void 0,
      "aria-level": $props.level + 1,
      "aria-setsize": $props.options.length,
      "aria-posinset": index + 1
    }, {
      ref_for: true
    }, $options.getPTOptions(processedOption, index, "option"), {
      "data-p-option-group": $options.isOptionGroup(processedOption),
      "data-p-active": $options.isOptionActive(processedOption),
      "data-p-focus": $options.isOptionFocused(processedOption),
      "data-p-disabled": $options.isOptionDisabled(processedOption)
    }), [withDirectives((openBlock(), createElementBlock("div", mergeProps({
      "class": _ctx.cx("optionContent"),
      onClick: function onClick($event) {
        return $options.onOptionClick($event, processedOption);
      },
      onMouseenter: function onMouseenter($event) {
        return $options.onOptionMouseEnter($event, processedOption);
      },
      onMousemove: function onMousemove($event) {
        return $options.onOptionMouseMove($event, processedOption);
      }
    }, {
      ref_for: true
    }, $options.getPTOptions(processedOption, index, "optionContent")), [$props.templates["option"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["option"]), {
      key: 0,
      option: processedOption.option,
      selected: $options.isOptionGroup(processedOption) ? false : $options.isOptionSelected(processedOption)
    }, null, 8, ["option", "selected"])) : (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      "class": _ctx.cx("optionText")
    }, {
      ref_for: true
    }, $options.getPTOptions(processedOption, index, "optionText")), toDisplayString($options.getOptionLabelToRender(processedOption)), 17)), $options.isOptionGroup(processedOption) ? (openBlock(), createElementBlock("span", {
      key: 2,
      "class": normalizeClass(_ctx.cx("groupIconContainer"))
    }, [$props.templates["optiongroupicon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["optiongroupicon"]), {
      key: 0,
      "class": normalizeClass(_ctx.cx("groupIcon"))
    }, null, 8, ["class"])) : $props.optionGroupIcon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      "class": [_ctx.cx("groupIcon"), $props.optionGroupIcon],
      "aria-hidden": "true"
    }, {
      ref_for: true
    }, $options.getPTOptions(processedOption, index, "groupIcon")), null, 16)) : (openBlock(), createBlock(_component_AngleRightIcon, mergeProps({
      key: 2,
      "class": _ctx.cx("groupIcon"),
      "aria-hidden": "true"
    }, {
      ref_for: true
    }, $options.getPTOptions(processedOption, index, "groupIcon")), null, 16, ["class"]))], 2)) : createCommentVNode("", true)], 16, _hoisted_2)), [[_directive_ripple]]), $options.isOptionGroup(processedOption) && $options.isOptionActive(processedOption) ? (openBlock(), createBlock(_component_CascadeSelectSub, {
      key: 0,
      role: "group",
      "class": normalizeClass(_ctx.cx("optionList")),
      selectId: $props.selectId,
      focusedOptionId: $props.focusedOptionId,
      options: $options.getOptionGroupChildren(processedOption),
      activeOptionPath: $props.activeOptionPath,
      level: $props.level + 1,
      templates: $props.templates,
      optionLabel: $props.optionLabel,
      optionValue: $props.optionValue,
      optionDisabled: $props.optionDisabled,
      optionGroupIcon: $props.optionGroupIcon,
      optionGroupLabel: $props.optionGroupLabel,
      optionGroupChildren: $props.optionGroupChildren,
      value: $props.value,
      onOptionChange: _cache[0] || (_cache[0] = function($event) {
        return _ctx.$emit("option-change", $event);
      }),
      onOptionFocusChange: _cache[1] || (_cache[1] = function($event) {
        return _ctx.$emit("option-focus-change", $event);
      }),
      onOptionFocusEnterChange: _cache[2] || (_cache[2] = function($event) {
        return _ctx.$emit("option-focus-enter-change", $event);
      }),
      pt: _ctx.pt,
      unstyled: _ctx.unstyled
    }, null, 8, ["class", "selectId", "focusedOptionId", "options", "activeOptionPath", "level", "templates", "optionLabel", "optionValue", "optionDisabled", "optionGroupIcon", "optionGroupLabel", "optionGroupChildren", "value", "pt", "unstyled"])) : createCommentVNode("", true)], 16, _hoisted_1$1);
  }), 128))], 16);
}
script$1.render = render$1;
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script = {
  name: "CascadeSelect",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "click", "group-change", "before-show", "before-hide", "hide", "show"],
  outsideClickListener: null,
  matchMediaListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  searchTimeout: null,
  searchValue: null,
  data: function data() {
    return {
      clicked: false,
      focused: false,
      focusedOptionInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeOptionPath: [],
      overlayVisible: false,
      dirty: false,
      mobileActive: false,
      query: null,
      queryMatches: false
    };
  },
  watch: {
    options: function options() {
      this.autoUpdateModel();
    }
  },
  mounted: function mounted() {
    this.autoUpdateModel();
    this.bindMatchMediaListener();
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindMatchMediaListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndex.clear(this.overlay);
      this.overlay = null;
    }
    if (this.mobileActive) {
      this.mobileActive = false;
    }
  },
  methods: {
    getOptionLabel: function getOptionLabel2(option2) {
      return this.optionLabel ? resolveFieldData(option2, this.optionLabel) : option2;
    },
    getOptionValue: function getOptionValue2(option2) {
      return this.optionValue ? resolveFieldData(option2, this.optionValue) : option2;
    },
    isOptionDisabled: function isOptionDisabled2(option2) {
      return this.optionDisabled ? resolveFieldData(option2, this.optionDisabled) : false;
    },
    getOptionGroupLabel: function getOptionGroupLabel2(optionGroup) {
      return this.optionGroupLabel ? resolveFieldData(optionGroup, this.optionGroupLabel) : null;
    },
    getOptionGroupChildren: function getOptionGroupChildren2(optionGroup, level) {
      return isString(this.optionGroupChildren) ? resolveFieldData(optionGroup, this.optionGroupChildren) : resolveFieldData(optionGroup, this.optionGroupChildren[level]);
    },
    isOptionGroup: function isOptionGroup2(option2, level) {
      return Object.prototype.hasOwnProperty.call(option2, this.optionGroupChildren[level]);
    },
    getProccessedOptionLabel: function getProccessedOptionLabel() {
      var processedOption = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var grouped = this.isProccessedOptionGroup(processedOption);
      return grouped ? this.getOptionGroupLabel(processedOption.option, processedOption.level) : this.getOptionLabel(processedOption.option);
    },
    isProccessedOptionGroup: function isProccessedOptionGroup(processedOption) {
      return isNotEmpty(processedOption === null || processedOption === void 0 ? void 0 : processedOption.children);
    },
    show: function show(isFocus) {
      this.$emit("before-show");
      this.overlayVisible = true;
      this.activeOptionPath = this.$filled ? this.findOptionPathByValue(this.d_value) : this.activeOptionPath;
      if (this.$filled && isNotEmpty(this.activeOptionPath)) {
        var processedOption = this.activeOptionPath[this.activeOptionPath.length - 1];
        this.focusedOptionInfo = {
          index: processedOption.index,
          level: processedOption.level,
          parentKey: processedOption.parentKey
        };
      } else {
        this.focusedOptionInfo = {
          index: this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex(),
          level: 0,
          parentKey: ""
        };
      }
      isFocus && focus(this.$refs.focusInput);
    },
    hide: function hide(isFocus) {
      var _this = this;
      var _hide = function _hide2() {
        _this.$emit("before-hide");
        _this.overlayVisible = false;
        _this.clicked = false;
        _this.activeOptionPath = [];
        _this.focusedOptionInfo = {
          index: -1,
          level: 0,
          parentKey: ""
        };
        isFocus && focus(_this.$refs.focusInput);
      };
      setTimeout(function() {
        _hide();
      }, 0);
    },
    onFocus: function onFocus(event) {
      if (this.disabled) {
        return;
      }
      this.focused = true;
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      this.focused = false;
      this.focusedOptionInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      this.searchValue = "";
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField);
    },
    onKeyDown: function onKeyDown(event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        return;
      }
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            this.searchOptions(event, event.key);
          }
          break;
      }
      this.clicked = false;
    },
    onOptionChange: function onOptionChange(event) {
      var processedOption = event.processedOption, type = event.type;
      if (isEmpty(processedOption)) return;
      var index = processedOption.index, key = processedOption.key, level = processedOption.level, parentKey = processedOption.parentKey, children = processedOption.children;
      var grouped = isNotEmpty(children);
      var activeOptionPath = this.activeOptionPath ? this.activeOptionPath.filter(function(p) {
        return p.parentKey !== parentKey && p.parentKey !== key;
      }) : [];
      this.focusedOptionInfo = {
        index,
        level,
        parentKey
      };
      if (type == "hover" && this.queryMatches) {
        return;
      }
      if (grouped) {
        activeOptionPath.push(processedOption);
      }
      this.activeOptionPath = activeOptionPath;
    },
    onOptionClick: function onOptionClick2(event) {
      var originalEvent = event.originalEvent, processedOption = event.processedOption, isFocus = event.isFocus, isHide = event.isHide, preventSelection = event.preventSelection;
      var index = processedOption.index, key = processedOption.key, level = processedOption.level, parentKey = processedOption.parentKey;
      var grouped = this.isProccessedOptionGroup(processedOption);
      var selected = this.isSelected(processedOption);
      if (selected) {
        this.activeOptionPath = this.activeOptionPath.filter(function(p) {
          return key !== p.key && key.startsWith(p.key);
        });
        this.focusedOptionInfo = {
          index,
          level,
          parentKey
        };
      } else {
        if (grouped) {
          this.onOptionChange(event);
          this.onOptionGroupSelect(originalEvent, processedOption);
        } else {
          var activeOptionPath = this.activeOptionPath.filter(function(p) {
            return p.parentKey !== parentKey;
          });
          activeOptionPath.push(processedOption);
          this.focusedOptionInfo = {
            index,
            level,
            parentKey
          };
          if (!preventSelection || (processedOption === null || processedOption === void 0 ? void 0 : processedOption.children.length) !== 0) {
            this.activeOptionPath = activeOptionPath;
            this.onOptionSelect(originalEvent, processedOption, isHide);
          }
        }
      }
      isFocus && focus(this.$refs.focusInput);
    },
    onOptionMouseEnter: function onOptionMouseEnter2(event) {
      if (this.focusOnHover) {
        if (event.processedOption.level === 0) {
          this.dirty = true;
        }
        if (this.dirty || !this.dirty && isNotEmpty(this.d_value)) {
          this.onOptionChange(_objectSpread$1(_objectSpread$1({}, event), {}, {
            type: "hover"
          }));
        } else if (!this.dirty && event.processedOption.level === 0) {
          this.onOptionClick(_objectSpread$1(_objectSpread$1({}, event), {}, {
            type: "hover"
          }));
        }
      }
    },
    onOptionMouseMove: function onOptionMouseMove2(event) {
      if (this.focused && this.focusOnHover) {
        this.changeFocusedOptionIndex(event, event.processedOption.index);
      }
    },
    onOptionSelect: function onOptionSelect(event, processedOption) {
      var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var value = this.getOptionValue(processedOption === null || processedOption === void 0 ? void 0 : processedOption.option);
      this.activeOptionPath.forEach(function(p) {
        return p.selected = true;
      });
      this.updateModel(event, value);
      isHide && this.hide(true);
    },
    onOptionGroupSelect: function onOptionGroupSelect(event, processedOption) {
      this.dirty = true;
      this.$emit("group-change", {
        originalEvent: event,
        value: processedOption.option
      });
    },
    onContainerClick: function onContainerClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      if (event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
        return;
      } else if (!this.overlay || !this.overlay.contains(event.target)) {
        this.overlayVisible ? this.hide() : this.show();
        focus(this.$refs.focusInput);
      }
      this.clicked = true;
      this.$emit("click", event);
    },
    onClearClick: function onClearClick(event) {
      this.updateModel(event, null);
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    },
    onOverlayKeyDown: function onOverlayKeyDown(event) {
      switch (event.code) {
        case "Escape":
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      if (!this.overlayVisible) {
        this.show();
      } else {
        var optionIndex = this.focusedOptionInfo.index !== -1 ? this.findNextOptionIndex(this.focusedOptionInfo.index) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex, true);
      }
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      if (event.altKey) {
        if (this.focusedOptionInfo.index !== -1) {
          var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
          var grouped = this.isProccessedOptionGroup(processedOption);
          !grouped && this.onOptionChange({
            originalEvent: event,
            processedOption
          });
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionInfo.index !== -1 ? this.findPrevOptionIndex(this.focusedOptionInfo.index) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex, true);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var _this2 = this;
      if (this.overlayVisible) {
        var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
        var parentOption = this.activeOptionPath.find(function(p) {
          return p.key === (processedOption === null || processedOption === void 0 ? void 0 : processedOption.parentKey);
        });
        var matched = this.focusedOptionInfo.parentKey === "" || parentOption && parentOption.key === this.focusedOptionInfo.parentKey;
        var root3 = isEmpty(processedOption === null || processedOption === void 0 ? void 0 : processedOption.parent);
        if (matched) {
          this.activeOptionPath = this.activeOptionPath.filter(function(p) {
            return p.parentKey !== _this2.focusedOptionInfo.parentKey;
          });
        }
        if (!root3) {
          this.focusedOptionInfo = {
            index: -1,
            parentKey: parentOption ? parentOption.parentKey : ""
          };
          this.searchValue = "";
          this.onArrowDownKey(event);
        }
        event.preventDefault();
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      if (this.overlayVisible) {
        var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
        var grouped = this.isProccessedOptionGroup(processedOption);
        if (grouped) {
          var matched = this.activeOptionPath.some(function(p) {
            return (processedOption === null || processedOption === void 0 ? void 0 : processedOption.key) === p.key;
          });
          if (matched) {
            this.focusedOptionInfo = {
              index: -1,
              parentKey: processedOption === null || processedOption === void 0 ? void 0 : processedOption.key
            };
            this.searchValue = "";
            this.onArrowDownKey(event);
          } else {
            this.onOptionChange({
              originalEvent: event,
              processedOption
            });
          }
        }
        event.preventDefault();
      }
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (!this.overlayVisible) {
        this.focusedOptionInfo.index !== -1;
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionInfo.index !== -1) {
          var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
          var grouped = this.isProccessedOptionGroup(processedOption);
          this.onOptionClick({
            originalEvent: event,
            processedOption,
            preventSelection: false
          });
          !grouped && this.hide();
        }
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      if (this.focusedOptionInfo.index !== -1) {
        var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
        var grouped = this.isProccessedOptionGroup(processedOption);
        !grouped && this.onOptionChange({
          originalEvent: event,
          processedOption
        });
      }
      this.overlayVisible && this.hide();
    },
    onOverlayEnter: function onOverlayEnter(el) {
      ZIndex.set("overlay", el, this.$primevue.config.zIndex.overlay);
      addStyle(el, {
        position: "absolute",
        top: "0"
      });
      this.alignOverlay();
      this.scrollInView();
      this.$attrSelector && el.setAttribute(this.$attrSelector, "");
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.overlay = null;
      this.dirty = false;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndex.clear(el);
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === "self") {
        relativePosition(this.overlay, this.$el);
      } else {
        this.overlay.style.minWidth = getOuterWidth(this.$el) + "px";
        absolutePosition(this.overlay, this.$el);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this3 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this3.overlayVisible && _this3.overlay && !_this3.$el.contains(event.target) && !_this3.overlay.contains(event.target)) {
            _this3.hide();
          }
        };
        (void 0).addEventListener("click", this.outsideClickListener, true);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener, true);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this4 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this4.overlayVisible) {
            _this4.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this5 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this5.overlayVisible && !isTouchDevice()) {
            _this5.hide();
          }
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    bindMatchMediaListener: function bindMatchMediaListener() {
      var _this6 = this;
      if (!this.matchMediaListener) {
        var query = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = query;
        this.queryMatches = query.matches;
        this.matchMediaListener = function() {
          _this6.queryMatches = query.matches;
          _this6.mobileActive = false;
        };
        this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function unbindMatchMediaListener() {
      if (this.matchMediaListener) {
        this.query.removeEventListener("change", this.matchMediaListener);
        this.matchMediaListener = null;
      }
    },
    isOptionMatched: function isOptionMatched(processedOption) {
      var _this$getProccessedOp;
      return this.isValidOption(processedOption) && ((_this$getProccessedOp = this.getProccessedOptionLabel(processedOption)) === null || _this$getProccessedOp === void 0 ? void 0 : _this$getProccessedOp.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)));
    },
    isValidOption: function isValidOption(processedOption) {
      return isNotEmpty(processedOption) && !this.isOptionDisabled(processedOption.option);
    },
    isValidSelectedOption: function isValidSelectedOption(processedOption) {
      return this.isValidOption(processedOption) && this.isSelected(processedOption);
    },
    isSelected: function isSelected(processedOption) {
      return this.activeOptionPath && this.activeOptionPath.some(function(p) {
        return p.key === processedOption.key;
      });
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this7 = this;
      return this.visibleOptions.findIndex(function(processedOption) {
        return _this7.isValidOption(processedOption);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this8 = this;
      return findLastIndex(this.visibleOptions, function(processedOption) {
        return _this8.isValidOption(processedOption);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var _this9 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(processedOption) {
        return _this9.isValidOption(processedOption);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var _this0 = this;
      var matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), function(processedOption) {
        return _this0.isValidOption(processedOption);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this1 = this;
      return this.visibleOptions.findIndex(function(processedOption) {
        return _this1.isValidSelectedOption(processedOption);
      });
    },
    findFirstFocusedOptionIndex: function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex: function findLastFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    findOptionPathByValue: function findOptionPathByValue(value, processedOptions2) {
      var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      processedOptions2 = processedOptions2 || level === 0 && this.processedOptions;
      if (!processedOptions2) return null;
      if (isEmpty(value)) return [];
      for (var i = 0; i < processedOptions2.length; i++) {
        var processedOption = processedOptions2[i];
        if (equals(value, this.getOptionValue(processedOption.option), this.equalityKey)) {
          return [processedOption];
        }
        var matchedOptions = this.findOptionPathByValue(value, processedOption.children, level + 1);
        if (matchedOptions) {
          matchedOptions.unshift(processedOption);
          return matchedOptions;
        }
      }
    },
    searchOptions: function searchOptions(event, _char) {
      var _this10 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var optionIndex = -1;
      var matched = false;
      if (isNotEmpty(this.searchValue)) {
        if (this.focusedOptionInfo.index !== -1) {
          optionIndex = this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex(function(processedOption) {
            return _this10.isOptionMatched(processedOption);
          });
          optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionInfo.index).findIndex(function(processedOption) {
            return _this10.isOptionMatched(processedOption);
          }) : optionIndex + this.focusedOptionInfo.index;
        } else {
          optionIndex = this.visibleOptions.findIndex(function(processedOption) {
            return _this10.isOptionMatched(processedOption);
          });
        }
        if (optionIndex !== -1) {
          matched = true;
        }
        if (optionIndex === -1 && this.focusedOptionInfo.index === -1) {
          optionIndex = this.findFirstFocusedOptionIndex();
        }
        if (optionIndex !== -1) {
          this.changeFocusedOptionIndex(event, optionIndex);
        }
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this10.searchValue = "";
        _this10.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index, preventSelection) {
      if (this.focusedOptionInfo.index !== index) {
        this.focusedOptionInfo.index = index;
        this.scrollInView();
        if (this.focusOnHover) {
          this.onOptionClick({
            originalEvent: event,
            processedOption: this.visibleOptions[index],
            isHide: false,
            preventSelection
          });
        }
        if (this.selectOnFocus) {
          this.onOptionChange({
            originalEvent: event,
            processedOption: this.visibleOptions[index],
            isHide: false
          });
        }
      }
    },
    scrollInView: function scrollInView() {
      var _this11 = this;
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var id = index !== -1 ? "".concat(_this11.$id, "_").concat(index) : _this11.focusedOptionId;
        var element = findSingle(_this11.list, 'li[id="'.concat(id, '"]'));
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: "nearest",
            inline: "start"
          });
        }
      });
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.$filled) {
        this.focusedOptionInfo.index = this.findFirstFocusedOptionIndex();
        this.onOptionChange({
          processedOption: this.visibleOptions[this.focusedOptionInfo.index],
          isHide: false
        });
        !this.overlayVisible && (this.focusedOptionInfo = {
          index: -1,
          level: 0,
          parentKey: ""
        });
      }
    },
    updateModel: function updateModel(event, value) {
      this.writeValue(value, event);
      this.$emit("change", {
        originalEvent: event,
        value
      });
    },
    createProcessedOptions: function createProcessedOptions(options2) {
      var _this12 = this;
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
      var processedOptions2 = [];
      options2 && options2.forEach(function(option2, index) {
        var key = (parentKey !== "" ? parentKey + "_" : "") + index;
        var newOption = {
          option: option2,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newOption["children"] = _this12.createProcessedOptions(_this12.getOptionGroupChildren(option2, level), level + 1, newOption, key);
        processedOptions2.push(newOption);
      });
      return processedOptions2;
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    }
  },
  computed: {
    // @deprecated use $filled instead.
    hasSelectedOption: function hasSelectedOption() {
      return this.$filled;
    },
    label: function label2() {
      var label22 = this.placeholder || "p-emptylabel";
      if (this.$filled) {
        var activeOptionPath = this.findOptionPathByValue(this.d_value);
        var processedOption = isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
        return processedOption ? this.getOptionLabel(processedOption.option) : label22;
      }
      return label22;
    },
    processedOptions: function processedOptions() {
      return this.createProcessedOptions(this.options || []);
    },
    visibleOptions: function visibleOptions() {
      var _this13 = this;
      var processedOption = this.activeOptionPath && this.activeOptionPath.find(function(p) {
        return p.key === _this13.focusedOptionInfo.parentKey;
      });
      return processedOption ? processedOption.children : this.processedOptions;
    },
    equalityKey: function equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchResultMessageText: function searchResultMessageText() {
      return isNotEmpty(this.visibleOptions) ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
    },
    searchMessageText: function searchMessageText() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptySearchMessageText: function emptySearchMessageText() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || "";
    },
    emptyMessageText: function emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function selectedMessageText() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", "1") : this.emptySelectionMessageText;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionInfo.index !== -1 ? "".concat(this.$id).concat(isNotEmpty(this.focusedOptionInfo.parentKey) ? "_" + this.focusedOptionInfo.parentKey : "", "_").concat(this.focusedOptionInfo.index) : null;
    },
    isClearIconVisible: function isClearIconVisible() {
      return this.showClear && this.d_value != null && isNotEmpty(this.options) && !this.disabled && !this.loading;
    }
  },
  components: {
    CascadeSelectSub: script$1,
    Portal: script$7,
    ChevronDownIcon: script$6,
    SpinnerIcon: script$5,
    AngleRightIcon: script$4,
    TimesIcon: script$3
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1 = ["id", "disabled", "placeholder", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_CascadeSelectSub = resolveComponent("CascadeSelectSub");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    onClick: _cache[5] || (_cache[5] = function($event) {
      return $options.onContainerClick($event);
    })
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenInputContainer"), {
    "data-p-hidden-accessible": true
  }), [createElementVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    "class": _ctx.inputClass,
    style: _ctx.inputStyle,
    readonly: "",
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "tree",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.overlayVisible ? _ctx.$id + "_tree" : void 0,
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("hiddenInput"))), null, 16, _hoisted_1)], 16), createElementVNode("span", mergeProps({
    "class": _ctx.cx("label")
  }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "value", {
    value: _ctx.d_value,
    placeholder: _ctx.placeholder
  }, function() {
    return [createTextVNode(toDisplayString($options.label), 1)];
  })], 16), $options.isClearIconVisible ? renderSlot(_ctx.$slots, "clearicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx("clearIcon")),
    clearCallback: $options.onClearClick
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon ? "i" : "TimesIcon"), mergeProps({
      ref: "clearIcon",
      "class": [_ctx.cx("clearIcon"), _ctx.clearIcon],
      onClick: $options.onClearClick
    }, _ctx.ptm("clearIcon"), {
      "data-pc-section": "clearicon"
    }), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("dropdown"),
    role: "button",
    tabindex: "-1"
  }, _ctx.ptm("dropdown")), [_ctx.loading ? renderSlot(_ctx.$slots, "loadingicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, function() {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": [_ctx.cx("loadingIcon"), "pi-spin", _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("loadingIcon"),
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
  }) : renderSlot(_ctx.$slots, "dropdownicon", {
    key: 1,
    "class": normalizeClass(_ctx.cx("dropdownIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
      "class": [_ctx.cx("dropdownIcon"), _ctx.dropdownIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("dropdownIcon")), null, 16, ["class"]))];
  })], 16), createElementVNode("span", mergeProps({
    role: "status",
    "aria-live": "polite",
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($options.searchResultMessageText), 17), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            "class": [_ctx.cx("overlay"), _ctx.panelClass, _ctx.overlayClass],
            style: [_ctx.panelStyle, _ctx.overlayStyle],
            onClick: _cache[3] || (_cache[3] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[4] || (_cache[4] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread(_objectSpread({}, _ctx.panelProps), _ctx.overlayProps), _ctx.ptm("overlay"))), [renderSlot(_ctx.$slots, "header", {
            value: _ctx.d_value,
            options: _ctx.options
          }), createElementVNode("div", mergeProps({
            "class": _ctx.cx("listContainer")
          }, _ctx.ptm("listContainer")), [createVNode(_component_CascadeSelectSub, {
            id: _ctx.$id + "_tree",
            role: "tree",
            "aria-orientation": "horizontal",
            selectId: _ctx.$id,
            focusedOptionId: $data.focused ? $options.focusedOptionId : void 0,
            options: $options.processedOptions,
            activeOptionPath: $data.activeOptionPath,
            level: 0,
            templates: _ctx.$slots,
            optionLabel: _ctx.optionLabel,
            optionValue: _ctx.optionValue,
            optionDisabled: _ctx.optionDisabled,
            optionGroupIcon: _ctx.optionGroupIcon,
            optionGroupLabel: _ctx.optionGroupLabel,
            optionGroupChildren: _ctx.optionGroupChildren,
            value: _ctx.d_value,
            onOptionChange: $options.onOptionClick,
            onOptionFocusChange: $options.onOptionMouseMove,
            onOptionFocusEnterChange: $options.onOptionMouseEnter,
            pt: _ctx.pt,
            unstyled: _ctx.unstyled
          }, null, 8, ["id", "selectId", "focusedOptionId", "options", "activeOptionPath", "templates", "optionLabel", "optionValue", "optionDisabled", "optionGroupIcon", "optionGroupLabel", "optionGroupChildren", "value", "onOptionChange", "onOptionFocusChange", "onOptionFocusEnterChange", "pt", "unstyled"])], 16), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.d_value,
            options: _ctx.options
          })], 16)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-COjKqYfy.mjs.map
