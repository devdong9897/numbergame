let randomNum = 0;
let chance = 5;
let gameOver = false;
let inputValue = document.querySelector("input");
let startGo = document.getElementById("start-go");
let resultArea = document.getElementById("result-area");
let resetArea = document.getElementById("reset-area");
let opportunity = document.getElementById("opportunity");
let lookResult = document.getElementById("look-result");
let history = [];

startGo.addEventListener("click", play);
resetArea.addEventListener("click", reset);
inputValue.addEventListener("focus", function () {
  inputValue.value = "";
});
lookResult.addEventListener("click", result);

function computerNum() {
  randomNum = Math.floor(Math.random() * 100 + 1);
  console.log(randomNum);
}

function play() {
  let userInput = inputValue.value;

  if (userInput < 1 || userInput > 100) {
    resultArea.textContent = "1과 100사이의 숫자를 입력해 주세요";
    return;
  }
  if (history.includes(userInput)) {
    resultArea.textContent = "이미 입력한 숫자 입니다.";
    return;
  }

  chance--;
  opportunity.textContent = `남은 기회는 ${chance}회 입니다.`;
  console.log(chance);
  if (userInput < randomNum) {
    resultArea.textContent = "UP";
    console.log("UP");
  } else if (userInput > randomNum) {
    resultArea.textContent = "DOWN";
    console.log("DOWN");
  } else {
    console.log("정답");
  }

  history.push(userInput);
  console.log(history);

  if (chance < 1) {
    gameOver = true;
  }

  if (gameOver === true) {
    result();
    startGo.disabled = true;
  }
}

function reset() {
  inputValue.value = "";
  computerNum();

  resultArea.textContent = "결과값이 나옵니다";
}

function result() {
  resultArea.textContent = `정답은 ${randomNum} 입니다.`;
}

computerNum();
