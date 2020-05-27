const container = document.querySelector(".container");

export function newTodo() {
    const addTodo = document.createElement("input");
    addTodo.setAttribute("id", "todoInfo");
    addTodo.setAttribute("type", "text");
    addTodo.setAttribute("class", "todo-input");
    addTodo.setAttribute("placeholder", "New Todo");
    container.appendChild(addTodo);

    const addDate = document.createElement("input");
    addDate.setAttribute("id", "todo-date");
    addDate.setAttribute("type", "date");
    addDate.setAttribute("placeholder", "mm/dd/yyyy");
    container.appendChild(addDate);

    const submit = document.createElement("button");
    submit.setAttribute("class", "submit");
    submit.innerText = "Add"
    container.appendChild(submit);

    const addIcon = document.createElement("a");
    addIcon.setAttribute("class", "add-icon");
    addIcon.innerText = "+";
    container.appendChild(addIcon);
}