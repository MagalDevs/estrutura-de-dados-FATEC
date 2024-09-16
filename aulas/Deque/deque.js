class Deque{
    constructor(){ 
        this.count=0; // Apontador para o fim da fila.
        this.lowestCount = 0; // Apontador para o início da fila.
        this.items = {}; // Um dado do tipo objeto indefinido ainda. 

    }

    addFront(element){ 
        if(this.isEmpty()){
            this.addBack(element); // O mesmo que faz o método enqueue(), da classe Queue().
        } 
        else{
            if(this.lowestCount > 0){ 
                this.lowestCount--;
                this.items[this.lowestCount] = element;
            }
            else{
                for(let i=this.count; i>0; i--){
                    this.items[i-1] = this.items[i];
                }
                count++;
                this.lowestCount = 0;
                this.items[0] = element;
            }
        } 
    }

    addBack(element){ // O mesmo que faz o método enqueue(), da classe Queue().
        this.items[this.count] = element;
        this.count++;
    }

    removeFront(){ // O mesmo que faz o método dequeue(), da classe Queue().
        if(this.isEmpty()){
            return undefined;
        }
        // Salva o primeiro elemento da fila, pois será removido.
        const result = this.items[this.lowestCount]; 
        delete this.items[this.lowestCount]; // Removi o primeiro elemento da fila.
        this.lowestCount++; // Este índice não existe mais, pois foi removido.
        return result;
    }

    removeBack(){ // O mesmo que faz o método pop(), da classe Stack().
        if(this.isEmpty()){
            return undefined;
        }
        // salva o último elemento da fila, pois será removido.
        const result = this.items[this.count-1];
        delete this.items[this.count-1];
        this.count--;
        return result;
    }

    // Dando uma espiada no primeiro elemento da fila.
    peekFront(){ // O mesmo que faz o método peek(), da classe Queue().
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack(){ // O mesmo que faz o método peek(), da classe Stack().
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1];
    }

    clear(){
        this.items = {};
        this.count = 0;
        this;lowestCount = 0;
    }

    size(){
        return this.count - this.lowestCount;
    }

    isEmpty(){
        return this.size() === 0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const deque = new Deque(); 
console.log("deque.isEmpty()",deque.isEmpty()); // true
console.log("deque.size()",deque.size()); // 0 (zero)
deque.addBack('John');
deque.addBack('Jack');
console.log("deque.size()",deque.size());  // 2
console.log(deque.toString()); // John,Jack
deque.addBack("Camila");
console.log(deque.toString()); // John,Jack,Camila
console.log("deque.isEmpty()",deque.isEmpty()); // false
console.log("deque.size()",deque.size()); // 3
deque.removeFront(); // John foi removido
console.log(deque.toString()); // Jack,Camila
deque.removeBack(); // Camila desistiu de esperar na fila, saiu.
console.log(deque.toString()); // Jack
deque.addFront("John"); // John entra de novo, no início da fila, para pedir informação rápida.
console.log(deque.toString()); // John,Jack