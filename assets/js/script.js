
// add buttons
const controls = document.querySelector(".controls");
const resetContainer = document.querySelector(".reset");

const plus = document.createElement("button");
const minus = document.createElement("button");
const reset = document.createElement("button");

controls.appendChild(plus);
controls.appendChild(minus);
resetContainer.appendChild(reset);

plus.innerHTML = "+";
minus.innerHTML = "-";
reset.innerHTML = "Reset";


reset.classList.add("reset-button");

//logic

let output = document.querySelector(".output");

plus.addEventListener("click", () => {
    plus.classList.add("click-btn");
    setTimeout( () => {
    plus.classList.remove("click-btn")},100);
    output.innerHTML++;
});


minus.addEventListener("click", () => {
    minus.classList.add("click-btn");
    setTimeout( () => {
    minus.classList.remove("click-btn")},100);
    output.innerHTML--;
});


reset.addEventListener("click", () => {
    output.innerHTML = 0;
});

