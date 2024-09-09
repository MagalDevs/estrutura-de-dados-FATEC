class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount];
    }

    size(){
        return this.count - this.lowestCount;
    }

    isEmpty(){
        return this.size() === 0;
    }

    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }

    inverse(){
        if(this.isEmpty()){
            return '';
        }
        let reversedQueue = {};
        let reversedIndex = 0;

        for (let i = this.count - 1; i >= this.lowestCount; i--) {
            reversedQueue[reversedIndex] = this.items[i];
            reversedIndex++;
        }

        this.items = reversedQueue;
    
        this.lowestCount = 0;
        this.count = reversedIndex;
    }
}

const filaNova = new Queue();
filaNova.dequeue();
filaNova.dequeue();
filaNova.enqueue(12);
filaNova.enqueue(18);
filaNova.enqueue(21);
filaNova.enqueue(90);
filaNova.enqueue(76);
filaNova.enqueue(43);
console.log(filaNova.items);
filaNova.inverse()
console.log(filaNova)

/*
let fila = [1,5,4,2,7]
console.log(fila);
fila.reverse();
console.log(fila);
*/