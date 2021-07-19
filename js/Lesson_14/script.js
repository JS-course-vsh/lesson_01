/**
 1. У нас есть дерево, структурированное как вложенные списки ul/li.
 Напишите код, который выведет каждый элемент списка в консоль :
 - Используйте цикл for..of
 - Вывести общее кол-во элементов в консоль
 - Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
 - Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в
 массив — вывсести этот массив в консоль
 - Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
 - С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
 - Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
 - Удалить у тега ul аттрибут ‘data-dog-tail‘
 **/


let elemUl = document.getElementById('ulId');
let elemsLi = elemUl.childNodes;

let arrLi = Array.from(elemsLi).filter(e => e.nodeName === 'LI');

console.log(`count elements of the list = ${arrLi.length}`);    //Вывести общее кол-во элементов в консоль
for(let txt of arrLi) {                                         //Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
  console.log(txt.innerText);
}

// console.log(elemUl);
let arrNameAttr = [];
let arrValAttr = [];
for(let attr of elemUl.attributes){
  arrNameAttr.push(attr.name);
  arrValAttr.push(attr.value);
}

console.log('');
console.log('------------------------------');
console.log('Name attribute list on UL tag');
console.log('------------------------------');
arrNameAttr.forEach((e, i) => console.log(`#${i+1} : ${e}`));

console.log('');
console.log('------------------------------');
console.log('Value attribute list on UL tag');
console.log('------------------------------');
arrValAttr.forEach((e, i) => console.log(`#${i+1} : ${e}`));

//С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя;
elemUl.lastElementChild.innerHTML = 'Привет меня зовут Viktor';

//Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
elemUl.firstElementChild.setAttribute('data-my-name', 'Viktor');
console.log(elemUl.firstElementChild.getAttribute('data-my-name'));

//Удалить у тега ul аттрибут ‘data-dog-tail‘
elemUl.removeAttribute('data-dog-tail');