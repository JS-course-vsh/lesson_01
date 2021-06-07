
let a;
let b;
let result;

// 1. Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a = prompt('#1 Enter a number');
if(+a === 0) {
  alert('Right');
} else {
  alert('Wrong');
}


// 2. Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a = prompt('#2 Enter a number');
if(+a > 0) {
  alert('Right');
} else {
  alert('Wrong');
}

// 3. Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a = prompt('#3 Enter a number');
if(+a < 0) {
  alert('Right');
} else {
  alert('Wrong');
}

// 4. Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a = prompt('#4 Enter a number');
if(+a >= 0) {
  alert('Right');
} else {
  alert('Wrong');
}

// 5. Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a = prompt('#5 Enter a number');
+a <= 0 ? alert('Right') : alert('Wrong');

// 6. Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a = prompt('#6 Enter a number');
+a !== 0 ? alert('Right') : alert('Wrong');

// 7. Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a = prompt('#7 Enter a number');
a === 'test' ? alert('Right') : alert('Wrong');

// 8. Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a = prompt('#8 Enter a number');
a === '1' ? alert('Right') : alert('Wrong');

// 9. Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a = prompt('#9 Enter a number');
+a > 0 && +a < 5 ? alert('Right') : alert('Wrong');

// 10. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое
// значение переменной на экран.
a = prompt('#10 Enter a number');
if(+a === 0 || +a === 2) {
  a += 7;
} else {
  a /= 10;
}
alert('New value: ' + +a);

// 11. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
a = +prompt('#11 Enter a first number');
b = +prompt('#11 Enter a second number');
if(a <= 1 && b >=3) {
  result = a + b;
} else {
  result = a - b;
}
alert('Result = ' + result);

// 12. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти,
// то выведите ‘Верно’, в противном случае выведите ‘Неверно’.
a = +prompt('#12 Enter a first number');
b = +prompt('#12 Enter a second number');
if((a > 2 && a < 11) || (b >= 6 || b === 6 && b < 14)) {
  alert('Rihgt');
} else {
  alert("Wrong");
}

// 13. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’, то в
// переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.
let num = +prompt('#13 Enter a number from 1 to 4');
switch (num) {
  case 1:
    alert( 'Winter' );
    break;
  case 2:
    alert( 'Spring' );
    break;
  case 3:
    alert( 'Summer' );
    break;
  case 4:
    alert( 'Fall' );
    break;
  default:
    alert( "No such values" );
}