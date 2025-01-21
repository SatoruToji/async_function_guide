const url = "./words-en.json";
let wordsArray;

// fetch(url)
//   .then((r) => r.json())
//   .then((w) => {
//     wordsArray = w
//     console.log(wordsArray)
//     let randomItem = wordsArray[Math.floor(Math.random() * wordsArray.length)];
//     console.log(randomItem);
//   })

async function loadWords() {
  const response = await fetch(url); // Ждём ответа
  wordsArray = await response.json(); // Преобразуем JSON и сохраняем
  console.log("Массив загружен:", wordsArray);
}

loadWords();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (wordsArray) {
      const randomItem =
        wordsArray[Math.floor(Math.random() * wordsArray.length)];
      console.log("Случайное слово:", randomItem);
    } else {
      console.error("Массив ещё не загружен.");
    }
  }, 100);
});
