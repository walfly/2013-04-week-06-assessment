var makeLinkedList = function(){
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;

  linkedList.addToTail = function(value){
    var newNode = makeNode(value);
    this.head = this.head || newNode;
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  linkedList.removeHead = function(){
    var oldHead = this.head;
    this.head = oldHead.next || null;
    return oldHead.value;
  };

  linkedList.contains = function(item){
    var result = false;
    var current = head;
    while (current !== null) {
      if(result) return result;
      if(current.value === item) result = true;
      current = current.next;
    }
    return result;
  };

  return linkedList;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
