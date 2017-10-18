const state = {
    counter: 0,
    contactList: [
        {
            firstName: "Ben",
            lastName: "Turner",
            phone: "555-555-5555"
        },
        {
            firstName: "Nonnie",
            lastName: "Martin",
            phone: "123-456-7890"
        },
        {
            firstName: "Cookie",
            lastName: "Monster",
            phone: "098-765-4321"
        }
    ]
}

const reducer = (prevState = state, action) => {
    switch(action.type) {
        case "RESET":
            return {
                counter: prevState.counter = 0,
                contactList: prevState.contactList
            }
        case "ADD_ONE":
            return {
                counter: prevState.counter + 1,
                contactList: prevState.contactList
            }
        case "SUB_ONE":
            return {
                counter: prevState.counter - 1 < 0 ? prevState.counter : prevState.counter - 1,
                contactList: prevState.contactList
            }
        case "REMOVE_CONTACT":
            const newList = [...prevState.contactList]
            newList.shift()
            return {
                counter: prevState.counter,
                contactList: newList
            }
        default:
            return prevState
    }
}

export default reducer;
