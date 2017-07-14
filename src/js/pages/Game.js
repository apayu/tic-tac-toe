import React from "react";
import Board from "../components/Game/Board";

export default class Game extends React.Component{

  constructor(){
    super();
    this.state = {
      history:[{
        squares: Array(9).fill(null),
        thisLocation: null,
      }],
      stepNumber: 0,
      xIsNext: true,
      isAsc: true,
      winAry:Array(3).fill(null),
    };

  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    const {xIsNext} = this.state;

    if(calculateWinner(squares) || squares[i]){
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    this.setState({
      history:history.concat([{
        squares:squares,
        thisLocation: i,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });

    //把winner的三個方塊圈出
    const calculaterResult = calculateWinner(squares);
    if(calculaterResult){
      this.setState({
        winAry: calculaterResult.winnerAry,
      });
    }
  }

  handleSort(){
    this.setState({isAsc: !this.state.isAsc});
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      winAry:Array(3).fill(null),
    });
  }

  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const calculaterResult = calculateWinner(current.squares);
    const {isAsc} = this.state;
    const styleBold = {
      fontWeight: "bold",
    };

    let moves;
    moves = history.slice(0, this.state.stepNumber + 1).map((step, move) => {
      const loc = step.thisLocation;
      const desc = move?
        "Move #(" + (loc%3+1) + "," + Math.ceil((loc+1)/3) + ")":
        "Game Start";
      if(move == history.length-1)
      {
        return (
          <li key={move}>
            <a href="#" style={styleBold} onClick={() => this.jumpTo(move)}>{desc}</a>
          </li>
        );
      }
      else
      {
        return (
          <li key={move}>
            <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
          </li>
        );
      }
    });

    if(!isAsc)
    {
      moves = moves.reverse();
    }

    let status;
    if(calculaterResult){
      status = 'winner is:' + calculaterResult.winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return(
      <div>
        <Board squares={current.squares} onClick={this.handleClick.bind(this)} winAry={this.state.winAry} />
        <div>Game Info</div>
        <div><button onClick={this.handleSort.bind(this)}>sort</button></div>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    );
  }

}

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i=0; i< lines.length; i++){
      const [a, b, c] = lines[i].slice();
      if(squares[a] && squares[b]  === squares[c] && squares[a]  === squares[c])
      {
        return {winner: squares[a], winnerAry:[a, b, c]};
      }
    }
    return null;
  }



