export var differenceInMonths = function differenceInMonths(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return Math.abs(months <= 0 ? 0 : months);
};