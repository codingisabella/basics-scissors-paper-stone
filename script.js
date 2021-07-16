var main = function (input) {
  // randomly chooses scissors, peper, or stone
  var userOption = input;
  console.log("userOption", userOption);
  var computerOption = computerChoice();
  console.log("computerOption", computerOption);

  var myOutputValue = `you guessed ${input}, there are only three options stone, paper, scissors`;

  // scissor beats paper, paper beats stone, stone beats scissors, draw
  // myOutputValue = user won, program won, or its a draw
  if (
    (userOption == "scissors" && computerOption == "paper") ||
    (userOption == "paper" && computerOption == "stone") ||
    (userOption == "stone" && computerOption == "scissors")
  ) {
    myOutputValue = `computer won!`;
  }
  if (
    (computerOption == "scissors" && userOption == "paper") ||
    (computerOption == "paper" && userOption == "stone") ||
    (computerOption == "stone" && userOption == "scissors")
  ) {
    myOutputValue = `user won! you picked reversed ${input}`;
  }

  if (userOption == computerOption) {
    myOutputValue = `draw`;
  }
  return myOutputValue;
};
// user inputs == scissors, paper or stone
// computer inputs == scissors, paper or stone
var computerChoice = function () {
  var randomNumber = Math.random() * 4;
  var randomInteger = Math.floor(randomNumber);
  var computerNumber = randomInteger;
  if (computerNumber == 1) {
    computerOption = "scissors";
  }
  if (computerNumber == 2) {
    computerOption = "paper";
  }
  if (computerNumber == 3) {
    computerOption = "stone";
  }
  return computerOption;
};
