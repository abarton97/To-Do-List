import { show } from "./showPage.js";


export function viewPage() {
    let displayTodo = document.querySelector(".todobtn");
    displayTodo.addEventListener("click", function () {
        show('todoPage');
    });
    let displayBookmark = document.querySelector(".bookmarkBtn");
    displayBookmark.addEventListener("click", function () {
        show('bookmarkPage');
    });
    let displayCalendar = document.querySelector(".calendarBtn");
    displayCalendar.addEventListener("click", function () {
        show('calendarPage');
    });
}