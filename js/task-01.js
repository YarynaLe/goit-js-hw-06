// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення:
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categories = document.querySelectorAll('h2');

const elements = document.querySelectorAll('.item ul');

console.log('Number of categories:', categories.length); 
console.log('Category:', categories[0].textContent); 
console.log('Elements:', elements[0].querySelectorAll('li').length);

console.log('Category:', categories[1].textContent);
console.log('Elements:', elements[1].querySelectorAll('li').length); 

console.log('Category:', categories[2].textContent); 
console.log('Elements:', elements[2].querySelectorAll('li').length);