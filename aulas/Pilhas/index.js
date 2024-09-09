/*
const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;

console.log(averageTemp)
*/

let daysOfWeek = [];
let diasDaSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(diasDaSemana.length);

for (let i = 0; i < diasDaSemana.length; i++) {
    console.log(diasDaSemana[i]);
}

console.log(diasDaSemana)

let numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers.length);

//método push - adicionar dados no array
//método pop remove o ultimo elemento do array
//método unshift adiciona elementos no início da lista
//método shift remove o primeiro elemento da lista
numbers.push(11, 12, 13);
numbers.pop();
numbers.unshift(-1, -2, -3);
numbers.shift();

console.log(numbers)