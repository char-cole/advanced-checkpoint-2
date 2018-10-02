import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadBosses, loadBoss } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadBosses:function(){
      dispatch(loadBosses());
    },
    loadBoss:function(){
      dispatch(loadBoss());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
