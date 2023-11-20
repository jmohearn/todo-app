class Todo {
  constructor(title, date, completion) {
    this.title = title;
    this.date = date;
    this.completion = completion;
    this.addTodo();
  }

  addTodo() {
    todoList.addTask(this);
  }
}
