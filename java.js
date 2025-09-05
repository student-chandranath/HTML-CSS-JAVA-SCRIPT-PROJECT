let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.onclick = function() {
  let task = taskInput.value.trim();
  if(task === "") return;

  let li = document.createElement("li");
  li.textContent = task;

  li.onclick = function() {
    li.classList.toggle("done"); // mark done
  };

  taskList.appendChild(li);
  taskInput.value = "";
}