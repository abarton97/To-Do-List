const container = document.querySelector(".container");


export function createHeader() {


    container.innerHTML =
        `<div class="header">
            <button id="collapse" class="btn"><i class="fas fa-bars"></i></button>
        </div>`;
}