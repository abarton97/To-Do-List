export function addCell() {
    let collapse = document.querySelector(".submit");
    collapse.addEventListener("click", function () {
        var x = document.getElementById("todoInfo").value;
        if (x !== '') {
            addTodos(x);
        }
    });

}

let todoItems = [];

function addTodos(text) {
    let date = document.querySelector("#todo-date").value
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);
    const list = document.querySelector('.todoContainer');
    list.insertAdjacentHTML('beforeend', `
    <li class="todoTest" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span class="todoTest1">${todo.text}</span>
      <span class="todoTest1">${date}</span>
      <i id="bookmark" class="bookmark-todo js-bookmark-todo fas fa-bookmark"></i>
      <i id="trash" class="delete-todo js-delete-todo fas fa-trash"></i>
    </li>`);
    var inpDate = new Date(date);
    var currDate = new Date();
    if (inpDate.setHours(0, 0, 0, 0) ==
        currDate.setHours(0, 0, 0, 0)) {
        console.log("todays date")
    }
    else {
        console.log("different date")
    }
}
