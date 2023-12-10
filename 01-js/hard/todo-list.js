/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.stack = []
  }

  add(task){
    this.stack.push(task)
    return this.stack
  }

  remove(index){
    let deleteEle = this.stack[index]
    let result = this.stack.filter(element => element != deleteEle)
    this.stack = result
    return this.stack
  }

  update(index,task){
    if (this.stack.length <= index){

      return this.stack
    }
    this.stack[index] = task
    return this.stack
  }

  get(index){
    if (index >= this.stack.length)return null
    return this.stack[index]
  }

  getAll(){
    return this.stack
  }

  clear(){
    this.stack = []
    return this.stack
  }


}

module.exports = Todo;
