let unknownNumber = Math.floor(Math.random() * 100);
let heading = document.querySelector("label");
let guessedNumbers = [];
let guessedNumbersList = document.getElementById("guessedNumberList");
let attempts = document.querySelector("h3");
let restart = document.querySelector(".restart-elements");

document.getElementById("submitNumber").addEventListener("click", () => {
  let yourNumber = document.getElementById("guessField").value;

  if (yourNumber === "") {
    return;
  } else if (yourNumber > unknownNumber) {
    heading.innerHTML = "Неправильное число. Попробуйте число поменьше.";
  } else if (yourNumber < unknownNumber) {
    heading.innerHTML = "Неправильное число. Попробуйте число побольше.";
  } else {
    heading.innerHTML = "Поздравляем! Теперь ваше число корректно.";
    attempts.style.opacity = "100%";
    attempts.innerHTML += guessedNumbers.length + 1;
    restart.style.display = "flex";
    document.getElementById("submitNumber").style.display = "none";
    restartGame();
  }

  guessedNumbers.push(+yourNumber);
  updateGuessedNumberList();
});

function updateGuessedNumberList() {
  guessedNumbersList.innerHTML = "";
  guessedNumbers.forEach(function (number) {
    let listItem = document.createElement("li");
    listItem.textContent = number;
    guessedNumbersList.appendChild(listItem);
  });
}

function restartGame() {
  document.querySelector(".restart").addEventListener("click", () => {
    location.reload();
  });
}

console.log(guessedNumbers);
console.log(unknownNumber);
