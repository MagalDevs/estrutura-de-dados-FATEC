class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(key){
        if(this.root == null){
            let node = new Node(key);
            console.log("Primeiro node: " + node.key);
            this.root = node;
        }else{
            this.insertNode(this.root, key);
        }
    }

    insertNode(node, key){
        if(key < node.key){
            if(node.left == null){
                let nodeAux = new Node(key);
                node.left = nodeAux;
            }else{
                this.insertNode(node.left, key);
            }
        }else{
            if(node.right == null){
                node.right = new Node(key);
            }else{
                this.insertNode(node.right, key);
            }
        }
    }

    remove(node, key){
        if(node == null){
            return null;
        }

        if(key < node.key){
            node.left = this.remove(node.left, key);
            return node;
        }else{
            if(key > node.key){
                node.right = this.remove(node.right, key);
                return node;
            }else{
                if(node.left == null && node.right == null){
                    node = null;
                    return node;
                }

                if(node.left == null){
                    node = node.right;
                    return node;
                }else{
                    if(node.right == null){
                        node = node.left;
                        return node;
                    }
                }

                const aux = this.min(node.right);
                node.key = aux.key;
                node.right = this.remove(node.right, aux.key);
                return node;
            }
        }
    }

    search(node, key){
        if(node == null){
            return false;
        }

        if(key < node.key){
            return this.search(node.left, key);
        }else if(key > node.key){
            return this.search(node.right, key);
        }else{
            return true;
        }
    }

    inOrderTraverse(node){
        if(node != null){
            this.inOrderTraverse(node.left);
            console.log(node.key);
            this.inOrderTraverse(node.right);
        }
    }

    preOrderTraverse(node){
        if(node != null){
            console.log(node.key);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
    }

    postOrderTraverse(node){
        if(node != null){
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            console.log(node.key);
        }
    }

    min(node){
        let current = node;
        while(current != null && current.left != null){
            current = current.left;
        }

        return current;
    }

    max(node){
        let current = node;
        while(current != null && current.right != null){
            current = current.right;
        }
        return current;
    }
}

const tree = new BinarySearchTree();
tree.insert(7);
tree.insert(5);
tree.insert(12);
tree.insert(3);
tree.insert(9);
tree.insert(15);
tree.insert(4);
tree.insert(11);
tree.insert(13);

console.log("tree.inOrderTraverse(tree.root)");
tree.inOrderTraverse(tree.root);

console.log("tree.preOrderTraverse(tree.root)");
tree.preOrderTraverse(tree.root);

console.log("tree.postOrderTraverse(tree.root)");
tree.postOrderTraverse(tree.root);

console.log("tree.min(node)");
let nodemin = tree.min(tree.root);
console.log(nodemin.key);

console.log("tree.max(node)");
let nodemax = tree.max(tree.root);
console.log(nodemax.key);

console.log("tree.search(tree.root,14)");
let result = tree.search(tree.root,14);
console.log(result);

console.log("tree.search(tree.root,999)");
result = tree.search(tree.root,999);
console.log(result);

// Removendo uma folha à direita:
console.log("tree.search(tree.root,10)");
result = tree.search(tree.root,10);
console.log(result);
tree.remove(tree.root,10);
console.log("console.remove(tree.root,10)");
console.log("tree.search(tree.root,10)");
result = tree.search(tree.root,10);
console.log(result);

// Removendo uma folha à esquerda:
console.log("tree.search(tree.root,12)");
result = tree.search(tree.root,12);
console.log(result);
tree.remove(tree.root,12);
console.log("console.remove(tree.root,12)");
console.log("tree.search(tree.root,12)");
result = tree.search(tree.root,12);
console.log(result);

// Removendo um node com filhos à esquerda e à direita:
console.log("tree.search(tree.root,7)");
result = tree.search(tree.root,7);
console.log(result);
tree.remove(tree.root,7);
console.log("console.remove(tree.root,7)");
console.log("tree.search(tree.root,7)");
result = tree.search(tree.root,7);
console.log(result);
