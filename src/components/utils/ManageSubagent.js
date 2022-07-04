import React from "react";
import { FaPenAlt, FaTrash } from "react-icons/fa";
import "./Managesubagent.css";

function ManageSubagent({ name, location }) {
  return (
    <div className="managesubagentcontainer">
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="location">
        <span>{location}</span>
      </div>
      <div className="button">
        <button>More info</button>
      </div>
      <div className="update">
        <FaPenAlt className="updateicon" />
        {/* <span>Update</span> */}
      </div>
      <div className="delete">
        <FaTrash className="deleteicon" />
        {/* <span>Delete</span> */}
      </div>
    </div>
  );
}

export default ManageSubagent;
