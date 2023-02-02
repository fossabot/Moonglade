"use strict";

exports.__esModule = true;
exports.formatBadges = void 0;

var _dummyProfile = require("./dummy-profile");

var formatBadges = function formatBadges(_ref) {
  var profileData = _ref.data,
      maxBadges = _ref.badges,
      loading = _ref.loading;
  var data = profileData || _dummyProfile.dummyProfile;

  if (loading) {
    data = _dummyProfile.dummyProfile;
  }
  /* eslint-disable */


  var result = (data.badges || []).filter(function (badge) {
    return badge.visibility === 'highlighted';
  }).map(function (_ref2) {
    var language = _ref2.language,
        rank = _ref2.rank,
        location_name = _ref2.location_name,
        version = _ref2.version,
        badgeFamily = _ref2.badgeFamily,
        badgeType = _ref2.badgeType,
        values = _ref2.values;
    return {
      language: language || values.language,
      rank: rank,
      location: location_name,
      version: version,
      badgeFamily: badgeFamily,
      badgeType: badgeType
    };
  }).slice(0, maxBadges);
  /* eslint-enable */

  result.sort(function (a, b) {
    if (b.version === 'v1' && a.version === 'v2') return -1;
    return 0;
  });
  var filtered = result.filter(function (badge) {
    if (badge.version === 'v2') {
      return badge.badgeFamily === 'Seniority' || badge.badgeFamily === 'Streak';
    }

    return true;
  });
  return filtered;
};

exports.formatBadges = formatBadges;