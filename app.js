// Declare variables
todoList = new TodoList();

const newTodoBtn = document.querySelector(".app-controls--new-todo-add-btn");

const todoDeleteBtn = document.querySelector(".app-body--todo-btn");
const currentTime = new Date();

function renderNewTodo() {
  const newTodoTitleInput = document.querySelector(
    "#app-controls--new-todo-title"
  );
  const newTodoCompleteInput = document.querySelector(
    "#app-controls--new-todo-completion"
  );
  new Todo(newTodoTitleInput.value, "today", newTodoCompleteInput.value);
  newTodoTitleInput.value = "";
  newTodoCompleteInput.value = "";
}

newTodoBtn.addEventListener("click", renderNewTodo);

document.addEventListener("DOMContentLoaded", () => {
  todoList.loadTasksFromLocalStorage();
});
