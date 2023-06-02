import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import "./createcard.css";
import { createCards } from "../../redux/action/cardActions";
function CreateCard() {
  const [card, setCard] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bucketName = queryParams.get("bucketName");
  const navigate = useNavigate();
  const createcard = (e) => {
    // e.preventDefault()
    dispatch(createCards(bucketName, card, name));
    setCard("");
    navigate("/");
    console.log(card, bucketName, name);
  };
  return (
    <form action="/" onSubmit={createcard}>
      <div className="create">
        <h3>enter Name :</h3>
        <input
          type="text"
          className=" create-card-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>enter Video link: </h3>
        <input
          type="text"
          value={card}
          // onChange={handleInputChange}
          onChange={(e) => setCard(e.target.value)}
        />
        <button className="create-card-button">create</button>
      </div>
    </form>
  );
}

export default CreateCard;
