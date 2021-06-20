
// Необходимо написать функцию clone, которая принимает аргументом переменную, содержащую объект. Внутри функции необходимо:
//
// проверить, что аргумент в типе object
// проверить, что аргумент не null
// проверить, что аргумент не пустой объект ( Object.keys( funcArgument ).length > 0  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
// если аргумент не прошел проверку, то оборвать функцию ( return ) и вернуть строку с ошибкой (уникальной для каждого случая)
// проитерировать объект (аргумент функции) циклом for..in и создать новый объект c такими же свойствами
// проверить, что тип данных нового объекта — object ( с помощью тернарного оператора «знак вопроса» ( ? ) ), и если это так, то вернуть новый объект, иначе — вернуть null



function clone(obj) {
  if(typeof obj !== "object") return 'argument is no object type';
  if(obj === null) return 'argument is null';
  if(Object.keys(obj).length === 0) return 'argument is empty';
  let obj1 = {};
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
      obj1[key] = obj[key];
    }
  }
  return typeof obj1 === "object" ? obj1 : null;
}

let user = {
  name: "Peter",
  age: 30,
  location: "USA",
  family: "alone"
};

console.log(clone(user));