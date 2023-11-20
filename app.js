// Declare variables
const app = document.querySelector(".app-container");

const todoDeleteBtn = document.querySelector(".app-body--todo-btn");
const completeDate = document.querySelector(".app-body--todo-completion");
const currentTime = new Date();

let todoList = [];

class Todo {
  constructor(title, date, completion) {
    this.title = title;
    this.date = date;
    this.completion = completion;
    this.addTodo();
  }

  addTodo() {
    todoList.push(this);
  }
}

new Todo("shop", "today", "tomorrow");
new Todo("bowling", "today", "friday");
new Todo("clean", "today", "saturday");

class App {
  constructor(todos) {
    this.todos = todos;
    this.generateAppUI();
  }

  generateAppUI() {
    app.innerHTML = `<div class="app-header">
    <h1>ToDo App</h1>
    <h2>Keep track of all your todos!</h2>
  </div>
  <div class="app-controls">
    <div class="app-controls--row">
      <input
        type="text"
        name="new-todo-title"
        id="app-controls--new-todo-title"
        placeholder="ToDo"
      />
    </div>
    <div class="app-controls--row">
      <input
        type="text"
        name="new-todo-completion"
        id="app-controls--new-todo-completion"
        placeholder="Completion Date"
      />
    </div>
    <div class="app-controls--row">
      <button class="app-controls--new-todo-add-btn">Add ToDo</button>
    </div>
  </div>
  <div class="app-body">
    <ul class="app-body--todos">
      <li class="app-body--todo">
        <h3 class="app-body--todo-header">Shopping</h3>
        <h3 class="app-body--todo-date">Today</h3>
        <h3 class="app-body--todo-completion">Tomorrow</h3>
        <div class="app-body--todo-btn">Delete</div>
      </li>
    </ul>
  </div>`;

    this.generateTodoUi();
  }

  generateTodoUi() {
    const todoListUI = document.querySelector(".app-body--todos");

    this.todos.forEach((todo) => {
      let html = `
            <li class="app-body--todo">
                <h3 class="app-body--todo-header">${todo.title}</h3>
                <h3 class="app-body--todo-date">${todo.date}</h3>
                <h3 class="app-body--todo-completion">${todo.completion}</h3>
                <div class="app-body--todo-btn">Delete</div>
            </li>`;

      todoListUI.insertAdjacentHTML("afterend", html);
    });

    this.newTodoBtnHandler();
  }

  newTodoBtnHandler() {
    const newTodoBtn = document.querySelector(
      ".app-controls--new-todo-add-btn"
    );
    const newTodoTitleInput = document.querySelector(
      "#app-controls--new-todo-title"
    );
    const newTodoCompleteInput = document.querySelector(
      "#app-controls--new-todo-completion"
    );

    newTodoBtn.addEventListener("click", function () {
      if (!newTodoTitleInput.value || !newTodoCompleteInput.value) {
        alert("You need to enter a todo title/ completion date!");
      } else {
        new Todo(newTodoTitleInput.value, "today", newTodoCompleteInput.value);
        newTodoTitleInput.value = "";
        newTodoCompleteInput.value = "";
      }
    });
  }
}

new App(todoList);
