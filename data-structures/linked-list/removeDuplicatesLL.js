function LinkedList() {
  this._head = null;
  this._size = 0;
}

LinkedList.prototype = {
  createNode: function(val) {
    return {
      data: val,
      next: null
    }
  },
  addToTail: function(val) {
    var current,
      newNode = this.createNode(val);
    if (this._head == null) {
      this._head = newNode;
    } else {
      current = this._head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this._size++;
  },
  removeDuplicates: function() {
    prev = this._head;
    current = this._head.next;
    hash = {};
    while (current != null) {
      if (!hash[current.data]) {
        hash[current.data] = true;
      } else {
        prev.next = current.next;
        this._size--;
      }
      prev = current;
      current = current.next;
    }
  }
}

var ll = new LinkedList();

ll.addToTail("F");
ll.addToTail("O");
ll.addToTail("L");
ll.addToTail("L"); 
ll.addToTail("O");
ll.addToTail("W");
ll.addToTail("U");
ll.addToTail("P");


// ll.removeDuplicates();

console.log(ll);
