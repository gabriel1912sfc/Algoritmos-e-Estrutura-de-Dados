//Implementação de uma stack utilizando uma linked list.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  push(value) {
    let item = new Node(value);
    item.next = this.head;
    this.head = item;
    this._size++;
  }

  pop() {
    if (this.head == null) return console.log("Empty Stack");

    let poppedNode = this.head;
    this.head = poppedNode.next;
    this._size--;
    return poppedNode.value;
  }

  peek() {
    if (this.head == null) return console.log("Empty Stack");
    return console.log(this.head.value);
  }

  size() {
    return console.log(this._size);
  }
}

let stackLinkedList = new StackLinkedList();
stackLinkedList.pop();
