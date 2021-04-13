import React, { Component } from "react";
import Square from "./Square";
const totalRows = 3;
const squaresPerRow = 3;

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        winnerLine={this.props.winner}
        id={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRow(row) {
    const squares = [];
    const offset = row * squaresPerRow; // this makes sure first row is 0,1,2, second row is 3,4,5, etc.
    for (let s = 0; s < squaresPerRow; s++) {
      squares.push(this.renderSquare(offset + s));
    }
    return (
      <div key={row} className="board-row">
        {squares}
      </div>
    );
  }

  render() {
    const rows = [];
    for (let r = 0; r < totalRows; r++) {
      rows.push(this.renderRow(r));
    }
    return <div>{rows}</div>;
  }
}
export default Board;
