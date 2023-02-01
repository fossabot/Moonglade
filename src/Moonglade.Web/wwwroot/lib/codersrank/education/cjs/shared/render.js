"use strict";

exports.__esModule = true;
exports.render = void 0;

var _codersrankLogo = require("./codersrank-logo");

var _sanitizeDescription = require("./sanitize-description");

var render = function render(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$data = _ref.data,
      _ref$data$education = _ref$data.education,
      education = _ref$data$education === void 0 ? [] : _ref$data$education,
      _ref$data$certificate = _ref$data.certificates,
      certificates = _ref$data$certificate === void 0 ? [] : _ref$data$certificate,
      grid = _ref.grid,
      preloader = _ref.preloader,
      showEducation = _ref.education,
      showCertificates = _ref.certificates,
      certificationLink = _ref.certificationLink,
      certificationLinkText = _ref.certificationLinkText,
      educationSectionTitle = _ref.educationSectionTitle,
      certificatesSectionTitle = _ref.certificatesSectionTitle,
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
    "\n    <div class=\"codersrank-education " + (preloader ? 'codersrank-education-loading' : '') + "\">\n      " + (preloader ?
    /* html */
    "\n      <div class=\"codersrank-education-preloader\"></div>\n      " : '') + "\n      " + (education.length > 0 && showEducation ?
    /* html */
    "\n\n      " + (educationSectionTitle ?
    /* html */
    "\n      <div class=\"codersrank-education-section-title\">" + educationSectionTitle + "</div>\n      " : '') + "\n      <ul " + (grid ? 'class="codersrank-education-grid"' : '') + ">\n        " + education.map(function (item) {
      return (
        /* html */
        "\n        <li class=\"codersrank-education-item\">\n            " + (item.name ?
        /* html */
        "\n            <div class=\"codersrank-education-title\">\n              " + item.name + "\n            </div>\n            " : '') + "\n\n            " + (item.degree || item.field_of_study ?
        /* html */
        "\n            <div class=\"codersrank-education-details\">\n              " + [item.degree, item.field_of_study].filter(function (el) {
          return !!el;
        }).join(', ') + "\n            </div>\n            " : '') + "\n\n            " + (dates(item) ?
        /* html */
        "\n            <div class=\"codersrank-education-date\">\n              " + dates(item) + "\n            </div>\n            " : '') + "\n\n            " + (item.description ?
        /* html */
        "\n            <div class=\"codersrank-education-description\">\n              " + (0, _sanitizeDescription.sanitizeDescription)(item.description) + "\n            </div>\n            " : '') + "\n        </li>\n        "
      );
    }).join('') + "\n      </ul>\n      " : '') + "\n      " + (certificates.length > 0 && showCertificates ?
    /* html */
    "\n      " + (certificatesSectionTitle ?
    /* html */
    "\n      <div class=\"codersrank-education-section-title\">" + certificatesSectionTitle + "</div>\n      " : '') + "\n      <ul " + (grid ? 'class="codersrank-education-grid"' : '') + ">\n        " + certificates.map(function (item) {
      return (
        /* html */
        "\n        <li class=\"codersrank-education-item\">\n            " + (item.organization ?
        /* html */
        "\n            <div class=\"codersrank-education-title\">\n              " + item.organization + "\n            </div>\n            " : '') + "\n\n            " + (item.name ?
        /* html */
        "\n            <div class=\"codersrank-education-details\">\n              " + item.name + "\n            </div>\n            " : '') + "\n\n            " + (item.date ?
        /* html */
        "\n            <div class=\"codersrank-education-date\">\n              " + formatDate(item.date) + "\n            </div>\n            " : '') + "\n\n            " + (item.certificationID ?
        /* html */
        "\n            <div class=\"codersrank-education-description\">\n              " + item.certificationID + "\n            </div>\n            " : '') + "\n            " + (item.certificationURL && certificationLink ?
        /* html */
        "\n            <div class=\"codersrank-education-certificate-link\">\n              <a href=\"" + item.certificationURL + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + certificationLinkText + "</a>\n            </div>\n            " : '') + "\n        </li>\n        "
      );
    }).join('') + "\n      </ul>\n      " : '') + "\n      " + (branding ?
    /* html */
    "\n      <div class=\"codersrank-education-branding\">\n        <a href=\"https://codersrank.io\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <span>Powered by </span>\n          " + _codersrankLogo.codersRankLogo + "\n        </a>\n      </div>\n      " : '') + "\n    </div>\n  "
  );
};

exports.render = render;