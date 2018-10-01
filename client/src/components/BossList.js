import React from "react";

const BossList = (props) => {
    let bosses = props.bosses;
    
    let bossDivs = bosses.map(boss => {
        return (
            <div>
                <h3>{boss.name}</h3>
                <ul>
                    <li>{boss.location}</li>
                    <li>{boss.health} HP | {boss.echoes} blood echoes</li>
                </ul>
                <button>Delete</button>
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