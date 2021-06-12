// 1.  Выведите в консоль с помощью цикла столбец чисел от 1 до 100.
let a = 1;
while(a <= 100) {
  console.log(a);
  a++;
}

// 2. Выведите в консоль с помощью цикла столбец чисел от 100 до 1.
a = 100;
while(a >= 1) {
  console.log(a);
  a--;
}

// 3. Выведите с помощью цикла столбец четных чисел от 1 до 100.
a = 1;
while(a <= 100) {
  if(a % 2 === 0) console.log(a);
  a++;
}

// 4. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива выведите ее в консоль
const arr = [1, 2, 3, 4, 5];
let summ = 0;
for(let i = 0; i < arr.length; i++) {
  summ += arr[i];
}
console.log('summa:',summ);

// 5. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
//
//   const arr = [1, 2, 3, 4, 5];
//
// Для возведения в квадрат можно использовать Math.pow() или оператор **
//
// Math.pow() — https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
//
//   ** — number ** degree где number это число которое возводится в степень, а degree это сама степень

summ = 0;
for(let i = 0; i < arr.length; i++) {
  summ += arr[i]**2;
}
console.log('summa pov:',summ);