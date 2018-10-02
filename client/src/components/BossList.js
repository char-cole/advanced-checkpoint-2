import React from "react";
import {Link} from "react-router-dom";

const BossList = (props) => {
    let bosses = props.bosses;
    
    let bossDivs = bosses.map(boss => {
        return (
            <div>
                <h3>{boss.name}</h3>
                <ul style={{listStyle:"none"}}>
                    <li>Found in {boss.location}</li>
                    <li>Formed of {boss.body} flesh</li>
                </ul>
                <Link to={"/bosses/" + boss._id}> <i className="fa fa-fw fa-user" />
                  Examine boss 
                </Link>
                <button >Delete</button>
            </div>
        )
    });

    return (
        <div>
            <h1>Bloodborne Bosses</h1>
            <ul>{bossDivs}</ul>
        </div>
    )
}

export default BossList;