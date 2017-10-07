import React from 'react';

function Cards(props) {
    return (
        <div className="container">
            <div className="card">
                <h1 className="cardName">{`${props.name}`}</h1>
                <h2 className="cardNum">{`${props.num}`}</h2>
                <img src={`${props.img}`} alt="" className="per-img"/>
            </div>
        </div>
    )
}

export default Cards;
