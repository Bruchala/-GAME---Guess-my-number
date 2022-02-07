"use strict";
const yourChoice = document.querySelector(".your-choice");
const check = document.querySelector(".check");
const number = document.querySelector(".number");
const points = document.querySelector(".points");
const moreLess = document.querySelector(".more-less");
const best = document.querySelector(".best");
const again = document.querySelector(".again");
const body = document.querySelector("body");
let flag = true;
let point = 20;
let choiceAI = Math.trunc(Math.random() * 30) + 1;
const choicePlayer = yourChoice.value;
let arrayPoints = [];

const game = () => {
  const choicePlayer = Number(yourChoice.value);
  if (choicePlayer > 0 && choicePlayer < 31 && flag) {
    if (choiceAI === choicePlayer) {
      number.textContent = choiceAI;
      moreLess.textContent = "🌟 You win! 🌟";
      arrayPoints.push(point);
      moreLess.style.color = "yellow";
      body.style.backgroundColor = "rgb(37, 39, 36)";

      best.textContent = "🥇 Highscore: " + Math.max.apply(Math, arrayPoints);
      flag = false;
    } else {
      if (choiceAI < choicePlayer && point > 1) {
        moreLess.textContent = "📈 Too high!";
        --point;
        points.textContent = `💯 Score: ${point}`;
      } else if (choiceAI > choicePlayer && point > 1) {
        moreLess.textContent = "📉 Too low!";
        --point;
        points.textContent = `💯 Score: ${point}`;
      } else if (point === 1) {
        moreLess.textContent = "👎 You lose! 👎";
        points.textContent = `💯 Score: 0`;
        moreLess.style.color = "red";

        flag = false;
      } else {
        console.log("xD");
      }
    }
  } else if (flag) {
    moreLess.textContent = `🚫 Invalid number!`;
  }
};

check.addEventListener("click", game);

const againGame = () => {
  flag = true;
  point = 20;
  points.textContent = `💯 Score: ${point}`;
  moreLess.textContent = "Start guessing...";
  number.textContent = "?";
  choiceAI = Math.trunc(Math.random() * 30) + 1;
  moreLess.style.color = "rgb(218, 204, 204)";
  body.style.backgroundColor = "rgb(32, 28, 28)";
};

again.addEventListener("click", againGame);
