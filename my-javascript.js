let myBoxes = document.getElementsByClassName("grid-items");
let msgPrompt = document.getElementById("turn-prompt");
let resetBtn = document.getElementById("reset");
let myTurn = "X";
let isgameover = false;
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

// Functions

// Change Turn 
function changeTurn() {
    return myTurn === "X" ? "0" : "X"
}

// Check for winner
function checkWin() {
    let winCombo = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    winCombo.forEach(e =>{
        if((myBoxes[e[0]].innerHTML === myBoxes[e[1]].innerHTML) && (myBoxes[e[2]].innerHTML === myBoxes[e[1]].innerHTML) && (myBoxes[e[0]].innerHTML !== "")){
            myBoxes[e[0]].style.backgroundColor = "rgb(253, 222, 253, 0.7)";
            myBoxes[e[1]].style.backgroundColor = "rgb(253, 222, 253, 0.7)";
            myBoxes[e[2]].style.backgroundColor = "rgb(253, 222, 253, 0.7)";
            isgameover = true;
            gameOver.play();
        }
    })
}

// Event Listeners

Array.from(myBoxes).forEach(element => {
    element.addEventListener("click", function () {
        element.innerHTML = myTurn;
        audioTurn.play();
        checkWin();
        if (isgameover) {
            msgPrompt.innerHTML = myTurn + " Won!"
        }
        else {
            myTurn = changeTurn();
            msgPrompt.innerHTML = "Turn: " + myTurn;
        }
    })
})

resetBtn.addEventListener("click", function () {
    Array.from(myBoxes).forEach(element => {
        element.innerHTML = "";
        element.style.backgroundColor = "rgb(255, 255, 255, 0)";
        msgPrompt.innerHTML = "Turn: " + myTurn
        isgameover = false;
    })
})