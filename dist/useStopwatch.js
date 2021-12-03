"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStopwatch = void 0;
const react_1 = require("react");
const hook_1 = require("./hook");
const utils_1 = require("./utils");
const delay = 1000;
;
const useStopwatch = ({ offsetTime, autoStart = true }) => {
    const finalTime = Math.floor(offsetTime * 60 * 1000);
    const [isRunning, setIsRunning] = (0, react_1.useState)(autoStart);
    const [time, setTime] = (0, react_1.useState)(0);
    const pause = () => {
        setIsRunning(false);
    };
    const start = () => {
        setIsRunning(true);
    };
    const reset = (autoStart = true) => {
        setIsRunning(autoStart);
        setTime(0);
    };
    const handleStopwatch = () => {
        const distanceToTime = time + 1000;
        if (distanceToTime <= finalTime) {
            setTime(distanceToTime);
            (0, utils_1.setNewTime)(distanceToTime);
            return distanceToTime;
        }
        return distanceToTime;
    };
    (0, hook_1.useInterval)(() => {
        handleStopwatch();
        if (time >= finalTime) {
            setIsRunning(false);
            return 0;
        }
        else {
            return handleStopwatch();
        }
    }, isRunning ? delay : 0);
    return Object.assign(Object.assign({}, (0, utils_1.setNewTime)(time)), { isRunning, pause, start, reset });
};
exports.useStopwatch = useStopwatch;
