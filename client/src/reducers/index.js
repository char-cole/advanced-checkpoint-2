import {combineReducers} from "redux";

function bosses(state = [], action) { 
  if (action.type === "BOSSES_LOADED"){
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  bosses
});

export default rootReducer;
