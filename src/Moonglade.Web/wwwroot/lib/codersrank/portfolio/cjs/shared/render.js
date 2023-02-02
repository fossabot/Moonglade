"use strict";

exports.__esModule = true;
exports.render = void 0;

var _codersrankLogo = require("./codersrank-logo");

var _logo = require("./logo");

var _sanitizeDescription = require("./sanitize-description");

var render = function render(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      portfolios = _ref.data,
      grid = _ref.grid,
      preloader = _ref.preloader,
      showLogos = _ref.logos,
      showDates = _ref.dates,
      showTitle = _ref.title,
      showDescription = _ref.description,
      showCompany = _ref.company,
      showSkills = _ref.skills,
      showLinks = _ref.links,
      branding = _ref.branding;

  var formatDate = function formatDate(date) {
    if (!date) return '';
    var formatter = Intl.DateTimeFormat('en', {
      month: 'short',
      year: 'numeric'
    });
    return formatter.format(new Date(date));
  };

  var dates = function dates(item) {
    var startDate = formatDate(item.start_date || item.date_from);
    var endDate = item.is_current ? 'Present' : formatDate(item.end_date || item.date_to);
    return startDate + " - " + endDate;
  }; // prettier-ignore


  return (
    /* html */
    "\n    <div class=\"codersrank-portfolio " + (grid ? 'codersrank-portfolio-grid' : '') + " " + (!showLogos ? 'codersrank-portfolio-no-logos' : '') + " " + (preloader ? 'codersrank-portfolio-loading' : '') + "\">\n      " + (preloader ?
    /* html */
    "\n      <div class=\"codersrank-portfolio-preloader\"></div>\n      " : '') + "\n      <ul>\n        " + portfolios.map(function (portfolio) {
      return (
        /* html */
        "\n        <li class=\"codersrank-portfolio-item\">\n          " + (showLogos ?
        /* html */
        "\n          <div class=\"codersrank-portfolio-logo\">\n            " + (0, _logo.logo)(portfolio.project_title, portfolio.image) + "\n          </div>\n          " : '') + "\n          <div class=\"codersrank-portfolio-content\">\n            " + (showTitle && portfolio.project_title ?
        /* html */
        "\n            <div class=\"codersrank-portfolio-title\">\n              " + portfolio.project_title + "\n            </div>\n            " : '') + "\n\n            " + (showDates && dates(portfolio) ?
        /* html */
        "\n            <div class=\"codersrank-portfolio-date\">\n              " + dates(portfolio) + "\n            </div>\n            " : '') + "\n\n            " + (showCompany && portfolio.company ?
        /* html */
        "\n            <div class=\"codersrank-portfolio-company\">\n              " + portfolio.company + "\n            </div>\n            " : '') + "\n\n            " + (showDescription && portfolio.description ?
        /* html */
        "\n            <div class=\"codersrank-portfolio-description\">\n              " + (0, _sanitizeDescription.sanitizeDescription)(portfolio.description) + "\n            </div>\n            " : '') + "\n\n            " + (showSkills && (portfolio.highlighted_technologies || portfolio.other_technologies) ?
        /* html */
        "\n              <div class=\"codersrank-portfolio-tags\">\n                " + (portfolio.highlighted_technologies || []).map(function (tech) {
          return (
            /* html */
            "\n                  <span class=\"codersrank-portfolio-tag\"><span class=\"codersrank-portfolio-tag-star\">\u2605</span>" + tech + "</span>\n                "
          );
        }).join('') + "\n\n                " + (portfolio.other_technologies || []).map(function (tech) {
          return (
            /* html */
            "\n                  <span class=\"codersrank-portfolio-tag\">" + tech + "</span>\n                "
          );
        }).join('') + "\n              </div>\n            " : '') + "\n\n            " + (showLinks && (portfolio.link_to_project || portfolio.link_to_source_code) ?
        /* html */
        "\n            <div class=\"codersrank-portfolio-links\">\n              " + (portfolio.link_to_project ?
        /* html */
        "\n              <a href=\"" + portfolio.link_to_project + "\" target=\"_blank\" rel=\"noopener noreferrer\">Demo</a>\n              " : '') + "\n              " + (portfolio.link_to_source_code ?
        /* html */
        "\n              <a href=\"" + portfolio.link_to_source_code + "\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a>\n              " : '') + "\n            </div>\n            " : '') + "\n          </div>\n        </li>\n        "
      );
    }).join('') + "\n      </ul>\n      " + (branding ?
    /* html */
    "\n      <div class=\"codersrank-portfolio-branding\">\n        <a href=\"https://codersrank.io\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <span>Powered by </span>\n          " + _codersrankLogo.codersRankLogo + "\n        </a>\n      </div>\n      " : '') + "\n    </div>\n  "
  );
};

exports.render = render;