exports.getDate = function () {
  //var getDate = function () {};
  var day = new Date();
  // var today = day.getDay();  //[have to remove as it stores number of weekday and .toLocaleDateString can't change it]
  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return day.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  var day = new Date();
  // var today = day.getDay();  //[have to remove as it stores number of weekday and .toLocaleDateString can't change it]
  var options = {
    weekday: "long",
  };
  return day.toLocaleDateString("en-US", options);
};
