// import React from "react";
import user from "../Images/user.png";
// import { Link } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const { removeContactHandler } = useContactsCrud();

  const deleteContact = (id) => {
    removeContactHandler(id);
  };

  return (
    <div className="item" >
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>

        
      </div>
      <div style={{paddingLeft:"90%"}}>
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>

      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginTop: "7px",
          marginLeft: "10px",
          
        }}
        onClick={() => deleteContact(id)}
      ></i>
      
      </div>
    </div>
  );
};

export default ContactCard;
