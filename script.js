// let var1 = document.querySelector(".input");
// let btn = document.querySelector(".add");
// let todo = document.querySelector(".list");
// let da = "";
// btn.addEventListener("click", function () {
//   let inputValue = var1.value;
//   let li = document.createElement("li");
//   let deletebutton = document.createElement("button");
//   deletebutton.innerHTML = "Task Completed";
//   li.innerHTML = inputValue;
//   if (var1.value === da) {
//     alert("Please Enter a valid input");
//   } else {
//     todo.appendChild(li);
//     todo.appendChild(deletebutton);
//     todo.appendChild(li);
//     todo.appendChild(deletebutton);
//   }

//   deletebutton.addEventListener("click", function () {
//     todo.removeChild(li);
//     todo.removeChild(deletebutton);
//   });
// });
let var1 = document.querySelector(".input");
let btn = document.querySelector(".add");
let todo = document.querySelector(".list");

// Load saved tasks on page load
window.onload = function () {
  loadData();
};

btn.addEventListener("click", addEvent);
window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addEvent();
  }
});

function addEvent() {
  let inputValue = var1.value.trim();
  if (!inputValue) {
    alert("Please enter a valid input");
    return;
  }

  addTask(inputValue);
  var1.value = "";
  saveData();
}

function addTask(taskText) {
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  deletebutton.innerHTML = "Task Completed";
  li.innerHTML = taskText;

  todo.appendChild(li);
  todo.appendChild(deletebutton);

  deletebutton.addEventListener("click", function () {
    todo.removeChild(li);
    todo.removeChild(deletebutton);
    saveData();
    saveData();
  });
}

function saveData() {
  let tasks = [];
  let items = todo.querySelectorAll("li");
  items.forEach((li) => {
    tasks.push(li.innerHTML);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadData() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addTask(task);
  });
}
