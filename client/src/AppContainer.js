import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadBosses } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadBosses:function(){
      dispatch(loadBosses());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
