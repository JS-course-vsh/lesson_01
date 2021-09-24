// 'use strict';

const bind = (fn, context, ...boundArgs) => (...args) =>
  fn.apply(context, [...boundArgs, ...args]);

function greeting(greeting, punctuation) {
  return `${greeting} ${this.userName}${punctuation}`;
}

const alex = { userName: "Alex" };
const alexBound = bind(greeting, alex);

console.log(alexBound("Hello", "!"));