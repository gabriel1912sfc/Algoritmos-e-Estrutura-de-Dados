//Stack criada com pointeiro e com delimitação do max length do array. 

class StackPointer{
  constructor(max_length=100){
    this.arr = new Array(max_length).fill(null)
    this.pointer = 0
  }

  push(item){
    this.arr[this.pointer] = item
    this.pointer += 1
  }

  pop(){
    if(this.pointer == 0){
      return console.log("Empty Array")
    }
    this.arr[this.pointer - 1] = null
    this.pointer -= 1
  }

  peek(){
    return console.log(this.arr[this.pointer - 1])
  }

  size(){
    return console.log(this.pointer)
  }
}

let stackPointer = new StackPointer()
stackPointer.push(1)
stackPointer.push(4)
stackPointer.push(5)
stackPointer.size()
stackPointer.peek()
stackPointer.pop()
stackPointer.peek()
stackPointer.size()