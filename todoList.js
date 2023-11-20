class TodoList {
  constructor() {
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
    this.saveTaskstoLocalStorage();
    this.generateTodoUi();
  }

  editTask(index, newTitle, newCompletion) {
    this.taskList[index].title = newTitle;
    this.taskList[index].completion = newCompletion;
    this.saveTaskstoLocalStorage();
    this.generateTodoUi();
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
    this.saveTaskstoLocalStorage();
    this.generateTodoUi();
  }

  saveTaskstoLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.taskList));
  }

  loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem("tasks");
    this.taskList = JSON.parse(storedTasks) || [];
    this.generateTodoUi();
  }

  generateTodoUi() {
    const todoListUI = document.getElementById("app-body--todos");
    todoListUI.innerHTML = "";

    this.taskList.forEach((task, i) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                  <h3 class="app-body--todo-header item">${task.title}</h3>
                  <h3 class="app-body--todo-completion item">${task.completion}</h3>
                  <button id=${i} class="app-body--todo-btn edit" onClick="editTaskModal(${i})">Edit</button>
                  <button id=${i} class="app-body--todo-btn delete" onClick="todoList.deleteTask(${i})">Delete</button>`;
      listItem.classList.add("app-body--todo");
      todoListUI.appendChild(listItem);
    });
  }
}
