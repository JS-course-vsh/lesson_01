 // 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и
 // меньше 10. Если это так — пусть функция возвращает true, если не так — false.
//
// 2. Сделайте функцию getDigitsSum (digit — это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
//
// 3. Сделайте функцию isEven() (even — это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
 // Если четное — пусть функция возвращает true, если нечетное — false.

function isNumberInRange(numb) {
  return numb > 0 && numb < 10;
}

 function getDigitsSum(numb) {
  if(isNumberInRange(numb)) {
    return 'number has one digit';
  } else {
    let tmpnumb = String(numb);
    let summ = 0;
    for(let i = 0; i < tmpnumb.length; i++) {
      summ += +tmpnumb[i];
    }
    return summ;
  }
 }

 function isEven(numb) {
   let ev = numb % 2;
   return ev === 0;
 }

 console.log(isNumberInRange(3));
 console.log(getDigitsSum(5));
 console.log(isEven(22));




