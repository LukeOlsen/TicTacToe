var zero = document.querySelector("#zero");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var squares = document.querySelectorAll(".square");
var chooseX = document.querySelector(".X");
var chooseO = document.querySelector(".O");
var resetButton = document.querySelector("#resetButton");
var selectorArea = document.querySelector(".selectorArea");
var boardGame = document.querySelector(".boardGame");
var humanTurn = false;


var boardTracker = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var boardObject = {
  zero: "",
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  seven: "",
  eight: ""
};
var human;
var robot;
var turns = 0;

var checkHumanWinner = () => {
  if (turns > 8){
    alert("TIE GAME!");
    endGame();
  } else if ((boardObject.zero == human && boardObject.one == human && boardObject.two == human) || (boardObject.zero == human && boardObject.three == human && boardObject.six == human) || 
  (boardObject.zero == human && boardObject.four == human && boardObject.eight == human) || (boardObject.three == human && boardObject.four == human && boardObject.five == human) || 
   (boardObject.six == human && boardObject.seven == human && boardObject.eight == human) || (boardObject.one == human && boardObject.four == human && boardObject.seven == human) || 
    (boardObject.two == human && boardObject.five == human && boardObject.eight == human) || (boardObject.two == human && boardObject.four == human && boardObject.six == human)){
    alert("YOU WIN!");
    endGame();
  }
}

var endGame = () => {
  
}

var checkToWin = () => {
  if (
    boardObject.zero == robot &&
    boardObject.one == robot &&
    boardObject.two == ""
  ) {
    boardObject.two = robot;
    two.innerHTML = robot;
    alert("YOU LOSE");
    turns++;
    return;
  } else if (
    boardObject.zero == "" &&
    boardObject.one == robot &&
    boardObject.two == robot
  ) {
    boardObject.zero = robot;
    zero.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.zero == robot &&
    boardObject.one == "" &&
    boardObject.two == robot
  ) {
    boardObject.one = robot;
    one.innerHTML = robot;
    alert("YOU LOSE");
    turns++;
    return;
  } else if (
    boardObject.zero == robot &&
    boardObject.four == "" &&
    boardObject.eight == robot
  ) {
    boardObject.four = robot;
    four.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.zero == "" &&
    boardObject.four == robot &&
    boardObject.eight == robot
  ) {
    boardObject.zero = robot;
    zero.innerHTML = robot;
    alert("YOU LOSE");
    turns++;
    return;
  } else if (
    boardObject.zero == robot &&
    boardObject.four == robot &&
    boardObject.eight == ""
  ) {
    boardObject.eight = robot;
    eight.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.zero == "" &&
    boardObject.three == robot &&
    boardObject.six == robot
  ) {
    boardObject.zero = robot;
    zero.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.zero == robot &&
    boardObject.three == "" &&
    boardObject.six == robot
  ) {
    boardObject.three = robot;
    three.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.zero == robot &&
    boardObject.three == robot &&
    boardObject.six == ""
  ) {
    boardObject.six = robot;
    six.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.three == "" &&
    boardObject.four == robot &&
    boardObject.five == robot
  ) {
    boardObject.three = robot;
    three.innerHTML = robot;
    alert("YOU LOSE");
    turns++;
    return;
  } else if (
    boardObject.three == robot &&
    boardObject.four == "" &&
    boardObject.five == robot
  ) {
    boardObject.four = robot;
    four.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.three == robot &&
    boardObject.four == robot &&
    boardObject.five == ""
  ) {
    boardObject.five = robot;
    five.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.six == "" &&
    boardObject.seven == robot &&
    boardObject.eight == robot
  ) {
    boardObject.six = robot;
    six.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return
  } else if (
    boardObject.six == robot &&
    boardObject.seven == "" &&
    boardObject.eight == robot
  ) {
    boardObject.seven = robot;
    seven.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.six == robot &&
    boardObject.seven == robot &&
    boardObject.eight == ""
  ) {
    boardObject.eight = robot;
    eight.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.one == "" &&
    boardObject.four == robot &&
    boardObject.seven == robot
  ) {
    boardObject.one = robot;
    one.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.one == robot &&
    boardObject.four == "" &&
    boardObject.seven == robot
  ) {
    boardObject.four = robot;
    four.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.one == robot &&
    boardObject.four == robot &&
    boardObject.seven == ""
  ) {
    boardObject.seven = robot;
    seven.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.two == "" &&
    boardObject.five == robot &&
    boardObject.eight == robot
  ) {
    boardObject.two = robot;
    two.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.two == robot &&
    boardObject.five == "" &&
    boardObject.eight == robot
  ) {
    boardObject.five = robot;
    five.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.two == robot &&
    boardObject.five == robot &&
    boardObject.eight == ""
  ) {
    boardObject.eight = robot;
    eight.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.two == "" &&
    boardObject.four == robot &&
    boardObject.six == robot
  ) {
    boardObject.two = robot;
    two.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.two == robot &&
    boardObject.four == "" &&
    boardObject.six == robot
  ) {
    boardObject.four = robot;
    four.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  } else if (
    boardObject.two == robot &&
    boardObject.four == robot &&
    boardObject.six == ""
  ) {
    boardObject.six = robot;
    six.innerHTML = robot;
    alert("YOU LOSE!");
    turns++;
    return;
  }
  checkToBlock();
};

var checkToBlock = () => {
  if (
    boardObject.zero == human &&
    boardObject.one == human &&
    boardObject.two == ""
  ) {
    boardObject.two = robot;
    two.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.zero == "" &&
    boardObject.one == human &&
    boardObject.two == human
  ) {
    boardObject.zero = robot;
    zero.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.zero == human &&
    boardObject.one == "" &&
    boardObject.two == human
  ) {
    boardObject.one = robot;
    one.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.zero == human &&
    boardObject.four == "" &&
    boardObject.eight == human
  ) {
    boardObject.four = robot;
    four.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.zero == "" &&
    boardObject.four == human &&
    boardObject.eight == human
  ) {
    boardObject.zero = robot;
    zero.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.zero == human &&
    boardObject.four == human &&
    boardObject.eight == ""
  ) {
    boardObject.eight = robot;
    eight.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.zero == "" &&
    boardObject.three == human &&
    boardObject.six == human
  ) {
    boardObject.zero = robot;
    zero.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.zero == human &&
    boardObject.three == "" &&
    boardObject.six == human
  ) {
    boardObject.three = robot;
    three.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.zero == human &&
    boardObject.three == human &&
    boardObject.six == ""
  ) {
    boardObject.six = robot;
    six.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.three == "" &&
    boardObject.four == human &&
    boardObject.five == human
  ) {
    boardObject.three = robot;
    three.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.three == human &&
    boardObject.four == "" &&
    boardObject.five == human
  ) {
    boardObject.four = robot;
    four.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.three == human &&
    boardObject.four == human &&
    boardObject.five == ""
  ) {
    boardObject.five = robot;
    five.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.six == "" &&
    boardObject.seven == human &&
    boardObject.eight == human
  ) {
    boardObject.six = robot;
    six.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.six == human &&
    boardObject.seven == "" &&
    boardObject.eight == human
  ) {
    boardObject.seven = robot;
    seven.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.six == human &&
    boardObject.seven == human &&
    boardObject.eight == ""
  ) {
    boardObject.eight = robot;
    eight.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.one == "" &&
    boardObject.four == human &&
    boardObject.seven == human
  ) {
    boardObject.one = robot;
    one.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.one == human &&
    boardObject.four == "" &&
    boardObject.seven == human
  ) {
    boardObject.four = robot;
    four.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.one == human &&
    boardObject.four == human &&
    boardObject.seven == ""
  ) {
    boardObject.seven = robot;
    seven.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.two == "" &&
    boardObject.five == human &&
    boardObject.eight == human
  ) {
    boardObject.two = robot;
    two.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.two == human &&
    boardObject.five == "" &&
    boardObject.eight == human
  ) {
    boardObject.five = robot;
    five.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.two == human &&
    boardObject.five == human &&
    boardObject.eight == ""
  ) {
    boardObject.eight = robot;
    eight.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.two == "" &&
    boardObject.four == human &&
    boardObject.six == human
  ) {
    boardObject.two = robot;
    two.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.two == human &&
    boardObject.four == "" &&
    boardObject.six == human
  ) {
    boardObject.four = robot;
    four.innerHTML = robot;
    turns++;
    return;
  } else if (
    boardObject.two == human &&
    boardObject.four == human &&
    boardObject.six == ""
  ) {
    boardObject.six = robot;
    six.innerHTML = robot;
    turns++;
    return;
  }
  checkToFork();
};

var checkToFork = () => {
  if (boardObject.zero == robot && boardObject.eight == robot) {
    if (boardObject.two == "") {
      boardObject.two = robot;
      two.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.six == "") {
      boardObject.six = robot;
      six.innerHTML = robot;
      turns++;
      return;
    }
  } else if (boardObject.two == robot && boardObject.six == robot) {
    if (boardObject.zero == "") {
      boardObject.zero = robot;
      zero.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.eight == "") {
      boardObject.eight = robot;
      eight.innerHTML = robot;
      turns++;
      return;
    }
  } else if (boardObject.zero == robot && boardObject.six == robot) {
    if (boardObject.two == "") {
      boardObject.two = robot;
      two.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.six == "") {
      boardObject.six = robot;
      six.innerHTML = robot;
      turns++;
      return;
    }
  } else if (boardObject.zero == robot && boardObject.two == robot) {
    if (boardObject.six == "") {
      boardObject.six = robot;
      six.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.eight == "") {
      boardObject.eight = robot;
      eight.innerHTML = robot;
      turns++;
      return;
    }
  } else if (boardObject.six == robot && boardObject.eight == robot) {
    if (boardObject.zero == "") {
      boardObject.zero = robot;
      zero.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.two == "") {
      boardObject.two = robot;
      two.innerHTML = robot;
      turns++;
      return;
    }
  } else if (boardObject.two == robot && boardObject.eight == robot) {
    if (boardObject.zero == "") {
      boardObject.zero = robot;
      zero.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.six == "") {
      boardObject.six = robot;
      six.innerHTML = robot;
      turns++;
      return;
    }
  }
  checkToBlockFork();
};

var checkCenter = () => {
  if (boardObject.four == "") {
    boardObject.four = robot;
    four.innerHTML = robot;
    turns++;
    return;
  }
  checkOppositeCorner();
};

var checkOppositeCorner = () => {
  if (boardObject.zero == human && boardObject.eight == "") {
    boardObject.eight = robot;
    eight.innerHTML = robot;
    turns++;
    return;
  } else if (boardObject.two == human && boardObject.six == "") {
    boardObject.six = robot;
    six.innerHTML = robot;
    turns++;
    return;
  } else if (boardObject.eight == human && boardObject.zero == "") {
    boardObject.zero = robot;
    zero.innerHTML = robot;
    turns++;
    return;
  } else if (boardObject.six == human && boardObject.two == "") {
    boardObject.two = robot;
    two.innerHTML = robot;
    turns++;
    return;
  }
  checkCorner();
};

var checkCorner = () => {
  if (boardObject.zero == "") {
    boardObject.zero = robot;
    zero.innerHTML = robot;
    turns++;
    return;
  } else if (boardObject.two == "") {
    boardObject.two = robot;
    two.innerHTML = robot;
    turns++;
    return;
  } else if (boardObject.six == "") {
    boardObject.six = robot;
    six.innerHTML = robot;
    turns++;
    return;
  } else if (boardObject.eight == "") {
    boardObject.eight = robot;
    eight.innerHTML = robot;
    turns++;
    return;
  }
  checkEmptySide();
};

var checkEmptySide = () => {
  if (boardObject.one == "") {
    boardObject.one = robot;
    one.innerHTML = robot;
    turns++;
    return;
  } else if (boardObject.five == "") {
    boardObject.five = robot;
    five.innerHTML = robot;
    turns++;
    return;
  } else if (boardObject.seven == "") {
    boardObject.seven = robot;
    seven.innerHTML = robot;
    turns++;
    return;
  } else if (boardObject.three == "") {
    boardObject.three = robot;
    three.innerHTML = robot;
    turns++;
    return;
  }
};

var checkToBlockFork = () => {
  if (boardObject.zero == human && boardObject.eight == human && (boardObject.three == "" || boardObject.five == "" || boardObject.one == "" || boardObject.seven == "")){
    if (boardObject.three == ""){
      boardObject.three = robot;
      three.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.five == ""){
      boardObject.five = robot;
      five.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.one == ""){
      boardObject.one = robot;
      one.innerHTML = one;
      turns++;
      return;
    } else if (boardObject.seven == ""){
      boardObject.seven = robot;
      seven.innerHTML = robot;
      turns++;
      return;
    }
  } else if (boardObject.two == human && boardObject.eight == human && (boardObject.three == "" || boardObject.five == "" || boardObject.one == "" || boardObject.seven == "")){
    if (boardObject.three == ""){
      boardObject.three = robot;
      three.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.five == ""){
      boardObject.five = robot;
      five.innerHTML = robot;
      turns++;
      return;
    } else if (boardObject.one == ""){
      boardObject.one = robot;
      one.innerHTML = one;
      turns++;
      return;
    } else if (boardObject.seven == ""){
      boardObject.seven = robot;
      seven.innerHTML = robot;
      turns++;
      return;
    }
  }
  checkCenter();
};

var resetGame = () => {
  boardObject = {
  zero: "",
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  seven: "",
  eight: ""
  };
  zero.innerHTML = "";
  one.innerHTML = "";
  two.innerHTML = "";
  three.innerHTML = "";
  four.innerHTML = "";
  five.innerHTML = "";
  six.innerHTML = "";
  seven.innerHTML = "";
  eight.innerHTML = "";  
  turns = 0;
}

var squares = document.querySelectorAll(".square");

var winning = (board, player) => {
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  ) {
    return true;
  } else {
    return false;
  }
};


chooseX.addEventListener("click", function() {
  human = "X";
  robot = "O";
  humanTurn = true;
  resetButton.classList.remove("hideThis");
  selectorArea.classList.add("hideThis");
  boardGame.classList.remove("hideThis");
});

chooseO.addEventListener("click", function() {
  human = "O";
  robot = "X";
  humanTurn = true;
  selectorArea.classList.add("hideThis");
  resetButton.classList.remove("hideThis");
  boardGame.classList.remove("hideThis");
});

zero.addEventListener("click", function() {
  if (boardObject.zero == ""){
    boardObject.zero = human;
    zero.innerHTML = human;
    turns++;
    checkHumanWinner();
    checkToWin();
  }
});

one.addEventListener("click", function() {
  if (boardObject.one == ""){
    boardObject.one = human;
    one.innerHTML = human;
    turns++;
    checkHumanWinner();
    checkToWin();
  }
});

two.addEventListener("click", function() {
  if (boardObject.two == ""){
    boardObject.two = human;
    two.innerHTML = human;
    turns++;
    checkHumanWinner();
    checkToWin();
  }
});

three.addEventListener("click", function() {
  if (boardObject.three == ""){
    boardObject.three = human;
    three.innerHTML = human;
    turns++;
    checkHumanWinner();
    checkToWin();
  }
});

four.addEventListener("click", function() {
  if (boardObject.four == ""){
    boardObject.four = human;
    four.innerHTML = human;
    turns++;
    checkHumanWinner();
    checkToWin();
  }
});

five.addEventListener("click", function() {
  if (boardObject.five == ""){
    boardObject.five = human;
    five.innerHTML = human;
    turns++;
    checkHumanWinner();
    checkToWin();
  }
});

six.addEventListener("click", function() {
  if (boardObject.six == ""){
    boardObject.six = human;
    six.innerHTML = human;
    turns++;
    checkHumanWinner();
    checkToWin();
  }
});

seven.addEventListener("click", function() {
  if (boardObject.seven == ""){
    boardObject.seven = human;
    seven.innerHTML = human;
    turns++;
    checkHumanWinner();
    checkToWin();
  }
});

eight.addEventListener("click", function() {
  if (boardObject.eight == ""){
    boardObject.eight = human;
    eight.innerHTML = human;
    turns++;
    checkHumanWinner();
    checkToWin();
  }
});

resetButton.addEventListener("click", resetGame);
