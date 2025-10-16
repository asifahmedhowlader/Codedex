let question = "Is Codédex better than Udemy yet?";
let randomNumber = Math.floor(Math.random() * 9) + 1;
//console.log(randomNumber);
let eightBall = "";

console.log(`Question: ${question}`);

if (randomNumber === 1) {
  eightBall = "Yes - definitely.";
} else if (randomNumber === 2) {
  eightBall = "It is decidedly so.";
} else if (randomNumber === 3) {
  eightBall = "Without a doubt.";
} else if (randomNumber === 4) {
  eightBall = "Reply hazy, try again.";
} else if (randomNumber === 5) {
  eightBall = "Ask again later.";
} else if (randomNumber === 6) {
  eightBall = "Better not tell you now.";
} else if (randomNumber === 7) {
  eightBall = "My sources say no.";
} else {
  eightBall = "Outlook not so good.";
}

console.log(`Magic 8 ball: ${eightBall}`);
