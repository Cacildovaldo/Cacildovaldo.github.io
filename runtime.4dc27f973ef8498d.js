(() => {
  "use strict";

  var modules = {};
  var moduleCache = {};

  function require(moduleId) {
    var cachedModule = moduleCache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = moduleCache[moduleId] = {
      id: moduleId,
      loaded: false,
      exports: {}
    };

    modules[moduleId].call(module.exports, module, module.exports, require);

    module.loaded = true;
    return module.exports;
  }

  require.m = modules;
  require.amdO = {};

  var deferred = [];
  require.O = (result, chunkIds, fn, priority) => {
    if (!chunkIds) {
      var highestPriority = 1 / 0;
      for (var i = 0; i < deferred.length; i++) {
        var [chunkIds, fn, priority] = deferred[i];
        var allLoaded = true;
        for (var j = 0; j < chunkIds.length; j++) {
          if ((priority & 1) === 0 || highestPriority >= priority) {
            if (Object.keys(require.O).every((key) => require.O[key](chunkIds[j]))) {
              chunkIds.splice(j--, 1);
            } else {
              allLoaded = false;
              if (priority < highestPriority) {
                highestPriority = priority;
              }
            }
          }
        }
        if (allLoaded) {
          deferred.splice(i--, 1);
          var result = fn();
          if (result !== undefined) result = result;
        }
      }
      return result;
    }
    priority = priority || 0;
    for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) {
      deferred[i] = deferred[i - 1];
    }
    deferred[i] = [chunkIds, fn, priority];
  };

  require.n = (module) => {
    var getter = module && module.__esModule ? () => module.default : () => module;
    require.d(getter, { a: getter });
    return getter;
  };

  require.t = (value, mode) => {
    if (mode & 1) value = this(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
        var ns = Object.create(null);
    require.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if (mode & 2 && typeof value != 'string')
      for (var key in value)
        require.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    return ns;
  };

  require.d = (exports, definition) => {
    for (var key in definition) {
      if (require.o(definition, key) && !require.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };

  require.f = {};
  require.e = (chunkId) => {
    return Promise.all(Object.keys(require.f).reduce((promises, key) => {
      require.f[key](chunkId, promises);
      return promises;
    }, []));
  };

  require.u = (chunkId) => {
    return "" + chunkId + ".js";
  };

  require.miniCssF = (chunkId) => {
    return "" + chunkId + ".css";
  };

  require.g = (function () {
    if (typeof globalThis === 'object') return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if (typeof window === 'object') return window;
    }
  })();

  require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

  require.r = (exports) => {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  require.nmd = (module) => {
    module.paths = [];
    if (!module.children) module.children = [];
    return module;
  };

  require.p = "";

  var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackChunk"] = (typeof self !== 'undefined' ? self : this)["webpackChunk"] || [];
  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  jsonpArray.push = webpackJsonpCallback;
  jsonpArray = jsonpArray.slice();
  for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
  var parentJsonpFunction = oldJsonpFunction;

  function webpackJsonpCallback(data) {
    var [chunkIds, moreModules, runtime, executeModules] = data;
    var moduleId, chunkId, i = 0, resolves = [];
    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if (require.o(installedChunks, chunkId) && installedChunks[chunkId]) {
        resolves.push(installedChunks[chunkId][0]);
      }
      installedChunks[chunkId] = 0;
    }
    for (moduleId in moreModules) {
      if (require.o(moreModules, moduleId)) {
        require.m[moduleId] = moreModules[moduleId];
      }
    }
    if (runtime) var result = runtime(require);
    if (parentJsonpFunction) parentJsonpFunction(data);

    while (resolves.length) {
      resolves.shift()();
    }

    if (executeModules) deferred.push.apply(deferred, executeModules);

    return result;
  }

  var installedChunks = {
    "main": 0
  };

  require.O(undefined, ["styles"], () => (require("./src/index.js")));
  var __webpack_exports__ = require.O(undefined, ["styles"], () => (require("./src/styles.css")));
  __webpack_exports__ = require.O(__webpack_exports__);
})();

