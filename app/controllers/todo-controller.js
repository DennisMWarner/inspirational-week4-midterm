import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  document.getElementById;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    console.log("TodoController constructed...");
    TodoService.getTodos();
    store.subscribe("toDo", _drawTodos);
  }

  addTodo(e) {
    console.log("addTodo called...", e.target.aNewItem.value);
    e.preventDefault();
    let form = e.target;
    let todo = {};
    // TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
