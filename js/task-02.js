const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const allIngredients = [];

for (let i=0; i < ingredients.length; i += 1 ){
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  li.classList.add('item');

  allIngredients.push(li);
};
// console.dir(allIngredients)
listEl.append(...allIngredients);
