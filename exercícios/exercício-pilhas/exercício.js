function decimalParaBinario(decimal) {
    if (decimal === 0) return '0';

    let pilha = []; 
    let binario = ''; 

    while (decimal > 0) {
        pilha.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }

    while (pilha.length > 0) {
        binario += pilha.pop(); 
    }

    return binario;
}

console.log(decimalParaBinario(10));
console.log(decimalParaBinario(255));
console.log(decimalParaBinario(13));