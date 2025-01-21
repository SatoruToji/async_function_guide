# ASYNC + AWAIT



## Async functions - функции, которые выполняются асинхронно *(async от asynchronously)*
**Обьясняю нубам:**

`синхронно` - скрипт выполняется построчно строго по порядку:
  ```
    1: if (wordsArray) {
    2:   const randomItem = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    3:   console.log("Случайное слово:", randomItem);
    4: } else {
    5:   console.error("Массив ещё не загружен.");
    6: }
```
`асинхронно` - скрипт одноврменно выполняется в нескльких строках:
```
1: async function loadWords() {
2:  const response = await fetch(url);
3: }

1: if (wordsArray) {
2:   const randomItem = wordsArray[Math.floor(Math.random() * wordsArray.length)];
3:   console.log("Случайное слово:", randomItem);
4: }
```

## *Немножечко о методов в коде `then`, `fetch`, `async и await`*


`fetch(url)` возвращает тебе тупо промис, причем промис не обработанный. так что тебе придется достать из этого промиса массив и сохранить в переменую.

1. Используй `.then` (c английского переводится *"потом"*) и внутри `.then` тупо пропиши [логику](https://learn.javascript.ru/fetch) для возврата данных из `JSON`, а потом добавь еще один `.then` и сохрани данные в переменную
2. Создай асинхронную функцию `async function()` и сделай все по красоте внутри этой функции с использованием `await`
