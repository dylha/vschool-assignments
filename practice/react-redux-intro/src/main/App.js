import React from "react";
import Counter from "./Counter"
import ContactList from "./contacts/ContactList";

function App(props) {
    const style = {
        height: "50%"
    }

    return (
        <div style={style}>
            <Counter/>
            <ContactList/>
        </div>
    )
}

export default App;


// Make a list component
    // get contact list from redux
    // map through list, render a contact componenet for each one

// Make an item component
    // display item info
