import { useState } from "react";
import {useInterval} from "./hook";
import { setNewTime } from "./utils";

const delay = 1000;

interface CountDownSettings {
  autoStart?: boolean;
  expiryTime: number;
  onExpire?: () => void;
}
interface TimerResult {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  restart: (autoStart?: boolean) => void;
}
export const useCountDown = ({ expiryTime, onExpire, autoStart = true }: CountDownSettings) => {
  const initicalTime: number = Math.floor(expiryTime * 60 * 1000);

  const [isRunning, setIsRunning] = useState(autoStart);
  const [time, setTime] = useState(initicalTime);

  const start = () => {
    setIsRunning(true);
  }
  const pause = () => {
    setIsRunning(false);
  }
  const restart = (autoStart: boolean = true) => {
    setIsRunning(autoStart);
    setTime(initicalTime);
  }

  const handleCountDown = () => {
    const distanceToTime = time - 1000;
    if (distanceToTime >= 0) {
      setNewTime(distanceToTime);
      return distanceToTime;
    }
    return 0;
  };

  useInterval(() => {
    const valueTime = handleCountDown();
    setTime(valueTime);
    if (valueTime <= 0) {
      onExpire && onExpire();
      setIsRunning(false);
      return 0;
    }else{ return valueTime }
  }, isRunning ? delay : 0);

  return ({ ...setNewTime(time), isRunning, pause, start, restart } as TimerResult);
};