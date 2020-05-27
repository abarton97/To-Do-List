const container = document.querySelector(".container");

export function createPage() {

    /*Todo Page*/
    const todoPage = document.createElement("div");
    todoPage.setAttribute("class", "todoContainer page");
    todoPage.setAttribute("id", "todoPage");
    container.appendChild(todoPage);

    const todoText = document.createElement("div");
    todoText.setAttribute("class", "todoText");
    todoText.innerHTML = "Todays Todo";
    todoPage.appendChild(todoText);

    const seperate = document.createElement("div");
    seperate.setAttribute("class", "seperate");
    todoPage.appendChild(seperate);

    /*Bookmark Page*/
    const bookmarkPage = document.createElement("div");
    bookmarkPage.setAttribute("class", "bookmarkContainer page");
    bookmarkPage.setAttribute("id", "bookmarkPage");
    bookmarkPage.setAttribute("style", "display:none");
    container.appendChild(bookmarkPage);

    const bookmarkText = document.createElement("div");
    bookmarkText.setAttribute("class", "todoText");
    bookmarkText.innerHTML = "Bookmarked";
    bookmarkPage.appendChild(bookmarkText);

    const bookmarkSeperate = document.createElement("div");
    bookmarkSeperate.setAttribute("class", "seperate");
    bookmarkPage.appendChild(bookmarkSeperate);

    /*Calendar Page*/
    const calendarPage = document.createElement("div");
    calendarPage.setAttribute("class", "calendarContainer page");
    calendarPage.setAttribute("id", "calendarPage");
    calendarPage.setAttribute("style", "display:none");
    container.appendChild(calendarPage);

    const calendarText = document.createElement("div");
    calendarText.setAttribute("class", "todoText");
    calendarText.innerHTML = "Calendar";
    calendarPage.appendChild(calendarText);

    const calendarSeperate = document.createElement("div");
    calendarSeperate.setAttribute("class", "seperate");
    calendarPage.appendChild(calendarSeperate);
}