let num;
num = prompt('Введите число лет');
if(isNaN(+num) || +num < 0) {
  alert('Введенное значение (' + num + ') некорректно')
} else {
  const lastnum = num[num.length-1];
  const twolastnum = num.slice(-2)
  if(((lastnum === '0') || (lastnum >= '5' && lastnum <= '9')) || (twolastnum >= '11' && twolastnum <= '14')) {
    alert(num + ' лет');
  } else if(lastnum >= '2' && lastnum <= '4') {
    alert(num + ' года')
  } else alert(num + ' год')
}