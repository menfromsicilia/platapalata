import { cn, getAttribute, findSingle, find, getOuterWidth, getOuterHeight } from '@primeuix/utils';
import { isFunction, resolveFieldData } from '@primeuix/utils/object';
import { s as script$4 } from './index-CMjiyHVz.mjs';
import { s as script$3 } from './index-DB01oqaI.mjs';
import script$5 from './index-CzuxItjR.mjs';
import script$6 from './index-CnKtcMnY.mjs';
import script$7 from './index-UhKETa30.mjs';
import { s as script$d } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/tree';
import { B as BaseStyle } from './server.mjs';
import { reactive, resolveComponent, resolveDirective, createElementBlock, openBlock, mergeProps, createCommentVNode, createElementVNode, normalizeClass, withDirectives, createBlock, Fragment, resolveDynamicComponent, withCtx, withModifiers, createTextVNode, toDisplayString, renderList, renderSlot, createVNode } from 'vue';
import { s as script$9 } from './index-DNeUgqYE.mjs';
import { s as script$b } from './index-CdHYoDjK.mjs';
import { s as script$a } from './index-BqM4Us5C.mjs';
import { s as script$8 } from './index-CHtq0jTw.mjs';
import script$c from './index-B7GtGzBH.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import './index-B7Hm-fRB.mjs';
import '@primeuix/styles/iconfield';
import '@primeuix/styled';
import '@primeuix/utils/dom';
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
import './index-CJM4ASb2.mjs';
import './index-CAHYJcnJ.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';

var classes = {
  root: function root(_ref) {
    var props = _ref.props, state = _ref.state;
    return ["p-tree p-component", {
      "p-tree-selectable": props.selectionMode != null,
      "p-tree-loading": props.loading,
      "p-tree-flex-scrollable": props.scrollHeight === "flex",
      "p-tree-node-dragover": state.dragHover
    }];
  },
  mask: "p-tree-mask p-overlay-mask",
  loadingIcon: "p-tree-loading-icon",
  pcFilterContainer: "p-tree-filter",
  pcFilterInput: "p-tree-filter-input",
  wrapper: "p-tree-root",
  //TODO: discuss
  rootChildren: "p-tree-root-children",
  node: function node(_ref2) {
    var instance = _ref2.instance;
    return ["p-tree-node", {
      "p-tree-node-leaf": instance.leaf
    }];
  },
  nodeContent: function nodeContent(_ref3) {
    var instance = _ref3.instance;
    return ["p-tree-node-content", instance.node.styleClass, {
      "p-tree-node-selectable": instance.selectable,
      "p-tree-node-selected": instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected,
      "p-tree-node-dragover": instance.isNodeDropActive
    }];
  },
  nodeToggleButton: "p-tree-node-toggle-button",
  nodeToggleIcon: "p-tree-node-toggle-icon",
  nodeCheckbox: "p-tree-node-checkbox",
  nodeIcon: "p-tree-node-icon",
  nodeLabel: "p-tree-node-label",
  nodeChildren: "p-tree-node-children",
  emptyMessage: "p-tree-empty-message",
  dropPoint: "p-tree-node-drop-point"
};
var TreeStyle = BaseStyle.extend({
  name: "tree",
  style,
  classes
});
var script$2 = {
  name: "BaseTree",
  "extends": script$d,
  props: {
    value: {
      type: null,
      "default": null
    },
    expandedKeys: {
      type: null,
      "default": null
    },
    selectionKeys: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    metaKeySelection: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    loadingMode: {
      type: String,
      "default": "mask"
    },
    filter: {
      type: Boolean,
      "default": false
    },
    filterBy: {
      type: [String, Function],
      "default": "label"
    },
    filterMode: {
      type: String,
      "default": "lenient"
    },
    filterPlaceholder: {
      type: String,
      "default": null
    },
    filterLocale: {
      type: String,
      "default": void 0
    },
    highlightOnSelect: {
      type: Boolean,
      "default": false
    },
    scrollHeight: {
      type: String,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
    },
    draggableNodes: {
      type: Boolean,
      "default": null
    },
    droppableNodes: {
      type: Boolean,
      "default": null
    },
    draggableScope: {
      type: [String, Array],
      "default": null
    },
    droppableScope: {
      type: [String, Array],
      "default": null
    },
    validateDrop: {
      type: Boolean,
      "default": false
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
  style: TreeStyle,
  provide: function provide() {
    return {
      $pcTree: this,
      $parentInstance: this
    };
  }
};
var dragState = reactive({
  isDragging: false,
  dragNode: null,
  dragScope: null
});
var dragStartHandlers = /* @__PURE__ */ new Set();
var dragStopHandlers = /* @__PURE__ */ new Set();
function useTreeDragDropService() {
  var startDrag = function startDrag2(event) {
    dragState.isDragging = true;
    dragState.dragNode = event.node;
    dragState.dragScope = event.scope;
    dragStartHandlers.forEach(function(handler) {
      return handler(event);
    });
  };
  var stopDrag = function stopDrag2(event) {
    dragState.isDragging = false;
    dragState.dragNode = null;
    dragState.dragScope = null;
    dragStopHandlers.forEach(function(handler) {
      return handler(event);
    });
  };
  var onDragStart = function onDragStart2(handler) {
    dragStartHandlers.add(handler);
    return function() {
      return dragStartHandlers["delete"](handler);
    };
  };
  var onDragStop = function onDragStop2(handler) {
    dragStopHandlers.add(handler);
    return function() {
      return dragStopHandlers["delete"](handler);
    };
  };
  return {
    dragState,
    startDrag,
    stopDrag,
    onDragStart,
    onDragStop
  };
}
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function _createForOfIteratorHelper$1(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
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
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$1 = {
  name: "TreeNode",
  hostName: "Tree",
  "extends": script$d,
  emits: ["node-toggle", "node-click", "checkbox-change", "node-drop", "value-change", "node-dragenter", "node-dragleave"],
  props: {
    node: {
      type: null,
      "default": null
    },
    parentNode: {
      type: null,
      "default": null
    },
    rootNodes: {
      type: Array,
      "default": null
    },
    expandedKeys: {
      type: null,
      "default": null
    },
    loadingMode: {
      type: String,
      "default": "mask"
    },
    selectionKeys: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    templates: {
      type: null,
      "default": null
    },
    level: {
      type: Number,
      "default": null
    },
    draggableScope: {
      type: [String, Array],
      "default": null
    },
    draggableNodes: {
      type: Boolean,
      "default": null
    },
    droppableNodes: {
      type: Boolean,
      "default": null
    },
    validateDrop: {
      type: Boolean,
      "default": false
    },
    index: null
  },
  nodeTouched: false,
  toggleClicked: false,
  inject: {
    $pcTree: {
      "default": void 0
    }
  },
  data: function data() {
    return {
      isPrevDropPointHovered: false,
      isNextDropPointHovered: false,
      isNodeDropHovered: false
    };
  },
  mounted: function mounted() {
    this.setAllNodesTabIndexes();
  },
  methods: {
    toggle: function toggle() {
      this.$emit("node-toggle", this.node);
      this.toggleClicked = true;
    },
    label: function label(node2) {
      return typeof node2.label === "function" ? node2.label() : node2.label;
    },
    onChildNodeToggle: function onChildNodeToggle(node2) {
      this.$emit("node-toggle", node2);
    },
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        context: {
          node: this.node,
          index: this.index,
          expanded: this.expanded,
          selected: this.selected,
          checked: this.checked,
          partialChecked: this.partialChecked,
          leaf: this.leaf
        }
      });
    },
    onClick: function onClick(event) {
      if (this.toggleClicked || getAttribute(event.target, '[data-pc-section="nodetogglebutton"]') || getAttribute(event.target.parentElement, '[data-pc-section="nodetogglebutton"]')) {
        this.toggleClicked = false;
        return;
      }
      if (this.isCheckboxSelectionMode()) {
        if (this.node.selectable != false) {
          this.toggleCheckbox();
        }
      } else {
        this.$emit("node-click", {
          originalEvent: event,
          nodeTouched: this.nodeTouched,
          node: this.node
        });
      }
      this.nodeTouched = false;
    },
    onChildNodeClick: function onChildNodeClick(event) {
      this.$emit("node-click", event);
    },
    onTouchEnd: function onTouchEnd() {
      this.nodeTouched = true;
    },
    onKeyDown: function onKeyDown(event) {
      if (!this.isSameNode(event)) return;
      switch (event.code) {
        case "Tab":
          this.onTabKey(event);
          break;
        case "ArrowDown":
          this.onArrowDown(event);
          break;
        case "ArrowUp":
          this.onArrowUp(event);
          break;
        case "ArrowRight":
          this.onArrowRight(event);
          break;
        case "ArrowLeft":
          this.onArrowLeft(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(event);
          break;
      }
    },
    onArrowDown: function onArrowDown(event) {
      var nodeElement = event.target.getAttribute("data-pc-section") === "nodetogglebutton" ? event.target.closest('[role="treeitem"]') : event.target;
      var listElement = nodeElement.children[1];
      if (listElement) {
        this.focusRowChange(nodeElement, listElement.children[0]);
      } else {
        if (nodeElement.nextElementSibling) {
          this.focusRowChange(nodeElement, nodeElement.nextElementSibling);
        } else {
          var nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
          if (nextSiblingAncestor) {
            this.focusRowChange(nodeElement, nextSiblingAncestor);
          }
        }
      }
      event.preventDefault();
    },
    onArrowUp: function onArrowUp(event) {
      var nodeElement = event.target;
      if (nodeElement.previousElementSibling) {
        this.focusRowChange(nodeElement, nodeElement.previousElementSibling, this.findLastVisibleDescendant(nodeElement.previousElementSibling));
      } else {
        var parentNodeElement = this.getParentNodeElement(nodeElement);
        if (parentNodeElement) {
          this.focusRowChange(nodeElement, parentNodeElement);
        }
      }
      event.preventDefault();
    },
    onArrowRight: function onArrowRight(event) {
      var _this = this;
      if (this.leaf || this.expanded) return;
      event.currentTarget.tabIndex = -1;
      this.$emit("node-toggle", this.node);
      this.$nextTick(function() {
        _this.onArrowDown(event);
      });
    },
    onArrowLeft: function onArrowLeft(event) {
      var togglerElement = findSingle(event.currentTarget, '[data-pc-section="nodetogglebutton"]');
      if (this.level === 0 && !this.expanded) {
        return false;
      }
      if (this.expanded && !this.leaf) {
        togglerElement.click();
        return false;
      }
      var target = this.findBeforeClickableNode(event.currentTarget);
      if (target) {
        this.focusRowChange(event.currentTarget, target);
      }
    },
    onEnterKey: function onEnterKey(event) {
      this.setTabIndexForSelectionMode(event, this.nodeTouched);
      this.onClick(event);
      event.preventDefault();
    },
    onTabKey: function onTabKey() {
      this.setAllNodesTabIndexes();
    },
    removeNodeFromTree: function removeNodeFromTree(nodes, nodeToRemove) {
      var _this2 = this;
      return nodes.reduce(function(acc, node2) {
        if (node2.key === nodeToRemove.key) {
          return acc;
        }
        if (node2.children && node2.children.length > 0) {
          var updatedChildren = _this2.removeNodeFromTree(node2.children, nodeToRemove);
          acc.push(_objectSpread$2(_objectSpread$2({}, node2), {}, {
            children: updatedChildren
          }));
        } else {
          acc.push(node2);
        }
        return acc;
      }, []);
    },
    insertNodeInSiblings: function insertNodeInSiblings(nodes, targetKey, nodeToInsert, offset) {
      var _this3 = this;
      var targetIndex = nodes.findIndex(function(n) {
        return n.key === targetKey;
      });
      if (targetIndex !== -1) {
        return nodes.toSpliced(targetIndex + offset, 0, nodeToInsert);
      }
      return nodes.map(function(node2) {
        if (node2.children && node2.children.length > 0) {
          return _objectSpread$2(_objectSpread$2({}, node2), {}, {
            children: _this3.insertNodeInSiblings(node2.children, targetKey, nodeToInsert, offset)
          });
        }
        return node2;
      });
    },
    addNodeAsChild: function addNodeAsChild(nodes, parentKey, nodeToInsert) {
      var _this4 = this;
      return nodes.map(function(node2) {
        if (node2.key === parentKey) {
          return _objectSpread$2(_objectSpread$2({}, node2), {}, {
            children: [].concat(_toConsumableArray$1(node2.children || []), [nodeToInsert])
          });
        }
        if (node2.children && node2.children.length > 0) {
          return _objectSpread$2(_objectSpread$2({}, node2), {}, {
            children: _this4.addNodeAsChild(node2.children, parentKey, nodeToInsert)
          });
        }
        return node2;
      });
    },
    insertNodeOnDrop: function insertNodeOnDrop() {
      var _this$$pcTree = this.$pcTree, dragNode = _this$$pcTree.dragNode, dragNodeIndex = _this$$pcTree.dragNodeIndex, dragNodeSubNodes = _this$$pcTree.dragNodeSubNodes, dragDropService = _this$$pcTree.dragDropService;
      if (!this.node || dragNodeIndex == null || !dragNode || !dragNodeSubNodes) {
        return null;
      }
      var position = this.dropPosition;
      var updatedNodes = this.removeNodeFromTree(this.rootNodes, dragNode);
      if (position < 0) {
        updatedNodes = this.insertNodeInSiblings(updatedNodes, this.node.key, dragNode, 0);
      } else if (position > 0) {
        updatedNodes = this.insertNodeInSiblings(updatedNodes, this.node.key, dragNode, 1);
      } else {
        updatedNodes = this.addNodeAsChild(updatedNodes, this.node.key, dragNode);
      }
      this.$emit("value-change", {
        nodes: updatedNodes
      });
      dragDropService.stopDrag({
        node: dragNode,
        subNodes: updatedNodes,
        index: dragNodeIndex
      });
      return updatedNodes;
    },
    onNodeDrop: function onNodeDrop(event) {
      var _this5 = this;
      if (this.isDroppable) {
        event.preventDefault();
        event.stopPropagation();
        var dragNode = this.$pcTree.dragNode;
        var position = this.dropPosition;
        var isValidDrop = position !== 0 || position === 0 && this.isNodeDroppable;
        if (isValidDrop) {
          if (this.validateDrop) {
            this.$emit("node-drop", {
              originalEvent: event,
              value: this.rootNodes,
              dragNode,
              dropNode: this.node,
              index: this.index,
              accept: function accept() {
                var updatedNodes2 = _this5.insertNodeOnDrop();
                _this5.$emit("node-drop", {
                  originalEvent: event,
                  value: updatedNodes2,
                  dragNode,
                  dropNode: _this5.node,
                  index: _this5.index
                });
              }
            });
          } else {
            var updatedNodes = this.insertNodeOnDrop();
            this.$emit("node-drop", {
              originalEvent: event,
              value: updatedNodes,
              dragNode,
              dropNode: this.node,
              index: this.index
            });
          }
        }
        this.isPrevDropPointHovered = false;
        this.isNextDropPointHovered = false;
        this.isNodeDropHovered = false;
      }
    },
    onNodeDragStart: function onNodeDragStart(event) {
      if (this.isNodeDraggable) {
        event.dataTransfer.effectAllowed = "all";
        event.dataTransfer.setData("text", "data");
        var target = event.currentTarget;
        var dragEl = target.cloneNode(true);
        var toggler = dragEl.querySelector('[data-pc-section="nodetogglebutton"]');
        var checkbox = dragEl.querySelector('[data-pc-name="pcnodecheckbox"]');
        target.setAttribute("data-p-dragging", "true");
        dragEl.style.width = getOuterWidth(target) + "px";
        dragEl.style.height = getOuterHeight(target) + "px";
        dragEl.setAttribute("data-pc-section", "drag-image");
        toggler.style.visibility = "hidden";
        checkbox === null || checkbox === void 0 || checkbox.remove();
        (void 0).body.appendChild(dragEl);
        event.dataTransfer.setDragImage(dragEl, 0, 0);
        setTimeout(function() {
          return (void 0).body.removeChild(dragEl);
        }, 0);
        this.$pcTree.dragDropService.startDrag({
          node: this.node,
          subNodes: this.subNodes,
          index: this.index,
          scope: this.draggableScope
        });
      } else {
        event.preventDefault();
      }
    },
    onNodeDragOver: function onNodeDragOver(event) {
      if (this.isDroppable) {
        event.dataTransfer.dropEffect = "copy";
        var nodeElement = event.currentTarget;
        var rect = nodeElement.getBoundingClientRect();
        var y = event.clientY - rect.top;
        this.isPrevDropPointHovered = false;
        this.isNextDropPointHovered = false;
        this.isNodeDropHovered = false;
        if (y < rect.height * 0.25) {
          this.isPrevDropPointHovered = true;
        } else if (y > rect.height * 0.75) {
          this.isNextDropPointHovered = true;
        } else if (this.isNodeDroppable) {
          this.isNodeDropHovered = true;
        }
      } else {
        event.dataTransfer.dropEffect = "none";
      }
      if (this.droppableNodes) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onNodeDragEnter: function onNodeDragEnter() {
      this.$emit("node-dragenter", {
        node: this.node
      });
    },
    onNodeDragLeave: function onNodeDragLeave() {
      this.$emit("node-dragleave", {
        node: this.node
      });
      this.isPrevDropPointHovered = false;
      this.isNextDropPointHovered = false;
      this.isNodeDropHovered = false;
    },
    onNodeDragEnd: function onNodeDragEnd(event) {
      var _event$currentTarget;
      (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.removeAttribute("data-p-dragging");
      this.$pcTree.dragDropService.stopDrag({
        node: this.node,
        subNodes: this.subNodes,
        index: this.index
      });
    },
    setAllNodesTabIndexes: function setAllNodesTabIndexes() {
      var nodes = find(this.$refs.currentNode.closest('[data-pc-section="rootchildren"]'), '[role="treeitem"]');
      var hasSelectedNode = _toConsumableArray$1(nodes).some(function(node2) {
        return node2.getAttribute("aria-selected") === "true" || node2.getAttribute("aria-checked") === "true";
      });
      _toConsumableArray$1(nodes).forEach(function(node2) {
        node2.tabIndex = -1;
      });
      if (hasSelectedNode) {
        var selectedNodes = _toConsumableArray$1(nodes).filter(function(node2) {
          return node2.getAttribute("aria-selected") === "true" || node2.getAttribute("aria-checked") === "true";
        });
        selectedNodes[0].tabIndex = 0;
        return;
      }
      _toConsumableArray$1(nodes)[0].tabIndex = 0;
    },
    setTabIndexForSelectionMode: function setTabIndexForSelectionMode(event, nodeTouched) {
      if (this.selectionMode !== null) {
        var elements = _toConsumableArray$1(find(this.$refs.currentNode.parentElement, '[role="treeitem"]'));
        event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;
        if (elements.every(function(element) {
          return element.tabIndex === -1;
        })) {
          elements[0].tabIndex = 0;
        }
      }
    },
    focusRowChange: function focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
      firstFocusableRow.tabIndex = "-1";
      currentFocusedRow.tabIndex = "0";
      this.focusNode(lastVisibleDescendant || currentFocusedRow);
    },
    findBeforeClickableNode: function findBeforeClickableNode(node2) {
      var parentListElement = node2.closest("ul").closest("li");
      if (parentListElement) {
        var prevNodeButton = findSingle(parentListElement, "button");
        if (prevNodeButton && prevNodeButton.style.visibility !== "hidden") {
          return parentListElement;
        }
        return this.findBeforeClickableNode(node2.previousElementSibling);
      }
      return null;
    },
    toggleCheckbox: function toggleCheckbox() {
      var _selectionKeys = this.selectionKeys ? _objectSpread$2({}, this.selectionKeys) : {};
      var _check = !this.checked;
      this.propagateDown(this.node, _check, _selectionKeys);
      this.$emit("checkbox-change", {
        node: this.node,
        check: _check,
        selectionKeys: _selectionKeys
      });
    },
    propagateDown: function propagateDown(node2, check, selectionKeys) {
      if (check && node2.selectable != false) selectionKeys[node2.key] = {
        checked: true,
        partialChecked: false
      };
      else delete selectionKeys[node2.key];
      if (node2.children && node2.children.length) {
        var _iterator = _createForOfIteratorHelper$1(node2.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;
            this.propagateDown(child, check, selectionKeys);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    propagateUp: function propagateUp(event) {
      var check = event.check;
      var _selectionKeys = _objectSpread$2({}, event.selectionKeys);
      var checkedChildCount = 0;
      var childPartialSelected = false;
      var _iterator2 = _createForOfIteratorHelper$1(this.node.children), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var child = _step2.value;
          if (_selectionKeys[child.key] && _selectionKeys[child.key].checked) checkedChildCount++;
          else if (_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked) childPartialSelected = true;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (check && checkedChildCount === this.node.children.length) {
        _selectionKeys[this.node.key] = {
          checked: true,
          partialChecked: false
        };
      } else {
        if (!check) {
          delete _selectionKeys[this.node.key];
        }
        if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== this.node.children.length) _selectionKeys[this.node.key] = {
          checked: false,
          partialChecked: true
        };
        else delete _selectionKeys[this.node.key];
      }
      this.$emit("checkbox-change", {
        node: event.node,
        check: event.check,
        selectionKeys: _selectionKeys
      });
    },
    onChildCheckboxChange: function onChildCheckboxChange(event) {
      this.$emit("checkbox-change", event);
    },
    findNextSiblingOfAncestor: function findNextSiblingOfAncestor(nodeElement) {
      var parentNodeElement = this.getParentNodeElement(nodeElement);
      if (parentNodeElement) {
        if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;
        else return this.findNextSiblingOfAncestor(parentNodeElement);
      } else {
        return null;
      }
    },
    findLastVisibleDescendant: function findLastVisibleDescendant(nodeElement) {
      var childrenListElement = nodeElement.children[1];
      if (childrenListElement) {
        var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
        return this.findLastVisibleDescendant(lastChildElement);
      } else {
        return nodeElement;
      }
    },
    getParentNodeElement: function getParentNodeElement(nodeElement) {
      var parentNodeElement = nodeElement.parentElement.parentElement;
      return getAttribute(parentNodeElement, "role") === "treeitem" ? parentNodeElement : null;
    },
    focusNode: function focusNode(element) {
      element.focus();
    },
    isCheckboxSelectionMode: function isCheckboxSelectionMode() {
      return this.selectionMode === "checkbox";
    },
    isSameNode: function isSameNode(event) {
      return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[role="treeitem"]')));
    }
  },
  computed: {
    hasChildren: function hasChildren() {
      return this.node.children && this.node.children.length > 0;
    },
    expanded: function expanded() {
      return this.expandedKeys && this.expandedKeys[this.node.key] === true;
    },
    leaf: function leaf() {
      return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    },
    selectable: function selectable() {
      return this.node.selectable === false ? false : this.selectionMode != null;
    },
    selected: function selected() {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.node.key] === true : false;
    },
    checkboxMode: function checkboxMode() {
      return this.selectionMode === "checkbox" && this.node.selectable !== false;
    },
    checked: function checked() {
      return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked : false;
    },
    partialChecked: function partialChecked() {
      return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked : false;
    },
    ariaChecked: function ariaChecked() {
      return this.selectionMode === "single" || this.selectionMode === "multiple" ? this.selected : void 0;
    },
    ariaSelected: function ariaSelected() {
      return this.checkboxMode ? this.checked : void 0;
    },
    isPrevDropPointActive: function isPrevDropPointActive() {
      return this.isPrevDropPointHovered && this.isDroppable;
    },
    isNextDropPointActive: function isNextDropPointActive() {
      return this.isNextDropPointHovered && this.isDroppable;
    },
    dropPosition: function dropPosition() {
      return this.isPrevDropPointActive ? -1 : this.isNextDropPointActive ? 1 : 0;
    },
    subNodes: function subNodes() {
      return this.parentNode ? this.parentNode.children : this.rootNodes;
    },
    isDraggable: function isDraggable() {
      return this.draggableNodes;
    },
    isDroppable: function isDroppable() {
      return this.droppableNodes && this.$pcTree.allowNodeDrop(this.node);
    },
    isNodeDraggable: function isNodeDraggable() {
      var _this$node;
      return ((_this$node = this.node) === null || _this$node === void 0 ? void 0 : _this$node.draggable) !== false && this.isDraggable;
    },
    isNodeDroppable: function isNodeDroppable() {
      var _this$node2;
      return ((_this$node2 = this.node) === null || _this$node2 === void 0 ? void 0 : _this$node2.droppable) !== false && this.isDroppable;
    },
    isNodeDropActive: function isNodeDropActive() {
      return this.isNodeDropHovered && this.isNodeDroppable;
    }
  },
  components: {
    Checkbox: script$c,
    ChevronDownIcon: script$b,
    ChevronRightIcon: script$a,
    CheckIcon: script$9,
    MinusIcon: script$8,
    SpinnerIcon: script$3
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1 = ["aria-label", "aria-selected", "aria-expanded", "aria-setsize", "aria-posinset", "aria-level", "aria-checked", "tabindex"];
var _hoisted_2$1 = ["draggable", "data-p-selected", "data-p-selectable"];
var _hoisted_3$1 = ["data-p-leaf"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_Checkbox = resolveComponent("Checkbox");
  var _component_TreeNode = resolveComponent("TreeNode", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("li", mergeProps({
    ref: "currentNode",
    "class": _ctx.cx("node"),
    role: "treeitem",
    "aria-label": $options.label($props.node),
    "aria-selected": $options.ariaSelected,
    "aria-expanded": $options.expanded,
    "aria-setsize": $props.node.children ? $props.node.children.length : 0,
    "aria-posinset": $props.index + 1,
    "aria-level": $props.level,
    "aria-checked": $options.ariaChecked,
    tabindex: $props.index === 0 ? 0 : -1,
    onKeydown: _cache[14] || (_cache[14] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, $options.getPTOptions("node")), [$options.isPrevDropPointActive ? (openBlock(), createElementBlock("div", {
    key: 0,
    "class": normalizeClass(_ctx.cx("dropPoint")),
    "aria-hidden": "true"
  }, null, 2)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("nodeContent"),
    style: $props.node.style,
    draggable: $options.isDraggable,
    onClick: _cache[2] || (_cache[2] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    }),
    onTouchend: _cache[3] || (_cache[3] = function() {
      return $options.onTouchEnd && $options.onTouchEnd.apply($options, arguments);
    }),
    onDragstart: _cache[4] || (_cache[4] = function() {
      return $options.onNodeDragStart && $options.onNodeDragStart.apply($options, arguments);
    }),
    onDragover: _cache[5] || (_cache[5] = function() {
      return $options.onNodeDragOver && $options.onNodeDragOver.apply($options, arguments);
    }),
    onDragenter: _cache[6] || (_cache[6] = function() {
      return $options.onNodeDragEnter && $options.onNodeDragEnter.apply($options, arguments);
    }),
    onDragleave: _cache[7] || (_cache[7] = function() {
      return $options.onNodeDragLeave && $options.onNodeDragLeave.apply($options, arguments);
    }),
    onDragend: _cache[8] || (_cache[8] = function() {
      return $options.onNodeDragEnd && $options.onNodeDragEnd.apply($options, arguments);
    }),
    onDrop: _cache[9] || (_cache[9] = function() {
      return $options.onNodeDrop && $options.onNodeDrop.apply($options, arguments);
    })
  }, $options.getPTOptions("nodeContent"), {
    "data-p-selected": $options.checkboxMode ? $options.checked : $options.selected,
    "data-p-selectable": $options.selectable
  }), [withDirectives((openBlock(), createElementBlock("button", mergeProps({
    type: "button",
    "class": _ctx.cx("nodeToggleButton"),
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.toggle && $options.toggle.apply($options, arguments);
    }),
    tabindex: "-1",
    "data-p-leaf": $options.leaf
  }, $options.getPTOptions("nodeToggleButton")), [$props.node.loading && $props.loadingMode === "icon" ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [$props.templates["nodetoggleicon"] || $props.templates["nodetogglericon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["nodetoggleicon"] || $props.templates["nodetogglericon"]), {
    key: 0,
    node: $props.node,
    expanded: $options.expanded,
    "class": normalizeClass(_ctx.cx("nodeToggleIcon"))
  }, null, 8, ["node", "expanded", "class"])) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
    key: 1,
    spin: "",
    "class": _ctx.cx("nodeToggleIcon")
  }, $options.getPTOptions("nodeToggleIcon")), null, 16, ["class"]))], 64)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [$props.templates["nodetoggleicon"] || $props.templates["togglericon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["nodetoggleicon"] || $props.templates["togglericon"]), {
    key: 0,
    node: $props.node,
    expanded: $options.expanded,
    "class": normalizeClass(_ctx.cx("nodeToggleIcon"))
  }, null, 8, ["node", "expanded", "class"])) : $options.expanded ? (openBlock(), createBlock(resolveDynamicComponent($props.node.expandedIcon ? "span" : "ChevronDownIcon"), mergeProps({
    key: 1,
    "class": _ctx.cx("nodeToggleIcon")
  }, $options.getPTOptions("nodeToggleIcon")), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent($props.node.collapsedIcon ? "span" : "ChevronRightIcon"), mergeProps({
    key: 2,
    "class": _ctx.cx("nodeToggleIcon")
  }, $options.getPTOptions("nodeToggleIcon")), null, 16, ["class"]))], 64))], 16, _hoisted_3$1)), [[_directive_ripple]]), $options.checkboxMode ? (openBlock(), createBlock(_component_Checkbox, {
    key: 0,
    defaultValue: $options.checked,
    binary: true,
    indeterminate: $options.partialChecked,
    "class": normalizeClass(_ctx.cx("nodeCheckbox")),
    tabindex: -1,
    unstyled: _ctx.unstyled,
    pt: $options.getPTOptions("pcNodeCheckbox"),
    "data-p-partialchecked": $options.partialChecked
  }, {
    icon: withCtx(function(slotProps) {
      return [$props.templates["checkboxicon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["checkboxicon"]), {
        key: 0,
        checked: slotProps.checked,
        partialChecked: $options.partialChecked,
        "class": normalizeClass(slotProps["class"])
      }, null, 8, ["checked", "partialChecked", "class"])) : createCommentVNode("", true)];
    }),
    _: 1
  }, 8, ["defaultValue", "indeterminate", "class", "unstyled", "pt", "data-p-partialchecked"])) : createCommentVNode("", true), $props.templates["nodeicon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["nodeicon"]), mergeProps({
    key: 1,
    node: $props.node,
    "class": [_ctx.cx("nodeIcon")]
  }, $options.getPTOptions("nodeIcon")), null, 16, ["node", "class"])) : (openBlock(), createElementBlock("span", mergeProps({
    key: 2,
    "class": [_ctx.cx("nodeIcon"), $props.node.icon]
  }, $options.getPTOptions("nodeIcon")), null, 16)), createElementVNode("span", mergeProps({
    "class": _ctx.cx("nodeLabel")
  }, $options.getPTOptions("nodeLabel"), {
    onKeydown: _cache[1] || (_cache[1] = withModifiers(function() {
    }, ["stop"]))
  }), [$props.templates[$props.node.type] || $props.templates["default"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates[$props.node.type] || $props.templates["default"]), {
    key: 0,
    node: $props.node,
    expanded: $options.expanded,
    selected: $options.checkboxMode ? $options.checked : $options.selected
  }, null, 8, ["node", "expanded", "selected"])) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [createTextVNode(toDisplayString($options.label($props.node)), 1)], 64))], 16)], 16, _hoisted_2$1), $options.isNextDropPointActive ? (openBlock(), createElementBlock("div", {
    key: 1,
    "class": normalizeClass(_ctx.cx("dropPoint")),
    "aria-hidden": "true"
  }, null, 2)) : createCommentVNode("", true), $options.hasChildren && $options.expanded ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 2,
    "class": _ctx.cx("nodeChildren"),
    role: "group"
  }, _ctx.ptm("nodeChildren")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.node.children, function(childNode, index) {
    return openBlock(), createBlock(_component_TreeNode, {
      key: childNode.key,
      node: childNode,
      parentNode: $props.node,
      rootNodes: $props.rootNodes,
      templates: $props.templates,
      level: $props.level + 1,
      index,
      loadingMode: $props.loadingMode,
      expandedKeys: $props.expandedKeys,
      onNodeToggle: $options.onChildNodeToggle,
      onNodeClick: $options.onChildNodeClick,
      selectionMode: $props.selectionMode,
      selectionKeys: $props.selectionKeys,
      onCheckboxChange: $options.propagateUp,
      draggableScope: $props.draggableScope,
      draggableNodes: $props.draggableNodes,
      droppableNodes: $props.droppableNodes,
      validateDrop: $props.validateDrop,
      onNodeDrop: _cache[10] || (_cache[10] = function($event) {
        return _ctx.$emit("node-drop", $event);
      }),
      onNodeDragenter: _cache[11] || (_cache[11] = function($event) {
        return _ctx.$emit("node-dragenter", $event);
      }),
      onNodeDragleave: _cache[12] || (_cache[12] = function($event) {
        return _ctx.$emit("node-dragleave", $event);
      }),
      onValueChange: _cache[13] || (_cache[13] = function($event) {
        return _ctx.$emit("value-change", $event);
      }),
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["node", "parentNode", "rootNodes", "templates", "level", "index", "loadingMode", "expandedKeys", "onNodeToggle", "onNodeClick", "selectionMode", "selectionKeys", "onCheckboxChange", "draggableScope", "draggableNodes", "droppableNodes", "validateDrop", "unstyled", "pt"]);
  }), 128))], 16)) : createCommentVNode("", true)], 16, _hoisted_1$1);
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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
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
  name: "Tree",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["node-expand", "node-collapse", "update:expandedKeys", "update:selectionKeys", "node-select", "node-unselect", "filter", "node-drop", "node-dragenter", "node-dragleave", "update:value", "drag-enter", "drag-leave"],
  data: function data2() {
    return {
      d_expandedKeys: this.expandedKeys || {},
      filterValue: null,
      dragNode: null,
      dragNodeSubNodes: null,
      dragNodeIndex: null,
      dragNodeScope: null,
      dragHover: null
    };
  },
  inject: {
    $pcTreeSelect: {
      "default": null
    }
  },
  dragDropService: null,
  dragStartCleanup: null,
  dragStopCleanup: null,
  watch: {
    expandedKeys: function expandedKeys(newValue) {
      this.d_expandedKeys = newValue;
    }
  },
  mounted: function mounted2() {
    var _this = this;
    if (this.droppableNodes) {
      this.dragDropService = useTreeDragDropService();
      this.dragStartCleanup = this.dragDropService.onDragStart(function(event) {
        _this.dragNode = event.node;
        _this.dragNodeSubNodes = event.subNodes;
        _this.dragNodeIndex = event.index;
        _this.dragNodeScope = event.scope;
      });
      this.dragStopCleanup = this.dragDropService.onDragStop(function() {
        _this.dragNode = null;
        _this.dragNodeSubNodes = null;
        _this.dragNodeIndex = null;
        _this.dragNodeScope = null;
        _this.dragHover = false;
      });
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.dragStartCleanup) {
      this.dragStartCleanup();
    }
    if (this.dragStopCleanup) {
      this.dragStopCleanup();
    }
  },
  methods: {
    onNodeToggle: function onNodeToggle(node2) {
      var key = node2.key;
      if (this.d_expandedKeys[key]) {
        delete this.d_expandedKeys[key];
        this.$emit("node-collapse", node2);
      } else {
        this.d_expandedKeys[key] = true;
        this.$emit("node-expand", node2);
      }
      this.d_expandedKeys = _objectSpread$1({}, this.d_expandedKeys);
      this.$emit("update:expandedKeys", this.d_expandedKeys);
    },
    onNodeClick: function onNodeClick(event) {
      if (this.selectionMode != null && event.node.selectable !== false) {
        var metaSelection = event.nodeTouched ? false : this.metaKeySelection;
        var _selectionKeys = metaSelection ? this.handleSelectionWithMetaKey(event) : this.handleSelectionWithoutMetaKey(event);
        this.$emit("update:selectionKeys", _selectionKeys);
      }
    },
    onCheckboxChange: function onCheckboxChange(event) {
      this.$emit("update:selectionKeys", event.selectionKeys);
      if (event.check) this.$emit("node-select", event.node);
      else this.$emit("node-unselect", event.node);
    },
    handleSelectionWithMetaKey: function handleSelectionWithMetaKey(event) {
      var originalEvent = event.originalEvent;
      var node2 = event.node;
      var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      var selected2 = this.isNodeSelected(node2);
      var _selectionKeys;
      if (selected2 && metaKey) {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else {
          _selectionKeys = _objectSpread$1({}, this.selectionKeys);
          delete _selectionKeys[node2.key];
        }
        this.$emit("node-unselect", node2);
      } else {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else if (this.isMultipleSelectionMode()) {
          _selectionKeys = !metaKey ? {} : this.selectionKeys ? _objectSpread$1({}, this.selectionKeys) : {};
        }
        _selectionKeys[node2.key] = true;
        this.$emit("node-select", node2);
      }
      return _selectionKeys;
    },
    handleSelectionWithoutMetaKey: function handleSelectionWithoutMetaKey(event) {
      var node2 = event.node;
      var selected2 = this.isNodeSelected(node2);
      var _selectionKeys;
      if (this.isSingleSelectionMode()) {
        if (selected2) {
          _selectionKeys = {};
          this.$emit("node-unselect", node2);
        } else {
          _selectionKeys = {};
          _selectionKeys[node2.key] = true;
          this.$emit("node-select", node2);
        }
      } else {
        if (selected2) {
          _selectionKeys = _objectSpread$1({}, this.selectionKeys);
          delete _selectionKeys[node2.key];
          this.$emit("node-unselect", node2);
        } else {
          _selectionKeys = this.selectionKeys ? _objectSpread$1({}, this.selectionKeys) : {};
          _selectionKeys[node2.key] = true;
          this.$emit("node-select", node2);
        }
      }
      return _selectionKeys;
    },
    isSingleSelectionMode: function isSingleSelectionMode() {
      return this.selectionMode === "single";
    },
    isMultipleSelectionMode: function isMultipleSelectionMode() {
      return this.selectionMode === "multiple";
    },
    isNodeSelected: function isNodeSelected(node2) {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[node2.key] === true : false;
    },
    isChecked: function isChecked(node2) {
      return this.selectionKeys ? this.selectionKeys[node2.key] && this.selectionKeys[node2.key].checked : false;
    },
    isNodeLeaf: function isNodeLeaf(node2) {
      return node2.leaf === false ? false : !(node2.children && node2.children.length);
    },
    onFilterKeyup: function onFilterKeyup(event) {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
      }
      this.$emit("filter", {
        originalEvent: event,
        value: event.target.value
      });
    },
    findFilteredNodes: function findFilteredNodes(node2, paramsWithoutNode) {
      if (node2) {
        var matched = false;
        if (node2.children) {
          var childNodes = _toConsumableArray(node2.children);
          node2.children = [];
          var _iterator = _createForOfIteratorHelper(childNodes), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var childNode = _step.value;
              var copyChildNode = _objectSpread$1({}, childNode);
              if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                matched = true;
                node2.children.push(copyChildNode);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (matched) {
          return true;
        }
      }
    },
    isFilterMatched: function isFilterMatched(node2, _ref) {
      var searchFields = _ref.searchFields, filterText = _ref.filterText, strict = _ref.strict;
      var matched = false;
      var _iterator2 = _createForOfIteratorHelper(searchFields), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var field = _step2.value;
          var fieldValue = String(resolveFieldData(node2, field)).toLocaleLowerCase(this.filterLocale);
          if (fieldValue.indexOf(filterText) > -1) {
            matched = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (!matched || strict && !this.isNodeLeaf(node2)) {
        matched = this.findFilteredNodes(node2, {
          searchFields,
          filterText,
          strict
        }) || matched;
      }
      return matched;
    },
    onNodeDrop: function onNodeDrop2(event) {
      this.$emit("node-drop", event);
    },
    onNodeDragEnter: function onNodeDragEnter2(event) {
      this.$emit("node-dragenter", event);
    },
    onNodeDragLeave: function onNodeDragLeave2(event) {
      this.$emit("node-dragleave", event);
    },
    onValueChanged: function onValueChanged(event) {
      this.dragNodeSubNodes.splice(this.dragNodeIndex, 1);
      this.$emit("update:value", event.nodes);
    },
    allowDrop: function allowDrop(dragNode, dropNode, dragNodeScope) {
      if (!dragNode) {
        return false;
      } else if (this.isValidDragScope(dragNodeScope)) {
        var allow = true;
        if (dropNode) {
          if (dragNode === dropNode) {
            allow = false;
          } else {
            var parent = dropNode.parent;
            while (parent != null) {
              if (parent === dragNode) {
                allow = false;
                break;
              }
              parent = parent.parent;
            }
          }
        }
        return allow;
      } else {
        return false;
      }
    },
    allowNodeDrop: function allowNodeDrop(dropNode) {
      return this.allowDrop(this.dragNode, dropNode, this.dragNodeScope);
    },
    hasCommonScope: function hasCommonScope(dragScope, dropScope) {
      if (dragScope === null && dropScope === null) {
        return true;
      } else if (dragScope === null || dropScope === null) {
        return false;
      }
      if (typeof dropScope === "string") {
        if (typeof dragScope === "string") {
          return dragScope === dropScope;
        } else if (Array.isArray(dragScope)) {
          return dragScope.indexOf(dropScope) !== -1;
        }
      } else if (Array.isArray(dropScope)) {
        if (typeof dragScope === "string") {
          return dropScope.indexOf(dragScope) !== -1;
        } else if (Array.isArray(dragScope)) {
          var _iterator3 = _createForOfIteratorHelper(dragScope), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var ds = _step3.value;
              if (dropScope.indexOf(ds) !== -1) {
                return true;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return false;
        }
      }
      return false;
    },
    isValidDragScope: function isValidDragScope(dragScope) {
      if (this.droppableScope === null) {
        return true;
      }
      return this.hasCommonScope(dragScope, this.droppableScope);
    },
    isSameTreeScope: function isSameTreeScope(dragScope) {
      return this.hasCommonScope(dragScope, this.draggableScope);
    },
    onDragOver: function onDragOver(event) {
      if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
        event.dataTransfer.dropEffect = "copy";
      } else {
        event.dataTransfer.dropEffect = "none";
      }
      event.preventDefault();
    },
    onDragEnter: function onDragEnter(event) {
      if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
        this.dragHover = true;
        this.$emit("drag-enter", {
          originalEvent: event,
          value: this.value,
          dragNode: this.dragNode,
          dragNodeScope: this.dragNodeScope
        });
      }
    },
    onDragLeave: function onDragLeave(event) {
      if (this.droppableNodes) {
        var rect = event.currentTarget.getBoundingClientRect();
        if (event.x >= parseInt(rect.right) || event.x <= parseInt(rect.left) || event.y >= parseInt(rect.bottom) || event.y <= parseInt(rect.top)) {
          this.dragHover = false;
        }
        this.$emit("drag-leave", {
          originalEvent: event,
          value: this.value,
          dragNode: this.dragNode,
          dragNodeScope: this.dragNodeScope
        });
      }
    },
    processTreeDrop: function processTreeDrop(dragNode, dragNodeIndex) {
      this.dragNodeSubNodes.splice(dragNodeIndex, 1);
      var newValue = [].concat(_toConsumableArray(this.value || []), [dragNode]);
      this.$emit("update:value", newValue);
      this.dragDropService.stopDrag({
        node: dragNode
      });
    },
    onDrop: function onDrop(event) {
      var _this2 = this;
      if (this.droppableNodes) {
        event.preventDefault();
        var dragNode = this.dragNode;
        if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
          var dragNodeIndex = this.dragNodeIndex;
          if (this.isSameTreeScope(this.dragNodeScope)) {
            this.dragDropService.stopDrag({
              node: dragNode
            });
            return;
          }
          if (this.validateDrop) {
            this.$emit("node-drop", {
              originalEvent: event,
              value: this.value,
              dragNode,
              dropNode: null,
              index: dragNodeIndex,
              accept: function accept() {
                _this2.processTreeDrop(dragNode, dragNodeIndex);
              }
            });
          } else {
            this.$emit("node-drop", {
              originalEvent: event,
              value: this.value,
              dragNode,
              dropNode: null,
              index: dragNodeIndex
            });
            this.processTreeDrop(dragNode, dragNodeIndex);
          }
        }
      }
    }
  },
  computed: {
    filteredValue: function filteredValue() {
      var filteredNodes = [];
      var searchFields = isFunction(this.filterBy) ? [this.filterBy] : this.filterBy.split(",");
      var filterText = this.filterValue.trim().toLocaleLowerCase(this.filterLocale);
      var strict = this.filterMode === "strict";
      var _iterator4 = _createForOfIteratorHelper(this.value), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var node2 = _step4.value;
          var _node = _objectSpread$1({}, node2);
          var paramsWithoutNode = {
            searchFields,
            filterText,
            strict
          };
          if (strict && (this.findFilteredNodes(_node, paramsWithoutNode) || this.isFilterMatched(_node, paramsWithoutNode)) || !strict && (this.isFilterMatched(_node, paramsWithoutNode) || this.findFilteredNodes(_node, paramsWithoutNode))) {
            filteredNodes.push(_node);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return filteredNodes;
    },
    valueToRender: function valueToRender() {
      if (this.filterValue && this.filterValue.trim().length > 0) return this.filteredValue;
      else return this.value;
    },
    empty: function empty() {
      return !this.valueToRender || this.valueToRender.length === 0;
    },
    emptyMessageText: function emptyMessageText() {
      var _this$$primevue$confi;
      return ((_this$$primevue$confi = this.$primevue.config) === null || _this$$primevue$confi === void 0 || (_this$$primevue$confi = _this$$primevue$confi.locale) === null || _this$$primevue$confi === void 0 ? void 0 : _this$$primevue$confi.emptyMessage) || "";
    },
    containerDataP: function containerDataP() {
      return cn({
        loading: this.loading,
        scrollable: this.scrollHeight === "flex"
      });
    },
    wrapperDataP: function wrapperDataP() {
      return cn({
        scrollable: this.scrollHeight === "flex"
      });
    }
  },
  components: {
    TreeNode: script$1,
    InputText: script$7,
    InputIcon: script$6,
    IconField: script$5,
    SearchIcon: script$4,
    SpinnerIcon: script$3
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
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["aria-labelledby", "aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_InputText = resolveComponent("InputText");
  var _component_SearchIcon = resolveComponent("SearchIcon");
  var _component_InputIcon = resolveComponent("InputIcon");
  var _component_IconField = resolveComponent("IconField");
  var _component_TreeNode = resolveComponent("TreeNode");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    onDragover: _cache[1] || (_cache[1] = function() {
      return $options.onDragOver && $options.onDragOver.apply($options, arguments);
    }),
    onDragenter: _cache[2] || (_cache[2] = function() {
      return $options.onDragEnter && $options.onDragEnter.apply($options, arguments);
    }),
    onDragleave: _cache[3] || (_cache[3] = function() {
      return $options.onDragLeave && $options.onDragLeave.apply($options, arguments);
    }),
    onDrop: _cache[4] || (_cache[4] = function() {
      return $options.onDrop && $options.onDrop.apply($options, arguments);
    }),
    "data-p": $options.containerDataP
  }, _ctx.ptmi("root")), [_ctx.loading && _ctx.loadingMode === "mask" ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("mask")
  }, _ctx.ptm("mask")), [renderSlot(_ctx.$slots, "loadingicon", {
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, function() {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("i", mergeProps({
      key: 0,
      "class": [_ctx.cx("loadingIcon"), "pi-spin", _ctx.loadingIcon]
    }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      spin: "",
      "class": _ctx.cx("loadingIcon")
    }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
  })], 16)) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createBlock(_component_IconField, {
    key: 1,
    unstyled: _ctx.unstyled,
    pt: _objectSpread(_objectSpread({}, _ctx.ptm("pcFilter")), _ctx.ptm("pcFilterContainer")),
    "class": normalizeClass(_ctx.cx("pcFilterContainer"))
  }, {
    "default": withCtx(function() {
      return [createVNode(_component_InputText, {
        modelValue: $data.filterValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
          return $data.filterValue = $event;
        }),
        autocomplete: "off",
        "class": normalizeClass(_ctx.cx("pcFilterInput")),
        placeholder: _ctx.filterPlaceholder,
        unstyled: _ctx.unstyled,
        onKeyup: $options.onFilterKeyup,
        pt: _ctx.ptm("pcFilterInput")
      }, null, 8, ["modelValue", "class", "placeholder", "unstyled", "onKeyup", "pt"]), createVNode(_component_InputIcon, {
        unstyled: _ctx.unstyled,
        pt: _ctx.ptm("pcFilterIconContainer")
      }, {
        "default": withCtx(function() {
          return [renderSlot(_ctx.$slots, _ctx.$slots.filtericon ? "filtericon" : "searchicon", {
            "class": normalizeClass(_ctx.cx("filterIcon"))
          }, function() {
            return [createVNode(_component_SearchIcon, mergeProps({
              "class": _ctx.cx("filterIcon")
            }, _ctx.ptm("filterIcon")), null, 16, ["class"])];
          })];
        }),
        _: 3
      }, 8, ["unstyled", "pt"])];
    }),
    _: 3
  }, 8, ["unstyled", "pt", "class"])) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("wrapper"),
    style: {
      maxHeight: _ctx.scrollHeight
    },
    "data-p": $options.wrapperDataP
  }, _ctx.ptm("wrapper")), [renderSlot(_ctx.$slots, "header", {
    value: _ctx.value,
    expandedKeys: _ctx.expandedKeys,
    selectionKeys: _ctx.selectionKeys
  }), !$options.empty ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 0,
    "class": _ctx.cx("rootChildren"),
    role: "tree",
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, _ctx.ptm("rootChildren")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.valueToRender, function(node2, index) {
    return openBlock(), createBlock(_component_TreeNode, {
      key: node2.key,
      node: node2,
      rootNodes: $options.valueToRender,
      templates: _ctx.$slots,
      level: _ctx.level + 1,
      index,
      expandedKeys: $data.d_expandedKeys,
      onNodeToggle: $options.onNodeToggle,
      onNodeClick: $options.onNodeClick,
      selectionMode: _ctx.selectionMode,
      selectionKeys: _ctx.selectionKeys,
      onCheckboxChange: $options.onCheckboxChange,
      loadingMode: _ctx.loadingMode,
      draggableNodes: _ctx.draggableNodes,
      droppableNodes: _ctx.droppableNodes,
      draggableScope: _ctx.draggableScope,
      validateDrop: _ctx.validateDrop,
      onNodeDrop: $options.onNodeDrop,
      onNodeDragenter: $options.onNodeDragEnter,
      onNodeDragleave: $options.onNodeDragLeave,
      onValueChange: $options.onValueChanged,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["node", "rootNodes", "templates", "level", "index", "expandedKeys", "onNodeToggle", "onNodeClick", "selectionMode", "selectionKeys", "onCheckboxChange", "loadingMode", "draggableNodes", "droppableNodes", "draggableScope", "validateDrop", "onNodeDrop", "onNodeDragenter", "onNodeDragleave", "onValueChange", "unstyled", "pt"]);
  }), 128))], 16, _hoisted_3)) : $options.empty && !$options.$pcTreeSelect ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("emptyMessage")
  }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "empty", {}, function() {
    return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
  })], 16)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "footer", {
    value: _ctx.value,
    expandedKeys: _ctx.expandedKeys,
    selectionKeys: _ctx.selectionKeys
  })], 16, _hoisted_2)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-B9Zq06RM.mjs.map
