const tester = document.getElementById("tester");

function changeLetter(letter) {
    tester.textContent = letter;
}

let currentSize = 15;

function changeFontSize(delta) {
    currentSize = currentSize + delta;

    if (currentSize < 5) {
        currentSize = 5;
    }

    tester.style.fontSize = currentSize + "px";
}

function changeColor() {
    const colors = ["red", "blue", "green", "orange", "purple"];
    const randomNumber = Math.floor(Math.random() * 5);
    tester.style.color = colors[randomNumber];
}