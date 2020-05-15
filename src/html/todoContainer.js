const container = document.querySelector(".container");

export function createTodoContainer() {
    const todoContainer = document.createElement("div");
    todoContainer.setAttribute("class", "todoContainer");
    container.appendChild(todoContainer);
}