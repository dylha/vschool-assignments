import React from "react";
import {connect} from "react-redux";
import Contact from "./Contact";
import {removeContact} from "../../redux/actions/index";

function ContactList(props) {
    return (
        <div>
            {props.contactList.map((contact, i) => {
                return <Contact key={contact.firstName + i} contact={contact}/>
            })};
            <button onClick={props.removeContact}>Remove Contact</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {removeContact})(ContactList);
