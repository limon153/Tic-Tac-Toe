import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';

import TopMenu from './TopMenu';
import { ModeMenu, PlayerMenu } from './Menus';
import Board from './Board';
import { checkWinner, getAiNextMove } from './game';

const styles = {
  container: {
    width: 330,
    height: 400,
    margin: '50px auto',
    position: 'relative',
  },
  snackbar: {
    position: 'absolute',
    overflow: 'hidden',
  },
};

class App extends Component {
  state = {
    squares: Array(9).fill(null),
    isPlayer1Next: true,
    stats: {
      player1: 0,
      player2: 0,
    },
    gameState: 'chooseMode',
    gameMode: 'single',
    player1Sign: 'X',
    winSnackbarOpen: false,
    winner: 'draw',
    openResetDialog: false,
  };

  changeMode = (response, state) => () => {
    if (response === 'single' || response === 'multi') {
      this.setState({
        gameState: state,
        gameMode: response,
      });
    } else if (response === 'X' || response === 'O') {
      this.setState({
        gameState: state,
        player1Sign: response,
      });
    }
  };

  getPlayer2Sign(player1Sign) {
    return player1Sign === 'X' ? 'O' : 'X';
  }

  handleMove(i) {
    const squares = this.state.squares.slice();
    const player1Sign = this.state.player1Sign;
    if (!squares[i]) {
      if (this.state.gameMode === 'single') {
        if (this.state.isPlayer1Next) {
          squares[i] = player1Sign;
          this.move(squares).then(v => {
            if (squares.indexOf(null) === -1) {
              return this.endGame();
            }
            return this.botMove();
          });
        }
      } else {
        squares[i] = this.state.isPlayer1Next
          ? player1Sign
          : this.getPlayer2Sign(player1Sign);
        this.move(squares).then(v => {
          return this.endGame();
        });
      }
    }
  }

  move(squares) {
    return new Promise((resolve, reject) => {
      this.setState(() => ({
        squares,
        isPlayer1Next: !this.state.isPlayer1Next,
      }));
      resolve();
    });
  }

  botMove() {
    const aiSign = this.getPlayer2Sign(this.state.player1Sign);
    const squares = this.state.squares.slice();
    if (squares.indexOf(null) !== -1) {
      const aiPos = getAiNextMove(squares, aiSign);
      squares[aiPos] = aiSign;
      setTimeout(() => {
        this.move(squares).then(v => {
          return this.endGame();
        });
      }, 500);
    }
  }

  addStat(winner) {
    let firstPlayerScores;
    let secondPlayerScores;
    if (winner === this.state.player1Sign) {
      firstPlayerScores = 1;
      secondPlayerScores = 0;
    } else {
      firstPlayerScores = 0;
      secondPlayerScores = 1;
    }
    this.addScores(firstPlayerScores, secondPlayerScores);
  }

  addScores(firstPlayerScores, secondPlayerScores) {
    this.setState(prevState => ({
      stats: {
        player1: prevState.stats.player1 + firstPlayerScores,
        player2: prevState.stats.player2 + secondPlayerScores,
      },
    }));
  }

  endGame() {
    const winnerSign = checkWinner(this.state.squares);
    const isDraw = this.checkDraw(this.state.squares);
    const { player1Sign } = this.state;
    let winner;
    if (winnerSign === player1Sign) {
      winner = 'player1';
    } else if (winnerSign !== null) {
      winner = 'player2';
    } else if (isDraw) {
      winner = 'draw';
    }
    if (winnerSign || isDraw) {
      this.setState({
        squares: Array(9).fill(null),
        isPlayer1Next: true,
        winner,
        winSnackbarOpen: true,
      });
      if (winnerSign) {
        this.addStat(winnerSign);
      }
    }
  }

  checkDraw(squares) {
    if (squares.indexOf(null) === -1) return true;
    return false;
  }

  openResetDialog = () => {
    this.setState({
      openResetDialog: true,
    });
  };

  closeResetDialog = () => {
    this.setState({
      openResetDialog: false,
    });
  };

  reset = () => {
    this.setState({
      squares: Array(9).fill(null),
      isPlayer1Next: true,
      stats: {
        player1: 0,
        player2: 0,
      },
      gameState: 'chooseMode',
      gameMode: 'single',
      player1Sign: 'X',
      winSnackbarOpen: false,
      winner: 'draw',
      openResetDialog: false,
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      winSnackbarOpen: false,
    });
  };

  render() {
    let content = null;
    let snackBarMessage;
    if (this.state.gameState === 'game') {
      content = (
        <Board
          handleClick={i => this.handleMove(i)}
          squares={this.state.squares}
          isPlayer1Next={this.state.isPlayer1Next}
        />
      );
    } else if (this.state.gameState === 'chooseMode') {
      content = <ModeMenu changeMode={this.changeMode} />;
    } else if (this.state.gameState === 'choosePlayer') {
      content = <PlayerMenu changeMode={this.changeMode} />;
    }

    switch (this.state.winner) {
      case 'player1':
        snackBarMessage = 'Player 1 wins';
        break;
      case 'player2':
        snackBarMessage = 'Player 2 wins';
        break;
      case 'draw':
        snackBarMessage = "It's a draw";
        break;
      default:
        break;
    }

    return (
      <Paper className={this.props.classes.container}>
        <TopMenu
          isPlayer1Next={this.state.isPlayer1Next}
          handleReset={this.openResetDialog}
          handleCloseDialog={this.closeResetDialog}
          openResetDialog={this.state.openResetDialog}
          resetAction={this.reset}
          stats={this.state.stats}
          gameState={this.state.gameState}
          gameMode={this.state.gameMode}
        />
        {content}
        <Snackbar
          className={this.props.classes.snackbar}
          message={<span>{snackBarMessage}</span>}
          open={this.state.winSnackbarOpen}
          autoHideDuration={1500}
          onClose={this.handleCloseSnackbar}
          action={[
            <Button
              key="dismiss"
              color="secondary"
              size="small"
              onClick={this.handleCloseSnackbar}
            >
              Dismiss
            </Button>,
          ]}
        />
      </Paper>
    );
  }
}

export default injectSheet(styles)(App);
