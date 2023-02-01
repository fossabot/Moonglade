/**
 * Codersrank Activity Widget 0.9.14
 * undefined
 * https://github.com/codersrank-org/activity-widget#readme
 *
 * Copyright 2020-2021 CodersRank Ltd.
 *
 * Released under the MIT License
 *
 * Released on: January 12, 2021
 */

(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var cache = {};
  var fetchData = function fetchData(username, id) {
    if (username && cache[username]) return Promise.resolve(cache[username]);
    if (id && cache[id]) return Promise.resolve(cache[id]);
    var endpoint = "https://api.codersrank.io/v2/users/" + (username || id) + "/activities";
    if (id) endpoint += '?get_by=id';
    return fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (id) {
        cache[id] = data;
      } else {
        cache[username] = data;
      }

      return data;
    })["catch"](function (err) {
      // eslint-disable-next-line
      return Promise.reject(err);
    });
  };

  var codersrRankLogo = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"258\" height=\"39\" viewBox=\"0 0 258 39\"><path fill=\"#19223C\" d=\"M71.358 27.687A8.076 8.076 0 0 1 69 21.999c0-2.122.846-4.162 2.358-5.687a8.022 8.022 0 0 1 2.664-1.688 8.175 8.175 0 0 1 3.126-.543 8.298 8.298 0 0 1 4.723 1.339 7.155 7.155 0 0 1 2.895 3.791H80.12a3 3 0 0 0-1.182-1.283 3.106 3.106 0 0 0-1.713-.427 4.128 4.128 0 0 0-1.694.264 4.046 4.046 0 0 0-1.43.926 5.197 5.197 0 0 0-1.133 3.234c0 1.17.399 2.309 1.134 3.234.403.405.89.72 1.43.926a4.128 4.128 0 0 0 1.693.264c.586.039 1.17-.087 1.684-.364a3.01 3.01 0 0 0 1.211-1.198h4.571a7.156 7.156 0 0 1-2.895 3.792 8.298 8.298 0 0 1-4.723 1.338 8.173 8.173 0 0 1-3.085-.557 8.02 8.02 0 0 1-2.629-1.673zM88.652 27.687a8.076 8.076 0 0 1-2.359-5.688c0-2.122.846-4.162 2.359-5.687a8.57 8.57 0 0 1 5.79-2.238c2.15 0 4.221.8 5.79 2.238a8.076 8.076 0 0 1 2.358 5.687 8.076 8.076 0 0 1-2.359 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 98.623 22c0-1.17-.4-2.308-1.134-3.234a4.398 4.398 0 0 0-3.048-1.219c-1.14 0-2.234.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.048-1.219zM110.592 14.304a9.126 9.126 0 0 1 6.247 2.156 7.73 7.73 0 0 1 1.8 2.546 7.573 7.573 0 0 1 0 6.06 7.73 7.73 0 0 1-1.8 2.546 9.049 9.049 0 0 1-6.247 2.156h-5.561V14.304h5.561zm-1.752 12.64h1.752a4.596 4.596 0 0 0 1.903-.295 4.504 4.504 0 0 0 1.602-1.044 4.909 4.909 0 0 0 1.295-3.569 4.909 4.909 0 0 0-1.295-3.568 4.504 4.504 0 0 0-1.602-1.044 4.595 4.595 0 0 0-1.903-.294h-1.752v9.813zM131.313 14.23v2.9h-5.714v3.345h5.104v2.9H125.6v3.568h5.714v2.9h-9.599V14.23zM138.55 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32h-4.418l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM155.158 17.055a1.86 1.86 0 0 0-1.22.372c-.159.138-.284.311-.363.505-.08.193-.111.402-.093.61a1.528 1.528 0 0 0 .457 1.115c.32.31.712.539 1.143.67l1.523.445 1.676.52 1.524.744c.487.317.881.753 1.143 1.264.31.6.466 1.262.457 1.933a4.227 4.227 0 0 1-.45 1.859 4.333 4.333 0 0 1-1.226 1.487 6.424 6.424 0 0 1-4.343 1.412 6.899 6.899 0 0 1-4.342-1.263 4.331 4.331 0 0 1-1.278-1.588 4.223 4.223 0 0 1-.398-1.981h4.114c-.012.253.032.507.128.742.097.236.244.449.431.625a1.87 1.87 0 0 0 1.421.492c.475.02.94-.14 1.296-.447a1.382 1.382 0 0 0 .457-1.115 1.455 1.455 0 0 0-.457-1.115 2.986 2.986 0 0 0-1.143-.669l-1.524-.446-1.676-.52-1.523-.744a3.148 3.148 0 0 1-1.143-1.264 4 4 0 0 1-.305-1.859 4.15 4.15 0 0 1 .407-1.944 4.258 4.258 0 0 1 1.27-1.55 6.582 6.582 0 0 1 4.19-1.338 6.982 6.982 0 0 1 4.113 1.115 4.33 4.33 0 0 1 1.278 1.588c.292.62.428 1.299.398 1.98h-4.19a2.056 2.056 0 0 0-.533-1.263 1.611 1.611 0 0 0-1.22-.372zM168.261 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32H172.3l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM189.592 29.768l-.914-2.602h-5.714l-.914 2.602h-4.114l5.485-15.538h4.723l5.485 15.538h-4.037zm-5.638-5.501h3.733l-1.828-5.428-1.905 5.428zM205.972 14.23h3.885v15.538h-3.885l-6.476-9.813v9.813h-3.885V14.23h3.885l6.476 9.814zM217.093 29.768h-3.885V14.304h3.885v6.766l5.257-6.766h5.104l-6.552 7.732 6.552 7.732h-4.952l-5.333-6.84zM232.863 27.761a1.98 1.98 0 0 1-.5 1.253 2.07 2.07 0 0 1-1.197.664 2.1 2.1 0 0 1-1.359-.222 2.024 2.024 0 0 1-.91-1.01 1.962 1.962 0 0 1-.054-1.342c.141-.44.433-.82.827-1.076a2.096 2.096 0 0 1 2.583.246c.201.194.359.426.464.682.105.256.154.53.146.805z\"></path> <path fill=\"#67a4ac\" d=\"M235.301 29.768V14.304h3.885v15.464zM244.062 27.687a8.076 8.076 0 0 1-2.358-5.688c0-2.122.846-4.162 2.358-5.687a8.57 8.57 0 0 1 5.79-2.238c2.151 0 4.222.8 5.79 2.238A8.076 8.076 0 0 1 258 21.999a8.076 8.076 0 0 1-2.358 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 254.033 22c0-1.17-.399-2.308-1.134-3.234a4.398 4.398 0 0 0-3.047-1.219c-1.14 0-2.235.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.047-1.219z\"></path> <path d=\"M33.25.054L2.147 19.634C.682 20.52-.034 21.512.001 22.611v2.98c.035 1.1.768 2.075 2.2 2.926l15.393 8.885a.726.726 0 0 0 1.047-.373l3.456-8.352-7.33-4.15a1.317 1.317 0 0 1-.514-.477 1.346 1.346 0 0 1 .461-1.864l13.457-8.247L33.72.427a.324.324 0 0 0-.103-.36.31.31 0 0 0-.369-.013z\" fill=\"#19223c\"></path> <path d=\"M58.8 10.961L43.618 1.757a.726.726 0 0 0-1.047.32l-3.56 8.352 7.225 4.31c.208.113.381.282.502.488a1.347 1.347 0 0 1 0 1.363 1.318 1.318 0 0 1-.502.49l-13.561 7.98-5.76 13.407a.323.323 0 0 0 .026.452.312.312 0 0 0 .445-.026l9.949-6.012 3.927 5.64a.947.947 0 0 0 .785.425h9.425a.932.932 0 0 0 .832-.506.97.97 0 0 0-.047-.984l-6.388-9.79 12.933-7.82c1.466-.887 2.199-1.88 2.199-2.98V13.94c0-1.1-.733-2.092-2.2-2.979z\" fill=\"#67a4ac\"></path></svg>";

  var renderChart = function renderChart(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        data = _ref.data,
        weeks = _ref.weeks,
        svgWidth = _ref.svgWidth,
        legend = _ref.legend,
        labels = _ref.labels,
        preloader = _ref.preloader,
        step = _ref.step,
        branding = _ref.branding;

    var width = svgWidth;
    var spacing = 4;
    var wdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var xOffset = labels ? 25 : 0;
    var yOffset = labels ? 18 : 0;
    var weeksArray = [];

    for (var i = 0; i < weeks; i += 1) {
      weeksArray.push(i);
    }

    var daysArray = [];

    for (var _i = 0; _i < 7; _i += 1) {
      daysArray.push(_i);
    }

    var rectSize = (width - xOffset - (weeks - 1) * spacing) / weeks;
    var chartWidth = width + 5;
    var chartHeight = yOffset + rectSize * 7 + spacing * 6 + 7;

    var totalDays = function () {
      var numberOfDays = weeks * 7;
      var todayWeekDay = new Date().getDay();
      numberOfDays -= 7 - todayWeekDay;
      return numberOfDays;
    }();

    var monthsColumns = function () {
      var cols = [];
      var startDateTime = new Date().getTime() - totalDays * 24 * 60 * 60 * 1000;
      var month;

      for (var _i2 = 0; _i2 < weeks; _i2 += 1) {
        var weekStartMonth = new Date(startDateTime + _i2 * 7 * 24 * 60 * 60 * 1000).getMonth();

        if (month !== weekStartMonth) {
          cols.push({
            weekIndex: _i2,
            month: weekStartMonth
          });
          month = weekStartMonth;
        }
      }

      return cols;
    }();

    var dayDate = function dayDate(weekIndex, dayIndex) {
      var minusDays = totalDays - (weekIndex * 7 + dayIndex + 1);
      var date = new Date(new Date().getTime() - minusDays * 24 * 60 * 60 * 1000);

      var zerofy = function zerofy(num) {
        if (num < 10) return "0" + num;
        return num;
      };

      return date.getFullYear() + "-" + zerofy(date.getMonth() + 1) + "-" + zerofy(date.getDate());
    };

    var isDayDisabled = function isDayDisabled(weekIndex, dayIndex) {
      var dayNumber = weekIndex * 7 + dayIndex + 1;
      return dayNumber > totalDays;
    };

    var activitiesInDay = function activitiesInDay(date) {
      var activities = 0;
      if (!data || !date) return activities;
      var dayData = data[date];

      if (dayData) {
        Object.keys(dayData).forEach(function (key) {
          // @ts-ignore
          activities += dayData[key];
        });
      }

      return activities;
    };

    var dayClasses = function dayClasses(weekIndex, dayIndex) {
      var classes = ['codersrank-activity-day'];
      var date = dayDate(weekIndex, dayIndex);
      var activities = activitiesInDay(date);
      var level = activities > 0 ? Math.min(Math.floor(activities / step), 3) + 1 : 0;

      if (level) {
        classes.push("codersrank-activity-day-" + level);
      }

      if (isDayDisabled(weekIndex, dayIndex)) {
        classes.push('codersrank-activity-day-disabled');
      }

      return classes.join(' ');
    }; // prettier-ignore


    return (
      /* html */
      "\n    <div class=\"codersrank-activity\">\n      <div class=\"codersrank-activity-chart\">\n        <svg viewBox=\"0 0 " + chartWidth + " " + chartHeight + "\" height=\"" + chartHeight + "\">\n          <g transform=\"translate(" + xOffset + ", " + yOffset + ")\">\n            " + weeksArray.map(function (w) {
        return (
          /* html */
          "\n            <g transform=\"translate(" + (rectSize + spacing) * w + ", 0)\">\n              " + daysArray.map(function (d) {
            return (
              /* html */
              "\n              <rect\n                width=\"" + rectSize + "\"\n                height=\"" + rectSize + "\"\n                rx=\"1.5\"\n                x=\"0\"\n                y=\"" + (rectSize + spacing) * d + "\"\n                data-date=\"" + dayDate(w, d) + "\"\n                class=\"" + dayClasses(w, d) + "\"\n              />\n              "
            );
          }).join('') + "\n            </g>\n            "
        );
      }).join('') + "\n          </g>\n\n          " + (labels ?
      /* html */
      "\n          <g>\n            " + wdays.map(function (wday, index) {
        return (
          /* html */
          "\n            <text\n              class=\"codersrank-activity-wday\"\n              text-anchor=\"start\"\n              dominant-baseline=\"hanging\"\n              dx=\"0\"\n              dy=\"" + ((rectSize + spacing) * index + 2.5 + yOffset) + "\"\n            >\n              " + wday + "\n            </text>\n            "
        );
      }).join('') + "\n          </g>\n\n          <g>\n            " + monthsColumns.map(function (monthData) {
        return (
          /* html */
          "\n            <text\n              class=\"codersrank-activity-month\"\n              text-anchor=\"start\"\n              dominant-baseline=\"text-before-edge\"\n              dx=\"" + ((rectSize + spacing) * monthData.weekIndex + xOffset) + "\"\n              dy=\"0\"\n            >\n              " + months[monthData.month] + "\n            </text>\n            "
        );
      }).join('') + "\n          </g>\n          " : '') + "\n        </svg>\n        " + (preloader ?
      /* html */
      "\n        <div class=\"codersrank-activity-preloader\"></div>\n        " : '') + "\n      </div>\n      " + (legend ?
      /* html */
      "\n      <div class=\"codersrank-activity-legend\">\n        <span class=\"codersrank-activity-legend-label\">Less</span>\n        <span class=\"codersrank-activity-legend-item\"></span>\n        <span class=\"codersrank-activity-legend-item codersrank-activity-legend-item-1\"></span>\n        <span class=\"codersrank-activity-legend-item codersrank-activity-legend-item-2\"></span>\n        <span class=\"codersrank-activity-legend-item codersrank-activity-legend-item-3\"></span>\n        <span class=\"codersrank-activity-legend-item codersrank-activity-legend-item-4\"></span>\n        <span class=\"codersrank-activity-legend-label\">More</span>\n      </div>\n      " : '') + "\n      " + (branding ?
      /* html */
      "\n      <div class=\"codersrank-activity-branding\">\n        <a href=\"https://codersrank.io\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <span>Powered by </span>\n          " + codersrRankLogo + "\n        </a>\n      </div>\n      " : '') + "\n    </div>\n  "
    );
  };

  var renderError = function renderError() {
    return '';
  };

  var renderLoading = function renderLoading(ctx) {
    return renderChart(_extends({}, ctx, {
      preloader: true,
      data: {}
    }));
  };

  var icons = {
    github: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="#fff" fill-rule="evenodd" d="M0,25.0007674 C0,36.0462261 7.1625894,45.4157586 17.0969029,48.7215691 C18.3477086,48.9517788 18.8035237,48.1798091 18.8035237,47.5168053 C18.8035237,46.9243992 18.7820375,45.3512999 18.7697597,43.2656005 C11.8158937,44.7757758 10.3486909,39.9137481 10.3486909,39.9137481 C9.21145523,37.0253845 7.57236256,36.2564842 7.57236256,36.2564842 C5.30249547,34.706406 7.74425243,34.7371006 7.74425243,34.7371006 C10.2535376,34.9135946 11.5734062,37.3139139 11.5734062,37.3139139 C13.8033703,41.1338592 17.4253353,40.0303877 18.8495657,39.3904049 C19.0767059,37.7758679 19.7228276,36.6739311 20.4364775,36.0492956 C14.8853556,35.4185211 9.04877375,33.2729672 9.04877375,23.6931766 C9.04877375,20.9644249 10.0233279,18.7313914 11.6225176,16.9848676 C11.3646828,16.3525584 10.5067682,13.8095092 11.8680745,10.3686424 C11.8680745,10.3686424 13.9660518,9.69643022 18.7421345,12.9316431 C20.73575,12.3760705 22.875165,12.0998189 25.0007674,12.0890758 C27.124835,12.0998189 29.2627152,12.3760705 31.2594002,12.9316431 C36.0324135,9.69643022 38.1273213,10.3686424 38.1273213,10.3686424 C39.4916971,13.8095092 38.6337825,16.3525584 38.3774824,16.9848676 C39.9797416,18.7313914 40.9466221,20.9644249 40.9466221,23.6931766 C40.9466221,33.2975229 35.1008318,35.4108475 29.5328279,36.0293441 C30.4291108,36.8013137 31.2287056,38.3268363 31.2287056,40.6596274 C31.2287056,44.0007367 31.198011,46.697259 31.198011,47.5168053 C31.198011,48.185948 31.6492219,48.9640566 32.9169097,48.7200344 C42.8435495,45.4065502 50,36.0431566 50,25.0007674 C50,11.1927929 38.8056724,0 24.9976979,0 C11.1943276,0 0,11.1927929 0,25.0007674 Z" transform="translate(3 3)"/></svg>',
    stackoverflow: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="#ee7a06" d="M5.22307574,30.9345 L5.22307574,44.4341791 L36.3289243,44.4341791 L36.3289243,30.9345 L40.776,30.9345 L40.776,48.9345 L0.776,48.9345 L0.776,30.9345 L5.22307574,30.9345 Z M32,35 L32,40 L10,40 L10,35 L32,35 Z M10.9277895,25 L33,29.6115033 L32.0722105,34 L10,29.3884967 L10.9277895,25 Z M14.8746402,16 L35,25.0945103 L33.1253598,29 L13,19.9054897 L14.8746402,16 Z M20.8556275,7 L38,20.7080348 L35.1443725,24 L18,10.2919652 L20.8556275,7 Z M29.6024511,0 L43,17.4101966 L39.3975489,20 L26,2.58980337 L29.6024511,0 Z" transform="translate(6 4)"/></svg>',
    folder: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="#fff" d="M 47.5700 10.5625 L 24.7655 10.5625 C 23.1718 10.5625 22.2108 10.1641 21.0389 9.1797 L 19.6093 7.9844 C 18.0624 6.6953 16.8671 6.2500 14.5468 6.2500 L 7.5624 6.2500 C 3.4608 6.2500 1.0936 8.5937 1.0936 13.3281 L 1.0936 19.5859 L 54.9064 19.5859 L 54.9064 17.8047 C 54.9064 12.9766 52.4454 10.5625 47.5700 10.5625 Z M 8.4530 49.7500 L 48.2732 49.7500 C 52.4684 49.7500 54.9064 47.3125 54.9064 42.4844 L 54.9064 22.7735 L 1.0936 22.7735 L 1.0936 42.4844 C 1.0936 47.3359 3.5780 49.7500 8.4530 49.7500 Z"/></svg>',
    gitlab: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"350\" height=\"350\" viewBox=\"0 0 350 350\"><g fill=\"none\" transform=\"translate(6 20)\"><path fill=\"#FC6D26\" d=\"M337.17,177.83 L318.26,119.71 L280.84,4.43 C279.956602,1.7925919 277.486423,0.0149148401 274.705,0.0149148401 C271.923577,0.0149148401 269.453398,1.7925919 268.57,4.43 L231.15,119.64 L106.82,119.64 L69.4,4.43 C68.5220965,1.78979642 66.0523353,0.00830812195 63.27,0.00830812195 C60.4876647,0.00830812195 58.0179035,1.78979642 57.14,4.43 L19.78,119.64 L0.87,177.83 C-0.853328917,183.12969 1.02714845,188.936572 5.53,192.22 L169,311 L332.44,192.22 C336.963325,188.951421 338.871954,183.144831 337.17,177.83\"/><polygon fill=\"#E24329\" points=\"63 191.91 63 191.91 125.16 .63 .87 .63\" transform=\"translate(106 119)\"/><polygon fill=\"#FC6D26\" points=\"150 191.91 87.82 .63 .82 .63\" transform=\"translate(19 119)\"/><path fill=\"#FCA326\" d=\"M19.75,0.69 L19.75,0.69 L0.84,58.81 C-0.883328917,64.1096898 0.997148451,69.9165716 5.5,73.2 L169,192 L19.75,0.69 Z\" transform=\"translate(0 119)\"/><path fill=\"#E24329\" d=\"M0.78,119.69 L87.89,119.69 L50.4,4.49 C49.5166016,1.8525919 47.046423,0.0749148401 44.265,0.0749148401 C41.483577,0.0749148401 39.0133984,1.8525919 38.13,4.49 L0.78,119.69 Z\" transform=\"translate(19)\"/><polygon fill=\"#FC6D26\" points=\"0 191.91 62.16 .63 149.3 .63\" transform=\"translate(169 119)\"/><path fill=\"#FCA326\" d=\"M149.24,0.69 L149.24,0.69 L168.15,58.81 C169.883261,64.1096795 168.000893,69.9224023 163.49,73.2 L0,191.91 L149.2,0.69 L149.24,0.69 Z\" transform=\"translate(169 119)\"/><path fill=\"#E24329\" d=\"M87.28,119.69 L0.18,119.69 L37.6,4.49 C38.4779035,1.84979642 40.9476647,0.0683081219 43.73,0.0683081219 C46.5123353,0.0683081219 48.9820965,1.84979642 49.86,4.49 L87.28,119.69 Z\" transform=\"translate(231)\"/></g></svg>\n  "
  };

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
        tempDiv.innerHTML = renderError();
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

  if (window.customElements && !window.customElements.get(COMPONENT_TAG)) {
    window.customElements.define(COMPONENT_TAG, CodersRankActivity);
  }

})));
//# sourceMappingURL=codersrank-activity.js.map
