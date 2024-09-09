class Deque{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
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

    addFront(element){
        if(this.isEmpty()){ //{1}
            this.addback(element);
        }else if(this.lowestCount > 0){ //{2}
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else{
            for (let i = this.count; i > 0; i--) {//{3}
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element; //{4}
        }
    }

    items = {
        1: 8,
        2: 9
    };
    count = 3;
    lowestCount = 1;
}