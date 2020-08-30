System.register(["single-spa", "zone.js"], function(
  __WEBPACK_DYNAMIC_EXPORT__
) {
  var __WEBPACK_EXTERNAL_MODULE_single_spa__,
    __WEBPACK_EXTERNAL_MODULE_zone_js__;
  return {
    setters: [
      function(module) {
        __WEBPACK_EXTERNAL_MODULE_single_spa__ = module;
      },
      function(module) {
        __WEBPACK_EXTERNAL_MODULE_zone_js__ = module;
      }
    ],
    execute: function() {
      __WEBPACK_DYNAMIC_EXPORT__(
        /******/ (function(modules) {
          // webpackBootstrap
          /******/ // The module cache
          /******/ var installedModules = {}; // The require function
          /******/
          /******/ /******/ function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) {
              /******/ return installedModules[moduleId].exports;
              /******/
            } // Create a new module (and put it into the cache)
            /******/ /******/ var module = (installedModules[moduleId] = {
              /******/ i: moduleId,
              /******/ l: false,
              /******/ exports: {}
              /******/
            }); // Execute the module function
            /******/
            /******/ /******/ modules[moduleId].call(
              module.exports,
              module,
              module.exports,
              __webpack_require__
            ); // Flag the module as loaded
            /******/
            /******/ /******/ module.l = true; // Return the exports of the module
            /******/
            /******/ /******/ return module.exports;
            /******/
          } // expose the modules object (__webpack_modules__)
          /******/
          /******/
          /******/ /******/ __webpack_require__.m = modules; // expose the module cache
          /******/
          /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
          /******/
          /******/ /******/ __webpack_require__.d = function(
            exports,
            name,
            getter
          ) {
            /******/ if (!__webpack_require__.o(exports, name)) {
              /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
              });
              /******/
            }
            /******/
          }; // define __esModule on exports
          /******/
          /******/ /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
              });
              /******/
            }
            /******/ Object.defineProperty(exports, "__esModule", {
              value: true
            });
            /******/
          }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
          /******/
          /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
            value,
            mode
          ) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (
              mode & 4 &&
              typeof value === "object" &&
              value &&
              value.__esModule
            )
              return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, "default", {
              enumerable: true,
              value: value
            });
            /******/ if (mode & 2 && typeof value != "string")
              for (var key in value)
                __webpack_require__.d(
                  ns,
                  key,
                  function(key) {
                    return value[key];
                  }.bind(null, key)
                );
            /******/ return ns;
            /******/
          }; // getDefaultExport function for compatibility with non-harmony modules
          /******/
          /******/ /******/ __webpack_require__.n = function(module) {
            /******/ var getter =
              module && module.__esModule
                ? /******/ function getDefault() {
                    return module["default"];
                  }
                : /******/ function getModuleExports() {
                    return module;
                  };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
            /******/
          }; // Object.prototype.hasOwnProperty.call
          /******/
          /******/ /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          }; // __webpack_public_path__
          /******/
          /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
          /******/
          /******/
          /******/ /******/ return __webpack_require__(
            (__webpack_require__.s = "./src/root-config-dist.js")
          );
          /******/
        })(
          /************************************************************************/
          /******/ {
            /***/ "./src/root-config-dist.js":
              /*!*********************************!*\
  !*** ./src/root-config-dist.js ***!
  \*********************************/
              /*! exports provided: registerAllCoreApplications, registerCoreApplicationsExcept */
              /***/ function(module, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                  /*! zone.js */ "zone.js"
                );
                /* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                  zone_js__WEBPACK_IMPORTED_MODULE_0__
                );
                /* harmony import */ var _root_config_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                  /*! ./root-config-lib */ "./src/root-config-lib.js"
                );
                /* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                  /*! single-spa */ "single-spa"
                );
                /* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                  single_spa__WEBPACK_IMPORTED_MODULE_2__
                );
                /* harmony reexport (safe) */ __webpack_require__.d(
                  __webpack_exports__,
                  "registerAllCoreApplications",
                  function() {
                    return _root_config_lib__WEBPACK_IMPORTED_MODULE_1__[
                      "registerAllCoreApplications"
                    ];
                  }
                );

                /* harmony reexport (safe) */ __webpack_require__.d(
                  __webpack_exports__,
                  "registerCoreApplicationsExcept",
                  function() {
                    return _root_config_lib__WEBPACK_IMPORTED_MODULE_1__[
                      "registerCoreApplicationsExcept"
                    ];
                  }
                );

                // For angular

                // import "./styleguide.css";

                Object(
                  _root_config_lib__WEBPACK_IMPORTED_MODULE_1__[
                    "registerAllCoreApplications"
                  ]
                )();

                Object(single_spa__WEBPACK_IMPORTED_MODULE_2__["start"])();

                /***/
              },

            /***/ "./src/root-config-lib.js":
              /*!********************************!*\
  !*** ./src/root-config-lib.js ***!
  \********************************/
              /*! exports provided: registerAllCoreApplications, registerCoreApplicationsExcept */
              /***/ function(module, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                  __webpack_exports__,
                  "registerAllCoreApplications",
                  function() {
                    return registerAllCoreApplications;
                  }
                );
                /* harmony export (binding) */ __webpack_require__.d(
                  __webpack_exports__,
                  "registerCoreApplicationsExcept",
                  function() {
                    return registerCoreApplicationsExcept;
                  }
                );
                /* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                  /*! single-spa */ "single-spa"
                );
                /* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                  single_spa__WEBPACK_IMPORTED_MODULE_0__
                );

                const coreApplications = {
                  // "@dev-box/styleguide":location => !loginActive(location),
                  "@dev-box/login": loginActive,
                  "@dev-box/navbar": location => !loginActive(location)
                };

                function loginActive(location) {
                  return location.pathname.startsWith("/login");
                }

                function registerAllCoreApplications() {
                  Object.keys(coreApplications).forEach(coreAppName => {
                    Object(
                      single_spa__WEBPACK_IMPORTED_MODULE_0__[
                        "registerApplication"
                      ]
                    )(
                      coreAppName,
                      () => System.import(coreAppName),
                      coreApplications[coreAppName]
                    );
                  });
                }

                function registerCoreApplicationsExcept(names) {
                  if (
                    !Array.isArray(names) ||
                    names.some(name => typeof name !== "string")
                  ) {
                    throw Error(
                      `registerCoreApplicationsExcept must be called with an array of string application names`
                    );
                  }

                  const registeredApps = [];

                  Object.keys(coreApplications).forEach(appName => {
                    if (!names.includes(appName)) {
                      Object(
                        single_spa__WEBPACK_IMPORTED_MODULE_0__[
                          "registerApplication"
                        ]
                      )(
                        appName,
                        () => System.import(appName),
                        coreApplications[appName]
                      );
                      registeredApps.push(appName);
                    }
                  });

                  return registeredApps;
                }

                /***/
              },

            /***/ "single-spa":
              /*!*****************************!*\
  !*** external "single-spa" ***!
  \*****************************/
              /*! no static exports found */
              /***/ function(module, exports) {
                module.exports = __WEBPACK_EXTERNAL_MODULE_single_spa__;

                /***/
              },

            /***/ "zone.js":
              /*!**************************!*\
  !*** external "zone.js" ***!
  \**************************/
              /*! no static exports found */
              /***/ function(module, exports) {
                module.exports = __WEBPACK_EXTERNAL_MODULE_zone_js__;

                /***/
              }

            /******/
          }
        )
      );
    }
  };
});
//# sourceMappingURL=root-config.js.map
