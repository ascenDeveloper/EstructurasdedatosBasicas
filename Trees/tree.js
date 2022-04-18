class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = newNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;

                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
    }
    searchRecursive(value, tree = this.root) {

        if (tree == null) {
            return "El elemento no se encuentra.";
        } else if (value > tree.value) {
            return this.search(value, tree.right);
        } else if (value < tree.value) {
            return this.search(value, tree.left);
        } else {
            return "¡El elemento ha sido encontrado!";
        }

    }
    search(value) {
        let currentNode = this.root
        while (currentNode && currentNode.value != value) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            }
        }
        if (!currentNode) return false
        return currentNode
    }
}