import React from "react";
import {connect} from "react-redux";
import {addOne, subOne, reset, removeContact} from "../redux/actions/index";

function Counter(props) {

    return (
        <div>
            <button onClick={props.subOne}>-</button>
            <span>{props.counter}</span>
            <button onClick={props.addOne}>+</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}


// connect dispatch w/ our action creators
// connect takes action(s). It passes them down to the component via props.
// automatically calls the dispatch when those actions get called

// connect takes two arguments:
// 1. What we want from state
// 2. The set of action creators we want to dispatch from this component

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {addOne, subOne, reset, removeContact})(Counter);
