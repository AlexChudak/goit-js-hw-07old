const itemsEl = document.querySelectorAll('.item');

console.log(`В списке ${itemsEl.length} категории.`);

//выводим название категории

const categoryEl = document.querySelectorAll('h2').forEach(element => {
  console.log(`Категория:${element.textContent}`);
});

const liElement = document.querySelector('.item');
const LiElementRef = liElement.lastElementChild;
const paramEl = LiElementRef.children;
console.log(`Количество элементов: ${paramEl.length}`);

//Задача №2

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Используем 'map' для перебора массива и добавления в Li

// const newElement = document.createElement('li');
// newElement.textContent = newIngredients;
// console.log(newElement);

//Добавляем в список <ul id="ingredients"></ul>

// const findUl = document.querySelector('#ingredients');
// findUl.appendChild(newElement);
// console.log(findUl);
