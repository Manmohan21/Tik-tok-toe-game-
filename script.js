let currentPlayer = "X";
let boxes = document.querySelectorAll(".box");
let statusText = document.getElementById("status");
let gameOver = false;

let winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function play(box) {
  if (box.innerHTML !== "" || gameOver) return;
  box.innerHTML = currentPlayer;

  if (checkWinner()) {
    statusText.innerHTML = "Player " + currentPlayer + " Wins!";
    gameOver = true;
    return;
  }

  let draw = true;
  boxes.forEach(function(b) {
    if (b.innerHTML === "") draw = false;
  });

  if (draw) {
    statusText.innerHTML = "Game Draw!";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.innerHTML = "Player " + currentPlayer + "'s Turn";
}

function checkWinner() {
  for (let pattern of winPatterns) {
    let a = boxes[pattern[0]].innerHTML;
    let b = boxes[pattern[1]].innerHTML;
    let c = boxes[pattern[2]].innerHTML;
    if (a !== "" && a === b && b === c) return true;
  }
  return false;
}

function resetGame() {
  boxes.forEach(function(box) { box.innerHTML = ""; });
  currentPlayer = "X";
  gameOver = false;
  statusText.innerHTML = "Player X's Turn";
}
