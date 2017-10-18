import React from "react";

function Contact(props) {
    const style = {
        width: "15%",
        border: "1px solid black",
        padding: "8px",
        margin: "5px",
        borderRadius: "20%",
    }

    return (
        <div style={style}>
            <h3>{props.contact.firstName}</h3>
            <h5>{props.contact.lastName}</h5>
            <p>{props.contact.phone}</p>
        </div>
    )
}

export default Contact;
