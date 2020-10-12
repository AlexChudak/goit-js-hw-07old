//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementEl = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const valeuEl = document.querySelector('#value');
const incrementEl = document.querySelector(
  '#counter button[data-action="increment"]',
);

//console.log(decrementEl);

let counterValue = 0;

decrementEl.addEventListener('click', event => {
  event.preventDefault();
  counterValue -= 1;
  valeuEl.textContent = counterValue;
  console.log('клик');
});

incrementEl.addEventListener('click', event => {
  event.preventDefault();
  counterValue += 1;
  valeuEl.textContent = counterValue;
  console.log('клик');
});

console.log(valeuEl);
