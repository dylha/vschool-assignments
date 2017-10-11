import React from "react";

function Sequels(props) {
    return (
        <div>
            <div className="box">
                <h1>There {props.badSequels === 1 ? "Is" : "Are"} <span>{props.badSequels}</span> Bad {props.badSequels === 1 ? "Sequel" : "Sequels"}.</h1>
                <p><i>looking at you George...</i></p>
                <button onClick={props.soManyBadSequels}>Another Unfortunate Sequel</button>
            </div>
        </div>
    )
}

export default Sequels;
