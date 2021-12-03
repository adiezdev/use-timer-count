"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCountDown = void 0;
const react_1 = require("react");
const hook_1 = require("./hook");
const utils_1 = require("./utils");
const delay = 1000;
const useCountDown = ({ expiryTime, onExpire, autoStart = true }) => {
    const initicalTime = Math.floor(expiryTime * 60 * 1000);
    const [isRunning, setIsRunning] = (0, react_1.useState)(autoStart);
    const [time, setTime] = (0, react_1.useState)(initicalTime);
    const start = () => {
        setIsRunning(true);
    };
    const pause = () => {
        setIsRunning(false);
    };
    const restart = (autoStart = true) => {
        setIsRunning(autoStart);
        setTime(initicalTime);
    };
    const handleCountDown = () => {
        const distanceToTime = time - 1000;
        if (distanceToTime >= 0) {
            (0, utils_1.setNewTime)(distanceToTime);
            return distanceToTime;
        }
        return 0;
    };
    (0, hook_1.useInterval)(() => {
        const valueTime = handleCountDown();
        setTime(valueTime);
        if (valueTime <= 0) {
            onExpire && onExpire();
            setIsRunning(false);
            return 0;
        }
        else {
            return valueTime;
        }
    }, isRunning ? delay : 0);
    return Object.assign(Object.assign({}, (0, utils_1.setNewTime)(time)), { isRunning, pause, start, restart });
};
exports.useCountDown = useCountDown;
