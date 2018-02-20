import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import injectSheet from 'react-jss';

import TopMenu from './TopMenu';
import { ModeMenu, PlayerMenu } from './Menus';
import Board from './Board';
import { checkWinner } from './game';

const styles = {
  container: {
    width: 330,
    height: 400,
    margin: '50px auto',
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
  };

  changeMode = (response, state) => () => {
    if (response === 'Single' || response === 'Multi') {
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
      squares[i] = this.state.isPlayer1Next
        ? player1Sign
        : this.getPlayer2Sign(player1Sign);
      this.setState(
        {
          squares,
          isPlayer1Next: !this.state.isPlayer1Next,
        },
        () => this.addStat()
      );
    }
  }

  // FIXME: add stat depending on player1Sign and player who actually wins
  addStat() {
    const winner = checkWinner(this.state.squares);
    if (winner) {
      this.setState(prevState => ({
        stats: {
          player1: prevState.stats.player1 + 1,
          player2: prevState.stats.player2,
        },
      }));
    }
  }

  // TODO: Add game ending
  endGame() {}

  render() {
    let content = null;
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

    return (
      <Paper className={this.props.classes.container}>
        <TopMenu stats={this.state.stats} /> {content}
      </Paper>
    );
  }
}

export default injectSheet(styles)(App);
