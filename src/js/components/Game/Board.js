import React from "react";
import Square from "./Square";

export default class Board extends React.Component {

  render(){
    const rowSquares = [[0,1,2],[3,4,5],[6,7,8]];
    const listItems = rowSquares.map((squares, index) =>
      <div key={index} class="board-row">
      {
        squares.map((squareNum) =>
          <Square key={squareNum} value={this.props.squares[squareNum]} onClick={()=>this.props.onClick(squareNum)} winAry={this.props.winAry} squareNum={squareNum} />
        )
      }
      </div>
    );
    return(
      <div>
      {listItems}
      </div>
    );
  }
}
