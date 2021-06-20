// Задание №1
// Нужно создать функцию которая будет возводить число в степень
//
// Запрашиваем у пользователя число (с помощью prompt)
// Запрашиваем у пользователя степень, в которую это число нужно возвести (с помощью prompt)
// Создаем функцию которая принимает 2 аргумента (число, степень)
// Задаем аргументу который принимает степень значение по умолчанию 1
// Внутри функции нужно написать проверку, если аргументы не являются числами завершить функцию с указанием того, что
// пользователь ввел неправильные данные, например (return ‘some error’) Если проверка прошла успешно, то возвести
// число в степень (работаем с аргументами функции) Вернуть результат выполнения функции и завершить ее Результат
// вызова функции записать в переменную и вывести пользователю через alert()

let num = +prompt("Введите число");
let pov = +prompt("Введите степень возведения");

function numPov(num_param, pov_param = 1) {
  if(num_param !== num_param) return "введено некорректное число";
  if(pov_param !== pov_param) return "введено некорректное значение степени";
  return num_param ** pov_param;
}

let res = numPov(num, pov);
if(typeof res === "string") {
  alert(`Ошибка: ${res}`);
} else
  alert(`Результат: ${res}`);

//======================================================================

// Задание №2
// Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:
// строку
// число, которое является длинной строки, которую мы хотим получить в результате выполнения функции
// символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо
// параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа)
// Обязательно при написании функции необходимо проверить аргументы, которые мы передали, и если каких-то аргументов
// нет, то вернуть из функции строку с ошибкой (return ‘some error’). Сообщение с ошибкой должно быть разное в
// зависимости от того условия, по которому не прошла проверка.  Результат вызова функции нужно вывести в консоль —
// после завершения функции.

let flag = true;
let mess = '';
let str, numb, simb, side;

function errorMessage(param) {
  return `Параметр \"${param}\" введен неверно или отсутствует!`;
}

str = prompt("Введите строку");
if(!str) {
  flag = false;
  mess += errorMessage('строка') + '\n';
}

numb = +prompt("Введите число - длинну строки");
if(!numb || isNaN(numb) || numb < 0) {
  flag = false;
  mess += errorMessage('длинна строки') + '\n';
}


if(numb > str.length) {
  simb = prompt("Введите символ дополнения");
  if(!simb || simb.length > 1) {
    flag = false;
    mess += errorMessage('символ дополнения') + '\n';
  }

  side = prompt("Для добавления символов слева - введите \"0\"; справа - \"1\"");
  if(side !== '1' && side !== '0' && side !== '') {
    flag = false;
    mess += errorMessage('сторона добавления символа');
  }

} else {
  simb = null;
  side = null;
}


//------------------ function

function padString(p_str, p_numb, p_simb = '', p_side = '1') {

  if(p_str.length > p_numb) {
    p_str = p_str.substr(0, p_numb);
    return p_str;
  } else {
    p_numb = p_numb - p_str.length;
    if(p_side === '0') {
      p_str = p_str.padStart(p_numb, p_simb);
    } else {
      p_str = p_str.padEnd(p_numb, p_simb)
    }
  }
  return p_str;
}

//------------------ run

if(!flag) {
  // console.log((`${str}, ${numb}, ${simb}, ${side}`));
  alert(mess);
} else {
  // console.log((`${str}, ${numb}, ${simb}, ${side}`));
  alert(padString(str, numb, simb, side));
}


//============================================================================================
//========= задание 2, вариант 2 - проверки перенесены внутрь функции  ========================
//============================================================================================


function errorMess(param) {
  return `Параметр \"${param}\" введен неверно или отсутствует!`;
}

let flg = true;
let msg = '';

let str1 = prompt("Введите строку");
let numb1 = +prompt("Введите число - длинну строки");
let simb1 = prompt("Введите символ дополнения");
let side1 = prompt("Для добавления символов слева - введите \"0\"; справа - \"1\"");

//------------------ function

function padString2(p_str, p_numb, p_simb = '', p_side = '1') {

  if(!p_str) {
    flg = false;
    msg += errorMess('строка') + '\n';
  }

  if(!p_numb || isNaN(+p_numb) || +p_numb < 0) {
    flg = false;
    msg += errorMess('длинна строки') + '\n';
  }

  if(!p_simb) {
    flg = false;
    msg += errorMess('символ дополнения') + '\n';
  }

  if(p_side !== '1' && p_side !== '0' && p_side !== '') {
    flg = false;
    msg += errorMess('сторона добавления символа');
  }

  //--------------------

  if(flg === false) {
    return msg;
  } else {
    if(p_str.length > p_numb) {
      p_str = p_str.substr(0, p_numb);
      return p_str;
    } else {
      p_numb = p_numb - p_str.length;
      if(p_side === '0') {
        p_str = p_str.padStart(p_numb, p_simb);
      } else {
        p_str = p_str.padEnd(p_numb, p_simb)
      }
    }
    return p_str;
  }
}

//------------------ run

if(!flg) {
  alert(msg);
} else {
  alert(padString2(str1, numb1, simb1, side1));
}
