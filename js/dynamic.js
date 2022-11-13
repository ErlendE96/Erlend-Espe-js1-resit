const divContainer = document.querySelector(".dynamic-divs");
const reset = document.querySelector(".reset");
const select = document.querySelector("input");


select.addEventListener("change", buildList);

function buildList(event) {
    console.log(event.target.value);

    const amount = event.target.value;



    for (let i = 1; i <= amount; i++) {
        divContainer.innerHTML += `<div class="dynamic-divs" ?id=${i}">${i}</div>`;
    }
}

function remove(){
    divContainer.innerHTML = "";
    
}

reset.addEventListener("click", remove)