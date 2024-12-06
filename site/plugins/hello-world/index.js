(function() {
  "use strict";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    {
      options._scopeId = "data-v-" + scopeId;
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main = {
    props: {
      message: String
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-field", _vm._b({}, "k-field", _vm.$attrs, false), [_c("div", { staticClass: "hello-world" }, [_vm._v(" " + _vm._s(_vm.message) + " ")])]);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    "e17ea971"
  );
  __component__.options.__file = "/Users/mawi/Dev/kirby-starter-test/site/plugins/hello-world/src/components/HelloWorld.vue";
  const HelloWorldField = __component__.exports;
  panel.plugin("mattzes/hello-world", {
    fields: {
      hello: HelloWorldField
    }
  });
})();
