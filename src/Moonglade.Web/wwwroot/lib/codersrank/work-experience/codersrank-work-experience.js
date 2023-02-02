/**
 * Codersrank Work Experience Widget 0.9.8
 * undefined
 * https://github.com/codersrank-org/work-experience-widget#readme
 *
 * Copyright 2020-2020 CodersRank Ltd.
 *
 * Released under the MIT License
 *
 * Released on: December 28, 2020
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

  var cache = {};
  var fetchData = function fetchData(username) {
    if (cache[username]) return Promise.resolve(cache[username]);
    return fetch("https://api.codersrank.io/v2/users/" + username + "/work_experiences", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      cache[username] = data.work_experiences || [];
      return data.work_experiences || [];
    })["catch"](function (err) {
      // eslint-disable-next-line
      console.error(err);
      return Promise.reject(err);
    });
  };

  var codersRankLogo = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"258\" height=\"39\" viewBox=\"0 0 258 39\"><path fill=\"#19223C\" d=\"M71.358 27.687A8.076 8.076 0 0 1 69 21.999c0-2.122.846-4.162 2.358-5.687a8.022 8.022 0 0 1 2.664-1.688 8.175 8.175 0 0 1 3.126-.543 8.298 8.298 0 0 1 4.723 1.339 7.155 7.155 0 0 1 2.895 3.791H80.12a3 3 0 0 0-1.182-1.283 3.106 3.106 0 0 0-1.713-.427 4.128 4.128 0 0 0-1.694.264 4.046 4.046 0 0 0-1.43.926 5.197 5.197 0 0 0-1.133 3.234c0 1.17.399 2.309 1.134 3.234.403.405.89.72 1.43.926a4.128 4.128 0 0 0 1.693.264c.586.039 1.17-.087 1.684-.364a3.01 3.01 0 0 0 1.211-1.198h4.571a7.156 7.156 0 0 1-2.895 3.792 8.298 8.298 0 0 1-4.723 1.338 8.173 8.173 0 0 1-3.085-.557 8.02 8.02 0 0 1-2.629-1.673zM88.652 27.687a8.076 8.076 0 0 1-2.359-5.688c0-2.122.846-4.162 2.359-5.687a8.57 8.57 0 0 1 5.79-2.238c2.15 0 4.221.8 5.79 2.238a8.076 8.076 0 0 1 2.358 5.687 8.076 8.076 0 0 1-2.359 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 98.623 22c0-1.17-.4-2.308-1.134-3.234a4.398 4.398 0 0 0-3.048-1.219c-1.14 0-2.234.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.048-1.219zM110.592 14.304a9.126 9.126 0 0 1 6.247 2.156 7.73 7.73 0 0 1 1.8 2.546 7.573 7.573 0 0 1 0 6.06 7.73 7.73 0 0 1-1.8 2.546 9.049 9.049 0 0 1-6.247 2.156h-5.561V14.304h5.561zm-1.752 12.64h1.752a4.596 4.596 0 0 0 1.903-.295 4.504 4.504 0 0 0 1.602-1.044 4.909 4.909 0 0 0 1.295-3.569 4.909 4.909 0 0 0-1.295-3.568 4.504 4.504 0 0 0-1.602-1.044 4.595 4.595 0 0 0-1.903-.294h-1.752v9.813zM131.313 14.23v2.9h-5.714v3.345h5.104v2.9H125.6v3.568h5.714v2.9h-9.599V14.23zM138.55 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32h-4.418l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM155.158 17.055a1.86 1.86 0 0 0-1.22.372c-.159.138-.284.311-.363.505-.08.193-.111.402-.093.61a1.528 1.528 0 0 0 .457 1.115c.32.31.712.539 1.143.67l1.523.445 1.676.52 1.524.744c.487.317.881.753 1.143 1.264.31.6.466 1.262.457 1.933a4.227 4.227 0 0 1-.45 1.859 4.333 4.333 0 0 1-1.226 1.487 6.424 6.424 0 0 1-4.343 1.412 6.899 6.899 0 0 1-4.342-1.263 4.331 4.331 0 0 1-1.278-1.588 4.223 4.223 0 0 1-.398-1.981h4.114c-.012.253.032.507.128.742.097.236.244.449.431.625a1.87 1.87 0 0 0 1.421.492c.475.02.94-.14 1.296-.447a1.382 1.382 0 0 0 .457-1.115 1.455 1.455 0 0 0-.457-1.115 2.986 2.986 0 0 0-1.143-.669l-1.524-.446-1.676-.52-1.523-.744a3.148 3.148 0 0 1-1.143-1.264 4 4 0 0 1-.305-1.859 4.15 4.15 0 0 1 .407-1.944 4.258 4.258 0 0 1 1.27-1.55 6.582 6.582 0 0 1 4.19-1.338 6.982 6.982 0 0 1 4.113 1.115 4.33 4.33 0 0 1 1.278 1.588c.292.62.428 1.299.398 1.98h-4.19a2.056 2.056 0 0 0-.533-1.263 1.611 1.611 0 0 0-1.22-.372zM168.261 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32H172.3l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM189.592 29.768l-.914-2.602h-5.714l-.914 2.602h-4.114l5.485-15.538h4.723l5.485 15.538h-4.037zm-5.638-5.501h3.733l-1.828-5.428-1.905 5.428zM205.972 14.23h3.885v15.538h-3.885l-6.476-9.813v9.813h-3.885V14.23h3.885l6.476 9.814zM217.093 29.768h-3.885V14.304h3.885v6.766l5.257-6.766h5.104l-6.552 7.732 6.552 7.732h-4.952l-5.333-6.84zM232.863 27.761a1.98 1.98 0 0 1-.5 1.253 2.07 2.07 0 0 1-1.197.664 2.1 2.1 0 0 1-1.359-.222 2.024 2.024 0 0 1-.91-1.01 1.962 1.962 0 0 1-.054-1.342c.141-.44.433-.82.827-1.076a2.096 2.096 0 0 1 2.583.246c.201.194.359.426.464.682.105.256.154.53.146.805z\"></path> <path fill=\"#67a4ac\" d=\"M235.301 29.768V14.304h3.885v15.464zM244.062 27.687a8.076 8.076 0 0 1-2.358-5.688c0-2.122.846-4.162 2.358-5.687a8.57 8.57 0 0 1 5.79-2.238c2.151 0 4.222.8 5.79 2.238A8.076 8.076 0 0 1 258 21.999a8.076 8.076 0 0 1-2.358 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 254.033 22c0-1.17-.399-2.308-1.134-3.234a4.398 4.398 0 0 0-3.047-1.219c-1.14 0-2.235.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.047-1.219z\"></path> <path d=\"M33.25.054L2.147 19.634C.682 20.52-.034 21.512.001 22.611v2.98c.035 1.1.768 2.075 2.2 2.926l15.393 8.885a.726.726 0 0 0 1.047-.373l3.456-8.352-7.33-4.15a1.317 1.317 0 0 1-.514-.477 1.346 1.346 0 0 1 .461-1.864l13.457-8.247L33.72.427a.324.324 0 0 0-.103-.36.31.31 0 0 0-.369-.013z\" fill=\"#19223c\"></path> <path d=\"M58.8 10.961L43.618 1.757a.726.726 0 0 0-1.047.32l-3.56 8.352 7.225 4.31c.208.113.381.282.502.488a1.347 1.347 0 0 1 0 1.363 1.318 1.318 0 0 1-.502.49l-13.561 7.98-5.76 13.407a.323.323 0 0 0 .026.452.312.312 0 0 0 .445-.026l9.949-6.012 3.927 5.64a.947.947 0 0 0 .785.425h9.425a.932.932 0 0 0 .832-.506.97.97 0 0 0-.047-.984l-6.388-9.79 12.933-7.82c1.466-.887 2.199-1.88 2.199-2.98V13.94c0-1.1-.733-2.092-2.2-2.979z\" fill=\"#67a4ac\"></path></svg>";

  /* eslint-disable no-bitwise */
  function hashCode(str) {
    var hash = 0;

    for (var i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    return hash;
  }

  function intToRGB(i) {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();
    return '00000'.substring(0, 6 - c.length) + c;
  }

  function stringToColor(str) {
    var hashedHexNumber = intToRGB(hashCode(str));
    return ("#" + hashedHexNumber).toLowerCase();
  }

  var companyLogo = function companyLogo(name, url) {
    var iconColor = stringToColor(name || ''); // prettier-ignore

    return url ?
    /* html */
    "\n    <img src=\"" + url + "\" alt=\"" + name + "\" title=\"" + name + "\" />\n  " :
    /* html */
    "\n    <svg title=\"" + name + "\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n      <rect width=\"32\" height=\"32\" fill=\"" + iconColor + "\" rx=\"3\" />\n      " + (name ?
    /* html */
    "\n      <text\n        x=\"50%\"\n        y=\"50%\"\n        font-weight=\"bold\"\n        font-size=\"20\"\n        fill=\"#fff\"\n        dy=\"0\"\n        text-anchor=\"middle\"\n        dominant-baseline=\"middle\"\n      >\n        " + name[0].toUpperCase() + "\n      </text>\n      " : '') + "\n\n    </svg>\n  ";
  };

  var differenceInMonths = function differenceInMonths(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return Math.abs(months <= 0 ? 0 : months);
  };

  var sanitizeDescription = function sanitizeDescription(html) {
    if (html === void 0) {
      html = '';
    }

    return (html || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
  };

  var render = function render(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        workExperience = _ref.data,
        logos = _ref.logos,
        grid = _ref.grid,
        preloader = _ref.preloader,
        branding = _ref.branding;

    var workExperienceLocation = function workExperienceLocation(we) {
      var location = we.titles[0].location;
      if (location === 'Remote, Earth' || we.is_remote) return 'Remote';
      return location || '';
    };

    var formatInterval = function formatInterval(months) {
      var output = '';
      if (months === 0) return 'Less than a month';

      if (months >= 12) {
        output += Math.floor(months / 12);
        output += ' year';
        if (Math.floor(months / 12) !== 1) output += 's';
      }

      if (months % 12 !== 0) {
        if (months >= 12) output += ' ';
        output += months % 12;
        output += ' month';
        if (months % 12 !== 1) output += 's';
      }

      return output;
    };

    var formatDate = function formatDate(date) {
      if (!date) return '';
      var formatter = Intl.DateTimeFormat('en', {
        month: 'short',
        year: 'numeric'
      });
      return formatter.format(new Date(date));
    };

    var calculateMonths = function calculateMonths(startDate, endDate, is_current) {
      var end = is_current ? new Date() : new Date(endDate);
      return differenceInMonths(new Date(startDate), end);
    };

    var dates = function dates(item, showInterval) {
      if (showInterval === void 0) {
        showInterval = true;
      }

      var startDate = formatDate(item.start_date || item.date_from);
      var endDate = item.is_current ? 'Present' : formatDate(item.end_date || item.date_to);

      if (!showInterval) {
        return startDate + " - " + endDate;
      }

      return startDate + " - " + endDate + " (" + formatInterval(calculateMonths(item.start_date || item.date_from, item.end_date || item.date_to, item.is_current)) + ")";
    }; // prettier-ignore


    return (
      /* html */
      "\n    <div class=\"codersrank-work-experience " + (grid ? 'codersrank-work-experience-grid' : '') + " " + (!logos ? 'codersrank-work-experience-no-logos' : '') + " " + (preloader ? 'codersrank-work-experience-loading' : '') + "\">\n      " + (preloader ?
      /* html */
      "\n      <div class=\"codersrank-work-experience-preloader\"></div>\n      " : '') + "\n      <ul>\n        " + workExperience.map(function (we) {
        return (
          /* html */
          "\n        <li class=\"codersrank-work-experience-item\">\n          " + (logos ?
          /* html */
          "\n          <div class=\"codersrank-work-experience-logo\">\n            " + companyLogo(we.company, we.company_logo) + "\n          </div>\n          " : '') + "\n          <div class=\"codersrank-work-experience-content-wrap\">\n            <div class=\"codersrank-work-experience-company\">\n              " + we.company + "\n            </div>\n            <div class=\"codersrank-work-experience-date\">\n              " + (we.titles.length > 1 ? formatInterval(we.totalMonths) : dates(we.titles[0])) + "\n            </div>\n\n            " + (workExperienceLocation(we) ?
          /* html */
          "\n              <div class=\"codersrank-work-experience-location\">\n                " + workExperienceLocation(we) + "\n              </div>\n            " : '') + "\n\n            <div class=\"codersrank-work-experience-items\">\n              " + we.titles.map(function (title) {
            return (
              /* html */
              "\n              <div\n                class=\"codersrank-work-experience-position " + (we.titles.length > 1 ? 'codersrank-work-experience-position-nested' : '') + "\"\n              >\n                <div class=\"codersrank-work-experience-title\">\n                  " + title.title + "\n                </div>\n\n                " + (we.titles.length > 1 ?
              /* html */
              "\n                <div class=\"codersrank-work-experience-date\">\n                  <div>" + dates(title) + "</div>\n                </div>\n                " : '') + "\n\n                " + (title.description ?
              /* html */
              "\n                <div class=\"codersrank-work-experience-description\">" + sanitizeDescription(title.description) + "</div>\n                " : '') + "\n\n                " + (title.highlighted_technologies || title.other_technologies ?
              /* html */
              "\n                  <div class=\"codersrank-work-experience-tags\">\n                    " + title.highlighted_technologies.map(function (tech) {
                return (
                  /* html */
                  "\n                      <span class=\"codersrank-work-experience-tag\"><span class=\"codersrank-work-experience-tag-star\">\u2605</span>" + tech + "</span>\n                    "
                );
              }).join('') + "\n\n                    " + title.other_technologies.map(function (tech) {
                return (
                  /* html */
                  "\n                      <span class=\"codersrank-work-experience-tag\">" + tech + "</span>\n                    "
                );
              }).join('') + "\n                  </div>\n                " : '') + "\n\n              </div>\n              "
            );
          }).join('') + "\n            </div>\n          </div>\n        </li>\n        "
        );
      }).join('') + "\n      </ul>\n      " + (branding ?
      /* html */
      "\n      <div class=\"codersrank-work-experience-branding\">\n        <a href=\"https://codersrank.io\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <span>Powered by </span>\n          " + codersRankLogo + "\n        </a>\n      </div>\n      " : '') + "\n    </div>\n  "
    );
  };

  var renderError = function renderError() {
    return '';
  };

  var renderLoading = function renderLoading(ctx) {
    return render(_extends({}, ctx, {
      preloader: true,
      data: []
    }));
  };

  var formatData = function formatData(workExperience, maxItems) {
    if (workExperience === void 0) {
      workExperience = [];
    }

    if (maxItems) {
      // eslint-disable-next-line
      workExperience = workExperience.slice(0, maxItems);
    }

    var items = [];
    var companyMapping = {};
    var originalIndex = 0;
    workExperience.forEach(function (job) {
      if (job.company in companyMapping) {
        items[companyMapping[job.company]] = _extends({}, items[companyMapping[job.company]], {
          titles: [].concat(items[companyMapping[job.company]].titles, [{
            originalIndex: originalIndex += 1,
            title: job.title,
            description: job.description,
            start_date: job.start_date,
            end_date: job.end_date,
            location: job.location,
            is_current: job.is_current,
            highlighted_technologies: job.highlighted_technologies,
            other_technologies: job.other_technologies
          }])
        });
      } else {
        items = [].concat(items, [{
          company: job.company,
          company_logo: job.company_logo || job.company_logo,
          titles: [{
            originalIndex: originalIndex += 1,
            title: job.title,
            description: job.description,
            start_date: job.start_date,
            end_date: job.end_date,
            location: job.location,
            is_current: job.is_current,
            highlighted_technologies: job.highlighted_technologies,
            other_technologies: job.other_technologies
          }]
        }]);
        companyMapping[job.company] = items.length - 1;
      }
    });
    return items.map(function (item) {
      return _extends({}, item, {
        titles: item.titles.slice().sort(function (a, b) {
          return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
        })
      });
    }).sort(function (a, b) {
      return new Date(b.titles[0].start_date).getTime() - new Date(a.titles[0].start_date).getTime();
    }).map(function (item) {
      var totalMonths = 0;
      item.titles.forEach(function (title) {
        var end_date = title.is_current ? new Date() : new Date(title.end_date);
        totalMonths += differenceInMonths(new Date(title.start_date), end_date);
      });
      return _extends({}, item, {
        totalMonths: totalMonths
      });
    });
  };

  var COMPONENT_TAG = 'codersrank-work-experience';
  var STATE_IDLE = 0;
  var STATE_LOADING = 1;
  var STATE_ERROR = 2;
  var STATE_SUCCESS = 3; // eslint-disable-next-line

  var STYLES = ":host{--preloader-color:#72a0a8;--logo-size:48px;--logo-margin:16px;--nested-circle-size:12px;--nested-circle-border-width:2px;--nested-circle-opacity:0.25;--nested-line-opacity:0.25;--nested-line-width:2px;--company-font-size:1.15em;--company-font-weight:bold;--company-text-color:inherit;--company-opacity:1;--title-font-size:inherit;--title-font-weight:bold;--title-text-color:inherit;--title-opacity:1;--location-text-color:inherit;--location-opacity:0.55;--location-font-size:inherit;--location-font-weight:inherit;--date-text-color:inherit;--date-opacity:0.55;--date-font-size:inherit;--date-font-weight:inherit;--description-font-size:inherit;--description-font-weight:inherit;--description-text-color:inherit;--description-opacity:1;--tag-border:none;--tag-star-color:#ff9900;--tag-bg-color:rgba(0, 0, 100, 0.075);--tag-font-size:0.85em;--tag-font-weight:bold;--tag-padding:0.35em 0.57em;--tag-margin:0.28em;--tag-border-radius:4px;--tag-text-color:inherit;--item-spacing:2em;--item-border-radius:0px;--item-border:none;--item-padding:0px;--item-bg-color:0px;--grid-columns:1;--branding-text-color:inherit;width:100%;display:block;position:relative}.codersrank-work-experience{position:relative}.codersrank-work-experience-loading{height:100px}.codersrank-work-experience-preloader{position:absolute;left:50%;top:50%;width:32px;height:32px;margin:-16px 0 0 -16px;border:3px solid var(--preloader-color);border-left-color:transparent;border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;-webkit-animation:preloader 1s infinite linear;animation:preloader 1s infinite linear}.codersrank-work-experience ul,.codersrank-work-experience-item{list-style:none;margin:0;padding:0}.codersrank-work-experience li+li{margin-top:var(--item-spacing)}.codersrank-work-experience-grid ul{display:grid;grid-template-columns:repeat(var(--grid-columns),1fr);-moz-column-gap:var(--item-spacing);column-gap:var(--item-spacing);row-gap:var(--item-spacing)}.codersrank-work-experience-grid li+li{margin:0}.codersrank-work-experience-item{display:flex;align-items:flex-start;justify-content:space-between;border-radius:var(--item-border-radius);border:var(--item-border);padding:var(--item-padding);background-color:var(--item-bg-color)}.codersrank-work-experience-content-wrap{min-width:0;width:100%;flex-shrink:10}.codersrank-work-experience-logo{width:var(--logo-size);height:var(--logo-size);margin-right:var(--logo-margin);display:flex;justify-content:center;align-items:center}.codersrank-work-experience-logo img,.codersrank-work-experience-logo svg{width:auto;height:auto;max-width:100%;max-height:100%}.codersrank-work-experience-logo svg{width:100%}.codersrank-work-experience-company{font-size:var(--company-font-size);font-weight:var(--company-font-weight);color:var(--company-text-color);opacity:var(--company-opacity)}.codersrank-work-experience-date{font-size:var(--date-font-size);font-weight:var(--date-font-weight);color:var(--date-text-color);opacity:var(--date-opacity)}.codersrank-work-experience-location{font-size:var(--location-font-size);font-weight:var(--location-font-weight);color:var(--location-text-color);opacity:var(--location-opacity)}.codersrank-work-experience-title{font-size:var(--title-font-size);font-weight:var(--title-font-weight);color:var(--title-text-color);opacity:var(--title-opacity)}.codersrank-work-experience-description{font-size:var(--description-font-size);font-weight:var(--description-font-weight);color:var(--description-text-color);opacity:var(--description-opacity)}.codersrank-work-experience-position{margin-top:1em}.codersrank-work-experience-position-nested{position:relative;--center:calc(var(--logo-size) / 2 - var(--logo-size) - var(--logo-margin))}.codersrank-work-experience-position-nested:before{content:'';position:absolute;left:var(--center);top:.71em;width:var(--nested-circle-size);height:var(--nested-circle-size);border-radius:50%;border:var(--nested-circle-border-width) solid currentColor;box-sizing:border-box;margin-left:calc(-1 * var(--nested-circle-size)/ 2);margin-top:calc(-1 * var(--nested-circle-size)/ 2);opacity:var(--nested-circle-opacity)}.codersrank-work-experience-position-nested:after{position:absolute;left:var(--center);top:calc(.71em + var(--nested-circle-size)/ 2 + 10px);content:'';width:var(--nested-line-width);margin-left:calc(-1 * var(--nested-line-width)/ 2);height:calc(100% - var(--nested-circle-size) - 10px);box-sizing:border-box;background-color:currentColor;opacity:var(--nested-line-opacity)}.codersrank-work-experience-position-nested:last-child:after{display:none}.codersrank-work-experience-tags{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;margin-top:.5em}.codersrank-work-experience-tag{display:inline-flex;padding:var(--tag-padding);font-size:var(--tag-font-size);background:var(--tag-bg-color);border-radius:var(--tag-border-radius);font-weight:var(--tag-font-weight);line-height:1;margin-right:var(--tag-margin);margin-bottom:var(--tag-margin);border:var(--tag-border);color:var(--tag-text-color)}.codersrank-work-experience-tag-star{color:var(--tag-star-color);margin-right:4px}.codersrank-work-experience-no-logos{--logo-size:var(--nested-circle-size)}.codersrank-work-experience-no-logos .codersrank-work-experience-position-nested{margin-left:calc(var(--nested-circle-size) + 16px)}.codersrank-work-experience-branding{justify-content:flex-end;align-items:center;font-size:12px;color:var(--branding-text-color);display:flex;margin-top:.5em}.codersrank-work-experience-branding a{opacity:.5;display:flex;align-items:center;color:inherit;text-decoration:none;transition-duration:.2s;position:relative;z-index:1;transform:translate3d(0,0,0)}.codersrank-work-experience-branding a:hover{opacity:1}.codersrank-work-experience-branding span{margin-right:4px}.codersrank-work-experience-branding svg{height:16px;width:auto}@-webkit-keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"; // eslint-disable-next-line

  var CodersrankWorkExperience = /*#__PURE__*/function (_HTMLElement) {
    _inheritsLoose(CodersrankWorkExperience, _HTMLElement);

    function CodersrankWorkExperience() {
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

    var _proto = CodersrankWorkExperience.prototype;

    _proto.render = function render$1() {
      var username = this.username,
          mounted = this.mounted,
          state = this.state,
          shadowEl = this.shadowEl,
          data = this.data,
          logos = this.logos,
          grid = this.grid,
          branding = this.branding;
      var ctx = {
        data: data,
        logos: logos,
        grid: grid,
        branding: branding
      };
      if (!username || !mounted) return;

      if (state === STATE_SUCCESS) {
        this.tempDiv.innerHTML = render(ctx);
      } else if (state === STATE_ERROR) {
        this.tempDiv.innerHTML = renderError();
      } else if (state === STATE_IDLE || state === STATE_LOADING) {
        this.tempDiv.innerHTML = renderLoading(ctx);
      }

      var widgetEl = shadowEl.querySelector('.codersrank-work-experience');

      if (widgetEl) {
        widgetEl.parentNode.removeChild(widgetEl);
      }

      widgetEl = this.tempDiv.querySelector('.codersrank-work-experience');
      if (!widgetEl) return;
      this.widgetEl = widgetEl;
      shadowEl.appendChild(widgetEl);
    };

    _proto.loadAndRender = function loadAndRender() {
      var _this2 = this;

      var username = this.username;
      this.state = STATE_LOADING;
      this.render();
      fetchData(username).then(function (workExperiences) {
        _this2.data = formatData(workExperiences, _this2.maxItems);
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
      this.width = this.offsetWidth;
      this.mounted = true;
      this.loadAndRender();
    };

    _proto.disconnectedCallback = function disconnectedCallback() {
      this.mounted = false;
    };

    _createClass(CodersrankWorkExperience, [{
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
        var logos = this.getAttribute('logos');
        if (logos === 'true' || logos === '') return true;
        return false;
      },
      set: function set(value) {
        this.setAttribute('logos', value);
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
        return ['username', 'logos', 'grid', 'max-items'];
      }
    }]);

    return CodersrankWorkExperience;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  if (window.customElements && !window.customElements.get(COMPONENT_TAG)) {
    window.customElements.define(COMPONENT_TAG, CodersrankWorkExperience);
  }

})));
//# sourceMappingURL=codersrank-work-experience.js.map
