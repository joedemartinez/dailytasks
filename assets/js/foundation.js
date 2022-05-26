// (function webpackUniversalModuleDefinition(root, factory) {
// 	if(typeof exports === 'object' && typeof module === 'object')
// 		module.exports = factory(require("jquery"));
// 	else if(typeof define === 'function' && define.amd)
// 		define(["jquery"], factory);
// 	else {
// 		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
// 		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
// 	}
// })(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
// return /******/ (function(modules) { // webpackBootstrap
// /******/ 	// The module cache
// /******/ 	var installedModules = {};
// /******/
// /******/ 	// The require function
// /******/ 	function __webpack_require__(moduleId) {
// /******/
// /******/ 		// Check if module is in cache
// /******/ 		if(installedModules[moduleId]) {
// /******/ 			return installedModules[moduleId].exports;
// /******/ 		}
// /******/ 		// Create a new module (and put it into the cache)
// /******/ 		var module = installedModules[moduleId] = {
// /******/ 			i: moduleId,
// /******/ 			l: false,
// /******/ 			exports: {}
// /******/ 		};
// /******/
// /******/ 		// Execute the module function
// /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
// /******/
// /******/ 		// Flag the module as loaded
// /******/ 		module.l = true;
// /******/
// /******/ 		// Return the exports of the module
// /******/ 		return module.exports;
// /******/ 	}
// /******/
// /******/
// /******/ 	// expose the modules object (__webpack_modules__)
// /******/ 	__webpack_require__.m = modules;
// /******/
// /******/ 	// expose the module cache
// /******/ 	__webpack_require__.c = installedModules;
// /******/
// /******/ 	// define getter function for harmony exports
// /******/ 	__webpack_require__.d = function(exports, name, getter) {
// /******/ 		if(!__webpack_require__.o(exports, name)) {
// /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
// /******/ 		}
// /******/ 	};
// /******/
// /******/ 	// define __esModule on exports
// /******/ 	__webpack_require__.r = function(exports) {
// /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
// /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
// /******/ 		}
// /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
// /******/ 	};
// /******/
// /******/ 	// create a fake namespace object
// /******/ 	// mode & 1: value is a module id, require it
// /******/ 	// mode & 2: merge all properties of value into the ns
// /******/ 	// mode & 4: return value when already ns object
// /******/ 	// mode & 8|1: behave like require
// /******/ 	__webpack_require__.t = function(value, mode) {
// /******/ 		if(mode & 1) value = __webpack_require__(value);
// /******/ 		if(mode & 8) return value;
// /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
// /******/ 		var ns = Object.create(null);
// /******/ 		__webpack_require__.r(ns);
// /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
// /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
// /******/ 		return ns;
// /******/ 	};
// /******/
// /******/ 	// getDefaultExport function for compatibility with non-harmony modules
// /******/ 	__webpack_require__.n = function(module) {
// /******/ 		var getter = module && module.__esModule ?
// /******/ 			function getDefault() { return module['default']; } :
// /******/ 			function getModuleExports() { return module; };
// /******/ 		__webpack_require__.d(getter, 'a', getter);
// /******/ 		return getter;
// /******/ 	};
// /******/
// /******/ 	// Object.prototype.hasOwnProperty.call
// /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
// /******/
// /******/ 	// __webpack_public_path__
// /******/ 	__webpack_require__.p = "";
// /******/
// /******/
// /******/ 	// Load entry module and return exports
// /******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../../../private/tmp/foundation-6.5.1.complete/js/vendor/foundation.js");
// /******/ })
// /************************************************************************/
// /******/ ({

// /***/ "../../../../../../../../../../private/tmp/foundation-6.5.1.complete/js/vendor/foundation.js":
// /*!**********************************************************************!*\
//   !*** /private/tmp/foundation-6.5.1.complete/js/vendor/foundation.js ***!
//   \**********************************************************************/
// /*! no exports provided */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/foundation.core */ \"./js/foundation.core.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_abide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/foundation.abide */ \"./js/foundation.abide.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/foundation.accordion */ \"./js/foundation.accordion.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/foundation.accordionMenu */ \"./js/foundation.accordionMenu.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/foundation.drilldown */ \"./js/foundation.drilldown.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/foundation.dropdown */ \"./js/foundation.dropdown.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/foundation.dropdownMenu */ \"./js/foundation.dropdownMenu.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/foundation.equalizer */ \"./js/foundation.equalizer.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/foundation.interchange */ \"./js/foundation.interchange.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/foundation.magellan */ \"./js/foundation.magellan.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/foundation.offcanvas */ \"./js/foundation.offcanvas.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_orbit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/foundation.orbit */ \"./js/foundation.orbit.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/foundation.responsiveMenu */ \"./js/foundation.responsiveMenu.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./js/foundation.responsiveToggle */ \"./js/foundation.responsiveToggle.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./js/foundation.reveal */ \"./js/foundation.reveal.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./js/foundation.slider */ \"./js/foundation.slider.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./js/foundation.sticky */ \"./js/foundation.sticky.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./js/foundation.tabs */ \"./js/foundation.tabs.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./js/foundation.toggler */ \"./js/foundation.toggler.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./js/foundation.tooltip */ \"./js/foundation.tooltip.js\");\n/* harmony import */ var _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./js/foundation.responsiveAccordionTabs */ \"./js/foundation.responsiveAccordionTabs.js\");\n\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].MediaQuery = _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"];\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, _Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"]);\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_abide__WEBPACK_IMPORTED_MODULE_4__[\"Abide\"], 'Abide');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"], 'Accordion');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__[\"AccordionMenu\"], 'AccordionMenu');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_7__[\"Drilldown\"], 'Drilldown');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"Dropdown\"], 'Dropdown');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_9__[\"DropdownMenu\"], 'DropdownMenu');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_10__[\"Equalizer\"], 'Equalizer');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_11__[\"Interchange\"], 'Interchange');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_12__[\"Magellan\"], 'Magellan');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_13__[\"OffCanvas\"], 'OffCanvas');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_orbit__WEBPACK_IMPORTED_MODULE_14__[\"Orbit\"], 'Orbit');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_15__[\"ResponsiveMenu\"], 'ResponsiveMenu');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_16__[\"ResponsiveToggle\"], 'ResponsiveToggle');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_17__[\"Reveal\"], 'Reveal');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_slider__WEBPACK_IMPORTED_MODULE_18__[\"Slider\"], 'Slider');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_19__[\"Sticky\"], 'Sticky');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_20__[\"Tabs\"], 'Tabs');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__[\"Toggler\"], 'Toggler');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_tooltip__WEBPACK_IMPORTED_MODULE_22__[\"Tooltip\"], 'Tooltip');\n\n_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(_Users_ncoden_Documents_Documents_Projects_Programmation_Web_2016_Foundation_foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_23__[\"ResponsiveAccordionTabs\"], 'ResponsiveAccordionTabs');\n\n//# sourceURL=webpack:////private/tmp/foundation-6.5.1.complete/js/vendor/foundation.js?");

// /***/ }),

// /***/ "./js/foundation.abide.js":
// /*!********************************!*\
//   !*** ./js/foundation.abide.js ***!
//   \********************************/
// /*! exports provided: Abide */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Abide\", function() { return Abide; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n/**\n * Abide module.\n * @module foundation.abide\n */\n\nvar Abide =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Abide, _Plugin);\n\n  function Abide() {\n    _classCallCheck(this, Abide);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Abide).apply(this, arguments));\n  }\n\n  _createClass(Abide, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Abide.\n     * @class\n     * @name Abide\n     * @fires Abide#init\n     * @param {Object} element - jQuery object to add the trigger to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element) {\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);\n      this.className = 'Abide'; // ie9 back compat\n\n      this._init();\n    }\n    /**\n     * Initializes the Abide plugin and calls functions to get Abide functioning on load.\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var _this2 = this;\n\n      this.$inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.merge( // Consider as input to validate:\n      this.$element.find('input').not('[type=submit]'), // * all input fields expect submit\n      this.$element.find('textarea, select') // * all textareas and select fields\n      );\n      var $globalErrors = this.$element.find('[data-abide-error]'); // Add a11y attributes to all fields\n\n      if (this.options.a11yAttributes) {\n        this.$inputs.each(function (i, input) {\n          return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));\n        });\n        $globalErrors.each(function (i, error) {\n          return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));\n        });\n      }\n\n      this._events();\n    }\n    /**\n     * Initializes events for Abide.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this3 = this;\n\n      this.$element.off('.abide').on('reset.zf.abide', function () {\n        _this3.resetForm();\n      }).on('submit.zf.abide', function () {\n        return _this3.validateForm();\n      });\n\n      if (this.options.validateOn === 'fieldChange') {\n        this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {\n          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));\n        });\n      }\n\n      if (this.options.liveValidate) {\n        this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {\n          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));\n        });\n      }\n\n      if (this.options.validateOnBlur) {\n        this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {\n          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));\n        });\n      }\n    }\n    /**\n     * Calls necessary functions to update Abide upon DOM change\n     * @private\n     */\n\n  }, {\n    key: \"_reflow\",\n    value: function _reflow() {\n      this._init();\n    }\n    /**\n     * Checks whether or not a form element has the required attribute and if it's checked or not\n     * @param {Object} element - jQuery object to check for required attribute\n     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty\n     */\n\n  }, {\n    key: \"requiredCheck\",\n    value: function requiredCheck($el) {\n      if (!$el.attr('required')) return true;\n      var isGood = true;\n\n      switch ($el[0].type) {\n        case 'checkbox':\n          isGood = $el[0].checked;\n          break;\n\n        case 'select':\n        case 'select-one':\n        case 'select-multiple':\n          var opt = $el.find('option:selected');\n          if (!opt.length || !opt.val()) isGood = false;\n          break;\n\n        default:\n          if (!$el.val() || !$el.val().length) isGood = false;\n      }\n\n      return isGood;\n    }\n    /**\n     * Get:\n     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:\n     *   1. The element's direct sibling('s).\n     *   2. The element's parent's children.\n     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.\n     *\n     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.\n     *\n     * @param {Object} $el - jQuery object to use as reference to find the form error selector.\n     * @returns {Object} jQuery object with the selector.\n     */\n\n  }, {\n    key: \"findFormError\",\n    value: function findFormError($el) {\n      var id = $el[0].id;\n      var $error = $el.siblings(this.options.formErrorSelector);\n\n      if (!$error.length) {\n        $error = $el.parent().find(this.options.formErrorSelector);\n      }\n\n      if (id) {\n        $error = $error.add(this.$element.find(\"[data-form-error-for=\\\"\".concat(id, \"\\\"]\")));\n      }\n\n      return $error;\n    }\n    /**\n     * Get the first element in this order:\n     * 2. The <label> with the attribute `[for=\"someInputId\"]`\n     * 3. The `.closest()` <label>\n     *\n     * @param {Object} $el - jQuery object to check for required attribute\n     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty\n     */\n\n  }, {\n    key: \"findLabel\",\n    value: function findLabel($el) {\n      var id = $el[0].id;\n      var $label = this.$element.find(\"label[for=\\\"\".concat(id, \"\\\"]\"));\n\n      if (!$label.length) {\n        return $el.closest('label');\n      }\n\n      return $label;\n    }\n    /**\n     * Get the set of labels associated with a set of radio els in this order\n     * 2. The <label> with the attribute `[for=\"someInputId\"]`\n     * 3. The `.closest()` <label>\n     *\n     * @param {Object} $el - jQuery object to check for required attribute\n     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty\n     */\n\n  }, {\n    key: \"findRadioLabels\",\n    value: function findRadioLabels($els) {\n      var _this4 = this;\n\n      var labels = $els.map(function (i, el) {\n        var id = el.id;\n\n        var $label = _this4.$element.find(\"label[for=\\\"\".concat(id, \"\\\"]\"));\n\n        if (!$label.length) {\n          $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');\n        }\n\n        return $label[0];\n      });\n      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);\n    }\n    /**\n     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form\n     * @param {Object} $el - jQuery object to add the class to\n     */\n\n  }, {\n    key: \"addErrorClasses\",\n    value: function addErrorClasses($el) {\n      var $label = this.findLabel($el);\n      var $formError = this.findFormError($el);\n\n      if ($label.length) {\n        $label.addClass(this.options.labelErrorClass);\n      }\n\n      if ($formError.length) {\n        $formError.addClass(this.options.formErrorClass);\n      }\n\n      $el.addClass(this.options.inputErrorClass).attr({\n        'data-invalid': '',\n        'aria-invalid': true\n      });\n    }\n    /**\n     * Adds [for] and [role=alert] attributes to all form error targetting $el,\n     * and [aria-describedby] attribute to $el toward the first form error.\n     * @param {Object} $el - jQuery object\n     */\n\n  }, {\n    key: \"addA11yAttributes\",\n    value: function addA11yAttributes($el) {\n      var $errors = this.findFormError($el);\n      var $labels = $errors.filter('label');\n      var $error = $errors.first();\n      if (!$errors.length) return; // Set [aria-describedby] on the input toward the first form error if it is not set\n\n      if (typeof $el.attr('aria-describedby') === 'undefined') {\n        // Get the first error ID or create one\n        var errorId = $error.attr('id');\n\n        if (typeof errorId === 'undefined') {\n          errorId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'abide-error');\n          $error.attr('id', errorId);\n        }\n\n        ;\n        $el.attr('aria-describedby', errorId);\n      }\n\n      if ($labels.filter('[for]').length < $labels.length) {\n        // Get the input ID or create one\n        var elemId = $el.attr('id');\n\n        if (typeof elemId === 'undefined') {\n          elemId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'abide-input');\n          $el.attr('id', elemId);\n        }\n\n        ; // For each label targeting $el, set [for] if it is not set.\n\n        $labels.each(function (i, label) {\n          var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);\n          if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);\n        });\n      } // For each error targeting $el, set [role=alert] if it is not set.\n\n\n      $errors.each(function (i, label) {\n        var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);\n        if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');\n      }).end();\n    }\n    /**\n     * Adds [aria-live] attribute to the given global form error $el.\n     * @param {Object} $el - jQuery object to add the attribute to\n     */\n\n  }, {\n    key: \"addGlobalErrorA11yAttributes\",\n    value: function addGlobalErrorA11yAttributes($el) {\n      if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);\n    }\n    /**\n     * Remove CSS error classes etc from an entire radio button group\n     * @param {String} groupName - A string that specifies the name of a radio button group\n     *\n     */\n\n  }, {\n    key: \"removeRadioErrorClasses\",\n    value: function removeRadioErrorClasses(groupName) {\n      var $els = this.$element.find(\":radio[name=\\\"\".concat(groupName, \"\\\"]\"));\n      var $labels = this.findRadioLabels($els);\n      var $formErrors = this.findFormError($els);\n\n      if ($labels.length) {\n        $labels.removeClass(this.options.labelErrorClass);\n      }\n\n      if ($formErrors.length) {\n        $formErrors.removeClass(this.options.formErrorClass);\n      }\n\n      $els.removeClass(this.options.inputErrorClass).attr({\n        'data-invalid': null,\n        'aria-invalid': null\n      });\n    }\n    /**\n     * Removes CSS error class as specified by the Abide settings from the label, input, and the form\n     * @param {Object} $el - jQuery object to remove the class from\n     */\n\n  }, {\n    key: \"removeErrorClasses\",\n    value: function removeErrorClasses($el) {\n      // radios need to clear all of the els\n      if ($el[0].type == 'radio') {\n        return this.removeRadioErrorClasses($el.attr('name'));\n      }\n\n      var $label = this.findLabel($el);\n      var $formError = this.findFormError($el);\n\n      if ($label.length) {\n        $label.removeClass(this.options.labelErrorClass);\n      }\n\n      if ($formError.length) {\n        $formError.removeClass(this.options.formErrorClass);\n      }\n\n      $el.removeClass(this.options.inputErrorClass).attr({\n        'data-invalid': null,\n        'aria-invalid': null\n      });\n    }\n    /**\n     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.\n     * Ignores inputs with data-abide-ignore, type=\"hidden\" or disabled attributes set\n     * @fires Abide#invalid\n     * @fires Abide#valid\n     * @param {Object} element - jQuery object to validate, should be an HTML input\n     * @returns {Boolean} goodToGo - If the input is valid or not.\n     */\n\n  }, {\n    key: \"validateInput\",\n    value: function validateInput($el) {\n      var clearRequire = this.requiredCheck($el),\n          validated = false,\n          customValidator = true,\n          validator = $el.attr('data-validator'),\n          equalTo = true; // don't validate ignored inputs or hidden inputs or disabled inputs\n\n      if ($el.is('[data-abide-ignore]') || $el.is('[type=\"hidden\"]') || $el.is('[disabled]')) {\n        return true;\n      }\n\n      switch ($el[0].type) {\n        case 'radio':\n          validated = this.validateRadio($el.attr('name'));\n          break;\n\n        case 'checkbox':\n          validated = clearRequire;\n          break;\n\n        case 'select':\n        case 'select-one':\n        case 'select-multiple':\n          validated = clearRequire;\n          break;\n\n        default:\n          validated = this.validateText($el);\n      }\n\n      if (validator) {\n        customValidator = this.matchValidation($el, validator, $el.attr('required'));\n      }\n\n      if ($el.attr('data-equalto')) {\n        equalTo = this.options.validators.equalTo($el);\n      }\n\n      var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;\n      var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';\n\n      if (goodToGo) {\n        // Re-validate inputs that depend on this one with equalto\n        var dependentElements = this.$element.find(\"[data-equalto=\\\"\".concat($el.attr('id'), \"\\\"]\"));\n\n        if (dependentElements.length) {\n          var _this = this;\n\n          dependentElements.each(function () {\n            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {\n              _this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));\n            }\n          });\n        }\n      }\n\n      this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);\n      /**\n       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`\n       * Trigger includes the DOM element of the input.\n       * @event Abide#valid\n       * @event Abide#invalid\n       */\n\n      $el.trigger(message, [$el]);\n      return goodToGo;\n    }\n    /**\n     * Goes through a form and if there are any invalid inputs, it will display the form error element\n     * @returns {Boolean} noError - true if no errors were detected...\n     * @fires Abide#formvalid\n     * @fires Abide#forminvalid\n     */\n\n  }, {\n    key: \"validateForm\",\n    value: function validateForm() {\n      var _this5 = this;\n\n      var acc = [];\n\n      var _this = this;\n\n      this.$inputs.each(function () {\n        acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));\n      });\n      var noError = acc.indexOf(false) === -1;\n      this.$element.find('[data-abide-error]').each(function (i, elem) {\n        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem); // Ensure a11y attributes are set\n\n        if (_this5.options.a11yAttributes) _this5.addGlobalErrorA11yAttributes($elem); // Show or hide the error\n\n        $elem.css('display', noError ? 'none' : 'block');\n      });\n      /**\n       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.\n       * Trigger includes the element of the form.\n       * @event Abide#formvalid\n       * @event Abide#forminvalid\n       */\n\n      this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);\n      return noError;\n    }\n    /**\n     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.\n     * @param {Object} $el - jQuery object to validate, should be a text input HTML element\n     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns\n     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified\n     */\n\n  }, {\n    key: \"validateText\",\n    value: function validateText($el, pattern) {\n      // A pattern can be passed to this function, or it will be infered from the input's \"pattern\" attribute, or it's \"type\" attribute\n      pattern = pattern || $el.attr('pattern') || $el.attr('type');\n      var inputText = $el.val();\n      var valid = false;\n\n      if (inputText.length) {\n        // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp\n        if (this.options.patterns.hasOwnProperty(pattern)) {\n          valid = this.options.patterns[pattern].test(inputText);\n        } // If the pattern name isn't also the type attribute of the field, then test it as a regexp\n        else if (pattern !== $el.attr('type')) {\n            valid = new RegExp(pattern).test(inputText);\n          } else {\n            valid = true;\n          }\n      } // An empty field is valid if it's not required\n      else if (!$el.prop('required')) {\n          valid = true;\n        }\n\n      return valid;\n    }\n    /**\n     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.\n     * @param {String} groupName - A string that specifies the name of a radio button group\n     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)\n     */\n\n  }, {\n    key: \"validateRadio\",\n    value: function validateRadio(groupName) {\n      // If at least one radio in the group has the `required` attribute, the group is considered required\n      // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice\n      var $group = this.$element.find(\":radio[name=\\\"\".concat(groupName, \"\\\"]\"));\n      var valid = false,\n          required = false; // For the group to be required, at least one radio needs to be required\n\n      $group.each(function (i, e) {\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {\n          required = true;\n        }\n      });\n      if (!required) valid = true;\n\n      if (!valid) {\n        // For the group to be valid, at least one radio needs to be checked\n        $group.each(function (i, e) {\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {\n            valid = true;\n          }\n        });\n      }\n\n      ;\n      return valid;\n    }\n    /**\n     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator=\"foo bar baz\"` in a space separated listed.\n     * @param {Object} $el - jQuery input element.\n     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.\n     * @param {Boolean} required - self explanatory?\n     * @returns {Boolean} - true if validations passed.\n     */\n\n  }, {\n    key: \"matchValidation\",\n    value: function matchValidation($el, validators, required) {\n      var _this6 = this;\n\n      required = required ? true : false;\n      var clear = validators.split(' ').map(function (v) {\n        return _this6.options.validators[v]($el, required, $el.parent());\n      });\n      return clear.indexOf(false) === -1;\n    }\n    /**\n     * Resets form inputs and styles\n     * @fires Abide#formreset\n     */\n\n  }, {\n    key: \"resetForm\",\n    value: function resetForm() {\n      var $form = this.$element,\n          opts = this.options;\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".\".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".\".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(opts.formErrorSelector, \".\").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);\n      $form.find('[data-abide-error]').css('display', 'none');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({\n        'data-invalid': null,\n        'aria-invalid': null\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({\n        'data-invalid': null,\n        'aria-invalid': null\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({\n        'data-invalid': null,\n        'aria-invalid': null\n      });\n      /**\n       * Fires when the form has been reset.\n       * @event Abide#formreset\n       */\n\n      $form.trigger('formreset.zf.abide', [$form]);\n    }\n    /**\n     * Destroys an instance of Abide.\n     * Removes error styles and classes from elements, without resetting their values.\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      var _this = this;\n\n      this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');\n      this.$inputs.off('.abide').each(function () {\n        _this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));\n      });\n    }\n  }]);\n\n  return Abide;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n/**\n * Default settings for plugin\n */\n\n\nAbide.defaults = {\n  /**\n   * The default event to validate inputs. Checkboxes and radios validate immediately.\n   * Remove or change this value for manual validation.\n   * @option\n   * @type {?string}\n   * @default 'fieldChange'\n   */\n  validateOn: 'fieldChange',\n\n  /**\n   * Class to be applied to input labels on failed validation.\n   * @option\n   * @type {string}\n   * @default 'is-invalid-label'\n   */\n  labelErrorClass: 'is-invalid-label',\n\n  /**\n   * Class to be applied to inputs on failed validation.\n   * @option\n   * @type {string}\n   * @default 'is-invalid-input'\n   */\n  inputErrorClass: 'is-invalid-input',\n\n  /**\n   * Class selector to use to target Form Errors for show/hide.\n   * @option\n   * @type {string}\n   * @default '.form-error'\n   */\n  formErrorSelector: '.form-error',\n\n  /**\n   * Class added to Form Errors on failed validation.\n   * @option\n   * @type {string}\n   * @default 'is-visible'\n   */\n  formErrorClass: 'is-visible',\n\n  /**\n   * If true, automatically insert when possible:\n   * - `[aria-describedby]` on fields\n   * - `[role=alert]` on form errors and `[for]` on form error labels\n   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  a11yAttributes: true,\n\n  /**\n   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.\n   * Options are: 'assertive', 'polite' and 'off'/null\n   * @option\n   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions\n   * @type {string}\n   * @default 'assertive'\n   */\n  a11yErrorLevel: 'assertive',\n\n  /**\n   * Set to true to validate text inputs on any value change.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  liveValidate: false,\n\n  /**\n   * Set to true to validate inputs on blur.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  validateOnBlur: false,\n  patterns: {\n    alpha: /^[a-zA-Z]+$/,\n    alpha_numeric: /^[a-zA-Z0-9]+$/,\n    integer: /^[-+]?\\d+$/,\n    number: /^[-+]?\\d*(?:[\\.\\,]\\d+)?$/,\n    // amex, visa, diners\n    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$/,\n    cvv: /^([0-9]){3,4}$/,\n    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address\n    email: /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,\n    // From CommonRegexJS (@talyssonoc)\n    // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76\n    // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.\n    url: /^((?:(https?|ftps?|file|ssh|sftp):\\/\\/|www\\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}\\/)(?:[^\\s()<>]+|\\((?:[^\\s()<>]+|(?:\\([^\\s()<>]+\\)))*\\))+(?:\\((?:[^\\s()<>]+|(?:\\([^\\s()<>]+\\)))*\\)|[^\\s`!()\\[\\]{};:\\'\".,<>?\\xab\\xbb\\u201c\\u201d\\u2018\\u2019]))$/,\n    // abc.de\n    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,8}$/,\n    datetime: /^([0-2][0-9]{3})\\-([0-1][0-9])\\-([0-3][0-9])T([0-5][0-9])\\:([0-5][0-9])\\:([0-5][0-9])(Z|([\\-\\+]([0-1][0-9])\\:00))$/,\n    // YYYY-MM-DD\n    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,\n    // HH:MM:SS\n    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,\n    dateISO: /^\\d{4}[\\/\\-]\\d{1,2}[\\/\\-]\\d{1,2}$/,\n    // MM/DD/YYYY\n    month_day_year: /^(0[1-9]|1[012])[- \\/.](0[1-9]|[12][0-9]|3[01])[- \\/.]\\d{4}$/,\n    // DD/MM/YYYY\n    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \\/.](0[1-9]|1[012])[- \\/.]\\d{4}$/,\n    // #FFF or #FFFFFF\n    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,\n    // Domain || URL\n    website: {\n      test: function test(text) {\n        return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);\n      }\n    }\n  },\n\n  /**\n   * Optional validation functions to be used. `equalTo` being the only default included function.\n   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:\n   * el : The jQuery element to validate.\n   * required : Boolean value of the required attribute be present or not.\n   * parent : The direct parent of the input.\n   * @option\n   */\n  validators: {\n    equalTo: function equalTo(el, required, parent) {\n      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(el.attr('data-equalto'))).val() === el.val();\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./js/foundation.abide.js?");

// /***/ }),

// /***/ "./js/foundation.accordion.js":
// /*!************************************!*\
//   !*** ./js/foundation.accordion.js ***!
//   \************************************/
// /*! exports provided: Accordion */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Accordion\", function() { return Accordion; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n/**\n * Accordion module.\n * @module foundation.accordion\n * @requires foundation.util.keyboard\n */\n\nvar Accordion =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Accordion, _Plugin);\n\n  function Accordion() {\n    _classCallCheck(this, Accordion);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));\n  }\n\n  _createClass(Accordion, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of an accordion.\n     * @class\n     * @name Accordion\n     * @fires Accordion#init\n     * @param {jQuery} element - jQuery object to make into an accordion.\n     * @param {Object} options - a plain object with settings to override the default options.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Accordion.defaults, this.$element.data(), options);\n      this.className = 'Accordion'; // ie9 back compat\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].register('Accordion', {\n        'ENTER': 'toggle',\n        'SPACE': 'toggle',\n        'ARROW_DOWN': 'next',\n        'ARROW_UP': 'previous'\n      });\n    }\n    /**\n     * Initializes the accordion by animating the preset active pane(s).\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var _this2 = this;\n\n      this._isInitializing = true;\n      this.$element.attr('role', 'tablist');\n      this.$tabs = this.$element.children('[data-accordion-item]');\n      this.$tabs.each(function (idx, el) {\n        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),\n            $content = $el.children('[data-tab-content]'),\n            id = $content[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, 'accordion'),\n            linkId = el.id ? \"\".concat(el.id, \"-label\") : \"\".concat(id, \"-label\");\n        $el.find('a:first').attr({\n          'aria-controls': id,\n          'role': 'tab',\n          'id': linkId,\n          'aria-expanded': false,\n          'aria-selected': false\n        });\n        $content.attr({\n          'role': 'tabpanel',\n          'aria-labelledby': linkId,\n          'aria-hidden': true,\n          'id': id\n        });\n      });\n      var $initActive = this.$element.find('.is-active').children('[data-tab-content]');\n\n      if ($initActive.length) {\n        // Save up the initial hash to return to it later when going back in history\n        this._initialAnchor = $initActive.prev('a').attr('href');\n\n        this._openSingleTab($initActive);\n      }\n\n      this._checkDeepLink = function () {\n        var anchor = window.location.hash;\n\n        if (!anchor.length) {\n          // If we are still initializing and there is no anchor, then there is nothing to do\n          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor\n\n          if (_this2._initialAnchor) anchor = _this2._initialAnchor;\n        }\n\n        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);\n\n        var $link = anchor && _this2.$element.find(\"[href$=\\\"\".concat(anchor, \"\\\"]\")); // Whether the anchor element that has been found is part of this element\n\n\n        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, open it (if not already active)\n\n        if ($anchor && $link && $link.length) {\n          if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {\n            _this2._openSingleTab($anchor);\n          }\n\n          ;\n        } // Otherwise, close everything\n        else {\n            _this2._closeAllTabs();\n          }\n\n        if (isOwnAnchor) {\n          // Roll up a little to show the titles\n          if (_this2.options.deepLinkSmudge) {\n            Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n              var offset = _this2.$element.offset();\n\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({\n                scrollTop: offset.top\n              }, _this2.options.deepLinkSmudgeDelay);\n            });\n          }\n          /**\n           * Fires when the plugin has deeplinked at pageload\n           * @event Accordion#deeplink\n           */\n\n\n          _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);\n        }\n      }; //use browser to open a tab, if it exists in this tabset\n\n\n      if (this.options.deepLink) {\n        this._checkDeepLink();\n      }\n\n      this._events();\n\n      this._isInitializing = false;\n    }\n    /**\n     * Adds event handlers for items within the accordion.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      this.$tabs.each(function () {\n        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n        var $tabContent = $elem.children('[data-tab-content]');\n\n        if ($tabContent.length) {\n          $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {\n            e.preventDefault();\n\n            _this.toggle($tabContent);\n          }).on('keydown.zf.accordion', function (e) {\n            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].handleKey(e, 'Accordion', {\n              toggle: function toggle() {\n                _this.toggle($tabContent);\n              },\n              next: function next() {\n                var $a = $elem.next().find('a').focus();\n\n                if (!_this.options.multiExpand) {\n                  $a.trigger('click.zf.accordion');\n                }\n              },\n              previous: function previous() {\n                var $a = $elem.prev().find('a').focus();\n\n                if (!_this.options.multiExpand) {\n                  $a.trigger('click.zf.accordion');\n                }\n              },\n              handled: function handled() {\n                e.preventDefault();\n                e.stopPropagation();\n              }\n            });\n          });\n        }\n      });\n\n      if (this.options.deepLink) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);\n      }\n    }\n    /**\n     * Toggles the selected content pane's open/close state.\n     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).\n     * @function\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle($target) {\n      if ($target.closest('[data-accordion]').is('[disabled]')) {\n        console.info('Cannot toggle an accordion that is disabled.');\n        return;\n      }\n\n      if ($target.parent().hasClass('is-active')) {\n        this.up($target);\n      } else {\n        this.down($target);\n      } //either replace or update browser history\n\n\n      if (this.options.deepLink) {\n        var anchor = $target.prev('a').attr('href');\n\n        if (this.options.updateHistory) {\n          history.pushState({}, '', anchor);\n        } else {\n          history.replaceState({}, '', anchor);\n        }\n      }\n    }\n    /**\n     * Opens the accordion tab defined by `$target`.\n     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).\n     * @fires Accordion#down\n     * @function\n     */\n\n  }, {\n    key: \"down\",\n    value: function down($target) {\n      if ($target.closest('[data-accordion]').is('[disabled]')) {\n        console.info('Cannot call down on an accordion that is disabled.');\n        return;\n      }\n\n      if (this.options.multiExpand) this._openTab($target);else this._openSingleTab($target);\n    }\n    /**\n     * Closes the tab defined by `$target`.\n     * It may be ignored if the Accordion options don't allow it.\n     *\n     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).\n     * @fires Accordion#up\n     * @function\n     */\n\n  }, {\n    key: \"up\",\n    value: function up($target) {\n      if (this.$element.is('[disabled]')) {\n        console.info('Cannot call up on an accordion that is disabled.');\n        return;\n      } // Don't close the item if it is already closed\n\n\n      var $targetItem = $target.parent();\n      if (!$targetItem.hasClass('is-active')) return; // Don't close the item if there is no other active item (unless with `allowAllClosed`)\n\n      var $othersItems = $targetItem.siblings();\n      if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;\n\n      this._closeTab($target);\n    }\n    /**\n     * Make the tab defined by `$target` the only opened tab, closing all others tabs.\n     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_openSingleTab\",\n    value: function _openSingleTab($target) {\n      // Close all the others active tabs.\n      var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');\n\n      if ($activeContents.length) {\n        this._closeTab($activeContents.not($target));\n      } // Then open the target.\n\n\n      this._openTab($target);\n    }\n    /**\n     * Opens the tab defined by `$target`.\n     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).\n     * @fires Accordion#down\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_openTab\",\n    value: function _openTab($target) {\n      var _this3 = this;\n\n      var $targetItem = $target.parent();\n      var targetContentId = $target.attr('aria-labelledby');\n      $target.attr('aria-hidden', false);\n      $targetItem.addClass('is-active');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(targetContentId)).attr({\n        'aria-expanded': true,\n        'aria-selected': true\n      });\n      $target.slideDown(this.options.slideSpeed, function () {\n        /**\n         * Fires when the tab is done opening.\n         * @event Accordion#down\n         */\n        _this3.$element.trigger('down.zf.accordion', [$target]);\n      });\n    }\n    /**\n     * Closes the tab defined by `$target`.\n     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).\n     * @fires Accordion#up\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_closeTab\",\n    value: function _closeTab($target) {\n      var _this4 = this;\n\n      var $targetItem = $target.parent();\n      var targetContentId = $target.attr('aria-labelledby');\n      $target.attr('aria-hidden', true);\n      $targetItem.removeClass('is-active');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(targetContentId)).attr({\n        'aria-expanded': false,\n        'aria-selected': false\n      });\n      $target.slideUp(this.options.slideSpeed, function () {\n        /**\n         * Fires when the tab is done collapsing up.\n         * @event Accordion#up\n         */\n        _this4.$element.trigger('up.zf.accordion', [$target]);\n      });\n    }\n    /**\n     * Closes all active tabs\n     * @fires Accordion#up\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_closeAllTabs\",\n    value: function _closeAllTabs() {\n      var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');\n\n      if ($activeTabs.length) {\n        this._closeTab($activeTabs);\n      }\n    }\n    /**\n     * Destroys an instance of an accordion.\n     * @fires Accordion#destroyed\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');\n      this.$element.find('a').off('.zf.accordion');\n\n      if (this.options.deepLink) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);\n      }\n    }\n  }]);\n\n  return Accordion;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__[\"Plugin\"]);\n\nAccordion.defaults = {\n  /**\n   * Amount of time to animate the opening of an accordion pane.\n   * @option\n   * @type {number}\n   * @default 250\n   */\n  slideSpeed: 250,\n\n  /**\n   * Allow the accordion to have multiple open panes.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  multiExpand: false,\n\n  /**\n   * Allow the accordion to close all panes.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  allowAllClosed: false,\n\n  /**\n   * Link the location hash to the open pane.\n   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLink: false,\n\n  /**\n   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLinkSmudge: false,\n\n  /**\n   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment\n   * @option\n   * @type {number}\n   * @default 300\n   */\n  deepLinkSmudgeDelay: 300,\n\n  /**\n   * If `deepLink` is enabled, update the browser history with the open accordion\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  updateHistory: false\n};\n\n\n//# sourceURL=webpack:///./js/foundation.accordion.js?");

// /***/ }),

// /***/ "./js/foundation.accordionMenu.js":
// /*!****************************************!*\
//   !*** ./js/foundation.accordionMenu.js ***!
//   \****************************************/
// /*! exports provided: AccordionMenu */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AccordionMenu\", function() { return AccordionMenu; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ \"./js/foundation.util.nest.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * AccordionMenu module.\n * @module foundation.accordionMenu\n * @requires foundation.util.keyboard\n * @requires foundation.util.nest\n */\n\nvar AccordionMenu =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(AccordionMenu, _Plugin);\n\n  function AccordionMenu() {\n    _classCallCheck(this, AccordionMenu);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionMenu).apply(this, arguments));\n  }\n\n  _createClass(AccordionMenu, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of an accordion menu.\n     * @class\n     * @name AccordionMenu\n     * @fires AccordionMenu#init\n     * @param {jQuery} element - jQuery object to make into an accordion menu.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, AccordionMenu.defaults, this.$element.data(), options);\n      this.className = 'AccordionMenu'; // ie9 back compat\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('AccordionMenu', {\n        'ENTER': 'toggle',\n        'SPACE': 'toggle',\n        'ARROW_RIGHT': 'open',\n        'ARROW_UP': 'up',\n        'ARROW_DOWN': 'down',\n        'ARROW_LEFT': 'close',\n        'ESCAPE': 'closeAll'\n      });\n    }\n    /**\n     * Initializes the accordion menu by hiding all nested menus.\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__[\"Nest\"].Feather(this.$element, 'accordion');\n\n      var _this = this;\n\n      this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');\n\n      this.$element.attr({\n        'role': 'tree',\n        'aria-multiselectable': this.options.multiOpen\n      });\n      this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');\n      this.$menuLinks.each(function () {\n        var linkId = this.id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'acc-menu-link'),\n            $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            $sub = $elem.children('[data-submenu]'),\n            subId = $sub[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'acc-menu'),\n            isActive = $sub.hasClass('is-active');\n\n        if (_this.options.parentLink) {\n          var $anchor = $elem.children('a');\n          $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class=\"is-submenu-parent-item is-submenu-item is-accordion-submenu-item\"></li>');\n        }\n\n        if (_this.options.submenuToggle) {\n          $elem.addClass('has-submenu-toggle');\n          $elem.children('a').after('<button id=\"' + linkId + '\" class=\"submenu-toggle\" aria-controls=\"' + subId + '\" aria-expanded=\"' + isActive + '\" title=\"' + _this.options.submenuToggleText + '\"><span class=\"submenu-toggle-text\">' + _this.options.submenuToggleText + '</span></button>');\n        } else {\n          $elem.attr({\n            'aria-controls': subId,\n            'aria-expanded': isActive,\n            'id': linkId\n          });\n        }\n\n        $sub.attr({\n          'aria-labelledby': linkId,\n          'aria-hidden': !isActive,\n          'role': 'group',\n          'id': subId\n        });\n      });\n      this.$element.find('li').attr({\n        'role': 'treeitem'\n      });\n      var initPanes = this.$element.find('.is-active');\n\n      if (initPanes.length) {\n        var _this = this;\n\n        initPanes.each(function () {\n          _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));\n        });\n      }\n\n      this._events();\n    }\n    /**\n     * Adds event handlers for items within the menu.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      this.$element.find('li').each(function () {\n        var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');\n\n        if ($submenu.length) {\n          if (_this.options.submenuToggle) {\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {\n              _this.toggle($submenu);\n            });\n          } else {\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {\n              e.preventDefault();\n\n              _this.toggle($submenu);\n            });\n          }\n        }\n      }).on('keydown.zf.accordionmenu', function (e) {\n        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            $elements = $element.parent('ul').children('li'),\n            $prevElement,\n            $nextElement,\n            $target = $element.children('[data-submenu]');\n        $elements.each(function (i) {\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {\n            $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();\n            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();\n\n            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {\n              // has open sub menu\n              $nextElement = $element.find('li:first-child').find('a').first();\n            }\n\n            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {\n              // is first element of sub menu\n              $prevElement = $element.parents('li').first().find('a').first();\n            } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {\n              // if previous element has open sub menu\n              $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();\n            }\n\n            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {\n              // is last element of sub menu\n              $nextElement = $element.parents('li').first().next('li').find('a').first();\n            }\n\n            return;\n          }\n        });\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'AccordionMenu', {\n          open: function open() {\n            if ($target.is(':hidden')) {\n              _this.down($target);\n\n              $target.find('li').first().find('a').first().focus();\n            }\n          },\n          close: function close() {\n            if ($target.length && !$target.is(':hidden')) {\n              // close active sub of this item\n              _this.up($target);\n            } else if ($element.parent('[data-submenu]').length) {\n              // close currently open sub\n              _this.up($element.parent('[data-submenu]'));\n\n              $element.parents('li').first().find('a').first().focus();\n            }\n          },\n          up: function up() {\n            $prevElement.focus();\n            return true;\n          },\n          down: function down() {\n            $nextElement.focus();\n            return true;\n          },\n          toggle: function toggle() {\n            if (_this.options.submenuToggle) {\n              return false;\n            }\n\n            if ($element.children('[data-submenu]').length) {\n              _this.toggle($element.children('[data-submenu]'));\n\n              return true;\n            }\n          },\n          closeAll: function closeAll() {\n            _this.hideAll();\n          },\n          handled: function handled(preventDefault) {\n            if (preventDefault) {\n              e.preventDefault();\n            }\n\n            e.stopImmediatePropagation();\n          }\n        });\n      }); //.attr('tabindex', 0);\n    }\n    /**\n     * Closes all panes of the menu.\n     * @function\n     */\n\n  }, {\n    key: \"hideAll\",\n    value: function hideAll() {\n      this.up(this.$element.find('[data-submenu]'));\n    }\n    /**\n     * Opens all panes of the menu.\n     * @function\n     */\n\n  }, {\n    key: \"showAll\",\n    value: function showAll() {\n      this.down(this.$element.find('[data-submenu]'));\n    }\n    /**\n     * Toggles the open/close state of a submenu.\n     * @function\n     * @param {jQuery} $target - the submenu to toggle\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle($target) {\n      if (!$target.is(':animated')) {\n        if (!$target.is(':hidden')) {\n          this.up($target);\n        } else {\n          this.down($target);\n        }\n      }\n    }\n    /**\n     * Opens the sub-menu defined by `$target`.\n     * @param {jQuery} $target - Sub-menu to open.\n     * @fires AccordionMenu#down\n     */\n\n  }, {\n    key: \"down\",\n    value: function down($target) {\n      var _this2 = this;\n\n      if (!this.options.multiOpen) {\n        this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));\n      }\n\n      $target.addClass('is-active').attr({\n        'aria-hidden': false\n      });\n\n      if (this.options.submenuToggle) {\n        $target.prev('.submenu-toggle').attr({\n          'aria-expanded': true\n        });\n      } else {\n        $target.parent('.is-accordion-submenu-parent').attr({\n          'aria-expanded': true\n        });\n      }\n\n      $target.slideDown(this.options.slideSpeed, function () {\n        /**\n         * Fires when the menu is done opening.\n         * @event AccordionMenu#down\n         */\n        _this2.$element.trigger('down.zf.accordionMenu', [$target]);\n      });\n    }\n    /**\n     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.\n     * @param {jQuery} $target - Sub-menu to close.\n     * @fires AccordionMenu#up\n     */\n\n  }, {\n    key: \"up\",\n    value: function up($target) {\n      var _this3 = this;\n\n      var $submenus = $target.find('[data-submenu]');\n      var $allmenus = $target.add($submenus);\n      $submenus.slideUp(0);\n      $allmenus.removeClass('is-active').attr('aria-hidden', true);\n\n      if (this.options.submenuToggle) {\n        $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);\n      } else {\n        $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);\n      }\n\n      $target.slideUp(this.options.slideSpeed, function () {\n        /**\n         * Fires when the menu is done collapsing up.\n         * @event AccordionMenu#up\n         */\n        _this3.$element.trigger('up.zf.accordionMenu', [$target]);\n      });\n    }\n    /**\n     * Destroys an instance of accordion menu.\n     * @fires AccordionMenu#destroyed\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.find('[data-submenu]').slideDown(0).css('display', '');\n      this.$element.find('a').off('click.zf.accordionMenu');\n      this.$element.find('[data-is-parent-link]').detach();\n\n      if (this.options.submenuToggle) {\n        this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');\n        this.$element.find('.submenu-toggle').remove();\n      }\n\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__[\"Nest\"].Burn(this.$element, 'accordion');\n    }\n  }]);\n\n  return AccordionMenu;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__[\"Plugin\"]);\n\nAccordionMenu.defaults = {\n  /**\n   * Adds the parent link to the submenu.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  parentLink: false,\n\n  /**\n   * Amount of time to animate the opening of a submenu in ms.\n   * @option\n   * @type {number}\n   * @default 250\n   */\n  slideSpeed: 250,\n\n  /**\n   * Adds a separate submenu toggle button. This allows the parent item to have a link.\n   * @option\n   * @example true\n   */\n  submenuToggle: false,\n\n  /**\n   * The text used for the submenu toggle if enabled. This is used for screen readers only.\n   * @option\n   * @example true\n   */\n  submenuToggleText: 'Toggle menu',\n\n  /**\n   * Allow the menu to have multiple open panes.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  multiOpen: true\n};\n\n\n//# sourceURL=webpack:///./js/foundation.accordionMenu.js?");

// /***/ }),

// /***/ "./js/foundation.core.js":
// /*!*******************************!*\
//   !*** ./js/foundation.core.js ***!
//   \*******************************/
// /*! exports provided: Foundation */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Foundation\", function() { return Foundation; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\nvar FOUNDATION_VERSION = '6.5.1'; // Global Foundation object\n// This is attached to the window, or used as a module for AMD/Browserify\n\nvar Foundation = {\n  version: FOUNDATION_VERSION,\n\n  /**\n   * Stores initialized plugins.\n   */\n  _plugins: {},\n\n  /**\n   * Stores generated unique ids for plugin instances\n   */\n  _uuids: [],\n\n  /**\n   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.\n   * @param {Object} plugin - The constructor of the plugin.\n   */\n  plugin: function plugin(_plugin, name) {\n    // Object key to use when adding to global Foundation object\n    // Examples: Foundation.Reveal, Foundation.OffCanvas\n    var className = name || functionName(_plugin); // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin\n    // Examples: data-reveal, data-off-canvas\n\n    var attrName = hyphenate(className); // Add to the Foundation object and the plugins list (for reflowing)\n\n    this._plugins[attrName] = this[className] = _plugin;\n  },\n\n  /**\n   * @function\n   * Populates the _uuids array with pointers to each individual plugin instance.\n   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.\n   * Also fires the initialization event for each plugin, consolidating repetitive code.\n   * @param {Object} plugin - an instance of a plugin, usually `this` in context.\n   * @param {String} name - the name of the plugin, passed as a camelCased string.\n   * @fires Plugin#init\n   */\n  registerPlugin: function registerPlugin(plugin, name) {\n    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();\n    plugin.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, pluginName);\n\n    if (!plugin.$element.attr(\"data-\".concat(pluginName))) {\n      plugin.$element.attr(\"data-\".concat(pluginName), plugin.uuid);\n    }\n\n    if (!plugin.$element.data('zfPlugin')) {\n      plugin.$element.data('zfPlugin', plugin);\n    }\n    /**\n     * Fires when the plugin has initialized.\n     * @event Plugin#init\n     */\n\n\n    plugin.$element.trigger(\"init.zf.\".concat(pluginName));\n\n    this._uuids.push(plugin.uuid);\n\n    return;\n  },\n\n  /**\n   * @function\n   * Removes the plugins uuid from the _uuids array.\n   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.\n   * Also fires the destroyed event for the plugin, consolidating repetitive code.\n   * @param {Object} plugin - an instance of a plugin, usually `this` in context.\n   * @fires Plugin#destroyed\n   */\n  unregisterPlugin: function unregisterPlugin(plugin) {\n    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));\n\n    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);\n\n    plugin.$element.removeAttr(\"data-\".concat(pluginName)).removeData('zfPlugin')\n    /**\n     * Fires when the plugin has been destroyed.\n     * @event Plugin#destroyed\n     */\n    .trigger(\"destroyed.zf.\".concat(pluginName));\n\n    for (var prop in plugin) {\n      plugin[prop] = null; //clean up script to prep for garbage collection.\n    }\n\n    return;\n  },\n\n  /**\n   * @function\n   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.\n   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`\n   * @default If no argument is passed, reflow all currently active plugins.\n   */\n  reInit: function reInit(plugins) {\n    var isJQ = plugins instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n    try {\n      if (isJQ) {\n        plugins.each(function () {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();\n        });\n      } else {\n        var type = _typeof(plugins),\n            _this = this,\n            fns = {\n          'object': function object(plgs) {\n            plgs.forEach(function (p) {\n              p = hyphenate(p);\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').foundation('_init');\n            });\n          },\n          'string': function string() {\n            plugins = hyphenate(plugins);\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').foundation('_init');\n          },\n          'undefined': function undefined() {\n            this['object'](Object.keys(_this._plugins));\n          }\n        };\n\n        fns[type](plugins);\n      }\n    } catch (err) {\n      console.error(err);\n    } finally {\n      return plugins;\n    }\n  },\n\n  /**\n   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.\n   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.\n   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.\n   */\n  reflow: function reflow(elem, plugins) {\n    // If plugins is undefined, just grab everything\n    if (typeof plugins === 'undefined') {\n      plugins = Object.keys(this._plugins);\n    } // If plugins is a string, convert it to an array with one item\n    else if (typeof plugins === 'string') {\n        plugins = [plugins];\n      }\n\n    var _this = this; // Iterate through each plugin\n\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(plugins, function (i, name) {\n      // Get the current plugin\n      var plugin = _this._plugins[name]; // Localize the search to all elements inside elem, as well as elem itself, unless elem === document\n\n      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']'); // For each plugin found, initialize it\n\n      $elem.each(function () {\n        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            opts = {}; // Don't double-dip on plugins\n\n        if ($el.data('zfPlugin')) {\n          console.warn(\"Tried to initialize \" + name + \" on an element that already has a Foundation plugin.\");\n          return;\n        }\n\n        if ($el.attr('data-options')) {\n          var thing = $el.attr('data-options').split(';').forEach(function (e, i) {\n            var opt = e.split(':').map(function (el) {\n              return el.trim();\n            });\n            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);\n          });\n        }\n\n        try {\n          $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));\n        } catch (er) {\n          console.error(er);\n        } finally {\n          return;\n        }\n      });\n    });\n  },\n  getFnName: functionName,\n  addToJquery: function addToJquery($) {\n    // TODO: consider not making this a jQuery function\n    // TODO: need way to reflow vs. re-initialize\n\n    /**\n     * The Foundation jQuery method.\n     * @param {String|Array} method - An action to perform on the current jQuery object.\n     */\n    var foundation = function foundation(method) {\n      var type = _typeof(method),\n          $noJS = $('.no-js');\n\n      if ($noJS.length) {\n        $noJS.removeClass('no-js');\n      }\n\n      if (type === 'undefined') {\n        //needs to initialize the Foundation object, or an individual plugin.\n        _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"]._init();\n\n        Foundation.reflow(this);\n      } else if (type === 'string') {\n        //an individual method to invoke on a plugin or group of plugins\n        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary\n\n        var plugClass = this.data('zfPlugin'); //determine the class of plugin\n\n        if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {\n          //make sure both the class and method exist\n          if (this.length === 1) {\n            //if there's only one, call it directly.\n            plugClass[method].apply(plugClass, args);\n          } else {\n            this.each(function (i, el) {\n              //otherwise loop through the jQuery collection and invoke the method on each\n              plugClass[method].apply($(el).data('zfPlugin'), args);\n            });\n          }\n        } else {\n          //error for no class or no method\n          throw new ReferenceError(\"We're sorry, '\" + method + \"' is not an available method for \" + (plugClass ? functionName(plugClass) : 'this element') + '.');\n        }\n      } else {\n        //error for invalid argument type\n        throw new TypeError(\"We're sorry, \".concat(type, \" is not a valid parameter. You must use a string representing the method you wish to invoke.\"));\n      }\n\n      return this;\n    };\n\n    $.fn.foundation = foundation;\n    return $;\n  }\n};\nFoundation.util = {\n  /**\n   * Function for applying a debounce effect to a function call.\n   * @function\n   * @param {Function} func - Function to be called at end of timeout.\n   * @param {Number} delay - Time in ms to delay the call of `func`.\n   * @returns function\n   */\n  throttle: function throttle(func, delay) {\n    var timer = null;\n    return function () {\n      var context = this,\n          args = arguments;\n\n      if (timer === null) {\n        timer = setTimeout(function () {\n          func.apply(context, args);\n          timer = null;\n        }, delay);\n      }\n    };\n  }\n};\nwindow.Foundation = Foundation; // Polyfill for requestAnimationFrame\n\n(function () {\n  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {\n    return new Date().getTime();\n  };\n  var vendors = ['webkit', 'moz'];\n\n  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {\n    var vp = vendors[i];\n    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];\n    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];\n  }\n\n  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {\n    var lastTime = 0;\n\n    window.requestAnimationFrame = function (callback) {\n      var now = Date.now();\n      var nextTime = Math.max(lastTime + 16, now);\n      return setTimeout(function () {\n        callback(lastTime = nextTime);\n      }, nextTime - now);\n    };\n\n    window.cancelAnimationFrame = clearTimeout;\n  }\n  /**\n   * Polyfill for performance.now, required by rAF\n   */\n\n\n  if (!window.performance || !window.performance.now) {\n    window.performance = {\n      start: Date.now(),\n      now: function now() {\n        return Date.now() - this.start;\n      }\n    };\n  }\n})();\n\nif (!Function.prototype.bind) {\n  Function.prototype.bind = function (oThis) {\n    if (typeof this !== 'function') {\n      // closest thing possible to the ECMAScript 5\n      // internal IsCallable function\n      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');\n    }\n\n    var aArgs = Array.prototype.slice.call(arguments, 1),\n        fToBind = this,\n        fNOP = function fNOP() {},\n        fBound = function fBound() {\n      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));\n    };\n\n    if (this.prototype) {\n      // native functions don't have a prototype\n      fNOP.prototype = this.prototype;\n    }\n\n    fBound.prototype = new fNOP();\n    return fBound;\n  };\n} // Polyfill to get the name of a function in IE9\n\n\nfunction functionName(fn) {\n  if (typeof Function.prototype.name === 'undefined') {\n    var funcNameRegex = /function\\s([^(]{1,})\\(/;\n    var results = funcNameRegex.exec(fn.toString());\n    return results && results.length > 1 ? results[1].trim() : \"\";\n  } else if (typeof fn.prototype === 'undefined') {\n    return fn.constructor.name;\n  } else {\n    return fn.prototype.constructor.name;\n  }\n}\n\nfunction parseValue(str) {\n  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);\n  return str;\n} // Convert PascalCase to kebab-case\n// Thank you: http://stackoverflow.com/a/8955580\n\n\nfunction hyphenate(str) {\n  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.core.js?");

// /***/ }),

// /***/ "./js/foundation.core.plugin.js":
// /*!**************************************!*\
//   !*** ./js/foundation.core.plugin.js ***!
//   \**************************************/
// /*! exports provided: Plugin */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Plugin\", function() { return Plugin; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST\n// {function} _setup (replaces previous constructor),\n// {function} _destroy (replaces previous destroy)\n\nvar Plugin =\n/*#__PURE__*/\nfunction () {\n  function Plugin(element, options) {\n    _classCallCheck(this, Plugin);\n\n    this._setup(element, options);\n\n    var pluginName = getPluginName(this);\n    this.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, pluginName);\n\n    if (!this.$element.attr(\"data-\".concat(pluginName))) {\n      this.$element.attr(\"data-\".concat(pluginName), this.uuid);\n    }\n\n    if (!this.$element.data('zfPlugin')) {\n      this.$element.data('zfPlugin', this);\n    }\n    /**\n     * Fires when the plugin has initialized.\n     * @event Plugin#init\n     */\n\n\n    this.$element.trigger(\"init.zf.\".concat(pluginName));\n  }\n\n  _createClass(Plugin, [{\n    key: \"destroy\",\n    value: function destroy() {\n      this._destroy();\n\n      var pluginName = getPluginName(this);\n      this.$element.removeAttr(\"data-\".concat(pluginName)).removeData('zfPlugin')\n      /**\n       * Fires when the plugin has been destroyed.\n       * @event Plugin#destroyed\n       */\n      .trigger(\"destroyed.zf.\".concat(pluginName));\n\n      for (var prop in this) {\n        this[prop] = null; //clean up script to prep for garbage collection.\n      }\n    }\n  }]);\n\n  return Plugin;\n}(); // Convert PascalCase to kebab-case\n// Thank you: http://stackoverflow.com/a/8955580\n\n\nfunction hyphenate(str) {\n  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();\n}\n\nfunction getPluginName(obj) {\n  if (typeof obj.constructor.name !== 'undefined') {\n    return hyphenate(obj.constructor.name);\n  } else {\n    return hyphenate(obj.className);\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.core.plugin.js?");

// /***/ }),

// /***/ "./js/foundation.core.utils.js":
// /*!*************************************!*\
//   !*** ./js/foundation.core.utils.js ***!
//   \*************************************/
// /*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rtl\", function() { return rtl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetYoDigits\", function() { return GetYoDigits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegExpEscape\", function() { return RegExpEscape; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transitionend\", function() { return transitionend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoad\", function() { return onLoad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ignoreMousedisappear\", function() { return ignoreMousedisappear; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n // Core Foundation Utilities, utilized in a number of places.\n\n/**\n * Returns a boolean for RTL support\n */\n\nfunction rtl() {\n  return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl';\n}\n/**\n * returns a random base-36 uid with namespacing\n * @function\n * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.\n * @param {String} namespace - name of plugin to be incorporated in uid, optional.\n * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.\n * @returns {String} - unique id\n */\n\n\nfunction GetYoDigits(length, namespace) {\n  length = length || 6;\n  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? \"-\".concat(namespace) : '');\n}\n/**\n * Escape a string so it can be used as a regexp pattern\n * @function\n * @see https://stackoverflow.com/a/9310752/4317384\n *\n * @param {String} str - string to escape.\n * @returns {String} - escaped string\n */\n\n\nfunction RegExpEscape(str) {\n  return str.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&');\n}\n\nfunction transitionend($elem) {\n  var transitions = {\n    'transition': 'transitionend',\n    'WebkitTransition': 'webkitTransitionEnd',\n    'MozTransition': 'transitionend',\n    'OTransition': 'otransitionend'\n  };\n  var elem = document.createElement('div'),\n      end;\n\n  for (var t in transitions) {\n    if (typeof elem.style[t] !== 'undefined') {\n      end = transitions[t];\n    }\n  }\n\n  if (end) {\n    return end;\n  } else {\n    end = setTimeout(function () {\n      $elem.triggerHandler('transitionend', [$elem]);\n    }, 1);\n    return 'transitionend';\n  }\n}\n/**\n * Return an event type to listen for window load.\n *\n * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.\n * If `handler` is passed, attach it to the event on `$elem`.\n * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.\n * @function\n *\n * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.\n * @param {Function} [] handler - function to attach to the event.\n * @returns {String} - event type that should or will be triggered.\n */\n\n\nfunction onLoad($elem, handler) {\n  var didLoad = document.readyState === 'complete';\n  var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';\n\n  var cb = function cb() {\n    return $elem.triggerHandler(eventType);\n  };\n\n  if ($elem) {\n    if (handler) $elem.one(eventType, handler);\n    if (didLoad) setTimeout(cb);else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);\n  }\n\n  return eventType;\n}\n/**\n * Retuns an handler for the `mouseleave` that ignore disappeared mouses.\n *\n * If the mouse \"disappeared\" from the document (like when going on a browser UI element, See https://git.io/zf-11410),\n * the event is ignored.\n * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window\n *   (like by switching to an other window with [Alt]+[Tab]).\n * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document\n *   outside of the element it left.\n *\n * @function\n *\n * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.\n * @param {Object} [] options - object of options:\n * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.\n * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.\n * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.\n */\n\n\nfunction ignoreMousedisappear(handler) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,\n      ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,\n      _ref$ignoreReappear = _ref.ignoreReappear,\n      ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;\n\n  return function leaveEventHandler(eLeave) {\n    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      rest[_key - 1] = arguments[_key];\n    }\n\n    var callback = handler.bind.apply(handler, [this, eLeave].concat(rest)); // The mouse left: call the given callback if the mouse entered elsewhere\n\n    if (eLeave.relatedTarget !== null) {\n      return callback();\n    } // Otherwise, check if the mouse actually left the window.\n    // In firefox if the user switched between windows, the window sill have the focus by the time\n    // the event is triggered. We have to debounce the event to test this case.\n\n\n    setTimeout(function leaveEventDebouncer() {\n      if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {\n        return callback();\n      } // Otherwise, wait for the mouse to reeapear outside of the element,\n\n\n      if (!ignoreReappear) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterEventHandler(eReenter) {\n          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length) {\n            // Fill where the mouse finally entered.\n            eLeave.relatedTarget = eReenter.target;\n            callback();\n          }\n        });\n      }\n    }, 0);\n  };\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.core.utils.js?");

// /***/ }),

// /***/ "./js/foundation.drilldown.js":
// /*!************************************!*\
//   !*** ./js/foundation.drilldown.js ***!
//   \************************************/
// /*! exports provided: Drilldown */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Drilldown\", function() { return Drilldown; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ \"./js/foundation.util.nest.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.box */ \"./js/foundation.util.box.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n/**\n * Drilldown module.\n * @module foundation.drilldown\n * @requires foundation.util.keyboard\n * @requires foundation.util.nest\n * @requires foundation.util.box\n */\n\nvar Drilldown =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Drilldown, _Plugin);\n\n  function Drilldown() {\n    _classCallCheck(this, Drilldown);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Drilldown).apply(this, arguments));\n  }\n\n  _createClass(Drilldown, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a drilldown menu.\n     * @class\n     * @name Drilldown\n     * @param {jQuery} element - jQuery object to make into an accordion menu.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Drilldown.defaults, this.$element.data(), options);\n      this.className = 'Drilldown'; // ie9 back compat\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('Drilldown', {\n        'ENTER': 'open',\n        'SPACE': 'open',\n        'ARROW_RIGHT': 'next',\n        'ARROW_UP': 'up',\n        'ARROW_DOWN': 'down',\n        'ARROW_LEFT': 'previous',\n        'ESCAPE': 'close',\n        'TAB': 'down',\n        'SHIFT_TAB': 'up'\n      });\n    }\n    /**\n     * Initializes the drilldown by creating jQuery collections of elements\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__[\"Nest\"].Feather(this.$element, 'drilldown');\n\n      if (this.options.autoApplyClass) {\n        this.$element.addClass('drilldown');\n      }\n\n      this.$element.attr({\n        'role': 'tree',\n        'aria-multiselectable': false\n      });\n      this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');\n      this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');\n      this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'treeitem').find('a'); // Set the main menu as current by default (unless a submenu is selected)\n      // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu\n\n      this.$currentMenu = this.$element;\n      this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'drilldown'));\n\n      this._prepareMenu();\n\n      this._registerEvents();\n\n      this._keyboardEvents();\n    }\n    /**\n     * prepares drilldown menu by setting attributes to links and elements\n     * sets a min height to prevent content jumping\n     * wraps the element if not already wrapped\n     * @private\n     * @function\n     */\n\n  }, {\n    key: \"_prepareMenu\",\n    value: function _prepareMenu() {\n      var _this = this; // if(!this.options.holdOpen){\n      //   this._menuLinkEvents();\n      // }\n\n\n      this.$submenuAnchors.each(function () {\n        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n        var $sub = $link.parent();\n\n        if (_this.options.parentLink) {\n          $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class=\"is-submenu-parent-item is-submenu-item is-drilldown-submenu-item\" role=\"menuitem\"></li>');\n        }\n\n        $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);\n        $link.children('[data-submenu]').attr({\n          'aria-hidden': true,\n          'tabindex': 0,\n          'role': 'group'\n        });\n\n        _this._events($link);\n      });\n      this.$submenus.each(function () {\n        var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            $back = $menu.find('.js-drilldown-back');\n\n        if (!$back.length) {\n          switch (_this.options.backButtonPosition) {\n            case \"bottom\":\n              $menu.append(_this.options.backButton);\n              break;\n\n            case \"top\":\n              $menu.prepend(_this.options.backButton);\n              break;\n\n            default:\n              console.error(\"Unsupported backButtonPosition value '\" + _this.options.backButtonPosition + \"'\");\n          }\n        }\n\n        _this._back($menu);\n      });\n      this.$submenus.addClass('invisible');\n\n      if (!this.options.autoHeight) {\n        this.$submenus.addClass('drilldown-submenu-cover-previous');\n      } // create a wrapper on element if it doesn't exist.\n\n\n      if (!this.$element.parent().hasClass('is-drilldown')) {\n        this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');\n        if (this.options.animateHeight) this.$wrapper.addClass('animate-height');\n        this.$element.wrap(this.$wrapper);\n      } // set wrapper\n\n\n      this.$wrapper = this.$element.parent();\n      this.$wrapper.css(this._getMaxDims());\n    }\n  }, {\n    key: \"_resize\",\n    value: function _resize() {\n      this.$wrapper.css({\n        'max-width': 'none',\n        'min-height': 'none'\n      }); // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths\n\n      this.$wrapper.css(this._getMaxDims());\n    }\n    /**\n     * Adds event handlers to elements in the menu.\n     * @function\n     * @private\n     * @param {jQuery} $elem - the current menu item to add handlers to.\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events($elem) {\n      var _this = this;\n\n      $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {\n          e.stopImmediatePropagation();\n          e.preventDefault();\n        } // if(e.target !== e.currentTarget.firstElementChild){\n        //   return false;\n        // }\n\n\n        _this._show($elem.parent('li'));\n\n        if (_this.options.closeOnClick) {\n          var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');\n          $body.off('.zf.drilldown').on('click.zf.drilldown', function (e) {\n            if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target)) {\n              return;\n            }\n\n            e.preventDefault();\n\n            _this._hideAll();\n\n            $body.off('.zf.drilldown');\n          });\n        }\n      });\n    }\n    /**\n     * Adds event handlers to the menu element.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_registerEvents\",\n    value: function _registerEvents() {\n      if (this.options.scrollTop) {\n        this._bindHandler = this._scrollTop.bind(this);\n        this.$element.on('open.zf.drilldown hide.zf.drilldown closed.zf.drilldown', this._bindHandler);\n      }\n\n      this.$element.on('mutateme.zf.trigger', this._resize.bind(this));\n    }\n    /**\n     * Scroll to Top of Element or data-scroll-top-element\n     * @function\n     * @fires Drilldown#scrollme\n     */\n\n  }, {\n    key: \"_scrollTop\",\n    value: function _scrollTop() {\n      var _this = this;\n\n      var $scrollTopElement = _this.options.scrollTopElement != '' ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement) : _this.$element,\n          scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({\n        scrollTop: scrollPos\n      }, _this.options.animationDuration, _this.options.animationEasing, function () {\n        /**\n          * Fires after the menu has scrolled\n          * @event Drilldown#scrollme\n          */\n        if (this === jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');\n      });\n    }\n    /**\n     * Adds keydown event listener to `li`'s in the menu.\n     * @private\n     */\n\n  }, {\n    key: \"_keyboardEvents\",\n    value: function _keyboardEvents() {\n      var _this = this;\n\n      this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {\n        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            $elements = $element.parent('li').parent('ul').children('li').children('a'),\n            $prevElement,\n            $nextElement;\n        $elements.each(function (i) {\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {\n            $prevElement = $elements.eq(Math.max(0, i - 1));\n            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));\n            return;\n          }\n        });\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'Drilldown', {\n          next: function next() {\n            if ($element.is(_this.$submenuAnchors)) {\n              _this._show($element.parent('li'));\n\n              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($element), function () {\n                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();\n              });\n              return true;\n            }\n          },\n          previous: function previous() {\n            _this._hide($element.parent('li').parent('ul'));\n\n            $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($element), function () {\n              setTimeout(function () {\n                $element.parent('li').parent('ul').parent('li').children('a').first().focus();\n              }, 1);\n            });\n            return true;\n          },\n          up: function up() {\n            $prevElement.focus(); // Don't tap focus on first element in root ul\n\n            return !$element.is(_this.$element.find('> li:first-child > a'));\n          },\n          down: function down() {\n            $nextElement.focus(); // Don't tap focus on last element in root ul\n\n            return !$element.is(_this.$element.find('> li:last-child > a'));\n          },\n          close: function close() {\n            // Don't close on element in root ul\n            if (!$element.is(_this.$element.find('> li > a'))) {\n              _this._hide($element.parent().parent());\n\n              $element.parent().parent().siblings('a').focus();\n            }\n          },\n          open: function open() {\n            if (_this.options.parentLink && $element.attr('href')) {\n              // Link with href\n              return false;\n            } else if (!$element.is(_this.$menuItems)) {\n              // not menu item means back button\n              _this._hide($element.parent('li').parent('ul'));\n\n              $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($element), function () {\n                setTimeout(function () {\n                  $element.parent('li').parent('ul').parent('li').children('a').first().focus();\n                }, 1);\n              });\n              return true;\n            } else if ($element.is(_this.$submenuAnchors)) {\n              // Sub menu item\n              _this._show($element.parent('li'));\n\n              $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($element), function () {\n                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();\n              });\n              return true;\n            }\n          },\n          handled: function handled(preventDefault) {\n            if (preventDefault) {\n              e.preventDefault();\n            }\n\n            e.stopImmediatePropagation();\n          }\n        });\n      }); // end keyboardAccess\n    }\n    /**\n     * Closes all open elements, and returns to root menu.\n     * @function\n     * @fires Drilldown#closed\n     */\n\n  }, {\n    key: \"_hideAll\",\n    value: function _hideAll() {\n      var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');\n      if (this.options.autoHeight) this.$wrapper.css({\n        height: $elem.parent().closest('ul').data('calcHeight')\n      });\n      $elem.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($elem), function (e) {\n        $elem.removeClass('is-active is-closing');\n      });\n      /**\n       * Fires when the menu is fully closed.\n       * @event Drilldown#closed\n       */\n\n      this.$element.trigger('closed.zf.drilldown');\n    }\n    /**\n     * Adds event listener for each `back` button, and closes open menus.\n     * @function\n     * @fires Drilldown#back\n     * @param {jQuery} $elem - the current sub-menu to add `back` event.\n     */\n\n  }, {\n    key: \"_back\",\n    value: function _back($elem) {\n      var _this = this;\n\n      $elem.off('click.zf.drilldown');\n      $elem.children('.js-drilldown-back').on('click.zf.drilldown', function (e) {\n        e.stopImmediatePropagation(); // console.log('mouseup on back');\n\n        _this._hide($elem); // If there is a parent submenu, call show\n\n\n        var parentSubMenu = $elem.parent('li').parent('ul').parent('li');\n\n        if (parentSubMenu.length) {\n          _this._show(parentSubMenu);\n        }\n      });\n    }\n    /**\n     * Adds event listener to menu items w/o submenus to close open menus on click.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_menuLinkEvents\",\n    value: function _menuLinkEvents() {\n      var _this = this;\n\n      this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function (e) {\n        // e.stopImmediatePropagation();\n        setTimeout(function () {\n          _this._hideAll();\n        }, 0);\n      });\n    }\n    /**\n     * Sets the CSS classes for submenu to show it.\n     * @function\n     * @private\n     * @param {jQuery} $elem - the target submenu (`ul` tag)\n     * @param {boolean} trigger - trigger drilldown event\n     */\n\n  }, {\n    key: \"_setShowSubMenuClasses\",\n    value: function _setShowSubMenuClasses($elem, trigger) {\n      $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);\n      $elem.parent('li').attr('aria-expanded', true);\n\n      if (trigger === true) {\n        this.$element.trigger('open.zf.drilldown', [$elem]);\n      }\n    }\n    /**\n     * Sets the CSS classes for submenu to hide it.\n     * @function\n     * @private\n     * @param {jQuery} $elem - the target submenu (`ul` tag)\n     * @param {boolean} trigger - trigger drilldown event\n     */\n\n  }, {\n    key: \"_setHideSubMenuClasses\",\n    value: function _setHideSubMenuClasses($elem, trigger) {\n      $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);\n      $elem.parent('li').attr('aria-expanded', false);\n\n      if (trigger === true) {\n        $elem.trigger('hide.zf.drilldown', [$elem]);\n      }\n    }\n    /**\n     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.\n     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.\n     * @function\n     * @fires Drilldown#open\n     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)\n     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused\n     */\n\n  }, {\n    key: \"_showMenu\",\n    value: function _showMenu($elem, autoFocus) {\n      var _this = this; // Reset drilldown\n\n\n      var $expandedSubmenus = this.$element.find('li[aria-expanded=\"true\"] > ul[data-submenu]');\n      $expandedSubmenus.each(function (index) {\n        _this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));\n      }); // Save the menu as the currently displayed one.\n\n      this.$currentMenu = $elem; // If target menu is root, focus first link & exit\n\n      if ($elem.is('[data-drilldown]')) {\n        if (autoFocus === true) $elem.find('li[role=\"treeitem\"] > a').first().focus();\n        if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));\n        return;\n      } // Find all submenus on way to root incl. the element itself\n\n\n      var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]'); // Open target menu and all submenus on its way to root\n\n      $submenus.each(function (index) {\n        // Update height of first child (target menu) if autoHeight option true\n        if (index === 0 && _this.options.autoHeight) {\n          _this.$wrapper.css('height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));\n        }\n\n        var isLastChild = index == $submenus.length - 1; // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link\n        // Last child makes sure the event gets always triggered even if going through several menus\n\n        if (isLastChild === true) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), function () {\n            if (autoFocus === true) {\n              $elem.find('li[role=\"treeitem\"] > a').first().focus();\n            }\n          });\n        }\n\n        _this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), isLastChild);\n      });\n    }\n    /**\n     * Opens a submenu.\n     * @function\n     * @fires Drilldown#open\n     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.\n     */\n\n  }, {\n    key: \"_show\",\n    value: function _show($elem) {\n      var $submenu = $elem.children('[data-submenu]');\n      $elem.attr('aria-expanded', true);\n      this.$currentMenu = $submenu;\n      $submenu.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);\n\n      if (this.options.autoHeight) {\n        this.$wrapper.css({\n          height: $submenu.data('calcHeight')\n        });\n      }\n      /**\n       * Fires when the submenu has opened.\n       * @event Drilldown#open\n       */\n\n\n      this.$element.trigger('open.zf.drilldown', [$elem]);\n    }\n    /**\n     * Hides a submenu\n     * @function\n     * @fires Drilldown#hide\n     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.\n     */\n\n  }, {\n    key: \"_hide\",\n    value: function _hide($elem) {\n      if (this.options.autoHeight) this.$wrapper.css({\n        height: $elem.parent().closest('ul').data('calcHeight')\n      });\n\n      var _this = this;\n\n      $elem.parent('li').attr('aria-expanded', false);\n      $elem.attr('aria-hidden', true);\n      $elem.addClass('is-closing').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"transitionend\"])($elem), function () {\n        $elem.removeClass('is-active is-closing');\n        $elem.blur().addClass('invisible');\n      });\n      /**\n       * Fires when the submenu has closed.\n       * @event Drilldown#hide\n       */\n\n      $elem.trigger('hide.zf.drilldown', [$elem]);\n    }\n    /**\n     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.\n     * Prevents content jumping.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_getMaxDims\",\n    value: function _getMaxDims() {\n      var maxHeight = 0,\n          result = {},\n          _this = this; // Recalculate menu heights and total max height\n\n\n      this.$submenus.add(this.$element).each(function () {\n        var numOfElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('li').length;\n        var height = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__[\"Box\"].GetDimensions(this).height;\n        maxHeight = height > maxHeight ? height : maxHeight;\n\n        if (_this.options.autoHeight) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight', height);\n        }\n      });\n      if (this.options.autoHeight) result['height'] = this.$currentMenu.data('calcHeight');else result['min-height'] = \"\".concat(maxHeight, \"px\");\n      result['max-width'] = \"\".concat(this.$element[0].getBoundingClientRect().width, \"px\");\n      return result;\n    }\n    /**\n     * Destroys the Drilldown Menu\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);\n\n      this._hideAll();\n\n      this.$element.off('mutateme.zf.trigger');\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__[\"Nest\"].Burn(this.$element, 'drilldown');\n      this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');\n      this.$submenuAnchors.each(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');\n      });\n      this.$element.find('[data-is-parent-link]').detach();\n      this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');\n      this.$element.find('a').each(function () {\n        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n        $link.removeAttr('tabindex');\n\n        if ($link.data('savedHref')) {\n          $link.attr('href', $link.data('savedHref')).removeData('savedHref');\n        } else {\n          return;\n        }\n      });\n    }\n  }]);\n\n  return Drilldown;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__[\"Plugin\"]);\n\nDrilldown.defaults = {\n  /**\n   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are\n   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.\n   * @option\n   * @type {boolian}\n   * @default true\n   */\n  autoApplyClass: true,\n\n  /**\n   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\\`) if copy and pasting.\n   * @option\n   * @type {string}\n   * @default '<li class=\"js-drilldown-back\"><a tabindex=\"0\">Back</a></li>'\n   */\n  backButton: '<li class=\"js-drilldown-back\"><a tabindex=\"0\">Back</a></li>',\n\n  /**\n   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.\n   * @option\n   * @type {string}\n   * @default top\n   */\n  backButtonPosition: 'top',\n\n  /**\n   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\\`) if copy and pasting.\n   * @option\n   * @type {string}\n   * @default '<div></div>'\n   */\n  wrapper: '<div></div>',\n\n  /**\n   * Adds the parent link to the submenu.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  parentLink: false,\n\n  /**\n   * Allow the menu to return to root list on body click.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  closeOnClick: false,\n\n  /**\n   * Allow the menu to auto adjust height.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  autoHeight: false,\n\n  /**\n   * Animate the auto adjust height.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  animateHeight: false,\n\n  /**\n   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  scrollTop: false,\n\n  /**\n   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  scrollTopElement: '',\n\n  /**\n   * ScrollTop offset\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  scrollTopOffset: 0,\n\n  /**\n   * Scroll animation duration\n   * @option\n   * @type {number}\n   * @default 500\n   */\n  animationDuration: 500,\n\n  /**\n   * Scroll animation easing. Can be `'swing'` or `'linear'`.\n   * @option\n   * @type {string}\n   * @see {@link https://api.jquery.com/animate|JQuery animate}\n   * @default 'swing'\n   */\n  animationEasing: 'swing' // holdOpen: false\n\n};\n\n\n//# sourceURL=webpack:///./js/foundation.drilldown.js?");

// /***/ }),

// /***/ "./js/foundation.dropdown.js":
// /*!***********************************!*\
//   !*** ./js/foundation.dropdown.js ***!
//   \***********************************/
// /*! exports provided: Dropdown */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dropdown\", function() { return Dropdown; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.positionable */ \"./js/foundation.positionable.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Dropdown module.\n * @module foundation.dropdown\n * @requires foundation.util.keyboard\n * @requires foundation.util.box\n * @requires foundation.util.triggers\n */\n\nvar Dropdown =\n/*#__PURE__*/\nfunction (_Positionable) {\n  _inherits(Dropdown, _Positionable);\n\n  function Dropdown() {\n    _classCallCheck(this, Dropdown);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));\n  }\n\n  _createClass(Dropdown, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a dropdown.\n     * @class\n     * @name Dropdown\n     * @param {jQuery} element - jQuery object to make into a dropdown.\n     *        Object should be of the dropdown panel, rather than its anchor.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Dropdown.defaults, this.$element.data(), options);\n      this.className = 'Dropdown'; // ie9 back compat\n      // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('Dropdown', {\n        'ENTER': 'toggle',\n        'SPACE': 'toggle',\n        'ESCAPE': 'close'\n      });\n    }\n    /**\n     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var $id = this.$element.attr('id');\n      this.$anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-toggle=\\\"\".concat($id, \"\\\"]\")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-toggle=\\\"\".concat($id, \"\\\"]\")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat($id, \"\\\"]\"));\n      this.$anchors.attr({\n        'aria-controls': $id,\n        'data-is-focus': false,\n        'data-yeti-box': $id,\n        'aria-haspopup': true,\n        'aria-expanded': false\n      });\n\n      this._setCurrentAnchor(this.$anchors.first());\n\n      if (this.options.parentClass) {\n        this.$parent = this.$element.parents('.' + this.options.parentClass);\n      } else {\n        this.$parent = null;\n      } // Set [aria-labelledby] on the Dropdown if it is not set\n\n\n      if (typeof this.$element.attr('aria-labelledby') === 'undefined') {\n        // Get the anchor ID or create one\n        if (typeof this.$currentAnchor.attr('id') === 'undefined') {\n          this.$currentAnchor.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'dd-anchor'));\n        }\n\n        ;\n        this.$element.attr('aria-labelledby', this.$currentAnchor.attr('id'));\n      }\n\n      this.$element.attr({\n        'aria-hidden': 'true',\n        'data-yeti-box': $id,\n        'data-resize': $id\n      });\n\n      _get(_getPrototypeOf(Dropdown.prototype), \"_init\", this).call(this);\n\n      this._events();\n    }\n  }, {\n    key: \"_getDefaultPosition\",\n    value: function _getDefaultPosition() {\n      // handle legacy classnames\n      var position = this.$element[0].className.match(/(top|left|right|bottom)/g);\n\n      if (position) {\n        return position[0];\n      } else {\n        return 'bottom';\n      }\n    }\n  }, {\n    key: \"_getDefaultAlignment\",\n    value: function _getDefaultAlignment() {\n      // handle legacy float approach\n      var horizontalPosition = /float-(\\S+)/.exec(this.$currentAnchor.attr('class'));\n\n      if (horizontalPosition) {\n        return horizontalPosition[1];\n      }\n\n      return _get(_getPrototypeOf(Dropdown.prototype), \"_getDefaultAlignment\", this).call(this);\n    }\n    /**\n     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.\n     * Recursively calls itself if a collision is detected, with a new position class.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_setPosition\",\n    value: function _setPosition() {\n      this.$element.removeClass(\"has-position-\".concat(this.position, \" has-alignment-\").concat(this.alignment));\n\n      _get(_getPrototypeOf(Dropdown.prototype), \"_setPosition\", this).call(this, this.$currentAnchor, this.$element, this.$parent);\n\n      this.$element.addClass(\"has-position-\".concat(this.position, \" has-alignment-\").concat(this.alignment));\n    }\n    /**\n     * Make it a current anchor.\n     * Current anchor as the reference for the position of Dropdown panes.\n     * @param {HTML} el - DOM element of the anchor.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_setCurrentAnchor\",\n    value: function _setCurrentAnchor(el) {\n      this.$currentAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);\n    }\n    /**\n     * Adds event listeners to the element utilizing the triggers utility library.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      this.$element.on({\n        'open.zf.trigger': this.open.bind(this),\n        'close.zf.trigger': this.close.bind(this),\n        'toggle.zf.trigger': this.toggle.bind(this),\n        'resizeme.zf.trigger': this._setPosition.bind(this)\n      });\n      this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function () {\n        _this._setCurrentAnchor(this);\n      });\n\n      if (this.options.hover) {\n        this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {\n          _this._setCurrentAnchor(this);\n\n          var bodyData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();\n\n          if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {\n            clearTimeout(_this.timeout);\n            _this.timeout = setTimeout(function () {\n              _this.open();\n\n              _this.$anchors.data('hover', true);\n            }, _this.options.hoverDelay);\n          }\n        }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"ignoreMousedisappear\"])(function () {\n          clearTimeout(_this.timeout);\n          _this.timeout = setTimeout(function () {\n            _this.close();\n\n            _this.$anchors.data('hover', false);\n          }, _this.options.hoverDelay);\n        }));\n\n        if (this.options.hoverPane) {\n          this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {\n            clearTimeout(_this.timeout);\n          }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"ignoreMousedisappear\"])(function () {\n            clearTimeout(_this.timeout);\n            _this.timeout = setTimeout(function () {\n              _this.close();\n\n              _this.$anchors.data('hover', false);\n            }, _this.options.hoverDelay);\n          }));\n        }\n      }\n\n      this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {\n        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            visibleFocusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].findFocusable(_this.$element);\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'Dropdown', {\n          open: function open() {\n            if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {\n              _this.open();\n\n              _this.$element.attr('tabindex', -1).focus();\n\n              e.preventDefault();\n            }\n          },\n          close: function close() {\n            _this.close();\n\n            _this.$anchors.focus();\n          }\n        });\n      });\n    }\n    /**\n     * Adds an event handler to the body to close any dropdowns on a click.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_addBodyHandler\",\n    value: function _addBodyHandler() {\n      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),\n          _this = this;\n\n      $body.off('click.zf.dropdown').on('click.zf.dropdown', function (e) {\n        if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {\n          return;\n        }\n\n        if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {\n          return;\n        }\n\n        _this.close();\n\n        $body.off('click.zf.dropdown');\n      });\n    }\n    /**\n     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.\n     * @function\n     * @fires Dropdown#closeme\n     * @fires Dropdown#show\n     */\n\n  }, {\n    key: \"open\",\n    value: function open() {\n      // var _this = this;\n\n      /**\n       * Fires to close other open dropdowns, typically when dropdown is opening\n       * @event Dropdown#closeme\n       */\n      this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));\n      this.$anchors.addClass('hover').attr({\n        'aria-expanded': true\n      }); // this.$element/*.show()*/;\n\n      this.$element.addClass('is-opening');\n\n      this._setPosition();\n\n      this.$element.removeClass('is-opening').addClass('is-open').attr({\n        'aria-hidden': false\n      });\n\n      if (this.options.autoFocus) {\n        var $focusable = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].findFocusable(this.$element);\n\n        if ($focusable.length) {\n          $focusable.eq(0).focus();\n        }\n      }\n\n      if (this.options.closeOnClick) {\n        this._addBodyHandler();\n      }\n\n      if (this.options.trapFocus) {\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].trapFocus(this.$element);\n      }\n      /**\n       * Fires once the dropdown is visible.\n       * @event Dropdown#show\n       */\n\n\n      this.$element.trigger('show.zf.dropdown', [this.$element]);\n    }\n    /**\n     * Closes the open dropdown pane.\n     * @function\n     * @fires Dropdown#hide\n     */\n\n  }, {\n    key: \"close\",\n    value: function close() {\n      if (!this.$element.hasClass('is-open')) {\n        return false;\n      }\n\n      this.$element.removeClass('is-open').attr({\n        'aria-hidden': true\n      });\n      this.$anchors.removeClass('hover').attr('aria-expanded', false);\n      /**\n       * Fires once the dropdown is no longer visible.\n       * @event Dropdown#hide\n       */\n\n      this.$element.trigger('hide.zf.dropdown', [this.$element]);\n\n      if (this.options.trapFocus) {\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].releaseFocus(this.$element);\n      }\n    }\n    /**\n     * Toggles the dropdown pane's visibility.\n     * @function\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      if (this.$element.hasClass('is-open')) {\n        if (this.$anchors.data('hover')) return;\n        this.close();\n      } else {\n        this.open();\n      }\n    }\n    /**\n     * Destroys the dropdown.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('.zf.trigger').hide();\n      this.$anchors.off('.zf.dropdown');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown');\n    }\n  }]);\n\n  return Dropdown;\n}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_3__[\"Positionable\"]);\n\nDropdown.defaults = {\n  /**\n   * Class that designates bounding container of Dropdown (default: window)\n   * @option\n   * @type {?string}\n   * @default null\n   */\n  parentClass: null,\n\n  /**\n   * Amount of time to delay opening a submenu on hover event.\n   * @option\n   * @type {number}\n   * @default 250\n   */\n  hoverDelay: 250,\n\n  /**\n   * Allow submenus to open on hover events\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  hover: false,\n\n  /**\n   * Don't close dropdown when hovering over dropdown pane\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  hoverPane: false,\n\n  /**\n   * Number of pixels between the dropdown pane and the triggering element on open.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  vOffset: 0,\n\n  /**\n   * Number of pixels between the dropdown pane and the triggering element on open.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  hOffset: 0,\n\n  /**\n   * Position of dropdown. Can be left, right, bottom, top, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  position: 'auto',\n\n  /**\n   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  alignment: 'auto',\n\n  /**\n   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  allowOverlap: false,\n\n  /**\n   * Allow overlap of only the bottom of the container. This is the most common\n   * behavior for dropdowns, allowing the dropdown to extend the bottom of the\n   * screen but not otherwise influence or break out of the container.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  allowBottomOverlap: true,\n\n  /**\n   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  trapFocus: false,\n\n  /**\n   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  autoFocus: false,\n\n  /**\n   * Allows a click on the body to close the dropdown.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  closeOnClick: false\n};\n\n\n//# sourceURL=webpack:///./js/foundation.dropdown.js?");

// /***/ }),

// /***/ "./js/foundation.dropdownMenu.js":
// /*!***************************************!*\
//   !*** ./js/foundation.dropdownMenu.js ***!
//   \***************************************/
// /*! exports provided: DropdownMenu */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DropdownMenu\", function() { return DropdownMenu; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.nest */ \"./js/foundation.util.nest.js\");\n/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.box */ \"./js/foundation.util.box.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n/**\n * DropdownMenu module.\n * @module foundation.dropdown-menu\n * @requires foundation.util.keyboard\n * @requires foundation.util.box\n * @requires foundation.util.nest\n */\n\nvar DropdownMenu =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(DropdownMenu, _Plugin);\n\n  function DropdownMenu() {\n    _classCallCheck(this, DropdownMenu);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));\n  }\n\n  _createClass(DropdownMenu, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of DropdownMenu.\n     * @class\n     * @name DropdownMenu\n     * @fires DropdownMenu#init\n     * @param {jQuery} element - jQuery object to make into a dropdown menu.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, DropdownMenu.defaults, this.$element.data(), options);\n      this.className = 'DropdownMenu'; // ie9 back compat\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].register('DropdownMenu', {\n        'ENTER': 'open',\n        'SPACE': 'open',\n        'ARROW_RIGHT': 'next',\n        'ARROW_UP': 'up',\n        'ARROW_DOWN': 'down',\n        'ARROW_LEFT': 'previous',\n        'ESCAPE': 'close'\n      });\n    }\n    /**\n     * Initializes the plugin, and calls _prepareMenu\n     * @private\n     * @function\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__[\"Nest\"].Feather(this.$element, 'dropdown');\n      var subs = this.$element.find('li.is-dropdown-submenu-parent');\n      this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');\n      this.$menuItems = this.$element.find('[role=\"menuitem\"]');\n      this.$tabs = this.$element.children('[role=\"menuitem\"]');\n      this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);\n\n      if (this.options.alignment === 'auto') {\n        if (this.$element.hasClass(this.options.rightClass) || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"rtl\"])() || this.$element.parents('.top-bar-right').is('*')) {\n          this.options.alignment = 'right';\n          subs.addClass('opens-left');\n        } else {\n          this.options.alignment = 'left';\n          subs.addClass('opens-right');\n        }\n      } else {\n        if (this.options.alignment === 'right') {\n          subs.addClass('opens-left');\n        } else {\n          subs.addClass('opens-right');\n        }\n      }\n\n      this.changed = false;\n\n      this._events();\n    }\n  }, {\n    key: \"_isVertical\",\n    value: function _isVertical() {\n      return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';\n    }\n  }, {\n    key: \"_isRtl\",\n    value: function _isRtl() {\n      return this.$element.hasClass('align-right') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"rtl\"])() && !this.$element.hasClass('align-left');\n    }\n    /**\n     * Adds event listeners to elements within the menu\n     * @private\n     * @function\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this,\n          hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',\n          parClass = 'is-dropdown-submenu-parent'; // used for onClick and in the keyboard handlers\n\n\n      var handleClickFn = function handleClickFn(e) {\n        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', \".\".concat(parClass)),\n            hasSub = $elem.hasClass(parClass),\n            hasClicked = $elem.attr('data-is-click') === 'true',\n            $sub = $elem.children('.is-dropdown-submenu');\n\n        if (hasSub) {\n          if (hasClicked) {\n            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {\n              return;\n            } else {\n              e.stopImmediatePropagation();\n              e.preventDefault();\n\n              _this._hide($elem);\n            }\n          } else {\n            e.preventDefault();\n            e.stopImmediatePropagation();\n\n            _this._show($sub);\n\n            $elem.add($elem.parentsUntil(_this.$element, \".\".concat(parClass))).attr('data-is-click', true);\n          }\n        }\n      };\n\n      if (this.options.clickOpen || hasTouch) {\n        this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);\n      } // Handle Leaf element Clicks\n\n\n      if (_this.options.closeOnClickInside) {\n        this.$menuItems.on('click.zf.dropdownmenu', function (e) {\n          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n              hasSub = $elem.hasClass(parClass);\n\n          if (!hasSub) {\n            _this._hide();\n          }\n        });\n      }\n\n      if (!this.options.disableHover) {\n        this.$menuItems.on('mouseenter.zf.dropdownmenu', function (e) {\n          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n              hasSub = $elem.hasClass(parClass);\n\n          if (hasSub) {\n            clearTimeout($elem.data('_delay'));\n            $elem.data('_delay', setTimeout(function () {\n              _this._show($elem.children('.is-dropdown-submenu'));\n            }, _this.options.hoverDelay));\n          }\n        }).on('mouseleave.zf.dropdownMenu', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"ignoreMousedisappear\"])(function (e) {\n          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n              hasSub = $elem.hasClass(parClass);\n\n          if (hasSub && _this.options.autoclose) {\n            if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {\n              return false;\n            }\n\n            clearTimeout($elem.data('_delay'));\n            $elem.data('_delay', setTimeout(function () {\n              _this._hide($elem);\n            }, _this.options.closingTime));\n          }\n        }));\n      }\n\n      this.$menuItems.on('keydown.zf.dropdownmenu', function (e) {\n        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', '[role=\"menuitem\"]'),\n            isTab = _this.$tabs.index($element) > -1,\n            $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),\n            $prevElement,\n            $nextElement;\n        $elements.each(function (i) {\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {\n            $prevElement = $elements.eq(i - 1);\n            $nextElement = $elements.eq(i + 1);\n            return;\n          }\n        });\n\n        var nextSibling = function nextSibling() {\n          $nextElement.children('a:first').focus();\n          e.preventDefault();\n        },\n            prevSibling = function prevSibling() {\n          $prevElement.children('a:first').focus();\n          e.preventDefault();\n        },\n            openSub = function openSub() {\n          var $sub = $element.children('ul.is-dropdown-submenu');\n\n          if ($sub.length) {\n            _this._show($sub);\n\n            $element.find('li > a:first').focus();\n            e.preventDefault();\n          } else {\n            return;\n          }\n        },\n            closeSub = function closeSub() {\n          //if ($element.is(':first-child')) {\n          var close = $element.parent('ul').parent('li');\n          close.children('a:first').focus();\n\n          _this._hide(close);\n\n          e.preventDefault(); //}\n        };\n\n        var functions = {\n          open: openSub,\n          close: function close() {\n            _this._hide(_this.$element);\n\n            _this.$menuItems.eq(0).children('a').focus(); // focus to first element\n\n\n            e.preventDefault();\n          },\n          handled: function handled() {\n            e.stopImmediatePropagation();\n          }\n        };\n\n        if (isTab) {\n          if (_this._isVertical()) {\n            // vertical menu\n            if (_this._isRtl()) {\n              // right aligned\n              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {\n                down: nextSibling,\n                up: prevSibling,\n                next: closeSub,\n                previous: openSub\n              });\n            } else {\n              // left aligned\n              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {\n                down: nextSibling,\n                up: prevSibling,\n                next: openSub,\n                previous: closeSub\n              });\n            }\n          } else {\n            // horizontal menu\n            if (_this._isRtl()) {\n              // right aligned\n              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {\n                next: prevSibling,\n                previous: nextSibling,\n                down: openSub,\n                up: closeSub\n              });\n            } else {\n              // left aligned\n              jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {\n                next: nextSibling,\n                previous: prevSibling,\n                down: openSub,\n                up: closeSub\n              });\n            }\n          }\n        } else {\n          // not tabs -> one sub\n          if (_this._isRtl()) {\n            // right aligned\n            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {\n              next: closeSub,\n              previous: openSub,\n              down: nextSibling,\n              up: prevSibling\n            });\n          } else {\n            // left aligned\n            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {\n              next: openSub,\n              previous: closeSub,\n              down: nextSibling,\n              up: prevSibling\n            });\n          }\n        }\n\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"Keyboard\"].handleKey(e, 'DropdownMenu', functions);\n      });\n    }\n    /**\n     * Adds an event handler to the body to close any dropdowns on a click.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_addBodyHandler\",\n    value: function _addBodyHandler() {\n      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body),\n          _this = this;\n\n      $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function (e) {\n        var $link = _this.$element.find(e.target);\n\n        if ($link.length) {\n          return;\n        }\n\n        _this._hide();\n\n        $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');\n      });\n    }\n    /**\n     * Opens a dropdown pane, and checks for collisions first.\n     * @param {jQuery} $sub - ul element that is a submenu to show\n     * @function\n     * @private\n     * @fires Dropdownmenu#show\n     */\n\n  }, {\n    key: \"_show\",\n    value: function _show($sub) {\n      var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {\n        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length > 0;\n      }));\n      var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');\n\n      this._hide($sibs, idx);\n\n      $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');\n      var clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__[\"Box\"].ImNotTouchingYou($sub, null, true);\n\n      if (!clear) {\n        var oldClass = this.options.alignment === 'left' ? '-right' : '-left',\n            $parentLi = $sub.parent('.is-dropdown-submenu-parent');\n        $parentLi.removeClass(\"opens\".concat(oldClass)).addClass(\"opens-\".concat(this.options.alignment));\n        clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__[\"Box\"].ImNotTouchingYou($sub, null, true);\n\n        if (!clear) {\n          $parentLi.removeClass(\"opens-\".concat(this.options.alignment)).addClass('opens-inner');\n        }\n\n        this.changed = true;\n      }\n\n      $sub.css('visibility', '');\n\n      if (this.options.closeOnClick) {\n        this._addBodyHandler();\n      }\n      /**\n       * Fires when the new dropdown pane is visible.\n       * @event Dropdownmenu#show\n       */\n\n\n      this.$element.trigger('show.zf.dropdownmenu', [$sub]);\n    }\n    /**\n     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.\n     * @function\n     * @param {jQuery} $elem - element with a submenu to hide\n     * @param {Number} idx - index of the $tabs collection to hide\n     * @private\n     */\n\n  }, {\n    key: \"_hide\",\n    value: function _hide($elem, idx) {\n      var $toClose;\n\n      if ($elem && $elem.length) {\n        $toClose = $elem;\n      } else if (typeof idx !== 'undefined') {\n        $toClose = this.$tabs.not(function (i, el) {\n          return i === idx;\n        });\n      } else {\n        $toClose = this.$element;\n      }\n\n      var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;\n\n      if (somethingToClose) {\n        $toClose.find('li.is-active').add($toClose).attr({\n          'data-is-click': false\n        }).removeClass('is-active');\n        $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');\n\n        if (this.changed || $toClose.find('opens-inner').length) {\n          var oldClass = this.options.alignment === 'left' ? 'right' : 'left';\n          $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass(\"opens-inner opens-\".concat(this.options.alignment)).addClass(\"opens-\".concat(oldClass));\n          this.changed = false;\n        }\n        /**\n         * Fires when the open menus are closed.\n         * @event Dropdownmenu#hide\n         */\n\n\n        this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);\n      }\n    }\n    /**\n     * Destroys the plugin.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownmenu');\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__[\"Nest\"].Burn(this.$element, 'dropdown');\n    }\n  }]);\n\n  return DropdownMenu;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n/**\n * Default settings for plugin\n */\n\n\nDropdownMenu.defaults = {\n  /**\n   * Disallows hover events from opening submenus\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  disableHover: false,\n\n  /**\n   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  autoclose: true,\n\n  /**\n   * Amount of time to delay opening a submenu on hover event.\n   * @option\n   * @type {number}\n   * @default 50\n   */\n  hoverDelay: 50,\n\n  /**\n   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  clickOpen: false,\n\n  /**\n   * Amount of time to delay closing a submenu on a mouseleave event.\n   * @option\n   * @type {number}\n   * @default 500\n   */\n  closingTime: 500,\n\n  /**\n   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  alignment: 'auto',\n\n  /**\n   * Allow clicks on the body to close any open submenus.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  closeOnClick: true,\n\n  /**\n   * Allow clicks on leaf anchor links to close any open submenus.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  closeOnClickInside: true,\n\n  /**\n   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.\n   * @option\n   * @type {string}\n   * @default 'vertical'\n   */\n  verticalClass: 'vertical',\n\n  /**\n   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.\n   * @option\n   * @type {string}\n   * @default 'align-right'\n   */\n  rightClass: 'align-right',\n\n  /**\n   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  forceFollow: true\n};\n\n\n//# sourceURL=webpack:///./js/foundation.dropdownMenu.js?");

// /***/ }),

// /***/ "./js/foundation.equalizer.js":
// /*!************************************!*\
//   !*** ./js/foundation.equalizer.js ***!
//   \************************************/
// /*! exports provided: Equalizer */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Equalizer\", function() { return Equalizer; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.imageLoader */ \"./js/foundation.util.imageLoader.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Equalizer module.\n * @module foundation.equalizer\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.imageLoader if equalizer contains images\n */\n\nvar Equalizer =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Equalizer, _Plugin);\n\n  function Equalizer() {\n    _classCallCheck(this, Equalizer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Equalizer).apply(this, arguments));\n  }\n\n  _createClass(Equalizer, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Equalizer.\n     * @class\n     * @name Equalizer\n     * @fires Equalizer#init\n     * @param {Object} element - jQuery object to add the trigger to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Equalizer.defaults, this.$element.data(), options);\n      this.className = 'Equalizer'; // ie9 back compat\n\n      this._init();\n    }\n    /**\n     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var eqId = this.$element.attr('data-equalizer') || '';\n      var $watched = this.$element.find(\"[data-equalizer-watch=\\\"\".concat(eqId, \"\\\"]\"));\n\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init();\n\n      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');\n      this.$element.attr('data-resize', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'eq'));\n      this.$element.attr('data-mutate', eqId || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'eq'));\n      this.hasNested = this.$element.find('[data-equalizer]').length > 0;\n      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;\n      this.isOn = false;\n      this._bindHandler = {\n        onResizeMeBound: this._onResizeMe.bind(this),\n        onPostEqualizedBound: this._onPostEqualized.bind(this)\n      };\n      var imgs = this.$element.find('img');\n      var tooSmall;\n\n      if (this.options.equalizeOn) {\n        tooSmall = this._checkMQ();\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));\n      } else {\n        this._events();\n      }\n\n      if (typeof tooSmall !== 'undefined' && tooSmall === false || typeof tooSmall === 'undefined') {\n        if (imgs.length) {\n          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__[\"onImagesLoaded\"])(imgs, this._reflow.bind(this));\n        } else {\n          this._reflow();\n        }\n      }\n    }\n    /**\n     * Removes event listeners if the breakpoint is too small.\n     * @private\n     */\n\n  }, {\n    key: \"_pauseEvents\",\n    value: function _pauseEvents() {\n      this.isOn = false;\n      this.$element.off({\n        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,\n        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,\n        'mutateme.zf.trigger': this._bindHandler.onResizeMeBound\n      });\n    }\n    /**\n     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound\n     * @private\n     */\n\n  }, {\n    key: \"_onResizeMe\",\n    value: function _onResizeMe(e) {\n      this._reflow();\n    }\n    /**\n     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound\n     * @private\n     */\n\n  }, {\n    key: \"_onPostEqualized\",\n    value: function _onPostEqualized(e) {\n      if (e.target !== this.$element[0]) {\n        this._reflow();\n      }\n    }\n    /**\n     * Initializes events for Equalizer.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      this._pauseEvents();\n\n      if (this.hasNested) {\n        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);\n      } else {\n        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);\n        this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);\n      }\n\n      this.isOn = true;\n    }\n    /**\n     * Checks the current breakpoint to the minimum required size.\n     * @private\n     */\n\n  }, {\n    key: \"_checkMQ\",\n    value: function _checkMQ() {\n      var tooSmall = !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].is(this.options.equalizeOn);\n\n      if (tooSmall) {\n        if (this.isOn) {\n          this._pauseEvents();\n\n          this.$watched.css('height', 'auto');\n        }\n      } else {\n        if (!this.isOn) {\n          this._events();\n        }\n      }\n\n      return tooSmall;\n    }\n    /**\n     * A noop version for the plugin\n     * @private\n     */\n\n  }, {\n    key: \"_killswitch\",\n    value: function _killswitch() {\n      return;\n    }\n    /**\n     * Calls necessary functions to update Equalizer upon DOM change\n     * @private\n     */\n\n  }, {\n    key: \"_reflow\",\n    value: function _reflow() {\n      if (!this.options.equalizeOnStack) {\n        if (this._isStacked()) {\n          this.$watched.css('height', 'auto');\n          return false;\n        }\n      }\n\n      if (this.options.equalizeByRow) {\n        this.getHeightsByRow(this.applyHeightByRow.bind(this));\n      } else {\n        this.getHeights(this.applyHeight.bind(this));\n      }\n    }\n    /**\n     * Manually determines if the first 2 elements are *NOT* stacked.\n     * @private\n     */\n\n  }, {\n    key: \"_isStacked\",\n    value: function _isStacked() {\n      if (!this.$watched[0] || !this.$watched[1]) {\n        return true;\n      }\n\n      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;\n    }\n    /**\n     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array\n     * @param {Function} cb - A non-optional callback to return the heights array to.\n     * @returns {Array} heights - An array of heights of children within Equalizer container\n     */\n\n  }, {\n    key: \"getHeights\",\n    value: function getHeights(cb) {\n      var heights = [];\n\n      for (var i = 0, len = this.$watched.length; i < len; i++) {\n        this.$watched[i].style.height = 'auto';\n        heights.push(this.$watched[i].offsetHeight);\n      }\n\n      cb(heights);\n    }\n    /**\n     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array\n     * @param {Function} cb - A non-optional callback to return the heights array to.\n     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child\n     */\n\n  }, {\n    key: \"getHeightsByRow\",\n    value: function getHeightsByRow(cb) {\n      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,\n          groups = [],\n          group = 0; //group by Row\n\n      groups[group] = [];\n\n      for (var i = 0, len = this.$watched.length; i < len; i++) {\n        this.$watched[i].style.height = 'auto'; //maybe could use this.$watched[i].offsetTop\n\n        var elOffsetTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$watched[i]).offset().top;\n\n        if (elOffsetTop != lastElTopOffset) {\n          group++;\n          groups[group] = [];\n          lastElTopOffset = elOffsetTop;\n        }\n\n        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);\n      }\n\n      for (var j = 0, ln = groups.length; j < ln; j++) {\n        var heights = jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[j]).map(function () {\n          return this[1];\n        }).get();\n        var max = Math.max.apply(null, heights);\n        groups[j].push(max);\n      }\n\n      cb(groups);\n    }\n    /**\n     * Changes the CSS height property of each child in an Equalizer parent to match the tallest\n     * @param {array} heights - An array of heights of children within Equalizer container\n     * @fires Equalizer#preequalized\n     * @fires Equalizer#postequalized\n     */\n\n  }, {\n    key: \"applyHeight\",\n    value: function applyHeight(heights) {\n      var max = Math.max.apply(null, heights);\n      /**\n       * Fires before the heights are applied\n       * @event Equalizer#preequalized\n       */\n\n      this.$element.trigger('preequalized.zf.equalizer');\n      this.$watched.css('height', max);\n      /**\n       * Fires when the heights have been applied\n       * @event Equalizer#postequalized\n       */\n\n      this.$element.trigger('postequalized.zf.equalizer');\n    }\n    /**\n     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row\n     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child\n     * @fires Equalizer#preequalized\n     * @fires Equalizer#preequalizedrow\n     * @fires Equalizer#postequalizedrow\n     * @fires Equalizer#postequalized\n     */\n\n  }, {\n    key: \"applyHeightByRow\",\n    value: function applyHeightByRow(groups) {\n      /**\n       * Fires before the heights are applied\n       */\n      this.$element.trigger('preequalized.zf.equalizer');\n\n      for (var i = 0, len = groups.length; i < len; i++) {\n        var groupsILength = groups[i].length,\n            max = groups[i][groupsILength - 1];\n\n        if (groupsILength <= 2) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][0][0]).css({\n            'height': 'auto'\n          });\n          continue;\n        }\n        /**\n          * Fires before the heights per row are applied\n          * @event Equalizer#preequalizedrow\n          */\n\n\n        this.$element.trigger('preequalizedrow.zf.equalizer');\n\n        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][j][0]).css({\n            'height': max\n          });\n        }\n        /**\n          * Fires when the heights per row have been applied\n          * @event Equalizer#postequalizedrow\n          */\n\n\n        this.$element.trigger('postequalizedrow.zf.equalizer');\n      }\n      /**\n       * Fires when the heights have been applied\n       */\n\n\n      this.$element.trigger('postequalized.zf.equalizer');\n    }\n    /**\n     * Destroys an instance of Equalizer.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this._pauseEvents();\n\n      this.$watched.css('height', 'auto');\n    }\n  }]);\n\n  return Equalizer;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__[\"Plugin\"]);\n/**\n * Default settings for plugin\n */\n\n\nEqualizer.defaults = {\n  /**\n   * Enable height equalization when stacked on smaller screens.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  equalizeOnStack: false,\n\n  /**\n   * Enable height equalization row by row.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  equalizeByRow: false,\n\n  /**\n   * String representing the minimum breakpoint size the plugin should equalize heights on.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  equalizeOn: ''\n};\n\n\n//# sourceURL=webpack:///./js/foundation.equalizer.js?");

// /***/ }),

// /***/ "./js/foundation.interchange.js":
// /*!**************************************!*\
//   !*** ./js/foundation.interchange.js ***!
//   \**************************************/
// /*! exports provided: Interchange */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Interchange\", function() { return Interchange; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n/**\n * Interchange module.\n * @module foundation.interchange\n * @requires foundation.util.mediaQuery\n */\n\nvar Interchange =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Interchange, _Plugin);\n\n  function Interchange() {\n    _classCallCheck(this, Interchange);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Interchange).apply(this, arguments));\n  }\n\n  _createClass(Interchange, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Interchange.\n     * @class\n     * @name Interchange\n     * @fires Interchange#init\n     * @param {Object} element - jQuery object to add the trigger to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Interchange.defaults, options);\n      this.rules = [];\n      this.currentPath = '';\n      this.className = 'Interchange'; // ie9 back compat\n\n      this._init();\n\n      this._events();\n    }\n    /**\n     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init();\n\n      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'interchange');\n      this.$element.attr({\n        'data-resize': id,\n        'id': id\n      });\n\n      this._addBreakpoints();\n\n      this._generateRules();\n\n      this._reflow();\n    }\n    /**\n     * Initializes events for Interchange.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this2 = this;\n\n      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {\n        return _this2._reflow();\n      });\n    }\n    /**\n     * Calls necessary functions to update Interchange upon DOM change\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_reflow\",\n    value: function _reflow() {\n      var match; // Iterate through each rule, but only save the last match\n\n      for (var i in this.rules) {\n        if (this.rules.hasOwnProperty(i)) {\n          var rule = this.rules[i];\n\n          if (window.matchMedia(rule.query).matches) {\n            match = rule;\n          }\n        }\n      }\n\n      if (match) {\n        this.replace(match.path);\n      }\n    }\n    /**\n     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_addBreakpoints\",\n    value: function _addBreakpoints() {\n      for (var i in _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].queries) {\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].queries.hasOwnProperty(i)) {\n          var query = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].queries[i];\n          Interchange.SPECIAL_QUERIES[query.name] = query.value;\n        }\n      }\n    }\n    /**\n     * Checks the Interchange element for the provided media query + content pairings\n     * @function\n     * @private\n     * @param {Object} element - jQuery object that is an Interchange instance\n     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys\n     */\n\n  }, {\n    key: \"_generateRules\",\n    value: function _generateRules(element) {\n      var rulesList = [];\n      var rules;\n\n      if (this.options.rules) {\n        rules = this.options.rules;\n      } else {\n        rules = this.$element.data('interchange');\n      }\n\n      rules = typeof rules === 'string' ? rules.match(/\\[.*?, .*?\\]/g) : rules;\n\n      for (var i in rules) {\n        if (rules.hasOwnProperty(i)) {\n          var rule = rules[i].slice(1, -1).split(', ');\n          var path = rule.slice(0, -1).join('');\n          var query = rule[rule.length - 1];\n\n          if (Interchange.SPECIAL_QUERIES[query]) {\n            query = Interchange.SPECIAL_QUERIES[query];\n          }\n\n          rulesList.push({\n            path: path,\n            query: query\n          });\n        }\n      }\n\n      this.rules = rulesList;\n    }\n    /**\n     * Update the `src` property of an image, or change the HTML of a container, to the specified path.\n     * @function\n     * @param {String} path - Path to the image or HTML partial.\n     * @fires Interchange#replaced\n     */\n\n  }, {\n    key: \"replace\",\n    value: function replace(path) {\n      if (this.currentPath === path) return;\n\n      var _this = this,\n          trigger = 'replaced.zf.interchange'; // Replacing images\n\n\n      if (this.$element[0].nodeName === 'IMG') {\n        this.$element.attr('src', path).on('load', function () {\n          _this.currentPath = path;\n        }).trigger(trigger);\n      } // Replacing background images\n      else if (path.match(/\\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)) {\n          path = path.replace(/\\(/g, '%28').replace(/\\)/g, '%29');\n          this.$element.css({\n            'background-image': 'url(' + path + ')'\n          }).trigger(trigger);\n        } // Replacing HTML\n        else {\n            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get(path, function (response) {\n              _this.$element.html(response).trigger(trigger);\n\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).foundation();\n              _this.currentPath = path;\n            });\n          }\n      /**\n       * Fires when content in an Interchange element is done being loaded.\n       * @event Interchange#replaced\n       */\n      // this.$element.trigger('replaced.zf.interchange');\n\n    }\n    /**\n     * Destroys an instance of interchange.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('resizeme.zf.trigger');\n    }\n  }]);\n\n  return Interchange;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__[\"Plugin\"]);\n/**\n * Default settings for plugin\n */\n\n\nInterchange.defaults = {\n  /**\n   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.\n   * @option\n   * @type {?array}\n   * @default null\n   */\n  rules: null\n};\nInterchange.SPECIAL_QUERIES = {\n  'landscape': 'screen and (orientation: landscape)',\n  'portrait': 'screen and (orientation: portrait)',\n  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'\n};\n\n\n//# sourceURL=webpack:///./js/foundation.interchange.js?");

// /***/ }),

// /***/ "./js/foundation.magellan.js":
// /*!***********************************!*\
//   !*** ./js/foundation.magellan.js ***!
//   \***********************************/
// /*! exports provided: Magellan */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Magellan\", function() { return Magellan; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.smoothScroll */ \"./js/foundation.smoothScroll.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n/**\n * Magellan module.\n * @module foundation.magellan\n * @requires foundation.smoothScroll\n */\n\nvar Magellan =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Magellan, _Plugin);\n\n  function Magellan() {\n    _classCallCheck(this, Magellan);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Magellan).apply(this, arguments));\n  }\n\n  _createClass(Magellan, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Magellan.\n     * @class\n     * @name Magellan\n     * @fires Magellan#init\n     * @param {Object} element - jQuery object to add the trigger to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Magellan.defaults, this.$element.data(), options);\n      this.className = 'Magellan'; // ie9 back compat\n\n      this._init();\n\n      this.calcPoints();\n    }\n    /**\n     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, 'magellan');\n\n      var _this = this;\n\n      this.$targets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');\n      this.$links = this.$element.find('a');\n      this.$element.attr({\n        'data-resize': id,\n        'data-scroll': id,\n        'id': id\n      });\n      this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.scrollPos = parseInt(window.pageYOffset, 10);\n\n      this._events();\n    }\n    /**\n     * Calculates an array of pixel values that are the demarcation lines between locations on the page.\n     * Can be invoked if new elements are added or the size of a location changes.\n     * @function\n     */\n\n  }, {\n    key: \"calcPoints\",\n    value: function calcPoints() {\n      var _this = this,\n          body = document.body,\n          html = document.documentElement;\n\n      this.points = [];\n      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));\n      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));\n      this.$targets.each(function () {\n        var $tar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            pt = Math.round($tar.offset().top - _this.options.threshold);\n        $tar.targetPoint = pt;\n\n        _this.points.push(pt);\n      });\n    }\n    /**\n     * Initializes events for Magellan.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this,\n          $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body'),\n          opts = {\n        duration: _this.options.animationDuration,\n        easing: _this.options.animationEasing\n      };\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', function () {\n        if (_this.options.deepLinking) {\n          if (location.hash) {\n            _this.scrollToLoc(location.hash);\n          }\n        }\n\n        _this.calcPoints();\n\n        _this._updateActive();\n      });\n      _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n        _this.$element.on({\n          'resizeme.zf.trigger': _this.reflow.bind(_this),\n          'scrollme.zf.trigger': _this._updateActive.bind(_this)\n        }).on('click.zf.magellan', 'a[href^=\"#\"]', function (e) {\n          e.preventDefault();\n          var arrival = this.getAttribute('href');\n\n          _this.scrollToLoc(arrival);\n        });\n      });\n\n      this._deepLinkScroll = function (e) {\n        if (_this.options.deepLinking) {\n          _this.scrollToLoc(window.location.hash);\n        }\n      };\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._deepLinkScroll);\n    }\n    /**\n     * Function to scroll to a given location on the page.\n     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'\n     * @function\n     */\n\n  }, {\n    key: \"scrollToLoc\",\n    value: function scrollToLoc(loc) {\n      this._inTransition = true;\n\n      var _this = this;\n\n      var options = {\n        animationEasing: this.options.animationEasing,\n        animationDuration: this.options.animationDuration,\n        threshold: this.options.threshold,\n        offset: this.options.offset\n      };\n      _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"SmoothScroll\"].scrollToLoc(loc, options, function () {\n        _this._inTransition = false;\n      });\n    }\n    /**\n     * Calls necessary functions to update Magellan upon DOM change\n     * @function\n     */\n\n  }, {\n    key: \"reflow\",\n    value: function reflow() {\n      this.calcPoints();\n\n      this._updateActive();\n    }\n    /**\n     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.\n     * @private\n     * @function\n     * @fires Magellan#update\n     */\n\n  }, {\n    key: \"_updateActive\",\n    value: function _updateActive()\n    /*evt, elem, scrollPos*/\n    {\n      var _this2 = this;\n\n      if (this._inTransition) return;\n      var newScrollPos = parseInt(window.pageYOffset, 10);\n      var isScrollingUp = this.scrollPos > newScrollPos;\n      this.scrollPos = newScrollPos;\n      var activeIdx; // Before the first point: no link\n\n      if (newScrollPos < this.points[0]) {}\n      /* do nothing */\n      // At the bottom of the page: last link\n      else if (newScrollPos + this.winHeight === this.docHeight) {\n          activeIdx = this.points.length - 1;\n        } // Otherwhise, use the last visible link\n        else {\n            var visibleLinks = this.points.filter(function (p, i) {\n              return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;\n            });\n            activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;\n          } // Get the new active link\n\n\n      var $oldActive = this.$active;\n      var activeHash = '';\n\n      if (typeof activeIdx !== 'undefined') {\n        this.$active = this.$links.filter('[href=\"#' + this.$targets.eq(activeIdx).data('magellan-target') + '\"]');\n        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');\n      } else {\n        this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      }\n\n      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);\n      var isNewHash = activeHash !== window.location.hash; // Update the active link element\n\n      if (isNewActive) {\n        $oldActive.removeClass(this.options.activeClass);\n        this.$active.addClass(this.options.activeClass);\n      } // Update the hash (it may have changed with the same active link)\n\n\n      if (this.options.deepLinking && isNewHash) {\n        if (window.history.pushState) {\n          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384\n          var url = activeHash ? activeHash : window.location.pathname + window.location.search;\n          window.history.pushState(null, null, url);\n        } else {\n          window.location.hash = activeHash;\n        }\n      }\n\n      if (isNewActive) {\n        /**\n         * Fires when magellan is finished updating to the new active element.\n         * @event Magellan#update\n         */\n        this.$element.trigger('update.zf.magellan', [this.$active]);\n      }\n    }\n    /**\n     * Destroys an instance of Magellan and resets the url of the window.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('.zf.trigger .zf.magellan').find(\".\".concat(this.options.activeClass)).removeClass(this.options.activeClass);\n\n      if (this.options.deepLinking) {\n        var hash = this.$active[0].getAttribute('href');\n        window.location.hash.replace(hash, '');\n      }\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._deepLinkScroll);\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n    }\n  }]);\n\n  return Magellan;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__[\"Plugin\"]);\n/**\n * Default settings for plugin\n */\n\n\nMagellan.defaults = {\n  /**\n   * Amount of time, in ms, the animated scrolling should take between locations.\n   * @option\n   * @type {number}\n   * @default 500\n   */\n  animationDuration: 500,\n\n  /**\n   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.\n   * @option\n   * @type {string}\n   * @default 'linear'\n   * @see {@link https://api.jquery.com/animate|Jquery animate}\n   */\n  animationEasing: 'linear',\n\n  /**\n   * Number of pixels to use as a marker for location changes.\n   * @option\n   * @type {number}\n   * @default 50\n   */\n  threshold: 50,\n\n  /**\n   * Class applied to the active locations link on the magellan container.\n   * @option\n   * @type {string}\n   * @default 'is-active'\n   */\n  activeClass: 'is-active',\n\n  /**\n   * Allows the script to manipulate the url of the current page, and if supported, alter the history.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLinking: false,\n\n  /**\n   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  offset: 0\n};\n\n\n//# sourceURL=webpack:///./js/foundation.magellan.js?");

// /***/ }),

// /***/ "./js/foundation.offcanvas.js":
// /*!************************************!*\
//   !*** ./js/foundation.offcanvas.js ***!
//   \************************************/
// /*! exports provided: OffCanvas */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OffCanvas\", function() { return OffCanvas; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n/**\n * OffCanvas module.\n * @module foundation.offcanvas\n * @requires foundation.util.keyboard\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.triggers\n */\n\nvar OffCanvas =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(OffCanvas, _Plugin);\n\n  function OffCanvas() {\n    _classCallCheck(this, OffCanvas);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(OffCanvas).apply(this, arguments));\n  }\n\n  _createClass(OffCanvas, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of an off-canvas wrapper.\n     * @class\n     * @name OffCanvas\n     * @fires OffCanvas#init\n     * @param {Object} element - jQuery object to initialize.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      var _this2 = this;\n\n      this.className = 'OffCanvas'; // ie9 back compat\n\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, OffCanvas.defaults, this.$element.data(), options);\n      this.contentClasses = {\n        base: [],\n        reveal: []\n      };\n      this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.position = 'left';\n      this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.nested = !!this.options.nested; // Defines the CSS transition/position classes of the off-canvas content container.\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {\n        _this2.contentClasses.base.push('has-transition-' + val);\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {\n        _this2.contentClasses.base.push('has-position-' + val);\n\n        _this2.contentClasses.reveal.push('has-reveal-' + val);\n      }); // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"MediaQuery\"]._init();\n\n      this._init();\n\n      this._events();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].register('OffCanvas', {\n        'ESCAPE': 'close'\n      });\n    }\n    /**\n     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var id = this.$element.attr('id');\n      this.$element.attr('aria-hidden', 'true'); // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)\n\n      if (this.options.contentId) {\n        this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);\n      } else if (this.$element.siblings('[data-off-canvas-content]').length) {\n        this.$content = this.$element.siblings('[data-off-canvas-content]').first();\n      } else {\n        this.$content = this.$element.closest('[data-off-canvas-content]').first();\n      }\n\n      if (!this.options.contentId) {\n        // Assume that the off-canvas element is nested if it isn't a sibling of the content\n        this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;\n      } else if (this.options.contentId && this.options.nested === null) {\n        // Warning if using content ID without setting the nested option\n        // Once the element is nested it is required to work properly in this case\n        console.warn('Remember to use the nested option if using the content ID option!');\n      }\n\n      if (this.nested === true) {\n        // Force transition overlap if nested\n        this.options.transition = 'overlap'; // Remove appropriate classes if already assigned in markup\n\n        this.$element.removeClass('is-transition-push');\n      }\n\n      this.$element.addClass(\"is-transition-\".concat(this.options.transition, \" is-closed\")); // Find triggers that affect this element and add aria-expanded to them\n\n      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open=\"' + id + '\"], [data-close=\"' + id + '\"], [data-toggle=\"' + id + '\"]').attr('aria-expanded', 'false').attr('aria-controls', id); // Get position by checking for related CSS class\n\n      this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\\-(left|top|right|bottom)/)[1] : this.position; // Add an overlay over the content if necessary\n\n      if (this.options.contentOverlay === true) {\n        var overlay = document.createElement('div');\n        var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css(\"position\") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';\n        overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);\n        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);\n\n        if (overlayPosition === 'is-overlay-fixed') {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);\n        } else {\n          this.$content.append(this.$overlay);\n        }\n      } // Get the revealOn option from the class.\n\n\n      var revealOnRegExp = new RegExp(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"RegExpEscape\"])(this.options.revealClass) + '([^\\\\s]+)', 'g');\n      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);\n\n      if (revealOnClass) {\n        this.options.isRevealed = true;\n        this.options.revealOn = this.options.revealOn || revealOnClass[1];\n      } // Ensure the `reveal-on-*` class is set.\n\n\n      if (this.options.isRevealed === true && this.options.revealOn) {\n        this.$element.first().addClass(\"\".concat(this.options.revealClass).concat(this.options.revealOn));\n\n        this._setMQChecker();\n      }\n\n      if (this.options.transitionTime) {\n        this.$element.css('transition-duration', this.options.transitionTime);\n      } // Initally remove all transition/position CSS classes from off-canvas content container.\n\n\n      this._removeContentClasses();\n    }\n    /**\n     * Adds event handlers to the off-canvas wrapper and the exit overlay.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this.$element.off('.zf.trigger .zf.offcanvas').on({\n        'open.zf.trigger': this.open.bind(this),\n        'close.zf.trigger': this.close.bind(this),\n        'toggle.zf.trigger': this.toggle.bind(this),\n        'keydown.zf.offcanvas': this._handleKeyboard.bind(this)\n      });\n\n      if (this.options.closeOnClick === true) {\n        var $target = this.options.contentOverlay ? this.$overlay : this.$content;\n        $target.on({\n          'click.zf.offcanvas': this.close.bind(this)\n        });\n      }\n    }\n    /**\n     * Applies event listener for elements that will reveal at certain breakpoints.\n     * @private\n     */\n\n  }, {\n    key: \"_setMQChecker\",\n    value: function _setMQChecker() {\n      var _this = this;\n\n      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"MediaQuery\"].atLeast(_this.options.revealOn)) {\n          _this.reveal(true);\n        }\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"MediaQuery\"].atLeast(_this.options.revealOn)) {\n          _this.reveal(true);\n        } else {\n          _this.reveal(false);\n        }\n      });\n    }\n    /**\n     * Removes the CSS transition/position classes of the off-canvas content container.\n     * Removing the classes is important when another off-canvas gets opened that uses the same content container.\n     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.\n     * @private\n     */\n\n  }, {\n    key: \"_removeContentClasses\",\n    value: function _removeContentClasses(hasReveal) {\n      if (typeof hasReveal !== 'boolean') {\n        this.$content.removeClass(this.contentClasses.base.join(' '));\n      } else if (hasReveal === false) {\n        this.$content.removeClass(\"has-reveal-\".concat(this.position));\n      }\n    }\n    /**\n     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.\n     * Beforehand any transition/position class gets removed.\n     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.\n     * @private\n     */\n\n  }, {\n    key: \"_addContentClasses\",\n    value: function _addContentClasses(hasReveal) {\n      this._removeContentClasses(hasReveal);\n\n      if (typeof hasReveal !== 'boolean') {\n        this.$content.addClass(\"has-transition-\".concat(this.options.transition, \" has-position-\").concat(this.position));\n      } else if (hasReveal === true) {\n        this.$content.addClass(\"has-reveal-\".concat(this.position));\n      }\n    }\n    /**\n     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.\n     * @param {Boolean} isRevealed - true if element should be revealed.\n     * @function\n     */\n\n  }, {\n    key: \"reveal\",\n    value: function reveal(isRevealed) {\n      if (isRevealed) {\n        this.close();\n        this.isRevealed = true;\n        this.$element.attr('aria-hidden', 'false');\n        this.$element.off('open.zf.trigger toggle.zf.trigger');\n        this.$element.removeClass('is-closed');\n      } else {\n        this.isRevealed = false;\n        this.$element.attr('aria-hidden', 'true');\n        this.$element.off('open.zf.trigger toggle.zf.trigger').on({\n          'open.zf.trigger': this.open.bind(this),\n          'toggle.zf.trigger': this.toggle.bind(this)\n        });\n        this.$element.addClass('is-closed');\n      }\n\n      this._addContentClasses(isRevealed);\n    }\n    /**\n     * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.\n     * @private\n     */\n\n  }, {\n    key: \"_stopScrolling\",\n    value: function _stopScrolling(event) {\n      return false;\n    } // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios\n    // Only really works for y, not sure how to extend to x or if we need to.\n\n  }, {\n    key: \"_recordScrollable\",\n    value: function _recordScrollable(event) {\n      var elem = this; // called from event handler context with this as elem\n      // If the element is scrollable (content overflows), then...\n\n      if (elem.scrollHeight !== elem.clientHeight) {\n        // If we're at the top, scroll down one pixel to allow scrolling up\n        if (elem.scrollTop === 0) {\n          elem.scrollTop = 1;\n        } // If we're at the bottom, scroll up one pixel to allow scrolling down\n\n\n        if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {\n          elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;\n        }\n      }\n\n      elem.allowUp = elem.scrollTop > 0;\n      elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;\n      elem.lastY = event.originalEvent.pageY;\n    }\n  }, {\n    key: \"_stopScrollPropagation\",\n    value: function _stopScrollPropagation(event) {\n      var elem = this; // called from event handler context with this as elem\n\n      var up = event.pageY < elem.lastY;\n      var down = !up;\n      elem.lastY = event.pageY;\n\n      if (up && elem.allowUp || down && elem.allowDown) {\n        event.stopPropagation();\n      } else {\n        event.preventDefault();\n      }\n    }\n    /**\n     * Opens the off-canvas menu.\n     * @function\n     * @param {Object} event - Event object passed from listener.\n     * @param {jQuery} trigger - element that triggered the off-canvas to open.\n     * @fires Offcanvas#opened\n     * @todo also trigger 'open' event?\n     */\n\n  }, {\n    key: \"open\",\n    value: function open(event, trigger) {\n      if (this.$element.hasClass('is-open') || this.isRevealed) {\n        return;\n      }\n\n      var _this = this;\n\n      if (trigger) {\n        this.$lastTrigger = trigger;\n      }\n\n      if (this.options.forceTo === 'top') {\n        window.scrollTo(0, 0);\n      } else if (this.options.forceTo === 'bottom') {\n        window.scrollTo(0, document.body.scrollHeight);\n      }\n\n      if (this.options.transitionTime && this.options.transition !== 'overlap') {\n        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);\n      } else {\n        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');\n      }\n\n      this.$element.addClass('is-open').removeClass('is-closed');\n      this.$triggers.attr('aria-expanded', 'true');\n      this.$element.attr('aria-hidden', 'false');\n      this.$content.addClass('is-open-' + this.position); // If `contentScroll` is set to false, add class and disable scrolling on touch devices.\n\n      if (this.options.contentScroll === false) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);\n        this.$element.on('touchstart', this._recordScrollable);\n        this.$element.on('touchmove', this._stopScrollPropagation);\n      }\n\n      if (this.options.contentOverlay === true) {\n        this.$overlay.addClass('is-visible');\n      }\n\n      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {\n        this.$overlay.addClass('is-closable');\n      }\n\n      if (this.options.autoFocus === true) {\n        this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"transitionend\"])(this.$element), function () {\n          if (!_this.$element.hasClass('is-open')) {\n            return; // exit if prematurely closed\n          }\n\n          var canvasFocus = _this.$element.find('[data-autofocus]');\n\n          if (canvasFocus.length) {\n            canvasFocus.eq(0).focus();\n          } else {\n            _this.$element.find('a, button').eq(0).focus();\n          }\n        });\n      }\n\n      if (this.options.trapFocus === true) {\n        this.$content.attr('tabindex', '-1');\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].trapFocus(this.$element);\n      }\n\n      this._addContentClasses();\n      /**\n       * Fires when the off-canvas menu opens.\n       * @event Offcanvas#opened\n       */\n\n\n      this.$element.trigger('opened.zf.offcanvas');\n    }\n    /**\n     * Closes the off-canvas menu.\n     * @function\n     * @param {Function} cb - optional cb to fire after closure.\n     * @fires Offcanvas#closed\n     */\n\n  }, {\n    key: \"close\",\n    value: function close(cb) {\n      if (!this.$element.hasClass('is-open') || this.isRevealed) {\n        return;\n      }\n\n      var _this = this;\n\n      this.$element.removeClass('is-open');\n      this.$element.attr('aria-hidden', 'true')\n      /**\n       * Fires when the off-canvas menu opens.\n       * @event Offcanvas#closed\n       */\n      .trigger('closed.zf.offcanvas');\n      this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom'); // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.\n\n      if (this.options.contentScroll === false) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);\n        this.$element.off('touchstart', this._recordScrollable);\n        this.$element.off('touchmove', this._stopScrollPropagation);\n      }\n\n      if (this.options.contentOverlay === true) {\n        this.$overlay.removeClass('is-visible');\n      }\n\n      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {\n        this.$overlay.removeClass('is-closable');\n      }\n\n      this.$triggers.attr('aria-expanded', 'false');\n\n      if (this.options.trapFocus === true) {\n        this.$content.removeAttr('tabindex');\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].releaseFocus(this.$element);\n      } // Listen to transitionEnd and add class when done.\n\n\n      this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"transitionend\"])(this.$element), function (e) {\n        _this.$element.addClass('is-closed');\n\n        _this._removeContentClasses();\n      });\n    }\n    /**\n     * Toggles the off-canvas menu open or closed.\n     * @function\n     * @param {Object} event - Event object passed from listener.\n     * @param {jQuery} trigger - element that triggered the off-canvas to open.\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle(event, trigger) {\n      if (this.$element.hasClass('is-open')) {\n        this.close(event, trigger);\n      } else {\n        this.open(event, trigger);\n      }\n    }\n    /**\n     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_handleKeyboard\",\n    value: function _handleKeyboard(e) {\n      var _this3 = this;\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].handleKey(e, 'OffCanvas', {\n        close: function close() {\n          _this3.close();\n\n          _this3.$lastTrigger.focus();\n\n          return true;\n        },\n        handled: function handled() {\n          e.stopPropagation();\n          e.preventDefault();\n        }\n      });\n    }\n    /**\n     * Destroys the offcanvas plugin.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.close();\n      this.$element.off('.zf.trigger .zf.offcanvas');\n      this.$overlay.off('.zf.offcanvas');\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n    }\n  }]);\n\n  return OffCanvas;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__[\"Plugin\"]);\n\nOffCanvas.defaults = {\n  /**\n   * Allow the user to click outside of the menu to close it.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  closeOnClick: true,\n\n  /**\n   * Adds an overlay on top of `[data-off-canvas-content]`.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  contentOverlay: true,\n\n  /**\n   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.\n   * @option\n   * @type {?string}\n   * @default null\n   */\n  contentId: null,\n\n  /**\n   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.\n   * @option\n   * @type {boolean}\n   * @default null\n   */\n  nested: null,\n\n  /**\n   * Enable/disable scrolling of the main content when an off canvas panel is open.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  contentScroll: true,\n\n  /**\n   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.\n   * @option\n   * @type {number}\n   * @default null\n   */\n  transitionTime: null,\n\n  /**\n   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.\n   * @option\n   * @type {string}\n   * @default push\n   */\n  transition: 'push',\n\n  /**\n   * Force the page to scroll to top or bottom on open.\n   * @option\n   * @type {?string}\n   * @default null\n   */\n  forceTo: null,\n\n  /**\n   * Allow the offcanvas to remain open for certain breakpoints.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  isRevealed: false,\n\n  /**\n   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.\n   * @option\n   * @type {?string}\n   * @default null\n   */\n  revealOn: null,\n\n  /**\n   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  autoFocus: true,\n\n  /**\n   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.\n   * @option\n   * @type {string}\n   * @default reveal-for-\n   * @todo improve the regex testing for this.\n   */\n  revealClass: 'reveal-for-',\n\n  /**\n   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  trapFocus: false\n};\n\n\n//# sourceURL=webpack:///./js/foundation.offcanvas.js?");

// /***/ }),

// /***/ "./js/foundation.orbit.js":
// /*!********************************!*\
//   !*** ./js/foundation.orbit.js ***!
//   \********************************/
// /*! exports provided: Orbit */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Orbit\", function() { return Orbit; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.timer */ \"./js/foundation.util.timer.js\");\n/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.imageLoader */ \"./js/foundation.util.imageLoader.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n/**\n * Orbit module.\n * @module foundation.orbit\n * @requires foundation.util.keyboard\n * @requires foundation.util.motion\n * @requires foundation.util.timer\n * @requires foundation.util.imageLoader\n * @requires foundation.util.touch\n */\n\nvar Orbit =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Orbit, _Plugin);\n\n  function Orbit() {\n    _classCallCheck(this, Orbit);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Orbit).apply(this, arguments));\n  }\n\n  _createClass(Orbit, [{\n    key: \"_setup\",\n\n    /**\n    * Creates a new instance of an orbit carousel.\n    * @class\n    * @name Orbit\n    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.\n    * @param {Object} options - Overrides to the default plugin settings.\n    */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Orbit.defaults, this.$element.data(), options);\n      this.className = 'Orbit'; // ie9 back compat\n\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__[\"Touch\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Touch init is idempotent, we just need to make sure it's initialied.\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('Orbit', {\n        'ltr': {\n          'ARROW_RIGHT': 'next',\n          'ARROW_LEFT': 'previous'\n        },\n        'rtl': {\n          'ARROW_LEFT': 'next',\n          'ARROW_RIGHT': 'previous'\n        }\n      });\n    }\n    /**\n    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide\n      this._reset();\n\n      this.$wrapper = this.$element.find(\".\".concat(this.options.containerClass));\n      this.$slides = this.$element.find(\".\".concat(this.options.slideClass));\n      var $images = this.$element.find('img'),\n          initActive = this.$slides.filter('.is-active'),\n          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__[\"GetYoDigits\"])(6, 'orbit');\n      this.$element.attr({\n        'data-resize': id,\n        'id': id\n      });\n\n      if (!initActive.length) {\n        this.$slides.eq(0).addClass('is-active');\n      }\n\n      if (!this.options.useMUI) {\n        this.$slides.addClass('no-motionui');\n      }\n\n      if ($images.length) {\n        Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__[\"onImagesLoaded\"])($images, this._prepareForOrbit.bind(this));\n      } else {\n        this._prepareForOrbit(); //hehe\n\n      }\n\n      if (this.options.bullets) {\n        this._loadBullets();\n      }\n\n      this._events();\n\n      if (this.options.autoPlay && this.$slides.length > 1) {\n        this.geoSync();\n      }\n\n      if (this.options.accessible) {\n        // allow wrapper to be focusable to enable arrow navigation\n        this.$wrapper.attr('tabindex', 0);\n      }\n    }\n    /**\n    * Creates a jQuery collection of bullets, if they are being used.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_loadBullets\",\n    value: function _loadBullets() {\n      this.$bullets = this.$element.find(\".\".concat(this.options.boxOfBullets)).find('button');\n    }\n    /**\n    * Sets a `timer` object on the orbit, and starts the counter for the next slide.\n    * @function\n    */\n\n  }, {\n    key: \"geoSync\",\n    value: function geoSync() {\n      var _this = this;\n\n      this.timer = new _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__[\"Timer\"](this.$element, {\n        duration: this.options.timerDelay,\n        infinite: false\n      }, function () {\n        _this.changeSlide(true);\n      });\n      this.timer.start();\n    }\n    /**\n    * Sets wrapper and slide heights for the orbit.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_prepareForOrbit\",\n    value: function _prepareForOrbit() {\n      var _this = this;\n\n      this._setWrapperHeight();\n    }\n    /**\n    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.\n    * @function\n    * @private\n    * @param {Function} cb - a callback function to fire when complete.\n    */\n\n  }, {\n    key: \"_setWrapperHeight\",\n    value: function _setWrapperHeight(cb) {\n      //rewrite this to `for` loop\n      var max = 0,\n          temp,\n          counter = 0,\n          _this = this;\n\n      this.$slides.each(function () {\n        temp = this.getBoundingClientRect().height;\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-slide', counter); // hide all slides but the active one\n\n        if (!/mui/g.test(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({\n            'display': 'none'\n          });\n        }\n\n        max = temp > max ? temp : max;\n        counter++;\n      });\n\n      if (counter === this.$slides.length) {\n        this.$wrapper.css({\n          'height': max\n        }); //only change the wrapper height property once.\n\n        if (cb) {\n          cb(max);\n        } //fire callback with max height dimension.\n\n      }\n    }\n    /**\n    * Sets the max-height of each slide.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_setSlideHeight\",\n    value: function _setSlideHeight(height) {\n      this.$slides.each(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('max-height', height);\n      });\n    }\n    /**\n    * Adds event listeners to basically everything within the element.\n    * @function\n    * @private\n    */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this; //***************************************\n      //**Now using custom event - thanks to:**\n      //**      Yohai Ararat of Toronto      **\n      //***************************************\n      //\n\n\n      this.$element.off('.resizeme.zf.trigger').on({\n        'resizeme.zf.trigger': this._prepareForOrbit.bind(this)\n      });\n\n      if (this.$slides.length > 1) {\n        if (this.options.swipe) {\n          this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {\n            e.preventDefault();\n\n            _this.changeSlide(true);\n          }).on('swiperight.zf.orbit', function (e) {\n            e.preventDefault();\n\n            _this.changeSlide(false);\n          });\n        } //***************************************\n\n\n        if (this.options.autoPlay) {\n          this.$slides.on('click.zf.orbit', function () {\n            _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);\n\n            _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();\n          });\n\n          if (this.options.pauseOnHover) {\n            this.$element.on('mouseenter.zf.orbit', function () {\n              _this.timer.pause();\n            }).on('mouseleave.zf.orbit', function () {\n              if (!_this.$element.data('clickedOn')) {\n                _this.timer.start();\n              }\n            });\n          }\n        }\n\n        if (this.options.navButtons) {\n          var $controls = this.$element.find(\".\".concat(this.options.nextClass, \", .\").concat(this.options.prevClass));\n          $controls.attr('tabindex', 0) //also need to handle enter/return and spacebar key presses\n          .on('click.zf.orbit touchend.zf.orbit', function (e) {\n            e.preventDefault();\n\n            _this.changeSlide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(_this.options.nextClass));\n          });\n        }\n\n        if (this.options.bullets) {\n          this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {\n            if (/is-active/g.test(this.className)) {\n              return false;\n            } //if this is active, kick out of function.\n\n\n            var idx = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('slide'),\n                ltr = idx > _this.$slides.filter('.is-active').data('slide'),\n                $slide = _this.$slides.eq(idx);\n\n            _this.changeSlide(ltr, $slide, idx);\n          });\n        }\n\n        if (this.options.accessible) {\n          this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {\n            // handle keyboard event with keyboard util\n            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'Orbit', {\n              next: function next() {\n                _this.changeSlide(true);\n              },\n              previous: function previous() {\n                _this.changeSlide(false);\n              },\n              handled: function handled() {\n                // if bullet is focused, make sure focus moves\n                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is(_this.$bullets)) {\n                  _this.$bullets.filter('.is-active').focus();\n                }\n              }\n            });\n          });\n        }\n      }\n    }\n    /**\n     * Resets Orbit so it can be reinitialized\n     */\n\n  }, {\n    key: \"_reset\",\n    value: function _reset() {\n      // Don't do anything if there are no slides (first run)\n      if (typeof this.$slides == 'undefined') {\n        return;\n      }\n\n      if (this.$slides.length > 1) {\n        // Remove old events\n        this.$element.off('.zf.orbit').find('*').off('.zf.orbit'); // Restart timer if autoPlay is enabled\n\n        if (this.options.autoPlay) {\n          this.timer.restart();\n        } // Reset all sliddes\n\n\n        this.$slides.each(function (el) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();\n        }); // Show the first slide\n\n        this.$slides.first().addClass('is-active').show(); // Triggers when the slide has finished animating\n\n        this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]); // Select first bullet if bullets are present\n\n        if (this.options.bullets) {\n          this._updateBullets(0);\n        }\n      }\n    }\n    /**\n    * Changes the current slide to a new one.\n    * @function\n    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.\n    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.\n    * @param {Number} idx - the index of the new slide in its collection, if one chosen.\n    * @fires Orbit#slidechange\n    */\n\n  }, {\n    key: \"changeSlide\",\n    value: function changeSlide(isLTR, chosenSlide, idx) {\n      if (!this.$slides) {\n        return;\n      } // Don't freak out if we're in the middle of cleanup\n\n\n      var $curSlide = this.$slides.filter('.is-active').eq(0);\n\n      if (/mui/g.test($curSlide[0].className)) {\n        return false;\n      } //if the slide is currently animating, kick out of the function\n\n\n      var $firstSlide = this.$slides.first(),\n          $lastSlide = this.$slides.last(),\n          dirIn = isLTR ? 'Right' : 'Left',\n          dirOut = isLTR ? 'Left' : 'Right',\n          _this = this,\n          $newSlide;\n\n      if (!chosenSlide) {\n        //most of the time, this will be auto played or clicked from the navButtons.\n        $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!\n        this.options.infiniteWrap ? $curSlide.next(\".\".concat(this.options.slideClass)).length ? $curSlide.next(\".\".concat(this.options.slideClass)) : $firstSlide : $curSlide.next(\".\".concat(this.options.slideClass)) : //pick next slide if moving left to right\n        this.options.infiniteWrap ? $curSlide.prev(\".\".concat(this.options.slideClass)).length ? $curSlide.prev(\".\".concat(this.options.slideClass)) : $lastSlide : $curSlide.prev(\".\".concat(this.options.slideClass)); //pick prev slide if moving right to left\n      } else {\n        $newSlide = chosenSlide;\n      }\n\n      if ($newSlide.length) {\n        /**\n        * Triggers before the next slide starts animating in and only if a next slide has been found.\n        * @event Orbit#beforeslidechange\n        */\n        this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);\n\n        if (this.options.bullets) {\n          idx = idx || this.$slides.index($newSlide); //grab index to update bullets\n\n          this._updateBullets(idx);\n        }\n\n        if (this.options.useMUI && !this.$element.is(':hidden')) {\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateIn($newSlide.addClass('is-active'), this.options[\"animInFrom\".concat(dirIn)], function () {\n            $newSlide.css({\n              'display': 'block'\n            }).attr('aria-live', 'polite');\n          });\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateOut($curSlide.removeClass('is-active'), this.options[\"animOutTo\".concat(dirOut)], function () {\n            $curSlide.removeAttr('aria-live');\n\n            if (_this.options.autoPlay && !_this.timer.isPaused) {\n              _this.timer.restart();\n            } //do stuff?\n\n          });\n        } else {\n          $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();\n          $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();\n\n          if (this.options.autoPlay && !this.timer.isPaused) {\n            this.timer.restart();\n          }\n        }\n        /**\n        * Triggers when the slide has finished animating in.\n        * @event Orbit#slidechange\n        */\n\n\n        this.$element.trigger('slidechange.zf.orbit', [$newSlide]);\n      }\n    }\n    /**\n    * Updates the active state of the bullets, if displayed.\n    * @function\n    * @private\n    * @param {Number} idx - the index of the current slide.\n    */\n\n  }, {\n    key: \"_updateBullets\",\n    value: function _updateBullets(idx) {\n      var $oldBullet = this.$element.find(\".\".concat(this.options.boxOfBullets)).find('.is-active').removeClass('is-active').blur(),\n          span = $oldBullet.find('span:last').detach(),\n          $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);\n    }\n    /**\n    * Destroys the carousel and hides the element.\n    * @function\n    */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();\n    }\n  }]);\n\n  return Orbit;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__[\"Plugin\"]);\n\nOrbit.defaults = {\n  /**\n  * Tells the JS to look for and loadBullets.\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  bullets: true,\n\n  /**\n  * Tells the JS to apply event listeners to nav buttons\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  navButtons: true,\n\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {string}\n  * @default 'slide-in-right'\n  */\n  animInFromRight: 'slide-in-right',\n\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {string}\n  * @default 'slide-out-right'\n  */\n  animOutToRight: 'slide-out-right',\n\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {string}\n  * @default 'slide-in-left'\n  *\n  */\n  animInFromLeft: 'slide-in-left',\n\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {string}\n  * @default 'slide-out-left'\n  */\n  animOutToLeft: 'slide-out-left',\n\n  /**\n  * Allows Orbit to automatically animate on page load.\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  autoPlay: true,\n\n  /**\n  * Amount of time, in ms, between slide transitions\n  * @option\n   * @type {number}\n  * @default 5000\n  */\n  timerDelay: 5000,\n\n  /**\n  * Allows Orbit to infinitely loop through the slides\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  infiniteWrap: true,\n\n  /**\n  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  swipe: true,\n\n  /**\n  * Allows the timing function to pause animation on hover.\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  pauseOnHover: true,\n\n  /**\n  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  accessible: true,\n\n  /**\n  * Class applied to the container of Orbit\n  * @option\n   * @type {string}\n  * @default 'orbit-container'\n  */\n  containerClass: 'orbit-container',\n\n  /**\n  * Class applied to individual slides.\n  * @option\n   * @type {string}\n  * @default 'orbit-slide'\n  */\n  slideClass: 'orbit-slide',\n\n  /**\n  * Class applied to the bullet container. You're welcome.\n  * @option\n   * @type {string}\n  * @default 'orbit-bullets'\n  */\n  boxOfBullets: 'orbit-bullets',\n\n  /**\n  * Class applied to the `next` navigation button.\n  * @option\n   * @type {string}\n  * @default 'orbit-next'\n  */\n  nextClass: 'orbit-next',\n\n  /**\n  * Class applied to the `previous` navigation button.\n  * @option\n   * @type {string}\n  * @default 'orbit-previous'\n  */\n  prevClass: 'orbit-previous',\n\n  /**\n  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.\n  * @option\n   * @type {boolean}\n  * @default true\n  */\n  useMUI: true\n};\n\n\n//# sourceURL=webpack:///./js/foundation.orbit.js?");

// /***/ }),

// /***/ "./js/foundation.positionable.js":
// /*!***************************************!*\
//   !*** ./js/foundation.positionable.js ***!
//   \***************************************/
// /*! exports provided: Positionable */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Positionable\", function() { return Positionable; });\n/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.util.box */ \"./js/foundation.util.box.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar POSITIONS = ['left', 'right', 'top', 'bottom'];\nvar VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];\nvar HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];\nvar ALIGNMENTS = {\n  'left': VERTICAL_ALIGNMENTS,\n  'right': VERTICAL_ALIGNMENTS,\n  'top': HORIZONTAL_ALIGNMENTS,\n  'bottom': HORIZONTAL_ALIGNMENTS\n};\n\nfunction nextItem(item, array) {\n  var currentIdx = array.indexOf(item);\n\n  if (currentIdx === array.length - 1) {\n    return array[0];\n  } else {\n    return array[currentIdx + 1];\n  }\n}\n\nvar Positionable =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Positionable, _Plugin);\n\n  function Positionable() {\n    _classCallCheck(this, Positionable);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Positionable).apply(this, arguments));\n  }\n\n  _createClass(Positionable, [{\n    key: \"_init\",\n\n    /**\n     * Abstract class encapsulating the tether-like explicit positioning logic\n     * including repositioning based on overlap.\n     * Expects classes to define defaults for vOffset, hOffset, position,\n     * alignment, allowOverlap, and allowBottomOverlap. They can do this by\n     * extending the defaults, or (for now recommended due to the way docs are\n     * generated) by explicitly declaring them.\n     *\n     **/\n    value: function _init() {\n      this.triedPositions = {};\n      this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;\n      this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;\n      this.originalPosition = this.position;\n      this.originalAlignment = this.alignment;\n    }\n  }, {\n    key: \"_getDefaultPosition\",\n    value: function _getDefaultPosition() {\n      return 'bottom';\n    }\n  }, {\n    key: \"_getDefaultAlignment\",\n    value: function _getDefaultAlignment() {\n      switch (this.position) {\n        case 'bottom':\n        case 'top':\n          return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"rtl\"])() ? 'right' : 'left';\n\n        case 'left':\n        case 'right':\n          return 'bottom';\n      }\n    }\n    /**\n     * Adjusts the positionable possible positions by iterating through alignments\n     * and positions.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_reposition\",\n    value: function _reposition() {\n      if (this._alignmentsExhausted(this.position)) {\n        this.position = nextItem(this.position, POSITIONS);\n        this.alignment = ALIGNMENTS[this.position][0];\n      } else {\n        this._realign();\n      }\n    }\n    /**\n     * Adjusts the dropdown pane possible positions by iterating through alignments\n     * on the current position.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_realign\",\n    value: function _realign() {\n      this._addTriedPosition(this.position, this.alignment);\n\n      this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);\n    }\n  }, {\n    key: \"_addTriedPosition\",\n    value: function _addTriedPosition(position, alignment) {\n      this.triedPositions[position] = this.triedPositions[position] || [];\n      this.triedPositions[position].push(alignment);\n    }\n  }, {\n    key: \"_positionsExhausted\",\n    value: function _positionsExhausted() {\n      var isExhausted = true;\n\n      for (var i = 0; i < POSITIONS.length; i++) {\n        isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);\n      }\n\n      return isExhausted;\n    }\n  }, {\n    key: \"_alignmentsExhausted\",\n    value: function _alignmentsExhausted(position) {\n      return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;\n    } // When we're trying to center, we don't want to apply offset that's going to\n    // take us just off center, so wrap around to return 0 for the appropriate\n    // offset in those alignments.  TODO: Figure out if we want to make this\n    // configurable behavior... it feels more intuitive, especially for tooltips, but\n    // it's possible someone might actually want to start from center and then nudge\n    // slightly off.\n\n  }, {\n    key: \"_getVOffset\",\n    value: function _getVOffset() {\n      return this.options.vOffset;\n    }\n  }, {\n    key: \"_getHOffset\",\n    value: function _getHOffset() {\n      return this.options.hOffset;\n    }\n  }, {\n    key: \"_setPosition\",\n    value: function _setPosition($anchor, $element, $parent) {\n      if ($anchor.attr('aria-expanded') === 'false') {\n        return false;\n      }\n\n      var $eleDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].GetDimensions($element),\n          $anchorDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].GetDimensions($anchor);\n\n      if (!this.options.allowOverlap) {\n        // restore original position & alignment before checking overlap\n        this.position = this.originalPosition;\n        this.alignment = this.originalAlignment;\n      }\n\n      $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));\n\n      if (!this.options.allowOverlap) {\n        var overlaps = {};\n        var minOverlap = 100000000; // default coordinates to how we start, in case we can't figure out better\n\n        var minCoordinates = {\n          position: this.position,\n          alignment: this.alignment\n        };\n\n        while (!this._positionsExhausted()) {\n          var overlap = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);\n\n          if (overlap === 0) {\n            return;\n          }\n\n          if (overlap < minOverlap) {\n            minOverlap = overlap;\n            minCoordinates = {\n              position: this.position,\n              alignment: this.alignment\n            };\n          }\n\n          this._reposition();\n\n          $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));\n        } // If we get through the entire loop, there was no non-overlapping\n        // position available. Pick the version with least overlap.\n\n\n        this.position = minCoordinates.position;\n        this.alignment = minCoordinates.alignment;\n        $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__[\"Box\"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));\n      }\n    }\n  }]);\n\n  return Positionable;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__[\"Plugin\"]);\n\nPositionable.defaults = {\n  /**\n   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  position: 'auto',\n\n  /**\n   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  alignment: 'auto',\n\n  /**\n   * Allow overlap of container/window. If false, dropdown positionable first\n   * try to position as defined by data-position and data-alignment, but\n   * reposition if it would cause an overflow.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  allowOverlap: false,\n\n  /**\n   * Allow overlap of only the bottom of the container. This is the most common\n   * behavior for dropdowns, allowing the dropdown to extend the bottom of the\n   * screen but not otherwise influence or break out of the container.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  allowBottomOverlap: true,\n\n  /**\n   * Number of pixels the positionable should be separated vertically from anchor\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  vOffset: 0,\n\n  /**\n   * Number of pixels the positionable should be separated horizontally from anchor\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  hOffset: 0\n};\n\n\n//# sourceURL=webpack:///./js/foundation.positionable.js?");

// /***/ }),

// /***/ "./js/foundation.responsiveAccordionTabs.js":
// /*!**************************************************!*\
//   !*** ./js/foundation.responsiveAccordionTabs.js ***!
//   \**************************************************/
// /*! exports provided: ResponsiveAccordionTabs */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResponsiveAccordionTabs\", function() { return ResponsiveAccordionTabs; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.accordion */ \"./js/foundation.accordion.js\");\n/* harmony import */ var _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.tabs */ \"./js/foundation.tabs.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n // The plugin matches the plugin classes with these plugin instances.\n\nvar MenuPlugins = {\n  tabs: {\n    cssClass: 'tabs',\n    plugin: _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__[\"Tabs\"]\n  },\n  accordion: {\n    cssClass: 'accordion',\n    plugin: _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__[\"Accordion\"]\n  }\n};\n/**\n * ResponsiveAccordionTabs module.\n * @module foundation.responsiveAccordionTabs\n * @requires foundation.util.motion\n * @requires foundation.accordion\n * @requires foundation.tabs\n */\n\nvar ResponsiveAccordionTabs =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(ResponsiveAccordionTabs, _Plugin);\n\n  function ResponsiveAccordionTabs() {\n    _classCallCheck(this, ResponsiveAccordionTabs);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveAccordionTabs).apply(this, arguments));\n  }\n\n  _createClass(ResponsiveAccordionTabs, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a responsive accordion tabs.\n     * @class\n     * @name ResponsiveAccordionTabs\n     * @fires ResponsiveAccordionTabs#init\n     * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.$element.data(), options);\n      this.rules = this.$element.data('responsive-accordion-tabs');\n      this.currentMq = null;\n      this.currentPlugin = null;\n      this.className = 'ResponsiveAccordionTabs'; // ie9 back compat\n\n      if (!this.$element.attr('id')) {\n        this.$element.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'responsiveaccordiontabs'));\n      }\n\n      ;\n\n      this._init();\n\n      this._events();\n    }\n    /**\n     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of \"classes\" to an object of rules\n\n\n      if (typeof this.rules === 'string') {\n        var rulesTree = {}; // Parse rules from \"classes\" pulled from data attribute\n\n        var rules = this.rules.split(' '); // Iterate through every rule found\n\n        for (var i = 0; i < rules.length; i++) {\n          var rule = rules[i].split('-');\n          var ruleSize = rule.length > 1 ? rule[0] : 'small';\n          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];\n\n          if (MenuPlugins[rulePlugin] !== null) {\n            rulesTree[ruleSize] = MenuPlugins[rulePlugin];\n          }\n        }\n\n        this.rules = rulesTree;\n      }\n\n      this._getAllOptions();\n\n      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {\n        this._checkMediaQueries();\n      }\n    }\n  }, {\n    key: \"_getAllOptions\",\n    value: function _getAllOptions() {\n      //get all defaults and options\n      var _this = this;\n\n      _this.allOptions = {};\n\n      for (var key in MenuPlugins) {\n        if (MenuPlugins.hasOwnProperty(key)) {\n          var obj = MenuPlugins[key];\n\n          try {\n            var dummyPlugin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');\n            var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);\n\n            for (var keyKey in tmpPlugin.options) {\n              if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {\n                var objObj = tmpPlugin.options[keyKey];\n                _this.allOptions[keyKey] = objObj;\n              }\n            }\n\n            tmpPlugin.destroy();\n          } catch (e) {}\n        }\n      }\n    }\n    /**\n     * Initializes events for the Menu.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._changedZfMediaQueryHandler);\n    }\n    /**\n     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_checkMediaQueries\",\n    value: function _checkMediaQueries() {\n      var matchedMq,\n          _this = this; // Iterate through each rule and find the last matching rule\n\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].atLeast(key)) {\n          matchedMq = key;\n        }\n      }); // No match? No dice\n\n      if (!matchedMq) return; // Plugin already initialized? We good\n\n      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {\n        _this.$element.removeClass(value.cssClass);\n      }); // Add the CSS class for the new plugin\n\n      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin\n\n      if (this.currentPlugin) {\n        //don't know why but on nested elements data zfPlugin get's lost\n        if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);\n        this.currentPlugin.destroy();\n      }\n\n      this._handleMarkup(this.rules[matchedMq].cssClass);\n\n      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});\n      this.storezfData = this.currentPlugin.$element.data('zfPlugin');\n    }\n  }, {\n    key: \"_handleMarkup\",\n    value: function _handleMarkup(toSet) {\n      var _this = this,\n          fromString = 'accordion';\n\n      var $panels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + this.$element.attr('id') + ']');\n      if ($panels.length) fromString = 'tabs';\n\n      if (fromString === toSet) {\n        return;\n      }\n\n      ;\n      var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';\n      var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';\n      this.$element.removeAttr('role');\n      var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');\n      var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');\n\n      if (fromString === 'tabs') {\n        $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');\n        $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');\n      } else {\n        $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');\n      }\n\n      ;\n      $panels.css({\n        display: '',\n        visibility: ''\n      });\n      $liHeads.css({\n        display: '',\n        visibility: ''\n      });\n\n      if (toSet === 'accordion') {\n        $panels.each(function (key, value) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({\n            height: ''\n          });\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id=\"tabs-placeholder-' + _this.$element.attr('id') + '\"></div>').detach();\n          $liHeads.addClass('accordion-item').attr('data-accordion-item', '');\n          $liHeadsA.addClass('accordion-title');\n        });\n      } else if (toSet === 'tabs') {\n        var $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']');\n        var $placeholder = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs-placeholder-' + _this.$element.attr('id'));\n\n        if ($placeholder.length) {\n          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class=\"tabs-content\"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));\n          $placeholder.remove();\n        } else {\n          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class=\"tabs-content\"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));\n        }\n\n        ;\n        $panels.each(function (key, value) {\n          var tempValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($tabsContent).addClass(tabsPanel);\n          var hash = $liHeadsA.get(key).hash.slice(1);\n          var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'accordion');\n\n          if (hash !== id) {\n            if (hash !== '') {\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);\n            } else {\n              hash = id;\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href', jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);\n            }\n\n            ;\n          }\n\n          ;\n          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeads.get(key)).hasClass('is-active');\n\n          if (isActive) {\n            tempValue.addClass('is-active');\n          }\n\n          ;\n        });\n        $liHeads.addClass(tabsTitle);\n      }\n\n      ;\n    }\n    /**\n     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      if (this.currentPlugin) this.currentPlugin.destroy();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._changedZfMediaQueryHandler);\n    }\n  }]);\n\n  return ResponsiveAccordionTabs;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__[\"Plugin\"]);\n\nResponsiveAccordionTabs.defaults = {};\n\n\n//# sourceURL=webpack:///./js/foundation.responsiveAccordionTabs.js?");

// /***/ }),

// /***/ "./js/foundation.responsiveMenu.js":
// /*!*****************************************!*\
//   !*** ./js/foundation.responsiveMenu.js ***!
//   \*****************************************/
// /*! exports provided: ResponsiveMenu */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResponsiveMenu\", function() { return ResponsiveMenu; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.dropdownMenu */ \"./js/foundation.dropdownMenu.js\");\n/* harmony import */ var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.drilldown */ \"./js/foundation.drilldown.js\");\n/* harmony import */ var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.accordionMenu */ \"./js/foundation.accordionMenu.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar MenuPlugins = {\n  dropdown: {\n    cssClass: 'dropdown',\n    plugin: _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__[\"DropdownMenu\"]\n  },\n  drilldown: {\n    cssClass: 'drilldown',\n    plugin: _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__[\"Drilldown\"]\n  },\n  accordion: {\n    cssClass: 'accordion-menu',\n    plugin: _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__[\"AccordionMenu\"]\n  }\n}; // import \"foundation.util.triggers.js\";\n\n/**\n * ResponsiveMenu module.\n * @module foundation.responsiveMenu\n * @requires foundation.util.triggers\n * @requires foundation.util.mediaQuery\n */\n\nvar ResponsiveMenu =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(ResponsiveMenu, _Plugin);\n\n  function ResponsiveMenu() {\n    _classCallCheck(this, ResponsiveMenu);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveMenu).apply(this, arguments));\n  }\n\n  _createClass(ResponsiveMenu, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a responsive menu.\n     * @class\n     * @name ResponsiveMenu\n     * @fires ResponsiveMenu#init\n     * @param {jQuery} element - jQuery object to make into a dropdown menu.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);\n      this.rules = this.$element.data('responsive-menu');\n      this.currentMq = null;\n      this.currentPlugin = null;\n      this.className = 'ResponsiveMenu'; // ie9 back compat\n\n      this._init();\n\n      this._events();\n    }\n    /**\n     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of \"classes\" to an object of rules\n\n\n      if (typeof this.rules === 'string') {\n        var rulesTree = {}; // Parse rules from \"classes\" pulled from data attribute\n\n        var rules = this.rules.split(' '); // Iterate through every rule found\n\n        for (var i = 0; i < rules.length; i++) {\n          var rule = rules[i].split('-');\n          var ruleSize = rule.length > 1 ? rule[0] : 'small';\n          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];\n\n          if (MenuPlugins[rulePlugin] !== null) {\n            rulesTree[ruleSize] = MenuPlugins[rulePlugin];\n          }\n        }\n\n        this.rules = rulesTree;\n      }\n\n      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject(this.rules)) {\n        this._checkMediaQueries();\n      } // Add data-mutate since children may need it.\n\n\n      this.$element.attr('data-mutate', this.$element.attr('data-mutate') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__[\"GetYoDigits\"])(6, 'responsive-menu'));\n    }\n    /**\n     * Initializes events for the Menu.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {\n        _this._checkMediaQueries();\n      }); // $(window).on('resize.zf.ResponsiveMenu', function() {\n      //   _this._checkMediaQueries();\n      // });\n    }\n    /**\n     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_checkMediaQueries\",\n    value: function _checkMediaQueries() {\n      var matchedMq,\n          _this = this; // Iterate through each rule and find the last matching rule\n\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.rules, function (key) {\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].atLeast(key)) {\n          matchedMq = key;\n        }\n      }); // No match? No dice\n\n      if (!matchedMq) return; // Plugin already initialized? We good\n\n      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes\n\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(MenuPlugins, function (key, value) {\n        _this.$element.removeClass(value.cssClass);\n      }); // Add the CSS class for the new plugin\n\n      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin\n\n      if (this.currentPlugin) this.currentPlugin.destroy();\n      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});\n    }\n    /**\n     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.currentPlugin.destroy();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('.zf.ResponsiveMenu');\n    }\n  }]);\n\n  return ResponsiveMenu;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__[\"Plugin\"]);\n\nResponsiveMenu.defaults = {};\n\n\n//# sourceURL=webpack:///./js/foundation.responsiveMenu.js?");

// /***/ }),

// /***/ "./js/foundation.responsiveToggle.js":
// /*!*******************************************!*\
//   !*** ./js/foundation.responsiveToggle.js ***!
//   \*******************************************/
// /*! exports provided: ResponsiveToggle */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResponsiveToggle\", function() { return ResponsiveToggle; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n/**\n * ResponsiveToggle module.\n * @module foundation.responsiveToggle\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.motion\n */\n\nvar ResponsiveToggle =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(ResponsiveToggle, _Plugin);\n\n  function ResponsiveToggle() {\n    _classCallCheck(this, ResponsiveToggle);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveToggle).apply(this, arguments));\n  }\n\n  _createClass(ResponsiveToggle, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Tab Bar.\n     * @class\n     * @name ResponsiveToggle\n     * @fires ResponsiveToggle#init\n     * @param {jQuery} element - jQuery object to attach tab bar functionality to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);\n      this.className = 'ResponsiveToggle'; // ie9 back compat\n\n      this._init();\n\n      this._events();\n    }\n    /**\n     * Initializes the tab bar by finding the target element, toggling element, and running update().\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"]._init();\n\n      var targetID = this.$element.data('responsive-toggle');\n\n      if (!targetID) {\n        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');\n      }\n\n      this.$targetMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(targetID));\n      this.$toggler = this.$element.find('[data-toggle]').filter(function () {\n        var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');\n        return target === targetID || target === \"\";\n      });\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.options, this.$targetMenu.data()); // If they were set, parse the animation classes\n\n      if (this.options.animate) {\n        var input = this.options.animate.split(' ');\n        this.animationIn = input[0];\n        this.animationOut = input[1] || null;\n      }\n\n      this._update();\n    }\n    /**\n     * Adds necessary event handlers for the tab bar to work.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      this._updateMqHandler = this._update.bind(this);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);\n      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));\n    }\n    /**\n     * Checks the current media query to determine if the tab bar should be visible or hidden.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_update\",\n    value: function _update() {\n      // Mobile\n      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].atLeast(this.options.hideFor)) {\n        this.$element.show();\n        this.$targetMenu.hide();\n      } // Desktop\n      else {\n          this.$element.hide();\n          this.$targetMenu.show();\n        }\n    }\n    /**\n     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.\n     * @function\n     * @fires ResponsiveToggle#toggled\n     */\n\n  }, {\n    key: \"toggleMenu\",\n    value: function toggleMenu() {\n      var _this2 = this;\n\n      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"MediaQuery\"].atLeast(this.options.hideFor)) {\n        /**\n         * Fires when the element attached to the tab bar toggles.\n         * @event ResponsiveToggle#toggled\n         */\n        if (this.options.animate) {\n          if (this.$targetMenu.is(':hidden')) {\n            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateIn(this.$targetMenu, this.animationIn, function () {\n              _this2.$element.trigger('toggled.zf.responsiveToggle');\n\n              _this2.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');\n            });\n          } else {\n            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateOut(this.$targetMenu, this.animationOut, function () {\n              _this2.$element.trigger('toggled.zf.responsiveToggle');\n            });\n          }\n        } else {\n          this.$targetMenu.toggle(0);\n          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');\n          this.$element.trigger('toggled.zf.responsiveToggle');\n        }\n      }\n    }\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('.zf.responsiveToggle');\n      this.$toggler.off('.zf.responsiveToggle');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);\n    }\n  }]);\n\n  return ResponsiveToggle;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__[\"Plugin\"]);\n\nResponsiveToggle.defaults = {\n  /**\n   * The breakpoint after which the menu is always shown, and the tab bar is hidden.\n   * @option\n   * @type {string}\n   * @default 'medium'\n   */\n  hideFor: 'medium',\n\n  /**\n   * To decide if the toggle should be animated or not.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  animate: false\n};\n\n\n//# sourceURL=webpack:///./js/foundation.responsiveToggle.js?");

// /***/ }),

// /***/ "./js/foundation.reveal.js":
// /*!*********************************!*\
//   !*** ./js/foundation.reveal.js ***!
//   \*********************************/
// /*! exports provided: Reveal */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Reveal\", function() { return Reveal; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n/**\n * Reveal module.\n * @module foundation.reveal\n * @requires foundation.util.keyboard\n * @requires foundation.util.triggers\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.motion if using animations\n */\n\nvar Reveal =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Reveal, _Plugin);\n\n  function Reveal() {\n    _classCallCheck(this, Reveal);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Reveal).apply(this, arguments));\n  }\n\n  _createClass(Reveal, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Reveal.\n     * @class\n     * @name Reveal\n     * @param {jQuery} element - jQuery object to use for the modal.\n     * @param {Object} options - optional parameters.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Reveal.defaults, this.$element.data(), options);\n      this.className = 'Reveal'; // ie9 back compat\n\n      this._init(); // Triggers init is idempotent, just need to make sure it is initialized\n\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].register('Reveal', {\n        'ESCAPE': 'close'\n      });\n    }\n    /**\n     * Initializes the modal by adding the overlay and close buttons, (if selected).\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var _this2 = this;\n\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"MediaQuery\"]._init();\n\n      this.id = this.$element.attr('id');\n      this.isActive = false;\n      this.cached = {\n        mq: _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"MediaQuery\"].current\n      };\n      this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat(this.id, \"\\\"]\")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat(this.id, \"\\\"]\")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-toggle=\\\"\".concat(this.id, \"\\\"]\"));\n      this.$anchor.attr({\n        'aria-controls': this.id,\n        'aria-haspopup': true,\n        'tabindex': 0\n      });\n\n      if (this.options.fullScreen || this.$element.hasClass('full')) {\n        this.options.fullScreen = true;\n        this.options.overlay = false;\n      }\n\n      if (this.options.overlay && !this.$overlay) {\n        this.$overlay = this._makeOverlay(this.id);\n      }\n\n      this.$element.attr({\n        'role': 'dialog',\n        'aria-hidden': true,\n        'data-yeti-box': this.id,\n        'data-resize': this.id\n      });\n\n      if (this.$overlay) {\n        this.$element.detach().appendTo(this.$overlay);\n      } else {\n        this.$element.detach().appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));\n        this.$element.addClass('without-overlay');\n      }\n\n      this._events();\n\n      if (this.options.deepLink && window.location.hash === \"#\".concat(this.id)) {\n        this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n          return _this2.open();\n        });\n      }\n    }\n    /**\n     * Creates an overlay div to display behind the modal.\n     * @private\n     */\n\n  }, {\n    key: \"_makeOverlay\",\n    value: function _makeOverlay() {\n      var additionalOverlayClasses = '';\n\n      if (this.options.additionalOverlayClasses) {\n        additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;\n      }\n\n      return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);\n    }\n    /**\n     * Updates position of modal\n     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter\n     * @private\n     */\n\n  }, {\n    key: \"_updatePosition\",\n    value: function _updatePosition() {\n      var width = this.$element.outerWidth();\n      var outerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();\n      var height = this.$element.outerHeight();\n      var outerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();\n      var left,\n          top = null;\n\n      if (this.options.hOffset === 'auto') {\n        left = parseInt((outerWidth - width) / 2, 10);\n      } else {\n        left = parseInt(this.options.hOffset, 10);\n      }\n\n      if (this.options.vOffset === 'auto') {\n        if (height > outerHeight) {\n          top = parseInt(Math.min(100, outerHeight / 10), 10);\n        } else {\n          top = parseInt((outerHeight - height) / 4, 10);\n        }\n      } else if (this.options.vOffset !== null) {\n        top = parseInt(this.options.vOffset, 10);\n      }\n\n      if (top !== null) {\n        this.$element.css({\n          top: top + 'px'\n        });\n      } // only worry about left if we don't have an overlay or we have a horizontal offset,\n      // otherwise we're perfectly in the middle\n\n\n      if (!this.$overlay || this.options.hOffset !== 'auto') {\n        this.$element.css({\n          left: left + 'px'\n        });\n        this.$element.css({\n          margin: '0px'\n        });\n      }\n    }\n    /**\n     * Adds event handlers for the modal.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this3 = this;\n\n      var _this = this;\n\n      this.$element.on({\n        'open.zf.trigger': this.open.bind(this),\n        'close.zf.trigger': function closeZfTrigger(event, $element) {\n          if (event.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('[data-closable]')[0] === $element) {\n            // only close reveal when it's explicitly called\n            return _this3.close.apply(_this3);\n          }\n        },\n        'toggle.zf.trigger': this.toggle.bind(this),\n        'resizeme.zf.trigger': function resizemeZfTrigger() {\n          _this._updatePosition();\n        }\n      });\n\n      if (this.options.closeOnClick && this.options.overlay) {\n        this.$overlay.off('.zf.reveal').on('click.zf.reveal', function (e) {\n          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {\n            return;\n          }\n\n          _this.close();\n        });\n      }\n\n      if (this.options.deepLink) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(\"hashchange.zf.reveal:\".concat(this.id), this._handleState.bind(this));\n      }\n    }\n    /**\n     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.\n     * @private\n     */\n\n  }, {\n    key: \"_handleState\",\n    value: function _handleState(e) {\n      if (window.location.hash === '#' + this.id && !this.isActive) {\n        this.open();\n      } else {\n        this.close();\n      }\n    }\n    /**\n    * Disables the scroll when Reveal is shown to prevent the background from shifting\n    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default\n    */\n\n  }, {\n    key: \"_disableScroll\",\n    value: function _disableScroll(scrollTop) {\n      scrollTop = scrollTop || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();\n\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\", -scrollTop);\n      }\n    }\n    /**\n    * Reenables the scroll when Reveal closes\n    * @param {number} scrollTop - Scroll to restore, html \"top\" property by default (as set by `_disableScroll`)\n    */\n\n  }, {\n    key: \"_enableScroll\",\n    value: function _enableScroll(scrollTop) {\n      scrollTop = scrollTop || parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\"));\n\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\", \"\");\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(-scrollTop);\n      }\n    }\n    /**\n     * Opens the modal controlled by `this.$anchor`, and closes all others by default.\n     * @function\n     * @fires Reveal#closeme\n     * @fires Reveal#open\n     */\n\n  }, {\n    key: \"open\",\n    value: function open() {\n      var _this4 = this;\n\n      // either update or replace browser history\n      var hash = \"#\".concat(this.id);\n\n      if (this.options.deepLink && window.location.hash !== hash) {\n        if (window.history.pushState) {\n          if (this.options.updateHistory) {\n            window.history.pushState({}, '', hash);\n          } else {\n            window.history.replaceState({}, '', hash);\n          }\n        } else {\n          window.location.hash = hash;\n        }\n      } // Remember anchor that opened it to set focus back later, have general anchors as fallback\n\n\n      this.$activeAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement).is(this.$anchor) ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement) : this.$anchor;\n      this.isActive = true; // Make elements invisible, but remove display: none so we can get size and positioning\n\n      this.$element.css({\n        'visibility': 'hidden'\n      }).show().scrollTop(0);\n\n      if (this.options.overlay) {\n        this.$overlay.css({\n          'visibility': 'hidden'\n        }).show();\n      }\n\n      this._updatePosition();\n\n      this.$element.hide().css({\n        'visibility': ''\n      });\n\n      if (this.$overlay) {\n        this.$overlay.css({\n          'visibility': ''\n        }).hide();\n\n        if (this.$element.hasClass('fast')) {\n          this.$overlay.addClass('fast');\n        } else if (this.$element.hasClass('slow')) {\n          this.$overlay.addClass('slow');\n        }\n      }\n\n      if (!this.options.multipleOpened) {\n        /**\n         * Fires immediately before the modal opens.\n         * Closes any other modals that are currently open\n         * @event Reveal#closeme\n         */\n        this.$element.trigger('closeme.zf.reveal', this.id);\n      }\n\n      this._disableScroll();\n\n      var _this = this; // Motion UI method of reveal\n\n\n      if (this.options.animationIn) {\n        var afterAnimation = function afterAnimation() {\n          _this.$element.attr({\n            'aria-hidden': false,\n            'tabindex': -1\n          }).focus();\n\n          _this._addGlobalClasses();\n\n          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].trapFocus(_this.$element);\n        };\n\n        if (this.options.overlay) {\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__[\"Motion\"].animateIn(this.$overlay, 'fade-in');\n        }\n\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__[\"Motion\"].animateIn(this.$element, this.options.animationIn, function () {\n          if (_this4.$element) {\n            // protect against object having been removed\n            _this4.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].findFocusable(_this4.$element);\n            afterAnimation();\n          }\n        });\n      } // jQuery method of reveal\n      else {\n          if (this.options.overlay) {\n            this.$overlay.show(0);\n          }\n\n          this.$element.show(this.options.showDelay);\n        } // handle accessibility\n\n\n      this.$element.attr({\n        'aria-hidden': false,\n        'tabindex': -1\n      }).focus();\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].trapFocus(this.$element);\n\n      this._addGlobalClasses();\n\n      this._addGlobalListeners();\n      /**\n       * Fires when the modal has successfully opened.\n       * @event Reveal#open\n       */\n\n\n      this.$element.trigger('open.zf.reveal');\n    }\n    /**\n     * Adds classes and listeners on document required by open modals.\n     *\n     * The following classes are added and updated:\n     * - `.is-reveal-open` - Prevents the scroll on document\n     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the\n     *                       scroll was not disabled. This prevent a \"shift\" of the page content due\n     *                       the scrollbar disappearing when the modal opens.\n     *\n     * @private\n     */\n\n  }, {\n    key: \"_addGlobalClasses\",\n    value: function _addGlobalClasses() {\n      var updateScrollbarClass = function updateScrollbarClass() {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('zf-has-scroll', !!(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()));\n      };\n\n      this.$element.on('resizeme.zf.trigger.revealScrollbarListener', function () {\n        return updateScrollbarClass();\n      });\n      updateScrollbarClass();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('is-reveal-open');\n    }\n    /**\n     * Removes classes and listeners on document that were required by open modals.\n     * @private\n     */\n\n  }, {\n    key: \"_removeGlobalClasses\",\n    value: function _removeGlobalClasses() {\n      this.$element.off('resizeme.zf.trigger.revealScrollbarListener');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('is-reveal-open');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zf-has-scroll');\n    }\n    /**\n     * Adds extra event handlers for the body and window if necessary.\n     * @private\n     */\n\n  }, {\n    key: \"_addGlobalListeners\",\n    value: function _addGlobalListeners() {\n      var _this = this;\n\n      if (!this.$element) {\n        return;\n      } // If we're in the middle of cleanup, don't freak out\n\n\n      this.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].findFocusable(this.$element);\n\n      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.reveal', function (e) {\n          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {\n            return;\n          }\n\n          _this.close();\n        });\n      }\n\n      if (this.options.closeOnEsc) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown.zf.reveal', function (e) {\n          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].handleKey(e, 'Reveal', {\n            close: function close() {\n              if (_this.options.closeOnEsc) {\n                _this.close();\n              }\n            }\n          });\n        });\n      }\n    }\n    /**\n     * Closes the modal.\n     * @function\n     * @fires Reveal#closed\n     */\n\n  }, {\n    key: \"close\",\n    value: function close() {\n      if (!this.isActive || !this.$element.is(':visible')) {\n        return false;\n      }\n\n      var _this = this; // Motion UI method of hiding\n\n\n      if (this.options.animationOut) {\n        if (this.options.overlay) {\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__[\"Motion\"].animateOut(this.$overlay, 'fade-out');\n        }\n\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__[\"Motion\"].animateOut(this.$element, this.options.animationOut, finishUp);\n      } // jQuery method of hiding\n      else {\n          this.$element.hide(this.options.hideDelay);\n\n          if (this.options.overlay) {\n            this.$overlay.hide(0, finishUp);\n          } else {\n            finishUp();\n          }\n        } // Conditionals to remove extra event listeners added on open\n\n\n      if (this.options.closeOnEsc) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('keydown.zf.reveal');\n      }\n\n      if (!this.options.overlay && this.options.closeOnClick) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.reveal');\n      }\n\n      this.$element.off('keydown.zf.reveal');\n\n      function finishUp() {\n        // Get the current top before the modal is closed and restore the scroll after.\n        // TODO: use component properties instead of HTML properties\n        // See https://github.com/zurb/foundation-sites/pull/10786\n        var scrollTop = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\"));\n\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {\n          _this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal\n\n        }\n\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].releaseFocus(_this.$element);\n\n        _this.$element.attr('aria-hidden', true);\n\n        _this._enableScroll(scrollTop);\n        /**\n        * Fires when the modal is done closing.\n        * @event Reveal#closed\n        */\n\n\n        _this.$element.trigger('closed.zf.reveal');\n      }\n      /**\n      * Resets the modal content\n      * This prevents a running video to keep going in the background\n      */\n\n\n      if (this.options.resetOnClose) {\n        this.$element.html(this.$element.html());\n      }\n\n      this.isActive = false; // If deepLink and we did not switched to an other modal...\n\n      if (_this.options.deepLink && window.location.hash === \"#\".concat(this.id)) {\n        // Remove the history hash\n        if (window.history.replaceState) {\n          var urlWithoutHash = window.location.pathname + window.location.search;\n\n          if (this.options.updateHistory) {\n            window.history.pushState({}, '', urlWithoutHash); // remove the hash\n          } else {\n            window.history.replaceState('', document.title, urlWithoutHash);\n          }\n        } else {\n          window.location.hash = '';\n        }\n      }\n\n      this.$activeAnchor.focus();\n    }\n    /**\n     * Toggles the open/closed state of a modal.\n     * @function\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      if (this.isActive) {\n        this.close();\n      } else {\n        this.open();\n      }\n    }\n  }, {\n    key: \"_destroy\",\n\n    /**\n     * Destroys an instance of a modal.\n     * @function\n     */\n    value: function _destroy() {\n      if (this.options.overlay) {\n        this.$element.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()\n\n        this.$overlay.hide().off().remove();\n      }\n\n      this.$element.hide().off();\n      this.$anchor.off('.zf');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(\".zf.reveal:\".concat(this.id));\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {\n        this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal\n\n      }\n    }\n  }]);\n\n  return Reveal;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__[\"Plugin\"]);\n\nReveal.defaults = {\n  /**\n   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  animationIn: '',\n\n  /**\n   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  animationOut: '',\n\n  /**\n   * Time, in ms, to delay the opening of a modal after a click if no animation used.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  showDelay: 0,\n\n  /**\n   * Time, in ms, to delay the closing of a modal after a click if no animation used.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  hideDelay: 0,\n\n  /**\n   * Allows a click on the body/overlay to close the modal.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  closeOnClick: true,\n\n  /**\n   * Allows the modal to close if the user presses the `ESCAPE` key.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  closeOnEsc: true,\n\n  /**\n   * If true, allows multiple modals to be displayed at once.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  multipleOpened: false,\n\n  /**\n   * Distance, in pixels, the modal should push down from the top of the screen.\n   * @option\n   * @type {number|string}\n   * @default auto\n   */\n  vOffset: 'auto',\n\n  /**\n   * Distance, in pixels, the modal should push in from the side of the screen.\n   * @option\n   * @type {number|string}\n   * @default auto\n   */\n  hOffset: 'auto',\n\n  /**\n   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  fullScreen: false,\n\n  /**\n   * Allows the modal to generate an overlay div, which will cover the view when modal opens.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  overlay: true,\n\n  /**\n   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  resetOnClose: false,\n\n  /**\n   * Link the location hash to the modal.\n   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLink: false,\n\n  /**\n   * If `deepLink` is enabled, update the browser history with the open modal\n   * @option\n   * @default false\n   */\n  updateHistory: false,\n\n  /**\n  * Allows the modal to append to custom div.\n  * @option\n  * @type {string}\n  * @default \"body\"\n  */\n  appendTo: \"body\",\n\n  /**\n   * Allows adding additional class names to the reveal overlay.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  additionalOverlayClasses: ''\n};\n\n\n//# sourceURL=webpack:///./js/foundation.reveal.js?");

// /***/ }),

// /***/ "./js/foundation.slider.js":
// /*!*********************************!*\
//   !*** ./js/foundation.slider.js ***!
//   \*********************************/
// /*! exports provided: Slider */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n/**\n * Slider module.\n * @module foundation.slider\n * @requires foundation.util.motion\n * @requires foundation.util.triggers\n * @requires foundation.util.keyboard\n * @requires foundation.util.touch\n */\n\nvar Slider =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Slider, _Plugin);\n\n  function Slider() {\n    _classCallCheck(this, Slider);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));\n  }\n\n  _createClass(Slider, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a slider control.\n     * @class\n     * @name Slider\n     * @param {jQuery} element - jQuery object to make into a slider control.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Slider.defaults, this.$element.data(), options);\n      this.className = 'Slider'; // ie9 back compat\n      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.\n\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__[\"Touch\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].register('Slider', {\n        'ltr': {\n          'ARROW_RIGHT': 'increase',\n          'ARROW_UP': 'increase',\n          'ARROW_DOWN': 'decrease',\n          'ARROW_LEFT': 'decrease',\n          'SHIFT_ARROW_RIGHT': 'increase_fast',\n          'SHIFT_ARROW_UP': 'increase_fast',\n          'SHIFT_ARROW_DOWN': 'decrease_fast',\n          'SHIFT_ARROW_LEFT': 'decrease_fast',\n          'HOME': 'min',\n          'END': 'max'\n        },\n        'rtl': {\n          'ARROW_LEFT': 'increase',\n          'ARROW_RIGHT': 'decrease',\n          'SHIFT_ARROW_LEFT': 'increase_fast',\n          'SHIFT_ARROW_RIGHT': 'decrease_fast'\n        }\n      });\n    }\n    /**\n     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      this.inputs = this.$element.find('input');\n      this.handles = this.$element.find('[data-slider-handle]');\n      this.$handle = this.handles.eq(0);\n      this.$input = this.inputs.length ? this.inputs.eq(0) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(this.$handle.attr('aria-controls')));\n      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);\n\n      var isDbl = false,\n          _this = this;\n\n      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {\n        this.options.disabled = true;\n        this.$element.addClass(this.options.disabledClass);\n      }\n\n      if (!this.inputs.length) {\n        this.inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()().add(this.$input);\n        this.options.binding = true;\n      }\n\n      this._setInitAttr(0);\n\n      if (this.handles[1]) {\n        this.options.doubleSided = true;\n        this.$handle2 = this.handles.eq(1);\n        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(this.$handle2.attr('aria-controls')));\n\n        if (!this.inputs[1]) {\n          this.inputs = this.inputs.add(this.$input2);\n        }\n\n        isDbl = true; // this.$handle.triggerHandler('click.zf.slider');\n\n        this._setInitAttr(1);\n      } // Set handle positions\n\n\n      this.setHandles();\n\n      this._events();\n    }\n  }, {\n    key: \"setHandles\",\n    value: function setHandles() {\n      var _this2 = this;\n\n      if (this.handles[1]) {\n        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function () {\n          _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val(), true);\n        });\n      } else {\n        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);\n      }\n    }\n  }, {\n    key: \"_reflow\",\n    value: function _reflow() {\n      this.setHandles();\n    }\n    /**\n    * @function\n    * @private\n    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)\n    */\n\n  }, {\n    key: \"_pctOfBar\",\n    value: function _pctOfBar(value) {\n      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);\n\n      switch (this.options.positionValueFunction) {\n        case \"pow\":\n          pctOfBar = this._logTransform(pctOfBar);\n          break;\n\n        case \"log\":\n          pctOfBar = this._powTransform(pctOfBar);\n          break;\n      }\n\n      return pctOfBar.toFixed(2);\n    }\n    /**\n    * @function\n    * @private\n    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value\n    */\n\n  }, {\n    key: \"_value\",\n    value: function _value(pctOfBar) {\n      switch (this.options.positionValueFunction) {\n        case \"pow\":\n          pctOfBar = this._powTransform(pctOfBar);\n          break;\n\n        case \"log\":\n          pctOfBar = this._logTransform(pctOfBar);\n          break;\n      }\n\n      var value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);\n      return value;\n    }\n    /**\n    * @function\n    * @private\n    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function\n    */\n\n  }, {\n    key: \"_logTransform\",\n    value: function _logTransform(value) {\n      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);\n    }\n    /**\n    * @function\n    * @private\n    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function\n    */\n\n  }, {\n    key: \"_powTransform\",\n    value: function _powTransform(value) {\n      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);\n    }\n    /**\n     * Sets the position of the selected handle and fill bar.\n     * @function\n     * @private\n     * @param {jQuery} $hndl - the selected handle to move.\n     * @param {Number} location - floating point between the start and end values of the slider bar.\n     * @param {Function} cb - callback function to fire on completion.\n     * @fires Slider#moved\n     * @fires Slider#changed\n     */\n\n  }, {\n    key: \"_setHandlePos\",\n    value: function _setHandlePos($hndl, location, noInvert, cb) {\n      // don't move if the slider has been disabled since its initialization\n      if (this.$element.hasClass(this.options.disabledClass)) {\n        return;\n      } //might need to alter that slightly for bars that will have odd number selections.\n\n\n      location = parseFloat(location); //on input change events, convert string to number...grumble.\n      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max\n\n      if (location < this.options.start) {\n        location = this.options.start;\n      } else if (location > this.options.end) {\n        location = this.options.end;\n      }\n\n      var isDbl = this.options.doubleSided; //this is for single-handled vertical sliders, it adjusts the value to account for the slider being \"upside-down\"\n      //for click and drag events, it's weird due to the scale(-1, 1) css property\n\n      if (this.options.vertical && !noInvert) {\n        location = this.options.end - location;\n      }\n\n      if (isDbl) {\n        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.\n        if (this.handles.index($hndl) === 0) {\n          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));\n          location = location >= h2Val ? h2Val - this.options.step : location;\n        } else {\n          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));\n          location = location <= h1Val ? h1Val + this.options.step : location;\n        }\n      }\n\n      var _this = this,\n          vert = this.options.vertical,\n          hOrW = vert ? 'height' : 'width',\n          lOrT = vert ? 'top' : 'left',\n          handleDim = $hndl[0].getBoundingClientRect()[hOrW],\n          elemDim = this.$element[0].getBoundingClientRect()[hOrW],\n          //percentage of bar min/max value based on click or drag point\n      pctOfBar = this._pctOfBar(location),\n          //number of actual pixels to shift the handle, based on the percentage obtained above\n      pxToMove = (elemDim - handleDim) * pctOfBar,\n          //percentage of bar to shift the handle\n      movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal); //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value\n\n\n      location = parseFloat(location.toFixed(this.options.decimal)); // declare empty object for css adjustments, only used with 2 handled-sliders\n\n      var css = {};\n\n      this._setValues($hndl, location); // TODO update to calculate based on values set to respective inputs??\n\n\n      if (isDbl) {\n        var isLeftHndl = this.handles.index($hndl) === 0,\n            //empty variable, will be used for min-height/width for fill bar\n        dim,\n            //percentage w/h of the handle compared to the slider bar\n        handlePct = ~~(percent(handleDim, elemDim) * 100); //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar\n\n        if (isLeftHndl) {\n          //left or top percentage value to apply to the fill bar.\n          css[lOrT] = \"\".concat(movement, \"%\"); //calculate the new min-height/width for the fill bar.\n\n          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct; //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider\n          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.\n\n          if (cb && typeof cb === 'function') {\n            cb();\n          } //this is only needed for the initialization of 2 handled sliders\n\n        } else {\n          //just caching the value of the left/bottom handle's left/top property\n          var handlePos = parseFloat(this.$handle[0].style[lOrT]); //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0\n          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself\n\n          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;\n        } // assign the min-height/width to our css object\n\n\n        css[\"min-\".concat(hOrW)] = \"\".concat(dim, \"%\");\n      }\n\n      this.$element.one('finished.zf.animate', function () {\n        /**\n         * Fires when the handle is done moving.\n         * @event Slider#moved\n         */\n        _this.$element.trigger('moved.zf.slider', [$hndl]);\n      }); //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.\n\n      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;\n      Object(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Move\"])(moveTime, $hndl, function () {\n        // adjusting the left/top property of the handle, based on the percentage calculated above\n        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,\n        // fall back to next best guess.\n        if (isNaN(movement)) {\n          $hndl.css(lOrT, \"\".concat(pctOfBar * 100, \"%\"));\n        } else {\n          $hndl.css(lOrT, \"\".concat(movement, \"%\"));\n        }\n\n        if (!_this.options.doubleSided) {\n          //if single-handled, a simple method to expand the fill bar\n          _this.$fill.css(hOrW, \"\".concat(pctOfBar * 100, \"%\"));\n        } else {\n          //otherwise, use the css object we created above\n          _this.$fill.css(css);\n        }\n      });\n      /**\n       * Fires when the value has not been change for a given time.\n       * @event Slider#changed\n       */\n\n      clearTimeout(_this.timeout);\n      _this.timeout = setTimeout(function () {\n        _this.$element.trigger('changed.zf.slider', [$hndl]);\n      }, _this.options.changedDelay);\n    }\n    /**\n     * Sets the initial attribute for the slider element.\n     * @function\n     * @private\n     * @param {Number} idx - index of the current handle/input to use.\n     */\n\n  }, {\n    key: \"_setInitAttr\",\n    value: function _setInitAttr(idx) {\n      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;\n      var id = this.inputs.eq(idx).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"GetYoDigits\"])(6, 'slider');\n      this.inputs.eq(idx).attr({\n        'id': id,\n        'max': this.options.end,\n        'min': this.options.start,\n        'step': this.options.step\n      });\n      this.inputs.eq(idx).val(initVal);\n      this.handles.eq(idx).attr({\n        'role': 'slider',\n        'aria-controls': id,\n        'aria-valuemax': this.options.end,\n        'aria-valuemin': this.options.start,\n        'aria-valuenow': initVal,\n        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',\n        'tabindex': 0\n      });\n    }\n    /**\n     * Sets the input and `aria-valuenow` values for the slider element.\n     * @function\n     * @private\n     * @param {jQuery} $handle - the currently selected handle.\n     * @param {Number} val - floating point of the new value.\n     */\n\n  }, {\n    key: \"_setValues\",\n    value: function _setValues($handle, val) {\n      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;\n      this.inputs.eq(idx).val(val);\n      $handle.attr('aria-valuenow', val);\n    }\n    /**\n     * Handles events on the slider element.\n     * Calculates the new location of the current handle.\n     * If there are two handles and the bar was clicked, it determines which handle to move.\n     * @function\n     * @private\n     * @param {Object} e - the `event` object passed from the listener.\n     * @param {jQuery} $handle - the current handle to calculate for, if selected.\n     * @param {Number} val - floating point number for the new value of the slider.\n     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.\n     */\n\n  }, {\n    key: \"_handleEvent\",\n    value: function _handleEvent(e, $handle, val) {\n      var value, hasVal;\n\n      if (!val) {\n        //click or drag events\n        e.preventDefault();\n\n        var _this = this,\n            vertical = this.options.vertical,\n            param = vertical ? 'height' : 'width',\n            direction = vertical ? 'top' : 'left',\n            eventOffset = vertical ? e.pageY : e.pageX,\n            halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,\n            barDim = this.$element[0].getBoundingClientRect()[param],\n            windowScroll = vertical ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft();\n\n        var elemOffset = this.$element.offset()[direction]; // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...\n        // best way to guess this is simulated is if clientY == pageY\n\n        if (e.clientY === e.pageY) {\n          eventOffset = eventOffset + windowScroll;\n        }\n\n        var eventFromBar = eventOffset - elemOffset;\n        var barXY;\n\n        if (eventFromBar < 0) {\n          barXY = 0;\n        } else if (eventFromBar > barDim) {\n          barXY = barDim;\n        } else {\n          barXY = eventFromBar;\n        }\n\n        var offsetPct = percent(barXY, barDim);\n        value = this._value(offsetPct); // turn everything around for RTL, yay math!\n\n        if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"rtl\"])() && !this.options.vertical) {\n          value = this.options.end - value;\n        }\n\n        value = _this._adjustValue(null, value); //boolean flag for the setHandlePos fn, specifically for vertical sliders\n\n        hasVal = false;\n\n        if (!$handle) {\n          //figure out which handle it is, pass it to the next function.\n          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),\n              secndHndlPos = absPosition(this.$handle2, direction, barXY, param);\n          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;\n        }\n      } else {\n        //change event on input\n        value = this._adjustValue(null, val);\n        hasVal = true;\n      }\n\n      this._setHandlePos($handle, value, hasVal);\n    }\n    /**\n     * Adjustes value for handle in regard to step value. returns adjusted value\n     * @function\n     * @private\n     * @param {jQuery} $handle - the selected handle.\n     * @param {Number} value - value to adjust. used if $handle is falsy\n     */\n\n  }, {\n    key: \"_adjustValue\",\n    value: function _adjustValue($handle, value) {\n      var val,\n          step = this.options.step,\n          div = parseFloat(step / 2),\n          left,\n          prev_val,\n          next_val;\n\n      if (!!$handle) {\n        val = parseFloat($handle.attr('aria-valuenow'));\n      } else {\n        val = value;\n      }\n\n      if (val >= 0) {\n        left = val % step;\n      } else {\n        left = step + val % step;\n      }\n\n      prev_val = val - left;\n      next_val = prev_val + step;\n\n      if (left === 0) {\n        return val;\n      }\n\n      val = val >= prev_val + div ? next_val : prev_val;\n      return val;\n    }\n    /**\n     * Adds event listeners to the slider elements.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this._eventsForHandle(this.$handle);\n\n      if (this.handles[1]) {\n        this._eventsForHandle(this.$handle2);\n      }\n    }\n    /**\n     * Adds event listeners a particular handle\n     * @function\n     * @private\n     * @param {jQuery} $handle - the current handle to apply listeners to.\n     */\n\n  }, {\n    key: \"_eventsForHandle\",\n    value: function _eventsForHandle($handle) {\n      var _this = this,\n          curHandle,\n          timer;\n\n      var handleChangeEvent = function handleChangeEvent(e) {\n        var idx = _this.inputs.index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));\n\n        _this._handleEvent(e, _this.handles.eq(idx), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());\n      }; // IE only triggers the change event when the input loses focus which strictly follows the HTML specification\n      // listen for the enter key and trigger a change\n      // @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events\n\n\n      this.inputs.off('keyup.zf.slider').on('keyup.zf.slider', function (e) {\n        if (e.keyCode == 13) handleChangeEvent.call(this, e);\n      });\n      this.inputs.off('change.zf.slider').on('change.zf.slider', handleChangeEvent);\n\n      if (this.options.clickSelect) {\n        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {\n          if (_this.$element.data('dragging')) {\n            return false;\n          }\n\n          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('[data-slider-handle]')) {\n            if (_this.options.doubleSided) {\n              _this._handleEvent(e);\n            } else {\n              _this._handleEvent(e, _this.$handle);\n            }\n          }\n        });\n      }\n\n      if (this.options.draggable) {\n        this.handles.addTouch();\n        var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');\n        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {\n          $handle.addClass('is-dragging');\n\n          _this.$fill.addClass('is-dragging'); //\n\n\n          _this.$element.data('dragging', true);\n\n          curHandle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);\n          $body.on('mousemove.zf.slider', function (e) {\n            e.preventDefault();\n\n            _this._handleEvent(e, curHandle);\n          }).on('mouseup.zf.slider', function (e) {\n            _this._handleEvent(e, curHandle);\n\n            $handle.removeClass('is-dragging');\n\n            _this.$fill.removeClass('is-dragging');\n\n            _this.$element.data('dragging', false);\n\n            $body.off('mousemove.zf.slider mouseup.zf.slider');\n          });\n        }) // prevent events triggered by touch\n        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {\n          e.preventDefault();\n        });\n      }\n\n      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {\n        var _$handle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,\n            oldValue = parseFloat(_this.inputs.eq(idx).val()),\n            newValue; // handle keyboard event with keyboard util\n\n\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"Keyboard\"].handleKey(e, 'Slider', {\n          decrease: function decrease() {\n            newValue = oldValue - _this.options.step;\n          },\n          increase: function increase() {\n            newValue = oldValue + _this.options.step;\n          },\n          decrease_fast: function decrease_fast() {\n            newValue = oldValue - _this.options.step * 10;\n          },\n          increase_fast: function increase_fast() {\n            newValue = oldValue + _this.options.step * 10;\n          },\n          min: function min() {\n            newValue = _this.options.start;\n          },\n          max: function max() {\n            newValue = _this.options.end;\n          },\n          handled: function handled() {\n            // only set handle pos when event was handled specially\n            e.preventDefault();\n\n            _this._setHandlePos(_$handle, newValue, true);\n          }\n        });\n        /*if (newValue) { // if pressed key has special function, update value\n          e.preventDefault();\n          _this._setHandlePos(_$handle, newValue);\n        }*/\n      });\n    }\n    /**\n     * Destroys the slider plugin.\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.handles.off('.zf.slider');\n      this.inputs.off('.zf.slider');\n      this.$element.off('.zf.slider');\n      clearTimeout(this.timeout);\n    }\n  }]);\n\n  return Slider;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__[\"Plugin\"]);\n\nSlider.defaults = {\n  /**\n   * Minimum value for the slider scale.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  start: 0,\n\n  /**\n   * Maximum value for the slider scale.\n   * @option\n   * @type {number}\n   * @default 100\n   */\n  end: 100,\n\n  /**\n   * Minimum value change per change event.\n   * @option\n   * @type {number}\n   * @default 1\n   */\n  step: 1,\n\n  /**\n   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  initialStart: 0,\n\n  /**\n   * Value at which the right handle/second input should be set to on initialization.\n   * @option\n   * @type {number}\n   * @default 100\n   */\n  initialEnd: 100,\n\n  /**\n   * Allows the input to be located outside the container and visible. Set to by the JS\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  binding: false,\n\n  /**\n   * Allows the user to click/tap on the slider bar to select a value.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  clickSelect: true,\n\n  /**\n   * Set to true and use the `vertical` class to change alignment to vertical.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  vertical: false,\n\n  /**\n   * Allows the user to drag the slider handle(s) to select a value.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  draggable: true,\n\n  /**\n   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  disabled: false,\n\n  /**\n   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  doubleSided: false,\n\n  /**\n   * Potential future feature.\n   */\n  // steps: 100,\n\n  /**\n   * Number of decimal places the plugin should go to for floating point precision.\n   * @option\n   * @type {number}\n   * @default 2\n   */\n  decimal: 2,\n\n  /**\n   * Time delay for dragged elements.\n   */\n  // dragDelay: 0,\n\n  /**\n   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.\n   * @option\n   * @type {number}\n   * @default 200\n   */\n  moveTime: 200,\n  //update this if changing the transition time in the sass\n\n  /**\n   * Class applied to disabled sliders.\n   * @option\n   * @type {string}\n   * @default 'disabled'\n   */\n  disabledClass: 'disabled',\n\n  /**\n   * Will invert the default layout for a vertical<span data-tooltip title=\"who would do this???\"> </span>slider.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  invertVertical: false,\n\n  /**\n   * Milliseconds before the `changed.zf-slider` event is triggered after value change.\n   * @option\n   * @type {number}\n   * @default 500\n   */\n  changedDelay: 500,\n\n  /**\n  * Basevalue for non-linear sliders\n  * @option\n  * @type {number}\n  * @default 5\n  */\n  nonLinearBase: 5,\n\n  /**\n  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.\n  * @option\n  * @type {string}\n  * @default 'linear'\n  */\n  positionValueFunction: 'linear'\n};\n\nfunction percent(frac, num) {\n  return frac / num;\n}\n\nfunction absPosition($handle, dir, clickPos, param) {\n  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);\n}\n\nfunction baseLog(base, value) {\n  return Math.log(value) / Math.log(base);\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.slider.js?");

// /***/ }),

// /***/ "./js/foundation.smoothScroll.js":
// /*!***************************************!*\
//   !*** ./js/foundation.smoothScroll.js ***!
//   \***************************************/
// /*! exports provided: SmoothScroll */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SmoothScroll\", function() { return SmoothScroll; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n/**\n * SmoothScroll module.\n * @module foundation.smooth-scroll\n */\n\nvar SmoothScroll =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(SmoothScroll, _Plugin);\n\n  function SmoothScroll() {\n    _classCallCheck(this, SmoothScroll);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(SmoothScroll).apply(this, arguments));\n  }\n\n  _createClass(SmoothScroll, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of SmoothScroll.\n     * @class\n     * @name SmoothScroll\n     * @fires SmoothScroll#init\n     * @param {Object} element - jQuery object to add the trigger to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, SmoothScroll.defaults, this.$element.data(), options);\n      this.className = 'SmoothScroll'; // ie9 back compat\n\n      this._init();\n    }\n    /**\n     * Initialize the SmoothScroll plugin\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, 'smooth-scroll');\n      this.$element.attr({\n        id: id\n      });\n\n      this._events();\n    }\n    /**\n     * Initializes events for SmoothScroll.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this.$element.on('click.zf.smoothScroll', this._handleLinkClick);\n      this.$element.on('click.zf.smoothScroll', 'a[href^=\"#\"]', this._handleLinkClick);\n    }\n    /**\n     * Handle the given event to smoothly scroll to the anchor pointed by the event target.\n     * @param {*} e - event\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_handleLinkClick\",\n    value: function _handleLinkClick(e) {\n      var _this = this;\n\n      // Follow the link if it does not point to an anchor.\n      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^=\"#\"]')) return;\n      var arrival = e.currentTarget.getAttribute('href');\n      this._inTransition = true;\n      SmoothScroll.scrollToLoc(arrival, this.options, function () {\n        _this._inTransition = false;\n      });\n      e.preventDefault();\n    }\n  }, {\n    key: \"_destroy\",\n\n    /**\n     * Destroys the SmoothScroll instance.\n     * @function\n     */\n    value: function _destroy() {\n      this.$element.off('click.zf.smoothScroll', this._handleLinkClick);\n      this.$element.off('click.zf.smoothScroll', 'a[href^=\"#\"]', this._handleLinkClick);\n    }\n  }], [{\n    key: \"scrollToLoc\",\n\n    /**\n     * Function to scroll to a given location on the page.\n     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'\n     * @param {Object} options - The options to use.\n     * @param {Function} callback - The callback function.\n     * @static\n     * @function\n     */\n    value: function scrollToLoc(loc) {\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;\n      var callback = arguments.length > 2 ? arguments[2] : undefined;\n      var $loc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc); // Do nothing if target does not exist to prevent errors\n\n      if (!$loc.length) return false;\n      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({\n        scrollTop: scrollPos\n      }, options.animationDuration, options.animationEasing, function () {\n        if (typeof callback === 'function') {\n          callback();\n        }\n      });\n    }\n  }]);\n\n  return SmoothScroll;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__[\"Plugin\"]);\n/**\n * Default settings for plugin.\n */\n\n\nSmoothScroll.defaults = {\n  /**\n   * Amount of time, in ms, the animated scrolling should take between locations.\n   * @option\n   * @type {number}\n   * @default 500\n   */\n  animationDuration: 500,\n\n  /**\n   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.\n   * @option\n   * @type {string}\n   * @default 'linear'\n   * @see {@link https://api.jquery.com/animate|Jquery animate}\n   */\n  animationEasing: 'linear',\n\n  /**\n   * Number of pixels to use as a marker for location changes.\n   * @option\n   * @type {number}\n   * @default 50\n   */\n  threshold: 50,\n\n  /**\n   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  offset: 0\n};\n\n\n//# sourceURL=webpack:///./js/foundation.smoothScroll.js?");

// /***/ }),

// /***/ "./js/foundation.sticky.js":
// /*!*********************************!*\
//   !*** ./js/foundation.sticky.js ***!
//   \*********************************/
// /*! exports provided: Sticky */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sticky\", function() { return Sticky; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Sticky module.\n * @module foundation.sticky\n * @requires foundation.util.triggers\n * @requires foundation.util.mediaQuery\n */\n\nvar Sticky =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Sticky, _Plugin);\n\n  function Sticky() {\n    _classCallCheck(this, Sticky);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).apply(this, arguments));\n  }\n\n  _createClass(Sticky, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a sticky thing.\n     * @class\n     * @name Sticky\n     * @param {jQuery} element - jQuery object to make sticky.\n     * @param {Object} options - options object passed when creating the element programmatically.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Sticky.defaults, this.$element.data(), options);\n      this.className = 'Sticky'; // ie9 back compat\n      // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n    }\n    /**\n     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"]._init();\n\n      var $parent = this.$element.parent('[data-sticky-container]'),\n          id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, 'sticky'),\n          _this = this;\n\n      if ($parent.length) {\n        this.$container = $parent;\n      } else {\n        this.wasWrapped = true;\n        this.$element.wrap(this.options.container);\n        this.$container = this.$element.parent();\n      }\n\n      this.$container.addClass(this.options.containerClass);\n      this.$element.addClass(this.options.stickyClass).attr({\n        'data-resize': id,\n        'data-mutate': id\n      });\n\n      if (this.options.anchor !== '') {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor).attr({\n          'data-mutate': id\n        });\n      }\n\n      this.scrollCount = this.options.checkEvery;\n      this.isStuck = false;\n      this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n        //We calculate the container height to have correct values for anchor points offset calculation.\n        _this.containerHeight = _this.$element.css(\"display\") == \"none\" ? 0 : _this.$element[0].getBoundingClientRect().height;\n\n        _this.$container.css('height', _this.containerHeight);\n\n        _this.elemHeight = _this.containerHeight;\n\n        if (_this.options.anchor !== '') {\n          _this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor);\n        } else {\n          _this._parsePoints();\n        }\n\n        _this._setSizes(function () {\n          var scroll = window.pageYOffset;\n\n          _this._calc(false, scroll); //Unstick the element will ensure that proper classes are set.\n\n\n          if (!_this.isStuck) {\n            _this._removeSticky(scroll >= _this.topPoint ? false : true);\n          }\n        });\n\n        _this._events(id.split('-').reverse().join('-'));\n      });\n    }\n    /**\n     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_parsePoints\",\n    value: function _parsePoints() {\n      var top = this.options.topAnchor == \"\" ? 1 : this.options.topAnchor,\n          btm = this.options.btmAnchor == \"\" ? document.documentElement.scrollHeight : this.options.btmAnchor,\n          pts = [top, btm],\n          breaks = {};\n\n      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {\n        var pt;\n\n        if (typeof pts[i] === 'number') {\n          pt = pts[i];\n        } else {\n          var place = pts[i].split(':'),\n              anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(place[0]));\n          pt = anchor.offset().top;\n\n          if (place[1] && place[1].toLowerCase() === 'bottom') {\n            pt += anchor[0].getBoundingClientRect().height;\n          }\n        }\n\n        breaks[i] = pt;\n      }\n\n      this.points = breaks;\n      return;\n    }\n    /**\n     * Adds event handlers for the scrolling element.\n     * @private\n     * @param {String} id - pseudo-random id for unique scroll event listener.\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events(id) {\n      var _this = this,\n          scrollListener = this.scrollListener = \"scroll.zf.\".concat(id);\n\n      if (this.isOn) {\n        return;\n      }\n\n      if (this.canStick) {\n        this.isOn = true;\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener, function (e) {\n          if (_this.scrollCount === 0) {\n            _this.scrollCount = _this.options.checkEvery;\n\n            _this._setSizes(function () {\n              _this._calc(false, window.pageYOffset);\n            });\n          } else {\n            _this.scrollCount--;\n\n            _this._calc(false, window.pageYOffset);\n          }\n        });\n      }\n\n      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function (e, el) {\n        _this._eventsHandler(id);\n      });\n      this.$element.on('mutateme.zf.trigger', function (e, el) {\n        _this._eventsHandler(id);\n      });\n\n      if (this.$anchor) {\n        this.$anchor.on('mutateme.zf.trigger', function (e, el) {\n          _this._eventsHandler(id);\n        });\n      }\n    }\n    /**\n     * Handler for events.\n     * @private\n     * @param {String} id - pseudo-random id for unique scroll event listener.\n     */\n\n  }, {\n    key: \"_eventsHandler\",\n    value: function _eventsHandler(id) {\n      var _this = this,\n          scrollListener = this.scrollListener = \"scroll.zf.\".concat(id);\n\n      _this._setSizes(function () {\n        _this._calc(false);\n\n        if (_this.canStick) {\n          if (!_this.isOn) {\n            _this._events(id);\n          }\n        } else if (_this.isOn) {\n          _this._pauseListeners(scrollListener);\n        }\n      });\n    }\n    /**\n     * Removes event handlers for scroll and change events on anchor.\n     * @fires Sticky#pause\n     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`\n     */\n\n  }, {\n    key: \"_pauseListeners\",\n    value: function _pauseListeners(scrollListener) {\n      this.isOn = false;\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);\n      /**\n       * Fires when the plugin is paused due to resize event shrinking the view.\n       * @event Sticky#pause\n       * @private\n       */\n\n      this.$element.trigger('pause.zf.sticky');\n    }\n    /**\n     * Called on every `scroll` event and on `_init`\n     * fires functions based on booleans and cached values\n     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.\n     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.\n     */\n\n  }, {\n    key: \"_calc\",\n    value: function _calc(checkSizes, scroll) {\n      if (checkSizes) {\n        this._setSizes();\n      }\n\n      if (!this.canStick) {\n        if (this.isStuck) {\n          this._removeSticky(true);\n        }\n\n        return false;\n      }\n\n      if (!scroll) {\n        scroll = window.pageYOffset;\n      }\n\n      if (scroll >= this.topPoint) {\n        if (scroll <= this.bottomPoint) {\n          if (!this.isStuck) {\n            this._setSticky();\n          }\n        } else {\n          if (this.isStuck) {\n            this._removeSticky(false);\n          }\n        }\n      } else {\n        if (this.isStuck) {\n          this._removeSticky(true);\n        }\n      }\n    }\n    /**\n     * Causes the $element to become stuck.\n     * Adds `position: fixed;`, and helper classes.\n     * @fires Sticky#stuckto\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_setSticky\",\n    value: function _setSticky() {\n      var _this = this,\n          stickTo = this.options.stickTo,\n          mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',\n          notStuckTo = stickTo === 'top' ? 'bottom' : 'top',\n          css = {};\n\n      css[mrgn] = \"\".concat(this.options[mrgn], \"em\");\n      css[stickTo] = 0;\n      css[notStuckTo] = 'auto';\n      this.isStuck = true;\n      this.$element.removeClass(\"is-anchored is-at-\".concat(notStuckTo)).addClass(\"is-stuck is-at-\".concat(stickTo)).css(css)\n      /**\n       * Fires when the $element has become `position: fixed;`\n       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`\n       * @event Sticky#stuckto\n       */\n      .trigger(\"sticky.zf.stuckto:\".concat(stickTo));\n      this.$element.on(\"transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd\", function () {\n        _this._setSizes();\n      });\n    }\n    /**\n     * Causes the $element to become unstuck.\n     * Removes `position: fixed;`, and helper classes.\n     * Adds other helper classes.\n     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.\n     * @fires Sticky#unstuckfrom\n     * @private\n     */\n\n  }, {\n    key: \"_removeSticky\",\n    value: function _removeSticky(isTop) {\n      var stickTo = this.options.stickTo,\n          stickToTop = stickTo === 'top',\n          css = {},\n          anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,\n          mrgn = stickToTop ? 'marginTop' : 'marginBottom',\n          notStuckTo = stickToTop ? 'bottom' : 'top',\n          topOrBottom = isTop ? 'top' : 'bottom';\n      css[mrgn] = 0;\n      css['bottom'] = 'auto';\n\n      if (isTop) {\n        css['top'] = 0;\n      } else {\n        css['top'] = anchorPt;\n      }\n\n      this.isStuck = false;\n      this.$element.removeClass(\"is-stuck is-at-\".concat(stickTo)).addClass(\"is-anchored is-at-\".concat(topOrBottom)).css(css)\n      /**\n       * Fires when the $element has become anchored.\n       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`\n       * @event Sticky#unstuckfrom\n       */\n      .trigger(\"sticky.zf.unstuckfrom:\".concat(topOrBottom));\n    }\n    /**\n     * Sets the $element and $container sizes for plugin.\n     * Calls `_setBreakPoints`.\n     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.\n     * @private\n     */\n\n  }, {\n    key: \"_setSizes\",\n    value: function _setSizes(cb) {\n      this.canStick = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"].is(this.options.stickyOn);\n\n      if (!this.canStick) {\n        if (cb && typeof cb === 'function') {\n          cb();\n        }\n      }\n\n      var _this = this,\n          newElemWidth = this.$container[0].getBoundingClientRect().width,\n          comp = window.getComputedStyle(this.$container[0]),\n          pdngl = parseInt(comp['padding-left'], 10),\n          pdngr = parseInt(comp['padding-right'], 10);\n\n      if (this.$anchor && this.$anchor.length) {\n        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;\n      } else {\n        this._parsePoints();\n      }\n\n      this.$element.css({\n        'max-width': \"\".concat(newElemWidth - pdngl - pdngr, \"px\")\n      });\n      var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;\n\n      if (this.$element.css(\"display\") == \"none\") {\n        newContainerHeight = 0;\n      }\n\n      this.containerHeight = newContainerHeight;\n      this.$container.css({\n        height: newContainerHeight\n      });\n      this.elemHeight = newContainerHeight;\n\n      if (!this.isStuck) {\n        if (this.$element.hasClass('is-at-bottom')) {\n          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;\n          this.$element.css('top', anchorPt);\n        }\n      }\n\n      this._setBreakPoints(newContainerHeight, function () {\n        if (cb && typeof cb === 'function') {\n          cb();\n        }\n      });\n    }\n    /**\n     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.\n     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.\n     * @param {Function} cb - optional callback function to be called on completion.\n     * @private\n     */\n\n  }, {\n    key: \"_setBreakPoints\",\n    value: function _setBreakPoints(elemHeight, cb) {\n      if (!this.canStick) {\n        if (cb && typeof cb === 'function') {\n          cb();\n        } else {\n          return false;\n        }\n      }\n\n      var mTop = emCalc(this.options.marginTop),\n          mBtm = emCalc(this.options.marginBottom),\n          topPoint = this.points ? this.points[0] : this.$anchor.offset().top,\n          bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,\n          // topPoint = this.$anchor.offset().top || this.points[0],\n      // bottomPoint = topPoint + this.anchorHeight || this.points[1],\n      winHeight = window.innerHeight;\n\n      if (this.options.stickTo === 'top') {\n        topPoint -= mTop;\n        bottomPoint -= elemHeight + mTop;\n      } else if (this.options.stickTo === 'bottom') {\n        topPoint -= winHeight - (elemHeight + mBtm);\n        bottomPoint -= winHeight - mBtm;\n      } else {//this would be the stickTo: both option... tricky\n      }\n\n      this.topPoint = topPoint;\n      this.bottomPoint = bottomPoint;\n\n      if (cb && typeof cb === 'function') {\n        cb();\n      }\n    }\n    /**\n     * Destroys the current sticky element.\n     * Resets the element to the top position first.\n     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this._removeSticky(true);\n\n      this.$element.removeClass(\"\".concat(this.options.stickyClass, \" is-anchored is-at-top\")).css({\n        height: '',\n        top: '',\n        bottom: '',\n        'max-width': ''\n      }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');\n\n      if (this.$anchor && this.$anchor.length) {\n        this.$anchor.off('change.zf.sticky');\n      }\n\n      if (this.scrollListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n\n      if (this.wasWrapped) {\n        this.$element.unwrap();\n      } else {\n        this.$container.removeClass(this.options.containerClass).css({\n          height: ''\n        });\n      }\n    }\n  }]);\n\n  return Sticky;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__[\"Plugin\"]);\n\nSticky.defaults = {\n  /**\n   * Customizable container template. Add your own classes for styling and sizing.\n   * @option\n   * @type {string}\n   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'\n   */\n  container: '<div data-sticky-container></div>',\n\n  /**\n   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.\n   * @option\n   * @type {string}\n   * @default 'top'\n   */\n  stickTo: 'top',\n\n  /**\n   * If anchored to a single element, the id of that element.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  anchor: '',\n\n  /**\n   * If using more than one element as anchor points, the id of the top anchor.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  topAnchor: '',\n\n  /**\n   * If using more than one element as anchor points, the id of the bottom anchor.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  btmAnchor: '',\n\n  /**\n   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.\n   * @option\n   * @type {number}\n   * @default 1\n   */\n  marginTop: 1,\n\n  /**\n   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.\n   * @option\n   * @type {number}\n   * @default 1\n   */\n  marginBottom: 1,\n\n  /**\n   * Breakpoint string that is the minimum screen size an element should become sticky.\n   * @option\n   * @type {string}\n   * @default 'medium'\n   */\n  stickyOn: 'medium',\n\n  /**\n   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.\n   * @option\n   * @type {string}\n   * @default 'sticky'\n   */\n  stickyClass: 'sticky',\n\n  /**\n   * Class applied to sticky container. Foundation defaults to `sticky-container`.\n   * @option\n   * @type {string}\n   * @default 'sticky-container'\n   */\n  containerClass: 'sticky-container',\n\n  /**\n   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.\n   * @option\n   * @type {number}\n   * @default -1\n   */\n  checkEvery: -1\n};\n/**\n * Helper function to calculate em values\n * @param Number {em} - number of em's to calculate into pixels\n */\n\nfunction emCalc(em) {\n  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.sticky.js?");

// /***/ }),

// /***/ "./js/foundation.tabs.js":
// /*!*******************************!*\
//   !*** ./js/foundation.tabs.js ***!
//   \*******************************/
// /*! exports provided: Tabs */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tabs\", function() { return Tabs; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");\n/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.imageLoader */ \"./js/foundation.util.imageLoader.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Tabs module.\n * @module foundation.tabs\n * @requires foundation.util.keyboard\n * @requires foundation.util.imageLoader if tabs contain images\n */\n\nvar Tabs =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Tabs, _Plugin);\n\n  function Tabs() {\n    _classCallCheck(this, Tabs);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));\n  }\n\n  _createClass(Tabs, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of tabs.\n     * @class\n     * @name Tabs\n     * @fires Tabs#init\n     * @param {jQuery} element - jQuery object to make into tabs.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tabs.defaults, this.$element.data(), options);\n      this.className = 'Tabs'; // ie9 back compat\n\n      this._init();\n\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].register('Tabs', {\n        'ENTER': 'open',\n        'SPACE': 'open',\n        'ARROW_RIGHT': 'next',\n        'ARROW_UP': 'previous',\n        'ARROW_DOWN': 'next',\n        'ARROW_LEFT': 'previous' // 'TAB': 'next',\n        // 'SHIFT_TAB': 'previous'\n\n      });\n    }\n    /**\n     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var _this2 = this;\n\n      var _this = this;\n\n      this._isInitializing = true;\n      this.$element.attr({\n        'role': 'tablist'\n      });\n      this.$tabTitles = this.$element.find(\".\".concat(this.options.linkClass));\n      this.$tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-tabs-content=\\\"\".concat(this.$element[0].id, \"\\\"]\"));\n      this.$tabTitles.each(function () {\n        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            $link = $elem.find('a'),\n            isActive = $elem.hasClass(\"\".concat(_this.options.linkActiveClass)),\n            hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),\n            linkId = $link[0].id ? $link[0].id : \"\".concat(hash, \"-label\"),\n            $tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(hash));\n        $elem.attr({\n          'role': 'presentation'\n        });\n        $link.attr({\n          'role': 'tab',\n          'aria-controls': hash,\n          'aria-selected': isActive,\n          'id': linkId,\n          'tabindex': isActive ? '0' : '-1'\n        });\n        $tabContent.attr({\n          'role': 'tabpanel',\n          'aria-labelledby': linkId\n        }); // Save up the initial hash to return to it later when going back in history\n\n        if (isActive) {\n          _this._initialAnchor = \"#\".concat(hash);\n        }\n\n        if (!isActive) {\n          $tabContent.attr('aria-hidden', 'true');\n        }\n\n        if (isActive && _this.options.autoFocus) {\n          _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"onLoad\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({\n              scrollTop: $elem.offset().top\n            }, _this.options.deepLinkSmudgeDelay, function () {\n              $link.focus();\n            });\n          });\n        }\n      });\n\n      if (this.options.matchHeight) {\n        var $images = this.$tabContent.find('img');\n\n        if ($images.length) {\n          Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__[\"onImagesLoaded\"])($images, this._setHeight.bind(this));\n        } else {\n          this._setHeight();\n        }\n      } // Current context-bound function to open tabs on page load or history hashchange\n\n\n      this._checkDeepLink = function () {\n        var anchor = window.location.hash;\n\n        if (!anchor.length) {\n          // If we are still initializing and there is no anchor, then there is nothing to do\n          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor\n\n          if (_this2._initialAnchor) anchor = _this2._initialAnchor;\n        }\n\n        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);\n\n        var $link = anchor && _this2.$element.find('[href$=\"' + anchor + '\"]'); // Whether the anchor element that has been found is part of this element\n\n\n        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, select it\n\n        if ($anchor && $anchor.length && $link && $link.length) {\n          _this2.selectTab($anchor, true);\n        } // Otherwise, collapse everything\n        else {\n            _this2._collapse();\n          }\n\n        if (isOwnAnchor) {\n          // Roll up a little to show the titles\n          if (_this2.options.deepLinkSmudge) {\n            var offset = _this2.$element.offset();\n\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({\n              scrollTop: offset.top\n            }, _this2.options.deepLinkSmudgeDelay);\n          }\n          /**\n           * Fires when the plugin has deeplinked at pageload\n           * @event Tabs#deeplink\n           */\n\n\n          _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);\n        }\n      }; //use browser to open a tab, if it exists in this tabset\n\n\n      if (this.options.deepLink) {\n        this._checkDeepLink();\n      }\n\n      this._events();\n\n      this._isInitializing = false;\n    }\n    /**\n     * Adds event handlers for items within the tabs.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this._addKeyHandler();\n\n      this._addClickHandler();\n\n      this._setHeightMqHandler = null;\n\n      if (this.options.matchHeight) {\n        this._setHeightMqHandler = this._setHeight.bind(this);\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);\n      }\n\n      if (this.options.deepLink) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);\n      }\n    }\n    /**\n     * Adds click handlers for items within the tabs.\n     * @private\n     */\n\n  }, {\n    key: \"_addClickHandler\",\n    value: function _addClickHandler() {\n      var _this = this;\n\n      this.$element.off('click.zf.tabs').on('click.zf.tabs', \".\".concat(this.options.linkClass), function (e) {\n        e.preventDefault();\n        e.stopPropagation();\n\n        _this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));\n      });\n    }\n    /**\n     * Adds keyboard event handlers for items within the tabs.\n     * @private\n     */\n\n  }, {\n    key: \"_addKeyHandler\",\n    value: function _addKeyHandler() {\n      var _this = this;\n\n      this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {\n        if (e.which === 9) return;\n        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            $elements = $element.parent('ul').children('li'),\n            $prevElement,\n            $nextElement;\n        $elements.each(function (i) {\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {\n            if (_this.options.wrapOnKeys) {\n              $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);\n              $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);\n            } else {\n              $prevElement = $elements.eq(Math.max(0, i - 1));\n              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));\n            }\n\n            return;\n          }\n        }); // handle keyboard event with keyboard util\n\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"Keyboard\"].handleKey(e, 'Tabs', {\n          open: function open() {\n            $element.find('[role=\"tab\"]').focus();\n\n            _this._handleTabChange($element);\n          },\n          previous: function previous() {\n            $prevElement.find('[role=\"tab\"]').focus();\n\n            _this._handleTabChange($prevElement);\n          },\n          next: function next() {\n            $nextElement.find('[role=\"tab\"]').focus();\n\n            _this._handleTabChange($nextElement);\n          },\n          handled: function handled() {\n            e.stopPropagation();\n            e.preventDefault();\n          }\n        });\n      });\n    }\n    /**\n     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.\n     * @param {jQuery} $target - Tab to open.\n     * @param {boolean} historyHandled - browser has already handled a history update\n     * @fires Tabs#change\n     * @function\n     */\n\n  }, {\n    key: \"_handleTabChange\",\n    value: function _handleTabChange($target, historyHandled) {\n      // With `activeCollapse`, if the target is the active Tab, collapse it.\n      if ($target.hasClass(\"\".concat(this.options.linkActiveClass))) {\n        if (this.options.activeCollapse) {\n          this._collapse();\n        }\n\n        return;\n      }\n\n      var $oldTab = this.$element.find(\".\".concat(this.options.linkClass, \".\").concat(this.options.linkActiveClass)),\n          $tabLink = $target.find('[role=\"tab\"]'),\n          target = $tabLink.attr('data-tabs-target'),\n          anchor = target && target.length ? \"#\".concat(target) : $tabLink[0].hash,\n          $targetContent = this.$tabContent.find(anchor); //close old tab\n\n      this._collapseTab($oldTab); //open new tab\n\n\n      this._openTab($target); //either replace or update browser history\n\n\n      if (this.options.deepLink && !historyHandled) {\n        if (this.options.updateHistory) {\n          history.pushState({}, '', anchor);\n        } else {\n          history.replaceState({}, '', anchor);\n        }\n      }\n      /**\n       * Fires when the plugin has successfully changed tabs.\n       * @event Tabs#change\n       */\n\n\n      this.$element.trigger('change.zf.tabs', [$target, $targetContent]); //fire to children a mutation event\n\n      $targetContent.find(\"[data-mutate]\").trigger(\"mutateme.zf.trigger\");\n    }\n    /**\n     * Opens the tab `$targetContent` defined by `$target`.\n     * @param {jQuery} $target - Tab to open.\n     * @function\n     */\n\n  }, {\n    key: \"_openTab\",\n    value: function _openTab($target) {\n      var $tabLink = $target.find('[role=\"tab\"]'),\n          hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),\n          $targetContent = this.$tabContent.find(\"#\".concat(hash));\n      $target.addClass(\"\".concat(this.options.linkActiveClass));\n      $tabLink.attr({\n        'aria-selected': 'true',\n        'tabindex': '0'\n      });\n      $targetContent.addClass(\"\".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');\n    }\n    /**\n     * Collapses `$targetContent` defined by `$target`.\n     * @param {jQuery} $target - Tab to collapse.\n     * @function\n     */\n\n  }, {\n    key: \"_collapseTab\",\n    value: function _collapseTab($target) {\n      var $target_anchor = $target.removeClass(\"\".concat(this.options.linkActiveClass)).find('[role=\"tab\"]').attr({\n        'aria-selected': 'false',\n        'tabindex': -1\n      });\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat($target_anchor.attr('aria-controls'))).removeClass(\"\".concat(this.options.panelActiveClass)).attr({\n        'aria-hidden': 'true'\n      });\n    }\n    /**\n     * Collapses the active Tab.\n     * @fires Tabs#collapse\n     * @function\n     */\n\n  }, {\n    key: \"_collapse\",\n    value: function _collapse() {\n      var $activeTab = this.$element.find(\".\".concat(this.options.linkClass, \".\").concat(this.options.linkActiveClass));\n\n      if ($activeTab.length) {\n        this._collapseTab($activeTab);\n        /**\n        * Fires when the plugin has successfully collapsed tabs.\n        * @event Tabs#collapse\n        */\n\n\n        this.$element.trigger('collapse.zf.tabs', [$activeTab]);\n      }\n    }\n    /**\n     * Public method for selecting a content pane to display.\n     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.\n     * @param {boolean} historyHandled - browser has already handled a history update\n     * @function\n     */\n\n  }, {\n    key: \"selectTab\",\n    value: function selectTab(elem, historyHandled) {\n      var idStr;\n\n      if (_typeof(elem) === 'object') {\n        idStr = elem[0].id;\n      } else {\n        idStr = elem;\n      }\n\n      if (idStr.indexOf('#') < 0) {\n        idStr = \"#\".concat(idStr);\n      }\n\n      var $target = this.$tabTitles.has(\"[href$=\\\"\".concat(idStr, \"\\\"]\"));\n\n      this._handleTabChange($target, historyHandled);\n    }\n  }, {\n    key: \"_setHeight\",\n\n    /**\n     * Sets the height of each panel to the height of the tallest panel.\n     * If enabled in options, gets called on media query change.\n     * If loading content via external source, can be called directly or with _reflow.\n     * If enabled with `data-match-height=\"true\"`, tabs sets to equal height\n     * @function\n     * @private\n     */\n    value: function _setHeight() {\n      var max = 0,\n          _this = this; // Lock down the `this` value for the root tabs object\n\n\n      this.$tabContent.find(\".\".concat(this.options.panelClass)).css('height', '').each(function () {\n        var panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            isActive = panel.hasClass(\"\".concat(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child\n\n        if (!isActive) {\n          panel.css({\n            'visibility': 'hidden',\n            'display': 'block'\n          });\n        }\n\n        var temp = this.getBoundingClientRect().height;\n\n        if (!isActive) {\n          panel.css({\n            'visibility': '',\n            'display': ''\n          });\n        }\n\n        max = temp > max ? temp : max;\n      }).css('height', \"\".concat(max, \"px\"));\n    }\n    /**\n     * Destroys an instance of tabs.\n     * @fires Tabs#destroyed\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.find(\".\".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(\".\".concat(this.options.panelClass)).hide();\n\n      if (this.options.matchHeight) {\n        if (this._setHeightMqHandler != null) {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);\n        }\n      }\n\n      if (this.options.deepLink) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);\n      }\n\n      if (this.onLoadListener) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);\n      }\n    }\n  }]);\n\n  return Tabs;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__[\"Plugin\"]);\n\nTabs.defaults = {\n  /**\n   * Link the location hash to the active pane.\n   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLink: false,\n\n  /**\n   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  deepLinkSmudge: false,\n\n  /**\n   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment\n   * @option\n   * @type {number}\n   * @default 300\n   */\n  deepLinkSmudgeDelay: 300,\n\n  /**\n   * If `deepLink` is enabled, update the browser history with the open tab\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  updateHistory: false,\n\n  /**\n   * Allows the window to scroll to content of active pane on load.\n   * Not recommended if more than one tab panel per page.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  autoFocus: false,\n\n  /**\n   * Allows keyboard input to 'wrap' around the tab links.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  wrapOnKeys: true,\n\n  /**\n   * Allows the tab content panes to match heights if set to true.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  matchHeight: false,\n\n  /**\n   * Allows active tabs to collapse when clicked.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  activeCollapse: false,\n\n  /**\n   * Class applied to `li`'s in tab link list.\n   * @option\n   * @type {string}\n   * @default 'tabs-title'\n   */\n  linkClass: 'tabs-title',\n\n  /**\n   * Class applied to the active `li` in tab link list.\n   * @option\n   * @type {string}\n   * @default 'is-active'\n   */\n  linkActiveClass: 'is-active',\n\n  /**\n   * Class applied to the content containers.\n   * @option\n   * @type {string}\n   * @default 'tabs-panel'\n   */\n  panelClass: 'tabs-panel',\n\n  /**\n   * Class applied to the active content container.\n   * @option\n   * @type {string}\n   * @default 'is-active'\n   */\n  panelActiveClass: 'is-active'\n};\n\n\n//# sourceURL=webpack:///./js/foundation.tabs.js?");

// /***/ }),

// /***/ "./js/foundation.toggler.js":
// /*!**********************************!*\
//   !*** ./js/foundation.toggler.js ***!
//   \**********************************/
// /*! exports provided: Toggler */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Toggler\", function() { return Toggler; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Toggler module.\n * @module foundation.toggler\n * @requires foundation.util.motion\n * @requires foundation.util.triggers\n */\n\nvar Toggler =\n/*#__PURE__*/\nfunction (_Plugin) {\n  _inherits(Toggler, _Plugin);\n\n  function Toggler() {\n    _classCallCheck(this, Toggler);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Toggler).apply(this, arguments));\n  }\n\n  _createClass(Toggler, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of Toggler.\n     * @class\n     * @name Toggler\n     * @fires Toggler#init\n     * @param {Object} element - jQuery object to add the trigger to.\n     * @param {Object} options - Overrides to the default plugin settings.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Toggler.defaults, element.data(), options);\n      this.className = '';\n      this.className = 'Toggler'; // ie9 back compat\n      // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n\n      this._events();\n    }\n    /**\n     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      var input; // Parse animation classes if they were set\n\n      if (this.options.animate) {\n        input = this.options.animate.split(' ');\n        this.animationIn = input[0];\n        this.animationOut = input[1] || null;\n      } // Otherwise, parse toggle class\n      else {\n          input = this.$element.data('toggler'); // Allow for a . at the beginning of the string\n\n          this.className = input[0] === '.' ? input.slice(1) : input;\n        } // Add ARIA attributes to triggers:\n\n\n      var id = this.$element[0].id,\n          $triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open~=\\\"\".concat(id, \"\\\"], [data-close~=\\\"\").concat(id, \"\\\"], [data-toggle~=\\\"\").concat(id, \"\\\"]\")); // - aria-expanded: according to the element visibility.\n\n      $triggers.attr('aria-expanded', !this.$element.is(':hidden')); // - aria-controls: adding the element id to it if not already in it.\n\n      $triggers.each(function (index, trigger) {\n        var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger);\n        var controls = $trigger.attr('aria-controls') || '';\n        var containsId = new RegExp(\"\\\\b\".concat(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__[\"RegExpEscape\"])(id), \"\\\\b\")).test(controls);\n        if (!containsId) $trigger.attr('aria-controls', controls ? \"\".concat(controls, \" \").concat(id) : id);\n      });\n    }\n    /**\n     * Initializes events for the toggle trigger.\n     * @function\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));\n    }\n    /**\n     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was \"on\" or \"off\".\n     * @function\n     * @fires Toggler#on\n     * @fires Toggler#off\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();\n    }\n  }, {\n    key: \"_toggleClass\",\n    value: function _toggleClass() {\n      this.$element.toggleClass(this.className);\n      var isOn = this.$element.hasClass(this.className);\n\n      if (isOn) {\n        /**\n         * Fires if the target element has the class after a toggle.\n         * @event Toggler#on\n         */\n        this.$element.trigger('on.zf.toggler');\n      } else {\n        /**\n         * Fires if the target element does not have the class after a toggle.\n         * @event Toggler#off\n         */\n        this.$element.trigger('off.zf.toggler');\n      }\n\n      this._updateARIA(isOn);\n\n      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');\n    }\n  }, {\n    key: \"_toggleAnimate\",\n    value: function _toggleAnimate() {\n      var _this = this;\n\n      if (this.$element.is(':hidden')) {\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__[\"Motion\"].animateIn(this.$element, this.animationIn, function () {\n          _this._updateARIA(true);\n\n          this.trigger('on.zf.toggler');\n          this.find('[data-mutate]').trigger('mutateme.zf.trigger');\n        });\n      } else {\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__[\"Motion\"].animateOut(this.$element, this.animationOut, function () {\n          _this._updateARIA(false);\n\n          this.trigger('off.zf.toggler');\n          this.find('[data-mutate]').trigger('mutateme.zf.trigger');\n        });\n      }\n    }\n  }, {\n    key: \"_updateARIA\",\n    value: function _updateARIA(isOn) {\n      var id = this.$element[0].id;\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat(id, \"\\\"], [data-close=\\\"\").concat(id, \"\\\"], [data-toggle=\\\"\").concat(id, \"\\\"]\")).attr({\n        'aria-expanded': isOn ? true : false\n      });\n    }\n    /**\n     * Destroys the instance of Toggler on the element.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.off('.zf.toggler');\n    }\n  }]);\n\n  return Toggler;\n}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__[\"Plugin\"]);\n\nToggler.defaults = {\n  /**\n   * Tells the plugin if the element should animated when toggled.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  animate: false\n};\n\n\n//# sourceURL=webpack:///./js/foundation.toggler.js?");

// /***/ }),

// /***/ "./js/foundation.tooltip.js":
// /*!**********************************!*\
//   !*** ./js/foundation.tooltip.js ***!
//   \**********************************/
// /*! exports provided: Tooltip */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");\n/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.positionable */ \"./js/foundation.positionable.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * Tooltip module.\n * @module foundation.tooltip\n * @requires foundation.util.box\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.triggers\n */\n\nvar Tooltip =\n/*#__PURE__*/\nfunction (_Positionable) {\n  _inherits(Tooltip, _Positionable);\n\n  function Tooltip() {\n    _classCallCheck(this, Tooltip);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));\n  }\n\n  _createClass(Tooltip, [{\n    key: \"_setup\",\n\n    /**\n     * Creates a new instance of a Tooltip.\n     * @class\n     * @name Tooltip\n     * @fires Tooltip#init\n     * @param {jQuery} element - jQuery object to attach a tooltip to.\n     * @param {Object} options - object to extend the default configuration.\n     */\n    value: function _setup(element, options) {\n      this.$element = element;\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tooltip.defaults, this.$element.data(), options);\n      this.className = 'Tooltip'; // ie9 back compat\n\n      this.isActive = false;\n      this.isClick = false; // Triggers init is idempotent, just need to make sure it is initialized\n\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n      this._init();\n    }\n    /**\n     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.\n     * @private\n     */\n\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"]._init();\n\n      var elemId = this.$element.attr('aria-describedby') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, 'tooltip');\n      this.options.tipText = this.options.tipText || this.$element.attr('title');\n      this.template = this.options.template ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.template) : this._buildTemplate(elemId);\n\n      if (this.options.allowHtml) {\n        this.template.appendTo(document.body).html(this.options.tipText).hide();\n      } else {\n        this.template.appendTo(document.body).text(this.options.tipText).hide();\n      }\n\n      this.$element.attr({\n        'title': '',\n        'aria-describedby': elemId,\n        'data-yeti-box': elemId,\n        'data-toggle': elemId,\n        'data-resize': elemId\n      }).addClass(this.options.triggerClass);\n\n      _get(_getPrototypeOf(Tooltip.prototype), \"_init\", this).call(this);\n\n      this._events();\n    }\n  }, {\n    key: \"_getDefaultPosition\",\n    value: function _getDefaultPosition() {\n      // handle legacy classnames\n      var position = this.$element[0].className.match(/\\b(top|left|right|bottom)\\b/g);\n      return position ? position[0] : 'top';\n    }\n  }, {\n    key: \"_getDefaultAlignment\",\n    value: function _getDefaultAlignment() {\n      return 'center';\n    }\n  }, {\n    key: \"_getHOffset\",\n    value: function _getHOffset() {\n      if (this.position === 'left' || this.position === 'right') {\n        return this.options.hOffset + this.options.tooltipWidth;\n      } else {\n        return this.options.hOffset;\n      }\n    }\n  }, {\n    key: \"_getVOffset\",\n    value: function _getVOffset() {\n      if (this.position === 'top' || this.position === 'bottom') {\n        return this.options.vOffset + this.options.tooltipHeight;\n      } else {\n        return this.options.vOffset;\n      }\n    }\n    /**\n     * builds the tooltip element, adds attributes, and returns the template.\n     * @private\n     */\n\n  }, {\n    key: \"_buildTemplate\",\n    value: function _buildTemplate(id) {\n      var templateClasses = \"\".concat(this.options.tooltipClass, \" \").concat(this.options.templateClasses).trim();\n      var $template = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass(templateClasses).attr({\n        'role': 'tooltip',\n        'aria-hidden': true,\n        'data-is-active': false,\n        'data-is-focus': false,\n        'id': id\n      });\n      return $template;\n    }\n    /**\n     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.\n     * if the tooltip is larger than the screen width, default to full width - any user selected margin\n     * @private\n     */\n\n  }, {\n    key: \"_setPosition\",\n    value: function _setPosition() {\n      _get(_getPrototypeOf(Tooltip.prototype), \"_setPosition\", this).call(this, this.$element, this.template);\n    }\n    /**\n     * reveals the tooltip, and fires an event to close any other open tooltips on the page\n     * @fires Tooltip#closeme\n     * @fires Tooltip#show\n     * @function\n     */\n\n  }, {\n    key: \"show\",\n    value: function show() {\n      if (this.options.showOn !== 'all' && !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"].is(this.options.showOn)) {\n        // console.error('The screen is too small to display this tooltip');\n        return false;\n      }\n\n      var _this = this;\n\n      this.template.css('visibility', 'hidden').show();\n\n      this._setPosition();\n\n      this.template.removeClass('top bottom left right').addClass(this.position);\n      this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);\n      /**\n       * Fires to close all other open tooltips on the page\n       * @event Closeme#tooltip\n       */\n\n      this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));\n      this.template.attr({\n        'data-is-active': true,\n        'aria-hidden': false\n      });\n      _this.isActive = true; // console.log(this.template);\n\n      this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {//maybe do stuff?\n      });\n      /**\n       * Fires when the tooltip is shown\n       * @event Tooltip#show\n       */\n\n      this.$element.trigger('show.zf.tooltip');\n    }\n    /**\n     * Hides the current tooltip, and resets the positioning class if it was changed due to collision\n     * @fires Tooltip#hide\n     * @function\n     */\n\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      // console.log('hiding', this.$element.data('yeti-box'));\n      var _this = this;\n\n      this.template.stop().attr({\n        'aria-hidden': true,\n        'data-is-active': false\n      }).fadeOut(this.options.fadeOutDuration, function () {\n        _this.isActive = false;\n        _this.isClick = false;\n      });\n      /**\n       * fires when the tooltip is hidden\n       * @event Tooltip#hide\n       */\n\n      this.$element.trigger('hide.zf.tooltip');\n    }\n    /**\n     * adds event listeners for the tooltip and its anchor\n     * TODO combine some of the listeners like focus and mouseenter, etc.\n     * @private\n     */\n\n  }, {\n    key: \"_events\",\n    value: function _events() {\n      var _this = this;\n\n      var $template = this.template;\n      var isFocus = false;\n\n      if (!this.options.disableHover) {\n        this.$element.on('mouseenter.zf.tooltip', function (e) {\n          if (!_this.isActive) {\n            _this.timeout = setTimeout(function () {\n              _this.show();\n            }, _this.options.hoverDelay);\n          }\n        }).on('mouseleave.zf.tooltip', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"ignoreMousedisappear\"])(function (e) {\n          clearTimeout(_this.timeout);\n\n          if (!isFocus || _this.isClick && !_this.options.clickOpen) {\n            _this.hide();\n          }\n        }));\n      }\n\n      if (this.options.clickOpen) {\n        this.$element.on('mousedown.zf.tooltip', function (e) {\n          e.stopImmediatePropagation();\n\n          if (_this.isClick) {//_this.hide();\n            // _this.isClick = false;\n          } else {\n            _this.isClick = true;\n\n            if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {\n              _this.show();\n            }\n          }\n        });\n      } else {\n        this.$element.on('mousedown.zf.tooltip', function (e) {\n          e.stopImmediatePropagation();\n          _this.isClick = true;\n        });\n      }\n\n      if (!this.options.disableForTouch) {\n        this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function (e) {\n          _this.isActive ? _this.hide() : _this.show();\n        });\n      }\n\n      this.$element.on({\n        // 'toggle.zf.trigger': this.toggle.bind(this),\n        // 'close.zf.trigger': this.hide.bind(this)\n        'close.zf.trigger': this.hide.bind(this)\n      });\n      this.$element.on('focus.zf.tooltip', function (e) {\n        isFocus = true;\n\n        if (_this.isClick) {\n          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't\n          // a real focus, otherwise on hover and come back we get bad behavior\n          if (!_this.options.clickOpen) {\n            isFocus = false;\n          }\n\n          return false;\n        } else {\n          _this.show();\n        }\n      }).on('focusout.zf.tooltip', function (e) {\n        isFocus = false;\n        _this.isClick = false;\n\n        _this.hide();\n      }).on('resizeme.zf.trigger', function () {\n        if (_this.isActive) {\n          _this._setPosition();\n        }\n      });\n    }\n    /**\n     * adds a toggle method, in addition to the static show() & hide() functions\n     * @function\n     */\n\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      if (this.isActive) {\n        this.hide();\n      } else {\n        this.show();\n      }\n    }\n    /**\n     * Destroys an instance of tooltip, removes template element from the view.\n     * @function\n     */\n\n  }, {\n    key: \"_destroy\",\n    value: function _destroy() {\n      this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');\n      this.template.remove();\n    }\n  }]);\n\n  return Tooltip;\n}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_4__[\"Positionable\"]);\n\nTooltip.defaults = {\n  disableForTouch: false,\n\n  /**\n   * Time, in ms, before a tooltip should open on hover.\n   * @option\n   * @type {number}\n   * @default 200\n   */\n  hoverDelay: 200,\n\n  /**\n   * Time, in ms, a tooltip should take to fade into view.\n   * @option\n   * @type {number}\n   * @default 150\n   */\n  fadeInDuration: 150,\n\n  /**\n   * Time, in ms, a tooltip should take to fade out of view.\n   * @option\n   * @type {number}\n   * @default 150\n   */\n  fadeOutDuration: 150,\n\n  /**\n   * Disables hover events from opening the tooltip if set to true\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  disableHover: false,\n\n  /**\n   * Optional addtional classes to apply to the tooltip template on init.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  templateClasses: '',\n\n  /**\n   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.\n   * @option\n   * @type {string}\n   * @default 'tooltip'\n   */\n  tooltipClass: 'tooltip',\n\n  /**\n   * Class applied to the tooltip anchor element.\n   * @option\n   * @type {string}\n   * @default 'has-tip'\n   */\n  triggerClass: 'has-tip',\n\n  /**\n   * Minimum breakpoint size at which to open the tooltip.\n   * @option\n   * @type {string}\n   * @default 'small'\n   */\n  showOn: 'small',\n\n  /**\n   * Custom template to be used to generate markup for tooltip.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  template: '',\n\n  /**\n   * Text displayed in the tooltip template on open.\n   * @option\n   * @type {string}\n   * @default ''\n   */\n  tipText: '',\n  touchCloseText: 'Tap to close.',\n\n  /**\n   * Allows the tooltip to remain open if triggered with a click or touch event.\n   * @option\n   * @type {boolean}\n   * @default true\n   */\n  clickOpen: true,\n\n  /**\n   * Position of tooltip. Can be left, right, bottom, top, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  position: 'auto',\n\n  /**\n   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.\n   * @option\n   * @type {string}\n   * @default 'auto'\n   */\n  alignment: 'auto',\n\n  /**\n   * Allow overlap of container/window. If false, tooltip will first try to\n   * position as defined by data-position and data-alignment, but reposition if\n   * it would cause an overflow.  @option\n   * @type {boolean}\n   * @default false\n   */\n  allowOverlap: false,\n\n  /**\n   * Allow overlap of only the bottom of the container. This is the most common\n   * behavior for dropdowns, allowing the dropdown to extend the bottom of the\n   * screen but not otherwise influence or break out of the container.\n   * Less common for tooltips.\n   * @option\n   * @type {boolean}\n   * @default false\n   */\n  allowBottomOverlap: false,\n\n  /**\n   * Distance, in pixels, the template should push away from the anchor on the Y axis.\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  vOffset: 0,\n\n  /**\n   * Distance, in pixels, the template should push away from the anchor on the X axis\n   * @option\n   * @type {number}\n   * @default 0\n   */\n  hOffset: 0,\n\n  /**\n   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip\n   * @option\n   * @type {number}\n   * @default 14\n   */\n  tooltipHeight: 14,\n\n  /**\n   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip\n   * @option\n   * @type {number}\n   * @default 12\n   */\n  tooltipWidth: 12,\n\n  /**\n  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,\n  * allowing HTML may open yourself up to XSS attacks.\n  * @option\n  * @type {boolean}\n  * @default false\n  */\n  allowHtml: false\n};\n/**\n * TODO utilize resize event trigger\n */\n\n\n\n//# sourceURL=webpack:///./js/foundation.tooltip.js?");

// /***/ }),

// /***/ "./js/foundation.util.box.js":
// /*!***********************************!*\
//   !*** ./js/foundation.util.box.js ***!
//   \***********************************/
// /*! exports provided: Box */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n\n\n\nvar Box = {\n  ImNotTouchingYou: ImNotTouchingYou,\n  OverlapArea: OverlapArea,\n  GetDimensions: GetDimensions,\n  GetOffsets: GetOffsets,\n  GetExplicitOffsets: GetExplicitOffsets\n  /**\n   * Compares the dimensions of an element to a container and determines collision events with container.\n   * @function\n   * @param {jQuery} element - jQuery object to test for collisions.\n   * @param {jQuery} parent - jQuery object to use as bounding container.\n   * @param {Boolean} lrOnly - set to true to check left and right values only.\n   * @param {Boolean} tbOnly - set to true to check top and bottom values only.\n   * @default if no parent object passed, detects collisions with `window`.\n   * @returns {Boolean} - true if collision free, false if a collision in any direction.\n   */\n\n};\n\nfunction ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {\n  return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;\n}\n\n;\n\nfunction OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {\n  var eleDims = GetDimensions(element),\n      topOver,\n      bottomOver,\n      leftOver,\n      rightOver;\n\n  if (parent) {\n    var parDims = GetDimensions(parent);\n    bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);\n    topOver = eleDims.offset.top - parDims.offset.top;\n    leftOver = eleDims.offset.left - parDims.offset.left;\n    rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);\n  } else {\n    bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);\n    topOver = eleDims.offset.top - eleDims.windowDims.offset.top;\n    leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;\n    rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);\n  }\n\n  bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);\n  topOver = Math.min(topOver, 0);\n  leftOver = Math.min(leftOver, 0);\n  rightOver = Math.min(rightOver, 0);\n\n  if (lrOnly) {\n    return leftOver + rightOver;\n  }\n\n  if (tbOnly) {\n    return topOver + bottomOver;\n  } // use sum of squares b/c we care about overlap area.\n\n\n  return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);\n}\n/**\n * Uses native methods to return an object of dimension values.\n * @function\n * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.\n * @returns {Object} - nested object of integer pixel values\n * TODO - if element is window, return only those values.\n */\n\n\nfunction GetDimensions(elem) {\n  elem = elem.length ? elem[0] : elem;\n\n  if (elem === window || elem === document) {\n    throw new Error(\"I'm sorry, Dave. I'm afraid I can't do that.\");\n  }\n\n  var rect = elem.getBoundingClientRect(),\n      parRect = elem.parentNode.getBoundingClientRect(),\n      winRect = document.body.getBoundingClientRect(),\n      winY = window.pageYOffset,\n      winX = window.pageXOffset;\n  return {\n    width: rect.width,\n    height: rect.height,\n    offset: {\n      top: rect.top + winY,\n      left: rect.left + winX\n    },\n    parentDims: {\n      width: parRect.width,\n      height: parRect.height,\n      offset: {\n        top: parRect.top + winY,\n        left: parRect.left + winX\n      }\n    },\n    windowDims: {\n      width: winRect.width,\n      height: winRect.height,\n      offset: {\n        top: winY,\n        left: winX\n      }\n    }\n  };\n}\n/**\n * Returns an object of top and left integer pixel values for dynamically rendered elements,\n * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where\n * you don't know alignment, but generally from\n * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.\n * @function\n * @param {jQuery} element - jQuery object for the element being positioned.\n * @param {jQuery} anchor - jQuery object for the element's anchor point.\n * @param {String} position - a string relating to the desired position of the element, relative to it's anchor\n * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.\n * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.\n * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.\n * TODO alter/rewrite to work with `em` values as well/instead of pixels\n */\n\n\nfunction GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {\n  console.log(\"NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5\");\n\n  switch (position) {\n    case 'top':\n      return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__[\"rtl\"])() ? GetExplicitOffsets(element, anchor, 'top', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'top', 'right', vOffset, hOffset, isOverflow);\n\n    case 'bottom':\n      return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__[\"rtl\"])() ? GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);\n\n    case 'center top':\n      return GetExplicitOffsets(element, anchor, 'top', 'center', vOffset, hOffset, isOverflow);\n\n    case 'center bottom':\n      return GetExplicitOffsets(element, anchor, 'bottom', 'center', vOffset, hOffset, isOverflow);\n\n    case 'center left':\n      return GetExplicitOffsets(element, anchor, 'left', 'center', vOffset, hOffset, isOverflow);\n\n    case 'center right':\n      return GetExplicitOffsets(element, anchor, 'right', 'center', vOffset, hOffset, isOverflow);\n\n    case 'left bottom':\n      return GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow);\n\n    case 'right bottom':\n      return GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);\n    // Backwards compatibility... this along with the reveal and reveal full\n    // classes are the only ones that didn't reference anchor\n\n    case 'center':\n      return {\n        left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + hOffset,\n        top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + vOffset)\n      };\n\n    case 'reveal':\n      return {\n        left: ($eleDims.windowDims.width - $eleDims.width) / 2 + hOffset,\n        top: $eleDims.windowDims.offset.top + vOffset\n      };\n\n    case 'reveal full':\n      return {\n        left: $eleDims.windowDims.offset.left,\n        top: $eleDims.windowDims.offset.top\n      };\n      break;\n\n    default:\n      return {\n        left: Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__[\"rtl\"])() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset : $anchorDims.offset.left + hOffset,\n        top: $anchorDims.offset.top + $anchorDims.height + vOffset\n      };\n  }\n}\n\nfunction GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {\n  var $eleDims = GetDimensions(element),\n      $anchorDims = anchor ? GetDimensions(anchor) : null;\n  var topVal, leftVal; // set position related attribute\n\n  switch (position) {\n    case 'top':\n      topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);\n      break;\n\n    case 'bottom':\n      topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;\n      break;\n\n    case 'left':\n      leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);\n      break;\n\n    case 'right':\n      leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;\n      break;\n  } // set alignment related attribute\n\n\n  switch (position) {\n    case 'top':\n    case 'bottom':\n      switch (alignment) {\n        case 'left':\n          leftVal = $anchorDims.offset.left + hOffset;\n          break;\n\n        case 'right':\n          leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;\n          break;\n\n        case 'center':\n          leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;\n          break;\n      }\n\n      break;\n\n    case 'right':\n    case 'left':\n      switch (alignment) {\n        case 'bottom':\n          topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;\n          break;\n\n        case 'top':\n          topVal = $anchorDims.offset.top + vOffset;\n          break;\n\n        case 'center':\n          topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;\n          break;\n      }\n\n      break;\n  }\n\n  return {\n    top: topVal,\n    left: leftVal\n  };\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.box.js?");

// /***/ }),

// /***/ "./js/foundation.util.imageLoader.js":
// /*!*******************************************!*\
//   !*** ./js/foundation.util.imageLoader.js ***!
//   \*******************************************/
// /*! exports provided: onImagesLoaded */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onImagesLoaded\", function() { return onImagesLoaded; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/**\n * Runs a callback function when images are fully loaded.\n * @param {Object} images - Image(s) to check if loaded.\n * @param {Func} callback - Function to execute when image is fully loaded.\n */\n\nfunction onImagesLoaded(images, callback) {\n  var self = this,\n      unloaded = images.length;\n\n  if (unloaded === 0) {\n    callback();\n  }\n\n  images.each(function () {\n    // Check if image is loaded\n    if (this.complete && typeof this.naturalWidth !== 'undefined') {\n      singleImageLoaded();\n    } else {\n      // If the above check failed, simulate loading on detached element.\n      var image = new Image(); // Still count image as loaded if it finalizes with an error.\n\n      var events = \"load.zf.images error.zf.images\";\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(image).one(events, function me(event) {\n        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off(events, me);\n        singleImageLoaded();\n      });\n      image.src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('src');\n    }\n  });\n\n  function singleImageLoaded() {\n    unloaded--;\n\n    if (unloaded === 0) {\n      callback();\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.imageLoader.js?");

// /***/ }),

// /***/ "./js/foundation.util.keyboard.js":
// /*!****************************************!*\
//   !*** ./js/foundation.util.keyboard.js ***!
//   \****************************************/
// /*! exports provided: Keyboard */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Keyboard\", function() { return Keyboard; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/*******************************************\n *                                         *\n * This util was created by Marius Olbertz *\n * Please thank Marius on GitHub /owlbertz *\n * or the web http://www.mariusolbertz.de/ *\n *                                         *\n ******************************************/\n\n\n\n\nvar keyCodes = {\n  9: 'TAB',\n  13: 'ENTER',\n  27: 'ESCAPE',\n  32: 'SPACE',\n  35: 'END',\n  36: 'HOME',\n  37: 'ARROW_LEFT',\n  38: 'ARROW_UP',\n  39: 'ARROW_RIGHT',\n  40: 'ARROW_DOWN'\n};\nvar commands = {}; // Functions pulled out to be referenceable from internals\n\nfunction findFocusable($element) {\n  if (!$element) {\n    return false;\n  }\n\n  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {\n    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex') < 0) {\n      return false;\n    } //only have visible elements and those that have a tabindex greater or equal 0\n\n\n    return true;\n  });\n}\n\nfunction parseKey(event) {\n  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase(); // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events\n\n  key = key.replace(/\\W+/, '');\n  if (event.shiftKey) key = \"SHIFT_\".concat(key);\n  if (event.ctrlKey) key = \"CTRL_\".concat(key);\n  if (event.altKey) key = \"ALT_\".concat(key); // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)\n\n  key = key.replace(/_$/, '');\n  return key;\n}\n\nvar Keyboard = {\n  keys: getKeyCodes(keyCodes),\n\n  /**\n   * Parses the (keyboard) event and returns a String that represents its key\n   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE\n   * @param {Event} event - the event generated by the event handler\n   * @return String key - String that represents the key pressed\n   */\n  parseKey: parseKey,\n\n  /**\n   * Handles the given (keyboard) event\n   * @param {Event} event - the event generated by the event handler\n   * @param {String} component - Foundation component's name, e.g. Slider or Reveal\n   * @param {Objects} functions - collection of functions that are to be executed\n   */\n  handleKey: function handleKey(event, component, functions) {\n    var commandList = commands[component],\n        keyCode = this.parseKey(event),\n        cmds,\n        command,\n        fn;\n    if (!commandList) return console.warn('Component not defined!');\n\n    if (typeof commandList.ltr === 'undefined') {\n      // this component does not differentiate between ltr and rtl\n      cmds = commandList; // use plain list\n    } else {\n      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa\n      if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"rtl\"])()) cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.rtl, commandList.ltr);\n    }\n\n    command = cmds[keyCode];\n    fn = functions[command];\n\n    if (fn && typeof fn === 'function') {\n      // execute function  if exists\n      var returnValue = fn.apply();\n\n      if (functions.handled || typeof functions.handled === 'function') {\n        // execute function when event was handled\n        functions.handled(returnValue);\n      }\n    } else {\n      if (functions.unhandled || typeof functions.unhandled === 'function') {\n        // execute function when event was not handled\n        functions.unhandled();\n      }\n    }\n  },\n\n  /**\n   * Finds all focusable elements within the given `$element`\n   * @param {jQuery} $element - jQuery object to search within\n   * @return {jQuery} $focusable - all focusable elements within `$element`\n   */\n  findFocusable: findFocusable,\n\n  /**\n   * Returns the component name name\n   * @param {Object} component - Foundation component, e.g. Slider or Reveal\n   * @return String componentName\n   */\n  register: function register(componentName, cmds) {\n    commands[componentName] = cmds;\n  },\n  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?\n  //\n\n  /**\n   * Traps the focus in the given element.\n   * @param  {jQuery} $element  jQuery object to trap the foucs into.\n   */\n  trapFocus: function trapFocus($element) {\n    var $focusable = findFocusable($element),\n        $firstFocusable = $focusable.eq(0),\n        $lastFocusable = $focusable.eq(-1);\n    $element.on('keydown.zf.trapfocus', function (event) {\n      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {\n        event.preventDefault();\n        $firstFocusable.focus();\n      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {\n        event.preventDefault();\n        $lastFocusable.focus();\n      }\n    });\n  },\n\n  /**\n   * Releases the trapped focus from the given element.\n   * @param  {jQuery} $element  jQuery object to release the focus for.\n   */\n  releaseFocus: function releaseFocus($element) {\n    $element.off('keydown.zf.trapfocus');\n  }\n};\n/*\n * Constants for easier comparing.\n * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE\n */\n\nfunction getKeyCodes(kcs) {\n  var k = {};\n\n  for (var kc in kcs) {\n    k[kcs[kc]] = kcs[kc];\n  }\n\n  return k;\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.keyboard.js?");

// /***/ }),

// /***/ "./js/foundation.util.mediaQuery.js":
// /*!******************************************!*\
//   !*** ./js/foundation.util.mediaQuery.js ***!
//   \******************************************/
// /*! exports provided: MediaQuery */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MediaQuery\", function() { return MediaQuery; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n // Default set of media queries\n\nvar defaultQueries = {\n  'default': 'only screen',\n  landscape: 'only screen and (orientation: landscape)',\n  portrait: 'only screen and (orientation: portrait)',\n  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'\n}; // matchMedia() polyfill - Test a CSS media type/query in JS.\n// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license\n\n/* eslint-disable */\n\nwindow.matchMedia || (window.matchMedia = function () {\n  \"use strict\"; // For browsers that support matchMedium api such as IE 9 and webkit\n\n  var styleMedia = window.styleMedia || window.media; // For those that don't support matchMedium\n\n  if (!styleMedia) {\n    var style = document.createElement('style'),\n        script = document.getElementsByTagName('script')[0],\n        info = null;\n    style.type = 'text/css';\n    style.id = 'matchmediajs-test';\n\n    if (!script) {\n      document.head.appendChild(style);\n    } else {\n      script.parentNode.insertBefore(style, script);\n    } // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers\n\n\n    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;\n    styleMedia = {\n      matchMedium: function matchMedium(media) {\n        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'; // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers\n\n        if (style.styleSheet) {\n          style.styleSheet.cssText = text;\n        } else {\n          style.textContent = text;\n        } // Test if media query is true or false\n\n\n        return info.width === '1px';\n      }\n    };\n  }\n\n  return function (media) {\n    return {\n      matches: styleMedia.matchMedium(media || 'all'),\n      media: media || 'all'\n    };\n  };\n}());\n/* eslint-enable */\n\nvar MediaQuery = {\n  queries: [],\n  current: '',\n\n  /**\n   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.\n   * @function\n   * @private\n   */\n  _init: function _init() {\n    var self = this;\n    var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');\n\n    if (!$meta.length) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class=\"foundation-mq\">').appendTo(document.head);\n    }\n\n    var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');\n    var namedQueries;\n    namedQueries = parseStyleToObject(extractedStyles);\n\n    for (var key in namedQueries) {\n      if (namedQueries.hasOwnProperty(key)) {\n        self.queries.push({\n          name: key,\n          value: \"only screen and (min-width: \".concat(namedQueries[key], \")\")\n        });\n      }\n    }\n\n    this.current = this._getCurrentSize();\n\n    this._watcher();\n  },\n\n  /**\n   * Checks if the screen is at least as wide as a breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint to check.\n   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.\n   */\n  atLeast: function atLeast(size) {\n    var query = this.get(size);\n\n    if (query) {\n      return window.matchMedia(query).matches;\n    }\n\n    return false;\n  },\n\n  /**\n   * Checks if the screen matches to a breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.\n   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.\n   */\n  is: function is(size) {\n    size = size.trim().split(' ');\n\n    if (size.length > 1 && size[1] === 'only') {\n      if (size[0] === this._getCurrentSize()) return true;\n    } else {\n      return this.atLeast(size[0]);\n    }\n\n    return false;\n  },\n\n  /**\n   * Gets the media query of a breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint to get.\n   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.\n   */\n  get: function get(size) {\n    for (var i in this.queries) {\n      if (this.queries.hasOwnProperty(i)) {\n        var query = this.queries[i];\n        if (size === query.name) return query.value;\n      }\n    }\n\n    return null;\n  },\n\n  /**\n   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).\n   * @function\n   * @private\n   * @returns {String} Name of the current breakpoint.\n   */\n  _getCurrentSize: function _getCurrentSize() {\n    var matched;\n\n    for (var i = 0; i < this.queries.length; i++) {\n      var query = this.queries[i];\n\n      if (window.matchMedia(query.value).matches) {\n        matched = query;\n      }\n    }\n\n    if (_typeof(matched) === 'object') {\n      return matched.name;\n    } else {\n      return matched;\n    }\n  },\n\n  /**\n   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.\n   * @function\n   * @private\n   */\n  _watcher: function _watcher() {\n    var _this = this;\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {\n      var newSize = _this._getCurrentSize(),\n          currentSize = _this.current;\n\n      if (newSize !== currentSize) {\n        // Change the current media query\n        _this.current = newSize; // Broadcast the media query change on the window\n\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);\n      }\n    });\n  }\n}; // Thank you: https://github.com/sindresorhus/query-string\n\nfunction parseStyleToObject(str) {\n  var styleObject = {};\n\n  if (typeof str !== 'string') {\n    return styleObject;\n  }\n\n  str = str.trim().slice(1, -1); // browsers re-quote string style values\n\n  if (!str) {\n    return styleObject;\n  }\n\n  styleObject = str.split('&').reduce(function (ret, param) {\n    var parts = param.replace(/\\+/g, ' ').split('=');\n    var key = parts[0];\n    var val = parts[1];\n    key = decodeURIComponent(key); // missing `=` should be `null`:\n    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n\n    val = typeof val === 'undefined' ? null : decodeURIComponent(val);\n\n    if (!ret.hasOwnProperty(key)) {\n      ret[key] = val;\n    } else if (Array.isArray(ret[key])) {\n      ret[key].push(val);\n    } else {\n      ret[key] = [ret[key], val];\n    }\n\n    return ret;\n  }, {});\n  return styleObject;\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.mediaQuery.js?");

// /***/ }),

// /***/ "./js/foundation.util.motion.js":
// /*!**************************************!*\
//   !*** ./js/foundation.util.motion.js ***!
//   \**************************************/
// /*! exports provided: Move, Motion */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Move\", function() { return Move; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Motion\", function() { return Motion; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n\n\n\n\n/**\n * Motion module.\n * @module foundation.motion\n */\n\nvar initClasses = ['mui-enter', 'mui-leave'];\nvar activeClasses = ['mui-enter-active', 'mui-leave-active'];\nvar Motion = {\n  animateIn: function animateIn(element, animation, cb) {\n    animate(true, element, animation, cb);\n  },\n  animateOut: function animateOut(element, animation, cb) {\n    animate(false, element, animation, cb);\n  }\n};\n\nfunction Move(duration, elem, fn) {\n  var anim,\n      prog,\n      start = null; // console.log('called');\n\n  if (duration === 0) {\n    fn.apply(elem);\n    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);\n    return;\n  }\n\n  function move(ts) {\n    if (!start) start = ts; // console.log(start, ts);\n\n    prog = ts - start;\n    fn.apply(elem);\n\n    if (prog < duration) {\n      anim = window.requestAnimationFrame(move, elem);\n    } else {\n      window.cancelAnimationFrame(anim);\n      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);\n    }\n  }\n\n  anim = window.requestAnimationFrame(move);\n}\n/**\n * Animates an element in or out using a CSS transition class.\n * @function\n * @private\n * @param {Boolean} isIn - Defines if the animation is in or out.\n * @param {Object} element - jQuery or HTML object to animate.\n * @param {String} animation - CSS class to use.\n * @param {Function} cb - Callback to run when animation is finished.\n */\n\n\nfunction animate(isIn, element, animation, cb) {\n  element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);\n  if (!element.length) return;\n  var initClass = isIn ? initClasses[0] : initClasses[1];\n  var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation\n\n  reset();\n  element.addClass(animation).css('transition', 'none');\n  requestAnimationFrame(function () {\n    element.addClass(initClass);\n    if (isIn) element.show();\n  }); // Start the animation\n\n  requestAnimationFrame(function () {\n    element[0].offsetWidth;\n    element.css('transition', '').addClass(activeClass);\n  }); // Clean up the animation when it finishes\n\n  element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"transitionend\"])(element), finish); // Hides the element (for out animations), resets the element, and runs a callback\n\n  function finish() {\n    if (!isIn) element.hide();\n    reset();\n    if (cb) cb.apply(element);\n  } // Resets transitions and removes motion-specific classes\n\n\n  function reset() {\n    element[0].style.transitionDuration = 0;\n    element.removeClass(\"\".concat(initClass, \" \").concat(activeClass, \" \").concat(animation));\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.motion.js?");

// /***/ }),

// /***/ "./js/foundation.util.nest.js":
// /*!************************************!*\
//   !*** ./js/foundation.util.nest.js ***!
//   \************************************/
// /*! exports provided: Nest */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nest\", function() { return Nest; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nvar Nest = {\n  Feather: function Feather(menu) {\n    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';\n    menu.attr('role', 'menubar');\n    var items = menu.find('li').attr({\n      'role': 'menuitem'\n    }),\n        subMenuClass = \"is-\".concat(type, \"-submenu\"),\n        subItemClass = \"\".concat(subMenuClass, \"-item\"),\n        hasSubClass = \"is-\".concat(type, \"-submenu-parent\"),\n        applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.\n\n    items.each(function () {\n      var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          $sub = $item.children('ul');\n\n      if ($sub.length) {\n        $item.addClass(hasSubClass);\n        $sub.addClass(\"submenu \".concat(subMenuClass)).attr({\n          'data-submenu': ''\n        });\n\n        if (applyAria) {\n          $item.attr({\n            'aria-haspopup': true,\n            'aria-label': $item.children('a:first').text()\n          }); // Note:  Drilldowns behave differently in how they hide, and so need\n          // additional attributes.  We should look if this possibly over-generalized\n          // utility (Nest) is appropriate when we rework menus in 6.4\n\n          if (type === 'drilldown') {\n            $item.attr({\n              'aria-expanded': false\n            });\n          }\n        }\n\n        $sub.addClass(\"submenu \".concat(subMenuClass)).attr({\n          'data-submenu': '',\n          'role': 'menubar'\n        });\n\n        if (type === 'drilldown') {\n          $sub.attr({\n            'aria-hidden': true\n          });\n        }\n      }\n\n      if ($item.parent('[data-submenu]').length) {\n        $item.addClass(\"is-submenu-item \".concat(subItemClass));\n      }\n    });\n    return;\n  },\n  Burn: function Burn(menu, type) {\n    var //items = menu.find('li'),\n    subMenuClass = \"is-\".concat(type, \"-submenu\"),\n        subItemClass = \"\".concat(subMenuClass, \"-item\"),\n        hasSubClass = \"is-\".concat(type, \"-submenu-parent\");\n    menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass(\"\".concat(subMenuClass, \" \").concat(subItemClass, \" \").concat(hasSubClass, \" is-submenu-item submenu is-active\")).removeAttr('data-submenu').css('display', '');\n  }\n};\n\n\n//# sourceURL=webpack:///./js/foundation.util.nest.js?");

// /***/ }),

// /***/ "./js/foundation.util.timer.js":
// /*!*************************************!*\
//   !*** ./js/foundation.util.timer.js ***!
//   \*************************************/
// /*! exports provided: Timer */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timer\", function() { return Timer; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nfunction Timer(elem, options, cb) {\n  var _this = this,\n      duration = options.duration,\n      //options is an object for easily adding features later.\n  nameSpace = Object.keys(elem.data())[0] || 'timer',\n      remain = -1,\n      start,\n      timer;\n\n  this.isPaused = false;\n\n  this.restart = function () {\n    remain = -1;\n    clearTimeout(timer);\n    this.start();\n  };\n\n  this.start = function () {\n    this.isPaused = false; // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.\n\n    clearTimeout(timer);\n    remain = remain <= 0 ? duration : remain;\n    elem.data('paused', false);\n    start = Date.now();\n    timer = setTimeout(function () {\n      if (options.infinite) {\n        _this.restart(); //rerun the timer.\n\n      }\n\n      if (cb && typeof cb === 'function') {\n        cb();\n      }\n    }, remain);\n    elem.trigger(\"timerstart.zf.\".concat(nameSpace));\n  };\n\n  this.pause = function () {\n    this.isPaused = true; //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.\n\n    clearTimeout(timer);\n    elem.data('paused', true);\n    var end = Date.now();\n    remain = remain - (end - start);\n    elem.trigger(\"timerpaused.zf.\".concat(nameSpace));\n  };\n}\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.timer.js?");

// /***/ }),

// /***/ "./js/foundation.util.touch.js":
// /*!*************************************!*\
//   !*** ./js/foundation.util.touch.js ***!
//   \*************************************/
// /*! exports provided: Touch */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Touch\", function() { return Touch; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//**************************************************\n//**Work inspired by multiple jquery swipe plugins**\n//**Done by Yohai Ararat ***************************\n//**************************************************\n\nvar Touch = {};\nvar startPosX,\n    startPosY,\n    startTime,\n    elapsedTime,\n    startEvent,\n    isMoving = false,\n    didMoved = false;\n\nfunction onTouchEnd(e) {\n  this.removeEventListener('touchmove', onTouchMove);\n  this.removeEventListener('touchend', onTouchEnd); // If the touch did not move, consider it as a \"tap\"\n\n  if (!didMoved) {\n    var tapEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('tap', startEvent || e);\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);\n  }\n\n  startEvent = null;\n  isMoving = false;\n  didMoved = false;\n}\n\nfunction onTouchMove(e) {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.preventDefault) {\n    e.preventDefault();\n  }\n\n  if (isMoving) {\n    var x = e.touches[0].pageX;\n    var y = e.touches[0].pageY;\n    var dx = startPosX - x;\n    var dy = startPosY - y;\n    var dir;\n    didMoved = true;\n    elapsedTime = new Date().getTime() - startTime;\n\n    if (Math.abs(dx) >= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.moveThreshold && elapsedTime <= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.timeThreshold) {\n      dir = dx > 0 ? 'left' : 'right';\n    } // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {\n    //   dir = dy > 0 ? 'down' : 'up';\n    // }\n\n\n    if (dir) {\n      e.preventDefault();\n      onTouchEnd.apply(this, arguments);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('swipe', e), dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(\"swipe\".concat(dir), e));\n    }\n  }\n}\n\nfunction onTouchStart(e) {\n  if (e.touches.length == 1) {\n    startPosX = e.touches[0].pageX;\n    startPosY = e.touches[0].pageY;\n    startEvent = e;\n    isMoving = true;\n    didMoved = false;\n    startTime = new Date().getTime();\n    this.addEventListener('touchmove', onTouchMove, false);\n    this.addEventListener('touchend', onTouchEnd, false);\n  }\n}\n\nfunction init() {\n  this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);\n}\n\nfunction teardown() {\n  this.removeEventListener('touchstart', onTouchStart);\n}\n\nvar SpotSwipe =\n/*#__PURE__*/\nfunction () {\n  function SpotSwipe($) {\n    _classCallCheck(this, SpotSwipe);\n\n    this.version = '1.0.0';\n    this.enabled = 'ontouchstart' in document.documentElement;\n    this.preventDefault = false;\n    this.moveThreshold = 75;\n    this.timeThreshold = 200;\n    this.$ = $;\n\n    this._init();\n  }\n\n  _createClass(SpotSwipe, [{\n    key: \"_init\",\n    value: function _init() {\n      var $ = this.$;\n      $.event.special.swipe = {\n        setup: init\n      };\n      $.event.special.tap = {\n        setup: init\n      };\n      $.each(['left', 'up', 'down', 'right'], function () {\n        $.event.special[\"swipe\".concat(this)] = {\n          setup: function setup() {\n            $(this).on('swipe', $.noop);\n          }\n        };\n      });\n    }\n  }]);\n\n  return SpotSwipe;\n}();\n/****************************************************\n * As far as I can tell, both setupSpotSwipe and    *\n * setupTouchHandler should be idempotent,          *\n * because they directly replace functions &        *\n * values, and do not add event handlers directly.  *\n ****************************************************/\n\n\nTouch.setupSpotSwipe = function ($) {\n  $.spotSwipe = new SpotSwipe($);\n};\n/****************************************************\n * Method for adding pseudo drag events to elements *\n ***************************************************/\n\n\nTouch.setupTouchHandler = function ($) {\n  $.fn.addTouch = function () {\n    this.each(function (i, el) {\n      $(el).bind('touchstart touchmove touchend touchcancel', function (event) {\n        //we pass the original event object because the jQuery event\n        //object is normalized to w3c specs and does not provide the TouchList\n        handleTouch(event);\n      });\n    });\n\n    var handleTouch = function handleTouch(event) {\n      var touches = event.changedTouches,\n          first = touches[0],\n          eventTypes = {\n        touchstart: 'mousedown',\n        touchmove: 'mousemove',\n        touchend: 'mouseup'\n      },\n          type = eventTypes[event.type],\n          simulatedEvent;\n\n      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {\n        simulatedEvent = new window.MouseEvent(type, {\n          'bubbles': true,\n          'cancelable': true,\n          'screenX': first.screenX,\n          'screenY': first.screenY,\n          'clientX': first.clientX,\n          'clientY': first.clientY\n        });\n      } else {\n        simulatedEvent = document.createEvent('MouseEvent');\n        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0\n        /*left*/\n        , null);\n      }\n\n      first.target.dispatchEvent(simulatedEvent);\n    };\n  };\n};\n\nTouch.init = function ($) {\n  if (typeof $.spotSwipe === 'undefined') {\n    Touch.setupSpotSwipe($);\n    Touch.setupTouchHandler($);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.touch.js?");

// /***/ }),

// /***/ "./js/foundation.util.triggers.js":
// /*!****************************************!*\
//   !*** ./js/foundation.util.triggers.js ***!
//   \****************************************/
// /*! exports provided: Triggers */
// /***/ (function(module, __webpack_exports__, __webpack_require__) {

// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Triggers\", function() { return Triggers; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\nvar MutationObserver = function () {\n  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];\n\n  for (var i = 0; i < prefixes.length; i++) {\n    if (\"\".concat(prefixes[i], \"MutationObserver\") in window) {\n      return window[\"\".concat(prefixes[i], \"MutationObserver\")];\n    }\n  }\n\n  return false;\n}();\n\nvar triggers = function triggers(el, type) {\n  el.data(type).split(' ').forEach(function (id) {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler'](\"\".concat(type, \".zf.trigger\"), [el]);\n  });\n};\n\nvar Triggers = {\n  Listeners: {\n    Basic: {},\n    Global: {}\n  },\n  Initializers: {}\n};\nTriggers.Listeners.Basic = {\n  openListener: function openListener() {\n    triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');\n  },\n  closeListener: function closeListener() {\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');\n\n    if (id) {\n      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');\n    }\n  },\n  toggleListener: function toggleListener() {\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');\n\n    if (id) {\n      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');\n    }\n  },\n  closeableListener: function closeableListener(e) {\n    e.stopPropagation();\n    var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');\n\n    if (animation !== '') {\n      _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');\n      });\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');\n    }\n  },\n  toggleFocusListener: function toggleFocusListener() {\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);\n  }\n}; // Elements with [data-open] will reveal a plugin that supports it when clicked.\n\nTriggers.Initializers.addOpenListener = function ($elem) {\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);\n  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);\n}; // Elements with [data-close] will close a plugin that supports it when clicked.\n// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.\n\n\nTriggers.Initializers.addCloseListener = function ($elem) {\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);\n  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);\n}; // Elements with [data-toggle] will toggle a plugin that supports it when clicked.\n\n\nTriggers.Initializers.addToggleListener = function ($elem) {\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);\n  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);\n}; // Elements with [data-closable] will respond to close.zf.trigger events.\n\n\nTriggers.Initializers.addCloseableListener = function ($elem) {\n  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);\n  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);\n}; // Elements with [data-toggle-focus] will respond to coming in and out of focus\n\n\nTriggers.Initializers.addToggleFocusListener = function ($elem) {\n  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);\n  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);\n}; // More Global/complex listeners and triggers\n\n\nTriggers.Listeners.Global = {\n  resizeListener: function resizeListener($nodes) {\n    if (!MutationObserver) {\n      //fallback for IE 9\n      $nodes.each(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');\n      });\n    } //trigger all listening elements and signal a resize event\n\n\n    $nodes.attr('data-events', \"resize\");\n  },\n  scrollListener: function scrollListener($nodes) {\n    if (!MutationObserver) {\n      //fallback for IE 9\n      $nodes.each(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');\n      });\n    } //trigger all listening elements and signal a scroll event\n\n\n    $nodes.attr('data-events', \"scroll\");\n  },\n  closeMeListener: function closeMeListener(e, pluginId) {\n    var plugin = e.namespace.split('.')[0];\n    var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-\".concat(plugin, \"]\")).not(\"[data-yeti-box=\\\"\".concat(pluginId, \"\\\"]\"));\n    plugins.each(function () {\n      var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n\n      _this.triggerHandler('close.zf.trigger', [_this]);\n    });\n  } // Global, parses whole document.\n\n};\n\nTriggers.Initializers.addClosemeListener = function (pluginName) {\n  var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),\n      plugNames = ['dropdown', 'tooltip', 'reveal'];\n\n  if (pluginName) {\n    if (typeof pluginName === 'string') {\n      plugNames.push(pluginName);\n    } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {\n      plugNames.concat(pluginName);\n    } else {\n      console.error('Plugin names must be strings');\n    }\n  }\n\n  if (yetiBoxes.length) {\n    var listeners = plugNames.map(function (name) {\n      return \"closeme.zf.\".concat(name);\n    }).join(' ');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);\n  }\n};\n\nfunction debounceGlobalListener(debounce, trigger, listener) {\n  var timer,\n      args = Array.prototype.slice.call(arguments, 3);\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(trigger).on(trigger, function (e) {\n    if (timer) {\n      clearTimeout(timer);\n    }\n\n    timer = setTimeout(function () {\n      listener.apply(null, args);\n    }, debounce || 10); //default time to emit scroll event\n  });\n}\n\nTriggers.Initializers.addResizeListener = function (debounce) {\n  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');\n\n  if ($nodes.length) {\n    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);\n  }\n};\n\nTriggers.Initializers.addScrollListener = function (debounce) {\n  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');\n\n  if ($nodes.length) {\n    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);\n  }\n};\n\nTriggers.Initializers.addMutationEventsListener = function ($elem) {\n  if (!MutationObserver) {\n    return false;\n  }\n\n  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]'); //element callback\n\n  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {\n    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target); //trigger the event handler for the element depending on type\n\n    switch (mutationRecordsList[0].type) {\n      case \"attributes\":\n        if ($target.attr(\"data-events\") === \"scroll\" && mutationRecordsList[0].attributeName === \"data-events\") {\n          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);\n        }\n\n        if ($target.attr(\"data-events\") === \"resize\" && mutationRecordsList[0].attributeName === \"data-events\") {\n          $target.triggerHandler('resizeme.zf.trigger', [$target]);\n        }\n\n        if (mutationRecordsList[0].attributeName === \"style\") {\n          $target.closest(\"[data-mutate]\").attr(\"data-events\", \"mutate\");\n          $target.closest(\"[data-mutate]\").triggerHandler('mutateme.zf.trigger', [$target.closest(\"[data-mutate]\")]);\n        }\n\n        break;\n\n      case \"childList\":\n        $target.closest(\"[data-mutate]\").attr(\"data-events\", \"mutate\");\n        $target.closest(\"[data-mutate]\").triggerHandler('mutateme.zf.trigger', [$target.closest(\"[data-mutate]\")]);\n        break;\n\n      default:\n        return false;\n      //nothing\n    }\n  };\n\n  if ($nodes.length) {\n    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer\n    for (var i = 0; i <= $nodes.length - 1; i++) {\n      var elementObserver = new MutationObserver(listeningElementsMutation);\n      elementObserver.observe($nodes[i], {\n        attributes: true,\n        childList: true,\n        characterData: false,\n        subtree: true,\n        attributeFilter: [\"data-events\", \"style\"]\n      });\n    }\n  }\n};\n\nTriggers.Initializers.addSimpleListeners = function () {\n  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);\n  Triggers.Initializers.addOpenListener($document);\n  Triggers.Initializers.addCloseListener($document);\n  Triggers.Initializers.addToggleListener($document);\n  Triggers.Initializers.addCloseableListener($document);\n  Triggers.Initializers.addToggleFocusListener($document);\n};\n\nTriggers.Initializers.addGlobalListeners = function () {\n  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);\n  Triggers.Initializers.addMutationEventsListener($document);\n  Triggers.Initializers.addResizeListener();\n  Triggers.Initializers.addScrollListener();\n  Triggers.Initializers.addClosemeListener();\n};\n\nTriggers.init = function ($, Foundation) {\n  Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"onLoad\"])($(window), function () {\n    if ($.triggersInitialized !== true) {\n      Triggers.Initializers.addSimpleListeners();\n      Triggers.Initializers.addGlobalListeners();\n      $.triggersInitialized = true;\n    }\n  });\n\n  if (Foundation) {\n    Foundation.Triggers = Triggers; // Legacy included to be backwards compatible for now.\n\n    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/foundation.util.triggers.js?");

// /***/ }),

// /***/ "jquery":
// /*!********************************************************************************************!*\
//   !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
//   \********************************************************************************************/
// /*! no static exports found */
// /***/ (function(module, exports) {

// eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;\n\n//# sourceURL=webpack:///external_%7B%22root%22:%5B%22jQuery%22%5D,%22amd%22:%22jquery%22,%22commonjs%22:%22jquery%22,%22commonjs2%22:%22jquery%22%7D?");

// /***/ })

// /******/ });
// });


!function($) {

"use strict";

var FOUNDATION_VERSION = '6.0.0';

// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
var Foundation = {
  version: FOUNDATION_VERSION,

  /**
   * Stores initialized plugins.
   */
  _plugins: {},

  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],
  /**
   * Stores currently active plugins.
   */
  _activePlugins: {},

  /**
   * Returns a boolean for RTL support
   */
  rtl: function(){
    return $('html').attr('dir') === 'rtl';
  },
  /**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function(plugin) {
    // Object key to use when adding to global Foundation object
    // Examples: Foundation.Reveal, Foundation.OffCanvas
    var className = functionName(plugin);
    // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
    // Examples: data-reveal, data-off-canvas
    var attrName  = hyphenate(className);

    // Add to the Foundation object and the plugins list (for reflowing)
    this._plugins[attrName] = this[className] = plugin;
  },
  /**
   * @function
   * Creates a pointer to an instance of a Plugin within the Foundation._activePlugins object.
   * Sets the `[data-pluginName="uniqueIdHere"]`, allowing easy access to any plugin's internal methods.
   * Also fires the initialization event for each plugin, consolidating repeditive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#init
   */
  registerPlugin: function(plugin){
    var pluginName = functionName(plugin.constructor).toLowerCase();

    plugin.uuid = this.GetYoDigits(6, pluginName);
    plugin.$element.attr('data-' + pluginName, plugin.uuid)
          /**
           * Fires when the plugin has initialized.
           * @event Plugin#init
           */
          .trigger('init.zf.' + pluginName);

    this._activePlugins[plugin.uuid] = plugin;

    return;
  },
  /**
   * @function
   * Removes the pointer for an instance of a Plugin from the Foundation._activePlugins obj.
   * Also fires the destroyed event for the plugin, consolidating repeditive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function(plugin){
    var pluginName = functionName(plugin.constructor).toLowerCase();

    delete this._activePlugins[plugin.uuid];
    plugin.$element.removeAttr('data-' + pluginName)
          /**
           * Fires when the plugin has been destroyed.
           * @event Plugin#destroyed
           */
          .trigger('destroyed.zf.' + pluginName);

    return;
  },

  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
  _reflow: function(plugins){
    var actvPlugins = Object.keys(this._activePlugins);
    var _this = this;

    if(!plugins){
      actvPlugins.forEach(function(p){
        _this._activePlugins[p]._init();
      });

    }else if(typeof plugins === 'string'){
      var namespace = plugins.split('-')[1];

      if(namespace){

        this._activePlugins[plugins]._init();

      }else{
        namespace = new RegExp(plugins, 'i');

        actvPlugins.filter(function(p){
          return namespace.test(p);
        }).forEach(function(p){
          _this._activePlugins[p]._init();
        });
      }
    }

  },

  /**
   * returns a random base-36 uid with namespacing
   * @function
   * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
   * @param {String} namespace - name of plugin to be incorporated in uid, optional.
   * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
   * @returns {String} - unique id
   */
  GetYoDigits: function(length, namespace){
    length = length || 6;
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1) + (namespace ? '-' + namespace : '');
  },
  /**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function(elem, plugins) {
    // If plugins is undefined, just grab everything
    if (typeof plugins === 'undefined') {
      plugins = Object.keys(this._plugins);
    }
    // If plugins is a string, convert it to an array with one item
    else if (typeof plugins === 'string') {
      plugins = [plugins];
    }

    var _this = this;

    // Iterate through each plugin
    $.each(plugins, function(i, name) {
      // Get the current plugin
      var plugin = _this._plugins[name];

      // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
      var $elem = $(elem).find('[data-'+name+']').addBack('*');

      // For each plugin found, initialize it
      $elem.each(function() {
        // Don't double-dip on plugins
        if ($(this).attr('zf-plugin')) {
          console.warn("Tried to initialize "+name+" on an element that already has a Foundation plugin.");
          return;
        }
        $(this).data('zf-plugin', new plugin($(this)));
      });
    });
  },
  getFnName: functionName,
  transitionend: function($elem){
    var transitions = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'otransitionend'
    };
    var elem = document.createElement('div'),
        end;

    for (var t in transitions){
      if (typeof elem.style[t] !== 'undefined'){
        end = transitions[t];
      }
    }
    if(end){
      return end;
    }else{
      end = setTimeout(function(){
        $elem.triggerHandler('transitionend', [$elem]);
      }, 1);
      return 'transitionend';
    }
  }
};


Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
  throttle: function (func, delay) {
    var timer = null;

    return function () {
      var context = this, args = arguments;

      if (timer === null) {
        timer = setTimeout(function () {
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }
};

// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
/**
 * The Foundation jQuery method.
 * @param {String|Array} method - An action to perform on the current jQuery object.
 */
var foundation = function(method) {
  var type = typeof method,
      $meta = $('meta.foundation-mq'),
      $noJS = $('.no-js');

  if(!$meta.length){
    $('<meta class="foundation-mq">').appendTo(document.head);
  }
  if($noJS.length){
    $noJS.removeClass('no-js');
  }

  if(type === 'undefined'){//needs to initialize the Foundation object, or an individual plugin.
    Foundation.MediaQuery._init();
    Foundation.reflow(this);
  }else if(type === 'string'){//an individual method to invoke on a plugin or group of plugins
    var args = Array.prototype.slice.call(arguments, 1);//collect all the arguments, if necessary
    var plugClass = this.data('zfPlugin');//determine the class of plugin

    if(plugClass !== undefined && plugClass[method] !== undefined){//make sure both the class and method exist
      if(this.length === 1){//if there's only one, call it directly.
          plugClass[method].apply(plugClass, args);
      }else{
        this.each(function(i, el){//otherwise loop through the jQuery collection and invoke the method on each
          plugClass[method].apply($(el).data('zfPlugin'), args);
        });
      }
    }else{//error for no class or no method
      throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
    }
  }else{//error for invalid argument type
    throw new TypeError("We're sorry, '" + type + "' is not a valid parameter. You must use a string representing the method you wish to invoke.");
  }
  return this;
};

window.Foundation = Foundation;
$.fn.foundation = foundation;

// Polyfill for requestAnimationFrame
(function() {
  if (!Date.now || !window.Date.now)
    window.Date.now = Date.now = function() { return new Date().getTime(); };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
      window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                 || window[vp+'CancelRequestAnimationFrame']);
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function(callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function() { callback(lastTime = nextTime); },
                          nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */
  if(!window.performance || !window.performance.now){
    window.performance = {
      start: Date.now(),
      now: function(){ return Date.now() - this.start; }
    };
  }
})();
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
// Polyfill to get the name of a function in IE9
function functionName(fn) {
  if (Function.prototype.name === undefined) {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = (funcNameRegex).exec((fn).toString());
    return (results && results.length > 1) ? results[1].trim() : "";
  }
  else if (fn.prototype === undefined) {
    return fn.constructor.name;
  }
  else {
    return fn.prototype.constructor.name;
  }
}

// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

}(jQuery);

!function(Foundation, window){
  /**
   * Compares the dimensions of an element to a container and determines collision events with container.
   * @function
   * @param {jQuery} element - jQuery object to test for collisions.
   * @param {jQuery} parent - jQuery object to use as bounding container.
   * @param {Boolean} lrOnly - set to true to check left and right values only.
   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
   * @default if no parent object passed, detects collisions with `window`.
   * @returns {Boolean} - true if collision free, false if a collision in any direction.
   */
  var ImNotTouchingYou = function(element, parent, lrOnly, tbOnly){
    var eleDims = GetDimensions(element),
        top, bottom, left, right;

    if(parent){
      var parDims = GetDimensions(parent);

      bottom = (eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top);
      top    = (eleDims.offset.top >= parDims.offset.top);
      left   = (eleDims.offset.left >= parDims.offset.left);
      right  = (eleDims.offset.left + eleDims.width <= parDims.width);
    }else{
      bottom = (eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top);
      top    = (eleDims.offset.top >= eleDims.windowDims.offset.top);
      left   = (eleDims.offset.left >= eleDims.windowDims.offset.left);
      right  = (eleDims.offset.left + eleDims.width <= eleDims.windowDims.width);
    }
    var allDirs = [bottom, top, left, right];

    if(lrOnly){ return left === right === true; }
    if(tbOnly){ return top === bottom === true; }

    return allDirs.indexOf(false) === -1;
  };

  /**
   * Uses native methods to return an object of dimension values.
   * @function
   * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
   * @returns {Object} - nested object of integer pixel values
   * TODO - if element is window, return only those values.
   */
  var GetDimensions = function(elem, test){
    elem = elem.length ? elem[0] : elem;

    if(elem === window || elem === document){ throw new Error("I'm sorry, Dave. I'm afraid I can't do that."); }

    var rect = elem.getBoundingClientRect(),
        parRect = elem.parentNode.getBoundingClientRect(),
        winRect = document.body.getBoundingClientRect(),
        winY = window.pageYOffset,
        winX = window.pageXOffset;

    return {
      width: rect.width,
      height: rect.height,
      offset: {
        top: rect.top + winY,
        left: rect.left + winX
      },
      parentDims: {
        width: parRect.width,
        height: parRect.height,
        offset: {
          top: parRect.top + winY,
          left: parRect.left + winX
        }
      },
      windowDims: {
        width: winRect.width,
        height: winRect.height,
        offset: {
          top: winY,
          left: winX
        }
      }
    };
  };
  /**
   * Returns an object of top and left integer pixel values for dynamically rendered elements,
   * such as: Tooltip, Reveal, and Dropdown
   * @function
   * @param {jQuery} element - jQuery object for the element being positioned.
   * @param {jQuery} anchor - jQuery object for the element's anchor point.
   * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
   * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
   * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
   * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
   * TODO alter/rewrite to work with `em` values as well/instead of pixels
   */
  var GetOffsets = function(element, anchor, position, vOffset, hOffset, isOverflow){
    var $eleDims = GetDimensions(element),
    // var $eleDims = GetDimensions(element),
        $anchorDims = anchor ? GetDimensions(anchor) : null;
        // $anchorDims = anchor ? GetDimensions(anchor) : null;
    switch(position){
      case 'top':
        return {
          left: $anchorDims.offset.left,
          top: $anchorDims.offset.top - ($eleDims.height + vOffset)
        };
        break;
      case 'left':
        return {
          left: $anchorDims.offset.left - ($eleDims.width + hOffset),
          top: $anchorDims.offset.top
        };
        break;
      case 'right':
        return {
          left: $anchorDims.offset.left + $anchorDims.width + hOffset,
          top: $anchorDims.offset.top
        };
        break;
      case 'center top':
        return {
          left: ($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2),
          top: $anchorDims.offset.top - ($eleDims.height + vOffset)
        };
        break;
      case 'center bottom':
        return {
          left: isOverflow ? hOffset : (($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2)),
          top: $anchorDims.offset.top + $anchorDims.height + vOffset
        };
        break;
      case 'center left':
        return {
          left: $anchorDims.offset.left - ($eleDims.width + hOffset),
          top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
        };
        break;
      case 'center right':
        return {
          left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
          top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
        };
        break;
      case 'center':
        return {
          left: ($eleDims.windowDims.offset.left + ($eleDims.windowDims.width / 2)) - ($eleDims.width / 2),
          top: ($eleDims.windowDims.offset.top + ($eleDims.windowDims.height / 2)) - ($eleDims.height / 2)
        };
        break;
      case 'reveal':
        return {
          left: ($eleDims.windowDims.width - $eleDims.width) / 2,
          top: $eleDims.windowDims.offset.top + vOffset
        };
      case 'reveal full':
        return {
          left: $eleDims.windowDims.offset.left,
          top: $eleDims.windowDims.offset.top,
        };
        break;
      default:
        return {
          left: $anchorDims.offset.left,
          top: $anchorDims.offset.top + $anchorDims.height + vOffset
        };
    }
  };
  Foundation.Box = {
    ImNotTouchingYou: ImNotTouchingYou,
    GetDimensions: GetDimensions,
    GetOffsets: GetOffsets
  };
}(window.Foundation, window);

/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/
!function($, Foundation){
  'use strict';
  Foundation.Keyboard = {};

  var keyCodes = {
    9: 'TAB',
    13: 'ENTER',
    27: 'ESCAPE',
    32: 'SPACE',
    37: 'ARROW_LEFT',
    38: 'ARROW_UP',
    39: 'ARROW_RIGHT',
    40: 'ARROW_DOWN'
  };

  // constants for easier comparing Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
  var keys = (function(kcs) {
    var k = {};
    for (var kc in kcs) k[kcs[kc]] = kcs[kc];
    return k;
  })(keyCodes);

  Foundation.Keyboard.keys = keys;

  /**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
  var parseKey = function(event) {
    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
    if (event.shiftKey) key = 'SHIFT_' + key;
    if (event.ctrlKey) key = 'CTRL_' + key;
    if (event.altKey) key = 'ALT_' + key;
    return key;
  };
  Foundation.Keyboard.parseKey = parseKey;


  // plain commands per component go here, ltr and rtl are merged based on orientation
  var commands = {};

  /**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
  var handleKey = function(event, component, functions) {
    var commandList = commands[Foundation.getFnName(component)],
      keyCode = parseKey(event),
      cmds,
      command,
      fn;
    if (!commandList) return console.warn('Component not defined!');

    if (typeof commandList.ltr === 'undefined') { // this component does not differentiate between ltr and rtl
        cmds = commandList; // use plain list
    } else { // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
        if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);

        else cmds = $.extend({}, commandList.rtl, commandList.ltr);
    }
    command = cmds[keyCode];


    fn = functions[command];
    if (fn && typeof fn === 'function') { // execute function with context of the component if exists
        fn.apply(component);
        if (functions.handled || typeof functions.handled === 'function') { // execute function when event was handled
            functions.handled.apply(component);
        }
    } else {
        if (functions.unhandled || typeof functions.unhandled === 'function') { // execute function when event was not handled
            functions.unhandled.apply(component);
        }
    }
  };
  Foundation.Keyboard.handleKey = handleKey;

  /**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
  var findFocusable = function($element) {
    return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function() {
      if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) { return false; } //only have visible elements and those that have a tabindex greater or equal 0
      return true;
    });
  };
  Foundation.Keyboard.findFocusable = findFocusable;

  /**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */

  var register = function(componentName, cmds) {
    commands[componentName] = cmds;
  };
  Foundation.Keyboard.register = register;
}(jQuery, window.Foundation);

!function($, Foundation) {

// Default set of media queries
var defaultQueries = {
  'default' : 'only screen',
  landscape : 'only screen and (orientation: landscape)',
  portrait : 'only screen and (orientation: portrait)',
  retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
    'only screen and (min--moz-device-pixel-ratio: 2),' +
    'only screen and (-o-min-device-pixel-ratio: 2/1),' +
    'only screen and (min-device-pixel-ratio: 2),' +
    'only screen and (min-resolution: 192dpi),' +
    'only screen and (min-resolution: 2dppx)'
};

var MediaQuery = {
  queries: [],
  current: '',

  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
  atLeast: function(size) {
    var query = this.get(size);

    if (query) {
      return window.matchMedia(query).matches;
    }

    return false;
  },

  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
  get: function(size) {
    for (var i in this.queries) {
      var query = this.queries[i];
      if (size === query.name) return query.value;
    }

    return null;
  },

  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init: function() {
    var self = this;
    var extractedStyles = $('.foundation-mq').css('font-family');
    var namedQueries;

    namedQueries = parseStyleToObject(extractedStyles);

    for (var key in namedQueries) {
      self.queries.push({
        name: key,
        value: 'only screen and (min-width: ' + namedQueries[key] + ')'
      });
    }

    this.current = this._getCurrentSize();

    this._watcher();

    // Extend default queries
    // namedQueries = $.extend(defaultQueries, namedQueries);
  },

  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize: function() {
    var matched;

    for (var i in this.queries) {
      var query = this.queries[i];

      if (window.matchMedia(query.value).matches) {
        matched = query;
      }
    }

    if(typeof matched === 'object') {
      return matched.name;
    } else {
      return matched;
    }
  },

  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher: function() {
    var _this = this;

    $(window).on('resize.zf.mediaquery', function() {
      var newSize = _this._getCurrentSize();

      if (newSize !== _this.current) {
        // Broadcast the media query change on the window
        $(window).trigger('changed.zf.mediaquery', [newSize, _this.current]);

        // Change the current media query
        _this.current = newSize;
      }
    });
  }
};

Foundation.MediaQuery = MediaQuery;

// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
window.matchMedia || (window.matchMedia = function() {
  'use strict';

  // For browsers that support matchMedium api such as IE 9 and webkit
  var styleMedia = (window.styleMedia || window.media);

  // For those that don't support matchMedium
  if (!styleMedia) {
    var style   = document.createElement('style'),
    script      = document.getElementsByTagName('script')[0],
    info        = null;

    style.type  = 'text/css';
    style.id    = 'matchmediajs-test';

    script.parentNode.insertBefore(style, script);

    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
    info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

    styleMedia = {
      matchMedium: function(media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        // Test if media query is true or false
        return info.width === '1px';
      }
    };
  }

  return function(media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}());

// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str) {
  var styleObject = {};

  if (typeof str !== 'string') {
    return styleObject;
  }

  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }

  styleObject = str.split('&').reduce(function(ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key);

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
    return ret;
  }, {});

  return styleObject;
}

}(jQuery, Foundation)

/**
 * Motion module.
 * @module foundation.motion
 */
!function($, Foundation) {

var initClasses   = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];

function animate(isIn, element, animation, cb) {
  element = $(element).eq(0);

  if (!element.length) return;

  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1];

  // Set up the animation
  reset();
  element.addClass(animation)
         .css('transition', 'none');
        //  .addClass(initClass);
  // if(isIn) element.show();
  requestAnimationFrame(function() {
    element.addClass(initClass);
    if (isIn) element.show();
  });
  // Start the animation
  requestAnimationFrame(function() {
    element[0].offsetWidth;
    element.css('transition', '');
    element.addClass(activeClass);
  });
  // Move(500, element, function(){
  //   // element[0].offsetWidth;
  //   element.css('transition', '');
  //   element.addClass(activeClass);
  // });

  // Clean up the animation when it finishes
  element.one(Foundation.transitionend(element), finish);//.one('finished.zf.animate', finish);

  // Hides the element (for out animations), resets the element, and runs a callback
  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  }

  // Resets transitions and removes motion-specific classes
  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
  }
}

var Motion = {
  animateIn: function(element, animation, /*duration,*/ cb) {
    animate(true, element, animation, cb);
  },

  animateOut: function(element, animation, /*duration,*/ cb) {
    animate(false, element, animation, cb);
  }
};

var Move = function(duration, elem, fn){
  var anim, prog, start = null;
  // console.log('called');

  function move(ts){
    if(!start) start = window.performance.now();
    // console.log(start, ts);
    prog = ts - start;
    fn.apply(elem);

    if(prog < duration){ anim = window.requestAnimationFrame(move, elem); }
    else{
      window.cancelAnimationFrame(anim);
      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
    }
  }
  anim = window.requestAnimationFrame(move);
};

Foundation.Move = Move;
Foundation.Motion = Motion;

}(jQuery, Foundation);

!function($, Foundation){
  'use strict';
  Foundation.Nest = {
    Feather: function(menu, type){
      menu.attr('role', 'menubar');
      type = type || 'zf';
      var items = menu.find('li').attr({'role': 'menuitem'}),
          subMenuClass = 'is-' + type + '-submenu',
          subItemClass = subMenuClass + '-item',
          hasSubClass = 'is-' + type + '-submenu-parent';

      items.each(function(){
        var $item = $(this),
            $sub = $item.children('ul');
        if($sub.length){
          $item.addClass('has-submenu ' + hasSubClass);
          $sub.addClass('submenu ' + subMenuClass).attr('data-submenu', '');
        }
        if($item.parent('[data-submenu]').length){
          $item.addClass('is-submenu-item ' + subItemClass);
        }
      });
      return;
    },
    Burn: function(menu, type){
      var items = menu.find('li').removeAttr('tabindex'),
          subMenuClass = 'is-' + type + '-submenu',
          subItemClass = subMenuClass + '-item',
          hasSubClass = 'is-' + type + '-submenu-parent';

      // menu.find('.is-active').removeClass('is-active');
      menu.find('*')
      // menu.find('.' + subMenuClass + ', .' + subItemClass + ', .is-active, .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
          .removeClass(subMenuClass + ' ' + subItemClass + ' ' + hasSubClass + ' has-submenu is-submenu-item submenu is-active')
          .removeAttr('data-submenu').css('display', '');

      // console.log(      menu.find('.' + subMenuClass + ', .' + subItemClass + ', .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
      //           .removeClass(subMenuClass + ' ' + subItemClass + ' has-submenu is-submenu-item submenu')
      //           .removeAttr('data-submenu'));
      // items.each(function(){
      //   var $item = $(this),
      //       $sub = $item.children('ul');
      //   if($item.parent('[data-submenu]').length){
      //     $item.removeClass('is-submenu-item ' + subItemClass);
      //   }
      //   if($sub.length){
      //     $item.removeClass('has-submenu');
      //     $sub.removeClass('submenu ' + subMenuClass).removeAttr('data-submenu');
      //   }
      // });
    }
  };
}(jQuery, window.Foundation);

!function($, Foundation){
  'use strict';
  var Timer = function(elem, options, cb){
    var _this = this,
        duration = options.duration,//options is an object for easily adding features later.
        nameSpace = Object.keys(elem.data())[0] || 'timer',
        remain = -1,
        start,
        timer;

    this.restart = function(){
      remain = -1;
      clearTimeout(timer);
      this.start();
    };

    this.start = function(){
      // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
      clearTimeout(timer);
      remain = remain <= 0 ? duration : remain;
      elem.data('paused', false);
      start = Date.now();
      timer = setTimeout(function(){
        if(options.infinite){
          _this.restart();//rerun the timer.
        }
        cb();
      }, remain);
      elem.trigger('timerstart.zf.' + nameSpace);
    };

    this.pause = function(){
      //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
      clearTimeout(timer);
      elem.data('paused', true);
      var end = Date.now();
      remain = remain - (end - start);
      elem.trigger('timerpaused.zf.' + nameSpace);
    };
  };
  /**
   * Runs a callback function when images are fully loaded.
   * @param {Object} images - Image(s) to check if loaded.
   * @param {Func} callback - Function to execute when image is fully loaded.
   */
  var onImagesLoaded = function(images, callback){
    var self = this,
        unloaded = images.length;

    if (unloaded === 0) {
      callback();
    }

    var singleImageLoaded = function() {
      unloaded--;
      if (unloaded === 0) {
        callback();
      }
    };

    images.each(function() {
      if (this.complete) {
        singleImageLoaded();
      }
      else if (typeof this.naturalWidth !== 'undefined' && this.naturalWidth > 0) {
        singleImageLoaded();
      }
      else {
        $(this).one('load', function() {
          singleImageLoaded();
        });
      }
    });
  };

  Foundation.Timer = Timer;
  Foundation.onImagesLoaded = onImagesLoaded;
}(jQuery, window.Foundation);

//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
(function($) {

  $.spotSwipe = {
    version: '1.0.0',
    enabled: 'ontouchstart' in document.documentElement,
    preventDefault: true,
    moveThreshold: 75,
    timeThreshold: 200
  };

  var   startPosX,
        startPosY,
        startTime,
        elapsedTime,
        isMoving = false;

  function onTouchEnd() {
    //  alert(this);
    this.removeEventListener('touchmove', onTouchMove);
    this.removeEventListener('touchend', onTouchEnd);
    isMoving = false;
  }

  function onTouchMove(e) {
    if ($.spotSwipe.preventDefault) { e.preventDefault(); }
    if(isMoving) {
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
      var dx = startPosX - x;
      var dy = startPosY - y;
      var dir;
      elapsedTime = new Date().getTime() - startTime;
      if(Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
        dir = dx > 0 ? 'left' : 'right';
      }
      else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
        dir = dy > 0 ? 'down' : 'up';
      }
      if(dir) {
        onTouchEnd.call(this);
        $(this).trigger('swipe', dir).trigger('swipe' + dir);
      }
    }
  }

  function onTouchStart(e) {
    if (e.touches.length == 1) {
      startPosX = e.touches[0].pageX;
      startPosY = e.touches[0].pageY;
      isMoving = true;
      startTime = new Date().getTime();
      this.addEventListener('touchmove', onTouchMove, false);
      this.addEventListener('touchend', onTouchEnd, false);
    }
  }

  function init() {
    this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
  }

  function teardown() {
    this.removeEventListener('touchstart', onTouchStart);
  }

  $.event.special.swipe = { setup: init };

  $.each(['left', 'up', 'down', 'right'], function () {
    $.event.special['swipe' + this] = { setup: function(){
      $(this).on('swipe', $.noop);
    } };
  });
})(jQuery);
/****************************************************
 * Method for adding psuedo drag events to elements *
 ***************************************************/
!function($){
  $.fn.addTouch = function(){
    this.each(function(i,el){
      $(el).bind('touchstart touchmove touchend touchcancel',function(){
        //we pass the original event object because the jQuery event
        //object is normalized to w3c specs and does not provide the TouchList
        handleTouch(event);
      });
    });

    var handleTouch = function(event){
      var touches = event.changedTouches,
          first = touches[0],
          eventTypes = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup'
          },
          type = eventTypes[event.type];

      var simulatedEvent = document.createEvent('MouseEvent');
      simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0/*left*/, null);
      first.target.dispatchEvent(simulatedEvent);
    };
  };
}(jQuery);


//**********************************
//**From the jQuery Mobile Library**
//**need to recreate functionality**
//**and try to improve if possible**
//**********************************

/* Removing the jQuery function ****
************************************

(function( $, window, undefined ) {

	var $document = $( document ),
		// supportTouch = $.mobile.support.touch,
		touchStartEvent = 'touchstart'//supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = 'touchend'//supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = 'touchmove'//supportTouch ? "touchmove" : "mousemove";

	// setup new event shortcuts
	$.each( ( "touchstart touchmove touchend " +
		"swipe swipeleft swiperight" ).split( " " ), function( i, name ) {

		$.fn[ name ] = function( fn ) {
			return fn ? this.bind( name, fn ) : this.trigger( name );
		};

		// jQuery < 1.8
		if ( $.attrFn ) {
			$.attrFn[ name ] = true;
		}
	});

	function triggerCustomEvent( obj, eventType, event, bubble ) {
		var originalType = event.type;
		event.type = eventType;
		if ( bubble ) {
			$.event.trigger( event, undefined, obj );
		} else {
			$.event.dispatch.call( obj, event );
		}
		event.type = originalType;
	}

	// also handles taphold

	// Also handles swipeleft, swiperight
	$.event.special.swipe = {

		// More than this horizontal displacement, and we will suppress scrolling.
		scrollSupressionThreshold: 30,

		// More time than this, and it isn't a swipe.
		durationThreshold: 1000,

		// Swipe horizontal displacement must be more than this.
		horizontalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		// Swipe vertical displacement must be less than this.
		verticalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		getLocation: function ( event ) {
			var winPageX = window.pageXOffset,
				winPageY = window.pageYOffset,
				x = event.clientX,
				y = event.clientY;

			if ( event.pageY === 0 && Math.floor( y ) > Math.floor( event.pageY ) ||
				event.pageX === 0 && Math.floor( x ) > Math.floor( event.pageX ) ) {

				// iOS4 clientX/clientY have the value that should have been
				// in pageX/pageY. While pageX/page/ have the value 0
				x = x - winPageX;
				y = y - winPageY;
			} else if ( y < ( event.pageY - winPageY) || x < ( event.pageX - winPageX ) ) {

				// Some Android browsers have totally bogus values for clientX/Y
				// when scrolling/zooming a page. Detectable since clientX/clientY
				// should never be smaller than pageX/pageY minus page scroll
				x = event.pageX - winPageX;
				y = event.pageY - winPageY;
			}

			return {
				x: x,
				y: y
			};
		},

		start: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ],
						origin: $( event.target )
					};
		},

		stop: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ]
					};
		},

		handleSwipe: function( start, stop, thisObject, origTarget ) {
			if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
				Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
				Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
				var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";

				triggerCustomEvent( thisObject, "swipe", $.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }), true );
				triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ), true );
				return true;
			}
			return false;

		},

		// This serves as a flag to ensure that at most one swipe event event is
		// in work at any given time
		eventInProgress: false,

		setup: function() {
			var events,
				thisObject = this,
				$this = $( thisObject ),
				context = {};

			// Retrieve the events data for this element and add the swipe context
			events = $.data( this, "mobile-events" );
			if ( !events ) {
				events = { length: 0 };
				$.data( this, "mobile-events", events );
			}
			events.length++;
			events.swipe = context;

			context.start = function( event ) {

				// Bail if we're already working on a swipe event
				if ( $.event.special.swipe.eventInProgress ) {
					return;
				}
				$.event.special.swipe.eventInProgress = true;

				var stop,
					start = $.event.special.swipe.start( event ),
					origTarget = event.target,
					emitted = false;

				context.move = function( event ) {
					if ( !start || event.isDefaultPrevented() ) {
						return;
					}

					stop = $.event.special.swipe.stop( event );
					if ( !emitted ) {
						emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
						if ( emitted ) {

							// Reset the context to make way for the next swipe event
							$.event.special.swipe.eventInProgress = false;
						}
					}
					// prevent scrolling
					if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
						event.preventDefault();
					}
				};

				context.stop = function() {
						emitted = true;

						// Reset the context to make way for the next swipe event
						$.event.special.swipe.eventInProgress = false;
						$document.off( touchMoveEvent, context.move );
						context.move = null;
				};

				$document.on( touchMoveEvent, context.move )
					.one( touchStopEvent, context.stop );
			};
			$this.on( touchStartEvent, context.start );
		},

		teardown: function() {
			var events, context;

			events = $.data( this, "mobile-events" );
			if ( events ) {
				context = events.swipe;
				delete events.swipe;
				events.length--;
				if ( events.length === 0 ) {
					$.removeData( this, "mobile-events" );
				}
			}

			if ( context ) {
				if ( context.start ) {
					$( this ).off( touchStartEvent, context.start );
				}
				if ( context.move ) {
					$document.off( touchMoveEvent, context.move );
				}
				if ( context.stop ) {
					$document.off( touchStopEvent, context.stop );
				}
			}
		}
	};
	$.each({
		swipeleft: "swipe.left",
		swiperight: "swipe.right"
	}, function( event, sourceEvent ) {

		$.event.special[ event ] = {
			setup: function() {
				$( this ).bind( sourceEvent, $.noop );
			},
			teardown: function() {
				$( this ).unbind( sourceEvent );
			}
		};
	});
})( jQuery, this );
*/

!function(Foundation, $) {
  'use strict';
  // Elements with [data-open] will reveal a plugin that supports it when clicked.
  $(document).on('click.zf.trigger', '[data-open]', function() {
    var id = $(this).data('open');
    $('#' + id).triggerHandler('open.zf.trigger', [$(this)]);
  });

  // Elements with [data-close] will close a plugin that supports it when clicked.
  // If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
  $(document).on('click.zf.trigger', '[data-close]', function() {
    var id = $(this).data('close');
    if (id) {
      $('#' + id).triggerHandler('close.zf.trigger', [$(this)]);
    }
    else {
      $(this).trigger('close.zf.trigger');
    }
  });

  // Elements with [data-toggle] will toggle a plugin that supports it when clicked.
  $(document).on('click.zf.trigger', '[data-toggle]', function() {
    var id = $(this).data('toggle');
    $('#' + id).triggerHandler('toggle.zf.trigger', [$(this)]);
  });

  // Elements with [data-closable] will respond to close.zf.trigger events.
  $(document).on('close.zf.trigger', '[data-closable]', function() {
    var animation = $(this).data('closable') || 'fade-out';
    if(Foundation.Motion){
      Foundation.Motion.animateOut($(this), animation, function() {
        $(this).trigger('closed.zf');
      });
    }else{
      $(this).fadeOut().trigger('closed.zf');
    }
  });

  var MutationObserver = (function () {
    var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
    for (var i=0; i < prefixes.length; i++) {
      if (prefixes[i] + 'MutationObserver' in window) {
        return window[prefixes[i] + 'MutationObserver'];
      }
    }
    return false;
  }());


  var checkListeners = function(){
    eventsListener();
    resizeListener();
    scrollListener();
    closemeListener();
  };
  /**
  * Fires once after all other scripts have loaded
  * @function
  * @private
  */
  $(window).load(function(){
    checkListeners();
  });

  //******** only fires this function once on load, if there's something to watch ********
  var closemeListener = function(pluginName){
    var yetiBoxes = $('[data-yeti-box]'),
        plugNames = ['dropdown', 'tooltip', 'reveal'];

    if(pluginName){
      if(typeof pluginName === 'string'){
        plugNames.push(pluginName);
      }else if(typeof pluginName === 'object' && typeof pluginName[0] === 'string'){
        plugNames.concat(pluginName);
      }else{
        console.error('Plugin names must be strings');
      }
    }
    if(yetiBoxes.length){
      var listeners = plugNames.map(function(name){
        return 'closeme.zf.' + name;
      }).join(' ');

      $(window).off(listeners).on(listeners, function(e, pluginId){
        var plugin = e.namespace.split('.')[0];
        var plugins = $('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');

        plugins.each(function(){
          var _this = $(this);

          _this.triggerHandler('close.zf.trigger', [_this]);
        });
      });
    }
  };
  var resizeListener = function(debounce){
    var timer,
        $nodes = $('[data-resize]');
    if($nodes.length){
      $(window).off('resize.zf.trigger')
      .on('resize.zf.trigger', function(e) {
        if (timer) { clearTimeout(timer); }

        timer = setTimeout(function(){

          if(!MutationObserver){//fallback for IE 9
            $nodes.each(function(){
              $(this).triggerHandler('resizeme.zf.trigger');
            });
          }
          //trigger all listening elements and signal a resize event
          $nodes.attr('data-events', "resize");
        }, debounce || 10);//default time to emit resize event
      });
    }
  };
  var scrollListener = function(debounce){
    var timer,
        $nodes = $('[data-scroll]');
    if($nodes.length){
      $(window).off('scroll.zf.trigger')
      .on('scroll.zf.trigger', function(e){
        if(timer){ clearTimeout(timer); }

        timer = setTimeout(function(){

          if(!MutationObserver){//fallback for IE 9
            $nodes.each(function(){
              $(this).triggerHandler('scrollme.zf.trigger');
            });
          }
          //trigger all listening elements and signal a scroll event
          $nodes.attr('data-events', "scroll");
        }, debounce || 10);//default time to emit scroll event
      });
    }
  };
  // function domMutationObserver(debounce) {
  //   // !!! This is coming soon and needs more work; not active  !!! //
  //   var timer,
  //   nodes = document.querySelectorAll('[data-mutate]');
  //   //
  //   if (nodes.length) {
  //     // var MutationObserver = (function () {
  //     //   var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
  //     //   for (var i=0; i < prefixes.length; i++) {
  //     //     if (prefixes[i] + 'MutationObserver' in window) {
  //     //       return window[prefixes[i] + 'MutationObserver'];
  //     //     }
  //     //   }
  //     //   return false;
  //     // }());
  //
  //
  //     //for the body, we need to listen for all changes effecting the style and class attributes
  //     var bodyObserver = new MutationObserver(bodyMutation);
  //     bodyObserver.observe(document.body, { attributes: true, childList: true, characterData: false, subtree:true, attributeFilter:["style", "class"]});
  //
  //
  //     //body callback
  //     function bodyMutation(mutate) {
  //       //trigger all listening elements and signal a mutation event
  //       if (timer) { clearTimeout(timer); }
  //
  //       timer = setTimeout(function() {
  //         bodyObserver.disconnect();
  //         $('[data-mutate]').attr('data-events',"mutate");
  //       }, debounce || 150);
  //     }
  //   }
  // }
  var eventsListener = function() {
    if(!MutationObserver){ return false; }
    var nodes = document.querySelectorAll('[data-resize], [data-scroll], [data-mutate]');

    //element callback
    var listeningElementsMutation = function(mutationRecordsList) {
      var $target = $(mutationRecordsList[0].target);
      //trigger the event handler for the element depending on type
      switch ($target.attr("data-events")) {

        case "resize" :
        $target.triggerHandler('resizeme.zf.trigger', [$target]);
        break;

        case "scroll" :
        $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
        break;

        // case "mutate" :
        // console.log('mutate', $target);
        // $target.triggerHandler('mutate.zf.trigger');
        //
        // //make sure we don't get stuck in an infinite loop from sloppy codeing
        // if ($target.index('[data-mutate]') == $("[data-mutate]").length-1) {
        //   domMutationObserver();
        // }
        // break;

        default :
        return false;
        //nothing
      }
    }

    if(nodes.length){
      //for each element that needs to listen for resizing, scrolling, (or coming soon mutation) add a single observer
      for (var i = 0; i <= nodes.length-1; i++) {
        var elementObserver = new MutationObserver(listeningElementsMutation);
        elementObserver.observe(nodes[i], { attributes: true, childList: false, characterData: false, subtree:false, attributeFilter:["data-events"]});
      }
    }
  };
  // ------------------------------------

  // [PH]
  // Foundation.CheckWatchers = checkWatchers;
  Foundation.IHearYou = checkListeners;
  // Foundation.ISeeYou = scrollListener;
  // Foundation.IFeelYou = closemeListener;

}(window.Foundation, window.jQuery);

!function(Foundation, $) {
  'use strict';

  /**
   * Creates a new instance of Abide.
   * @class
   * @fires Abide#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Abide(element, options) {
    this.$element = element;
    this.options  = $.extend({}, Abide.defaults, this.$element.data(), options);
    this.$window  = $(window);
    this.name     = 'Abide';
    this.attr     = 'data-abide';

    this._init();
    this._events();

    Foundation.registerPlugin(this);
  }

  /**
   * Default settings for plugin
   */
  Abide.defaults = {
    validateOn: 'fieldChange', // options: fieldChange, manual, submit
    labelErrorClass: 'is-invalid-label',
    inputErrorClass: 'is-invalid-input',
    formErrorSelector: '.form-error',
    formErrorClass: 'is-visible',
    patterns: {
      alpha : /^[a-zA-Z]+$/,
      alpha_numeric : /^[a-zA-Z0-9]+$/,
      integer : /^[-+]?\d+$/,
      number : /^[-+]?\d*(?:[\.\,]\d+)?$/,

      // amex, visa, diners
      card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
      cvv : /^([0-9]){3,4}$/,

      // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
      email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

      url : /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
      // abc.de
      domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,

      datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
      // YYYY-MM-DD
      date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
      // HH:MM:SS
      time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
      dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
      // MM/DD/YYYY
      month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
      // DD/MM/YYYY
      day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,

      // #FFF or #FFFFFF
      color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
    },
    validators: {
      equalTo: function (el, required, parent) {
        var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,
            to    = el.value,
            valid = (from === to);

        return valid;
      }
    }
  };


  /**
   * Initializes the Abide plugin and calls functions to get Abide functioning on load.
   * @private
   */
  Abide.prototype._init = function() {
  };

  /**
   * Initializes events for Abide.
   * @private
   */
  Abide.prototype._events = function() {
    var self = this;
    this.$element
      .off('.abide')
      .on('reset.fndtn.abide', function(e) {
        self.resetForm($(this));
      })
      .on('submit.fndtn.abide', function(e) {
        e.preventDefault();
        self.validateForm(self.$element);
      })
      .find('input, textarea, select')
        .off('.abide')
        .on('blur.fndtn.abide change.fndtn.abide', function (e) {
          if (self.options.validateOn === 'fieldChange') {
            self.validateInput($(e.target), self.$element);
          }
          // self.validateForm(self.$element);
        })
        .on('keydown.fndtn.abide', function (e) {
          // if (settings.live_validate === true && e.which != 9) {
          //   clearTimeout(self.timer);
          //   self.timer = setTimeout(function () {
          //     self.validate([this], e);
          //   }.bind(this), settings.timeout);
          // }
          // self.validateForm(self.$element);
        });

  },
  /**
   * Calls necessary functions to update Abide upon DOM change
   * @private
   */
  Abide.prototype._reflow = function() {
    var self = this;
  };
  /**
   * Checks whether or not a form element has the required attribute and if it's checked or not
   * @param {Object} element - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */
  Abide.prototype.requiredCheck = function($el) {
    switch ($el[0].type) {
      case 'text':
        if ($el.attr('required') && !$el.val()) {
          // requirement check does not pass
          return false;
        } else {
          return true;
        }
        break;
      case 'checkbox':
        if ($el.attr('required') && !$el.is(':checked')) {
          return false;
        } else {
          return true;
        }
        break;
      case 'radio':
        if ($el.attr('required') && !$el.is(':checked')) {
          return false;
        } else {
          return true;
        }
        break;
      default:
        if ($el.attr('required') && (!$el.val() || !$el.val().length || $el.is(':empty'))) {
          return false;
        } else {
          return true;
        }
    }
  };
  /**
   * Checks whether or not a form element has the required attribute and if it's checked or not
   * @param {Object} element - jQuery object to check for required attribute
   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
   */
  Abide.prototype.findLabel = function($el) {
    if ($el.next('label').length) {
      return $el.next('label');
    }
    else {
      return $el.closest('label');
    }
  };
  /**
   * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
   * @param {Object} element - jQuery object to add the class to
   */
  Abide.prototype.addErrorClasses = function($el) {
    var self = this,
        $label = self.findLabel($el),
        $formError = $el.next(self.options.formErrorSelector) || $el.find(self.options.formErrorSelector);

    // label
    if ($label) {
      $label.addClass(self.options.labelErrorClass);
    }
    // form error
    if ($formError) {
      $formError.addClass(self.options.formErrorClass);
    }
    // input
    $el.addClass(self.options.inputErrorClass);
  };
  /**
   * Removes CSS error class as specified by the Abide settings from the label, input, and the form
   * @param {Object} element - jQuery object to remove the class from
   */
  Abide.prototype.removeErrorClasses = function($el) {
    var self = this,
        $label = self.findLabel($el),
        $formError = $el.next(self.options.formErrorSelector) || $el.find(self.options.formErrorSelector);
    // label
    if ($label && $label.hasClass(self.options.labelErrorClass)) {
      $label.removeClass(self.options.labelErrorClass);
    }
    // form error
    if ($formError && $formError.hasClass(self.options.formErrorClass)) {
      $formError.removeClass(self.options.formErrorClass);
    }
    // input
    if ($el.hasClass(self.options.inputErrorClass)) {
      $el.removeClass(self.options.inputErrorClass);
    }
  };
  /**
   * Goes through a form to find inputs and proceeds to validate them in ways specific to their type
   * @fires Abide#invalid
   * @fires Abide#valid
   * @param {Object} element - jQuery object to validate, should be an HTML input
   * @param {Object} form - jQuery object of the entire form to find the various input elements
   */
  Abide.prototype.validateInput = function($el, $form) {
    var self = this,
        textInput = $form.find('input[type="text"]'),
        checkInput = $form.find('input[type="checkbox"]'),
        label,
        radioGroupName;

    if ($el[0].type === 'text') {
      if (!self.requiredCheck($el) || !self.validateText($el)) {
        self.addErrorClasses($el);
        $el.trigger('invalid.fndtn.abide', $el[0]);
      }
      else {
        self.removeErrorClasses($el);
        $el.trigger('valid.fndtn.abide', $el[0]);
      }
    }
    else if ($el[0].type === 'radio') {
      radioGroupName = $el.attr('name');
      label = $el.siblings('label');

      if (self.validateRadio(radioGroupName)) {
        $(label).each(function() {
          if ($(this).hasClass(self.options.labelErrorClass)) {
            $(this).removeClass(self.options.labelErrorClass);
          }
        });
        $el.trigger('valid.fndtn.abide', $el[0]);
      }
      else {
        $(label).each(function() {
          $(this).addClass(self.options.labelErrorClass);
        });
        $el.trigger('invalid.fndtn.abide', $el[0]);
      };
    }
    else if ($el[0].type === 'checkbox') {
      if (!self.requiredCheck($el)) {
        self.addErrorClasses($el);
        $el.trigger('invalid.fndtn.abide', $el[0]);
      }
      else {
        self.removeErrorClasses($el);
        $el.trigger('valid.fndtn.abide', $el[0]);
      }
    }
    else {
      if (!self.requiredCheck($el) || !self.validateText($el)) {
        self.addErrorClasses($el);
        $el.trigger('invalid.fndtn.abide', $el[0]);
      }
      else {
        self.removeErrorClasses($el);
        $el.trigger('valid.fndtn.abide', $el[0]);
      }
    }
  };
  /**
   * Goes through a form and if there are any invalid inputs, it will display the form error element
   * @param {Object} element - jQuery object to validate, should be a form HTML element
   */
  Abide.prototype.validateForm = function($form) {
    var self = this,
        inputs = $form.find('input'),
        inputCount = $form.find('input').length,
        counter = 0;

    while (counter < inputCount) {
      self.validateInput($(inputs[counter]), $form);
      counter++;
    }

    // what are all the things that can go wrong with a form?
    if ($form.find('.form-error.is-visible').length || $form.find('.is-invalid-label').length) {
      $form.find('[data-abide-error]').css('display', 'block');
    }
    else {
      $form.find('[data-abide-error]').css('display', 'none');
    }
  };
  /**
   * Determines whether or a not a text input is valid based on the patterns specified in the attribute
   * @param {Object} element - jQuery object to validate, should be a text input HTML element
   * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
   */
  Abide.prototype.validateText = function($el) {
    var self = this,
        valid = false,
        patternLib = this.options.patterns,
        inputText = $($el).val(),
        // maybe have a different way of parsing this bc people might use type
        pattern = $($el).attr('pattern');

    // if there's no value, then return true
    // since required check has already been done
    if (inputText.length === 0) {
      return true;
    }
    else {
      if (inputText.match(patternLib[pattern])) {
        return true;
      }
      else {
        return false;
      }
    }
  };
  /**
   * Determines whether or a not a radio input is valid based on whether or not it is required and selected
   * @param {String} group - A string that specifies the name of a radio button group
   * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
   */
  Abide.prototype.validateRadio = function(group) {
    var self = this,
        labels = $(':radio[name="' + group + '"]').siblings('label'),
        counter = 0;
    // go through each radio button
    $(':radio[name="' + group + '"]').each(function() {
      // put them through the required checkpoint
      if (!self.requiredCheck($(this))) {
        // if at least one doesn't pass, add a tally to the counter
        counter++;
      }
      // if at least one is checked
      // reset the counter
      if ($(this).is(':checked')) {
        counter = 0;
      }
    });

    if (counter > 0) {
      return false;
    }
    else {
      return true;
    }
  };
  Abide.prototype.matchValidation = function(val, validation) {

  };
  /**
   * Resets form inputs and styles
   * @param {Object} $form - A jQuery object that should be an HTML form element
   */
  Abide.prototype.resetForm = function($form) {
    var self = this;
    var invalidAttr = 'data-invalid';
    // remove data attributes
    $('[' + self.invalidAttr + ']', $form).removeAttr(invalidAttr);
    // remove styles
    $('.' + self.options.labelErrorClass, $form).not('small').removeClass(self.options.labelErrorClass);
    $('.' + self.options.inputErrorClass, $form).not('small').removeClass(self.options.inputErrorClass);
    $('.form-error.is-visible').removeClass('is-visible');
    $form.find('[data-abide-error]').css('display', 'none');
    $(':input', $form).not(':button, :submit, :reset, :hidden, [data-abide-ignore]').val('').removeAttr(invalidAttr);
  };
  Abide.prototype.destroy = function(){
    //TODO this...
  };

  Foundation.plugin(Abide);

  // Exports for AMD/Browserify
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Abide;
  if (typeof define === 'function')
    define(['foundation'], function() {
      return Abide;
    });

}(Foundation, jQuery);

/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 */
!function($, Foundation) {
  'use strict';

  /**
   * Creates a new instance of an accordion.
   * @class
   * @fires Accordion#init
   * @param {jQuery} element - jQuery object to make into an accordion.
   */
  function Accordion(element, options){
    this.$element = element;
    this.options = $.extend({}, Accordion.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this);
    Foundation.Keyboard.register('Accordion', {
      'ENTER': 'toggle',
      'SPACE': 'toggle',
      'ARROW_DOWN': 'next',
      'ARROW_UP': 'previous'
    });
  }

  Accordion.defaults = {
    /**
     * Amount of time to animate the opening of an accordion pane.
     * @option
     * @example 250
     */
    slideSpeed: 250,
    /**
     * Allow the accordion to have multiple open panes.
     * @option
     * @example false
     */
    multiExpand: false,
    /**
     * Allow the accordion to close all panes.
     * @option
     * @example false
     */
    allowAllClosed: false
  };

  /**
   * Initializes the accordion by animating the preset active pane(s).
   * @private
   */
  Accordion.prototype._init = function() {
    this.$element.attr('role', 'tablist');
    this.$tabs = this.$element.children('li');
    this.$tabs.each(function(idx, el){

      var $el = $(el),
          $content = $el.find('[data-tab-content]'),
          id = $content[0].id || Foundation.GetYoDigits(6, 'accordion'),
          linkId = el.id || id + '-label';

      $el.find('a:first').attr({
        'aria-controls': id,
        'role': 'tab',
        'id': linkId,
        'aria-expanded': false,
        'aria-selected': false
      });
      $content.attr({'role': 'tabpanel', 'aria-labelledby': linkId, 'aria-hidden': true, 'id': id});
    });
    var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
    if($initActive.length){
      this.down($initActive, true);
    }
    this._events();
  };

  /**
   * Adds event handlers for items within the accordion.
   * @private
   */
  Accordion.prototype._events = function() {
    var _this = this;

    this.$tabs.each(function(){
      var $elem = $(this);
      var $tabContent = $elem.children('[data-tab-content]');
      if ($tabContent.length) {
        $elem.children('a').off('click.zf.accordion keydown.zf.accordion')
               .on('click.zf.accordion', function(e){
        // $(this).children('a').on('click.zf.accordion', function(e) {
          e.preventDefault();
          if ($elem.hasClass('is-active')) {
            if(_this.options.allowAllClosed || $elem.siblings().hasClass('is-active')){
              _this.up($tabContent);
            }
          }
          else {
            _this.down($tabContent);
          }
        }).on('keydown.zf.accordion', function(e){
          Foundation.Keyboard.handleKey(e, _this, {
            toggle: function() {
              _this.toggle($tabContent);
            },
            next: function() {
              $elem.next().find('a').focus().trigger('click.zf.accordion');
            },
            previous: function() {
              $elem.prev().find('a').focus().trigger('click.zf.accordion');
            },
            handled: function() {
              e.preventDefault();
              e.stopPropagation();
            }
          });
        });
      }
    });
  };
  /**
   * Toggles the selected content pane's open/close state.
   * @param {jQuery} $target - jQuery object of the pane to toggle.
   * @function
   */
  Accordion.prototype.toggle = function($target){
    if($target.parent().hasClass('is-active')){
      if(this.options.allowAllClosed || $target.parent().siblings().hasClass('is-active')){
        this.up($target);
      }else{ return; }
    }else{
      this.down($target);
    }
  };
  /**
   * Opens the accordion tab defined by `$target`.
   * @param {jQuery} $target - Accordion pane to open.
   * @param {Boolean} firstTime - flag to determine if reflow should happen.
   * @fires Accordion#down
   * @function
   */
  Accordion.prototype.down = function($target, firstTime) {
    var _this = this;
    if(!this.options.multiExpand && !firstTime){
      var $currentActive = this.$element.find('.is-active').children('[data-tab-content]');
      if($currentActive.length){
        this.up($currentActive);
      }
    }

    $target
      .attr('aria-hidden', false)
      .parent('[data-tab-content]')
      .addBack()
      .parent().addClass('is-active');

    Foundation.Move(_this.options.slideSpeed, $target, function(){
      $target.slideDown(_this.options.slideSpeed);
    });

    if(!firstTime){
      Foundation._reflow(this.$element.attr('data-accordion'));
    }
    $('#' + $target.attr('aria-labelledby')).attr({
      'aria-expanded': true,
      'aria-selected': true
    });
    /**
     * Fires when the tab is done opening.
     * @event Accordion#down
     */
    this.$element.trigger('down.zf.accordion', [$target]);
  };

  /**
   * Closes the tab defined by `$target`.
   * @param {jQuery} $target - Accordion tab to close.
   * @fires Accordion#up
   * @function
   */
  Accordion.prototype.up = function($target) {
    var $aunts = $target.parent().siblings(),
        _this = this;
    var canClose = this.options.multiExpand ? $aunts.hasClass('is-active') : $target.parent().hasClass('is-active');

    if(!this.options.allowAllClosed && !canClose){
      return;
    }

    Foundation.Move(this.options.slideSpeed, $target, function(){
      $target.slideUp(_this.options.slideSpeed);
    });

    $target.attr('aria-hidden', true)
           .parent().removeClass('is-active');

    $('#' + $target.attr('aria-labelledby')).attr({
     'aria-expanded': false,
     'aria-selected': false
   });

    /**
     * Fires when the tab is done collapsing up.
     * @event Accordion#up
     */
    this.$element.trigger('up.zf.accordion', [$target]);
  };

  /**
   * Destroys an instance of an accordion.
   * @fires Accordion#destroyed
   * @function
   */
  Accordion.prototype.destroy = function() {
    this.$element.find('[data-tab-content]').slideUp(0).css('display', '');
    this.$element.find('a').off('.zf.accordion');

    Foundation.unregisterPlugin(this);
  };

  Foundation.plugin(Accordion);
}(jQuery, window.Foundation);

/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.nest
 */
!function($) {
  'use strict';

  /**
   * Creates a new instance of an accordion menu.
   * @class
   * @fires AccordionMenu#init
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function AccordionMenu(element, options) {
    this.$element = element;
    this.options = $.extend({}, AccordionMenu.defaults, this.$element.data(), options);

    Foundation.Nest.Feather(this.$element, 'accordion');

    this._init();

    Foundation.registerPlugin(this);
    Foundation.Keyboard.register('AccordionMenu', {
      'ENTER': 'toggle',
      'SPACE': 'toggle',
      'ARROW_RIGHT': 'open',
      'ARROW_UP': 'up',
      'ARROW_DOWN': 'down',
      'ARROW_LEFT': 'close',
      'ESCAPE': 'closeAll',
      'TAB': 'down',
      'SHIFT_TAB': 'up'
    });
  }

  AccordionMenu.defaults = {
    /**
     * Amount of time to animate the opening of a submenu in ms.
     * @option
     * @example 250
     */
    slideSpeed: 250,
    /**
     * Allow the menu to have multiple open panes.
     * @option
     * @example true
     */
    multiOpen: true
  };

  /**
   * Initializes the accordion menu by hiding all nested menus.
   * @private
   */
  AccordionMenu.prototype._init = function() {
    this.$element.find('[data-submenu]').not('.is-active').slideUp(0);//.find('a').css('padding-left', '1rem');
    this.$element.attr({
      'role': 'tablist',
      'aria-multiselectable': this.options.multiOpen
    });

    this.$menuLinks = this.$element.find('.has-submenu');
    this.$menuLinks.each(function(){
      var linkId = this.id || Foundation.GetYoDigits(6, 'acc-menu-link'),
          $elem = $(this),
          $sub = $elem.children('[data-submenu]'),
          subId = $sub[0].id || Foundation.GetYoDigits(6, 'acc-menu'),
          isActive = $sub.hasClass('is-active');
      $elem.attr({
        'aria-controls': subId,
        'aria-expanded': isActive,
        'aria-selected': false,
        'role': 'tab',
        'id': linkId
      });
      $sub.attr({
        'aria-labelledby': linkId,
        'aria-hidden': !isActive,
        'role': 'tabpanel',
        'id': subId
      });
    });
    var initPanes = this.$element.find('.is-active');
    if(initPanes.length){
      var _this = this;
      initPanes.each(function(){
        _this.down($(this));
      });
    }
    this._events();
  };

  /**
   * Adds event handlers for items within the menu.
   * @private
   */
  AccordionMenu.prototype._events = function() {
    var _this = this;

    this.$element.find('li').each(function() {
      var $submenu = $(this).children('[data-submenu]');

      if ($submenu.length) {
        $(this).children('a').off('click.zf.accordionmenu').on('click.zf.accordionmenu', function(e) {
          e.preventDefault();

          _this.toggle($submenu);
        });
      }
    }).on('keydown.zf.accordionmenu', function(e){
      var $element = $(this),
          $elements = $element.parent('ul').children('li'),
          $prevElement,
          $nextElement,
          $target = $element.children('[data-submenu]');

      $elements.each(function(i) {
        if ($(this).is($element)) {
          $prevElement = $elements.eq(Math.max(0, i-1));
          $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));

          if ($(this).children('[data-submenu]:visible').length) { // has open sub menu
            $nextElement = $element.find('li:first-child');
          }
          if ($(this).is(':first-child')) { // is first element of sub menu
            $prevElement = $element.parents('li').first();
          } else if ($prevElement.children('[data-submenu]:visible').length) { // if previous element has open sub menu
            $prevElement = $prevElement.find('li:last-child');
          }
          if ($(this).is(':last-child')) { // is last element of sub menu
            $nextElement = $element.parents('li').first().next('li');
          }

          return;
        }
      });
      Foundation.Keyboard.handleKey(e, _this, {
        open: function() {
          if ($target.is(':hidden')) {
            _this.down($target);
            $target.find('li').first().focus();
          }
        },
        close: function() {
          if ($target.length && !$target.is(':hidden')) { // close active sub of this item
            _this.up($target);
          } else if ($element.parent('[data-submenu]').length) { // close currently open sub
            _this.up($element.parent('[data-submenu]'));
            $element.parents('li').first().focus();
          }
        },
        up: function() {
          $prevElement.focus();
        },
        down: function() {
          $nextElement.focus();
        },
        toggle: function() {
          if ($element.children('[data-submenu]').length) {
            _this.toggle($element.children('[data-submenu]'));
          }
        },
        closeAll: function() {
          _this.hideAll();
        },
        handled: function() {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      });
    });//.attr('tabindex', 0);
  };
  /**
   * Closes all panes of the menu.
   * @function
   */
  AccordionMenu.prototype.hideAll = function(){
    this.$element.find('[data-submenu]').slideUp(this.options.slideSpeed);
  };
  /**
   * Toggles the open/close state of a submenu.
   * @function
   * @param {jQuery} $target - the submenu to toggle
   */
  AccordionMenu.prototype.toggle = function($target){
    if (!$target.is(':hidden')) {
      this.up($target);
    }
    else {
      this.down($target);
    }
  };
  /**
   * Opens the sub-menu defined by `$target`.
   * @param {jQuery} $target - Sub-menu to open.
   * @fires AccordionMenu#down
   */
  AccordionMenu.prototype.down = function($target) {
    var _this = this;
    console.log($target);
    if(!this.options.multiOpen){
      this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element)));
    }

    $target.addClass('is-active').attr({'aria-hidden': false})
      .parent('.has-submenu').attr({'aria-expanded': true, 'aria-selected': true});

      Foundation.Move(this.options.slideSpeed, $target, function(){
        $target.slideDown(_this.options.slideSpeed);
      });
    /**
     * Fires when the menu is done collapsing up.
     * @event AccordionMenu#down
     */
    this.$element.trigger('down.zf.accordionMenu', [$target]);
  };

  /**
   * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
   * @param {jQuery} $target - Sub-menu to close.
   * @fires AccordionMenu#up
   */
  AccordionMenu.prototype.up = function($target) {
    var _this = this;
    Foundation.Move(this.options.slideSpeed, $target, function(){
      $target.slideUp(_this.options.slideSpeed);
    });
    $target.attr('aria-hidden', true)
           .find('[data-submenu]').slideUp(0).attr('aria-hidden', true).end()
           .parent('.has-submenu')
           .attr({'aria-expanded': false, 'aria-selected': false});
    // $target.slideUp(this.options.slideSpeed, function() {
    //   $target.find('[data-submenu]').slideUp(0).attr('aria-hidden', true);
    // }).attr('aria-hidden', true).parent('.has-submenu').attr({'aria-expanded': false, 'aria-selected': false});

    /**
     * Fires when the menu is done collapsing up.
     * @event AccordionMenu#up
     */
    this.$element.trigger('up.zf.accordionMenu', [$target]);
  };

  /**
   * Destroys an instance of accordion menu.
   * @fires AccordionMenu#destroyed
   */
  AccordionMenu.prototype.destroy = function(){
    this.$element.find('[data-submenu]').slideDown(0).css('display', '');
    this.$element.find('a').off('click.zf.accordionMenu');

    Foundation.Nest.Burn(this.$element, 'accordion');
    Foundation.unregisterPlugin(this);
  };

  Foundation.plugin(AccordionMenu);
}(jQuery, window.Foundation);

/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.nest
 */
!function($, Foundation){
  'use strict';

  /**
   * Creates a new instance of a drilldown menu.
   * @class
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Drilldown(element, options){
    this.$element = element;
    this.options = $.extend({}, Drilldown.defaults, this.$element.data(), options);

    Foundation.Nest.Feather(this.$element, 'drilldown');

    this._init();

    Foundation.registerPlugin(this);
    Foundation.Keyboard.register('Drilldown', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ARROW_RIGHT': 'next',
      'ARROW_UP': 'up',
      'ARROW_DOWN': 'down',
      'ARROW_LEFT': 'previous',
      'ESCAPE': 'close',
      'TAB': 'down',
      'SHIFT_TAB': 'up'
    });
  }
  Drilldown.defaults = {
    /**
     * Markup used for JS generated back button. Prepended to submenu lists and deleted on `destroy` method.
     * @option
     * @example '<li><a>Back</a></li>'
     */
    backButton: '<li class="js-drilldown-back" tabindex="0"><a>Back</a></li>',
    /**
     * Markup used to wrap drilldown menu. Use a class name for independent styling, or the JS applied class: `is-drilldown`.
     * @option
     * @example '<div></div>'
     */
    wrapper: '<div></div>',
    /**
     * Allow the menu to return to root list on body click.
     * @option
     * @example false
     */
    closeOnClick: false,
    // holdOpen: false
  };
  /**
   * Initializes the drilldown by creating jQuery collections of elements
   * @private
   */
  Drilldown.prototype._init = function(){
    this.$submenuAnchors = this.$element.find('li.has-submenu');
    this.$submenus = this.$submenuAnchors.children('[data-submenu]').addClass('is-drilldown-sub')/*.wrap($(this.options.wrapper).addClass('is-drilldown-sub'))*/;
    // this.$rootElems = this.$element.children('[data-submenu]')/*.addClass('first-sub')*/;
    this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'menuitem');
    // this.$submenus;


    this._prepareMenu();
    // this._getMaxDims();
    this._keyboardEvents();
  };
  /**
   * prepares drilldown menu by setting attributes to links and elements
   * sets a min height to prevent content jumping
   * wraps the element if not already wrapped
   * @private
   * @function
   */
  Drilldown.prototype._prepareMenu = function(){
    var _this = this;
    // if(!this.options.holdOpen){
    //   this._menuLinkEvents();
    // }
    this.$submenuAnchors.each(function(){
      var $sub = $(this);
      $sub.find('a')[0].removeAttribute('href');
      $sub.children('[data-submenu]')
          .attr({
            'aria-hidden': true,
            'tabindex': 0,
            'role': 'menu'
          });
      _this._events($sub);
    });
    this.$submenus.each(function(){
      var $menu = $(this),
          $back = $menu.find('.js-drilldown-back');
      if(!$back.length){
        $menu.prepend(_this.options.backButton);
        _this._back($menu);
      }
    });
    if(!this.$element.parent().hasClass('is-drilldown')){
      this.$wrapper = $(this.options.wrapper).addClass('is-drilldown').css(this._getMaxDims());
      this.$element.wrap(this.$wrapper);
    }

  };
  /**
   * Adds event handlers to elements in the menu.
   * @function
   * @private
   * @param {jQuery} $elem - the current menu item to add handlers to.
   */
  Drilldown.prototype._events = function($elem){
    var _this = this;

    $elem.off('click.zf.drilldown')
    .on('click.zf.drilldown', function(e){
      e.stopImmediatePropagation();
      e.preventDefault();

      if(e.target !== e.currentTarget.firstElementChild){
        return false;
      }
      _this._show($elem);

      if(_this.options.closeOnClick){
        var $body = $('body').not(_this.$wrapper);
        $body.off('.zf.drilldown').on('click.zf.drilldown', function(e){
          e.preventDefault();
          _this._hideAll();
          $body.off('.zf.drilldown');
        });
      }
    });
  };
  /**
   * Adds keydown event listener to `li`'s in the menu.
   * @private
   */
  Drilldown.prototype._keyboardEvents = function() {
    var _this = this;
    this.$menuItems.add(this.$element.find('.js-drilldown-back')).on('keydown.zf.drilldown', function(e){
      var $element = $(this),
          $elements = $element.parent('ul').children('li'),
          $prevElement,
          $nextElement;

      $elements.each(function(i) {
        if ($(this).is($element)) {
          $prevElement = $elements.eq(Math.max(0, i-1));
          $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
          return;
        }
      });
      Foundation.Keyboard.handleKey(e, _this, {
        next: function() {
          if ($element.is(_this.$submenuAnchors)) {
            _this._show($element);
            $element.on(Foundation.transitionend($element), function(){
              $element.find('ul li').filter(_this.$menuItems).first().focus();
            });
          }
        },
        previous: function() {
          _this._hide($element.parent('ul'));
          $element.parent('ul').on(Foundation.transitionend($element), function(){
            setTimeout(function() {
              $element.parent('ul').parent('li').focus();
            }, 1);
          });
        },
        up: function() {
          $prevElement.focus();
        },
        down: function() {
          $nextElement.focus();
        },
        close: function() {
          _this._back();
          //_this.$menuItems.first().focus(); // focus to first element
        },
        open: function() {
          if (!$element.is(_this.$menuItems)) { // not menu item means back button
            _this._hide($element.parent('ul'));
            setTimeout(function(){$element.parent('ul').parent('li').focus();}, 1);
          } else if ($element.is(_this.$submenuAnchors)) {
            _this._show($element);
            setTimeout(function(){$element.find('ul li').filter(_this.$menuItems).first().focus();}, 1);
          }
        },
        handled: function() {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      });
    }); // end keyboardAccess
  };

  /**
   * Closes all open elements, and returns to root menu.
   * @function
   * @fires Drilldown#closed
   */
  Drilldown.prototype._hideAll = function(){
    var $elem = this.$element.find('.is-drilldown-sub.is-active').addClass('is-closing');
    $elem.one(Foundation.transitionend($elem), function(e){
      $elem.removeClass('is-active is-closing');
    });
        /**
         * Fires when the menu is fully closed.
         * @event Drilldown#closed
         */
    this.$element.trigger('closed.zf.drilldown');
  };
  /**
   * Adds event listener for each `back` button, and closes open menus.
   * @function
   * @fires Drilldown#back
   * @param {jQuery} $elem - the current sub-menu to add `back` event.
   */
  Drilldown.prototype._back = function($elem){
    var _this = this;
    $elem.off('click.zf.drilldown');
    $elem.children('.js-drilldown-back')
      .on('click.zf.drilldown', function(e){
        e.stopImmediatePropagation();
        // console.log('mouseup on back');
        _this._hide($elem);
      });
  };
  /**
   * Adds event listener to menu items w/o submenus to close open menus on click.
   * @function
   * @private
   */
  Drilldown.prototype._menuLinkEvents = function(){
    var _this = this;
    this.$menuItems.not('.has-submenu')
        .off('click.zf.drilldown')
        .on('click.zf.drilldown', function(e){
          // e.stopImmediatePropagation();
          setTimeout(function(){
            _this._hideAll();
          }, 0);
      });
  };
  /**
   * Opens a submenu.
   * @function
   * @fires Drilldown#open
   * @param {jQuery} $elem - the current element with a submenu to open.
   */
  Drilldown.prototype._show = function($elem){
    $elem.children('[data-submenu]').addClass('is-active');

    this.$element.trigger('open.zf.drilldown', [$elem]);
  };
  /**
   * Hides a submenu
   * @function
   * @fires Drilldown#hide
   * @param {jQuery} $elem - the current sub-menu to hide.
   */
  Drilldown.prototype._hide = function($elem){
    var _this = this;
    $elem.addClass('is-closing')
         .one(Foundation.transitionend($elem), function(){
           $elem.removeClass('is-active is-closing');
         });
    /**
     * Fires when the submenu is has closed.
     * @event Drilldown#hide
     */
    $elem.trigger('hide.zf.drilldown', [$elem]);

  };
  /**
   * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
   * Prevents content jumping.
   * @function
   * @private
   */
  Drilldown.prototype._getMaxDims = function(){
    var max = 0, result = {};
    this.$submenus.add(this.$element).each(function(){
      var numOfElems = $(this).children('li').length;
      max = numOfElems > max ? numOfElems : max;
    });

    result.height = max * this.$menuItems[0].getBoundingClientRect().height + 'px';
    result.width = this.$element[0].getBoundingClientRect().width + 'px';

    return result;
  };
  /**
   * Destroys the Drilldown Menu
   * @function
   */
  Drilldown.prototype.destroy = function(){
    this._hideAll();
    Foundation.Nest.Burn(this.$element, 'drilldown');
    this.$element.unwrap()
                 .find('.js-drilldown-back').remove()
                 .end().find('.is-active, .is-closing, .is-drilldown-sub').removeClass('is-active is-closing is-drilldown-sub')
                 .end().find('[data-submenu]').removeAttr('aria-hidden tabindex role')
                 .off('.zf.drilldown').end().off('zf.drilldown');

    Foundation.unregisterPlugin(this);
  };
  Foundation.plugin(Drilldown);
}(jQuery, window.Foundation);

/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 */
!function($, Foundation){
  'use strict';
  /**
   * Creates a new instance of a dropdown.
   * @class
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Dropdown(element, options){
    this.$element = element;
    this.options = $.extend({}, Dropdown.defaults, this.$element.data(), options);
    this._init();

    Foundation.registerPlugin(this);
    Foundation.Keyboard.register('Dropdown', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ESCAPE': 'close',
      'TAB': 'tab_forward',
      'SHIFT_TAB': 'tab_backward'
    });
  }

  Dropdown.defaults = {
    /**
     * Amount of time to delay opening a submenu on hover event.
     * @option
     * @example 250
     */
    hoverDelay: 250,
    /**
     * Allow submenus to open on hover events
     * @option
     * @example false
     */
    hover: false,
    /**
     * Number of pixels between the dropdown pane and the triggering element on open.
     * @option
     * @example 1
     */
    vOffset: 1,
    /**
     * Number of pixels between the dropdown pane and the triggering element on open.
     * @option
     * @example 1
     */
    hOffset: 1,
    /**
     * Class applied to adjust open position. JS will test and fill this in.
     * @option
     * @example 'top'
     */
    positionClass: '',
    /**
     * Allow the plugin to trap focus to the dropdown pane on open.
     * @option
     * @example false
     */
    trapFocus: false
  };
  /**
   * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
   * @function
   * @private
   */
  Dropdown.prototype._init = function(){
    var $id = this.$element.attr('id');

    this.$anchor = $('[data-toggle="' + $id + '"]') || $('[data-open="' + $id + '"]');
    this.$anchor.attr({
      'aria-controls': $id,
      'data-is-focus': false,
      'data-yeti-box': $id,
      'aria-haspopup': true,
      'aria-expanded': false
      // 'data-resize': $id
    });

    this.options.positionClass = this.getPositionClass();
    this.counter = 4;
    this.usedPositions = [];
    this.$element.attr({
      'aria-hidden': 'true',
      'data-yeti-box': $id,
      'data-resize': $id,
      'aria-labelledby': this.$anchor[0].id || Foundation.GetYoDigits(6, 'dd-anchor')
    });
    this._events();
  };
  /**
   * Helper function to determine current orientation of dropdown pane.
   * @function
   * @returns {String} position - string value of a position class.
   */
  Dropdown.prototype.getPositionClass = function(){
    var position = this.$element[0].className.match(/(top|left|right)/g);
        position = position ? position[0] : '';
    return position;
  };
  /**
   * Adjusts the dropdown panes orientation by adding/removing positioning classes.
   * @function
   * @private
   * @param {String} position - position class to remove.
   */
  Dropdown.prototype._reposition = function(position){
    this.usedPositions.push(position ? position : 'bottom');
    //default, try switching to opposite side
    if(!position && (this.usedPositions.indexOf('top') < 0)){
      this.$element.addClass('top');
    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') < 0)){
      this.$element.removeClass(position);
    }else if(position === 'left' && (this.usedPositions.indexOf('right') < 0)){
      this.$element.removeClass(position)
          .addClass('right');
    }else if(position === 'right' && (this.usedPositions.indexOf('left') < 0)){
      this.$element.removeClass(position)
          .addClass('left');
    }

    //if default change didn't work, try bottom or left first
    else if(!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)){
      this.$element.addClass('left');
    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)){
      this.$element.removeClass(position)
          .addClass('left');
    }else if(position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
      this.$element.removeClass(position);
    }else if(position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
      this.$element.removeClass(position);
    }
    //if nothing cleared, set to bottom
    else{
      this.$element.removeClass(position);
    }
    this.classChanged = true;
    this.counter--;
  };
  /**
   * Sets the position and orientation of the dropdown pane, checks for collisions.
   * Recursively calls itself if a collision is detected, with a new position class.
   * @function
   * @private
   */
  Dropdown.prototype._setPosition = function(){
    if(this.$anchor.attr('aria-expanded') === 'false'){ return false; }
    var position = this.getPositionClass(),
        $eleDims = Foundation.Box.GetDimensions(this.$element),
        $anchorDims = Foundation.Box.GetDimensions(this.$anchor),
        _this = this,
        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
        param = (direction === 'top') ? 'height' : 'width',
        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset;

    if(($eleDims.width >= $eleDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.$element))){
      this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
        'width': $eleDims.windowDims.width - (this.options.hOffset * 2),
        'height': 'auto',
      });
      this.classChanged = true;
      return false;
    }

    this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, position, this.options.vOffset, this.options.hOffset));

    while(!Foundation.Box.ImNotTouchingYou(this.$element) && this.counter){
      this._reposition(position);
      this._setPosition();
    }
  };
  /**
   * Adds event listeners to the element utilizing the triggers utility library.
   * @function
   * @private
   */
  Dropdown.prototype._events = function(){
    var _this = this;
    this.$element.on({
      'open.zf.trigger': this.open.bind(this),
      'close.zf.trigger': this.close.bind(this),
      'toggle.zf.trigger': this.toggle.bind(this),
      'resizeme.zf.trigger': this._setPosition.bind(this)
    });

    if(this.options.hover){
      clearTimeout(_this.timeout);
      this.$anchor.on('mouseenter.zf.dropdown mouseleave.zf.dropdown', function(){
        _this.timeOut = setTimeout(function(){
          _this.toggle();
        }, _this.options.hoverDelay);
      });
    }
    this.$anchor.add(this.$element).on('keydown.zf.dropdown', function(e) {

      var visibleFocusableElements = Foundation.Keyboard.findFocusable(_this.$element);

      Foundation.Keyboard.handleKey(e, _this, {
        tab_forward: function() {
          if (this.$element.find(':focus').is(visibleFocusableElements.eq(-1))) { // left modal downwards, setting focus to first element
            if (this.options.trapFocus) { // if focus shall be trapped
              visibleFocusableElements.eq(0).focus();
              e.preventDefault();
            } else { // if focus is not trapped, close dropdown on focus out
              this.close();
            }
          }
        },
        tab_backward: function() {
          if (this.$element.find(':focus').is(visibleFocusableElements.eq(0)) || this.$element.is(':focus')) { // left modal upwards, setting focus to last element
            if (this.options.trapFocus) { // if focus shall be trapped
              visibleFocusableElements.eq(-1).focus();
              e.preventDefault();
            } else { // if focus is not trapped, close dropdown on focus out
              this.close();
            }
          }
        },
        open: function() {
          _this.open();
          _this.$element.attr('tabindex', -1).focus();
        },
        close: function() {
          _this.close();
          _this.$anchor.focus();
        }
      });
    });
  };
  /**
   * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
   * @function
   * @fires Dropdown#closeme
   * @fires Dropdown#show
   */
  Dropdown.prototype.open = function(){
    // var _this = this;
    /**
     * Fires to close other open dropdowns
     * @event Dropdown#closeme
     */
    this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
    this.$anchor.addClass('hover')
        .attr({'aria-expanded': true});
    // this.$element/*.show()*/;
    this._setPosition();
    this.$element.addClass('is-open')
        .attr({'aria-hidden': false});



    /**
     * Fires once the dropdown is visible.
     * @event Dropdown#show
     */
     this.$element.trigger('show.zf.dropdown', [this.$element]);
    //why does this not work correctly for this plugin?
    // Foundation.reflow(this.$element, 'dropdown');
    // Foundation._reflow(this.$element.attr('data-dropdown'));
  };

  /**
   * Closes the open dropdown pane.
   * @function
   * @fires Dropdown#hide
   */
  Dropdown.prototype.close = function(){
    if(!this.$element.hasClass('is-open')){
      return false;
    }
    this.$element.removeClass('is-open')
        .attr({'aria-hidden': true});

    this.$anchor.removeClass('hover')
        .attr('aria-expanded', false);

    if(this.classChanged){
      var curPositionClass = this.getPositionClass();
      if(curPositionClass){
        this.$element.removeClass(curPositionClass);
      }
      this.$element.addClass(this.options.positionClass)
          /*.hide()*/.css({height: '', width: ''});
      this.classChanged = false;
      this.counter = 4;
      this.usedPositions.length = 0;
    }
    this.$element.trigger('hide.zf.dropdown', [this.$element]);
    // Foundation.reflow(this.$element, 'dropdown');
  };
  /**
   * Toggles the dropdown pane's visibility.
   * @function
   */
  Dropdown.prototype.toggle = function(){
    if(this.$element.hasClass('is-open')){
      this.close();
    }else{
      this.open();
    }
  };
  /**
   * Destroys the dropdown.
   * @function
   */
  Dropdown.prototype.destroy = function(){
    this.$element.off('.zf.trigger').hide();
    this.$anchor.off('.zf.dropdown');

    Foundation.unregisterPlugin(this);
  };

  Foundation.plugin(Dropdown);
}(jQuery, window.Foundation);

/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */
!function(Foundation, $) {
  'use strict';

  /**
   * Creates a new instance of DropdownMenu.
   * @class
   * @fires DropdownMenu#init
   * @param {jQuery} element - jQuery object to make into a dropdown menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function DropdownMenu(element, options) {
    this.$element = element;
    this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options);

    Foundation.Nest.Feather(this.$element, 'dropdown');

    this._init();

    Foundation.registerPlugin(this);
    Foundation.Keyboard.register('DropdownMenu', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ARROW_RIGHT': 'next',
      'ARROW_UP': 'up',
      'ARROW_DOWN': 'down',
      'ARROW_LEFT': 'previous',
      'ESCAPE': 'close'
    });

    // /**
    //  * Fires when the plugin has been successfuly initialized.
    //  * @event DropdownMenu#init
    //  */
    // this.$element.trigger('init.zf.dropdown');
  }

  /**
   * Default settings for plugin
   */
  DropdownMenu.defaults = {
    // toggleOn: 'both',
    /**
     * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
     * @option
     * @example true
     */
    clickOpen: true,
    /**
     * Allow clicks on the body to close any open submenus.
     * @option
     * @example false
     */
    closeOnClick: false,
    /**
     * Disallows hover events from opening submenus
     * @option
     * @example false
     */
    disableHover: false,
    /**
     * Allow a submenu to automatically close on a mouseleave event.
     * @option
     * @example true
     */
    autoclose: true,
    /**
     * Amount of time to delay opening a submenu on hover event.
     * @option
     * @example 150
     */
    hoverDelay: 150,
    /**
     * Amount of time to delay closing a submenu on a mouseleave event.
     * @option
     * @example 500
     */
    closingTime: 500,
    // wrapOnKeys: true,
    /**
     * Position of the menu relative to what direction the submenus should open. Handled by JS.
     * @option
     * @example 'left'
     */
    alignment: 'left',
    /**
     * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
     * @option
     * @example 'vertical'
     */
    verticalClass: 'vertical',
    /**
     * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
     * @option
     * @example 'align-right'
     */
    rightClass: 'align-right'
  };
  /**
   * Initializes the plugin, and calls _prepareMenu
   * @private
   * @function
   */
  DropdownMenu.prototype._init = function(){
    if(this.$element.hasClass(this.options.verticalClass)){
      this.vertical = true;
    }
    // this.vertical = this.$element.hasClass(this.options.verticalClass);
    this._prepareMenu();
    // this._addTopLevelKeyHandler();
  };
  /**
   * Prepares the menu by checking alignment and orientation, setting attributes for elements, and creating jQuery collections of elements.
   * @private
   * @function
   */
  DropdownMenu.prototype._prepareMenu = function(){
    var _this = this;
    this.$tabs = this.$element.children('li.has-submenu');
    this.$tabs.children('[data-submenu]').addClass('first-sub');
    this.$submenus = this.$element.find('li.has-submenu');
    this.$menuItems = this.$element.find('li').attr({'role': 'menuitem', 'tabindex': 0});
    this.$menuItems.children('a').attr('tabindex', -1);
    if(this.$element.hasClass(this.options.rightClass)){
      this.options.alignment = 'right';
      this.$submenus.addClass('is-left-arrow opens-left');
    }else{
      this.$submenus.addClass('is-right-arrow opens-right');
    }
    if(!this.vertical){
      this.$tabs.removeClass('is-right-arrow is-left-arrow opens-left opens-right').addClass('is-down-arrow');
    }

    this.$tabs.each(function(){
      var $tab = $(this);
      $tab.attr({
        'role': 'menuitem',
        'tabindex': 0,
        'title': $tab.children('a:first-child').text()/*.match(/\w/ig).join('')*/
      }).children('a').attr('tabindex', -1);//maybe add a more specific regex to match alphanumeric characters and join them appropriately
      if($tab.children('[data-submenu]')){
        $tab.attr('aria-haspopup', true);
      }
    });


    this.$submenus.each(function(){
      var $sub = $(this);

      // if(_this.options.alignment === 'right'){
      //   $sub.children('[data-submenu]').addClass('is-right-arrow');
      // }

      $sub.children('[data-submenu]')
          .attr({
            'aria-hidden': true,
            'tabindex': -1,
            'role': 'menu'
          }).addClass('vertical');
      _this._events($sub);
    });
  };

  /**
   * Adds event listeners to elements within the menu
   * @param {jQuery} $elem - the element to attach listeners too.
   * @private
   * @function
   */
  DropdownMenu.prototype._events = function($elem){
    var _this = this;

    if(this.options.clickOpen){
      $elem.children('a').on('click.zf.dropdownmenu touchend.zf.dropdownmenu', function(e){
        if($(e.target).parent('li').hasClass('has-submenu')){
          e.preventDefault();
          e.stopPropagation();
        }else{
          return;
        }

        if($elem.data('isClick')){
          _this._hide($elem);
        }else{
          _this._hideOthers($elem);
          _this._show($elem);
          $elem.data('isClick', true).parentsUntil('[data-dropdown-menu]', '.has-submenu').data('isClick', true);
          if(_this.options.closeOnClick){
            _this._addBodyHandler();
          }
        }
      });
    }

    if(!this.options.disableHover){
      //add ability for all menu items to close an open menu on the same level//
      this.$menuItems.on('mouseenter.zf.dropdownmenu', function(e){
        var $el = $(this);
        if(!$el.hasClass('is-active')){
          _this._hideOthers($el);
        }
      });
      //elements with submenus
      $elem.on('mouseenter.zf.dropdownmenu', function(e){
        clearTimeout($elem.closeTimer);
        if(!$elem.hasClass('is-active')){
          $elem.openTimer = setTimeout(function(){
              // _this._hideOthers($elem);
              _this._show($elem);
          }, _this.options.hoverDelay);
        }
      }).on('mouseleave.zf.dropdownmenu', function(e){
        if(!$elem.data('isClick') && _this.options.autoclose){
        clearTimeout($elem.openTimer);
          $elem.closeTimer = setTimeout(function(){
            _this._hide($elem);
          }, _this.options.closingTime);
        }
      });
    }

    this.$menuItems.on('keydown.zf.dropdownmenu', function(e){
      var $element = $(this),
          $tabs = _this.$element.children('li'),
          isTab = $element.is($tabs),
          $elements = isTab ? $tabs : $element.parents('li').first().add($element.parent('ul').children('li')),
          $prevElement,
          $nextElement;

      $elements.each(function(i) {
        if ($(this).is($element)) {
          $prevElement = $elements.eq(i-1);
          $nextElement = $elements.eq(i+1);
          return;
        }
      });
      var nextSibling = function() {
        if (!$element.is(':last-child')) $nextElement.focus();
      }, prevSibling = function() {
        $prevElement.focus();
      }, openSub = function() {
        if ($element.has('ul').length) {
          _this._show($element);
          $element.find('li').first().focus();
        }
      }, closeSub = function() {
        //if ($element.is(':first-child')) {
          $element.parents('li').first().focus();
          _this._hide($element.parents('li').first());
        //}
      };
      var functions = {
        open: openSub,
        close: function() {
          _this._hideAll();
          _this.$menuItems.first().focus(); // focus to first element
        },
        handled: function() {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      };

      if (isTab) {
        if (_this.vertical) { // vertical menu
          if (_this.options.alignment === 'left') { // left aligned
            $.extend(functions, {
              down: nextSibling,
              up: prevSibling,
              next: openSub,
              previous: closeSub,
            });
          } else { // right aligned
            $.extend(functions, {
              down: nextSibling,
              up: prevSibling,
              next: closeSub,
              previous: openSub,
            });
          }
        } else { // horizontal menu
          $.extend(functions, {
            next: nextSibling,
            previous: prevSibling,
            down: openSub,
            up: closeSub,
          });
        }
      } else { // not tabs -> one sub
        if (_this.options.alignment === 'left') { // left aligned
          $.extend(functions, {
            next: openSub,
            previous: closeSub,
            down: nextSibling,
            up: prevSibling
          });
        } else { // right aligned
          $.extend(functions, {
            next: closeSub,
            previous: openSub,
            down: nextSibling,
            up: prevSibling
          });
        }
      }
      Foundation.Keyboard.handleKey(e, _this, functions);
    });
     // end keyboardAccess
  };
  /**
   * Toggles the current dropdown pane.
   * @param {jQuery} $elem - the current element with a submenu to toggle.
   * @function
   * @private
   */
  DropdownMenu.prototype._toggle = function($elem){
    if($elem.hasClass('is-active')){
      this._hide($elem);
    }else{
      this._show($elem);
    }
  };
  /**
   * Adds an event handler to the body to close any dropdowns on a click.
   * @function
   * @private
   */
  DropdownMenu.prototype._addBodyHandler = function(){
    var $body = $('body'),
        _this = this;
    $body.not(_this.$element).on('click.zf.dropdownmenu tap.zf.dropdownmenu touchend.zf.dropdownmenu', function(e){
      _this._hideAll();
      $body.off('click.zf.dropdownmenu tap.zf.dropdownmenu touchend.zf.dropdownmenu');
    });
  };
//show & hide stuff @private
  /**
   * Opens a dropdown pane, and checks for collisions first.
   * @param {jQuery} $elem - current element with a submenu to show
   * @function
   * @private
   * @fires DropdownMenu#show
   */
  DropdownMenu.prototype._show = function($elem){
    this._hideOthers($elem);
    $elem.focus();
    // console.log('showing some stuff', $elem.find('li:first-child'));
    var $sub = $elem.children('[data-submenu]:first-of-type');
    $elem.addClass('is-active');
    $sub.css('visibility', 'hidden').addClass('js-dropdown-active')
        .attr('aria-hidden', false);


    //break this into own function
    var clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
    if(!clear){
      if(this.options.alignment === 'left'){
        $elem.removeClass('opens-left').addClass('opens-right');
      }else{
        $elem.removeClass('opens-right').addClass('opens-left');
      }
      this.changed = true;

      // still not clear, small screen, add inner class
      clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
      if (!clear) {
        $elem.removeClass('opens-left opens-right').addClass('opens-inner');
        this.changed = true;
      }
    }
    $sub.css('visibility', '');
    /**
     * Fires when the new dropdown pane is visible.
     * @event DropdownMenu#show
     */
    this.$element.trigger('show.zf.dropdownmenu', [$elem]);
  };
  /**
   * Hides a single, currently open dropdown pane.
   * @function
   * @param {jQuery} $elem - element with a submenu to hide
   * @private
   */
  DropdownMenu.prototype._hide = function($elem){
    this._hideSome($elem);
  };
  /**
   * Hides currently open dropdown panes from a jQuery collection passed by other functions.
   * Resets the position classes if the element was mutated due to a collision.
   * @function
   * @param {jQuery} $elems - element(s) with a submenu to hide
   * @private
   * @fires DropdownMenu#hide
   */
  DropdownMenu.prototype._hideSome = function($elems){
    if($elems.length){
      // if($elems.hasClass('first-sub')){
      //   console.log('true');
      //   $elems.blur();
      // }
      $elems.removeClass('is-active opens-inner').data('isClick', false)

            .find('.is-active').removeClass('is-active').data('isClick', false).end()

            .find('.js-dropdown-active').removeClass('js-dropdown-active')
                                        .attr('aria-hidden', true);
      $elems.parent('.has-submenu').removeClass('is-active');
      if(this.changed){
        //remove position class
        if(this.options.alignment === 'left'){
          $elems.find('.opens-left').removeClass('opens-left').addClass('opens-right');
        }else{
          $elems.find('.opens-right').removeClass('opens-right').addClass('opens-left');
        }
      }
      /**
       * Fires when the open menus are closed.
       * @event DropdownMenu#hide
       */
      this.$element.trigger('hide.zf.dropdownmenu');
    }
  };
  /**
   * Hides a submenu's siblings.
   * @param {jQuery} $elem - the element that should remain open.
   * @function
   * @private
   */
  DropdownMenu.prototype._hideOthers = function($elem){
    this._hideSome($elem.siblings('.has-submenu.is-active'));
  };
  /**
   * Hides everything.
   * @function
   */
  DropdownMenu.prototype._hideAll = function(){
    this._hideSome(this.$element);
  };
  /**
   * Destroys the plugin.
   * @function
   */
  DropdownMenu.prototype.destroy = function() {
    this._hideAll();
    this.$element
        .removeData('zf-plugin')
        .find('li')
        .removeClass('js-dropdown-nohover is-right-arrow is-left-arrow opens-left opens-inner opens-right')
        .add('a').off('.zf.dropdownmenu')
        .end().find('ul').removeClass('first-sub');
    Foundation.Nest.Burn(this.$element, 'dropdown');
    Foundation.unregisterPlugin(this);
  };
  Foundation.plugin(DropdownMenu);

  var checkClass = function($elem){
    return $elem.hasClass('is-active');
  };

}(Foundation, jQuery);

!function(Foundation, $) {
  'use strict';

  /**
   * Creates a new instance of Equalizer.
   * @class
   * @fires Equalizer#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Equalizer(element, options) {
    this.$element = element;
    this.options  = $.extend({}, Equalizer.defaults, this.$element.data(), options);
    this.$window  = $(window);
    this.name     = 'equalizer';
    this.attr     = 'data-equalizer';

    this._init();
    this._events();

    Foundation.registerPlugin(this);
  }

  /**
   * Default settings for plugin
   */
  Equalizer.defaults = {
    /**
     * Enable height equalization when stacked on smaller screens.
     * @option
     * @example true
     */
    equalizeOnStack: true,
    /**
     * Amount of time, in ms, to debounce the size checking/equalization. Lower times mean smoother transitions/less performance on mobile.
     * @option
     * @example 50
     */
    throttleInterval: 50
  };

  /**
   * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
   * @private
   */
  Equalizer.prototype._init = function() {
    this._reflow();
  };

  /**
   * Initializes events for Equalizer.
   * @private
   */
  Equalizer.prototype._events = function() {
    var self = this;

    this.$window
      .off('.equalizer')
      .on('resize.fndtn.equalizer', Foundation.util.throttle(function () {
        self._reflow();
      }, self.options.throttleInterval));
  };

  /**
   * A noop version for the plugin
   * @private
   */
  Equalizer.prototype._killswitch = function() {
    return;
  };
  /**
   * Calls necessary functions to update Equalizer upon DOM change
   * @private
   */
  Equalizer.prototype._reflow = function() {
    var self = this;

    $('[' + this.attr + ']').each(function() {
      var $eqParent       = $(this),
          adjustedHeights = [],
          $images = $eqParent.find('img');

      if ($images.length) {
        Foundation.onImagesLoaded($images, function() {
          adjustedHeights = self.getHeights($eqParent);
          self.applyHeight($eqParent, adjustedHeights);
        });
      }
      else {
        adjustedHeights = self.getHeights($eqParent);
        self.applyHeight($eqParent, adjustedHeights);
      }
    });
  };
  /**
   * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
   * @param {Object} $eqParent A jQuery instance of an Equalizer container
   * @returns {Array} heights An array of heights of children within Equalizer container
   */
  Equalizer.prototype.getHeights = function($eqParent) {
    var eqGroupName = $eqParent.data('equalizer'),
        eqGroup     = eqGroupName ? $eqParent.find('[' + this.attr + '-watch="' + eqGroupName + '"]:visible') : $eqParent.find('[' + this.attr + '-watch]:visible'),
        heights;

    eqGroup.height('inherit');
    heights = eqGroup.map(function () { return $(this).outerHeight(false);}).get();
    console.log(heights);
    return heights;
  };
  /**
   * Changes the CSS height property of each child in an Equalizer parent to match the tallest
   * @param {Object} $eqParent - A jQuery instance of an Equalizer container
   * @param {array} heights - An array of heights of children within Equalizer container
   * @fires Equalizer#preEqualized
   * @fires Equalizer#postEqualized
   */
  Equalizer.prototype.applyHeight = function($eqParent, heights) {
    var eqGroupName = $eqParent.data('equalizer'),
        eqGroup     = eqGroupName ? $eqParent.find('['+this.attr+'-watch="'+eqGroupName+'"]:visible') : $eqParent.find('['+this.attr+'-watch]:visible'),
        max         = Math.max.apply(null, heights);

    /**
     * Fires before the heights are applied
     * @event Equalizer#preEqualized
     */
    $eqParent.trigger('preEqualized.zf.Equalizer');

    // for now, apply the max height found in the array
    for (var i = 0; i < eqGroup.length; i++) {
      $(eqGroup[i]).css('height', max);
    }
    // console.log(max);
    /**
     * Fires when the heights have been applied
     * @event Equalizer#postEqualized
     */
    $eqParent.trigger('postEqualized.zf.Equalizer');
  };
  /**
   * Destroys an instance of Equalizer.
   * @function
   */
  Equalizer.prototype.destroy = function(){
    //TODO this.
  };

  Foundation.plugin(Equalizer);

  // Exports for AMD/Browserify
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Equalizer;
  if (typeof define === 'function')
    define(['foundation'], function() {
      return Equalizer;
    });

}(Foundation, jQuery);

/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.timerAndImageLoader
 */
!function(Foundation, $) {
  'use strict';

  /**
   * Creates a new instance of Interchange.
   * @class
   * @fires Interchange#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Interchange(element, options) {
    this.$element = element;
    this.options = $.extend({}, Interchange.defaults, options);
    this.rules = [];
    this.currentPath = '';

    this._init();
    this._events();

    Foundation.registerPlugin(this);
  }

  /**
   * Default settings for plugin
   */
  Interchange.defaults = {
    /**
     * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
     * @option
     */
    rules: null
  };

  Interchange.SPECIAL_QUERIES = {
    'landscape': 'screen and (orientation: landscape)',
    'portrait': 'screen and (orientation: portrait)',
    'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
  };

  /**
   * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
   * @function
   * @private
   */
  Interchange.prototype._init = function() {
    this._addBreakpoints();
    this._generateRules();
    this._reflow();
  };

  /**
   * Initializes events for Interchange.
   * @function
   * @private
   */
  Interchange.prototype._events = function() {
    $(window).on('resize.fndtn.interchange', Foundation.util.throttle(this._reflow.bind(this), 50));
  };

  /**
   * Calls necessary functions to update Interchange upon DOM change
   * @function
   * @private
   */
  Interchange.prototype._reflow = function() {
    var match;

    // Iterate through each rule, but only save the last match
    for (var i in this.rules) {
      var rule = this.rules[i];

      if (window.matchMedia(rule.query).matches) {
        match = rule;
      }
    }

    if (match) {
      this.replace(match.path);
    }
  };

  /**
   * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
   * @function
   * @private
   */
  Interchange.prototype._addBreakpoints = function() {
    for (var i in Foundation.MediaQuery.queries) {
      var query = Foundation.MediaQuery.queries[i];
      Interchange.SPECIAL_QUERIES[query.name] = query.value;
    }
  };

  /**
   * Checks the Interchange element for the provided media query + content pairings
   * @function
   * @private
   * @param {Object} element - jQuery object that is an Interchange instance
   * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
   */
  Interchange.prototype._generateRules = function() {
    var rulesList = [];
    var rules;

    if (this.options.rules) {
      rules = this.options.rules;
    }
    else {
      rules = this.$element.data('interchange').match(/\[.*?\]/g);
    }

    for (var i in rules) {
      var rule = rules[i].slice(1, -1).split(', ');
      var path = rule.slice(0, -1).join('');
      var query = rule[rule.length - 1];

      if (Interchange.SPECIAL_QUERIES[query]) {
        query = Interchange.SPECIAL_QUERIES[query];
      }

      rulesList.push({
        path: path,
        query: query
      });
    }

    this.rules = rulesList;
  };

  /**
   * Update the `src` property of an image, or change the HTML of a container, to the specified path.
   * @function
   * @param {String} path - Path to the image or HTML partial.
   * @fires Interchange#replaced
   */
  Interchange.prototype.replace = function(path) {
    if (this.currentPath === path) return;

    var _this = this;

    // Replacing images
    if (this.$element[0].nodeName === 'IMG') {
      this.$element.attr('src', path).load(function() {
        _this.$element.trigger('replaced.zf.interchange');
        _this.currentPath = path;
      });
    }
    // Replacing background images
    else if (path.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i)) {
      this.$element.css({ 'background-image': 'url('+path+')' });
    }
    // Replacing HTML
    else {
      $.get(path, function(response) {
        _this.$element.html(response);
        _this.$element.trigger('replaced.zf.interchange');
        _this.currentPath = path;
      });
    }
  };
  /**
   * Destroys an instance of interchange.
   * @function
   */
  Interchange.prototype.destroy = function(){
    //TODO this.
  };
  Foundation.plugin(Interchange);

  // Exports for AMD/Browserify
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Interchange;
  if (typeof define === 'function')
    define(['foundation'], function() {
      return Interchange;
    });

}(Foundation, jQuery);

/**
 * Magellan module.
 * @module foundation.magellan
 */
!function(Foundation, $) {
  'use strict';

  /**
   * Creates a new instance of Magellan.
   * @class
   * @fires Magellan#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Magellan(element, options) {
    this.$element = element;
    this.options  = $.extend({}, Magellan.defaults, options);

    this._init();

    Foundation.registerPlugin(this);
  }

  /**
   * Default settings for plugin
   */
  Magellan.defaults = {
    /**
     * Amount of time, in ms, the animated scrolling should take between locations.
     * @option
     * @example 500
     */
    animationDuration: 500,
    /**
     * Animation style to use when scrolling between locations.
     * @option
     * @example 'ease-in-out'
     */
    animationEasing: 'linear',
    /**
     * Number of pixels to use as a marker for location changes.
     * @option
     * @example 50
     */
    threshold: 50,
    /**
     * Class applied to the active locations link on the magellan container.
     * @option
     * @example 'active'
     */
    activeClass: 'active',
    /**
     * Allows the script to manipulate the url of the current page, and if supported, alter the history.
     * @option
     * @example true
     */
    deepLinking: false
  };

  /**
   * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
   * @private
   */
  Magellan.prototype._init = function() {
    var id = this.$element[0].id || Foundation.GetYoDigits(6, 'magellan'),
        _this = this;
    this.$targets = $('[data-magellan-target]');
    this.$links = this.$element.find('a');
    this.$element.attr({
      'data-resize': id,
      'data-scroll': id,
      'id': id
    });
    this.$active = $();
    this.scrollPos = parseInt(window.pageYOffset, 10);

    this._events();
  };
  /**
   * Calculates an array of pixel values that are the demarcation lines between locations on the page.
   * Can be invoked if new elements are added or the size of a location changes.
   * @function
   */
  Magellan.prototype.calcPoints = function(){
    var _this = this,
        body = document.body,
        html = document.documentElement;

    this.points = [];
    this.winHeight = Math.round(Math.max(window.innerHeight, document.body.clientHeight));
    this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));

    this.$targets.each(function(){
      var $tar = $(this),
          pt = Math.round($tar.offset().top - _this.options.threshold);
      $tar.targetPoint = pt;
      _this.points.push(pt);
    });
  };
  /**
   * Initializes events for Magellan.
   * @private
   */
  Magellan.prototype._events = function() {
    var _this = this,
        $body = $('html, body'),
        opts = {
          duration: _this.options.animationDuration,
          easing:   _this.options.animationEasing
        };

    $(window).one('load', function(){
      _this.calcPoints();
      _this._updateActive();
    });

    this.$element.on({
      'resizeme.zf.trigger': this.reflow.bind(this),
      'scrollme.zf.trigger': this._updateActive.bind(this)
    }).on('click.zf.magellan', 'a[href^="#"]', function(e) {
        e.preventDefault();
        var arrival   = this.getAttribute('href'),
            scrollPos = $(arrival).offset().top - _this.options.threshold / 2;

        // requestAnimationFrame is disabled for this plugin currently
        // Foundation.Move(_this.options.animationDuration, $body, function(){
          $body.stop(true).animate({
            scrollTop: scrollPos
          }, opts);
        });
      // });
  };
  /**
   * Calls necessary functions to update Magellan upon DOM change
   * @function
   */
  Magellan.prototype.reflow = function(){
    this.calcPoints();
    this._updateActive();
  };
  /**
   * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
   * @private
   * @function
   * @fires Magellan#update
   */
  Magellan.prototype._updateActive = function(/*evt, elem, scrollPos*/){
    var winPos = /*scrollPos ||*/ parseInt(window.pageYOffset, 10),
        curIdx;

    if(winPos + this.winHeight === this.docHeight){ curIdx = this.points.length - 1; }
    else if(winPos < this.points[0]){ curIdx = 0; }
    else{
      var isDown = this.scrollPos < winPos,
          _this = this,
          curVisible = this.points.filter(function(p, i){
            return isDown ? p <= winPos : p - _this.options.threshold <= winPos;//&& winPos >= _this.points[i -1] - _this.options.threshold;
          });
      curIdx = curVisible.length ? curVisible.length - 1 : 0;
    }

    this.$active.removeClass(this.options.activeClass);
    this.$active = this.$links.eq(curIdx).addClass(this.options.activeClass);

    if(this.options.deepLinking){
      var hash = this.$active[0].getAttribute('href');
      if(window.history.pushState){
        window.history.pushState(null, null, hash);
      }else{
        window.location.hash = hash;
      }
    }

    this.scrollPos = winPos;
    /**
     * Fires when magellan is finished updating to the new active element.
     * @event Magellan#update
     */
    this.$element.trigger('update.zf.magellan', [this.$active]);
  };
  /**
   * Destroys an instance of Magellan and resets the url of the window.
   * @function
   */
  Magellan.prototype.destroy = function(){
    this.$element.off('.zf.trigger .zf.magellan')
        .find('.' + this.options.activeClass).removeClass(this.options.activeClass);

    var hash = this.$active[0].getAttribute('href');

    window.location.hash.replace(hash, '');

    Foundation.unregisterPlugin(this);
  };
  Foundation.plugin(Magellan);

  // Exports for AMD/Browserify
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Magellan;
  if (typeof define === 'function')
    define(['foundation'], function() {
      return Magellan;
    });

}(Foundation, jQuery);

/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.triggers
 * @requires foundation.util.motion
 */
!function($, Foundation) {

'use strict';

/**
 * Creates a new instance of an off-canvas wrapper.
 * @class
 * @fires OffCanvas#init
 * @param {Object} element - jQuery object to initialize.
 * @param {Object} options - Overrides to the default plugin settings.
 */
function OffCanvas(element, options) {
  this.$element = element;
  this.options = $.extend({}, OffCanvas.defaults, this.$element.data(), options);
  this.$lastTrigger = $();

  this._init();
  this._events();

  Foundation.registerPlugin(this);
}

OffCanvas.defaults = {
  /**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @example true
   */
  closeOnClick: true,
  /**
   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
   * @option
   * @example 500
   */
  transitionTime: 0,
  /**
   * Direction the offcanvas opens from. Determines class applied to body.
   * @option
   * @example left
   */
  position: 'left',
  /**
   * Force the page to scroll to top on open.
   */
  forceTop: true,
  /**
   * Allow the offcanvas to be sticky while open. Does nothing if Sass option `$maincontent-prevent-scroll === true`.
   * Performance in Safari OSX/iOS is not great.
   */
  // isSticky: false,
  /**
   * Allow the offcanvas to remain open for certain breakpoints. Can be used with `isSticky`.
   * @option
   * @example false
   */
  isRevealed: false,
  /**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class @`revealClass`.
   * @option
   * @example reveal-for-large
   */
  revealOn: null,
  /**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @example true
   */
  autoFocus: true,
  /**
   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * TODO improve the regex testing for this.
   * @example reveal-for-large
   */
  revealClass: 'reveal-for-'
};

/**
 * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
 * @function
 * @private
 */
OffCanvas.prototype._init = function() {
  var id = this.$element.attr('id');

  this.$element.attr('aria-hidden', 'true');

  // Find triggers that affect this element and add aria-expanded to them
  $(document)
    .find('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]')
    .attr('aria-expanded', 'false')
    .attr('aria-controls', id);

  // Add a close trigger over the body if necessary
  if (this.options.closeOnClick){
    if($('.js-off-canvas-exit').length){
      this.$exiter = $('.js-off-canvas-exit');
    }else{
      var exiter = document.createElement('div');
      exiter.setAttribute('class', 'js-off-canvas-exit');
      $('[data-off-canvas-content]').append(exiter);

      this.$exiter = $(exiter);
    }
  }

  this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, 'g').test(this.$element[0].className);

  if(this.options.isRevealed){
    this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split('-')[2];
    this._setMQChecker();
  }
  if(!this.options.transitionTime){
    this.options.transitionTime = parseFloat(window.getComputedStyle($('[data-off-canvas-wrapper]')[0]).transitionDuration) * 1000;
  }
};

/**
 * Adds event handlers to the off-canvas wrapper and the exit overlay.
 * @function
 * @private
 */
OffCanvas.prototype._events = function() {
  this.$element.on({
    'open.zf.trigger': this.open.bind(this),
    'close.zf.trigger': this.close.bind(this),
    'toggle.zf.trigger': this.toggle.bind(this),
    'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
  });

  if (this.$exiter.length) {
    var _this = this;
    this.$exiter.on({'click.zf.offcanvas': this.close.bind(this)});
  }
};
/**
 * Applies event listener for elements that will reveal at certain breakpoints.
 * @private
 */
OffCanvas.prototype._setMQChecker = function(){
  var _this = this;

  $(window).on('changed.zf.mediaquery', function(){
    if(Foundation.MediaQuery.atLeast(_this.options.revealOn)){
      _this.reveal(true);
    }else{
      _this.reveal(false);
    }
  }).one('load.zf.offcanvas', function(){
    if(Foundation.MediaQuery.atLeast(_this.options.revealOn)){
      _this.reveal(true);
    }
  });
};
/**
 * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
 * @param {Boolean} isRevealed - true if element should be revealed.
 * @function
 */
OffCanvas.prototype.reveal = function(isRevealed){
  var $closer = this.$element.find('[data-close]');
  if(isRevealed){
    // if(!this.options.forceTop){
    //   var scrollPos = parseInt(window.pageYOffset);
    //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
    // }
    // if(this.options.isSticky){ this._stick(); }
    if($closer.length){ $closer.hide(); }
  }else{
    // if(this.options.isSticky || !this.options.forceTop){
    //   this.$element[0].style.transform = '';
    //   $(window).off('scroll.zf.offcanvas');
    // }
    if($closer.length){
      $closer.show();
    }
  }
};

/**
 * Opens the off-canvas menu.
 * @function
 * @param {Object} event - Event object passed from listener.
 * @param {jQuery} trigger - element that triggered the off-canvas to open.
 * @fires OffCanvas#opened
 */
OffCanvas.prototype.open = function(event, trigger) {
  if (this.$element.hasClass('is-open')){ return; }
  var _this = this,
      $body = $(document.body);
  $('body').scrollTop(0);
  // window.pageYOffset = 0;

  // if(!this.options.forceTop){
  //   var scrollPos = parseInt(window.pageYOffset);
  //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
  //   if(this.$exiter.length){
  //     this.$exiter[0].style.transform = 'translate(0,' + scrollPos + 'px)';
  //   }
  // }
  /**
   * Fires when the off-canvas menu opens.
   * @event OffCanvas#opened
   */
  Foundation.Move(this.options.transitionTime, this.$element, function(){
    $('[data-off-canvas-wrapper]').addClass('is-off-canvas-open is-open-'+ _this.options.position);

    _this.$element
      .addClass('is-open')
      .attr('aria-hidden', 'false')
      .trigger('opened.zf.offcanvas');

    // if(_this.options.isSticky){
    //   _this._stick();
    // }
  });
  if(trigger){
    this.$lastTrigger = trigger.attr('aria-expanded', 'true');
  }
  if(this.options.autoFocus){
    this.$element.one('finished.zf.animate', function(){
      _this.$element.find('a, button').eq(0).focus();
    });
  }
};
/**
 * Allows the offcanvas to appear sticky utilizing translate properties.
 * @private
 */
// OffCanvas.prototype._stick = function(){
//   var elStyle = this.$element[0].style;
//
//   if(this.options.closeOnClick){
//     var exitStyle = this.$exiter[0].style;
//   }
//
//   $(window).on('scroll.zf.offcanvas', function(e){
//     console.log(e);
//     var pageY = window.pageYOffset;
//     elStyle.transform = 'translate(0,' + pageY + 'px)';
//     if(exitStyle !== undefined){ exitStyle.transform = 'translate(0,' + pageY + 'px)'; }
//   });
//   // this.$element.trigger('stuck.zf.offcanvas');
// };
/**
 * Closes the off-canvas menu.
 * @function
 * @fires OffCanvas#closed
 */
OffCanvas.prototype.close = function() {
  if(!this.$element.hasClass('is-open')){ return; }

  var _this = this;

   Foundation.Move(this.options.transitionTime, this.$element, function(){
    $('[data-off-canvas-wrapper]').removeClass('is-off-canvas-open is-open-'+_this.options.position);

    _this.$element.removeClass('is-open');
    // Foundation._reflow();
  });
  this.$element.attr('aria-hidden', 'true')
    /**
     * Fires when the off-canvas menu opens.
     * @event OffCanvas#closed
     */
      .trigger('closed.zf.offcanvas');
  // if(_this.options.isSticky || !_this.options.forceTop){
  //   setTimeout(function(){
  //     _this.$element[0].style.transform = '';
  //     $(window).off('scroll.zf.offcanvas');
  //   }, this.options.transitionTime);
  // }

  this.$lastTrigger.attr('aria-expanded', 'false');
};

/**
 * Toggles the off-canvas menu open or closed.
 * @function
 * @param {Object} event - Event object passed from listener.
 * @param {jQuery} trigger - element that triggered the off-canvas to open.
 */
OffCanvas.prototype.toggle = function(event, trigger) {
  if (this.$element.hasClass('is-open')) {
    this.close(event, trigger);
  }
  else {
    this.open(event, trigger);
  }
};

/**
 * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
 * @function
 * @private
 */
OffCanvas.prototype._handleKeyboard = function(event) {
  if (event.which !== 27) return;

  event.stopPropagation();
  event.preventDefault();
  this.close();
  this.$lastTrigger.focus();
};
/**
 * Destroys the offcanvas plugin.
 * @function
 */
OffCanvas.prototype.destroy = function(){
  //TODO make this...
};

Foundation.plugin(OffCanvas);

}(jQuery, Foundation);

/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timerAndImageLoader
 * @requires foundation.util.touch
 */
!function($, Foundation){
  'use strict';
  /**
   * Creates a new instance of an orbit carousel.
   * @class
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Orbit(element, options){
    this.$element = element;
    this.options = $.extend({}, Orbit.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this);
    Foundation.Keyboard.register('Orbit', {
        'ltr': {
          'ARROW_RIGHT': 'next',
          'ARROW_LEFT': 'previous'
        },
        'rtl': {
          'ARROW_LEFT': 'next',
          'ARROW_RIGHT': 'previous'
        }
    });
  }
  Orbit.defaults = {
    /**
     * Tells the JS to loadBullets.
     * @option
     * @example true
     */
    bullets: true,
    /**
     * Tells the JS to apply event listeners to nav buttons
     * @option
     * @example true
     */
    navButtons: true,
    /**
     * motion-ui animation class to apply
     * @option
     * @example 'slide-in-right'
     */
    animInFromRight: 'slide-in-right',
    /**
     * motion-ui animation class to apply
     * @option
     * @example 'slide-out-right'
     */
    animOutToRight: 'slide-out-right',
    /**
     * motion-ui animation class to apply
     * @option
     * @example 'slide-in-left'
     *
     */
    animInFromLeft: 'slide-in-left',
    /**
     * motion-ui animation class to apply
     * @option
     * @example 'slide-out-left'
     */
    animOutToLeft: 'slide-out-left',
    /**
     * Allows Orbit to automatically animate on page load.
     * @option
     * @example true
     */
    autoPlay: true,
    /**
     * Amount of time, in ms, between slide transitions
     * @option
     * @example 5000
     */
    timerDelay: 5000,
    /**
     * Allows Orbit to infinitely loop through the slides
     * @option
     * @example true
     */
    infiniteWrap: true,
    /**
     * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
     * @option
     * @example true
     */
    swipe: true,
    /**
     * Allows the timing function to pause animation on hover.
     * @option
     * @example true
     */
    pauseOnHover: true,
    /**
     * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
     * @option
     * @example true
     */
    accessible: true,
    /**
     * Class applied to the container of Orbit
     * @option
     * @example 'orbit-container'
     */
    containerClass: 'orbit-container',
    /**
     * Class applied to individual slides.
     * @option
     * @example 'orbit-slide'
     */
    slideClass: 'orbit-slide',
    /**
     * Class applied to the bullet container. You're welcome.
     * @option
     * @example 'orbit-bullets'
     */
    boxOfBullets: 'orbit-bullets',
    /**
     * Class applied to the `next` navigation button.
     * @option
     * @example 'orbit-next'
     */
    nextClass: 'orbit-next',
    /**
     * Class applied to the `previous` navigation button.
     * @option
     * @example 'orbit-previous'
     */
    prevClass: 'orbit-previous'
  };
  /**
   * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
   * @function
   * @private
   */
  Orbit.prototype._init = function(){
    this.$wrapper = this.$element.find('.' + this.options.containerClass);
    this.$slides = this.$element.find('.' + this.options.slideClass);
    var $images = this.$element.find('img');

    if($images.length){
      Foundation.onImagesLoaded($images, this._prepareForOrbit.bind(this));
    }else{
      this._prepareForOrbit();//hehe
    }

    if(this.options.bullets){
      this._loadBullets();
    }

    this._events();

    if(this.options.autoPlay){
      this.geoSync();
    }
    if(this.options.accessible){ // allow wrapper to be focusable to enable arrow navigation
      this.$wrapper.attr('tabindex', 0);
    }
  };
  /**
   * Creates a jQuery collection of bullets, if they are being used.
   * @function
   * @private
   */
  Orbit.prototype._loadBullets = function(){
    this.$bullets = this.$element.find('.' + this.options.boxOfBullets).find('button');
  };
  /**
   * Sets a `timer` object on the orbit, and starts the counter for the next slide.
   * @function
   */
  Orbit.prototype.geoSync = function(){
    var _this = this;
    this.timer = new Foundation.Timer(
                      this.$element,
                      {duration: this.options.timerDelay,
                       infinite: false},
                      function(){
                        _this.changeSlide(true);
                      });
    this.timer.start();
  };
  /**
   * Sets wrapper and slide heights for the orbit.
   * @function
   * @private
   */
  Orbit.prototype._prepareForOrbit = function(){
    var _this = this;
    this._setWrapperHeight(function(max){
      _this._setSlideHeight(max);
    });
  };
  /**
   * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
   * @function
   * @private
   * @param {Function} cb - a callback function to fire when complete.
   */
  Orbit.prototype._setWrapperHeight = function(cb){//rewrite this to `for` loop
    var max = 0, temp, counter = 0;

    this.$slides.each(function(){
      temp = this.getBoundingClientRect().height;
      $(this).attr('data-slide', counter);

      if(counter){//if not the first slide, set css position and display property
        $(this).css({'position': 'relative', 'display': 'none'});
      }
      max = temp > max ? temp : max;
      counter++;
    });

    if(counter === this.$slides.length){
      this.$wrapper.css({'height': max});//only change the wrapper height property once.
      cb(max);//fire callback with max height dimension.
    }
  };
  /**
   * Sets the max-height of each slide.
   * @function
   * @private
   */
  Orbit.prototype._setSlideHeight = function(height){
    this.$slides.each(function(){
      $(this).css('max-height', height);
    });
  };
  /**
   * Adds event listeners to basically everything within the element.
   * @function
   * @private
   */
  Orbit.prototype._events = function(){
    var _this = this;

    //***************************************
    //**Now using custom event - thanks to:**
    //**      Yohai Ararat of Toronto      **
    //***************************************
    if(this.options.swipe){
      this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit')
      .on('swipeleft.zf.orbit', function(e){
        e.preventDefault();
        _this.changeSlide(true);
      }).on('swiperight.zf.orbit', function(e){
        e.preventDefault();
        _this.changeSlide(false);
      });
    }
    //***************************************

    if(this.options.autoPlay){
      this.$slides.on('click.zf.orbit', function(){
        _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
        _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
      });
      if(this.options.pauseOnHover){
        this.$element.on('mouseenter.zf.orbit', function(){
          _this.timer.pause();
        }).on('mouseleave.zf.orbit', function(){
          if(!_this.$element.data('clickedOn')){
            _this.timer.start();
          }
        });
      }
    }

    if(this.options.navButtons){
      var $controls = this.$element.find('.' + this.options.nextClass + ', .' + this.options.prevClass);
      $controls.attr('tabindex', 0)
        //also need to handle enter/return and spacebar key presses
               .on('click.zf.orbit touchend.zf.orbit', function(){
                 _this.changeSlide($(this).hasClass(_this.options.nextClass));
               });
    }

    if(this.options.bullets){
      this.$bullets.on('click.zf.orbit touchend.zf.orbit', function(){
        if(/is-active/g.test(this.className)){ return false; }//if this is active, kick out of function.
        var idx = $(this).data('slide'),
            ltr = idx > _this.$slides.filter('.is-active').data('slide'),
            $slide = _this.$slides.eq(idx);

        _this.changeSlide(ltr, $slide, idx);
      });
    }

    this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function(e){
      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, _this, {
        next: function() {
          _this.changeSlide(true);
        },
        previous: function() {
          _this.changeSlide(false);
        },
        handled: function() { // if bullet is focused, make sure focus moves
          if ($(e.target).is(_this.$bullets)) {
            _this.$bullets.filter('.is-active').focus();
          }
        }
      });
    });
  };
  /**
   * Changes the current slide to a new one.
   * @function
   * @param {Boolean} isLTR - flag if the slide should move left to right.
   * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
   * @param {Number} idx - the index of the new slide in its collection, if one chosen.
   * @fires Orbit#slidechange
   */
  Orbit.prototype.changeSlide = function(isLTR, chosenSlide, idx){
    var $curSlide = this.$slides.filter('.is-active').eq(0);


    if(/mui/g.test($curSlide[0].className)){ return false; }//if the slide is currently animating, kick out of the function

    var $firstSlide = this.$slides.first(),
        $lastSlide = this.$slides.last(),
        dirIn = isLTR ? 'Right' : 'Left',
        dirOut = isLTR ? 'Left' : 'Right',
        _this = this,
        $newSlide;

    if(!chosenSlide){//most of the time, this will be auto played or clicked from the navButtons.
      $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
                    (this.options.infiniteWrap ? $curSlide.next('.' + this.options.slideClass).length ? $curSlide.next('.' + this.options.slideClass) : $firstSlide : $curSlide.next('.' + this.options.slideClass))//pick next slide if moving left to right
                    :
                    (this.options.infiniteWrap ? $curSlide.prev('.' + this.options.slideClass).length ? $curSlide.prev('.' + this.options.slideClass) : $lastSlide : $curSlide.prev('.' + this.options.slideClass));//pick prev slide if moving right to left
    }else{
      $newSlide = chosenSlide;
    }
    if($newSlide.length){
      if(this.options.bullets){
        idx = idx || this.$slides.index($newSlide);//grab index to update bullets
        this._updateBullets(idx);
      }
      Foundation.Motion.animateIn(
        $newSlide.addClass('is-active').css({'position': 'absolute', 'top': 0}),
        this.options['animInFrom' + dirIn],
        function(){
          $newSlide.css({'position': 'relative', 'display': 'block'})
                   .attr('aria-live', 'polite');
        });

      Foundation.Motion.animateOut(
        $curSlide.removeClass('is-active'),
        this.options['animOutTo' + dirOut],
        function(){
          $curSlide.removeAttr('aria-live');
          if(_this.options.autoPlay){
            _this.timer.restart();
          }
          //do stuff?
          /**
           * Triggers when the slide has finished animating in.
           * @event Orbit#slidechange
           */
          _this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
        });
    }
  };
  /**
   * Updates the active state of the bullets, if displayed.
   * @function
   * @private
   * @param {Number} idx - the index of the current slide.
   */
  Orbit.prototype._updateBullets = function(idx){
    var $oldBullet = this.$element.find('.' + this.options.boxOfBullets)
                                  .find('.is-active').removeClass('is-active').blur(),
        span = $oldBullet.find('span:last').detach(),
        $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
  };
  /**
   * Destroys the carousel and hides the element.
   * @function
   */
  Orbit.prototype.destroy = function(){
    delete this.timer;
    this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
    Foundation.unregisterPlugin(this);
  };

  Foundation.plugin(Orbit);

}(jQuery, window.Foundation);

/**
 * ResponsiveMenu module.
 * @module foundation.responsiveMenu
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.accordionMenu
 * @requires foundation.util.drilldown
 * @requires foundation.util.dropdown-menu
 */
!function(Foundation, $) {
  'use strict';

  // The plugin matches the plugin classes with these plugin instances.
  var MenuPlugins = {
    dropdown: {
      cssClass: 'dropdown',
      plugin: Foundation._plugins['dropdown-menu'] || null
    },
    drilldown: {
      cssClass: 'drilldown',
      plugin: Foundation._plugins['drilldown'] || null
    },
    accordion: {
      cssClass: 'accordion-menu',
      plugin: Foundation._plugins['accordion-menu'] || null
    }
  };

  // [PH] Media queries
  var phMedia = {
    small: '(min-width: 0px)',
    medium: '(min-width: 640px)'
  };

  /**
   * Creates a new instance of a responsive menu.
   * @class
   * @fires ResponsiveMenu#init
   * @param {jQuery} element - jQuery object to make into a dropdown menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function ResponsiveMenu(element) {
    this.$element = $(element);
    this.rules = this.$element.data('responsive-menu');
    this.currentMq = null;
    this.currentPlugin = null;

    this._init();
    this._events();

    Foundation.registerPlugin(this);
  }

  ResponsiveMenu.defaults = {};

  /**
   * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
   * @function
   * @private
   */
  ResponsiveMenu.prototype._init = function() {
    var rulesTree = {};

    // Parse rules from "classes" in data attribute
    var rules = this.rules.split(' ');

    // Iterate through every rule found
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i].split('-');
      var ruleSize = rule.length > 1 ? rule[0] : 'small';
      var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

      if (MenuPlugins[rulePlugin] !== null) {
        rulesTree[ruleSize] = MenuPlugins[rulePlugin];
      }
    }

    this.rules = rulesTree;

    if (!$.isEmptyObject(rulesTree)) {
      this._checkMediaQueries();
    }
  };

  /**
   * Initializes events for the Menu.
   * @function
   * @private
   */
  ResponsiveMenu.prototype._events = function() {
    var _this = this;

    $(window).on('changed.zf.mediaquery', function() {
      _this._checkMediaQueries();
    });
    // $(window).on('resize.zf.ResponsiveMenu', function() {
    //   _this._checkMediaQueries();
    // });
  };

  /**
   * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
   * @function
   * @private
   */
  ResponsiveMenu.prototype._checkMediaQueries = function() {
    var matchedMq, _this = this;
    // Iterate through each rule and find the last matching rule
    $.each(this.rules, function(key) {
      if (Foundation.MediaQuery.atLeast(key)) {
        matchedMq = key;
      }
    });

    // No match? No dice
    if (!matchedMq) return;

    // Plugin already initialized? We good
    if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;

    // Remove existing plugin-specific CSS classes
    $.each(MenuPlugins, function(key, value) {
      _this.$element.removeClass(value.cssClass);
    });

    // Add the CSS class for the new plugin
    this.$element.addClass(this.rules[matchedMq].cssClass);

    // Create an instance of the new plugin
    if (this.currentPlugin) this.currentPlugin.destroy();
    this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
  };

  /**
   * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
   * @function
   */
  ResponsiveMenu.prototype.destroy = function() {
    this.currentPlugin.destroy();
    $(window).off('.zf.ResponsiveMenu');
    Foundation.unregisterPlugin(this);
  };
  Foundation.plugin(ResponsiveMenu);

}(Foundation, jQuery);

/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 */
!function($, Foundation) {

'use strict';

/**
 * Creates a new instance of Tab Bar.
 * @class
 * @fires ResponsiveToggle#init
 * @param {jQuery} element - jQuery object to attach tab bar functionality to.
 * @param {Object} options - Overrides to the default plugin settings.
 */
function ResponsiveToggle(element, options) {
  this.$element = $(element);
  this.options = $.extend({}, ResponsiveToggle.defaults, options);

  this._init();
  this._events();

  Foundation.registerPlugin(this);
}

ResponsiveToggle.defaults = {
  /**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @example 'medium'
   */
  hideFor: 'medium'
};

/**
 * Initializes the tab bar by finding the target element, toggling element, and running update().
 * @function
 * @private
 */
ResponsiveToggle.prototype._init = function() {
  var targetID = this.$element.data('responsive-toggle');
  if (!targetID) {
    console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
  }

  this.$targetMenu = $('#'+targetID);
  this.$toggler = this.$element.find('[data-toggle]');

  this._update();
};

/**
 * Adds necessary event handlers for the tab bar to work.
 * @function
 * @private
 */
ResponsiveToggle.prototype._events = function() {
  var _this = this;

  $(window).on('changed.zf.mediaquery', this._update.bind(this));

  this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
};

/**
 * Checks the current media query to determine if the tab bar should be visible or hidden.
 * @function
 * @private
 */
ResponsiveToggle.prototype._update = function() {
  // Mobile
  if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
    this.$element.show();
    this.$targetMenu.hide();
  }

  // Desktop
  else {
    this.$element.hide();
    this.$targetMenu.show();
  }
};

/**
 * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
 * @function
 * @fires ResponsiveToggle#toggled
 */
ResponsiveToggle.prototype.toggleMenu = function() {
  if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
    this.$targetMenu.toggle(0);

    /**
     * Fires when the element attached to the tab bar toggles.
     * @event ResponsiveToggle#toggled
     */
    this.$element.trigger('toggled.zf.responsiveToggle');
  }
};
ResponsiveToggle.prototype.destroy = function(){
  //TODO this...
};
Foundation.plugin(ResponsiveToggle);

}(jQuery, Foundation);

/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */
!function(Foundation, $) {
  'use strict';

  /**
   * Creates a new instance of Reveal.
   * @class
   * @param {jQuery} element - jQuery object to use for the modal.
   * @param {Object} options - optional parameters.
   */

  function Reveal(element, options) {
    this.$element = element;
    this.options = $.extend({}, Reveal.defaults, this.$element.data(), options);
    this._init();

    Foundation.registerPlugin(this);
    Foundation.Keyboard.register('Reveal', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ESCAPE': 'close',
      'TAB': 'tab_forward',
      'SHIFT_TAB': 'tab_backward'
    });
  }

  Reveal.defaults = {
    /**
     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
     * @option
     * @example 'slide-in-left'
     */
    animationIn: '',
    /**
     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
     * @option
     * @example 'slide-out-right'
     */
    animationOut: '',
    /**
     * Time, in ms, to delay the opening of a modal after a click if no animation used.
     * @option
     * @example 10
     */
    showDelay: 0,
    /**
     * Time, in ms, to delay the closing of a modal after a click if no animation used.
     * @option
     * @example 10
     */
    hideDelay: 0,
    /**
     * Allows a click on the body/overlay to close the modal.
     * @option
     * @example true
     */
    closeOnClick: true,
    /**
     * Allows the modal to close if the user presses the `ESCAPE` key.
     * @option
     * @example true
     */
    closeOnEsc: true,
    /**
     * If true, allows multiple modals to be displayed at once.
     * @option
     * @example false
     */
    multipleOpened: false,
    /**
     * Distance, in pixels, the modal should push down from the top of the screen.
     * @option
     * @example 100
     */
    vOffset: 100,
    /**
     * Distance, in pixels, the modal should push in from the side of the screen.
     * @option
     * @example 0
     */
    hOffset: 0,
    /**
     * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
     * @option
     * @example false
     */
    fullScreen: false,
    /**
     * Percentage of screen height the modal should push up from the bottom of the view.
     * @option
     * @example 10
     */
    btmOffsetPct: 10,
    /**
     * Allows the modal to generate an overlay div, which will cover the view when modal opens.
     * @option
     * @example true
     */
    overlay: true,
    /**
     * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api.
     * @option
     * @example false
     */
    resetOnClose: false
  };

  /**
   * Initializes the modal by adding the overlay and close buttons, (if selected).
   * @private
   */
  Reveal.prototype._init = function(){
    this.id = this.$element.attr('id');
    this.isActive = false;

    this.$anchor = $('[data-open="' + this.id + '"]').length ? $('[data-open="' + this.id + '"]') : $('[data-toggle="' + this.id + '"]');

    if(this.$anchor.length){
      var anchorId = this.$anchor[0].id || Foundation.GetYoDigits(6, 'reveal');

      this.$anchor.attr({
        'aria-controls': this.id,
        'id': anchorId,
        'aria-haspopup': true,
        'tabindex': 0
      });
      this.$element.attr({'aria-labelledby': anchorId});
    }

    // this.options.fullScreen = this.$element.hasClass('full');
    if(this.options.fullScreen || this.$element.hasClass('full')){
      this.options.fullScreen = true;
      this.options.overlay = false;
    }
    if(this.options.overlay){
      this.$overlay = this._makeOverlay(this.id);
    }

    this.$element.attr({
        'role': 'dialog',
        'aria-hidden': true,
        'data-yeti-box': this.id,
        'data-resize': this.id
    });

    this._events();
  };

  /**
   * Creates an overlay div to display behind the modal.
   * @private
   */
  Reveal.prototype._makeOverlay = function(id){
    var $overlay = $('<div></div>')
                    .addClass('reveal-overlay')
                    .attr({'tabindex': -1, 'aria-hidden': true})
                    .appendTo('body');
    if(this.options.closeOnClick){
      $overlay.attr({
        'data-close': id
      });
    }
    return $overlay;
  };

  /**
   * Adds event handlers for the modal.
   * @private
   */
  Reveal.prototype._events = function(){
    var _this = this;

    this.$element.on({
      'open.zf.trigger': this.open.bind(this),
      'close.zf.trigger': this.close.bind(this),
      'toggle.zf.trigger': this.toggle.bind(this),
      'resizeme.zf.trigger': function(){
        if(_this.$element.is(':visible')){
          _this._setPosition(function(){});
        }
      }
    });

    if(this.$anchor.length){
      this.$anchor.on('keydown.zf.reveal', function(e){
        if(e.which === 13 || e.which === 32){
          e.stopPropagation();
          e.preventDefault();
          _this.open();
        }
      });
    }


    if(this.options.closeOnClick && this.options.overlay){
      this.$overlay.off('.zf.reveal').on('click.zf.reveal', this.close.bind(this));
    }
  };
  /**
   * Sets the position of the modal before opening
   * @param {Function} cb - a callback function to execute when positioning is complete.
   * @private
   */
  Reveal.prototype._setPosition = function(cb){
    var eleDims = Foundation.Box.GetDimensions(this.$element);
    var elePos = this.options.fullScreen ? 'reveal full' : (eleDims.height >= (0.5 * eleDims.windowDims.height)) ? 'reveal' : 'center';

    if(elePos === 'reveal full'){
      console.log('full');
      //set to full height/width
      this.$element
          .offset(Foundation.Box.GetOffsets(this.$element, null, elePos, this.options.vOffset))
          .css({
            'height': eleDims.windowDims.height,
            'width': eleDims.windowDims.width
          });
    }else if(!Foundation.MediaQuery.atLeast('medium') || !Foundation.Box.ImNotTouchingYou(this.$element, null, true, false)){
      //if smaller than medium, resize to 100% width minus any custom L/R margin
      this.$element
          .css({
            'width': eleDims.windowDims.width - (this.options.hOffset * 2)
          })
          .offset(Foundation.Box.GetOffsets(this.$element, null, 'center', this.options.vOffset, this.options.hOffset));
      //flag a boolean so we can reset the size after the element is closed.
      this.changedSize = true;
    }else{
      this.$element
          .css({
            'max-height': eleDims.windowDims.height - (this.options.vOffset * (this.options.btmOffsetPct / 100 + 1)),
            'width': ''
          })
          .offset(Foundation.Box.GetOffsets(this.$element, null, elePos, this.options.vOffset));
          //the max height based on a percentage of vertical offset plus vertical offset
    }

    cb();
  };

  /**
   * Opens the modal controlled by `this.$anchor`, and closes all others by default.
   * @function
   * @fires Reveal#closeAll
   * @fires Reveal#open
   */
  Reveal.prototype.open = function(){
    var _this = this;
    this.isActive = true;
    //make element invisible, but remove display: none so we can get size and positioning
    this.$element
        .css({'visibility': 'hidden'})
        .show()
        .scrollTop(0);

    this._setPosition(function(){
      _this.$element.hide()
                   .css({'visibility': ''});
      if(!_this.options.multipleOpened){
        /**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeAll
         */
        _this.$element.trigger('closeme.zf.reveal', _this.id);
      }
      if(_this.options.animationIn){
        if(_this.options.overlay){
          Foundation.Motion.animateIn(_this.$overlay, 'fade-in', function(){
            Foundation.Motion.animateIn(_this.$element, _this.options.animationIn, function(){
            });
          });
        }else{
          Foundation.Motion.animateIn(_this.$element, _this.options.animationIn, function(){
          });
        }
      }else{
        if(_this.options.overlay){
          _this.$overlay.show(0, function(){
            _this.$element.show(_this.options.showDelay, function(){
            });
          });
        }else{
          _this.$element.show(_this.options.showDelay, function(){
          });
        }
      }
    });


    // handle accessibility
    this.$element.attr({'aria-hidden': false}).attr('tabindex', -1).focus()
    /**
     * Fires when the modal has successfully opened.
     * @event Reveal#open
     */
                 .trigger('open.zf.reveal');

    $('body').addClass('is-reveal-open')
             .attr({'aria-hidden': (this.options.overlay || this.options.fullScreen) ? true : false});
    setTimeout(function(){
      _this._extraHandlers();
      // Foundation.reflow();
    }, 0);
  };

  /**
   * Adds extra event handlers for the body and window if necessary.
   * @private
   */
  Reveal.prototype._extraHandlers = function(){
    var _this = this;
    var visibleFocusableElements = this.$element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function() {
      if (!$(this).is(':visible') || $(this).attr('tabindex') < 0){ return false; }//only have visible elements and those that have a tabindex greater or equal 0
      return true;
    });

    if(!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen){
      $('body').on('click.zf.reveal', function(e){
        // if()
          _this.close();
      });
    }
    if(this.options.closeOnEsc){
      $(window).on('keydown.zf.reveal', function(e){
        if (visibleFocusableElements.length === 0) { // no focusable elements inside the modal at all, prevent tabbing in general
          e.preventDefault();
        }
        Foundation.Keyboard.handleKey(e, _this, {
          close: function() {
            if (this.options.closeOnEsc) {
              this.close();
            }
          }
        });
      });
    }

    // lock focus within modal while tabbing
    this.$element.on('keydown.zf.reveal', function(e) {
      var $target = $(this);
      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, _this, {
        tab_forward: function() {
          if (this.$element.find(':focus').is(visibleFocusableElements.eq(-1))) { // left modal downwards, setting focus to first element
            visibleFocusableElements.eq(0).focus();
            e.preventDefault();
          }
        },
        tab_backward: function() {
          if (this.$element.find(':focus').is(visibleFocusableElements.eq(0)) || this.$element.is(':focus')) { // left modal upwards, setting focus to last element
            visibleFocusableElements.eq(-1).focus();
            e.preventDefault();
          }
        },
        open: function() {
          if ($target.is(visibleFocusableElements)) { // dont't trigger if acual element has focus (i.e. inputs, links, ...)
            this.open();
          }
        },
        close: function() {
          if (this.options.closeOnEsc) {
            this.close();
          }
        }
      });
      if (visibleFocusableElements.length === 0) { // no focusable elements inside the modal at all, prevent tabbing in general
        e.preventDefault();
      }
    });

  };

  /**
   * Closes the modal.
   * @function
   * @fires Reveal#closed
   */
  Reveal.prototype.close = function(){
    if(!this.isActive || !this.$element.is(':visible')){
      return false;
    }
    var _this = this;

    if(this.options.animationOut){
      Foundation.Motion.animateOut(this.$element, this.options.animationOut, function(){
        if(_this.options.overlay){
          Foundation.Motion.animateOut(_this.$overlay, 'fade-out', function(){
          });
        }
      });
    }else{
      this.$element.hide(_this.options.hideDelay, function(){
        if(_this.options.overlay){
          _this.$overlay.hide(0, function(){
          });
        }
      });
    }
    //conditionals to remove extra event listeners added on open
    if(this.options.closeOnEsc){
      $(window).off('keydown.zf.reveal');
    }
    if(!this.options.overlay && this.options.closeOnClick){
      $('body').off('click.zf.reveal');
    }
    this.$element.off('keydown.zf.reveal');

    //if the modal changed size, reset it
    if(this.changedSize){
      this.$element.css({
        'height': '',
        'width': ''
      });
    }

    $('body').removeClass('is-reveal-open').attr({'aria-hidden': false, 'tabindex': ''});

    /**
    * Resets the modal content
    * This prevents a running video to keep going in the background
    */
    if(this.options.resetOnClose) {
      this.$element.html(this.$element.html());
    }

    this.isActive = false;
    this.$element.attr({'aria-hidden': true})
    /**
     * Fires when the modal is done closing.
     * @event Reveal#closed
     */
                 .trigger('closed.zf.reveal');
  };
  /**
   * Toggles the open/closed state of a modal.
   * @function
   */
  Reveal.prototype.toggle = function(){
    if(this.isActive){
      this.close();
    }else{
      this.open();
    }
  };

  /**
   * Destroys an instance of a modal.
   * @function
   */
  Reveal.prototype.destroy = function() {
    if(this.options.overlay){
      this.$overlay.hide().off().remove();
    }
    this.$element.hide();
    this.$anchor.off();

    Foundation.unregisterPlugin(this);
  };

  Foundation.plugin(Reveal);

  // Exports for AMD/Browserify
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Reveal;
  if (typeof define === 'function')
    define(['foundation'], function() {
      return Reveal;
    });

}(Foundation, jQuery);

/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */
!function($, Foundation){
  'use strict';

  /**
   * Creates a new instance of a drilldown menu.
   * @class
   * @param {jQuery} element - jQuery object to make into an accordion menu.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Slider(element, options){
    this.$element = element;
    this.options = $.extend({}, Slider.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this);
    Foundation.Keyboard.register('Slider', {
      'ltr': {
        'ARROW_RIGHT': 'increase',
        'ARROW_UP': 'increase',
        'ARROW_DOWN': 'decrease',
        'ARROW_LEFT': 'decrease',
        'SHIFT_ARROW_RIGHT': 'increase_fast',
        'SHIFT_ARROW_UP': 'increase_fast',
        'SHIFT_ARROW_DOWN': 'decrease_fast',
        'SHIFT_ARROW_LEFT': 'decrease_fast'
      },
      'rtl': {
        'ARROW_LEFT': 'increase',
        'ARROW_RIGHT': 'decrease',
        'SHIFT_ARROW_LEFT': 'increase_fast',
        'SHIFT_ARROW_RIGHT': 'decrease_fast'
      }
    });
  }

  Slider.defaults = {
    /**
     * Minimum value for the slider scale.
     * @option
     * @example 0
     */
    start: 0,
    /**
     * Maximum value for the slider scale.
     * @option
     * @example 100
     */
    end: 100,
    /**
     * Minimum value change per change event. Not Currently Implemented!

     */
    step: 1,
    /**
     * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
     * @option
     * @example 0
     */
    initialStart: 0,
    /**
     * Value at which the right handle/second input should be set to on initialization.
     * @option
     * @example 100
     */
    initialEnd: 100,
    /**
     * Allows the input to be located outside the container and visible. Set to by the JS
     * @option
     * @example false
     */
    binding: false,
    /**
     * Allows the user to click/tap on the slider bar to select a value.
     * @option
     * @example true
     */
    clickSelect: true,
    /**
     * Set to true and use the `vertical` class to change alignment to vertical.
     * @option
     * @example false
     */
    vertical: false,
    /**
     * Allows the user to drag the slider handle(s) to select a value.
     * @option
     * @example true
     */
    draggable: true,
    /**
     * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
     * @option
     * @example false
     */
    disabled: false,
    /**
     * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
     * @option
     * @example false
     */
    doubleSided: false,
    /**
     * Potential future feature.
     */
    // steps: 100,
    /**
     * Number of decimal places the plugin should go to for floating point precision.
     * @option
     * @example 2
     */
    decimal: 2,
    /**
     * Time delay for dragged elements.
     */
    // dragDelay: 0,
    /**
     * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
     * @option
     * @example 200
     */
    moveTime: 200,//update this if changing the transition time in the sass
    /**
     * Class applied to disabled sliders.
     * @option
     * @example 'disabled'
     */
    disabledClass: 'disabled'
  };
  /**
   * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
   * @function
   * @private
   */
  Slider.prototype._init = function(){
    this.inputs = this.$element.find('input');
    this.handles = this.$element.find('[data-slider-handle]');

    this.$handle = this.handles.eq(0);
    this.$input = this.inputs.length ? this.inputs.eq(0) : $('#' + this.$handle.attr('aria-controls'));
    this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

    var isDbl = false,
        _this = this;
    if(this.options.disabled || this.$element.hasClass(this.options.disabledClass)){
      this.options.disabled = true;
      this.$element.addClass(this.options.disabledClass);
    }
    if(!this.inputs.length){
      this.inputs = $().add(this.$input);
      this.options.binding = true;
    }
    this._setInitAttr(0);
    this._events(this.$handle);

    if(this.handles[1]){
      this.options.doubleSided = true;
      this.$handle2 = this.handles.eq(1);
      this.$input2 = this.inputs.length ? this.inputs.eq(1) : $('#' + this.$handle2.attr('aria-controls'));

      if(!this.inputs[1]){
        this.inputs = this.inputs.add(this.$input2);
      }
      isDbl = true;

      this._setHandlePos(this.$handle, this.options.initialStart, true, function(){

        _this._setHandlePos(_this.$handle2, _this.options.initialEnd);
      });
      // this.$handle.triggerHandler('click.zf.slider');
      this._setInitAttr(1);
      this._events(this.$handle2);
    }

    if(!isDbl){
      this._setHandlePos(this.$handle, this.options.initialStart, true);
    }
  };
  /**
   * Sets the position of the selected handle and fill bar.
   * @function
   * @private
   * @param {jQuery} $hndl - the selected handle to move.
   * @param {Number} location - floating point between the start and end values of the slider bar.
   * @param {Function} cb - callback function to fire on completion.
   * @fires Slider#moved
   */
  Slider.prototype._setHandlePos = function($hndl, location, noInvert, cb){
  //might need to alter that slightly for bars that will have odd number selections.
    location = parseFloat(location);//on input change events, convert string to number...grumble.
    // prevent slider from running out of bounds
    if(location < this.options.start){ location = this.options.start; }
    else if(location > this.options.end){ location = this.options.end; }

    var isDbl = this.options.doubleSided,
        callback = cb || null;

    if(isDbl){
      if(this.handles.index($hndl) === 0){
        var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
        location = location >= h2Val ? h2Val - this.options.step : location;
      }else{
        var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
        location = location <= h1Val ? h1Val + this.options.step : location;
      }
    }

    if(this.options.vertical && !noInvert){
      location = this.options.end - location;
    }
    var _this = this,
        vert = this.options.vertical,
        hOrW = vert ? 'height' : 'width',
        lOrT = vert ? 'top' : 'left',
        halfOfHandle = $hndl[0].getBoundingClientRect()[hOrW] / 2,
        elemDim = this.$element[0].getBoundingClientRect()[hOrW],
        pctOfBar = percent(location, this.options.end).toFixed(this.options.decimal),
        pxToMove = (elemDim - halfOfHandle) * pctOfBar,
        movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal),
        location = location > 0 ? parseFloat(location.toFixed(this.options.decimal)) : 0,
        anim, prog, start = null, css = {};

    this._setValues($hndl, location);

    if(this.options.doubleSided){//update to calculate based on values set to respective inputs??
      var isLeftHndl = this.handles.index($hndl) === 0,
          dim,
          idx = this.handles.index($hndl);

      if(isLeftHndl){
        css[lOrT] = (pctOfBar > 0 ? pctOfBar * 100 : 0) + '%';//
        dim = /*Math.abs*/((percent(this.$handle2.position()[lOrT] + halfOfHandle, elemDim) - parseFloat(pctOfBar)) * 100).toFixed(this.options.decimal) + '%';
        css['min-' + hOrW] = dim;
        if(cb && typeof cb === 'function'){ cb(); }
      }else{
        location = (location < 100 ? location : 100) - (parseFloat(this.$handle[0].style.left) || this.options.end - location);
        css['min-' + hOrW] = location + '%';
      }
    }

    this.$element.one('finished.zf.animate', function(){
                    _this.animComplete = true;
                    /**
                     * Fires when the handle is done moving.
                     * @event Slider#moved
                     */
                    _this.$element.trigger('moved.zf.slider', [$hndl]);
                });
    var moveTime = _this.$element.data('dragging') ? 1000/60 : _this.options.moveTime;
    /*var move = new */Foundation.Move(moveTime, $hndl, function(){
      $hndl.css(lOrT, movement + '%');
      if(!_this.options.doubleSided){
        _this.$fill.css(hOrW, pctOfBar * 100 + '%');
      }else{
        _this.$fill.css(css);
      }
    });
    // move.do();
  };
  /**
   * Sets the initial attribute for the slider element.
   * @function
   * @private
   * @param {Number} idx - index of the current handle/input to use.
   */
  Slider.prototype._setInitAttr = function(idx){
    var id = this.inputs.eq(idx).attr('id') || Foundation.GetYoDigits(6, 'slider');
    this.inputs.eq(idx).attr({
      'id': id,
      'max': this.options.end,
      'min': this.options.start

    });
    this.handles.eq(idx).attr({
      'role': 'slider',
      'aria-controls': id,
      'aria-valuemax': this.options.end,
      'aria-valuemin': this.options.start,
      'aria-valuenow': idx === 0 ? this.options.initialStart : this.options.initialEnd,
      'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
      'tabindex': 0
    });
  };
  /**
   * Sets the input and `aria-valuenow` values for the slider element.
   * @function
   * @private
   * @param {jQuery} $handle - the currently selected handle.
   * @param {Number} val - floating point of the new value.
   */
  Slider.prototype._setValues = function($handle, val){
    var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
    this.inputs.eq(idx).val(val);
    $handle.attr('aria-valuenow', val);
  };
  /**
   * Handles events on the slider element.
   * Calculates the new location of the current handle.
   * If there are two handles and the bar was clicked, it determines which handle to move.
   * @function
   * @private
   * @param {Object} e - the `event` object passed from the listener.
   * @param {jQuery} $handle - the current handle to calculate for, if selected.
   * @param {Number} val - floating point number for the new value of the slider.
   */
  Slider.prototype._handleEvent = function(e, $handle, val){
    var value, hasVal;
    if(!val){//click or drag events
      e.preventDefault();
      var _this = this,
          vertical = this.options.vertical,
          param = vertical ? 'height' : 'width',
          direction = vertical ? 'top' : 'left',
          pageXY = vertical ? e.pageY : e.pageX,
          halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
          barDim = this.$element[0].getBoundingClientRect()[param],
          barOffset = (this.$element.offset()[direction] -  pageXY),
          barXY = barOffset > 0 ? -halfOfHandle : (barOffset - halfOfHandle) < -barDim ? barDim : Math.abs(barOffset),//if the cursor position is less than or greater than the elements bounding coordinates, set coordinates within those bounds
          // eleDim = this.$element[0].getBoundingClientRect()[param],
          offsetPct = percent(barXY, barDim);
      value = (this.options.end - this.options.start) * offsetPct;
      hasVal = false;

      if(!$handle){//figure out which handle it is, pass it to the next function.
        var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
            secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
            $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
      }

    }else{//change event on input
      value = val;
      hasVal = true;
    }

    this._setHandlePos($handle, value, hasVal);
  };
  /**
   * Adds event listeners to the slider elements.
   * @function
   * @private
   * @param {jQuery} $handle - the current handle to apply listeners to.
   */
  Slider.prototype._events = function($handle){
    if(this.options.disabled){ return false; }

    var _this = this,
        curHandle,
        timer;

      this.inputs.off('change.zf.slider').on('change.zf.slider', function(e){
        var idx = _this.inputs.index($(this));
        _this._handleEvent(e, _this.handles.eq(idx), $(this).val());
      });

    if(this.options.clickSelect){
      this.$element.off('click.zf.slider').on('click.zf.slider', function(e){
        if(_this.$element.data('dragging')){ return false; }
        _this.animComplete = false;
        if(_this.options.doubleSided){
          _this._handleEvent(e);
        }else{
          _this._handleEvent(e, _this.$handle);
        }
      });
    }

    if(this.options.draggable){
      this.handles.addTouch();
      // var curHandle,
      //     timer,
      var $body = $('body');
      $handle
        .off('mousedown.zf.slider')
        .on('mousedown.zf.slider', function(e){
          $handle.addClass('is-dragging');
          _this.$fill.addClass('is-dragging');//
          _this.$element.data('dragging', true);
          _this.animComplete = false;
          curHandle = $(e.currentTarget);

          $body.on('mousemove.zf.slider', function(e){
            e.preventDefault();

            // timer = setTimeout(function(){
            _this._handleEvent(e, curHandle);
            // }, _this.options.dragDelay);
          }).on('mouseup.zf.slider', function(e){
            // clearTimeout(timer);
            _this.animComplete = true;
            _this._handleEvent(e, curHandle);
            $handle.removeClass('is-dragging');
            _this.$fill.removeClass('is-dragging');
            _this.$element.data('dragging', false);
            // Foundation.reflow(_this.$element, 'slider');
            $body.off('mousemove.zf.slider mouseup.zf.slider');
          });
      });
    }
    $handle.off('keydown.zf.slider').on('keydown.zf.slider', function(e){
      var idx = _this.options.doubleSided ? _this.handles.index($(this)) : 0,
        oldValue = parseFloat(_this.inputs.eq(idx).val()),
        newValue;

      var _$handle = $(this);

      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, _this, {
        decrease: function() {
          newValue = oldValue - _this.options.step;
        },
        increase: function() {
          newValue = oldValue + _this.options.step;
        },
        decrease_fast: function() {
          newValue = oldValue - _this.options.step * 10;
        },
        increase_fast: function() {
          newValue = oldValue + _this.options.step * 10;
        },
        handled: function() { // only set handle pos when event was handled specially
          e.preventDefault();
          _this._setHandlePos(_$handle, newValue, true);
        }
      });
      /*if (newValue) { // if pressed key has special function, update value
        e.preventDefault();
        _this._setHandlePos(_$handle, newValue);
      }*/
    });
  };
  /**
   * Destroys the slider plugin.
   */
   Slider.prototype.destroy = function(){
     this.handles.off('.zf.slider');
     this.inputs.off('.zf.slider');
     this.$element.off('.zf.slider');

     Foundation.unregisterPlugin(this);
   };

  Foundation.plugin(Slider);

  function percent(frac, num){
    return (frac / num);
  }
  function absPosition($handle, dir, clickPos, param){
    return Math.abs(($handle.position()[dir] + ($handle[param]() / 2)) - clickPos);
  }
}(jQuery, window.Foundation);

//*********this is in case we go to static, absolute positions instead of dynamic positioning********
// this.setSteps(function(){
//   _this._events();
//   var initStart = _this.options.positions[_this.options.initialStart - 1] || null;
//   var initEnd = _this.options.initialEnd ? _this.options.position[_this.options.initialEnd - 1] : null;
//   if(initStart || initEnd){
//     _this._handleEvent(initStart, initEnd);
//   }
// });

//***********the other part of absolute positions*************
// Slider.prototype.setSteps = function(cb){
//   var posChange = this.$element.outerWidth() / this.options.steps;
//   var counter = 0
//   while(counter < this.options.steps){
//     if(counter){
//       this.options.positions.push(this.options.positions[counter - 1] + posChange);
//     }else{
//       this.options.positions.push(posChange);
//     }
//     counter++;
//   }
//   cb();
// };

/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */
!function($, Foundation){
  'use strict';

  /**
   * Creates a new instance of a sticky thing.
   * @class
   * @param {jQuery} element - jQuery object to make sticky.
   * @param {Object} options - options object passed when creating the element programmatically.
   */
  function Sticky(element, options){
    this.$element = element;
    this.options = $.extend({}, Sticky.defaults, this.$element.data(), options);

    this._init();

    Foundation.registerPlugin(this);
  }
  Sticky.defaults = {
    /**
     * Customizable container template. Add your own classes for styling and sizing.
     * @option
     * @example '<div data-sticky-container class="small-6 columns"></div>'
     */
    container: '<div data-sticky-container></div>',
    /**
     * Location in the view the element sticks to.
     * @option
     * @example 'top'
     */
    stickTo: 'top',
    /**
     * If anchored to a single element, the id of that element.
     * @option
     * @example 'exampleId'
     */
    anchor: '',
    /**
     * If using more than one element as anchor points, the id of the top anchor.
     * @option
     * @example 'exampleId:top'
     */
    topAnchor: '',
    /**
     * If using more than one element as anchor points, the id of the bottom anchor.
     * @option
     * @example 'exampleId:bottom'
     */
    btmAnchor: '',
    /**
     * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
     * @option
     * @example 1
     */
    marginTop: 1,
    /**
     * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
     * @option
     * @example 1
     */
    marginBottom: 1,
    /**
     * Breakpoint string that is the minimum screen size an element should become sticky.
     * @option
     * @example 'medium'
     */
    stickyOn: 'medium',
    /**
     * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
     * @option
     * @example 'sticky'
     */
    stickyClass: 'sticky',
    /**
     * Class applied to sticky container. Foundation defaults to `sticky-container`.
     * @option
     * @example 'sticky-container'
     */
    containerClass: 'sticky-container',
    /**
     * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
     * @option
     * @example 50
     */
    checkEvery: -1
  };

  /**
   * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
   * Also triggered by Foundation._reflow
   * @function
   * @private
   */
  Sticky.prototype._init = function(){
    var $parent = this.$element.parent('[data-sticky-container]'),
        id = this.$element[0].id || Foundation.GetYoDigits(6, 'sticky'),
        _this = this;

    if(!$parent.length){
      this.wasWrapped = true;
    }
    this.$container = $parent.length ? $parent : $(this.options.container).wrapInner(this.$element);
    this.$container.addClass(this.options.containerClass);


    this.$element.addClass(this.options.stickyClass)
                 .attr({'data-resize': id});

    this.scrollCount = this.options.checkEvery;
    this.isStuck = false;
    // console.log(this.options.anchor, this.options.topAnchor);
    if(this.options.topAnchor !== ''){
      this._parsePoints();
      // console.log(this.points[0]);
    }else{
      this.$anchor = this.options.anchor ? $('#' + this.options.anchor) : $(document.body);
    }


    this._setSizes(function(){
      _this._calc(false);
    });
    this._events(id.split('-').reverse().join('-'));
  };
  /**
   * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
   * @function
   * @private
   */
  Sticky.prototype._parsePoints = function(){
    var top = this.options.topAnchor,
        btm = this.options.btmAnchor,
        pts = [top, btm],
        breaks = {};
    for(var i = 0, len = pts.length; i < len && pts[i]; i++){
      var pt;
      if(typeof pts[i] === 'number'){
        pt = pts[i];
      }else{
        var place = pts[i].split(':'),
            anchor = $('#' + place[0]);

        pt = anchor.offset().top;
        if(place[1] && place[1].toLowerCase() === 'bottom'){
          pt += anchor[0].getBoundingClientRect().height;
        }
      }
      breaks[i] = pt;
    }
      // console.log(breaks);
    this.points = breaks;
    // console.log(this.points);
    return;
  };

  /**
   * Adds event handlers for the scrolling element.
   * @private
   * @param {String} id - psuedo-random id for unique scroll event listener.
   */
  Sticky.prototype._events = function(id){
    // console.log('called');
    var _this = this,
        scrollListener = 'scroll.zf.' + id;
    if(this.isOn){ return; }
    if(this.canStick){
      this.isOn = true;
      // this.$anchor.off('change.zf.sticky')
      //             .on('change.zf.sticky', function(){
      //               _this._setSizes(function(){
      //                 _this._calc(false);
      //               });
      //             });

      $(window).off(scrollListener)
               .on(scrollListener, function(e){
                 if(_this.scrollCount === 0){
                   _this.scrollCount = _this.options.checkEvery;
                   _this._setSizes(function(){
                     _this._calc(false, window.pageYOffset);
                   });
                 }else{
                   _this.scrollCount--;
                   _this._calc(false, window.pageYOffset);
                 }
              });
    }

    this.$element.off('resizeme.zf.trigger')
                 .on('resizeme.zf.trigger', function(e, el){
                     _this._setSizes(function(){
                       _this._calc(false);
                       if(_this.canStick){
                         if(!_this.isOn){
                           _this._events(id);
                         }
                       }else if(_this.isOn){
                         _this._pauseListeners(scrollListener);
                       }
                     });
    });
  };

  /**
   * Removes event handlers for scroll and change events on anchor.
   * @fires Sticky#pause
   * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
   */
  Sticky.prototype._pauseListeners = function(scrollListener){
    this.isOn = false;
    // this.$anchor.off('change.zf.sticky');
    $(window).off(scrollListener);

    /**
     * Fires when the plugin is paused due to resize event shrinking the view.
     * @event Sticky#pause
     * @private
     */
     this.$element.trigger('pause.zf.sticky');
  };

  /**
   * Called on every `scroll` event and on `_init`
   * fires functions based on booleans and cached values
   * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
   * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
   */
  Sticky.prototype._calc = function(checkSizes, scroll){
    if(checkSizes){ this._setSizes(); }

    if(!this.canStick){
      if(this.isStuck){
        this._removeSticky(true);
      }
      return false;
    }

    if(!scroll){ scroll = window.pageYOffset; }

    if(scroll >= this.topPoint){
      if(scroll <= this.bottomPoint){
        if(!this.isStuck){
          this._setSticky();
        }
      }else{
        if(this.isStuck){
          this._removeSticky(false);
        }
      }
    }else{
      if(this.isStuck){
        this._removeSticky(true);
      }
    }
  };
  /**
   * Causes the $element to become stuck.
   * Adds `position: fixed;`, and helper classes.
   * @fires Sticky#stuckto
   * @function
   * @private
   */
  Sticky.prototype._setSticky = function(){
    var stickTo = this.options.stickTo,
        mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
        notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
        css = {};

    css[mrgn] = this.options[mrgn] + 'em';
    css[stickTo] = 0;
    css[notStuckTo] = 'auto';
    css['left'] = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10);
    this.isStuck = true;
    this.$element.removeClass('is-anchored is-at-' + notStuckTo)
                 .addClass('is-stuck is-at-' + stickTo)
                 .css(css)
                 /**
                  * Fires when the $element has become `position: fixed;`
                  * Namespaced to `top` or `bottom`.
                  * @event Sticky#stuckto
                  */
                 .trigger('sticky.zf.stuckto:' + stickTo);
  };

  /**
   * Causes the $element to become unstuck.
   * Removes `position: fixed;`, and helper classes.
   * Adds other helper classes.
   * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
   * @fires Sticky#unstuckfrom
   * @private
   */
  Sticky.prototype._removeSticky = function(isTop){
    var stickTo = this.options.stickTo,
        stickToTop = stickTo === 'top',
        css = {}, mrgn, notStuckTo,
        anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight;
        mrgn = stickToTop ? 'marginTop' : 'marginBottom';
        notStuckTo = stickToTop ? 'bottom' : 'top';
      css[mrgn] = 0;
    if((isTop && !stickToTop) || (stickToTop && !isTop)){
      css[stickTo] = anchorPt;
      css[notStuckTo] = 0;
    }else{
      css[stickTo] = 0;
      css[notStuckTo] = anchorPt;
    }
    css['left'] = '';
    this.isStuck = false;
    this.$element.removeClass('is-stuck is-at-' + stickTo)
                 .addClass('is-anchored is-at-' + (isTop ? 'top' : 'bottom'))
                 .css(css)
                 /**
                  * Fires when the $element has become anchored.
                  * Namespaced to `top` or `bottom`.
                  * @event Sticky#unstuckfrom
                  */
                 .trigger('sticky.zf.unstuckfrom:' + isTop ? 'top' : 'bottom');
  };

  /**
   * Sets the $element and $container sizes for plugin.
   * Calls `_setBreakPoints`.
   * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
   * @private
   */
  Sticky.prototype._setSizes = function(cb){
    this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn);
    if(!this.canStick){ cb(); }
    var _this = this,
        newElemWidth = this.$container[0].getBoundingClientRect().width,
        comp = window.getComputedStyle(this.$container[0]),
        pdng = parseInt(comp['padding-right'], 10);

    // console.log(this.$anchor);
    if(this.$anchor && this.$anchor.length){
      this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
    }else{
      this._parsePoints();
    }

    this.$element.css({
      'max-width': newElemWidth - pdng + 'px'
    });

    var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
    this.containerHeight = newContainerHeight;
    this.$container.css({
      height: newContainerHeight
    });
    this.elemHeight = newContainerHeight;

  	if (this.isStuck) {
  		this.$element.css({"left":this.$container.offset().left + parseInt(comp['padding-left'], 10)});
  	}

    this._setBreakPoints(newContainerHeight, function(){
      if(cb){ cb(); }
    });

  };
  /**
   * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
   * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
   * @param {Function} cb - optional callback function to be called on completion.
   * @private
   */
  Sticky.prototype._setBreakPoints = function(elemHeight, cb){
    if(!this.canStick){
      if(cb){ cb(); }
      else{ return false; }
    }
    var mTop = emCalc(this.options.marginTop),
        mBtm = emCalc(this.options.marginBottom),
        topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
        bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
        // topPoint = this.$anchor.offset().top || this.points[0],
        // bottomPoint = topPoint + this.anchorHeight || this.points[1],
        winHeight = window.innerHeight;

    if(this.options.stickTo === 'top'){
      topPoint -= mTop;
      bottomPoint -= (elemHeight + mTop);
    }else if(this.options.stickTo === 'bottom'){
      topPoint -= (winHeight - (elemHeight + mBtm));
      bottomPoint -= (winHeight - mBtm);
    }else{
      //this would be the stickTo: both option... tricky
    }

    this.topPoint = topPoint;
    this.bottomPoint = bottomPoint;

    if(cb){ cb(); }
  };

  /**
   * Destroys the current sticky element.
   * Resets the element to the top position first.
   * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
   * @function
   */
  Sticky.prototype.destroy = function(){
    this._removeSticky(true);

    this.$element.removeClass(this.options.stickyClass + ' is-anchored is-at-top')
                 .css({
                   height: '',
                   top: '',
                   bottom: '',
                   'max-width': ''
                 })
                 .off('resizeme.zf.trigger');

    this.$anchor.off('change.zf.sticky');
    $(window).off('scroll.zf.sticky');

    if(this.wasWrapped){
      this.$element.unwrap();
    }else{
      this.$container.removeClass(this.options.containerClass)
                     .css({
                       height: ''
                     });
    }
    Foundation.unregisterPlugin(this);
  };
  /**
   * Helper function to calculate em values
   * @param Number {em} - number of em's to calculate into pixels
   */
  function emCalc(em){
    return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
  }
  Foundation.plugin(Sticky);
}(jQuery, window.Foundation);

/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.timerAndImageLoader if tabs contain images
 */
!function($, Foundation) {
  'use strict';

  /**
   * Creates a new instance of tabs.
   * @class
   * @fires Tabs#init
   * @param {jQuery} element - jQuery object to make into tabs.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Tabs(element, options){
    this.$element = element;
    this.options = $.extend({}, Tabs.defaults, this.$element.data(), options);

    this._init();
    Foundation.registerPlugin(this);
    Foundation.Keyboard.register('Tabs', {
      'ENTER': 'open',
      'SPACE': 'open',
      'ARROW_RIGHT': 'next',
      'ARROW_UP': 'previous',
      'ARROW_DOWN': 'next',
      'ARROW_LEFT': 'previous',
      // 'TAB': 'next',
      // 'SHIFT_TAB': 'previous'
    });
  }

  Tabs.defaults = {
    // /**
    //  * Allows the JS to alter the url of the window. Not yet implemented.
    //  */
    // deepLinking: false,
    // /**
    //  * If deepLinking is enabled, allows the window to scroll to content if window is loaded with a hash including a tab-pane id
    //  */
    // scrollToContent: false,
    /**
     * Allows the window to scroll to content of active pane on load if set to true.
     * @option
     * @example false
     */
    autoFocus: false,
    /**
     * Allows keyboard input to 'wrap' around the tab links.
     * @option
     * @example true
     */
    wrapOnKeys: true,
    /**
     * Allows the tab content panes to match heights if set to true.
     * @option
     * @example false
     */
    matchHeight: false,
    /**
     * Class applied to `li`'s in tab link list.
     * @option
     * @example 'tabs-title'
     */
    linkClass: 'tabs-title',
    // contentClass: 'tabs-content',
    /**
     * Class applied to the content containers.
     * @option
     * @example 'tabs-panel'
     */
    panelClass: 'tabs-panel'
  };

  /**
   * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
   * @private
   */
  Tabs.prototype._init = function(){
    var _this = this;

    this.$tabTitles = this.$element.find('.' + this.options.linkClass);
    this.$tabContent = $('[data-tabs-content="' + this.$element[0].id + '"]');

    this.$tabTitles.each(function(){
      var $elem = $(this),
          $link = $elem.find('a'),
          isActive = $elem.hasClass('is-active'),
          hash = $link.attr('href').slice(1),
          linkId = hash + '-label',
          $tabContent = $(hash);

      $elem.attr({'role': 'presentation'});

      $link.attr({
        'role': 'tab',
        'aria-controls': hash,
        'aria-selected': isActive,
        'id': linkId
      });

      $tabContent.attr({
        'role': 'tabpanel',
        'aria-hidden': !isActive,
        'aria-labelledby': linkId
      });

      if(isActive && _this.options.autoFocus){
        $link.focus();
      }
    });
    if(this.options.matchHeight){
      var $images = this.$tabContent.find('img');
      if($images.length){
        Foundation.onImagesLoaded($images, this._setHeight.bind(this));
      }else{
        this._setHeight();
      }
    }
    this._events();
  };
  /**
   * Adds event handlers for items within the tabs.
   * @private
   */
   Tabs.prototype._events = function(){
    this._addKeyHandler();
    this._addClickHandler();
    if(this.options.matchHeight){
      $(window).on('changed.zf.mediaquery', this._setHeight.bind(this));
    }
  };

  /**
   * Adds click handlers for items within the tabs.
   * @private
   */
  Tabs.prototype._addClickHandler = function(){
    var _this = this;
    this.$tabTitles.off('click.zf.tabs')
                   .on('click.zf.tabs', function(e){
                     e.preventDefault();
                     e.stopPropagation();
                     if($(this).hasClass('is-active')){
                       return;
                     }
                     _this._handleTabChange($(this));
                   });
  };

  /**
   * Adds keyboard event handlers for items within the tabs.
   * @private
   */
  Tabs.prototype._addKeyHandler = function(){
    var _this = this;
    var $firstTab = _this.$element.find('li:first-of-type');
    var $lastTab = _this.$element.find('li:last-of-type');

    this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function(e){
      e.stopPropagation();
      e.preventDefault();

      var $element = $(this),
        $elements = $element.parent('ul').children('li'),
        $prevElement,
        $nextElement;

      $elements.each(function(i) {
        if ($(this).is($element)) {
          if (_this.options.wrapOnKeys) {
            $prevElement = i === 0 ? $elements.last() : $elements.eq(i-1);
            $nextElement = i === $elements.length -1 ? $elements.first() : $elements.eq(i+1);
          } else {
            $prevElement = $elements.eq(Math.max(0, i-1));
            $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
          }
          return;
        }
      });

      // handle keyboard event with keyboard util
      Foundation.Keyboard.handleKey(e, _this, {
        open: function() {
          $element.find('[role="tab"]').focus();
          _this._handleTabChange($element);
        },
        previous: function() {
          $prevElement.find('[role="tab"]').focus();
          _this._handleTabChange($prevElement);
        },
        next: function() {
          $nextElement.find('[role="tab"]').focus();
          _this._handleTabChange($nextElement);
        }
      });
    });
  };


  /**
   * Opens the tab `$targetContent` defined by `$target`.
   * @param {jQuery} $target - Tab to open.
   * @fires Tabs#change
   * @function
   */
  Tabs.prototype._handleTabChange = function($target){
    var $tabLink = $target.find('[role="tab"]'),
        hash = $tabLink.attr('href'),
        $targetContent = $(hash),

        $oldTab = this.$element.find('.' + this.options.linkClass + '.is-active')
                  .removeClass('is-active').find('[role="tab"]')
                  .attr({'aria-selected': 'false'}).attr('href');

    $($oldTab).removeClass('is-active').attr({'aria-hidden': 'true'});

    $target.addClass('is-active');

    $tabLink.attr({'aria-selected': 'true'});

    $targetContent
      .addClass('is-active')
      .attr({'aria-hidden': 'false'});

    /**
     * Fires when the plugin has successfully changed tabs.
     * @event Tabs#change
     */
    this.$element.trigger('change.zf.tabs', [$target]);
    // Foundation.reflow(this.$element, 'tabs');
  };

  /**
   * Public method for selecting a content pane to display.
   * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
   * @function
   */
  Tabs.prototype.selectTab = function(elem){
    var idStr;
    if(typeof elem === 'object'){
      idStr = elem[0].id;
    }else{
      idStr = elem;
    }

    if(idStr.indexOf('#') < 0){
      idStr = '#' + idStr;
    }
    var $target = this.$tabTitles.find('[href="' + idStr + '"]').parent('.' + this.options.linkClass);

    this._handleTabChange($target);
  };
  /**
   * Sets the height of each panel to the height of the tallest panel.
   * If enabled in options, gets called on media query change.
   * If loading content via external source, can be called directly or with _reflow.
   * @function
   * @private
   */
  Tabs.prototype._setHeight = function(){
    var max = 0;
    this.$tabContent.find('.' + this.options.panelClass)
                    .css('height', '')
                    .each(function(){
                      var panel = $(this),
                          isActive = panel.hasClass('is-active');

                      if(!isActive){
                        panel.css({'visibility': 'hidden', 'display': 'block'});
                      }
                      var temp = this.getBoundingClientRect().height;

                      if(!isActive){
                        panel.css({'visibility': '', 'display': ''});
                      }

                      max = temp > max ? temp : max;
                    })
                    .css('height', max + 'px');
  };

  /**
   * Destroys an instance of an tabs.
   * @fires Tabs#destroyed
   */
  Tabs.prototype.destroy = function() {
    this.$element.find('.' + this.options.linkClass)
                 .off('.zf.tabs').hide().end()
                 .find('.' + this.options.panelClass)
                 .hide();
    if(this.options.matchHeight){
      $(window).off('changed.zf.mediaquery');
    }
    Foundation.unregisterPlugin(this);
  };

  Foundation.plugin(Tabs);

  function checkClass($elem){
    return $elem.hasClass('is-active');
  }
}(jQuery, window.Foundation);

/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 */

!function(Foundation, $) {
  'use strict';

  /**
   * Creates a new instance of Toggler.
   * @class
   * @fires Toggler#init
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function Toggler(element, options) {
    this.$element = element;
    this.options = $.extend({}, Toggler.defaults, element.data(), options);
    this.className = '';

    this._init();
    this._events();

    Foundation.registerPlugin(this);
  }

  Toggler.defaults = {
    /**
     * Tells the plugin if the element should animated when toggled.
     * @option
     * @example false
     */
    animate: false
  };

  /**
   * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
   * @function
   * @private
   */
  Toggler.prototype._init = function() {
    var input;
    // Parse animation classes if they were set
    if (this.options.animate) {
      input = this.options.animate.split(' ');

      this.animationIn = input[0];
      this.animationOut = input[1] || null;
    }
    // Otherwise, parse toggle class
    else {
      input = this.$element.data('toggler');

      // Allow for a . at the beginning of the string
      if (input[0] === '.') {
        this.className = input.slice(1);
      }
      else {
        this.className = input;
      }
    }

    // Add ARIA attributes to triggers
    var id = this.$element[0].id;
    $('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]')
      .attr('aria-controls', id);

    // If the target is hidden, add aria-hidden
    if (this.$element.is(':hidden')) {
      this.$element.attr('aria-expanded', 'false');
    }
  };

  /**
   * Initializes events for the toggle trigger.
   * @function
   * @private
   */
  Toggler.prototype._events = function() {
    var _this = this;

    this.$element.on('toggle.zf.trigger', function() {
      _this.toggle();
      return false;
    });
  };

  /**
   * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
   * @function
   * @fires Toggler#on
   * @fires Toggler#off
   */
  Toggler.prototype.toggle = function() {
    if (!this.options.animate) {
      this._toggleClass();
    }
    else {
      this._toggleAnimate();
    }
  };

  Toggler.prototype._toggleClass = function() {
    var _this = this;
    this.$element.toggleClass(this.className);

    if (this.$element.hasClass(this.className)) {
      /**
       * Fires if the target element has the class after a toggle.
       * @event Toggler#on
       */
      this.$element.trigger('on.zf.toggler');
    }
    else {
      /**
       * Fires if the target element does not have the class after a toggle.
       * @event Toggler#off
       */
      this.$element.trigger('off.zf.toggler');
    }

    _this._updateARIA();
  };

  Toggler.prototype._toggleAnimate = function() {
    var _this = this;

    if (this.$element.is(':hidden')) {
      Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
        this.trigger('on.zf.toggler');
        _this._updateARIA();
      });
    }
    else {
      Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
        this.trigger('off.zf.toggler');
        _this._updateARIA();
      });
    }
  };

  Toggler.prototype._updateARIA = function() {
    if (this.$element.is(':hidden')) {
      this.$element.attr('aria-expanded', 'false');
    }
    else {
      this.$element.attr('aria-expanded', 'true');
    }
  };

  /**
   * Destroys the instance of Toggler on the element.
   * @function
   */
  Toggler.prototype.destroy= function() {
    this.$element.off('.zf.toggler');
    Foundation.unregisterPlugin(this);
  };

  Foundation.plugin(Toggler);

  // Exports for AMD/Browserify
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Toggler;
  if (typeof define === 'function')
    define(['foundation'], function() {
      return Toggler;
    });

}(Foundation, jQuery);

/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */
!function($, document, Foundation){
  'use strict';

  /**
   * Creates a new instance of a Tooltip.
   * @class
   * @fires Tooltip#init
   * @param {jQuery} element - jQuery object to attach a tooltip to.
   * @param {Object} options - object to extend the default configuration.
   */
  function Tooltip(element, options){
    this.$element = element;
    this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options);

    this.isActive = false;
    this.isClick = false;
    this._init();

    Foundation.registerPlugin(this);
  }

  Tooltip.defaults = {
    disableForTouch: false,
    /**
     * Time, in ms, before a tooltip should open on hover.
     * @option
     * @example 200
     */
    hoverDelay: 200,
    /**
     * Time, in ms, a tooltip should take to fade into view.
     * @option
     * @example 150
     */
    fadeInDuration: 150,
    /**
     * Time, in ms, a tooltip should take to fade out of view.
     * @option
     * @example 150
     */
    fadeOutDuration: 150,
    /**
     * Disables hover events from opening the tooltip if set to true
     * @option
     * @example false
     */
    disableHover: false,
    /**
     * Optional addtional classes to apply to the tooltip template on init.
     * @option
     * @example 'my-cool-tip-class'
     */
    templateClasses: '',
    /**
     * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
     * @option
     * @example 'tooltip'
     */
    tooltipClass: 'tooltip',
    /**
     * Class applied to the tooltip anchor element.
     * @option
     * @example 'has-tip'
     */
    triggerClass: 'has-tip',
    /**
     * Minimum breakpoint size at which to open the tooltip.
     * @option
     * @example 'small'
     */
    showOn: 'small',
    /**
     * Custom template to be used to generate markup for tooltip.
     * @option
     * @example '<div class="tooltip"></div>'
     */
    template: '',
    /**
     * Text displayed in the tooltip template on open.
     * @option
     * @example 'Some cool space fact here.'
     */
    tipText: '',
    touchCloseText: 'Tap to close.',
    /**
     * Allows the tooltip to remain open if triggered with a click or touch event.
     * @option
     * @example true
     */
    clickOpen: true,
    /**
     * Additional positioning classes, set by the JS
     * @option
     * @example 'top'
     */
    positionClass: '',
    /**
     * Distance, in pixels, the template should push away from the anchor on the Y axis.
     * @option
     * @example 10
     */
    vOffset: 10,
    /**
     * Distance, in pixels, the template should push away from the anchor on the X axis, if aligned to a side.
     * @option
     * @example 12
     */
    hOffset: 12
  };

  /**
   * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
   * @private
   */
  Tooltip.prototype._init = function(){
    var elemId = this.$element.attr('aria-describedby') || Foundation.GetYoDigits(6, 'tooltip');

    this.options.positionClass = this._getPositionClass(this.$element);
    this.options.tipText = this.options.tipText || this.$element.attr('title');
    this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId);

    this.template.appendTo(document.body)
        .text(this.options.tipText)
        .hide();

    this.$element.attr({
      'title': '',
      'aria-describedby': elemId,
      'data-yeti-box': elemId,
      'data-toggle': elemId,
      'data-resize': elemId
    }).addClass(this.triggerClass);

    //helper variables to track movement on collisions
    this.usedPositions = [];
    this.counter = 4;
    this.classChanged = false;

    this._events();
  };

  /**
   * Grabs the current positioning class, if present, and returns the value or an empty string.
   * @private
   */
  Tooltip.prototype._getPositionClass = function(element){
    if(!element){ return ''; }
    // var position = element.attr('class').match(/top|left|right/g);
    var position = element[0].className.match(/(top|left|right)/g);
        position = position ? position[0] : '';
    return position;
  };
  /**
   * builds the tooltip element, adds attributes, and returns the template.
   * @private
   */
  Tooltip.prototype._buildTemplate = function(id){
    var templateClasses = (this.options.tooltipClass + ' ' + this.options.positionClass).trim();
    var $template =  $('<div></div>').addClass(templateClasses).attr({
      'role': 'tooltip',
      'aria-hidden': true,
      'data-is-active': false,
      'data-is-focus': false,
      'id': id
    });
    return $template;
  };

  /**
   * Function that gets called if a collision event is detected.
   * @param {String} position - positioning class to try
   * @private
   */
  Tooltip.prototype._reposition = function(position){
    this.usedPositions.push(position ? position : 'bottom');

    //default, try switching to opposite side
    if(!position && (this.usedPositions.indexOf('top') < 0)){
      this.template.addClass('top');
    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') < 0)){
      this.template.removeClass(position);
    }else if(position === 'left' && (this.usedPositions.indexOf('right') < 0)){
      this.template.removeClass(position)
          .addClass('right');
    }else if(position === 'right' && (this.usedPositions.indexOf('left') < 0)){
      this.template.removeClass(position)
          .addClass('left');
    }

    //if default change didn't work, try bottom or left first
    else if(!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)){
      this.template.addClass('left');
    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)){
      this.template.removeClass(position)
          .addClass('left');
    }else if(position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
      this.template.removeClass(position);
    }else if(position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
      this.template.removeClass(position);
    }
    //if nothing cleared, set to bottom
    else{
      this.template.removeClass(position);
    }
    this.classChanged = true;
    this.counter--;

  };

  /**
   * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
   * if the tooltip is larger than the screen width, default to full width - any user selected margin
   * @private
   */
  Tooltip.prototype._setPosition = function(){
    var position = this._getPositionClass(this.template),
        $tipDims = Foundation.Box.GetDimensions(this.template),
        $anchorDims = Foundation.Box.GetDimensions(this.$element),
        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
        param = (direction === 'top') ? 'height' : 'width',
        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset,
        _this = this;

    if(($tipDims.width >= $tipDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.template))){
      this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
      // this.$element.offset(Foundation.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
        'width': $anchorDims.windowDims.width - (this.options.hOffset * 2),
        'height': 'auto'
      });
      return false;
    }

    this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element,'center ' + (position || 'bottom'), this.options.vOffset, this.options.hOffset));

    while(!Foundation.Box.ImNotTouchingYou(this.template) && this.counter){
      this._reposition(position);
      this._setPosition();
    }
  };

  /**
   * reveals the tooltip, and fires an event to close any other open tooltips on the page
   * @fires Closeme#tooltip
   * @fires Tooltip#show
   * @function
   */
  Tooltip.prototype.show = function(){
    if(this.options.showOn !== 'all' && !Foundation.MediaQuery.atLeast(this.options.showOn)){
      // console.error('The screen is too small to display this tooltip');
      return false;
    }

    var _this = this;
    this.template.css('visibility', 'hidden').show();
    this._setPosition();

    /**
     * Fires to close all other open tooltips on the page
     * @event Closeme#tooltip
     */
    this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));


    this.template.attr({
      'data-is-active': true,
      'aria-hidden': false
    });
    _this.isActive = true;
    // console.log(this.template);
    this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function(){
      //maybe do stuff?
    });
    /**
     * Fires when the tooltip is shown
     * @event Tooltip#show
     */
    this.$element.trigger('show.zf.tooltip');
  };

  /**
   * Hides the current tooltip, and resets the positioning class if it was changed due to collision
   * @fires Tooltip#hide
   * @function
   */
  Tooltip.prototype.hide = function(){
    // console.log('hiding', this.$element.data('yeti-box'));
    var _this = this;
    this.template.stop().attr({
      'aria-hidden': true,
      'data-is-active': false
    }).fadeOut(this.options.fadeOutDuration, function(){
      _this.isActive = false;
      _this.isClick = false;
      if(_this.classChanged){
        _this.template
             .removeClass(_this._getPositionClass(_this.template))
             .addClass(_this.options.positionClass);

       _this.usedPositions = [];
       _this.counter = 4;
       _this.classChanged = false;
      }
    });
    /**
     * fires when the tooltip is hidden
     * @event Tooltip#hide
     */
    this.$element.trigger('hide.zf.tooltip');
  };

  /**
   * adds event listeners for the tooltip and its anchor
   * TODO combine some of the listeners like focus and mouseenter, etc.
   * @private
   */
  Tooltip.prototype._events = function(){
    var _this = this;
    var $template = this.template;
    var isFocus = false;

    if(!this.options.disableHover){

      this.$element
      .on('mouseenter.zf.tooltip', function(e){
        if(!_this.isActive){
          _this.timeout = setTimeout(function(){
            _this.show();
          }, _this.options.hoverDelay);
        }
      })
      .on('mouseleave.zf.tooltip', function(e){
        clearTimeout(_this.timeout);
        if(!isFocus || (!_this.isClick && _this.options.clickOpen)){
          _this.hide();
        }
      });
    }
    if(this.options.clickOpen){
      this.$element.on('mousedown.zf.tooltip', function(e){
        e.stopImmediatePropagation();
        if(_this.isClick){
          _this.hide();
          // _this.isClick = false;
        }else{
          _this.isClick = true;
          if((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive){
            _this.show();
          }
        }
      });
    }

    if(!this.options.disableForTouch){
      this.$element
      .on('tap.zf.tooltip touchend.zf.tooltip', function(e){
        _this.isActive ? _this.hide() : _this.show();
      });
    }

    this.$element.on({
      // 'toggle.zf.trigger': this.toggle.bind(this),
      // 'close.zf.trigger': this.hide.bind(this)
      'close.zf.trigger': this.hide.bind(this)
    });

    this.$element
      .on('focus.zf.tooltip', function(e){
        isFocus = true;
        console.log(_this.isClick);
        if(_this.isClick){
          return false;
        }else{
          // $(window)
          _this.show();
        }
      })

      .on('focusout.zf.tooltip', function(e){
        isFocus = false;
        _this.isClick = false;
        _this.hide();
      })

      .on('resizeme.zf.trigger', function(){
        if(_this.isActive){
          _this._setPosition();
        }
      });
  };
  /**
   * adds a toggle method, in addition to the static show() & hide() functions
   * @function
   */
  Tooltip.prototype.toggle = function(){
    if(this.isActive){
      this.hide();
    }else{
      this.show();
    }
  };
  /**
   * Destroys an instance of tooltip, removes template element from the view.
   * @function
   */
  Tooltip.prototype.destroy = function(){
    this.$element.attr('title', this.template.text())
                 .off('.zf.trigger .zf.tootip')
                //  .removeClass('has-tip')
                 .removeAttr('aria-describedby')
                 .removeAttr('data-yeti-box')
                 .removeAttr('data-toggle')
                 .removeAttr('data-resize');

    this.template.remove();

    Foundation.unregisterPlugin(this);
  };
  /**
   * TODO utilize resize event trigger
   */

  Foundation.plugin(Tooltip);
}(jQuery, window.document, window.Foundation);

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.MotionUI = factory(root.jQuery);
  }
}(this, function($) {
'use strict';

// Polyfill for requestAnimationFrame
(function() {
  if (!Date.now)
    Date.now = function() { return new Date().getTime(); };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
      window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                 || window[vp+'CancelRequestAnimationFrame']);
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function(callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function() { callback(lastTime = nextTime); },
                          nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
})();

var initClasses   = ['mui-enter', 'mui-leave'];
var activeClasses = ['mui-enter-active', 'mui-leave-active'];

// Find the right "transitionend" event for this browser
var endEvent = (function() {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  }
  var elem = window.document.createElement('div');

  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      return transitions[t];
    }
  }

  return null;
})();

function animate(isIn, element, animation, cb) {
  element = $(element).eq(0);

  if (!element.length) return;

  if (endEvent === null) {
    isIn ? element.show() : element.hide();
    cb();
    return;
  }

  var initClass = isIn ? initClasses[0] : initClasses[1];
  var activeClass = isIn ? activeClasses[0] : activeClasses[1];

  // Set up the animation
  reset();
  element.addClass(animation);
  element.css('transition', 'none');
  requestAnimationFrame(function() {
    element.addClass(initClass);
    if (isIn) element.show();
  });

  // Start the animation
  requestAnimationFrame(function() {
    element[0].offsetWidth;
    element.css('transition', '');
    element.addClass(activeClass);
  });

  // Clean up the animation when it finishes
  element.one('transitionend', finish);

  // Hides the element (for out animations), resets the element, and runs a callback
  function finish() {
    if (!isIn) element.hide();
    reset();
    if (cb) cb.apply(element);
  }

  // Resets transitions and removes motion-specific classes
  function reset() {
    element[0].style.transitionDuration = 0;
    element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
  }
}

var MotionUI = {
  animateIn: function(element, animation, cb) {
    animate(true, element, animation, cb);
  },

  animateOut: function(element, animation, cb) {
    animate(false, element, animation, cb);
  }
}

return MotionUI;
}));
