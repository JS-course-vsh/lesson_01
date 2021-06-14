let num;
let strout = '';
num = prompt('Введите число ярусов');

if(isNaN(+num) || +num <= 0) {
  alert('Введенное значение (' + num + ') некорректно')
} else {
  num = +num;
  let cnt = num * 2 - 1;
  let a = 0;
  for(; a < cnt;) {
    let str = '';
    for(let i = 0; i <= a; i++) {
      str += '*';
      str = str.padStart(Math.ceil((cnt-a)/2),' ');
    }
    a++;
    if(a % 2 === 0) continue;
    strout += str + '\n';
    console.log(str);
  }
  alert(strout);
}

// var userNumber = +prompt('Введите число');
// var str = '';
// if (userNumber !== userNumber || userNumber === 0) {
//   alert('Вы ввели некорректное значение')
// } else {
//   for (var i = 1; i <= userNumber; i++) {
//     for (var a = i; a < userNumber; a++) {
//       str += ' ';
//     }
//     for (var b = 1; b < 2*i; b++) {
//       str += '*';
//     }
//     str += '\n';
//   }
//   alert(str);
//   console.log(str);
// }