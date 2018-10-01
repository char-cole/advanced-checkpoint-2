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
   