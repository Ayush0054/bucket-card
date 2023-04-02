import React from "react";
import "./card.css";
function Card() {
  return (
    <div className="card">
      <h3>name</h3>
      <iframe
        width="200"
        height="200"
        src="https://www.youtube.com/embed/Ileo0d25lHM"
        title="hi"
      ></iframe>
      <div className="card-button">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}

export default Card;
