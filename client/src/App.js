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
      <div style={{padding: "10px 30px"}}>
          <div style={{float: "left", width: "49%"}}>
            <BossListContainer />
          </div>
          <div style={{float: "left", width: "49%"}}>
            <CreateBossContainer />
          </div>
      </div>
    );
  }
}
export default (App);


