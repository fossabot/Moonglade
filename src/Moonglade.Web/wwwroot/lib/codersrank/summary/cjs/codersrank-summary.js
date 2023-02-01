"use strict";

var _fetchData = require("./shared/fetch-data");

var _render2 = require("./shared/render");

var _renderError = require("./shared/render-error");

var _renderLoading = require("./shared/render-loading");

var _formatBadges = require("./shared/format-badges");

var _dummyProfile = require("./shared/dummy-profile");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// eslint-disable-next-line
var STATE_IDLE = 0;
var STATE_LOADING = 1;
var STATE_ERROR = 2;
var STATE_SUCCESS = 3;
var BADGE_WIDE_WIDTH = 380; // eslint-disable-next-line

var STYLES = ":host{--bg-color:#edf1f3;--border:none;--border-radius:4px;--header-padding:8px;--header-bg-color:#72a0a8;--header-text-color:#fff;--avatar-size:80px;--name-font-size:inherit;--name-font-weight:bold;--rank-font-size:inherit;--preloader-color:#72a0a8;--badges-padding:8px;--badge-border-radius:4px;--badge-bg-color:#fff;--badge-box-shadow:0px 1px 2px rgba(23, 36, 50, 0.3);--badge-border:none;--badge-margin:8px;--badge-padding:4px;--badge-text-color:#000;--badge-rank-font-size:0.85em;--badge-rank-font-weight:bold;--badge-icon-size:24px;--badge-technology-font-weight:600;--badge-technology-font-size:inherit;--badge-label-font-weight:600;--badge-label-font-size:12px;--badge-location-font-size:0.85em;--badge-location-font-weight:normal;--branding-text-color:inherit;width:100%;display:block}.codersrank-summary{position:relative;line-height:1.5;background-color:var(--bg-color);border-radius:var(--border-radius);border:var(--border);position:relative;display:block;letter-spacing:0;text-decoration:none;text-transform:none;font-variant:none;font-style:normal;font-weight:400;text-shadow:none}.codersrank-summary-head{background-color:var(--header-bg-color);color:var(--header-text-color);display:flex;align-items:center;justify-content:space-between;padding:var(--header-padding);border-radius:var(--border-radius) var(--border-radius) 0 0;text-align:left}.codersrank-summary-head-content{width:100%;flex-shrink:10;min-width:0}.codersrank-summary-head-name{font-size:var(--name-font-size);font-weight:var(--name-font-weight)}.codersrank-summary-head-rank{font-size:var(--rank-font-size)}.codersrank-summary-head-only{border-radius:var(--border-radius)}.codersrank-summary-avatar{width:var(--avatar-size);height:var(--avatar-size);border-radius:50%;background-size:cover;background-position:center;flex-shrink:0;margin-right:10px}.codersrank-summary-badges{padding:var(--badges-padding)}.codersrank-summary-badge{padding:var(--badge-padding);width:100%;flex-shrink:10;min-width:0;border-radius:var(--badge-border-radius);box-shadow:var(--badge-box-shadow);border:var(--badge-border);text-align:center;color:var(--badge-text-color);background-color:var(--badge-bg-color);display:flex;flex-direction:column;box-sizing:border-box;justify-content:space-between}.codersrank-summary-horizontal .codersrank-summary-badges{display:flex}.codersrank-summary-horizontal .codersrank-summary-badge+.codersrank-summary-badge{margin-left:var(--badge-margin)}.codersrank-summary-vertical .codersrank-summary-avatar{margin-right:0}.codersrank-summary-vertical .codersrank-summary-head{justify-content:center;flex-wrap:wrap;text-align:center}.codersrank-summary-vertical .codersrank-summary-badge+.codersrank-summary-badge{margin-top:var(--badge-margin)}.codersrank-summary-badge-rank{font-size:var(--badge-rank-font-size);font-weight:var(--badge-rank-font-weight)}.codersrank-summary-badge-location{line-height:1.2;font-size:var(--badge-location-font-size);font-weight:var(--badge-location-font-weight);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.codersrank-summary-badge-technology{margin:8px 0;display:flex;align-items:center;justify-content:center;font-size:var(--badge-technology-font-size);font-weight:var(--badge-technology-font-weight)}.codersrank-summary-badge-technology-logo{width:var(--badge-icon-size);height:var(--badge-icon-size);margin-right:6px;display:flex;justify-content:center;align-items:center}.codersrank-summary-badge-technology img{max-width:var(--badge-icon-size);max-height:var(--badge-icon-size)}.codersrank-summary-badge-icon{font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;border-radius:4px}.codersrank-summary-badge-name{flex-shrink:10;min-width:0;overflow:hidden;text-overflow:ellipsis}.codersrank-summary-badges-vertical .codersrank-summary-badge-technology{flex-direction:column;justify-content:center;align-items:center}.codersrank-summary-badges-vertical .codersrank-summary-badge-technology-logo{margin-right:0;margin-bottom:2px}.codersrank-summary-badge-seniority .codersrank-summary-badge-image,.codersrank-summary-badge-streak .codersrank-summary-badge-image{height:32px;display:flex;align-items:center;justify-content:center}.codersrank-summary-badge-seniority .codersrank-summary-badge-image img,.codersrank-summary-badge-streak .codersrank-summary-badge-image img{width:auto;height:100%}.codersrank-summary-badge-streak .codersrank-summary-badge-image{height:40px}.codersrank-summary-badge-seniority .codersrank-summary-badge-label,.codersrank-summary-badge-streak .codersrank-summary-badge-label{margin:8px 0;font-size:var(--badge-label-font-size);font-weight:var(--badge-label-font-weight);line-height:1.25}.codersrank-summary-badge-seniority .codersrank-summary-badge-technology{margin:0}.codersrank-summary-badge-streak .codersrank-summary-badge-days{text-transform:uppercase;font-size:var(--badge-label-font-size);opacity:.75;margin-top:4px;margin-bottom:auto}.codersrank-summary-placeholder{pointer-events:none}.codersrank-summary-placeholder .codersrank-summary-badges,.codersrank-summary-placeholder .codersrank-summary-head{visibility:hidden;opacity:0}.codersrank-summary-preloader{position:absolute;left:50%;top:50%;width:32px;height:32px;margin:-16px 0 0 -16px;border:3px solid var(--preloader-color);border-left-color:transparent;border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;-webkit-animation:preloader 1s infinite linear;animation:preloader 1s infinite linear}.codersrank-summary-branding{justify-content:flex-end;align-items:center;font-size:12px;color:var(--branding-text-color);display:flex;margin-top:.5em}.codersrank-summary-branding a{opacity:.5;display:flex;align-items:center;color:inherit;text-decoration:none;transition-duration:.2s;position:relative;z-index:1;transform:translate3d(0,0,0)}.codersrank-summary-branding a:hover{opacity:1}.codersrank-summary-branding span{margin-right:4px}.codersrank-summary-branding svg{height:16px;width:auto}@-webkit-keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"; // eslint-disable-next-line

var CodersrankSummary = /*#__PURE__*/function (_HTMLElement) {
  _inheritsLoose(CodersrankSummary, _HTMLElement);

  function CodersrankSummary() {
    var _this;

    _this = _HTMLElement.call(this) || this;
    _this.shadowEl = _this.attachShadow({
      mode: 'closed'
    });
    _this.tempDiv = document.createElement('div');
    _this.stylesEl = document.createElement('style');
    _this.stylesEl.textContent = STYLES;

    _this.shadowEl.appendChild(_this.stylesEl);

    _this.onResize = _this.onResize.bind(_assertThisInitialized(_this));
    _this.mounted = false;
    _this.state = STATE_IDLE;
    _this.data = null;
    _this.width = 0;
    return _this;
  }

  var _proto = CodersrankSummary.prototype;

  _proto.render = function render() {
    var username = this.username,
        mounted = this.mounted,
        state = this.state,
        shadowEl = this.shadowEl,
        data = this.data,
        layout = this.layout,
        badgesData = this.badgesData,
        badgesLayout = this.badgesLayout,
        showAvatar = this.showAvatar,
        showHeader = this.showHeader,
        branding = this.branding;
    var ctx = {
      username: username,
      data: data || _dummyProfile.dummyProfile,
      layout: layout,
      badgesData: badgesData,
      badgesLayout: badgesLayout,
      showAvatar: showAvatar,
      showHeader: showHeader,
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

    var widgetEl = shadowEl.querySelector('.codersrank-summary');
    var brandingEl = shadowEl.querySelector('.codersrank-summary-branding');

    if (widgetEl) {
      widgetEl.parentNode.removeChild(widgetEl);
    }

    if (brandingEl) {
      brandingEl.parentNode.removeChild(brandingEl);
    }

    widgetEl = this.tempDiv.querySelector('.codersrank-summary');
    brandingEl = this.tempDiv.querySelector('.codersrank-summary-branding');
    if (!widgetEl) return;
    this.widgetEl = widgetEl;
    shadowEl.appendChild(widgetEl);

    if (brandingEl) {
      shadowEl.appendChild(brandingEl);
    }
  };

  _proto.loadAndRender = function loadAndRender() {
    var _this2 = this;

    var username = this.username,
        id = this.id;
    this.state = STATE_LOADING;
    this.render();
    (0, _fetchData.fetchData)(username, id).then(function (data) {
      _this2.data = data;
      _this2.state = STATE_SUCCESS;

      _this2.render();
    })["catch"](function () {
      _this2.state = STATE_ERROR;

      _this2.render();
    });
  };

  _proto.onResize = function onResize() {
    if (!this.widgetEl) return;
    this.width = this.offsetWidth;
    var layout = this.layout,
        badgesLayout = this.badgesLayout;

    if (layout === 'horizontal') {
      this.widgetEl.classList.remove('codersrank-summary-vertical');
    } else {
      this.widgetEl.classList.remove('codersrank-summary-horizontal');
    }

    if (badgesLayout === 'horizontal') {
      this.widgetEl.classList.remove('codersrank-summary-badges-vertical');
    } else {
      this.widgetEl.classList.remove('codersrank-summary-badges-horizontal');
    }

    this.widgetEl.classList.add("codersrank-summary-" + layout);
    this.widgetEl.classList.add("codersrank-summary-badges-" + badgesLayout);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback() {
    if (!this.mounted) return;
    this.loadAndRender();
  };

  _proto.connectedCallback = function connectedCallback() {
    window.addEventListener('resize', this.onResize);
    this.width = this.offsetWidth;
    this.mounted = true;
    this.loadAndRender();
  };

  _proto.disconnectedCallback = function disconnectedCallback() {
    window.removeEventListener('resize', this.onResize);
    this.mounted = false;
  };

  _createClass(CodersrankSummary, [{
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(value) {
      this.setAttribute('id', value);
    }
  }, {
    key: "username",
    get: function get() {
      return this.getAttribute('username');
    },
    set: function set(value) {
      this.setAttribute('username', value);
    }
  }, {
    key: "layout",
    get: function get() {
      var layout = this.getAttribute('layout');
      if (layout === 'vertical') return 'vertical';
      if (layout === 'horizontal') return 'horizontal';
      if (this.width < this.minWidth) return 'vertical';
      return 'horizontal';
    },
    set: function set(value) {
      this.setAttribute('layout', value);
    }
  }, {
    key: "badges",
    get: function get() {
      var badges = this.getAttribute('badges');
      if (badges !== null && badges !== '') return parseInt(badges, 10);
      return 3;
    },
    set: function set(value) {
      this.setAttribute('badges', value);
    }
  }, {
    key: "badgesData",
    get: function get() {
      var data = this.data,
          badges = this.badges,
          state = this.state;
      return (0, _formatBadges.formatBadges)({
        data: data,
        badges: badges,
        loading: state === STATE_LOADING
      });
    }
  }, {
    key: "badgesLayout",
    get: function get() {
      var width = this.width,
          badgesData = this.badgesData,
          layout = this.layout,
          badgeMinWidth = this.badgeMinWidth;
      var badgeWidth = (width - 16 - (badgesData.length - 1) * 8) / badgesData.length;
      var badgesLayout = 'horizontal';

      if (layout === 'horizontal' && badgeWidth < badgeMinWidth) {
        badgesLayout = 'vertical';
      } else if (layout === 'horizontal' && badgeWidth >= BADGE_WIDE_WIDTH) {
        badgesLayout = 'horizontal-wide';
      }

      return badgesLayout;
    }
  }, {
    key: "showAvatar",
    get: function get() {
      var showAvatar = this.getAttribute('show-avatar');
      return showAvatar !== 'false';
    },
    set: function set(value) {
      this.setAttribute('show-avatar', value);
    }
  }, {
    key: 'show-avatar',
    set: function set(value) {
      this.setAttribute('show-avatar', value);
    }
  }, {
    key: "showHeader",
    get: function get() {
      var showHeader = this.getAttribute('show-header');
      return showHeader !== 'false';
    },
    set: function set(value) {
      this.setAttribute('show-header', value);
    }
  }, {
    key: 'show-head',
    set: function set(value) {
      this.setAttribute('show-header', value);
    }
  }, {
    key: "minWidth",
    get: function get() {
      var minWidth = parseInt(this.getAttribute('min-width'), 10);
      if (!minWidth || Number.isNaN(minWidth)) minWidth = 300;
      return minWidth;
    },
    set: function set(value) {
      this.setAttribute('min-width', value);
    }
  }, {
    key: 'min-width',
    set: function set(value) {
      this.setAttribute('min-width', value);
    }
  }, {
    key: "badgeMinWidth",
    get: function get() {
      var minWidth = parseInt(this.getAttribute('badge-min-width'), 10);
      if (!minWidth || Number.isNaN(minWidth)) minWidth = 100;
      return minWidth;
    },
    set: function set(value) {
      this.setAttribute('badge-min-width', value);
    }
  }, {
    key: 'badge-min-width',
    set: function set(value) {
      this.setAttribute('badge-min-width', value);
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
      return ['username', 'logos', 'grid', 'max-items'];
    }
  }]);

  return CodersrankSummary;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // eslint-disable-next-line


var CodersrankWidget = /*#__PURE__*/function (_CodersrankSummary) {
  _inheritsLoose(CodersrankWidget, _CodersrankSummary);

  function CodersrankWidget() {
    return _CodersrankSummary.apply(this, arguments) || this;
  }

  return CodersrankWidget;
}(CodersrankSummary); 
module.exports = CodersrankSummary;
