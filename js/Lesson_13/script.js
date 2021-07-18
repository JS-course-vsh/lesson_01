/** У нас есть дерево, структурированное как вложенные списки ul/li.
  Напишите код, который выведет каждый элемент списка в консоль :
  Используйте цикл for..of
Вывести общее кол-во элементов в консоль
Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль **/



let elem = document.getElementsByTagName('li');
let arrel = []

console.log(`count elements of the list = ${elem.length}`);

for(let txt of elem) {
  arrel.push(txt.innerText);
}

arrel.forEach((e, i) => console.log(`#${i+1} - ${e}`));