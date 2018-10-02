import { connect } from "react-redux";
import { lookupBoss  } from "../actions";
import Boss from "../components/Boss";

function mapStateToProps(state) {
    return {
      boss: state.boss,
    };
}

function mapDispatchToProps(dispatch){
    return {
      lookup:function(){
          dispatch(lookupBoss());
      }
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Boss);
