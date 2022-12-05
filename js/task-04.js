// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const valuer = document.querySelector("#value");
const buttonDecrease = document.querySelector(
  'button[data-action="decrement"]'
);

buttonDecrease.addEventListener("click", () => {
  counterValue--;
  valuer.textContent = counterValue;
});

const buttonIncrease = document.querySelector(
  'button[data-action="increment"]'
);

buttonIncrease.addEventListener("click", () => {
  counterValue++;
  valuer.textContent = counterValue;
});