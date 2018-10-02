import React from "react";
import {Link} from "react-router-dom";

const Boss = (props) => {
    const bossID = props.match.params._id;
    const boss = props.bosses.find(b => b.id == bossID) || {};
    return (
        <div>
            <h1>{boss.name}</h1>
            <ul style={{listStyle:"none"}}>
                    <li>Found in {boss.location}</li>
                    <li>Formed of {boss.body} flesh</li>
                </ul>
                <Link to={"/"}> <i className="fa fa-fw fa-user" />
                  Return 
                </Link>
        </div>
    )
}

export default Boss;