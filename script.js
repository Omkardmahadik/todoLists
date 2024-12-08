document.addEventListener(`DOMContentLoaded`, () => {
  // day1: adding array

  const todoInput = document.getElementById(`todo-input`);
  const addTaskButton = document.getElementById(`add-task-btn`);
  const todoList = document.getElementById(`todo-list`);

  // arrat to store data in the list
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((tasks) => renderTask(tasks));

  // in this code the input will  add the data in console
  addTaskButton.addEventListener(`click`, () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      Text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    todoInput.value = ""; // clear input
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement(`li`)
    li.setAttribute(`data-id`,task.id)
    if(task.completed) li.classList.add(`completed`)
    li.innerHTML = `<span>${task.Text}</span>
    <button >delete</button>
    `;
    
    li.addEventListener(`click`,(e)=>{
       if(e.target.tagName === `BUTTON`) return;

       task.completed = !task.completed;
       li.classList.toggle(`completed`);
       saveTasks();
    });
    todoList.appendChild(li)
  }

  function saveTasks() {
    localStorage.setItem(`tasks`, JSON.stringify(tasks));
  }
});
