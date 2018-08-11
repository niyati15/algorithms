// *************************************************** HASH TABLE ESSENTIALS ***************************************************
//Hash table is a very efficient data structure. 
// It has 2 operations - insert and get, both with the time complexity of constant time i.e. O(1).
// This ds is like the object where there is a key and a value. They key is hashed using the hashing function. 
// All the values are stored in an array like structure and there are multiple buckets in the array. The hashed value is like the address for the buckets.
// ****************************************************************************************************************************

function HashTable(size){
    this.buckets = Array(size);//make a new array of this size and assign to the buckets property
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key){
    var total = 0;
    for(var i = 0; i < key.length; i++){
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;
}
var myHT = new HashTable(30);

console.log(myHT);