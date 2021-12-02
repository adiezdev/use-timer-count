import { useEffect, useRef } from "react";

/*Funcion que se ejecuta cada vez que se cumpla el intervalo*/
export const useInterval = (callback: any, delay: number) => {
  let callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  })
  useEffect(() => {
    if (!delay) {
      return () => { };
    }

    const interval = setInterval(() => {
      return callbackRef.current && callbackRef.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
}