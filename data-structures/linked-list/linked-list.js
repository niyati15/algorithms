// *************************************************** LINKED LIST ESSENTIALS ***************************************************
//Linkedlist is a datastructure with nodes and each node has a previous pointer and a next pointer
//Time Complexity:
//constant time for adding/removing head or tail
//O(n) for searching through a linked list
//advantages:
//can be stored in an efficient way in the memory. sometimes all the data cannot be stored together, here linkedlist can be 
//store in different locations and can be connected using pointers - better memory management.
//also, its time complexity is pretty efficient.
// ****************************************************************************************************************************



//constructor for linkedlist
function LinkedList() {
    this.head = null;
    this.tail = null;
};
//constructor for node
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
};
//add to head 
LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};

// var ll = new LinkedList();

// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

// console.log(ll);

//add to tail
LinkedList.prototype.addToTail = function (value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
};

// var ll1 = new LinkedList();

// ll1.addToTail(1000);
// ll1.addToTail(2000);
// ll1.addToTail(3000);

// console.log(ll1);

//Remove head from linkedlist
LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
};


//Remove tail from linked list
LinkedList.prototype.removeTail = function () {
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;
};

//Search in a linked list
LinkedList.prototype.search = function (searchValue) {
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === this.searchValue) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
};

//search the index of a value in linked list - indexOf() 
LinkedList.prototype.indexOf = function (searchValue) {
    var currentNode = this.head;
    var indexes = [];
    var currentIndex = 0;
    while (currentNode) {
        if(currentNode.value === searchValue){
            indexes.push(currentIndex);
        }
        currentNode = currentNode.next;
        currentIndex++;
    }
    return indexes;
};


// var ll = new LinkedList();
// ll.addToTail(100);
// ll.addToTail(300);
// ll.addToTail(300);
// ll.addToTail(400);

// console.log(ll.indexOf(300));