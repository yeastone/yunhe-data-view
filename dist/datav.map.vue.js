(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue));
}(this, (function (Vue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

  function debounce(delay, callback) {
    let lastTime;
    return function () {
      clearTimeout(lastTime);
      const [that, args] = [this, arguments];
      lastTime = setTimeout(() => {
        callback.apply(that, args);
      }, delay);
    };
  }
  function observerDomResize(dom, callback) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    const observer = new MutationObserver(callback);
    observer.observe(dom, {
      attributes: true,
      attributeFilter: ['style'],
      attributeOldValue: true
    });
    return observer;
  }

  var autoResize = {
    data() {
      return {
        dom: '',
        width: 0,
        height: 0,
        debounceInitWHFun: '',
        domObserver: ''
      };
    },

    methods: {
      async autoResizeMixinInit() {
        const {
          initWH,
          getDebounceInitWHFun,
          bindDomResizeCallback,
          afterAutoResizeMixinInit
        } = this;
        await initWH(false);
        getDebounceInitWHFun();
        bindDomResizeCallback();
        if (typeof afterAutoResizeMixinInit === 'function') afterAutoResizeMixinInit();
      },

      initWH(resize = true) {
        const {
          $nextTick,
          $refs,
          ref,
          onResize
        } = this;
        return new Promise(resolve => {
          $nextTick(_ => {
            const dom = this.dom = $refs[ref];
            this.width = dom ? dom.clientWidth : 0;
            this.height = dom ? dom.clientHeight : 0;

            if (!dom) {
              console.warn('DataV: Failed to get dom node, component rendering may be abnormal!');
            } else if (!this.width || !this.height) {
              console.warn('DataV: Component width or height is 0px, rendering abnormality may occur!');
            }

            if (typeof onResize === 'function' && resize) onResize();
            resolve();
          });
        });
      },

      getDebounceInitWHFun() {
        const {
          initWH
        } = this;
        this.debounceInitWHFun = debounce(100, initWH);
      },

      bindDomResizeCallback() {
        const {
          dom,
          debounceInitWHFun
        } = this;
        this.domObserver = observerDomResize(dom, debounceInitWHFun);
        window.addEventListener('resize', debounceInitWHFun);
      },

      unbindDomResizeCallback() {
        let {
          domObserver,
          debounceInitWHFun
        } = this;
        if (!domObserver) return;
        domObserver.disconnect();
        domObserver.takeRecords();
        domObserver = null;
        window.removeEventListener('resize', debounceInitWHFun);
      }

    },

    mounted() {
      const {
        autoResizeMixinInit
      } = this;
      autoResizeMixinInit();
    },

    beforeDestroy() {
      const {
        unbindDomResizeCallback
      } = this;
      unbindDomResizeCallback();
    }

  };

  //
  var script$2 = {
    name: 'YhBorderBox1',
    mixins: [autoResize],
    props: {
      background: {
        type: String,
        default: 'transparent'
      },
      cornerColor: {
        type: String,
        default: '#00DEFE'
      },
      borderWidth: {
        type: String,
        default: '2px'
      },
      width: {
        type: String,
        default: '16px'
      },
      height: {
        type: String,
        default: '16px'
      },
      offset: {
        type: String,
        default: '0px'
      }
    },

    data() {
      return {
        ref: 'border-box-1'
      };
    },

    methods: {},

    mounted() {
      this.$refs[this.ref].style.setProperty('--offset', this.offset);
    }

  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        ref: _vm.ref,
        staticClass: "yh-border-box-1",
        style: {
          background: _vm.background
        }
      },
      [
        _vm._l(4, function(i) {
          return _c("div", {
            key: i,
            staticClass: "common-corner",
            class: "common-corner-" + i,
            style: {
              "border-color": _vm.cornerColor,
              "border-width": _vm.borderWidth,
              width: _vm.width,
              height: _vm.height
            }
          })
        }),
        _vm._v(" "),
        _c("div", { staticClass: "border-box-content" }, [_vm._t("default")], 2)
      ],
      2
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-7915f8bf_0", { source: ".yh-border-box-1 {\n  --offset: -1px;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #108fff !important;\n  box-shadow: inset 0 0 18px 5px #0064b8 !important;\n}\n.yh-border-box-1 .common-corner {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border: 1px solid #00dcfeaf;\n}\n.yh-border-box-1 .common-corner-1 {\n  left: var(--offset);\n  top: var(--offset);\n  border-right: none;\n  border-bottom: none;\n}\n.yh-border-box-1 .common-corner-2 {\n  right: var(--offset);\n  top: var(--offset);\n  border-left: none;\n  border-bottom: none;\n}\n.yh-border-box-1 .common-corner-3 {\n  left: var(--offset);\n  bottom: var(--offset);\n  border-right: none;\n  border-top: none;\n}\n.yh-border-box-1 .common-corner-4 {\n  right: var(--offset);\n  bottom: var(--offset);\n  border-left: none;\n  border-top: none;\n}\n.yh-border-box-1 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n", map: {"version":3,"sources":["main.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,iDAAiD;AACnD;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,2BAA2B;AAC7B;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd","file":"main.vue","sourcesContent":[".yh-border-box-1 {\n  --offset: -1px;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #108fff !important;\n  box-shadow: inset 0 0 18px 5px #0064b8 !important;\n}\n.yh-border-box-1 .common-corner {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border: 1px solid #00dcfeaf;\n}\n.yh-border-box-1 .common-corner-1 {\n  left: var(--offset);\n  top: var(--offset);\n  border-right: none;\n  border-bottom: none;\n}\n.yh-border-box-1 .common-corner-2 {\n  right: var(--offset);\n  top: var(--offset);\n  border-left: none;\n  border-bottom: none;\n}\n.yh-border-box-1 .common-corner-3 {\n  left: var(--offset);\n  bottom: var(--offset);\n  border-right: none;\n  border-top: none;\n}\n.yh-border-box-1 .common-corner-4 {\n  right: var(--offset);\n  bottom: var(--offset);\n  border-left: none;\n  border-top: none;\n}\n.yh-border-box-1 .border-box-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      createInjector,
      undefined,
      undefined
    );

  function borderBox1 (Vue) {
    Vue.component(__vue_component__$2.name, __vue_component__$2);
  }

  //
  //
  //
  //
  //
  //
  //
  var script$1 = {
    name: 'YhTitleHeader1',
    props: {
      title: String
    },

    data() {
      return {
        ref: 'title-header-1'
      };
    }

  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { ref: _vm.ref, staticClass: "yh-title-header-1" },
      [
        _c("span", { staticClass: "title-line" }),
        _vm._v(" "),
        _c("span", { staticClass: "title-text" }, [_vm._v(_vm._s(_vm.title))]),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-be2cf73e_0", { source: ".yh-title-header-1 {\n  height: 32px;\n  text-align: left;\n  vertical-align: baseline;\n}\n.yh-title-header-1 .title-line {\n  display: inline-block;\n  width: 4px;\n  height: 20px;\n  margin: 5px 0;\n  background-color: #48e8ff;\n}\n.yh-title-header-1 .title-text {\n  vertical-align: top;\n  margin-left: 7px;\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  line-height: 32px;\n  letter-spacing: 0px;\n  color: #ffffff;\n}\n", map: {"version":3,"sources":["main.vue","/Users/apple/Desktop/FE-Engineered/DataV/src/components/titleHeader1/src/main.vue"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,gBAAgB;EAChB,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,YAAY;EACZ,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;ACChB","file":"main.vue","sourcesContent":[".yh-title-header-1 {\n  height: 32px;\n  text-align: left;\n  vertical-align: baseline;\n}\n.yh-title-header-1 .title-line {\n  display: inline-block;\n  width: 4px;\n  height: 20px;\n  margin: 5px 0;\n  background-color: #48e8ff;\n}\n.yh-title-header-1 .title-text {\n  vertical-align: top;\n  margin-left: 7px;\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  line-height: 32px;\n  letter-spacing: 0px;\n  color: #ffffff;\n}\n","<template>\n  <div class=\"yh-title-header-1\" :ref=\"ref\"> \n    <span class=\"title-line\"></span>\n    <span class=\"title-text\">{{ title }}</span>\n    <slot></slot>\n  </div>\n</template>\n<script>\nexport default {\n  name: 'YhTitleHeader1',\n  props: {\n    title: String\n  },\n  data() {\n      return {\n          ref:'title-header-1'\n      }\n  },\n}\n</script>\n<style lang=\"less\" >\n.yh-title-header-1 {\n  height: 32px;\n  text-align: left;\n  vertical-align: baseline;\n  .title-line {\n    display: inline-block;\n    width: 4px;\n    height: 20px;\n    margin: 5px 0;\n    background-color: #48e8ff;\n  }\n  .title-text {\n    // font-family: SourceHanSansSC-Regular;\n    vertical-align: top;\n    margin-left: 7px;\n    font-size: 18px;\n    font-weight: normal;\n    font-stretch: normal;\n    line-height: 32px;\n    letter-spacing: 0px;\n    color: #ffffff;\n  }\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      createInjector,
      undefined,
      undefined
    );

  function titleHeader1 (Vue) {
    Vue.component(__vue_component__$1.name, __vue_component__$1);
  }

  //
  //
  //
  //
  //
  var script = {
    name: 'YhProgressBar1',
    props: {
      width: {
        type: Number,
        default: 390
      },
      height: {
        type: Number,
        default: 16
      },
      colorLeft: {
        type: String,
        default: '#2E8BFF'
      },
      colorRight: {
        type: String,
        default: '#2DE2D4'
      },
      leftRate: {
        type: Number,
        default: 0.55
      },
      rightRate: {
        type: Number,
        default: 0.45
      }
    },

    data() {
      return {
        ref: 'progress-bar-1',
        leftNow: 0,
        leftTarget: 0,
        rightNow: 0,
        rightTarget: 0,
        leftStep: 0,
        rightStep: 0,
        count: 50,
        timer: null,
        can: null,
        ctx: null
      };
    },

    watch: {
      leftRate() {
        this.cal();
      },

      rightRate() {
        this.cal();
      }

    },

    mounted() {
      this.cal();
    },

    methods: {
      cal() {
        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.leftTarget = this.leftRate * (this.width - this.height / 2) + this.height / 2;
        this.rightTarget = this.rightRate * (this.width - this.height / 2) + this.height / 2;
        this.leftStep = (this.leftTarget - this.leftNow) / 50;
        this.rightStep = (this.rightTarget - this.rightNow) / 50;
        this.can = this.$refs.progressbar1;

        if (this.can.getContext) {
          this.ctx = this.can.getContext('2d');
          this.count = 50;
          this.draw();
        }
      },

      draw() {
        this.ctx.clearRect(0, 0, this.can.width, this.can.height);
        this.ctx.beginPath();
        this.ctx.fillStyle = this.colorLeft;
        this.ctx.lineTo(0, 0);
        this.leftNow = this.leftNow + this.leftStep;
        this.ctx.lineTo(this.leftNow, 0);
        const lx = this.leftNow > this.height ? this.leftNow - this.height : 0;
        const ly = lx > 0 ? this.height : this.leftNow;
        this.ctx.lineTo(lx, ly);
        this.ctx.lineTo(0, ly);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.fillStyle = this.colorRight;
        this.ctx.lineTo(this.width, this.height);
        this.rightNow = this.rightNow + this.rightStep;
        this.ctx.lineTo(this.width - this.rightNow, this.height);
        const rx = this.rightNow > this.height ? this.rightNow - this.height : 0;
        const ry = lx > 0 ? this.height : this.rightNow;
        this.ctx.lineTo(this.width - rx, this.height - ry);
        this.ctx.lineTo(this.width, this.height - ry);
        this.ctx.closePath();
        this.ctx.fill();
        this.count--;

        if (this.count > 0) {
          this.timer = setTimeout(() => {
            window.requestAnimationFrame(this.draw);
          }, 40);
        }
      }

    }
  };

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { ref: _vm.ref, staticClass: "yh-progress-bar-1" }, [
      _c("canvas", {
        ref: "progressbar1",
        attrs: { width: _vm.width, height: _vm.height }
      })
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-c7121bba_0", { source: ".yh-progress-bar-1 {\n  color: #fff;\n}\n", map: {"version":3,"sources":["main.vue"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb","file":"main.vue","sourcesContent":[".yh-progress-bar-1 {\n  color: #fff;\n}\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  function progressBar1 (Vue) {
    Vue.component(__vue_component__.name, __vue_component__);
  }

  /**
   * IMPORT COMPONENTS
   */
  /**
   * USE COMPONENTS
   */

  function datav (Vue) {
    Vue.use(borderBox1);
    Vue.use(titleHeader1);
    Vue.use(progressBar1);
  }

  Vue__default['default'].use(datav);

})));
