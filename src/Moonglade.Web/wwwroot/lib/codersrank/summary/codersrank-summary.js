/**
 * Codersrank Summary Widget 0.9.13
 * undefined
 * https://github.com/codersrank-org/summary-widget#readme
 *
 * Copyright 2020-2022 CodersRank Ltd.
 *
 * Released under the MIT License
 *
 * Released on: August 25, 2022
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
    if (cache[username]) return Promise.resolve(cache[username]);
    if (id && cache[id]) return Promise.resolve(cache[id]);
    var endpoint = "https://api.codersrank.io/v2/users/" + (username || id) + "/";
    if (id) endpoint += '?get_by=id';
    var badgesEndpoint = "https://api.codersrank.io/v2/users/" + (username || id) + "/badges";
    if (id) badgesEndpoint += '?get_by=id';

    var getUser = function getUser() {
      return fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      });
    };

    var getBadges = function getBadges() {
      return fetch(badgesEndpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      });
    };

    return Promise.all([getUser(), getBadges()]).then(function (_ref) {
      var user = _ref[0],
          badges = _ref[1];

      // eslint-disable-next-line
      var data = _extends({}, user, badges);

      if (id) {
        cache[id] = data;
      } else {
        cache[username] = data;
      }

      return data;
    })["catch"](function (err) {
      // eslint-disable-next-line
      console.error(err);
      return Promise.reject(err);
    });
  };

  var codersrRankLogo = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"258\" height=\"39\" viewBox=\"0 0 258 39\"><path fill=\"#19223C\" d=\"M71.358 27.687A8.076 8.076 0 0 1 69 21.999c0-2.122.846-4.162 2.358-5.687a8.022 8.022 0 0 1 2.664-1.688 8.175 8.175 0 0 1 3.126-.543 8.298 8.298 0 0 1 4.723 1.339 7.155 7.155 0 0 1 2.895 3.791H80.12a3 3 0 0 0-1.182-1.283 3.106 3.106 0 0 0-1.713-.427 4.128 4.128 0 0 0-1.694.264 4.046 4.046 0 0 0-1.43.926 5.197 5.197 0 0 0-1.133 3.234c0 1.17.399 2.309 1.134 3.234.403.405.89.72 1.43.926a4.128 4.128 0 0 0 1.693.264c.586.039 1.17-.087 1.684-.364a3.01 3.01 0 0 0 1.211-1.198h4.571a7.156 7.156 0 0 1-2.895 3.792 8.298 8.298 0 0 1-4.723 1.338 8.173 8.173 0 0 1-3.085-.557 8.02 8.02 0 0 1-2.629-1.673zM88.652 27.687a8.076 8.076 0 0 1-2.359-5.688c0-2.122.846-4.162 2.359-5.687a8.57 8.57 0 0 1 5.79-2.238c2.15 0 4.221.8 5.79 2.238a8.076 8.076 0 0 1 2.358 5.687 8.076 8.076 0 0 1-2.359 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 98.623 22c0-1.17-.4-2.308-1.134-3.234a4.398 4.398 0 0 0-3.048-1.219c-1.14 0-2.234.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.048-1.219zM110.592 14.304a9.126 9.126 0 0 1 6.247 2.156 7.73 7.73 0 0 1 1.8 2.546 7.573 7.573 0 0 1 0 6.06 7.73 7.73 0 0 1-1.8 2.546 9.049 9.049 0 0 1-6.247 2.156h-5.561V14.304h5.561zm-1.752 12.64h1.752a4.596 4.596 0 0 0 1.903-.295 4.504 4.504 0 0 0 1.602-1.044 4.909 4.909 0 0 0 1.295-3.569 4.909 4.909 0 0 0-1.295-3.568 4.504 4.504 0 0 0-1.602-1.044 4.595 4.595 0 0 0-1.903-.294h-1.752v9.813zM131.313 14.23v2.9h-5.714v3.345h5.104v2.9H125.6v3.568h5.714v2.9h-9.599V14.23zM138.55 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32h-4.418l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM155.158 17.055a1.86 1.86 0 0 0-1.22.372c-.159.138-.284.311-.363.505-.08.193-.111.402-.093.61a1.528 1.528 0 0 0 .457 1.115c.32.31.712.539 1.143.67l1.523.445 1.676.52 1.524.744c.487.317.881.753 1.143 1.264.31.6.466 1.262.457 1.933a4.227 4.227 0 0 1-.45 1.859 4.333 4.333 0 0 1-1.226 1.487 6.424 6.424 0 0 1-4.343 1.412 6.899 6.899 0 0 1-4.342-1.263 4.331 4.331 0 0 1-1.278-1.588 4.223 4.223 0 0 1-.398-1.981h4.114c-.012.253.032.507.128.742.097.236.244.449.431.625a1.87 1.87 0 0 0 1.421.492c.475.02.94-.14 1.296-.447a1.382 1.382 0 0 0 .457-1.115 1.455 1.455 0 0 0-.457-1.115 2.986 2.986 0 0 0-1.143-.669l-1.524-.446-1.676-.52-1.523-.744a3.148 3.148 0 0 1-1.143-1.264 4 4 0 0 1-.305-1.859 4.15 4.15 0 0 1 .407-1.944 4.258 4.258 0 0 1 1.27-1.55 6.582 6.582 0 0 1 4.19-1.338 6.982 6.982 0 0 1 4.113 1.115 4.33 4.33 0 0 1 1.278 1.588c.292.62.428 1.299.398 1.98h-4.19a2.056 2.056 0 0 0-.533-1.263 1.611 1.611 0 0 0-1.22-.372zM168.261 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32H172.3l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM189.592 29.768l-.914-2.602h-5.714l-.914 2.602h-4.114l5.485-15.538h4.723l5.485 15.538h-4.037zm-5.638-5.501h3.733l-1.828-5.428-1.905 5.428zM205.972 14.23h3.885v15.538h-3.885l-6.476-9.813v9.813h-3.885V14.23h3.885l6.476 9.814zM217.093 29.768h-3.885V14.304h3.885v6.766l5.257-6.766h5.104l-6.552 7.732 6.552 7.732h-4.952l-5.333-6.84zM232.863 27.761a1.98 1.98 0 0 1-.5 1.253 2.07 2.07 0 0 1-1.197.664 2.1 2.1 0 0 1-1.359-.222 2.024 2.024 0 0 1-.91-1.01 1.962 1.962 0 0 1-.054-1.342c.141-.44.433-.82.827-1.076a2.096 2.096 0 0 1 2.583.246c.201.194.359.426.464.682.105.256.154.53.146.805z\"></path> <path fill=\"#67a4ac\" d=\"M235.301 29.768V14.304h3.885v15.464zM244.062 27.687a8.076 8.076 0 0 1-2.358-5.688c0-2.122.846-4.162 2.358-5.687a8.57 8.57 0 0 1 5.79-2.238c2.151 0 4.222.8 5.79 2.238A8.076 8.076 0 0 1 258 21.999a8.076 8.076 0 0 1-2.358 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 254.033 22c0-1.17-.399-2.308-1.134-3.234a4.398 4.398 0 0 0-3.047-1.219c-1.14 0-2.235.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.047-1.219z\"></path> <path d=\"M33.25.054L2.147 19.634C.682 20.52-.034 21.512.001 22.611v2.98c.035 1.1.768 2.075 2.2 2.926l15.393 8.885a.726.726 0 0 0 1.047-.373l3.456-8.352-7.33-4.15a1.317 1.317 0 0 1-.514-.477 1.346 1.346 0 0 1 .461-1.864l13.457-8.247L33.72.427a.324.324 0 0 0-.103-.36.31.31 0 0 0-.369-.013z\" fill=\"#19223c\"></path> <path d=\"M58.8 10.961L43.618 1.757a.726.726 0 0 0-1.047.32l-3.56 8.352 7.225 4.31c.208.113.381.282.502.488a1.347 1.347 0 0 1 0 1.363 1.318 1.318 0 0 1-.502.49l-13.561 7.98-5.76 13.407a.323.323 0 0 0 .026.452.312.312 0 0 0 .445-.026l9.949-6.012 3.927 5.64a.947.947 0 0 0 .785.425h9.425a.932.932 0 0 0 .832-.506.97.97 0 0 0-.047-.984l-6.388-9.79 12.933-7.82c1.466-.887 2.199-1.88 2.199-2.98V13.94c0-1.1-.733-2.092-2.2-2.979z\" fill=\"#67a4ac\"></path></svg>";

  function round(num) {
    return Math.round(num * 10) / 10;
  }

  var formatter = window.Intl && window.Intl.NumberFormat ? Intl.NumberFormat('en', {
    minimumFractionDigits: 1
  }) : {
    format: function format(num) {
      return num;
    }
  };
  function formatScore(score) {
    return formatter.format ? formatter.format(round(score)) : round(score);
  }

  /* eslint-disable camelcase */
  var render = function render(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        data = _ref.data,
        username = _ref.username,
        layout = _ref.layout,
        badgesData = _ref.badgesData,
        badgesLayout = _ref.badgesLayout,
        showAvatar = _ref.showAvatar,
        showHeader = _ref.showHeader,
        loading = _ref.loading,
        branding = _ref.branding;

    var isNotRegistered = data && (data.status === 'not_found' || data.status === 'generated');
    var isPlaceholder = loading || isNotRegistered;
    var first_name = data.first_name,
        last_name = data.last_name,
        avatar_url = data.avatar_url,
        total_users = data.total_users,
        position = data.position,
        total_score = data.total_score;
    if (isNotRegistered) return '';
    var fullName = [first_name, last_name].filter(function (l) {
      return !!l;
    }).join(' ');
    var percentage = Math.min(Math.max(Math.ceil(position / total_users * 100), 1), 100);
    var tag = loading || isNotRegistered ? 'div' : 'a';
    var linkAttrs = loading || isNotRegistered ? '' : "href=\"https://profile.codersrank.io/user/" + username + "?utm_source=users&utm_medium=banner&utm_campaign=embedded_widget\" rel=\"noreferrer noopener\" target=\"_blank\" title=\"Visit " + username + "'s CodersRank profile\"";

    var badgeSeniorityLabel = function badgeSeniorityLabel(label) {
      return label.split('').map(function (_char, index) {
        if (_char === _char.toUpperCase() && index !== 0) return " " + _char;
        return _char;
      }).join('');
    };

    var badgeStreakLabel = function badgeStreakLabel(label) {
      return label.split('').map(function (_char2, index) {
        if (_char2 === _char2.toUpperCase() && index !== 0) return " " + _char2;
        return _char2;
      }).join('');
    }; // prettier-ignore


    var renderBadge = function renderBadge(badge) {
      if (badge.version === 'v1') {
        return (
          /* html */
          "\n        <div class=\"codersrank-summary-badge codersrank-summary-badge-v1\">\n          <div class=\"codersrank-summary-badge-rank\">Top " + badge.rank + "</div>\n          <div class=\"codersrank-summary-badge-technology\">\n            <div class=\"codersrank-summary-badge-technology-logo\">\n              <img src=\"https://icon-widget.codersrank.io/api/" + encodeURIComponent(badge.language) + "\"/>\n            </div>\n            <span class=\"codersrank-summary-badge-name\">" + badge.language + "</span>\n          </div>\n          <div class=\"codersrank-summary-badge-location\">" + badge.location + "</div>\n        </div>\n      "
        );
      }

      if (badge.version === 'v2' && badge.badgeFamily === 'Seniority') {
        return (
          /* html */
          "\n        <div class=\"codersrank-summary-badge codersrank-summary-badge-v2 codersrank-summary-badge-" + badge.badgeFamily.toLowerCase() + "\">\n          <div class=\"codersrank-summary-badge-image\">\n            <img src=\"https://profile.codersrank.io/static/badgesV2/" + badge.badgeFamily + "/" + badge.badgeType + ".svg\" />\n          </div>\n          <div class=\"codersrank-summary-badge-label\">" + badgeSeniorityLabel(badge.badgeType) + "</div>\n          <div class=\"codersrank-summary-badge-technology\">\n            <div class=\"codersrank-summary-badge-technology-logo\">\n              <img src=\"https://icon-widget.codersrank.io/api/" + encodeURIComponent(badge.language) + "\"/>\n            </div>\n            <span class=\"codersrank-summary-badge-name\">" + badge.language + "</span>\n          </div>\n        </div>\n      "
        );
      }

      if (badge.version === 'v2' && badge.badgeFamily === 'Streak') {
        return (
          /* html */
          "\n        <div class=\"codersrank-summary-badge codersrank-summary-badge-v2 codersrank-summary-badge-" + badge.badgeFamily.toLowerCase() + "\">\n          <div class=\"codersrank-summary-badge-image\">\n            <img src=\"https://profile.codersrank.io/static/badgesV2/" + badge.badgeFamily + "/" + badge.badgeType + ".svg\" />\n          </div>\n          <div class=\"codersrank-summary-badge-days\">days</div>\n          <div class=\"codersrank-summary-badge-label\">" + badgeStreakLabel(badge.badgeType) + "</div>\n        </div>\n      "
        );
      }

      return '';
    }; // prettier-ignore


    return (
      /* html */
      "\n    <" + tag + " " + linkAttrs + " class=\"codersrank-summary codersrank-summary-" + layout + " codersrank-summary-badges-" + badgesLayout + " " + (isPlaceholder ? ' codersrank-summary-placeholder' : '') + "\">\n    " + (loading ? "<div class=\"codersrank-summary-preloader\"></div>" : '') + "\n    " + (!loading && isNotRegistered ? "\n      <div class=\"codersrank-summary-not-found\">User not found</div>\n    " : '') + "\n    " + (showHeader ?
      /* html */
      "\n    <div class=\"codersrank-summary-head" + (!badgesData.length ? ' codersrank-summary-head-only' : '') + "\">\n      " + (showAvatar ?
      /* html */
      "\n      <div class=\"codersrank-summary-avatar\" " + (avatar_url ? "style=\"background-image: url(" + avatar_url + ")\"" : '') + "></div>\n      " : '') + "\n      <div class=\"codersrank-summary-head-content\">\n        <div class=\"codersrank-summary-head-name\">" + (fullName || username) + "</div>\n        <div class=\"codersrank-summary-head-rank\"><b>Top " + percentage + "%</b> in Worldwide</div>\n        <div class=\"codersrank-summary-head-rank\"><b>" + formatScore(total_score) + "</b> CodersRank score</div>\n      </div>\n    </div>\n    " : '') + "\n    " + (badgesData.length ?
      /* html */
      "\n    <div class=\"codersrank-summary-badges\">\n      " + badgesData.map(renderBadge).join('') + "\n    </div>\n    " : '') + "\n  </" + tag + ">\n  " + (branding ?
      /* html */
      "\n  <div class=\"codersrank-summary-branding\">\n    <a href=\"https://codersrank.io\" target=\"_blank\" rel=\"noopener noreferrer\">\n      <span>Powered by </span>\n      " + codersrRankLogo + "\n    </a>\n  </div>\n  " : '') + "\n"
    );
  };

  var renderError = function renderError() {
    return '';
  };

  var renderLoading = function renderLoading(ctx) {
    return render(_extends({}, ctx, {
      loading: true
    }));
  };

  var dummyProfile = {
    first_name: 'Placeholder',
    last_name: 'Name',
    avatar_url: '',
    country: 'Placeholder',
    total_users: 100,
    position: 1,
    total_score: 5000,
    badges: [{
      language: 'HTML',
      visibility: 'highlighted',
      rank: 1,
      location_name: 'World',
      version: 'v1'
    }, {
      language: 'JavaScript',
      visibility: 'highlighted',
      rank: 1,
      location_name: 'World',
      version: 'v1'
    }, {
      language: 'CSS',
      visibility: 'highlighted',
      rank: 1,
      location_name: 'World',
      version: 'v1'
    }]
  };

  var formatBadges = function formatBadges(_ref) {
    var profileData = _ref.data,
        maxBadges = _ref.badges,
        loading = _ref.loading;
    var data = profileData || dummyProfile;

    if (loading) {
      data = dummyProfile;
    }
    /* eslint-disable */


    var result = (data.badges || []).filter(function (badge) {
      return badge.visibility === 'highlighted';
    }).map(function (_ref2) {
      var language = _ref2.language,
          rank = _ref2.rank,
          location_name = _ref2.location_name,
          version = _ref2.version,
          badgeFamily = _ref2.badgeFamily,
          badgeType = _ref2.badgeType,
          values = _ref2.values;
      return {
        language: language || values.language,
        rank: rank,
        location: location_name,
        version: version,
        badgeFamily: badgeFamily,
        badgeType: badgeType
      };
    }).slice(0, maxBadges);
    /* eslint-enable */

    result.sort(function (a, b) {
      if (b.version === 'v1' && a.version === 'v2') return -1;
      return 0;
    });
    var filtered = result.filter(function (badge) {
      if (badge.version === 'v2') {
        return badge.badgeFamily === 'Seniority' || badge.badgeFamily === 'Streak';
      }

      return true;
    });
    return filtered;
  };

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

    _proto.render = function render$1() {
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
        data: data || dummyProfile,
        layout: layout,
        badgesData: badgesData,
        badgesLayout: badgesLayout,
        showAvatar: showAvatar,
        showHeader: showHeader,
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
      fetchData(username, id).then(function (data) {
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
        return formatBadges({
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

  if (window.customElements && !window.customElements.get('codersrank-summary')) {
    window.customElements.define('codersrank-summary', CodersrankSummary);
  }

  if (window.customElements && !window.customElements.get('codersrank-widget')) {
    window.customElements.define('codersrank-widget', CodersrankWidget);
  }

})));
//# sourceMappingURL=codersrank-summary.js.map
