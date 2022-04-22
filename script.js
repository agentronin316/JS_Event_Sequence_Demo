"use strict";

let lastColor = "#000000";

randomColor();

function randomColor() {
    let colorNumber = Math.floor(Math.random() * (parseInt("FFFFFF", 16) + 1));

    lastColor = "#" + colorNumber.toString(16).toUpperCase();
    return lastColor;
}

function doSomething() {
    this.children[0].style.backgroundColor = randomColor();
}

function doSomethingElse(event) {
    event.target.parentNode.style.backgroundColor = lastColor;
}

function doYetAnotherThing() {
    this.style.backgroundColor = lastColor;
}

document.body.addEventListener("click", doYetAnotherThing);

document
    .querySelectorAll(".btn_container")
    .forEach((thing) => (thing.onclick = doSomething));

document
    .querySelectorAll(".color_btn")
    .forEach((thing) => (thing.onclick = doSomethingElse));
