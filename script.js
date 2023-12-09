let choice = ["stone", "paper", "scissor"];
let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");
let playBtn = document.querySelector("#play-btn");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let resetBtn = document.querySelector("#new-btn");
let userCount = 0;
let compCount = 0;

resetBtn.addEventListener("click", () => {
  userCount = 0;
  compCount = 0;
  userScore.innerHTML = 0;
  compScore.innerHTML = 0;
  playBtn.style.backgroundColor = "#a85751";
  playBtn.innerHTML = "Play";
  playBtn.style.color = "white";
});

stone.addEventListener("click", () => {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  if (compChoice === "stone") {
    playBtn.innerText = "Draw";
    playBtn.style.backgroundColor = "yellow";
  } else if (compChoice === "paper") {
    playBtn.innerText = "Winner Computer";
    playBtn.style.backgroundColor = "red";

    compCount++;
    compScore.innerText = compCount;
  } else if (compChoice === "scissor") {
    playBtn.innerText = "Winner User";
    playBtn.style.backgroundColor = "green";

    userCount++;
    userScore.innerHTML = userCount;
  }
});

paper.addEventListener("click", () => {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  if (compChoice === "paper") {
    playBtn.innerText = "Draw";
    playBtn.style.backgroundColor = "yellow";
  } else if (compChoice === "scissor") {
    playBtn.innerText = "Winner Computer";
    playBtn.style.backgroundColor = "red";

    compCount++;
    compScore.innerText = compCount;
  } else if (compChoice === "stone") {
    playBtn.innerText = "Winner User";
    playBtn.style.backgroundColor = "green";

    userCount++;
    userScore.innerHTML = userCount;
  }
});
scissor.addEventListener("click", () => {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  if (compChoice === "scissor") {
    playBtn.innerText = "Draw";
    playBtn.style.backgroundColor = "yellow";
  } else if (compChoice === "stone") {
    playBtn.innerText = "Winner Computer";
    playBtn.style.backgroundColor = "red";

    compCount++;
    compScore.innerText = compCount;
  } else if (compChoice === "paper") {
    playBtn.innerText = "Winner User";
    playBtn.style.backgroundColor = "green";

    userCount++;
    userScore.innerHTML = userCount;
  }
});
