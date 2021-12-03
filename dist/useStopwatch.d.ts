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
}
export declare const useStopwatch: ({ offsetTime, autoStart }: StopwatchSettings) => StopwatchResult;
