/*
1. Вам нужно написать функцию, которая принимает один параметр.
При первом вызове она его запоминает, при втором — суммирует переданный
параметр с тем, что передали первый раз и тд.
Например: sum(3) = 3; sum(5) = 8; sum(20) = 28
 */

function adder() {
  let res = 0;
  return function(num) {
    res += num;
    return res;
  }

}

let add = adder()

console.log(add(3))
console.log(add(5))
console.log(add(20))
console.log('=============================')

/*
2. Возьмите счетчик, который мы писали на уроке и добавьте ему возможность
задавать начальное значение (с которого будет начинаться отсчет),
шаг счетчика (то, сколько будет добавляться при каждом вызове)
при инициализации и метод для сброса к начальному значению
 */

function counter(nach = 0, step = 1) {
  let counter = nach;
   function calk() {
    return counter += step;
  }
  function reset() {
     return counter = 0;
  }

  return {calk, reset}
}

let count1 = counter();

console.log(count1.calk());
console.log(count1.reset());
