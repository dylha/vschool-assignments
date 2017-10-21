import React from "react";
import redux from "redux";

class Time extends React.Component {
    return (
        <div>
            <span>{time}</span>
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>
    )
}


export default Time;
