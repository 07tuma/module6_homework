/* 
* Задание 5
*/
let x = 3;
let n = 3;

const func = (x, n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  return (result);
};

console.log(x + " в " + n + " степени " + `= ${func(x, n)}`);