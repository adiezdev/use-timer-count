"use strict";
exports.__esModule = true;
exports.setNewTime = void 0;
var setNewTime = function (timeDate) {
    var date = new Date(timeDate);
    var days = date.getUTCDate();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
};
exports.setNewTime = setNewTime;
