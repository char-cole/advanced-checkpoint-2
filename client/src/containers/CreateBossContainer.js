import { connect } from "react-redux";
import CreateBoss from "../components/CreateBoss";
import {createBoss} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createBoss: function (boss) {
      dispatch(createBoss(boss));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateBoss);