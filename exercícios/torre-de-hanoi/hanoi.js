class Stack {
    constructor() {
        this.items = [];
    }

    // Adiciona elemento ao topo da pilha
    push(element) {
        this.items.push(element);
    }

    // Remove e retorna o elemento do topo da pilha
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    // Retorna o elemento do topo da pilha sem removê-lo
    peek() {
        return this.items[this.items.length - 1];
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Retorna o tamanho da pilha
    size() {
        return this.items.length;
    }

    // Exibe o conteúdo da pilha como string
    toString() {
        return this.items.toString();
    }
}

// Função recursiva para resolver a Torre de Hanoi
function hanoi(n, source, target, auxiliary) {
    if (n === 1) {
        moveDisk(source, target);
    } else {
        hanoi(n - 1, source, auxiliary, target);
        moveDisk(source, target);
        hanoi(n - 1, auxiliary, target, source);
    }
}

function moveDisk(source, target) {
    const disk = source.pop();
    target.push(disk);
    console.log(`Move disco ${disk} de ${source.name} para ${target.name}`);
}


const P1 = new Stack();
P1.name = "P1";
const P2 = new Stack();
P2.name = "P2";
const P3 = new Stack();
P3.name = "P3";


P1.push(3);
P1.push(2);
P1.push(1);


console.log("Estado inicial:");
console.log(`P1: ${P1.toString()}`);
console.log(`P2: ${P2.toString()}`);
console.log(`P3: ${P3.toString()}`);


hanoi(3, P1, P3, P2);


console.log("Estado final:");
console.log(`P1: ${P1.toString()}`);
console.log(`P2: ${P2.toString()}`);
console.log(`P3: ${P3.toString()}`);
