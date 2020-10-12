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
