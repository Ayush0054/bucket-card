import React from "react";
import "./createcard.css";
function CreateCard() {
  return (
    <form action="">
      <div className="create">
        <h3>enter Name :</h3>
        <input type="text" className=" create-card-input" />
        <h3>enter Video link: </h3>
        <input type="text" />
        <button className="create-card-button">create</button>
      </div>
    </form>
  );
}

export default CreateCard;
