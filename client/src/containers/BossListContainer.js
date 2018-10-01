import { connect } from "react-redux";
import { removeBoss  } from "../actions";
import BossList from "../components/BossList";

function mapStateToProps(state) {
  return {
    bosses: state.bosses,
  };
}

function mapDispatchToProps(dispatch){
  return {
    remove:function(){
        dispatch(removeBoss());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BossList);
