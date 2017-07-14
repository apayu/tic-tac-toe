import React from "react";
import { Link } from "react-router-dom"

export default class Header extends React.Component{
  render(){

    return(
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><Link to="/">Home</Link></li>
        <li role="presentation"><Link to="/about">About</Link></li>
      </ul>
    );
  }
}
