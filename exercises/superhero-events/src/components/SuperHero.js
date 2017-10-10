import React from "react";

function SuperHero(props) {
    return (
        <div>
            <div className="heroBox">
                <h1>{props.hero.name}</h1>
                <h2>{props.hero.power}</h2>
                <img src={props.hero.img} alt="" onClick={(e) => props.handleClick(props.hero.phrase)}/>
            </div>
        </div>
    )
}


export default SuperHero;
