(() => {
  "use strict";
  var __webpack_modules__ = ({
    "./src/index.js": (module, __webpack_exports__, __webpack_require__) => {
      // Define the module
      __webpack_require__.r(__webpack_exports__);
      var _dependency_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/dependency.js");
      _dependency_js__WEBPACK_IMPORTED_MODULE_0__.default();
    },
    "./src/dependency.js": (module, __webpack_exports__, __webpack_require__) => {
      // Define the module
      __webpack_require__.r(__webpack_exports__);
      __webpack_exports__.default = () => {
        console.log("Dependency loaded");
      };
    },
    "./src/index.css": (module, __webpack_exports__, __webpack_require__) => {
      // Define the module
      __webpack_require__.r(__webpack_exports__);
    }
  });

  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  (() => {
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();

  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  })();

  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    __webpack_require__.n = (module) => {
      var getter = module && module.__esModule ?
        () => module['default'] :
        () => module;
      __webpack_require__.d(getter, { a: getter });
      return getter;
    };
  })();

  (() => {
    __webpack_require__.e = (chunkId) => {
      return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
        __webpack_require__.f[key](chunkId, promises);
        return promises;
      }, []));
    };
  })();

  (() => {
    __webpack_require__.u = (chunkId) => {
      return "" + chunkId + ".js";
    };
  })();

  (() => {
    __webpack_require__.p = "";
  })();

  var installedChunks = {
    "runtime": 0
  };

  var deferred = [];

  function webpackJsonpCallback(parentChunkLoadingFunction, data) {
    var [chunkIds, moreModules, runtime] = data;
    var moduleId, chunkId, i = 0;

    if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
      for (moduleId in moreModules) {
        if (__webpack_require__.o(moreModules, moduleId)) {
          __webpack_modules__[moduleId] = moreModules[moduleId];
        }
      }
      if (runtime) var result = runtime(__webpack_require__);
    }

    if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);

    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
        installedChunks[chunkId][0]();
      }
      installedChunks[chunkId] = 0;
    }

    while (deferred.length) {
      deferred.shift()();
    }

    return result;
  }

  var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
  chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
  chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

  __webpack_require__.O = (result, chunkIds, fn, priority) => {
    if (chunkIds) {
      priority = priority || 0;
      for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
      deferred[i] = [chunkIds, fn, priority];
      return;
    }

    var notFulfilled = Infinity;
    for (var i = 0; i < deferred.length; i++) {
      var [chunkIds, fn, priority] = deferred[i];
      var fulfilled = true;
      for (var j = 0; j < chunkIds.length; j++) {
        if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
          chunkIds.splice(j--, 1);
        } else {
          fulfilled = false;
          if (priority < notFulfilled) notFulfilled = priority;
        }
      }
      if (fulfilled) {
        deferred.splice(i--, 1)
        var r = fn();
        if (r !== undefined) result = r;
      }
    }

    return result;
  };

  __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);

  __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/index.js")));
  var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/index.css")));
  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);

})();
