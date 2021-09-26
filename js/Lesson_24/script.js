/*
Вам нужно написать функцию, которая в качестве параметра принимает функцию и добавляет ей возможность кешировать вызовы.
Идея состоит в том, что при вызове функции с одинаковыми аргументами, нет смысла вызывать функцию каждый раз,
достаточно сохранять данные о результатах вызова.
Хранить нужно последние 10 вызовов.
 */

let cache = new Map();

function process(obj) {
  if (!cache.has(obj)) {
    console.log('== ', cache.size, typeof cache.size)
    if(cache.size === 10) {
      let kCache = cache.keys();
      let keyC = kCache.next().value;
      // console.log('---- ', keyC)
      cache.delete(keyC);
    }
    let result = obj.salary + 100;
    cache.set(obj, result);
  } else {
    console.log('Достали с кеша ...');
  }
  return cache.get(obj);
}

// Теперь используем process() в другом файле:

let obj = {name: 'vlad', salary: 100};
let obj2 = {name: 'alex', salary: 102};
let obj3 = {name: 'alex', salary: 103};
let obj4 = {name: 'alex', salary: 104};
let obj5 = {name: 'alex', salary: 105};
let obj6 = {name: 'alex', salary: 106};
let obj7 = {name: 'alex', salary: 107};
let obj8 = {name: 'alex', salary: 108};
let obj9 = {name: 'alex', salary: 109};
let obj10 = {name: 'alex', salary: 110};
let obj11 = {name: 'alex', salary: 111};

let result1 = process(obj); // вычислен результат
console.log(result1)

// ...позже, из другого места в коде...
process(obj); // ранее вычисленный результат взят из кеша
process(obj2); // ранее вычисленный результат взят из кеша
process(obj3); // ранее вычисленный результат взят из кеша
process(obj4); // ранее вычисленный результат взят из кеша
process(obj5); // ранее вычисленный результат взят из кеша
process(obj6); // ранее вычисленный результат взят из кеша
for (let entry of cache) {
  console.log(entry)
}
process(obj7); // ранее вычисленный результат взят из кеша
for (let entry of cache) {
  console.log(entry)
}
process(obj8); // ранее вычисленный результат взят из кеша
process(obj); // ранее вычисленный результат взят из кеша
for (let entry of cache) {
  console.log(entry)
}
process(obj9); // ранее вычисленный результат взят из кеша
process(obj10); // ранее вычисленный результат взят из кеша
for (let entry of cache) {
  console.log(entry)
}
process(obj11); // ранее вычисленный результат взят из кеша
for (let entry of cache) {
  console.log(entry)
}
process(obj); // ранее вычисленный результат взят из кеша

let result2 = process(obj); // ранее вычисленный результат взят из кеша
for (let entry of cache) {
  console.log(entry)
}
console.log(result2)

cache.clear();
console.log(cache);

// ...позже, когда объект больше не нужен:
// obj = null;
// console.log(cache);
// console.log(cache.size); // 1 (Упс! Объект всё ещё в кеше, занимает память!)