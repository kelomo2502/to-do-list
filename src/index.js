import './style.css';
// To-do list Array of Objects
const todolist = [
  {
    index: 0,
    description: 'Wash the Car',
    completed: false,
  },
  {
    index: 1,
    description: 'Clean the Garden',
    completed: false,
  },
  {
    index: 2,
    description: 'Study Javascript Tutorials',
    completed: false,
  },
];
class Tasks {
  constructor() {
    this.toDoList = [];
  }

  add(description, completed) {
    this.toDoList = this.toDoList.concat({
      index: Date.now(),
      description,
      completed,
    });
  }

  remove(id) {
    this.toDoList = this.toDoList.filter((list) => list.id !== Number(id));
  }
}
// new task
const lists = new Tasks();
const todoDiv = document.querySelector('.lists');
const getTodoList = () => {
  todolist.forEach((list) => {
    const li = document.createElement('li');
    li.classList.add('list');
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');
    // checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = list.completed;
    liDiv.appendChild(checkbox);
    // description
    const desc = document.createElement('p');
    desc.innerText = list.description;
    liDiv.appendChild(desc);
    li.appendChild(liDiv);
    // vertical dots
    const dots = document.createElement('i');
    dots.classList.add('fa');
    dots.classList.add('fa-ellipsis-v');
    li.appendChild(dots);
    todoDiv.appendChild(li);
  });
};
getTodoList();
// Add function
const listInput = document.getElementById('todo-input');
listInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    lists.setTodo();
  }
});
