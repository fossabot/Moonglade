function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var cache = {};
export var fetchData = function fetchData(username, id) {
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