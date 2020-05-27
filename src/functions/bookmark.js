export function bookmarkme() {
    const me = document.querySelector('.todoContainer');
    me.addEventListener('click', event => {
        if (event.target.classList.contains('js-bookmark-todo')) {
            const itemKey = event.target.parentElement.dataset.key;
            bookmarkTodo(itemKey);
        }

        if (event.target.classList.contains('js-delete-todo')) {
            const itemKey = event.target.parentElement.dataset.key;
            deleteTodo(itemKey);
        }
    });
}

function deleteTodo(key) {
    const item = document.querySelector(`[data-key='${key}']`);
    item.remove();
}

function bookmarkTodo(key) {
    const item = document.querySelector(`[data-key='${key}']`);
    let bookmarked = document.getElementById("bookmarkPage")
    var cln = item.cloneNode(true);
    bookmarked.appendChild(cln);
}