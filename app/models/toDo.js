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
    return /*html*/ `<div class="col-12 text-light">
              <div><p class="see-through-light p-2 m-2 rounded" id="${this.id}">${this.description}  </p></div>
              <div><button class=" btn crounded no-border see-through-dark text-secondary" onClick="app.todoController.removeTodo('${this.id}')"><p>&times</p></button></div>
            </div>`;
  }
}
