//  Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  color.textContent = bodyColor.style.backgroundColor;
});