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

import { fetchData } from './shared/fetch-data';
import { renderChart } from './shared/render-chart';
import { renderError } from './shared/render-error';
import { renderLoading } from './shared/render-loading';
import { icons } from './shared/icons'; // eslint-disable-next-line

var COMPONENT_TAG = 'codersrank-activity';
var STATE_IDLE = 0;
var STATE_LOADING = 1;
var STATE_ERROR = 2;
var STATE_SUCCESS = 3; // eslint-disable-next-line

var STYLES = ":host{--font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;--label-font-size:9px;--label-text-color:#999ea4;--legend-font-size:12px;--legend-text-color:#999ea4;--legend-item-width:14px;--legend-item-height:14px;--legend-margin:1em 0 0 0;--bg-color-0:#f6f6f6;--bg-color-1:rgba(80, 176, 186, 0.3);--bg-color-2:rgba(80, 176, 186, 0.6);--bg-color-3:rgba(80, 176, 186, 1);--bg-color-4:#24565a;--border-color-0:transparent;--border-color-1:transparent;--border-color-2:transparent;--border-color-3:transparent;--border-color-4:transparent;--svg-width:100%;--svg-height:auto;--preloader-color:#72a0a8;--tooltip-font-size:14px;--branding-text-color:inherit;width:100%;display:block;position:relative}.codersrank-activity{font-family:var(--font-family);position:relative}.codersrank-activity-preloader{position:absolute;left:50%;top:50%;width:32px;height:32px;margin:-16px 0 0 -16px;border:3px solid var(--preloader-color);border-left-color:transparent;border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;-webkit-animation:preloader 1s infinite linear;animation:preloader 1s infinite linear}.codersrank-activity-chart{width:100%;position:relative}.codersrank-activity-chart svg{width:var(--svg-width);height:var(--svg-height)}.codersrank-activity-day{fill:var(--bg-color-0);stroke-width:1;stroke:var(--border-color-0)}.codersrank-activity-day-1{fill:var(--bg-color-1);stroke:var(--border-color-1)}.codersrank-activity-day-2{fill:var(--bg-color-2);stroke:var(--border-color-2)}.codersrank-activity-day-3{fill:var(--bg-color-3);stroke:var(--border-color-3)}.codersrank-activity-day-4{fill:var(--bg-color-4);stroke:var(--border-color-4)}.codersrank-activity-day-disabled{display:none}.codersrank-activity-month,.codersrank-activity-wday{font-size:var(--label-font-size);fill:var(--label-text-color)}.codersrank-activity-wday:nth-child(2n){display:none}.codersrank-activity-tooltip{text-align:left;position:absolute;background:#000;transform:translateX(-50%) translateY(-100%);border-radius:4px;color:#fff;font-family:var(--font-family);padding:8px;font-size:var(--tooltip-font-size);white-space:nowrap;pointer-events:none;margin-top:-10px;width:200px;line-height:1.5}.codersrank-activity-tooltip-angle{width:0px;height:0px;position:absolute;left:50%;top:100%;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid #000;margin-left:-5px}.codersrank-activity-tooltip-header{padding-bottom:4px;margin-bottom:4px;border-bottom:1px solid rgba(255,255,255,.25)}.codersrank-activity-tooltip-list{list-style:none;margin:0;padding:0}.codersrank-activity-tooltip-list li{display:flex;align-items:center}.codersrank-activity-tooltip-list i{text-align:center;font-size:16px;width:16px;height:16px;margin-right:8px;display:block}.codersrank-activity-tooltip-list i svg{display:block;width:16px;height:16px}.codersrank-activity-legend{display:flex;justify-content:flex-end;align-items:center;color:var(--legend-text-color);line-height:1;font-size:var(--legend-font-size);margin:var(--legend-margin)}.codersrank-activity-legend-label:first-child{margin-right:8px}.codersrank-activity-legend-label:last-child{margin-left:8px}.codersrank-activity-legend-item{box-sizing:border-box;width:var(--legend-item-width);height:var(--legend-item-height);background-color:var(--bg-color-0);border:1px solid var(--border-color-0);margin:0 2px;border-radius:2px}.codersrank-activity-legend-item-1{background-color:var(--bg-color-1);border-color:var(--border-color-1)}.codersrank-activity-legend-item-2{background-color:var(--bg-color-2);border-color:var(--border-color-2)}.codersrank-activity-legend-item-3{background-color:var(--bg-color-3);border-color:var(--border-color-3)}.codersrank-activity-legend-item-4{background-color:var(--bg-color-4);border-color:var(--border-color-4)}.codersrank-activity-legend+.codersrank-activity-branding{margin-top:.5em}.codersrank-activity-branding{justify-content:flex-end;align-items:center;font-size:12px;color:var(--branding-text-color);display:flex}.codersrank-activity-branding a{opacity:.5;display:flex;align-items:center;color:inherit;text-decoration:none;transition-duration:.2s;position:relative;z-index:1;transform:translate3d(0,0,0)}.codersrank-activity-branding a:hover{opacity:1}.codersrank-activity-branding span{margin-right:4px}.codersrank-activity-branding svg{height:16px;width:auto}@-webkit-keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"; // eslint-disable-next-line

var CodersRankActivity = /*#__PURE__*/function (_HTMLElement) {
  _inheritsLoose(CodersRankActivity, _HTMLElement);

  function CodersRankActivity() {
    var _this;

    _this = _HTMLElement.call(this) || this;
    _this.tempDiv = document.createElement('div');
    _this.shadowEl = _this.attachShadow({
      mode: 'closed'
    });
    _this.stylesEl = document.createElement('style');
    _this.stylesEl.textContent = STYLES;

    _this.shadowEl.appendChild(_this.stylesEl);

    _this.onMouseEnter = _this.onMouseEnter.bind(_assertThisInitialized(_this));
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_this));
    _this.mounted = false;
    _this.state = STATE_IDLE;
    _this.data = null;
    return _this;
  } // eslint-disable-next-line


  var _proto = CodersRankActivity.prototype;

  _proto.getTotalActivities = function getTotalActivities(data) {
    if (data === void 0) {
      data = {};
    }

    var total = 0;
    Object.keys(data).forEach(function (date) {
      Object.keys(data[date]).forEach(function (source) {
        total += data[date][source] || 0;
      });
    });
    return total;
  };

  _proto.emitData = function emitData(data) {
    if (data === void 0) {
      data = {};
    }

    var event = new CustomEvent('data', {
      detail: {
        data: data,
        total: this.getTotalActivities(data)
      }
    });
    this.dispatchEvent(event);
  };

  _proto.emitError = function emitError(err) {
    var event = new CustomEvent('error', {
      detail: err
    });
    this.dispatchEvent(event);
  };

  _proto.render = function render() {
    var username = this.username,
        id = this.id,
        mounted = this.mounted,
        state = this.state,
        shadowEl = this.shadowEl,
        data = this.data,
        weeks = this.weeks,
        svgWidth = this.svgWidth,
        legend = this.legend,
        labels = this.labels,
        step = this.step,
        branding = this.branding,
        tempDiv = this.tempDiv;
    var ctx = {
      data: data,
      weeks: weeks,
      svgWidth: svgWidth,
      legend: legend,
      labels: labels,
      step: step,
      branding: branding
    };
    if (!username && !id || !mounted) return;

    if (state === STATE_SUCCESS) {
      tempDiv.innerHTML = renderChart(ctx);
    } else if (state === STATE_ERROR) {
      tempDiv.innerHTML = renderError(ctx);
    } else if (state === STATE_IDLE || state === STATE_LOADING) {
      tempDiv.innerHTML = renderLoading(ctx);
    }

    var widgetEl = shadowEl.querySelector('.codersrank-activity');

    if (widgetEl) {
      widgetEl.parentNode.removeChild(widgetEl);
    }

    widgetEl = tempDiv.querySelector('.codersrank-activity');
    if (!widgetEl) return;
    this.widgetEl = widgetEl;
    this.detachEvents();
    this.attachEvents();
    shadowEl.appendChild(widgetEl);
  };

  _proto.loadAndRender = function loadAndRender() {
    var _this2 = this;

    var username = this.username,
        id = this.id;
    this.state = STATE_LOADING;
    this.render();
    fetchData(username, id).then(function (data) {
      _this2.emitData(data);

      _this2.data = data;
      _this2.state = STATE_SUCCESS;

      _this2.render();
    })["catch"](function (err) {
      _this2.emitError(err);

      _this2.state = STATE_ERROR;

      _this2.render();
    });
  };

  _proto.activitiesInDay = function activitiesInDay(date) {
    var activities = 0;
    if (!this.data || !date) return activities;
    var dayData = this.data[date];

    if (dayData) {
      Object.keys(dayData).forEach(function (key) {
        // @ts-ignore
        activities += dayData[key];
      });
    }

    return activities;
  };

  _proto.tooltipText = function tooltipText(date) {
    var data = this.data[date];
    var activities = this.activitiesInDay(date);
    var formatter = Intl.DateTimeFormat(); // prettier-ignore

    return "\n        <div class=\"codersrank-activity-tooltip-header\">\n          " + formatter.format(new Date(date)) + " - <b>" + activities + " activities</b>\n        </div>\n        <ul class=\"codersrank-activity-tooltip-list\">\n          " + (data.github ? "\n          <li><i>" + icons.github + "</i>" + data.github + " activities</li>\n          " : '') + "\n          " + (data.gitlab ? "\n          <li><i>" + icons.gitlab + "</i>" + data.gitlab + " activities</li>\n          " : '') + "\n          " + (data["private"] ? "\n          <li><i>" + icons.folder + "</i>" + data["private"] + " activities</li>\n          " : '') + "\n          " + (data.stackoverflow ? "\n          <li><i>" + icons.stackoverflow + "</i>" + data.stackoverflow + " activities</li>\n          " : '') + "\n        </ul>\n      ";
  };

  _proto.showTooltip = function showTooltip(date) {
    if (!this.data || !date || !this.tooltip || !this.widgetEl) return;
    var data = this.data[date];
    if (!data) return;
    var rectEl = this.shadowEl.querySelector("[data-date=\"" + date + "\"]");
    if (!rectEl) return;
    this.tempDiv.innerHTML = "\n      <div class=\"codersrank-activity-tooltip\">\n        " + this.tooltipText(date) + "\n        <div class=\"codersrank-activity-tooltip-angle\"></div>\n      </div>\n    ";
    var widgetElRect = this.getBoundingClientRect();
    var rectElRect = rectEl.getBoundingClientRect();
    var tooltipEl = this.tempDiv.querySelector('.codersrank-activity-tooltip');
    var left = rectElRect.left - widgetElRect.left;
    var diff = -5;

    if (left < 110) {
      diff = -5 - (110 - left);
      left = 110;
    }

    if (left + 110 > widgetElRect.width) {
      diff = -5 + 110 - (widgetElRect.width - left);
      left = widgetElRect.width - 110;
    }

    diff = Math.max(Math.min(diff, 105), -105);
    tooltipEl.style.left = left + "px";
    tooltipEl.style.top = rectElRect.top - widgetElRect.top + "px";
    tooltipEl.querySelector('.codersrank-activity-tooltip-angle').style.marginLeft = diff + "px";
    this.shadowEl.appendChild(tooltipEl);
  };

  _proto.hideTooltip = function hideTooltip() {
    if (!this.tooltip || !this.widgetEl) return;
    var tooltipEl = this.shadowEl.querySelector('.codersrank-activity-tooltip');
    if (!tooltipEl) return;
    this.shadowEl.removeChild(tooltipEl);
  };

  _proto.onMouseEnter = function onMouseEnter(e) {
    if (e.target.tagName !== 'rect') return;
    var el = e.target;
    var date = el.getAttribute('data-date');
    this.showTooltip(date);
  };

  _proto.onMouseLeave = function onMouseLeave() {
    this.hideTooltip();
  };

  _proto.attributeChangedCallback = function attributeChangedCallback() {
    if (!this.mounted) return;
    this.loadAndRender();
  };

  _proto.attachEvents = function attachEvents() {
    if (!this.widgetEl) return;
    this.widgetEl.addEventListener('mouseenter', this.onMouseEnter, true);
    this.widgetEl.addEventListener('mouseleave', this.onMouseLeave, true);
  };

  _proto.detachEvents = function detachEvents() {
    if (!this.widgetEl) return;
    this.widgetEl.removeEventListener('mouseenter', this.onMouseEnter, true);
    this.widgetEl.removeEventListener('mouseleave', this.onMouseLeave, true);
  };

  _proto.connectedCallback = function connectedCallback() {
    this.width = this.offsetWidth;
    this.mounted = true;
    this.loadAndRender();
  };

  _proto.disconnectedCallback = function disconnectedCallback() {
    this.mounted = false;
    this.detachEvents();
  };

  _createClass(CodersRankActivity, [{
    key: "tooltip",
    get: function get() {
      var tooltip = this.getAttribute('tooltip');
      if (tooltip === '' || tooltip === 'true') return true;
      return false;
    },
    set: function set(value) {
      this.setAttribute('tooltip', value);
    }
  }, {
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
    key: "weeks",
    get: function get() {
      return Math.min(parseInt(this.getAttribute('weeks') || 52, 10), 52);
    },
    set: function set(value) {
      this.setAttribute('weeks', value);
    }
  }, {
    key: "svgWidth",
    get: function get() {
      var svgWidth = parseInt(this.getAttribute('svg-width') || 0, 10);

      if (!svgWidth && this.weeks < 52) {
        return 800 / (52 / this.weeks);
      }

      return svgWidth || 800;
    },
    set: function set(value) {
      this.setAttribute('svg-width', value);
    }
  }, {
    key: 'svg-width',
    set: function set(value) {
      this.setAttribute('svg-width', value);
    }
  }, {
    key: "legend",
    get: function get() {
      var legend = this.getAttribute('legend');
      if (legend === '' || legend === 'true') return true;
      return false;
    },
    set: function set(value) {
      this.setAttribute('legend', value);
    }
  }, {
    key: "labels",
    get: function get() {
      var labels = this.getAttribute('labels');
      if (labels === '' || labels === 'true') return true;
      return false;
    },
    set: function set(value) {
      this.setAttribute('labels', value);
    }
  }, {
    key: "step",
    get: function get() {
      return parseInt(this.getAttribute('step') || 10, 10);
    },
    set: function set(value) {
      this.setAttribute('step', value);
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
      return ['username', 'weeks', 'svg-width', 'legend', 'labels', 'id'];
    }
  }]);

  return CodersRankActivity;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); 
export default CodersRankActivity;
