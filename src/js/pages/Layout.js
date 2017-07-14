import React from "react";
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import Game from "./Game"
import About from "./About"
import { Route, Switch } from "react-router-dom";

export default class Layout extends React.Component{
  render(){
    return(
      <div class="container">
        <Header/>
        <div class="row">
          <div class="col">

          </div>
          <div class="col">
            <Switch>
              <Route exact path="/" component={Game} />
              <Route path="/About" component={About} />
            </Switch>
          </div>
          <div class="col">

          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
