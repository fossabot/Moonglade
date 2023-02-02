"use strict";

exports.__esModule = true;
exports.renderChart = void 0;

var _codersrankLogo = require("./codersrank-logo");

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
    "\n      <div class=\"codersrank-activity-branding\">\n        <a href=\"https://codersrank.io\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <span>Powered by </span>\n          " + _codersrankLogo.codersrRankLogo + "\n        </a>\n      </div>\n      " : '') + "\n    </div>\n  "
  );
};

exports.renderChart = renderChart;