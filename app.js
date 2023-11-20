// Initialize app
todoList = new TodoList();

// Declare global variables
const closeModalBtn = document.querySelector(".btn--close-modal");
const editBtn = document.querySelector(".app-controls--new-todo-edit-btn");
const newTodoBtn = document.querySelector(".app-controls--new-todo-add-btn");
const todoDeleteBtn = document.querySelector(".app-body--todo-btn");
const currentTime = new Date();
const modal = document.querySelector(".modal");
const editTitleInput = document.querySelector(
  "#app-controls--new-todo-title-edit"
);
const editCompleteInput = document.querySelector(
  "#app-controls--new-todo-completion-edit"
);

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  todoList.loadTasksFromLocalStorage();
});

closeModalBtn.addEventListener("click", closeModal);

newTodoBtn.addEventListener("click", renderNewTodo);

// Functions
function closeModal() {
  modal.classList.add("hidden");
}

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

function renderEditTodo(index) {
  let editTitle = document.querySelector(
    "#app-controls--new-todo-title-edit"
  ).value;
  let editComplete = document.querySelector(
    "#app-controls--new-todo-completion-edit"
  ).value;
  modal.classList.add("hidden");
  todoList.editTask(index, editTitle, editComplete);
}

function editTaskModal(index) {
  modal.classList.remove("hidden");

  editBtn.addEventListener("click", editBtnHandler);

  function editBtnHandler() {
    if (!editTitleInput.value || !editCompleteInput.value) {
      alert("Need to enter both fields to edit");
    } else {
      renderEditTodo(index);
      editBtn.removeEventListener("click", editBtnHandler);
    }
  }
}
