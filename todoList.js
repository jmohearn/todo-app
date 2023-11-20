class TodoList {
  constructor() {
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
    this.saveTaskstoLocalStorage();
    this.generateTodoUi();
  }

  saveTaskstoLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.taskList));
  }

  loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem("tasks");
    this.taskList = JSON.parse(storedTasks) || [];
    console.log(this.taskList);
    this.generateTodoUi();
  }

  generateTodoUi() {
    const todoListUI = document.getElementById("app-body--todos");
    todoListUI.innerHTML = "";

    this.taskList.forEach((task, i) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                  <h3 class="app-body--todo-header">${task.title}</h3>
                  <h3 class="app-body--todo-date">${task.date}</h3>
                  <h3 class="app-body--todo-completion">${task.completion}</h3>
                  <div id=${i} class="app-body--todo-btn">Delete</div>`;
      listItem.classList.add("app-body--todo");
      todoListUI.appendChild(listItem);
    });
  }
}
