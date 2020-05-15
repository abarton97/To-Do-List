
let toggled = false;

export function collapseSidebar() {
    let leftContainer = document.querySelector(".sidebar")
    let todoBtn = document.querySelector(".todobtn")
    let bookmarkBtn = document.querySelector(".bookmarkBtn")
    let calendarBtn = document.querySelector(".calendarBtn")
    let buttons = [todoBtn, bookmarkBtn, calendarBtn]
    var collapse = document.getElementById("collapse");
    collapse.addEventListener("click", function () {
        if (leftContainer.style.width = "20%" && toggled == false) {
            leftContainer.style.width = "0%";
            leftContainer.style.visibility = "collapse";
            buttons[0].style.fontSize = "0";
            buttons[1].style.fontSize = "0";
            buttons[2].style.fontSize = "0";
            toggled = true;
        } else if (leftContainer.style.width = "0%" && toggled == true) {
            leftContainer.style.width = "20%";
            leftContainer.style.visibility = "visible";
            buttons[0].style.fontSize = "25px";
            buttons[1].style.fontSize = "25px";
            buttons[2].style.fontSize = "25px";
            toggled = false;
        }
    });
}