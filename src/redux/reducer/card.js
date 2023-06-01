import {
  CREATE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  GET_CARD,
  MOVE_CARD,
} from "../constant/constant";

// ... Import action constants

const INITIAL_CARDS_STATE = {
  cards: [],
};

const cardsReducer = (state = INITIAL_CARDS_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CARD:
      return {
        ...state,
        cards: payload,
      };
    case CREATE_CARD:
      return {
        ...state,
        cards: [...state.cards, payload],
      };

    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: {
          ...state.cards,
          [payload.bucketId]: state.cards[payload.bucketId].map((card) =>
            card.id === payload.cardId ? { ...card, ...payload.card } : card
          ),
        },
      };
    case MOVE_CARD:
    // ... Move card logic
    default:
      return state;
  }
};

export default cardsReducer;
