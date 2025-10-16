//0 to represent "Rock", a 1 to represent "Paper", or a 2 to represent "Scissors."

//Player

//let player = Math.floor(Math.random() * 3);
let player = 2;

if (player == 0) {
  console.log("Player picked: Rock");
} else if (player == 1) {
  console.log("Player picked: Paper");
} else {
  console.log("Player picked: Scissors");
}

//console.log(player);

//Computer

let computer = Math.floor(Math.random() * 3);

if (computer == 0) {
  console.log("Computer picked: Rock");
} else if (computer == 1) {
  console.log("Computer picked: Paper");
} else {
  console.log("Computer picked: Scissors");
}
//console.log(computer);

//game logic

//when player == 0 == Rock
if (player == computer) {
  console.log("It's a draw!");
} else if (player == 0 && computer == 1) {
  console.log("The computer won!");
} else if (player == 0 && computer == 2) {
  console.log("The player won!");
}
//when player == 1 == paper
else if (player == 1 && computer == 0) {
  console.log("The player won!");
} else if (player == 1 && computer == 2) {
  console.log("The computer won!");
}
//when player == 2 == scissors
if (player == 2 && computer == 0) {
  console.log("The computer won!");
} else if (player == 2 && computer == 1) {
  console.log("The player won!");
}
