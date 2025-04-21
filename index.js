ul = document.querySelector("ul");
submitbtn = document.querySelector("button");
submitbtn.id = "submitbtn";
input = document.querySelector("input");
body = document.querySelector("body");
const tasks = document.querySelector(".tasks-container");
let noticed=document.querySelector(".notice-display")
 notice = document.querySelector(".notice");
getToUi();
let some = getToUi();
noticed.innerText=`Your have ${some.length} works to do`;
setTimeout(()=>{
    notice.remove();
},10000)
let check = document.createElement("input");
function addTask(event) {
  event.preventDefault();
  let task = input.value;
  if (task.trim() != "") {
    createTask(task);
    addToLocalStorage(task);
  } else {
    return;
  }
  input.value = "";
}

submitbtn.addEventListener("click", addTask);
function createTask(task) {
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
    getOut(task);
  });
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
  return taskToPrint;
}
function getOut(task) {
  savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let index = savedTasks.indexOf(task);
  savedTasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
}
