"use strict";

exports.__esModule = true;
exports.companyLogo = void 0;

var _stringToColor = require("./string-to-color");

var companyLogo = function companyLogo(name, url) {
  var iconColor = (0, _stringToColor.stringToColor)(name || ''); // prettier-ignore

  return url ?
  /* html */
  "\n    <img src=\"" + url + "\" alt=\"" + name + "\" title=\"" + name + "\" />\n  " :
  /* html */
  "\n    <svg title=\"" + name + "\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n      <rect width=\"32\" height=\"32\" fill=\"" + iconColor + "\" rx=\"3\" />\n      " + (name ?
  /* html */
  "\n      <text\n        x=\"50%\"\n        y=\"50%\"\n        font-weight=\"bold\"\n        font-size=\"20\"\n        fill=\"#fff\"\n        dy=\"0\"\n        text-anchor=\"middle\"\n        dominant-baseline=\"middle\"\n      >\n        " + name[0].toUpperCase() + "\n      </text>\n      " : '') + "\n\n    </svg>\n  ";
};

exports.companyLogo = companyLogo;