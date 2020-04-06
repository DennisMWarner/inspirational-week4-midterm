import store from "../store.js";
import ToDo from "../models/toDo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/dennis_warner/todos/",
  timeout: 8000,
});

class TodoService {
  getTodos() {
    todoApi
      .get()
      .then((res) => {
        let toDos = res.data.data.map((item) => new ToDo(item));
        store.commit("toDos", toDos);
      })
      .catch((err) => {
        console.error(err);
      });

    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi
      .post("", todo)
      .then((res) => {
        let newTodoListItem = new ToDo(res.data.data);
        let toDos = [newTodoListItem, ...store.State.toDos];
        store.commit("toDos", toDos);
      })
      .catch((err) => console.error(err));

    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find((todo) => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    todoApi
      .delete(todoId)
      .then((res) => {
        this.getTodos();
      })
      .catch((err) => console.error(err));

    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
