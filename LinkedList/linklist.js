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
            this.append(value, current.next)
        }
    }
}