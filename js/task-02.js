// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const noteIngredients = document.querySelector('#ingredients');


const kindIngredients = ingredient => {
  return ingredient.map(ingredient => {
    const allIngredients = document.createElement('li');
    allIngredients.classList = 'item';
    allIngredients.textContent = ingredient;

  return allIngredients;
  });
};

const ingredient = kindIngredients(ingredients);
noteIngredients.append(...ingredient);