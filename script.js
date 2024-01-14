

// "todos" variable which holds 'array of objects' of todolist tasks

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// event listener on window

window.addEventListener("load", () => {


    const nameInput = document.querySelector("#name");
    const form = document.querySelector("#todo-form");
    let username = localStorage.getItem("username") || "";


    nameInput.value = username;

    nameInput.addEventListener("change", (e) => {

        localStorage.setItem("username", e.target.value);

    });

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        // making an object

        let todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }


        // sending array of object to local storage

        todos.push(todo);

        e.target.reset();

        localStorage.setItem("todos", JSON.stringify(todos));

        DisplayTodos();

    });

    DisplayTodos();
});



// Display Todo Function

function DisplayTodos() {


    // displaying "TODO LIST" heading if any task exists

    if (todos.length == 0) {
        document.querySelector(".p").style.display = "none";
    } else {
        document.querySelector(".p").style.display = "block";
    }

    // todo list div

    const todoList = document.querySelector("#todo-list");
    todoList.innerHTML = "";

    todos.forEach((todoObject, index) => {

        // creating elements through js

        let todoItem = document.createElement("div");
        let label = document.createElement("label");
        let input = document.createElement("input");
        let span = document.createElement("span");

        let todoContent = document.createElement("div");
        let actions = document.createElement("div");
        let edit = document.createElement("button");
        let deleteBtn = document.createElement("button");

        // setting classes

        todoItem.classList.add("todo-item");
        input.type = "checkbox";
        input.checked = todoObject.done;
        span.classList.add("bubble");

        if (todoObject.category == "personal") {
            span.classList.add("personal");
        } else {
            span.classList.add("business");
        }

        todoContent.classList.add("todo-content");

        actions.classList.add("actions");
        edit.classList.add("edit");
        deleteBtn.classList.add("delete");

        // showing task in list

        todoContent.innerHTML = `<textarea name="" id="" class="textarea" placeholder="write task" readonly>${todoObject.content}</textarea>`;

        // edit & delete btn

        edit.innerHTML = `<i class="fa-solid fa-pen"></i>`;
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        // appending tags accordingly

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteBtn);
        todoItem.appendChild(label);
        todoItem.appendChild(todoContent);
        todoItem.appendChild(actions);

        todoList.appendChild(todoItem);

        if (todoObject.done) {
            todoItem.classList.add("done");
        }

        input.addEventListener("change", (e) => {

            // setting value of whether checkbox is checked or not in todoObject's 'done' property

            todoObject.done = e.target.checked;

            localStorage.setItem("todos", JSON.stringify(todos));

            if (todoObject.done) {
                todoItem.classList.add("done");
            } else {
                todoItem.classList.remove("done");
            }

            DisplayTodos();

        });

        // Edit

        edit.addEventListener("click", (e) => {

            let textarea = todoContent.querySelector(".textarea");

            textarea.addEventListener("keyup", (e) => {

                textarea.style.height = "30px";
                let scHeigth = e.target.scrollHeight;
                textarea.style.height = `${scHeigth}px`;
            });

            // removing readonly attribute from textarea to edit

            textarea.removeAttribute("readonly");

            textarea.addEventListener("blur", (e) => {

                textarea.setAttribute("readonly", true);
                todoObject.content = e.target.value;
                localStorage.setItem("todos", JSON.stringify(todos));

                DisplayTodos();

            });

        });

        deleteBtn.addEventListener("click", (e) => {

            // using filter not suitable approach, use splice instead
            // todos = todos.filter(t => t != todoObject);
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));

            DisplayTodos();

        });

    });

}

