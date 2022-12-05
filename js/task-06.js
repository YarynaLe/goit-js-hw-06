// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//  перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const inputValidation = document.querySelector("#validation-input");

const inputLength = () => {
  if (
    inputValidation.value.length === Number(inputValidation.dataset.length)
  ) {
    inputValidation.classList.remove(`invalid`);
    inputValidation.classList.add(`valid`);
    return;
  } else {
    inputValidation.classList.remove(`valid`);
    inputValidation.classList.add(`invalid`);
  }
};

inputValidation.addEventListener("blur", inputLength);
