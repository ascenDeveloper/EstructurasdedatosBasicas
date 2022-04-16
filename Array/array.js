class myArray {
    constructor() {
        this.data = {};
        this._length = 0;
    };
    get(index) {
        return this.data[index]
    };
    push(item) {
        this.data[this._length] = item;
        this._length++;
        return this.data;
    };
    pop() {
        const lastItem = this.data[this._length - 1];
        delete this.data[this._length - 1];
        this._length--;
        return lastItem
    }
    delete(item) {
        const dat = this.data[item]
        this.shiftIndex(item);
        this._length--;
        return item;
    }

    shiftIndex(index) {
        for (let i = index; i < this._length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this._length - 1]
        this._length - 1;
    }

}
myArray = new myArray()

myArray.push("Diego");
myArray.push("Karen");
myArray.push("Oscar");
myArray.delete(1);
console.log(myArray)