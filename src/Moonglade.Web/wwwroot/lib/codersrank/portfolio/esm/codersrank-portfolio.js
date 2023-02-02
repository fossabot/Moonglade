function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import { fetchData } from './shared/fetch-data';
import { formatData } from './shared/format-data';
import { render as _render } from './shared/render';
import { renderError } from './shared/render-error';
import { renderLoading } from './shared/render-loading'; // eslint-disable-next-line

var COMPONENT_TAG = 'codersrank-portfolio';
var STATE_IDLE = 0;
var STATE_LOADING = 1;
var STATE_ERROR = 2;
var STATE_SUCCESS = 3; // eslint-disable-next-line

var STYLES = ":host{--preloader-color:#72a0a8;--item-spacing:2em;--item-border-radius:0px;--item-border:none;--item-padding:0px;--item-bg-color:transparent;--grid-columns:1;--logo-size:48px;--logo-margin:16px;--title-font-size:1.15em;--title-font-weight:bold;--title-text-color:inherit;--title-opacity:1;--location-text-color:inherit;--location-opacity:0.55;--location-font-size:inherit;--location-font-weight:inherit;--date-text-color:inherit;--date-opacity:0.55;--date-font-size:inherit;--date-font-weight:inherit;--company-text-color:inherit;--company-opacity:0.55;--company-font-size:inherit;--company-font-weight:inherit;--description-font-size:inherit;--description-font-weight:inherit;--description-text-color:inherit;--description-opacity:1;--tag-border:none;--tag-star-color:#ff9900;--tag-bg-color:rgba(0, 0, 100, 0.075);--tag-font-size:0.85em;--tag-font-weight:bold;--tag-padding:0.35em 0.57em;--tag-margin:0.28em;--tag-border-radius:4px;--tag-text-color:inherit;--link-margin:0.28em;--link-font-size:0.85em;--link-font-weight:600;--link-text-color:#72a0a8;--link-opacity:1;--link-text-decoration:none;--link-text-transform:uppercase;--link-border:none;--link-border-radius:4px;--link-bg-color:transparent;--link-padding:2px 4px;--link-hover-bg-color:rgba(114, 160, 168, 0.15);--branding-text-color:inherit;width:100%;display:block;position:relative}.codersrank-portfolio{position:relative}.codersrank-portfolio-loading{height:100px}.codersrank-portfolio-preloader{position:absolute;left:50%;top:50%;width:32px;height:32px;margin:-16px 0 0 -16px;border:3px solid var(--preloader-color);border-left-color:transparent;border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;-webkit-animation:preloader 1s infinite linear;animation:preloader 1s infinite linear}.codersrank-portfolio ul,.codersrank-portfolio-item{list-style:none;margin:0;padding:0}.codersrank-portfolio li+li{margin-top:var(--item-spacing)}.codersrank-portfolio-grid ul{display:grid;grid-template-columns:repeat(var(--grid-columns),1fr);-moz-column-gap:var(--item-spacing);column-gap:var(--item-spacing);row-gap:var(--item-spacing)}.codersrank-portfolio-grid li+li{margin:0}.codersrank-portfolio-item{display:flex;align-items:flex-start;justify-content:space-between;border-radius:var(--item-border-radius);border:var(--item-border);padding:var(--item-padding);background-color:var(--item-bg-color)}.codersrank-portfolio-content{min-width:0;width:100%;flex-shrink:10}.codersrank-portfolio-logo{width:var(--logo-size);height:var(--logo-size);margin-right:var(--logo-margin);display:flex;justify-content:center;align-items:center}.codersrank-portfolio-logo img,.codersrank-portfolio-logo svg{width:auto;height:auto;max-width:100%;max-height:100%}.codersrank-portfolio-logo svg{width:100%}.codersrank-portfolio-title{font-size:var(--title-font-size);font-weight:var(--title-font-weight);color:var(--title-text-color);opacity:var(--title-opacity)}.codersrank-portfolio-date{font-size:var(--date-font-size);font-weight:var(--date-font-weight);color:var(--date-text-color);opacity:var(--date-opacity)}.codersrank-portfolio-company{font-size:var(--company-font-size);font-weight:var(--company-font-weight);color:var(--company-text-color);opacity:var(--company-opacity)}.codersrank-portfolio-location{font-size:var(--location-font-size);font-weight:var(--location-font-weight);color:var(--location-text-color);opacity:var(--location-opacity)}.codersrank-portfolio-description{font-size:var(--description-font-size);font-weight:var(--description-font-weight);color:var(--description-text-color);opacity:var(--description-opacity)}.codersrank-portfolio-tags{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;margin-top:.5em}.codersrank-portfolio-tag{display:inline-flex;padding:var(--tag-padding);font-size:var(--tag-font-size);background:var(--tag-bg-color);border-radius:var(--tag-border-radius);font-weight:var(--tag-font-weight);line-height:1;margin-right:var(--tag-margin);margin-bottom:var(--tag-margin);border:var(--tag-border);color:var(--tag-text-color)}.codersrank-portfolio-tag-star{color:var(--tag-star-color);margin-right:4px}.codersrank-portfolio-links{margin-top:.25em;display:flex}.codersrank-portfolio-links a{font-size:var(--link-font-size);font-weight:var(--link-font-weight);color:var(--link-text-color);opacity:var(--link-opacity);-webkit-text-decoration:var(--link-text-decoration);text-decoration:var(--link-text-decoration);text-transform:var(--link-text-transform);border:var(--link-border);border-radius:var(--link-border-radius);background-color:var(--link-bg-color);padding:var(--link-padding)}.codersrank-portfolio-links a+a{margin-left:var(--link-margin)}.codersrank-portfolio-links a:hover{color:var(--link-hover-text-color,var(--link-text-color));opacity:var(--link-hover-opacity,var(--link-opacity));-webkit-text-decoration:var(--link-hover-text-decoration,var(--link-text-decoration));text-decoration:var(--link-hover-text-decoration,var(--link-text-decoration));border:var(--link-hover-border,var(--link-border));background-color:var(--link-hover-bg-color,var(--link-bg-color))}.codersrank-portfolio-links a:active{color:var(--link-active-text-color,var(--link-hover-text-color,var(--link-text-color)));opacity:var(--link-active-opacity,var(--link-hover-opacity,var(--link-opacity)));-webkit-text-decoration:var(--link-active-text-decoration,var(--link-hover-text-decoration,var(--link-text-decoration)));text-decoration:var(--link-active-text-decoration,var(--link-hover-text-decoration,var(--link-text-decoration)));border:var(--link-active-border,var(--link-hover-border,var(--link-border)));background-color:var(--link-active-bg-color,var(--link-hover-bg-color,var(--link-bg-color)))}.codersrank-portfolio-branding{justify-content:flex-end;align-items:center;font-size:12px;color:var(--branding-text-color);display:flex;margin-top:.5em}.codersrank-portfolio-branding a{opacity:.5;display:flex;align-items:center;color:inherit;text-decoration:none;transition-duration:.2s;position:relative;z-index:1;transform:translate3d(0,0,0)}.codersrank-portfolio-branding a:hover{opacity:1}.codersrank-portfolio-branding span{margin-right:4px}.codersrank-portfolio-branding svg{height:16px;width:auto}@-webkit-keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"; // eslint-disable-next-line

var CodersrankPortfolio = /*#__PURE__*/function (_HTMLElement) {
  _inheritsLoose(CodersrankPortfolio, _HTMLElement);

  function CodersrankPortfolio() {
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

  var _proto = CodersrankPortfolio.prototype;

  _proto.render = function render() {
    var username = this.username,
        mounted = this.mounted,
        state = this.state,
        shadowEl = this.shadowEl,
        data = this.data,
        logos = this.logos,
        grid = this.grid,
        dates = this.dates,
        title = this.title,
        description = this.description,
        company = this.company,
        skills = this.skills,
        links = this.links,
        branding = this.branding;
    var ctx = {
      data: data,
      grid: grid,
      logos: logos,
      dates: dates,
      title: title,
      description: description,
      company: company,
      skills: skills,
      links: links,
      branding: branding
    };
    if (!username || !mounted) return;

    if (state === STATE_SUCCESS) {
      this.tempDiv.innerHTML = _render(ctx);
    } else if (state === STATE_ERROR) {
      this.tempDiv.innerHTML = renderError(ctx);
    } else if (state === STATE_IDLE || state === STATE_LOADING) {
      this.tempDiv.innerHTML = renderLoading(ctx);
    }

    var widgetEl = shadowEl.querySelector('.codersrank-portfolio');

    if (widgetEl) {
      widgetEl.parentNode.removeChild(widgetEl);
    }

    widgetEl = this.tempDiv.querySelector('.codersrank-portfolio');
    if (!widgetEl) return;
    this.widgetEl = widgetEl;
    shadowEl.appendChild(widgetEl);
  };

  _proto.loadAndRender = function loadAndRender() {
    var _this2 = this;

    var username = this.username;
    this.state = STATE_LOADING;
    this.render();
    fetchData(username).then(function (portfolio) {
      _this2.data = formatData(portfolio, _this2.maxItems);
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

  _createClass(CodersrankPortfolio, [{
    key: "username",
    get: function get() {
      return this.getAttribute('username');
    },
    set: function set(value) {
      this.setAttribute('username', value);
    }
  }, {
    key: "logos",
    get: function get() {
      return this.getAttribute('logos') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('logos', value);
    }
  }, {
    key: "dates",
    get: function get() {
      return this.getAttribute('dates') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('dates', value);
    }
  }, {
    key: "title",
    get: function get() {
      return this.getAttribute('title') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('title', value);
    }
  }, {
    key: "description",
    get: function get() {
      return this.getAttribute('description') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('description', value);
    }
  }, {
    key: "company",
    get: function get() {
      return this.getAttribute('company') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('company', value);
    }
  }, {
    key: "skills",
    get: function get() {
      return this.getAttribute('skills') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('skills', value);
    }
  }, {
    key: "links",
    get: function get() {
      return this.getAttribute('links') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('links', value);
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
      return ['username', 'logos', 'grid', 'max-items', 'dates', 'title', 'description', 'company', 'skills', 'links'];
    }
  }]);

  return CodersrankPortfolio;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); 
export default CodersrankPortfolio;
