"use strict";

exports.__esModule = true;
exports.formatScore = formatScore;

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