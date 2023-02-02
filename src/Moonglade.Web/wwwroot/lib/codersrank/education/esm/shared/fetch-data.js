var cache = {};

var fetchEducation = function fetchEducation(username) {
  if (cache[username] && cache[username].education) return Promise.resolve(cache[username].education);
  return fetch("https://api.codersrank.io/v2/users/" + username + "/education", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (!cache[username]) cache[username] = {};
    cache[username].education = data.education;
    return data.education;
  })["catch"](function (err) {
    // eslint-disable-next-line
    console.error(err);
    return Promise.reject(err);
  });
};

var fetchCertificates = function fetchCertificates(username) {
  if (cache[username] && cache[username].certificates) return Promise.resolve(cache[username].certificates);
  return fetch("https://api.codersrank.io/v2/users/" + username + "/certificates", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (!cache[username]) cache[username] = {};
    cache[username].certificates = data.certificates;
    return data.certificates;
  })["catch"](function (err) {
    // eslint-disable-next-line
    console.error(err);
    return Promise.reject(err);
  });
};

export var fetchData = function fetchData(username) {
  return Promise.all([fetchEducation(username), fetchCertificates(username)]).then(function (_ref) {
    var education = _ref[0],
        certificates = _ref[1];
    return Promise.resolve({
      education: education,
      certificates: certificates
    });
  });
};