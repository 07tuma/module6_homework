/* 
* Задание 3 
*/

let a = 1;
let b = 2;
let sum = 0;

function func() {
  return function () {
    sum = a + b;
    console.log(sum);
  }
}

let resultFunc = func(a);
resultFunc(b);