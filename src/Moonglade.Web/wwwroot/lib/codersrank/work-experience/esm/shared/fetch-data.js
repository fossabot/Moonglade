var cache = {};
export var fetchData = function fetchData(username) {
  if (cache[username]) return Promise.resolve(cache[username]);
  return fetch("https://api.codersrank.io/v2/users/" + username + "/work_experiences", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    cache[username] = data.work_experiences || [];
    return data.work_experiences || [];
  })["catch"](function (err) {
    // eslint-disable-next-line
    console.error(err);
    return Promise.reject(err);
  });
};