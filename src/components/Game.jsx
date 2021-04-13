import React, { Component } from "react";
import Board from "./Board";
import calculateWinner from "../utils/calculateWinner";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      ascending: true,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step) {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 });
  }
  sortHandleClick() {
    this.setState({
      ascending: !this.state.ascending,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const ascending = this.state.ascending;

    const moves = history.map((step, move) => {
      const desc = move ? "move #" + move : "Go to start";

      return (
        <li key={move}>
          <button
            className={move === this.state.stepNumber ? "btn text-bold" : "btn"}
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner.winner;
    } else if (!current.squares.includes(null)) {
      status = "Game Finished Draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            winner={winner}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            {ascending ? moves : moves.reverse()}
            <li>
              <button
                className="btn btn-sort"
                onClick={() => this.sortHandleClick()}
              >
                Toggle Sort
              </button>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Game;
