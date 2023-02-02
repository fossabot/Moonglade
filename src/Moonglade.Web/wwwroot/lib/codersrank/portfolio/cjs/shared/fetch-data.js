"use strict";

exports.__esModule = true;
exports.fetchData = void 0;
var cache = {};

var formatDate = function formatDate(item) {
  if (item.is_current) return new Date();
  return new Date(item.end_date || item.date_to);
};

var fetchData = function fetchData(username) {
  if (cache[username]) return Promise.resolve(cache[username]);
  return fetch("https://api.codersrank.io/v2/users/" + username + "/projects", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    var sortedProjects = data.projects || [];
    sortedProjects.sort(function (p1, p2) {
      var p1endDate = formatDate(p1);
      var p2endDate = formatDate(p2);
      return p2endDate - p1endDate;
    });
    cache[username] = sortedProjects;
    return sortedProjects;
  })["catch"](function (err) {
    // eslint-disable-next-line
    console.error(err);
    return Promise.reject(err);
  });
};

exports.fetchData = fetchData;