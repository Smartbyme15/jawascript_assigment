let fighter1 = document.getElementById("fighter1");
let fighter2 = document.getElementById("fighter2");
let resultBox = document.getElementById("resultBox");
let buttonBox = document.getElementById("buttonBox");

let speed = 100;
let gameStarted = false;

function startGame() {
  gameStarted = true;
  speed = 100;
  fighter1.style.left = speed + "px";
  fighter1.src ="https://fightersgeneration.com/characters/blanka-mnk.gif";
  fighter2.src = "https://fightersgeneration.com/characters/chang-breakeverything.gif";
  resultBox.style.display = "none";
  buttonBox.style.display = "none";
}

function endGame() {
  gameStarted = false;
  resultBox.style.display = "block";
  resultBox.innerText = "Winner: Koehan 🏆";
  buttonBox.style.display = "block";
}

function moveFighter1(direction) {
  if (!gameStarted) return;

  if (direction === "right") {
    speed += 10;
    fighter1.style.left = speed + "px";
    fighter1.src = "https://fightersgeneration.com/characters/blanka-backward-roll-alp.gif";
  } else if (direction === "left") {
    speed -= 10;
    fighter1.style.left = speed + "px";
    fighter1.src = "images/blanka-mnk.gif";
  }


  const blankaRight = fighter1.offsetLeft + fighter1.offsetWidth;
  const kenLeft = fighter2.offsetLeft;

  if (blankaRight >= kenLeft - 20) {
    fighter1.src = "https://fightersgeneration.com/characters/blanka-walkback.gif";
    fighter2.src = "https://fightersgeneration.com/characters/chang-sit-eat.gif";
    endGame();
  }
}

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveFighter1("right");
  } else if (e.key === "ArrowLeft") {
    moveFighter1("left");
  } else if (e.key === "Enter") {
    gameStarted = false;
    buttonBox.style.display = "block";
    resultBox.style.display = "block";
    resultBox.innerText = "Game Paused. Press Start Again.";
  }
});

window.addEventListener("keyup", function () {
  if (gameStarted) {
    fighter1.src = "https://fightersgeneration.com/characters/blanka-backward-roll-alp.gif";
  }
});
