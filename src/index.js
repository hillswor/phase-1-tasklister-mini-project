document.addEventListener("DOMContentLoaded", () => {
  const newTaskSubmitBtn = document.querySelector("#new-task-submit");
  const taskList = document.querySelector("#tasks");

  function submitTask() {
    event.preventDefault();
    const taskDescription = document.querySelector("#new-task-description");
    const toDo = taskDescription.value;
    const newTask = document.createElement("li");
    newTask.textContent = toDo;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove Task";
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskDescription.value = "";
    deleteButton.addEventListener("click", () => {
      newTask.remove();
      deleteButton.remove();
    });
  }

  newTaskSubmitBtn.addEventListener("click", submitTask);
});
