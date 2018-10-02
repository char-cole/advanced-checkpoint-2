export function loadBosses() {
    return function (dispatch) {
      dispatch({
        type: "BOSSES_BEING_LOADED"
      });
      fetch("/bosses")
      .then( (response) => {
        return response.json();
      }).then((bosses) => {
        dispatch(bossesLoaded(bosses));
      });
    };
}

export function bossesLoaded(bosses) {
    return {
        type: "BOSSES_LOADED",
        value: bosses
    };
}

export function createBoss(boss) {
    return function (dispatch) {
      fetch("/bosses", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(boss)
      }).then(() => dispatch(loadBosses()));
    };
}

export function removeBoss(bossId){
  return function (dispatch) {
    fetch("/bosses", {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bossId)
    }).then(() => dispatch(loadBosses()));
  }
}

export function lookupBoss(boss) {
  return function (dispatch) {
    dispatch({
      type: "BOSS_LOADING"
    });
    fetch("/bosses/" + boss._id,)
    .then( (response) => {
      return response.json();
    }).then((boss) => {
      dispatch(bossLoaded(boss));
    });
  }
}

export function bossLoaded(boss) {
  return {
      type: "BOSS_LOADED",
      value: boss
  };
}