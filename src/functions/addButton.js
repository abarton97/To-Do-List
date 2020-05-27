export function addButton() {
    let boxOpen = false;
    let add = document.querySelector(".add-icon");
    let input = document.querySelector(".todo-input");
    let submit = document.querySelector(".submit");
    let todoDate = document.querySelector("#todo-date");
    add.addEventListener("click", function () {
        if (boxOpen == false) {
            input.style.visibility = "visible";
            todoDate.style.visibility = "visible";
            submit.style.visibility = "visible";
            input.style.width = "17%";
            submit.style.width = "5%";
            todoDate.style.width = "13%";
            add.innerText = "-";
            boxOpen = true;
        } else if (boxOpen == true) {
            setTimeout(() => {
                input.style.visibility = "hidden";
                todoDate.style.visibility = "hidden";
                submit.style.visibility = "hidden";
            }, 1000);
            input.style.width = "0%";
            todoDate.style.width = "0%";
            submit.style.width = "0%";
            add.innerText = "+";
            boxOpen = false;
        }
    });
}