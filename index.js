function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function generateRandomResult() {
  var randomNumber1 = randomNumber(6);
  var randomNumber2 = randomNumber(6);
  document.getElementsByClassName("img1")[0].setAttribute("src", "images\\dice" + randomNumber1 + ".png");
  document.getElementsByClassName("img2")[0].setAttribute("src", "images\\dice" + randomNumber2 + ".png");

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 has won!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 has won!";
  }
}

document.addEventListener("keypress", function(event) {
  if (event.code === "Space") {
    generateRandomResult();
  }
});

document.addEventListener("touchstart", function(event) {
  generateRandomResult();
});

if ("ontouchstart" in document.documentElement) {
  document.querySelector("p.instruction").innerHTML = "Touch to Roll!";
}
