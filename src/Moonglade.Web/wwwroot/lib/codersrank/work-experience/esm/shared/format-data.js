function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { differenceInMonths } from './difference-in-months';
export var formatData = function formatData(workExperience, maxItems) {
  if (workExperience === void 0) {
    workExperience = [];
  }

  if (maxItems) {
    // eslint-disable-next-line
    workExperience = workExperience.slice(0, maxItems);
  }

  var items = [];
  var companyMapping = {};
  var originalIndex = 0;
  workExperience.forEach(function (job) {
    if (job.company in companyMapping) {
      items[companyMapping[job.company]] = _extends({}, items[companyMapping[job.company]], {
        titles: [].concat(items[companyMapping[job.company]].titles, [{
          originalIndex: originalIndex += 1,
          title: job.title,
          description: job.description,
          start_date: job.start_date,
          end_date: job.end_date,
          location: job.location,
          is_current: job.is_current,
          highlighted_technologies: job.highlighted_technologies,
          other_technologies: job.other_technologies
        }])
      });
    } else {
      items = [].concat(items, [{
        company: job.company,
        company_logo: job.company_logo || job.company_logo,
        titles: [{
          originalIndex: originalIndex += 1,
          title: job.title,
          description: job.description,
          start_date: job.start_date,
          end_date: job.end_date,
          location: job.location,
          is_current: job.is_current,
          highlighted_technologies: job.highlighted_technologies,
          other_technologies: job.other_technologies
        }]
      }]);
      companyMapping[job.company] = items.length - 1;
    }
  });
  return items.map(function (item) {
    return _extends({}, item, {
      titles: item.titles.slice().sort(function (a, b) {
        return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
      })
    });
  }).sort(function (a, b) {
    return new Date(b.titles[0].start_date).getTime() - new Date(a.titles[0].start_date).getTime();
  }).map(function (item) {
    var totalMonths = 0;
    item.titles.forEach(function (title) {
      var end_date = title.is_current ? new Date() : new Date(title.end_date);
      totalMonths += differenceInMonths(new Date(title.start_date), end_date);
    });
    return _extends({}, item, {
      totalMonths: totalMonths
    });
  });
};