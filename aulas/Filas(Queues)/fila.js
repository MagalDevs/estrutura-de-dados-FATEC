class Queue{
    constructor(){
        this.count = 0; //{1}
        this.lowestCount = 0; //{2}
        this.items = {}; //{3}
    }

    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]; //{1}
        delete this.items[this.lowestCount] //{2}
        this.lowestCount++ //{3}
        return result; //{4}
    }

    items = {
        0: 5,
        1: 8
    }
    count = 2;
    lowestCount = 0

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount]
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
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items}`;
        }
        return objString;
    }
}

const filaNova = new Queue();

console.log(filaNova.isEmpty());
filaNova.enqueue('Daniel');
filaNova.enqueue('Reduzino');
console.log(filaNova.toString());

filaNova.enqueue('Davi Berto')

console.log(filaNova.toString());
console.log(filaNova.size());
console.log(filaNova.isEmpty());
filaNova.dequeue();
filaNova.dequeue();
console.log(filaNova.toString());