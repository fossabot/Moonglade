export var formatData = function formatData(data, maxItems) {
  if (data === void 0) {
    data = {
      education: [],
      certificates: []
    };
  }

  var education = data.education || [];
  var certificates = data.certificates || [];

  if (maxItems) {
    education = education.slice(0, maxItems);
    certificates = certificates.slice(0, maxItems);
  }

  return {
    education: education,
    certificates: certificates
  };
};