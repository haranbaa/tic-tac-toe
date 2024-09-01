const cells = document.querySelectorAll(".borders");
const cell1 = document.getElementById('cell-1');
const cell2 = document.getElementById('cell-2');
const cell3 = document.getElementById('cell-3');
const cell4 = document.getElementById('cell-4');
const cell5 = document.getElementById('cell-5');
const cell6 = document.getElementById('cell-6');
const cell7 = document.getElementById('cell-7');
const cell8 = document.getElementById('cell-8');
const cell9 = document.getElementById('cell-9');
const player1score = document.querySelector('.player1score');
const player2score = document.querySelector('.player2score');

let isClicked = false

const eachCells = (event) => {
    if (event.target.classList.contains("clicked")) {
        return;

    }
    if (isClicked) {
        event.target.innerHTML = "O"
        event.target.classList.add("clicked")
        isClicked = false

    }
    else if (!isClicked) {
        event.target.innerHTML = "X"
        event.target.classList.add("clicked")
        isClicked = true
    }
    winCondition()




}
for (let i of cells) {
    i.addEventListener('click', eachCells)
}
let player1scores = 0
let player2scores = 0


function winCondition() {
    let ifWin = false;
    if (cell1.innerHTML === "X" && cell2.innerHTML === "X" && cell3.innerHTML === "X") {
        ifWin = true;
        setTimeout(() => {
            player1scores++
            player1score.innerHTML = `${player1scores}`
            alert("Player 1 win")
            resetGame();
        }, 100);
    }

    else if (cell1.innerHTML === "X" && cell4.innerHTML === "X" && cell7.innerHTML === "X") {
        ifWin = true;
        setTimeout(() => {
            player1scores++
            player1score.innerHTML = `${player1scores}`
            alert("Player 1 win")
            resetGame()
        }, 100);

    }

    else if (cell7.innerHTML === "X" && cell8.innerHTML === "X" && cell9.innerHTML === "X") {
        ifWin = true;
        setTimeout(() => {
            player1scores++
            player1score.innerHTML = `${player1scores}`
            alert("Player 1 win")
            resetGame()
        }, 100);

    }
    else if (cell3.innerHTML === "X" && cell6.innerHTML === "X" && cell9.innerHTML === "X") {
        ifWin = true;
        setTimeout(() => {
            player1scores++
            player1score.innerHTML = `${player1scores}`
            alert("Player 1 win")
            resetGame()
        }, 100);

    }
    else if (cell3.innerHTML === "X" && cell5.innerHTML === "X" && cell7.innerHTML === "X") {
        ifWin = true;
        setTimeout(() => {
            player1scores++
            player1score.innerHTML = `${player1scores}`
            alert("Player 1 win")
            resetGame()
        }, 100);

    }
    else if (cell1.innerHTML === "X" && cell5.innerHTML === "X" && cell9.innerHTML === "X") {
        ifWin = true;
        setTimeout(() => {
            player1scores++
            player1score.innerHTML = `${player1scores}`
            alert("Player 1 win")
            resetGame()
        }, 100);

    }
    else if (cell2.innerHTML === "X" && cell5.innerHTML === "X" && cell8.innerHTML === "X") {
        ifWin = true;
        setTimeout(() => {
            player1scores++
            player1score.innerHTML = `${player1scores}`
            alert("Player 1 win")
            resetGame()
        }, 100);
    }
    else if (cell4.innerHTML === "X" && cell5.innerHTML === "X" && cell6.innerHTML === "X") {
        ifWin = true;
        setTimeout(() => {
            player1scores++
            player1score.innerHTML = `${player1scores}`
            alert("Player 1 win")
            resetGame()
        }, 100);
    }

    else if (cell1.innerHTML === "O" && cell2.innerHTML === "O" && cell3.innerHTML === "O") {
        ifWin = true;
        setTimeout(() => {
            player2scores++
            player2score.innerHTML = `${player2scores}`
            alert("Player 2 win")
            resetGame()
        }, 100);


    }
    else if (cell1.innerHTML === "O" && cell4.innerHTML === "O" && cell7.innerHTML === "O") {
        ifWin = true;
        setTimeout(() => {
            player2scores++
            player2score.innerHTML = `${player2scores}`
            alert("Player 2 win")
            resetGame()
        }, 100);

    }

    else if (cell7.innerHTML === "O" && cell8.innerHTML === "O" && cell9.innerHTML === "O") {
        ifWin = true;
        setTimeout(() => {
            player2scores++
            player2score.innerHTML = `${player2scores}`
            alert("Player 2 win")
            resetGame()
        }, 100);

    }
    else if (cell3.innerHTML === "O" && cell6.innerHTML === "O" && cell9.innerHTML === "O") {
        ifWin = true;
        setTimeout(() => {
            player2scores++
            player2score.innerHTML = `${player2scores}`
            alert("Player 2 win")
            resetGame()
        }, 100);

    }
    else if (cell3.innerHTML === "O" && cell5.innerHTML === "O" && cell7.innerHTML === "O") {
        ifWin = true;
        setTimeout(() => {
            player2scores++
            player2score.innerHTML = `${player2scores}`
            alert("Player 2 win")
            resetGame()
        }, 100);

    }
    else if (cell1.innerHTML === "O" && cell5.innerHTML === "O" && cell9.innerHTML === "O") {
        ifWin = true;
        setTimeout(() => {
            player2scores++
            player2score.innerHTML = `${player2scores}`
            alert("Player 2 win")
            resetGame()
        }, 100);

    }
    else if (cell2.innerHTML === "O" && cell5.innerHTML === "O" && cell8.innerHTML === "O") {
        ifWin = true;
        setTimeout(() => {
            player2scores++
            player2score.innerHTML = `${player2scores}`
            alert("Player 2 win")
            resetGame()
        }, 100);


    }
    else if (cell4.innerHTML === "O" && cell5.innerHTML === "O" && cell6.innerHTML === "O") {
        ifWin = true;
        setTimeout(() => {
            player2scores++
            player2score.innerHTML = `${player2scores}`
            alert("Player 2 win")
            resetGame()
        }, 100);
    }
    let allClicked = true;
    cells.forEach(cell => {
        if (!cell.classList.contains("clicked")) {
            allClicked = false;
        }
    });

    if (allClicked && !ifWin) {
        setTimeout(() => {
            alert("Draw");
            resetGame();
        }, 100);
    }
}
function resetGame() {

     isClicked = false
    cells.forEach(eachCell => {
      eachCell.innerHTML = ""
      eachCell.classList.remove("clicked")
    });
    
}
