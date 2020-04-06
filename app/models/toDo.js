import { generateId } from "../utils.js";
export default class ToDo {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this._id = data.id || generateId();
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {}
}