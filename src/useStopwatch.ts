import { useState } from "react";
import { useInterval } from "./hook";
import { setNewTime } from "./utils";

const delay = 1000;

export interface StopwatchSettings {
  autoStart?: boolean;
  offsetTime: number;
}
export interface StopwatchResult {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: (autoStart?: boolean) => void;
};
export const useStopwatch = ({ offsetTime, autoStart = true }: StopwatchSettings) => {
  const finalTime = Math.floor(offsetTime * 60 * 1000);

  const [isRunning, setIsRunning] = useState(autoStart);
  const [time, setTime] = useState(0);

  const pause = () => {
    setIsRunning(false);
  };
  const start = () => {
    setIsRunning(true);
  };
  const reset = (autoStart: boolean = true) => {
    setIsRunning(autoStart);
    setTime(0);
  };

  const handleStopwatch = () => {
    const distanceToTime = time + 1000;
    if (distanceToTime <= finalTime) {
      setTime(distanceToTime);

      setNewTime(distanceToTime);
      return distanceToTime;
    }
    return distanceToTime;
  };

  useInterval(() => {
    handleStopwatch();
    if (time >= finalTime) {
      setIsRunning(false);
      return 0;
    }
  }, isRunning ? delay : 0);

  return ({ ...setNewTime(time), isRunning, pause, start, reset } as StopwatchResult);
}
