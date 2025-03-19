ul = document.querySelector("ul");
submitbtn = document.querySelector("button");
submitbtn.id = "submitbtn";
input = document.querySelector("input");
body = document.querySelector("body");
const tasks = document.querySelector(".tasks-container");
getToUi();
let check = document.createElement("input");
function addTask(event) {
  event.preventDefault();
  let task = input.value;
  createTask(task);
  addToLocalStorage(task);
  input.value = "";
}

submitbtn.addEventListener("click", addTask);
function createTask(task) {
  if(task.trim()!=""){
    let li = document.createElement("li");
  li.textContent = task;
  let check = document.createElement("input");
  check.type = "checkbox";
  check.id = "check";
  let span = document.createElement("span");
  span.appendChild(check);
  span.appendChild(li);
  tasks.appendChild(span);
  let delbtn = document.createElement("button");
  delbtn.id = "delbtn";
  delbtn.innerText = "Delete";
  check.addEventListener("change", () => {
    if (check.checked) {
      completed = true;
      li.style.textDecoration = "black line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  span.appendChild(delbtn);
  delbtn.addEventListener("click", () => {
    span.remove();
    getOut(span);
  });
  }
}
function addToLocalStorage(task) {
  savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
}
function getToUi() {
  taskToPrint = JSON.parse(localStorage.getItem("tasks")) || [];
  taskToPrint.forEach((element) => {
    createTask(element);
  });
}
function getOut(task) {
  savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let index = savedTasks.indexOf(task);
  savedTasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
}
