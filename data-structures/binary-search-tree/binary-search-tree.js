// *************************************************** BINARY SEARCH TREE ESSENTIALS ***************************************************
// BST is a collection of nodes where the nodes are connected in a certain way
// Each has 2 child nodes - a left node and a right node
// All the left nodes are to less or equal value to the parent node and all right nodes are of greater value than that of the parent
//Consider all the nodes as individual BST 
// *************************************************************************************************************************************

//constructor function for BST
function BST(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

//Insert nodes into a BST
BST.prototype.insert = function(value){
    if(value <= this.value){
        if(!this.left) this.left = new BST(value);
        else this.left.insert(value);
    }
    else if(value > this.value){
        if(!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
}

//Contains function to check if the BST contains that value
BST.prototype.contains = function(value){
    if(value === this.value) return true;
    else if(value < this.value){
        if(!this.left) return false;
        else return this.left.contains(value);
    }
    else if(value > this.value){
        if(!this.right) return false;
        else return this.right.contains(value);
    }
}

//DFS - Depth First Traversal of a BST - in-order version: we will touch all the nodes from least value to the greatest value
BST.prototype.depthFirstTraversal = function(iteratorFunc){
    if(this.left) this.left.depthFirstTraversal(iteratorFunc);
    iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc);
}

function log(value){
    console.log(value);
}

// var bst = new BST(50);

// bst.insert(30);
// bst.insert(20);
// bst.insert(10);
// bst.insert(45);
// bst.insert(35);
// bst.insert(70);
// bst.insert(100);
// bst.insert(60);
// bst.insert(59);
// bst.insert(85);
// bst.insert(105);

// console.log(bst);

// console.log(bst.contains(100001));
// bst.depthFirstTraversal(log);
