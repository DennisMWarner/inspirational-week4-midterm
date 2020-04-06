import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";

  //for each item that exists, use the getter of the object to build an HTML template
  store.State.toDos.forEach((element) => {
    template += element.Template;

    console.log(element.id, element.completed);
    if (element.completed) {
    }
  });

  //Display a default a default message if there are no todo items in the store
  if (store.State.toDos.length == 0) {
    template = /*html*/ `<div class="col-12 text-light">
    <h5 class="see-through-light p-2 m-2 rounded font-italic">Congratulations!  Nothing to do today!</h5>
    </div>`;
  }

  //inject the completed template into the HTML
  document.getElementById("todo-list").innerHTML = template;

  /*if the number of items in the array is one, display a custom message with singular verbage... otherwise use plural verbage for 0 or more than 1*/

  if (store.State.toDos.length == 1) {
    document.getElementById("numberOfTodos").innerHTML =
      "( " + store.State.toDos.length.toString() + " item ) ";
  } else {
    document.getElementById("numberOfTodos").innerHTML =
      "( " + store.State.toDos.length.toString() + " items ) ";
  }
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
