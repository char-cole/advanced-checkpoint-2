import React, { Component } from "react";
import "./App.css";
import BossListContainer from "./containers/BossListContainer"

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <BossListContainer />
      </div>
    );
  }
}
export default (App);


