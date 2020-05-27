
let toggled = false;

export function collapseSidebar() {
    let main = document.querySelector(".todoContainer")
    let leftContainer = document.querySelector(".sidebar")
    let todoBtn = document.querySelector(".todobtn")
    let bookmarkBtn = document.querySelector(".bookmarkBtn")
    let calendarBtn = document.querySelector(".calendarBtn")
    let collapse = document.getElementById("collapse");
    collapse.addEventListener("click", function () {
        console.log("test")
        if (leftContainer.style.width = "20%" && toggled == false) {
            leftContainer.style.width = "0%";
            leftContainer.style.visibility = "hidden";
            todoBtn.style.fontSize = "0";
            bookmarkBtn.style.fontSize = "0";
            calendarBtn.style.fontSize = "0";
            main.style.marginLeft = "1%";
            main.style.width = "98%";
            addButtons();
            toggled = true;
        } else if (leftContainer.style.width = "0%" && toggled == true) {
            leftContainer.style.width = "20%";
            leftContainer.style.visibility = "visible";
            todoBtn.style.fontSize = "25px";
            bookmarkBtn.style.fontSize = "25px";
            calendarBtn.style.fontSize = "25px";
            main.style.width = "78%";
            main.style.marginLeft = "21%";
            addButtons();
            toggled = false;
        }
    });
}

function addButtons() {
    let addBtn = document.querySelector(".add-icon")
    let todoInput = document.querySelector(".todo-input")
    let submit = document.querySelector(".submit")
    let date = document.querySelector("#todo-date")
    if (toggled == false) {
        addBtn.style.marginLeft = "1%";
        todoInput.style.marginLeft = "4%";
        submit.style.marginLeft = "38%";
        date.style.marginLeft = "23%";
    } else if (toggled == true) {
        addBtn.style.marginLeft = "21%";
        todoInput.style.marginLeft = "24%";
        submit.style.marginLeft = "58%";
        date.style.marginLeft = "43%";
    }
}