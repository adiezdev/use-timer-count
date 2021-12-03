# useTimerCount

[Readme in ES🇪🇸](https://github.com/adiezdev/use-timer-count/blob/main/README_es.md)


👋 Hello

I have created these little hooks, inspired by some that are very similar

```
Please upgrade to 0.5.33

npm i use-timer-count
```

In this case I have built two hooks:

# useCountDown

Very simple, it is a countdown counter, in which it is passed in minutes from where it starts and it also has a callback, so that it performs an action at the end.

```javascript
const { days, hours, minutes, seconds, start, pause, restart } = 
useCountDown({ expiryTime: 0.5, onExpire: alert("Hi")) });
```

It returns the necessary data depending on the number of minutes elapsed, including controllers.

# Resume
### We send

| Variables | Description |
| --- | --- |
| expiryTime | Time where the counter starts |
| onExpire | Callback to perform an action at the end |
| autoStart | Default true |

### We receive

| Varables | Description |
| --- | --- |
| day | minutes a days |
| hours | minutes a hours|
| minutes | minutes a minutes |
| seconds | minutes to seconds |
| start | void |
| pause | void |
| restart |autostart true, resets the counter at startup|

# useStopwatch

This hook does the opposite effect, it is an incremental counter that listens until the time you pass it, that will be your top

```javascript
const { days, hours, minutes, seconds, start, pause, reset} = 
useStopwatch({ offsetTime: 0.5 });
```

At the moment this one does not have a callback, so that it makes some action when finishing. Like the previous one, it gives you back everything you need

# Resume
### We send

| Variables | Description |
| --- | --- |
| offsetTime | Time where the counter ends |
| autoStart | default true |

### We recive

| Varables | Description |
| --- | --- |
| day | minutes a days |
| hours | minutes a hours|
| minutes | minutes a minutes |
| seconds | minutes to seconds |
| start | void |
| pause | void |
| reset |autostart true, resets the counter at startup |
