import React, { Component } from "react";
import "./App.css";
import BossListContainer from "./containers/BossListContainer";
import CreateBossContainer from "./containers/CreateBossContainer";
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

  }
  render() {
    return (
      <div>
        <BossListContainer />
        <CreateBossContainer />
      </div>
    );
  }
}
export default (App);


