let var1 = document.querySelector(".input");
let btn = document.querySelector(".add");
let todo = document.querySelector(".list");
let da = "";
btn.addEventListener("click", function () {
  let inputValue = var1.value;
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  deletebutton.innerHTML = "Task Completed";
  li.innerHTML = inputValue;
  if (var1.value === da) {
    alert("Please Enter a valid input");
  } else {
    todo.appendChild(li);
    todo.appendChild(deletebutton);
    todo.appendChild(li);
    todo.appendChild(deletebutton);
  }

  deletebutton.addEventListener("click", function () {
    todo.removeChild(li);
    todo.removeChild(deletebutton);
  });
});
