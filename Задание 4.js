/* 
* Задание 4
*/

let a = 10;
let b = 15;

let intervalId = setInterval(function() {
	
	if (a <= b) console.log(a);
    else clearInterval(intervalId);
    a++;
}, 1000);