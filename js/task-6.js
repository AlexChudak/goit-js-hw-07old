//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.



// Ищет инпут
// устанавлиеваем слушателя на потерю фокуса
// Ставим условие. После потери фокуса, Если ==== ${data-length}, 
//тогда зеленое, если нет тогда красное, по умолчанию = серое.

const inputRef = document.querySelector('#validation-input');
// inputRef.addEventListener('focus', onInputFocus);
// inputRef.addEventListener('blur', offInputFocus);

// function onInputFocus () {
//     console.log("get focus");
// }

// function offInputFocus() {
//     console.log('focus off');
// }

inputRef.addEventListener('change', changeInput);

function changeInput (event) {
   let inputText = event.currentTarget.value.length
   
    //if ('${data-length}' === !event.currentTarget.value.length)
    
   
   
    console.log(inputText);
    console.log(input.data-length)
}

// Обратиться к свойству инпута, вывести его в консоль
// Если длина строки-1, не ровна свойству data-length, тогда меняем цвет