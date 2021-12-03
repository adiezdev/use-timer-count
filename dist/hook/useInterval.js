"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
const react_1 = require("react");
/*Funcion que se ejecuta cada vez que se cumpla el intervalo*/
const useInterval = (callback, delay) => {
    let callbackRef = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(() => {
        callbackRef.current = callback;
    });
    (0, react_1.useEffect)(() => {
        if (!delay) {
            return () => { };
        }
        const interval = setInterval(() => {
            return callbackRef.current && callbackRef.current();
        }, delay);
        return () => clearInterval(interval);
    }, [delay]);
};
exports.useInterval = useInterval;
