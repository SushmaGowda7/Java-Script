class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(data){
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        }else{
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if(node.left !== null){
                        return searchTree(node.left);
                    }
                }else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }else {
                  return null;
                }
            };
            return searchTree(node);
        }
    }
    search(data){
        let currentNode = this.root;
        while(currentNode){
            if(data === currentNode.data){
                return true;
            }
            if(data < currentNode.data){
               currentNode = currentNode.left;
            }else{
               currentNode = currentNode.right;
            }
        }
        return false;
    }
}

const bst = new BST(15);
bst.insert(12);
bst.insert(22);
bst.insert(3);
bst.insert(42);
bst.insert(56);
bst.insert(65);
console.log(bst.search(12));
console.log(bst);
