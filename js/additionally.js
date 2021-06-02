let num;
const arr1 = ['0', '5', '6', '6', '8', '9'];
const arr2 = ['2', '3', '4'];
num = prompt('Введите возраст');
console.log(typeof +num)
console.log( +num)
if((isNaN(+num)) || ((typeof +num) !== 'number') || +num < 0) {
  alert('Введенное значение (' + num + ') некорректно')
} else {
  const lastnum = num[num.length-1]
  if(arr1.includes(lastnum) || (+lastnum >= 10 && +lastnum <= 20)) {
    alert(num + ' лет');
  } else if(arr2.includes(lastnum)) {
    alert(num + ' года')
  } else alert(num + ' год')
}