//if
var num = 1;
if (num === 1) {
console.log('num is equal to 1');
}

//if-else
var num = 0;
if (num === 1) {
console.log('num is equal to 1');
} else {
console.log('num is not equal to 1, the value of num is ' + num);
}

if (num === 1) {
    num--;
    } else {
    num++;
    }
//pode também ser escrito assim
(num === 1) ? num-- : num++;

//uso com else if

var month = 5;
if (month === 1) {
console.log('January');
} else if (month === 2) {
console.log('February');
} else if (month === 3) {
console.log('March');
} else {
console.log('Month is not January, February or March');
}

//switch-case
var month = 1;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February or March');
}

//for
for (var i = 0; i < 10; i++) {
    console.log(i);
    }

//while
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//do-while
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

//funções
function sayHello() {
    console.log('Hello!');
    }

sayHello();

function output(text) {
    console.log(text);
    }
output("Hello! " + "Aluno.");

function sum(num1, num2) {
    return num1 + num2;
    }
console.log(sum(1, 4));