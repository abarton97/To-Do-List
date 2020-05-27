const container = document.querySelector(".container");

export function createLeftContainer() {
    const leftContainer = document.createElement("div");
    leftContainer.setAttribute("id", "mySidebar");
    leftContainer.setAttribute("class", "sidebar");
    container.appendChild(leftContainer);

    const todoBtn = document.createElement("a");
    todoBtn.setAttribute("class", "todobtn");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        todoBtn.innerHTML = '<i class="fas fa-calendar-day"></i>'
    } else {
        todoBtn.innerHTML = '<i class="fas fa-calendar-day"></i> Today Todo'
    }
    leftContainer.appendChild(todoBtn);

    const bookmarkBtn = document.createElement("a");
    bookmarkBtn.setAttribute("class", "bookmarkBtn");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i></i>'
    } else {
        bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i></i> Bookmarked'
    }
    leftContainer.appendChild(bookmarkBtn);

    const calendarBtn = document.createElement("a");
    calendarBtn.setAttribute("class", "calendarBtn");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        calendarBtn.innerHTML = '<i class="fas fa-calendar-alt"></i>'
    } else {
        calendarBtn.innerHTML = '<i class="fas fa-calendar-alt"></i> Calendar'
    }
    leftContainer.appendChild(calendarBtn);
}

