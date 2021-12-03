"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNewTime = void 0;
const setNewTime = (timeDate) => {
    const date = new Date(timeDate);
    const days = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    return { days, hours, minutes, seconds };
};
exports.setNewTime = setNewTime;
