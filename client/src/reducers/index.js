import {combineReducers} from "redux";

function bosses(state=[], action){
  if (action.type === "BOSSES_LOADED"){
    return action.value;
  }
  if(action.type === "ADD_BOSS"){
    return [...state,action.value];
  }
  if(action.type === "REMOVE_BOSS"){
    return state.slice(1);
  }
  return state;
}

const rootReducer = combineReducers({
  bosses
});

export default rootReducer;
