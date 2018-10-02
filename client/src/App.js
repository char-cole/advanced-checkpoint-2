import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main"
import BossContainer from "./containers/BossContainer"

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {bosses: []};
  }
  componentDidMount() {
    this.props.loadBosses();
    this.props.loadboss();
  }
  render() {
    return (
      <BrowserRouter>
        <div style={{padding: "10px 30px"}}>
          <Switch>
            <Route path="/bosses/:bossId" component={BossContainer}/>
            <Route path="/" component={Main}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);


