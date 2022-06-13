module.exports.getDate = getDate;

function getDate() {
  var day = new Date();
  // var today = day.getDay();  //[have to remove as it stores number of weekday and .toLocaleDateString can't change it]
  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  var dayJs = day.toLocaleDateString("en-US", options);
  return dayJs;
}

module.exports.getDay = getDay;

function getDay() {
  var day = new Date();
  // var today = day.getDay();  //[have to remove as it stores number of weekday and .toLocaleDateString can't change it]
  var options = {
    weekday: "long",
  };
  var dayJs = day.toLocaleDateString("en-US", options);
  return dayJs;
}
