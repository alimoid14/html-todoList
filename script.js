const add_button = document.getElementById("submit-task");
const form = document.getElementById("new-form");
const input = document.getElementById("type-task");
// const list_el = document.getElementById("tasks");
const test = document.querySelector(".test");
const todoList = document.getElementById("tasks");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

window.addEventListener("load", function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(e);

    const todo = {
      content: e.target.elements.content.value,
    };

    if (todo) {
      todos.push(todo);

      localStorage.setItem("todos", JSON.stringify(todos));

      e.target.reset();

      DisplayTodos();
    }
  });
  DisplayTodos();
});

function DisplayTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.type = "text";
    task_input_el.classList.add("task-entry");
    task_input_el.value = todo.content;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("input");
    task_edit_el.type = "submit";
    task_edit_el.value = "EDIT";
    task_edit_el.classList.add("button");
    task_edit_el.classList.add("edit");

    const task_delete_el = document.createElement("input");
    task_delete_el.type = "submit";
    task_delete_el.value = "DELETE";
    task_delete_el.classList.add("button");
    task_delete_el.classList.add("delete");

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    todoList.appendChild(task_el);

    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.value.toLowerCase() == "edit") {
        task_edit_el.value = "SAVE";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.value = "EDIT";
        task_input_el.setAttribute("readonly", "readonly");
        todo.content = task_input_el.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      DisplayTodos();
    });
  });
}

// const task = input.value;

//     if (!task) {
//       this.alert("Please specify the task!");
//     } else {
//       const task_el = document.createElement("div");
//       task_el.classList.add("task");

//       const task_content_el = document.createElement("div");
//       task_content_el.classList.add("content");

//       task_el.appendChild(task_content_el);

//       const task_input_el = document.createElement("input");
//       task_input_el.type = "text";
//       task_input_el.classList.add("task-entry");
//       task_input_el.value = task;
//       task_input_el.setAttribute("readonly", "readonly");

//       task_content_el.appendChild(task_input_el);

//       const task_actions_el = document.createElement("div");
//       task_actions_el.classList.add("actions");

//       const task_edit_el = document.createElement("input");
//       task_edit_el.type = "submit";
//       task_edit_el.value = "EDIT";
//       task_edit_el.classList.add("button");
//       task_edit_el.classList.add("edit");

//       const task_delete_el = document.createElement("input");
//       task_delete_el.type = "submit";
//       task_delete_el.value = "DELETE";
//       task_delete_el.classList.add("button");
//       task_delete_el.classList.add("delete");

//       task_actions_el.appendChild(task_edit_el);
//       task_actions_el.appendChild(task_delete_el);

//       task_el.appendChild(task_actions_el);

//       list_el.appendChild(task_el);

//       input.value = "";

//       task_edit_el.addEventListener("click", (e) => {
//         if (task_edit_el.value.toLowerCase() == "edit") {
//           task_edit_el.value = "SAVE";
//           task_input_el.removeAttribute("readonly");
//           task_input_el.focus();
//         } else {
//           task_edit_el.value = "EDIT";
//           task_input_el.setAttribute("readonly", "readonly");
//         }
//       });

//       task_delete_el.addEventListener("click", (e) => {
//         list_el.removeChild(task_el);
//       });

//       //Set local storage for the task created
//     }
