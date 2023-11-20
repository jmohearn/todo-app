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

  if (!newTodoTitleInput.value || !newTodoCompleteInput.value) {
    alert("Need to complete form!");
    return;
  } else {
    new Todo(newTodoTitleInput.value, currentTime, newTodoCompleteInput.value);
    newTodoTitleInput.value = "";
    newTodoCompleteInput.value = "";
    newTodoCompleteInput.blur();
  }
}

newTodoBtn.addEventListener("click", renderNewTodo);

document.addEventListener("DOMContentLoaded", () => {
  todoList.loadTasksFromLocalStorage();
});
