const redux = require("redux");

const state = {
    counter: 0,
    contactList: []
}

const addName = (name) => {
    return {
        type: "ADD_NAME",
        name
    }
}

const removeName = () => {
    return {
        type: "REMOVE_NAME"
    }
}

const custom = (num) => {
    return {
        type: "CUSTOM",
        num
    }
}

const reset = () => {
    return {
        type: "RESET"
    }
}

const reducer = (prevState = state, action) => {
    switch(action.type) {
        case "RESET":
            return {
                contactList: prevState.contactList,
                counter: prevState.counter = 0
            }

        case "CUSTOM":
            return {
                contactList: prevState.contactList,
                counter: prevState.counter + action.num
            }

        case "ADD_NAME":
            return {
                contactList: [...prevState.contactList, action.name],
                counter: prevState.counter
            }

        case "REMOVE_NAME":
            const newList = [...prevState.contactList];
            newList.shift();
            return {
                contactList: newList,
                counter: prevState.counter
            }

        default:
            return prevState;
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addName("Steve"));
store.dispatch(addName("Stacy"));
store.dispatch(removeName());
