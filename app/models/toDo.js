import { generateId } from "../utils.js";
export default class ToDo {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data._id || generateId();
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/ `<div class="col-12 mx-auto text-light" id="${this.id}">
              <button class="btn see-through-light w-75 p-1 m-2 rounded form-control font-weight-bolder" onClick="app.todoController.toggleTodoStatus('${this.id}')"><h4>${this.description}</h4></button>
              <button class=" btn rounded no-border see-through-dark text-secondary" onClick="app.todoController.removeTodo('${this.id}')"><h4>&times</h4></button></<button>
              </div>
            `;
  }
}
