let num;
num = prompt('Введите число ярусов');

if(isNaN(+num) || +num < 0) {
  alert('Введенное значение (' + num + ') некорректно')
} else {
  num = +num;
  console.log(num);
  let cnt = num * 2 - 1;
  console.log(cnt)
  let a = 0;
  for(; a < cnt;) {
    let str = '';
    for(let i = 0; i <= a; i++) {
      str += '*';
    }
    a++;
    if(a % 2 === 0) continue;
    console.log(str);
  }
}