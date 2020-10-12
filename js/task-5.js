//Напиши скрипт который, при наборе текста в инпуте
//input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой,
//в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('#name-input');
console.log(input);
const output = document.querySelector('#name-output');
console.log(output);

input.addEventListener('input', onFormInput);

function onFormInput(event) {
  const inputText = event.currentTarget.value;
  console.dir(inputText);

  output.textContent = inputText;
}
