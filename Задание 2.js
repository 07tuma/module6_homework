/* 
* Задание 2 
*/
let number = 7; 

function testNumber (inputNumber){
    let counter = 0;
    if ((inputNumber < 1)||(inputNumber > 1000)){
       return('Данные не верны')
    }

    for (let i = 1; i <= inputNumber; i++){
       let result = inputNumber%i;
        if (result === 0) counter++;  
    }

    if (counter === 2){
        return('Число простое'); 
    } else {
        return('Число не является простым');
    }
}

result = testNumber(number);

testNumber();

console.log(result)
