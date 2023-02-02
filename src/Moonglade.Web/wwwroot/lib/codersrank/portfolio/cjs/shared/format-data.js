"use strict";

exports.__esModule = true;
exports.formatData = void 0;

var formatData = function formatData(portfolioData, maxItems) {
  if (portfolioData === void 0) {
    portfolioData = [];
  }

  var portfolio = portfolioData || [];

  if (maxItems) {
    portfolio = portfolioData.slice(0, maxItems);
  }

  return portfolio;
};

exports.formatData = formatData;