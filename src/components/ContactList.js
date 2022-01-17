import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const contacts = [
        {
            id: "1",
            "name": "Demo",
            "email": "demo@gmail.com"
        }
    ];

    const renderContactList = contacts.map((contact) =>{
        return(
            <ContactCard contact={contact} 
            clickHandler={deleteContactHandler}
            key={contact.id} />
        );
    });
    return (
        <div className="main">
            <h2 style={{marginTop:"90px"}}>Contact List <Link to="/add"><button className="ui button blue right">Add Contact</button></Link></h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    
    );
};

export default ContactList;