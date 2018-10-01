import React from "react";

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
                <button onClick={props.removeBoss(boss._id)}>Delete</button>
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