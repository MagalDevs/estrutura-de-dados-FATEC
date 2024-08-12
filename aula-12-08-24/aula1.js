/*
console.log("caió lindo");
alert("kn gostoso e gustavin lindo");
var num = 1;
num = 3;
var price = 1.5;
const myname = "Magas";
var nullvar = null;
var und = undefined;
console.log("num: " + num);
console.log("Meu nome: " + myname);
console.log("preço: " + price);
console.log("nullVar: " + nullvar);
console.log("und: " + und);
*/
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