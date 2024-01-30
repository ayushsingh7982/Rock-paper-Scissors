let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const genCompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const drawgame = () => {
  console.log("game was drawn");
  msg.innerText="Game was drawn.Play Again";
};

const showwinner = (userwin,userChoice,compchoice) => {
  if (userwin) {
    console.log("you win!");
    msg.innerHTML ="You Win!";
    msg.style.backgroundColor="green";
    userscore++;
    userscorepara.innerText=userscore;
  } else {
    console.log("You lose!");
    msg.innerHTML = "You Lose!";
    msg.style.backgroundColor="red";
    compscore++;
    compscorepara.innerText=compscore;
  }
};

const playgame = (userChoice) => {
  console.log("User choice = ", userChoice);
  const compchoice = genCompchoice();
  console.log("Computer choice =", compchoice);

  if (userChoice === compchoice) {
    //tie
    drawgame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : "true";
    }
    showwinner(userwin,userChoice,compchoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked = ", userChoice);
    playgame(userChoice);
  });
});
