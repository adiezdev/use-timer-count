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
export declare const useCountDown: ({ expiryTime, onExpire, autoStart }: CountDownSettings) => TimerResult;
export {};
