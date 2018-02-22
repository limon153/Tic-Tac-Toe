const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(squares) {
  for (let i = 0; i < winCombos.length; i++) {
    const [a, b, c] = winCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function getAiNextMove(squares, aiSign) {
  const win = getWinningPostion(squares, aiSign);
  const playerWin = getPlayerWinningPosition(squares, aiSign);
  const good = getGoodPosition(squares);
  const some = getSomePosition(squares);

  if (win !== null) return win;
  if (playerWin !== null) return playerWin;
  if (good !== null) return good;
  if (some !== null) return some;
}

export function getWinningPostion(squares, aiSign) {
  let nextMove = null;
  for (let i = 0; i < winCombos.length; i++) {
    const [a, b, c] = winCombos[i];
    if (
      (aiSign === squares[a] &&
        (squares[a] === squares[b] || squares[a] === squares[c])) ||
      (aiSign === squares[b] && squares[b] === squares[c])
    ) {
      if (squares[a] === null) {
        nextMove = a;
      } else if (squares[b] === null) {
        nextMove = b;
      } else if (squares[c] === null) {
        nextMove = c;
      }
    }
  }
  return nextMove;
}

export function getPlayerWinningPosition(squares, aiSign) {
  const playerSign = getPlayersSign(aiSign);
  const nextMove = getWinningPostion(squares, playerSign);
  return nextMove;
}
export function getGoodPosition(squares) {
  const goodPositions = [0, 2, 4, 6, 8];
  while (goodPositions.length > 0) {
    const index = Math.floor(Math.random() * goodPositions.length);
    if (squares[goodPositions[index]] === null) {
      return goodPositions[index];
    }
    goodPositions.splice(index, 1);
  }
  return null;
}

function getSomePosition(squares) {
  const emptyPositions = [];
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      emptyPositions.push(i);
    }
  }
  const randomIndex = Math.floor(Math.random() * emptyPositions.length);
  return emptyPositions[randomIndex];
}

function getPlayersSign(aiSign) {
  return aiSign === 'X' ? 'O' : 'X';
}
