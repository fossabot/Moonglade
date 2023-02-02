"use strict";

var _fetchData = require("./shared/fetch-data");

var _formatData = require("./shared/format-data");

var _render2 = require("./shared/render");

var _renderError = require("./shared/render-error");

var _renderLoading = require("./shared/render-loading");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// eslint-disable-next-line
var COMPONENT_TAG = 'codersrank-education';
var STATE_IDLE = 0;
var STATE_LOADING = 1;
var STATE_ERROR = 2;
var STATE_SUCCESS = 3; // eslint-disable-next-line

var STYLES = ":host{--preloader-color:#72a0a8;--item-spacing:1em;--item-border-radius:0px;--item-border:none;--item-padding:0px;--item-bg-color:transparent;--grid-columns:1;--title-font-size:1.15em;--title-font-weight:bold;--title-text-color:inherit;--title-opacity:1;--details-text-color:inherit;--details-opacity:1;--details-font-size:inherit;--details-font-weight:inherit;--date-text-color:inherit;--date-opacity:0.55;--date-font-size:inherit;--date-font-weight:inherit;--description-font-size:inherit;--description-font-weight:inherit;--description-text-color:inherit;--description-opacity:1;--section-title-text-color:inherit;--section-title-opacity:1;--section-title-font-size:1.5em;--section-title-font-weight:bold;--certificate-link-font-size:0.85em;--certificate-link-font-weight:inherit;--certificate-link-opacity:1;--certificate-link-text-color:#72a0a8;--certificate-link-text-decoration:none;--certificate-link-text-transform:uppercase;--certificate-link-hover-text-decoration:underline;--branding-text-color:inherit;width:100%;display:block;position:relative}.codersrank-education{position:relative}.codersrank-education-loading{height:100px}.codersrank-education-preloader{position:absolute;left:50%;top:50%;width:32px;height:32px;margin:-16px 0 0 -16px;border:3px solid var(--preloader-color);border-left-color:transparent;border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;-webkit-animation:preloader 1s infinite linear;animation:preloader 1s infinite linear}.codersrank-education ul,.codersrank-education-item{list-style:none;margin:0;padding:0}.codersrank-education ul+ul{margin-top:var(--item-spacing)}.codersrank-education li+li{margin-top:var(--item-spacing)}.codersrank-education-grid{display:grid;grid-template-columns:repeat(var(--grid-columns),1fr);-moz-column-gap:var(--item-spacing);column-gap:var(--item-spacing);row-gap:var(--item-spacing)}.codersrank-education-grid li+li{margin:0}.codersrank-education-item{border-radius:var(--item-border-radius);border:var(--item-border);padding:var(--item-padding);background-color:var(--item-bg-color)}.codersrank-education-content{min-width:0;width:100%;flex-shrink:10}.codersrank-education-title{font-size:var(--title-font-size);font-weight:var(--title-font-weight);color:var(--title-text-color);opacity:var(--title-opacity)}.codersrank-education-date{font-size:var(--date-font-size);font-weight:var(--date-font-weight);color:var(--date-text-color);opacity:var(--date-opacity)}.codersrank-education-details{font-size:var(--details-font-size);font-weight:var(--details-font-weight);color:var(--details-text-color);opacity:var(--details-opacity)}.codersrank-education-description{font-size:var(--description-font-size);font-weight:var(--description-font-weight);color:var(--description-text-color);opacity:var(--description-opacity)}.codersrank-education-certificate-link a{font-size:var(--certificate-link-font-size);font-weight:var(--certificate-link-font-weight);color:var(--certificate-link-text-color);opacity:var(--certificate-link-opacity);-webkit-text-decoration:var(--certificate-link-text-decoration);text-decoration:var(--certificate-link-text-decoration);text-transform:var(--certificate-link-text-transform)}.codersrank-education-certificate-link a:hover{-webkit-text-decoration:var(--certificate-link-hover-text-decoration);text-decoration:var(--certificate-link-hover-text-decoration);color:var(--certificate-link-hover-text-color,var(--certificate-link-text-color))}.codersrank-education-certificate-link a:active{-webkit-text-decoration:var(--certificate-link-active-text-decoration,var(--certificate-link-hover-text-decoration));text-decoration:var(--certificate-link-active-text-decoration,var(--certificate-link-hover-text-decoration));color:var(--certificate-link-active-text-color,var(--certificate-link-hover-text-color,var(--certificate-link-text-color)))}.codersrank-education-section-title{font-size:var(--section-title-font-size);font-weight:var(--section-title-font-weight);color:var(--section-title-text-color);opacity:var(--section-title-opacity);margin:.85em 0}.codersrank-education-section-title:first-child{margin-top:0}.codersrank-education-branding{justify-content:flex-end;align-items:center;font-size:12px;color:var(--branding-text-color);display:flex;margin-top:.5em}.codersrank-education-branding a{opacity:.5;display:flex;align-items:center;color:inherit;text-decoration:none;transition-duration:.2s;position:relative;z-index:1;transform:translate3d(0,0,0)}.codersrank-education-branding a:hover{opacity:1}.codersrank-education-branding span{margin-right:4px}.codersrank-education-branding svg{height:16px;width:auto}@-webkit-keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"; // eslint-disable-next-line

var CodersrankEducation = /*#__PURE__*/function (_HTMLElement) {
  _inheritsLoose(CodersrankEducation, _HTMLElement);

  function CodersrankEducation() {
    var _this;

    _this = _HTMLElement.call(this) || this;
    _this.shadowEl = _this.attachShadow({
      mode: 'closed'
    });
    _this.tempDiv = document.createElement('div');
    _this.stylesEl = document.createElement('style');
    _this.stylesEl.textContent = STYLES;

    _this.shadowEl.appendChild(_this.stylesEl);

    _this.mounted = false;
    _this.state = STATE_IDLE;
    _this.data = null;
    return _this;
  }

  var _proto = CodersrankEducation.prototype;

  _proto.render = function render() {
    var username = this.username,
        mounted = this.mounted,
        state = this.state,
        shadowEl = this.shadowEl,
        data = this.data,
        grid = this.grid,
        education = this.education,
        certificates = this.certificates,
        certificateLink = this.certificateLink,
        certificateLinkText = this.certificateLinkText,
        educationSectionTitle = this.educationSectionTitle,
        certificatesSectionTitle = this.certificatesSectionTitle,
        branding = this.branding;
    var ctx = {
      data: data,
      grid: grid,
      education: education,
      certificates: certificates,
      certificateLink: certificateLink,
      certificateLinkText: certificateLinkText,
      educationSectionTitle: educationSectionTitle,
      certificatesSectionTitle: certificatesSectionTitle,
      branding: branding
    };
    if (!username || !mounted) return;

    if (state === STATE_SUCCESS) {
      this.tempDiv.innerHTML = (0, _render2.render)(ctx);
    } else if (state === STATE_ERROR) {
      this.tempDiv.innerHTML = (0, _renderError.renderError)(ctx);
    } else if (state === STATE_IDLE || state === STATE_LOADING) {
      this.tempDiv.innerHTML = (0, _renderLoading.renderLoading)(ctx);
    }

    var widgetEl = shadowEl.querySelector('.codersrank-education');

    if (widgetEl) {
      widgetEl.parentNode.removeChild(widgetEl);
    }

    widgetEl = this.tempDiv.querySelector('.codersrank-education');
    if (!widgetEl) return;
    this.widgetEl = widgetEl;
    shadowEl.appendChild(widgetEl);
  };

  _proto.loadAndRender = function loadAndRender() {
    var _this2 = this;

    var username = this.username;
    this.state = STATE_LOADING;
    this.render();
    (0, _fetchData.fetchData)(username).then(function (data) {
      _this2.data = (0, _formatData.formatData)(data, _this2.maxItems);
      _this2.state = STATE_SUCCESS;

      _this2.render();
    })["catch"](function () {
      _this2.state = STATE_ERROR;

      _this2.render();
    });
  };

  _proto.attributeChangedCallback = function attributeChangedCallback() {
    if (!this.mounted) return;
    this.loadAndRender();
  };

  _proto.connectedCallback = function connectedCallback() {
    this.mounted = true;
    this.loadAndRender();
  };

  _proto.disconnectedCallback = function disconnectedCallback() {
    this.mounted = false;
  };

  _createClass(CodersrankEducation, [{
    key: "username",
    get: function get() {
      return this.getAttribute('username');
    },
    set: function set(value) {
      this.setAttribute('username', value);
    }
  }, {
    key: "grid",
    get: function get() {
      var grid = this.getAttribute('grid');
      if (grid === 'true' || grid === '') return true;
      return false;
    },
    set: function set(value) {
      this.setAttribute('grid', value);
    }
  }, {
    key: "maxItems",
    get: function get() {
      var maxItems = parseInt(this.getAttribute('max-items') || 0, 10) || 0;
      return maxItems;
    },
    set: function set(value) {
      this.setAttribute('max-items', value);
    }
  }, {
    key: 'max-items',
    set: function set(value) {
      this.setAttribute('max-items', value);
    }
  }, {
    key: "education",
    get: function get() {
      return this.getAttribute('education') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('education', value);
    }
  }, {
    key: "certificates",
    get: function get() {
      return this.getAttribute('certificates') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('certificates', value);
    }
  }, {
    key: "certificateLinkText",
    get: function get() {
      return this.getAttribute('certificate-link-text') || 'See certification';
    },
    set: function set(value) {
      this.setAttribute('certificate-link-text', value);
    }
  }, {
    key: 'certificate-link-text',
    set: function set(value) {
      this.setAttribute('certificate-link-text', value);
    }
  }, {
    key: "certificateLink",
    get: function get() {
      return this.getAttribute('certificate-link') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('certificate-link', value);
    }
  }, {
    key: 'certificate-link',
    set: function set(value) {
      this.setAttribute('certificate-link', value);
    }
  }, {
    key: "educationSectionTitle",
    get: function get() {
      return this.getAttribute('education-section-title') || '';
    },
    set: function set(value) {
      this.setAttribute('education-section-title', value);
    }
  }, {
    key: 'education-section-title',
    set: function set(value) {
      this.setAttribute('education-section-title', value);
    }
  }, {
    key: "certificatesSectionTitle",
    get: function get() {
      return this.getAttribute('certificates-section-title') || '';
    },
    set: function set(value) {
      this.setAttribute('certificates-section-title', value);
    }
  }, {
    key: 'certificates-section-title',
    set: function set(value) {
      this.setAttribute('certificates-section-title', value);
    }
  }, {
    key: "branding",
    get: function get() {
      return this.getAttribute('branding') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('branding', value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['username', 'grid', 'max-items'];
    }
  }]);

  return CodersrankEducation;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); 
module.exports = CodersrankEducation;
