import React from "react";

export default class Square extends React.Component{

  render(){
    let cssStyle = {};
    for(let i=0; i<3; i++)
    {
      if(this.props.winAry[i] == this.props.squareNum)
      {
        cssStyle={fontWeight: "bold",};
      }
    }
    return(
      <button class="square" onClick={ ()=> this.props.onClick()} style={cssStyle}>
        {this.props.value}
      </button>
    );
  }
}
