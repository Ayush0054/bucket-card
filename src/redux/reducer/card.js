import {
  CREATE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  GET_CARD,
  MOVE_CARD,
} from "../constant/constant";

const INITIAL_CARDS_STATE = {
  cards: [],
};
const cardsReducer = (state = INITIAL_CARDS_STATE, action) => {
  switch (action.type) {
    case GET_CARD:
      return {
        ...state,
        cards: payload,
      };
    case CREATE_CARD:
      return {
        ...state,
        [action.payload.bucketId]: [
          ...state[action.payload.bucketId],
          action.payload.card,
        ],
      };
    case DELETE_CARD:
      return {
        ...state,
        [action.payload.bucketId]: state[action.payload.bucketId].filter(
          (card) => card.id !== action.payload.cardId
        ),
      };
    case EDIT_CARD:
      return {
        ...state,
        [action.payload.bucketId]: state[action.payload.bucketId].map((card) =>
          card.id === action.payload.cardId
            ? { ...card, ...action.payload.card }
            : card
        ),
      };
    case MOVE_CARD:
      const { sourceBucketId, destinationBucketId, cardId } = action.payload;
      const card = state[sourceBucketId].find((card) => card.id === cardId);
      return {
        ...state,
        [sourceBucketId]: state[sourceBucketId].filter(
          (card) => card.id !== cardId
        ),
        [destinationBucketId]: [...state[destinationBucketId], card],
      };
    default:
      return state;
  }
};

export default cardsReducer;
