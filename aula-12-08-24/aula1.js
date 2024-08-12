
console.log("caió lindo");
alert("kn gostoso e gustavin lindo");
var num = 1; // {1}
num = 3; // {2}
var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);

var myVariable = 'global';
var myOtherVariable = 'global';
function myFunction() {
var myVariable = 'local';
return myVariable;
}
function myOtherFunction() {
myOtherVariable = 'local';
return myOtherVariable;
}
console.log(myVariable); //{1}
console.log(myFunction()); //{2}
console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5}

var num = 0; // {1}
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1; // {2}
num -= 2;
num *= 3;
num /= 2;
num %= 3;
console.log('num == 1 : ' + (num == 1)); // {3}
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true && false : ' + (true && false)); // {4}
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));
/*
function soma(){
    let soma = 0;
    let num1 = parseInt(prompt('digite um número'));
    soma += num1
    while(true){
        console.log(soma)
        let num2 = parseInt(prompt('escolha um número pra somar(digite 0 para parar)'));
        if (num2 == 0){
            alert(soma);
            break;
        } else{
            soma += num2;
            continue;
        }
    }

    if(soma >= 100){
        document.write(` O valor de ${soma} da variável soma, é maior que 100`)
    } else {
        document.write(` O valor de ${soma} da variável soma, é menor que 100`)
    }

    return soma
}

soma();
*/