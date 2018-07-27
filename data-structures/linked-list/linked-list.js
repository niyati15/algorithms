//Linkedlist is a datastructure with nodes and each node has a previous pointer and a next pointer
//constructor for linkedlist
function LinkedList(){
    this.head = null;
    this.tail = null;
}
//constructor for node
function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}
//add to head 
LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

// var ll = new LinkedList();

// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

// console.log(ll);

//add to tail
LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

// var ll1 = new LinkedList();

// ll1.addToTail(1000);
// ll1.addToTail(2000);
// ll1.addToTail(3000);

// console.log(ll1);

//Remove head from linkedlist
LinkedList.prototype.removeHead = function(){
    if(!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}
