//Implementação de uma stack em JavaScript com métodos de array
class Stack{
  constructor(){
    this.arr = []
  }

  push(item){
    this.arr.push(item);
  }

  pop(){
    if(!this.arr.length){
      console.log("The array is empty!")
    }
    return this.arr.pop()
  }

  peek(){
    if(!this.arr.length){
      console.log("The array is empty!")
    }
    return console.log(this.arr[this.arr.length - 1])
  }

  size(){
    return console.log(this.arr.length)
  }

}

let stack = new Stack()
stack.push(3)
stack.push(4)
stack.peek()
stack.size()
stack.pop()
stack.peek()
stack.size()