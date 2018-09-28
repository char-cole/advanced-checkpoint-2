import { connect } from "react-redux";
import BossList from "../components/BossList";

function mapStateToProps(state) {
  return {
    bosses: state.bosses
  };
}

export default connect(mapStateToProps)(BossList);
