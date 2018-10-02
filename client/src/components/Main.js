import React, { Component } from "react";
import BossListContainer from "../containers/BossListContainer";
import CreateBossContainer from "../containers/CreateBossContainer";

class Main extends Component {
    render () {
        return(
            <div>
                <div style={{float: "left", width: "49%"}}>
                    <BossListContainer />
                </div>
                <div style={{float: "left", width: "49%"}}>
                   <CreateBossContainer />
                </div>
            </div>
        )
    }
}


export default Main;