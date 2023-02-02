"use strict";

exports.__esModule = true;
exports.render = void 0;

var _codersrankLogo = require("./codersrank-logo");

var _companyLogo = require("./company-logo");

var _differenceInMonths = require("./difference-in-months");

var _sanitizeDescription = require("./sanitize-description");

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
    return (0, _differenceInMonths.differenceInMonths)(new Date(startDate), end);
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
        "\n          <div class=\"codersrank-work-experience-logo\">\n            " + (0, _companyLogo.companyLogo)(we.company, we.company_logo) + "\n          </div>\n          " : '') + "\n          <div class=\"codersrank-work-experience-content-wrap\">\n            <div class=\"codersrank-work-experience-company\">\n              " + we.company + "\n            </div>\n            <div class=\"codersrank-work-experience-date\">\n              " + (we.titles.length > 1 ? formatInterval(we.totalMonths) : dates(we.titles[0])) + "\n            </div>\n\n            " + (workExperienceLocation(we) ?
        /* html */
        "\n              <div class=\"codersrank-work-experience-location\">\n                " + workExperienceLocation(we) + "\n              </div>\n            " : '') + "\n\n            <div class=\"codersrank-work-experience-items\">\n              " + we.titles.map(function (title) {
          return (
            /* html */
            "\n              <div\n                class=\"codersrank-work-experience-position " + (we.titles.length > 1 ? 'codersrank-work-experience-position-nested' : '') + "\"\n              >\n                <div class=\"codersrank-work-experience-title\">\n                  " + title.title + "\n                </div>\n\n                " + (we.titles.length > 1 ?
            /* html */
            "\n                <div class=\"codersrank-work-experience-date\">\n                  <div>" + dates(title) + "</div>\n                </div>\n                " : '') + "\n\n                " + (title.description ?
            /* html */
            "\n                <div class=\"codersrank-work-experience-description\">" + (0, _sanitizeDescription.sanitizeDescription)(title.description) + "</div>\n                " : '') + "\n\n                " + (title.highlighted_technologies || title.other_technologies ?
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
    "\n      <div class=\"codersrank-work-experience-branding\">\n        <a href=\"https://codersrank.io\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <span>Powered by </span>\n          " + _codersrankLogo.codersRankLogo + "\n        </a>\n      </div>\n      " : '') + "\n    </div>\n  "
  );
};

exports.render = render;