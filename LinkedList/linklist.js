let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: { value: 4, next: null }
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;

        this._length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this._length++;

        return this;
    }
    appendRecursive(value, current) {
        //console.log(!current)
        if (!current) {
            current = this.head
        }
        if (current.next == null) {
            let nodo = new Nodo(value)
            current.next = nodo
            this.tail = nodo
        } else {
            this.appendRecursive(value, current.next)
        }
    }
    prepend(value) {
        const newNode = new Node(value);

        newNode.next = thi.head;
        this.head = newNode;

        this._length++;
        return this;
    }
    insert(index, value) {
        if (index >= this._length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;

        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this._length++;
        return this;
    }
    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
    delete(index) {
        if (index <= 0) return this.shift();
        if (index >= this.length) return this.pop();
        const prevDeletedNode = this.getTheIndex(index - 1);
        prevDeletedNode.next = prevDeletedNode.next.next;
        this.length--;

        return this;
    }

    shift() {
        const secondNode = this.head.next;
        this.head = secondNode;
        this.length--;

        return this;
    }

    pop() {
        const prevLastNode = this.getTheIndex(this.length - 2);
        this.tail = prevLastNode;
        prevLastNode.next = null;
        this.length--;

        return this;
    }

}