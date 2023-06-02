import React from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCards } from "../../redux/action/cardActions";
function Card() {
  const { cards } = useSelector((state) => state.cardsData);
  console.log(cards);
  const dispatch = useDispatch();
  const deletecard = (id) => {
    dispatch(deleteCards(id));
    // console.log(id);
  };
  return (
    <div className="main-card">
      {cards && (
        <div className="new-card">
          {cards.map((crd) => {
            //  console.log(bucket);
            return (
              <div className="card" key={crd.id}>
                <h3>{crd.name}</h3>
                <iframe
                  width="200"
                  height="200"
                  src={crd.card}
                  title="hi"
                ></iframe>
                <div className="card-button">
                  <button>edit</button>
                  <button onClick={() => deletecard(crd.id)}>delete</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Card;
