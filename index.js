const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
    const move1Name = document.getElementById('player-one-move__name');
    const move1Img = document.getElementById('player-one-move__img');
    move1Name.textContent = moveOne;
    move1Img.setAttribute('src', `./images/${moveOne}.png`);

    const move2Name = document.getElementById('player-two-move__name');
    const move2Img = document.getElementById('player-two-move__img');
    move2Name.textContent = moveTwo;
    move2Img.setAttribute('src', `./images/${moveTwo}.png`);

    const outcomeText = document.createElement('p');
    outcomeText.textContent = outcome;
    outcomeText.setAttribute('id', 'outcome');
    outcomeText.classList.add('outcome');
    document.body.appendChild(outcomeText);
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  