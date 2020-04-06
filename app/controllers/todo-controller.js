import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";
  store.State.toDos.forEach((element) => {
    template += element.Template;
  });
  if (store.State.toDos.length == 0) {
    template = /*html*/ `<div class="col-12 text-light">
    <h2 class="see-through-light p-2 m-2 rounded">Congratulations!  Nothing to do today!</h2>
  </div>`;
  }
  document.getElementById("todo-list").innerHTML = template;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers

    TodoService.getTodos();
    store.subscribe("toDos", _drawTodos);
  }

  addTodo(e) {
    e.preventDefault();

    let form = e.target;
    let newTodoObject = {
      description: form.todoItem.value,
    };
    TodoService.addTodoAsync(newTodoObject);
    form.reset();
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
