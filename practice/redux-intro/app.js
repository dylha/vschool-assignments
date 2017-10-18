const redux = require("redux");

const state = {
    counter: 0
}

const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}

const reducer = (prevState = state, action) => {
    switch(action.type) {
        case "ADD_ONE":
            return {
                counter: prevState.counter + 1
            }
        default:
            return prevState;
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addOne());
