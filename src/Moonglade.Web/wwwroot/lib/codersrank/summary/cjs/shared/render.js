"use strict";

exports.__esModule = true;
exports.render = void 0;

var _codersrankLogo = require("./codersrank-logo");

var _formatScore = require("./format-score");

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
    "\n      <div class=\"codersrank-summary-avatar\" " + (avatar_url ? "style=\"background-image: url(" + avatar_url + ")\"" : '') + "></div>\n      " : '') + "\n      <div class=\"codersrank-summary-head-content\">\n        <div class=\"codersrank-summary-head-name\">" + (fullName || username) + "</div>\n        <div class=\"codersrank-summary-head-rank\"><b>Top " + percentage + "%</b> in Worldwide</div>\n        <div class=\"codersrank-summary-head-rank\"><b>" + (0, _formatScore.formatScore)(total_score) + "</b> CodersRank score</div>\n      </div>\n    </div>\n    " : '') + "\n    " + (badgesData.length ?
    /* html */
    "\n    <div class=\"codersrank-summary-badges\">\n      " + badgesData.map(renderBadge).join('') + "\n    </div>\n    " : '') + "\n  </" + tag + ">\n  " + (branding ?
    /* html */
    "\n  <div class=\"codersrank-summary-branding\">\n    <a href=\"https://codersrank.io\" target=\"_blank\" rel=\"noopener noreferrer\">\n      <span>Powered by </span>\n      " + _codersrankLogo.codersrRankLogo + "\n    </a>\n  </div>\n  " : '') + "\n"
  );
};

exports.render = render;