# useTimerCount

馃憢 Hola

He creado estos peque帽os hooks, inspirandome en algunos que son muy similares.

```
Por favor update a 0.5.32

npm i use-timer-count
```

He este caso he construido dos hooks:

# useCountDown

Muy sencillo, es un contador en retroceso, en el que se le pasa en minutos desde donde empieza y tambien cuenta con un callback, para que haga una acci贸n al acabar

```javascript
const { days, hours, minutes, seconds, start, pause, restart } = 
useCountDown({ expiryTime: 0.5, onExpire: alert("Hi")) });
```
Te devuelve los datos necesarios dependiendo de los minutos pasados, tambien controladores.

## Resumen 
### Enviamos

| Variables | Descripci贸n |
| --- | --- |
| expiryTime | Tiempo done empieza el contador |
| onExpire | Callback para que haga alguna accion al acabar |
| autoStart | Por defecto true |

### Recibimos

| Varables | Descripci贸n |
| --- | --- |
| day | Minutos a dias |
| hours | Minutos a horas|
| minutes | Minutos a minutos |
| seconds | Minutos a segundos |
| start | void |
| pause | void |
| restart |autostart true, resetea el contador al inicio |

# useStopwatch

Este hook hace el efecto contrario, es un contador incremental que escucha hasta el tiempo que se la pasa, ese ser谩 su top

```javascript
const { days, hours, minutes, seconds, start, pause, reset} = 
useStopwatch({ offsetTime: 0.5 });
```

De momento este no tiene un callback, para que haga alguna acci贸n al acabar. Al igual que el anteriores te devuelve todo lo necesario

## Resumen 
### Enviamos

| Variables | Descripci贸n |
| --- | --- |
| offsetTime | Tiempo donde acaba el contador |
| autoStart | Por defecto true |

### Recibimos

| Varables | Descripci贸n |
| --- | --- |
| day | Minutos a dias |
| hours | Minutos a horas|
| minutes | Minutos a minutos |
| seconds | Minutos a segundos |
| start | void |
| pause | void |
| reset |autostart true, reseta el contador al inicio |
